import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  QueryList,
  ViewChildren,
} from '@angular/core';

import countInversions from '../utilities/countInversions';
import type Weapon from 'src/services/weapon/Weapon';
import { WeaponComponent } from '../weapon/weapon.component';
import type WeaponGraph from 'src/services/graphs/WeaponGraph';
import type WeaponType from 'src/services/weapon/WeaponType';
import type WeaponNameByType from 'src/services/weapon/WeaponNameByType';

@Component({
  selector: 'app-weapon-graph',
  templateUrl: './weapon-graph.component.html',
  styleUrls: ['./weapon-graph.component.scss'],
})
export class WeaponGraphComponent<T extends WeaponType>
  implements AfterViewInit, OnChanges
{
  @HostBinding('style.grid-template-columns') get columns() {
    const columns = Math.max(...this.weaponMatrix.map((row) => row.length));
    return `repeat(${columns}, 1fr)`;
  }

  @HostBinding('style.grid-template-rows') get rows() {
    const rows = this.weaponMatrix.length;
    return `repeat(${rows}, 1fr)`;
  }

  @Input({ required: true }) weaponGraph!: Readonly<WeaponGraph<T>>;

  @ViewChildren(WeaponComponent, { read: ElementRef })
  children!: QueryList<ElementRef>;

  edges = new Set<[HTMLElement, HTMLElement]>();
  weaponElementsByName = new Map<WeaponNameByType[T], HTMLElement>();
  weaponMatrix: Array<Array<Weapon<T>>> = [];

  ngOnChanges() {
    this.buildWeaponMatrix();
  }

  ngAfterViewInit() {
    this.buildWeaponElementsByName();
    this.buildEdges();
  }

  buildEdges() {
    this.weaponGraph.vertices.forEach((value, weapon) => {
      const weaponElement = this.weaponElementsByName.get(weapon.name);

      if (weaponElement === undefined) {
        throw Error(`No element for weapon with name ${weapon.name} exists.`);
      }

      weapon.buildsUpInto.forEach((buildUpWeapon) => {
        const buildUpElement = this.weaponElementsByName.get(
          buildUpWeapon.name
        );

        if (buildUpElement === undefined) {
          throw Error(`No element for weapon with name ${weapon.name} exists.`);
        }

        this.edges.add([weaponElement, buildUpElement]);
      });
    });
  }

  buildWeaponElementsByName() {
    this.children.forEach((child) => {
      const weaponElement = child.nativeElement;
      this.weaponElementsByName.set(weaponElement.innerText, weaponElement);
    });
  }

  buildWeaponMatrix() {
    let matrix: Array<Array<Weapon<T>>> = [];

    this.weaponGraph.vertices.forEach((vertex, weapon) => {
      const depth = this.weaponGraph.getWeaponLongestDistanceFromLeaf(weapon);

      if (matrix[depth] === undefined) {
        matrix[depth] = [];
      }

      matrix[depth].push(weapon);
    });

    matrix.reverse();

    let forgiveness = 2000;
    let lowestIntersections = this.getTotalNumberOfIntersections(matrix);

    while (forgiveness > 0) {
      const tempMatrix = matrix.map((row) => row.slice());

      for (let i = 0; i < matrix.length - 1; i++) {
        const currentRow = tempMatrix[i];
        const nextRow = tempMatrix[i + 1];

        nextRow.sort((a, b) => {
          const aParentIndices: number[] = [];
          const bParentIndices: number[] = [];

          for (let i = 0; i < currentRow.length; i++) {
            const currentWeapon = currentRow[i];

            if (currentWeapon.buildsUpInto.has(a)) {
              aParentIndices.push(i);
            }

            if (currentWeapon.buildsUpInto.has(b)) {
              bParentIndices.push(i);
            }
          }

          const aBaryCenterAverage = aParentIndices.reduce(
            (average, current, index, { length }) =>
              (average + current) / length,
            0
          );

          const bBaryCenterAverage = bParentIndices.reduce(
            (average, current, index, { length }) =>
              (average + current) / length,
            0
          );

          if (aBaryCenterAverage === bBaryCenterAverage) {
            if (Math.random() < 0.5) {
              return 1;
            }
          }

          return aBaryCenterAverage - bBaryCenterAverage;
        });
      }

      for (let i = tempMatrix.length - 1; i >= 0; i--) {
        const currentRow = tempMatrix[i];
        const nextRow = tempMatrix[i - i];

        nextRow.sort((a, b) => {
          const aChildIndices: number[] = [];
          const bChildIndices: number[] = [];

          for (let i = 0; i < currentRow.length; i++) {
            const currentWeapon = currentRow[i];
            if (a.buildsUpInto.has(currentWeapon)) {
              aChildIndices.push(i);
            }

            if (b.buildsUpInto.has(currentWeapon)) {
              bChildIndices.push(i);
            }
          }

          const aBaryCenterAverage = aChildIndices.reduce(
            (average, current, index, { length }) =>
              (average + current) / length,
            0
          );

          const bBaryCenterAverage = bChildIndices.reduce(
            (average, current, index, { length }) =>
              (average + current) / length,
            0
          );

          if (aBaryCenterAverage === bBaryCenterAverage) {
            if (Math.random() < 0.5) {
              return 1;
            }
          }

          return aBaryCenterAverage - bBaryCenterAverage;
        });
      }

      const numberOfIntersections =
        this.getTotalNumberOfIntersections(tempMatrix);

      if (numberOfIntersections < lowestIntersections) {
        lowestIntersections = numberOfIntersections;
        matrix = tempMatrix;
      } else {
        forgiveness--;
      }
    }

    console.log(this.getTotalNumberOfIntersections(matrix));

    this.weaponMatrix = matrix;
  }

  getTotalNumberOfIntersections(matrix: Array<Array<Weapon<T>>>) {
    let totalIntersections = 0;

    for (let i = 0; i < matrix.length - 1; i++) {
      const currentRow = matrix[i];
      const nextRow = matrix[i + 1];

      const edges: Array<[number, number]> = [];

      currentRow.forEach(({ buildsUpInto }, sourceIndex) => {
        buildsUpInto.forEach((weapon) => {
          edges.push([sourceIndex, nextRow.indexOf(weapon)]);
        });
      });

      edges.sort(([a1, a2], [b1, b2]) => {
        return a1 === b1 ? a2 - b2 : a1 - b1;
      });

      const edgeCoordinates = edges.map((edge) => edge[1]);

      totalIntersections += countInversions(edgeCoordinates);
    }

    return totalIntersections;
  }
}
