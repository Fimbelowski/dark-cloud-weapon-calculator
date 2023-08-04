import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  QueryList,
  type Signal,
  signal,
  ViewChildren,
  type WritableSignal,
  ChangeDetectorRef,
} from '@angular/core';

import arrayAverage from '../utilities/arrayAverage';
import countInversions from '../utilities/countInversions';
import heapsAlgorithm from '../utilities/heapsAlgorithm';
import shuffleArray from '../utilities/shuffleArray';
import type Weapon from 'src/services/weapon/Weapon';
import { WeaponComponent } from '../weapon/weapon.component';
import type WeaponGraph from 'src/services/graphs/WeaponGraph';
import type WeaponType from 'src/services/weapon/WeaponType';
import type WeaponNameByType from 'src/services/weapon/WeaponNameByType';

type SweepDirection = 'down' | 'up';

@Component({
  selector: 'app-weapon-graph',
  templateUrl: './weapon-graph.component.html',
  styleUrls: ['./weapon-graph.component.scss'],
})
export class WeaponGraphComponent<T extends WeaponType>
  implements AfterViewInit, OnChanges
{
  constructor(private cd: ChangeDetectorRef) {}

  @Input({ required: true }) weaponGraph!: Readonly<WeaponGraph<T>>;

  @HostBinding('style.grid-template-columns') get columns() {
    const columns = Math.max(...this.weaponMatrix.map((row) => row.length));
    return `repeat(${columns}, 1fr)`;
  }

  @HostBinding('style.grid-template-rows') get rows() {
    const rows = this.weaponMatrix.length;
    return `repeat(${rows}, 1fr)`;
  }

  @ViewChildren(WeaponComponent, { read: ElementRef })
  children!: QueryList<ElementRef>;

  edges = new Map<HTMLElement, Set<HTMLElement>>();
  weaponMatrix: Array<Array<Weapon<T>>> = [];
  weaponElementsByName = new Map<WeaponNameByType[T], HTMLElement>();

  destinationWeapon: WritableSignal<Weapon<T> | undefined> = signal(undefined);
  sourceWeapon: WritableSignal<Weapon<T> | undefined> = signal(undefined);
  sourceOrDestinationToSetNext: 'destination' | 'source' = 'source';

  weaponsOnBuildUpPath: Signal<Set<Weapon<T>>> = computed(() => {
    const destinations = new Set<Weapon<T>>();

    const sourceWeapon = this.sourceWeapon();

    if (sourceWeapon !== undefined) {
      destinations.add(sourceWeapon);
      this.weaponGraph
        .getWeaponDescendants(sourceWeapon)
        .forEach((descendant) => {
          destinations.add(descendant);
        });
    }

    return destinations;
  });

  edgesOnBuildUpPath: Signal<Map<HTMLElement, Set<HTMLElement>>> = computed(
    () => {
      const edgesOnBuildUpPath = new Map<HTMLElement, Set<HTMLElement>>();

      this.weaponsOnBuildUpPath().forEach((weapon) => {
        const weaponElement = this.getWeaponElementByName(weapon.name);

        if (!edgesOnBuildUpPath.has(weaponElement)) {
          edgesOnBuildUpPath.set(weaponElement, new Set());
        }

        weapon.buildsUpInto.forEach((buildUpWeapon) => {
          const buildUpWeaponElement = this.getWeaponElementByName(
            buildUpWeapon.name
          );

          edgesOnBuildUpPath.get(weaponElement)?.add(buildUpWeaponElement);
        });
      });

      return edgesOnBuildUpPath;
    }
  );

  ngOnChanges() {
    this.buildWeaponMatrix();
  }

  ngAfterViewInit() {
    this.buildWeaponElementsByName();
    this.buildEdges();

    this.cd.detectChanges();
  }

  buildEdges() {
    this.weaponGraph.vertices.forEach(({ data: { buildsUpInto, name } }) => {
      const weaponElement = this.getWeaponElementByName(name);

      if (!this.edges.has(weaponElement)) {
        this.edges.set(weaponElement, new Set());
      }

      buildsUpInto.forEach(({ name }) => {
        const buildUpWeaponElement = this.getWeaponElementByName(name);
        this.edges.get(weaponElement)?.add(buildUpWeaponElement);
      });
    });
  }

  buildWeaponElementsByName() {
    const flatMatrix = this.weaponMatrix.flat();
    this.children.forEach((child, index) => {
      const weaponElement = child.nativeElement;
      this.weaponElementsByName.set(flatMatrix[index].name, weaponElement);
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

    let sweep = 1;
    let forgiveness = 10;
    let lowestGlobalIntersections = this.getTotalNumberOfIntersections(matrix);

    while (forgiveness > 0) {
      const tempMatrix = matrix.map((row) => row.slice());

      const sweepDirection: SweepDirection = sweep % 2 === 0 ? 'down' : 'up';
      const delta = sweepDirection === 'down' ? 1 : -1;

      let totalSweepIntersections = 0;

      for (
        let i = sweepDirection === 'down' ? 0 : tempMatrix.length - 1;
        sweepDirection === 'down' ? i < tempMatrix.length - 1 : i > 0;
        i += delta
      ) {
        const fixedRow = tempMatrix[i];
        let mutableRow = tempMatrix[i + delta];

        const heuristicFunction =
          mutableRow.length <= 6
            ? this.optimizeIntersectionsByPermutation.bind(this)
            : this.optimizeIntersectionsByBarycenter;

        mutableRow = heuristicFunction(fixedRow, mutableRow, sweepDirection);
        tempMatrix[i + delta] = mutableRow;

        totalSweepIntersections += this.getIntersectionsBetweenRows(
          sweepDirection === 'down' ? fixedRow : mutableRow,
          sweepDirection === 'down' ? mutableRow : fixedRow
        );
      }

      if (totalSweepIntersections < lowestGlobalIntersections) {
        lowestGlobalIntersections = totalSweepIntersections;
        matrix = tempMatrix;
      } else {
        forgiveness--;
      }

      sweep += 2;
    }

    this.weaponMatrix = matrix;
  }

  getIntersectionsBetweenRows(
    upperRow: Array<Weapon<T>>,
    lowerRow: Array<Weapon<T>>
  ) {
    const edges: Array<[number, number]> = [];

    upperRow.forEach(({ buildsUpInto }, sourceIndex) => {
      buildsUpInto.forEach((buildUpWeapon) => {
        edges.push([sourceIndex, lowerRow.indexOf(buildUpWeapon)]);
      });
    });

    edges.sort(([a1, a2], [b1, b2]) => (a1 === b1 ? a2 - b2 : a1 - b1));

    const bCoordinates = edges.map(([, b]) => b);

    return countInversions(bCoordinates);
  }

  getTotalNumberOfIntersections(matrix: Array<Array<Weapon<T>>>) {
    let totalIntersections = 0;

    for (let i = 0; i < matrix.length - 1; i++) {
      totalIntersections += this.getIntersectionsBetweenRows(
        matrix[i],
        matrix[i + 1]
      );
    }

    return totalIntersections;
  }

  getWeaponElementByName(name: WeaponNameByType[T]) {
    const element = this.weaponElementsByName.get(name);

    if (element === undefined) {
      throw Error(`Element not found for weapon "${name}"`);
    }

    return element;
  }

  isEdgeOnBuildUpPath(from: HTMLElement, to: HTMLElement) {
    if (this.sourceWeapon() === undefined) {
      return true;
    }

    return this.edgesOnBuildUpPath().get(from)?.has(to) ?? false;
  }

  isWeaponOnBuildUpPath(weapon: Weapon<T>) {
    if (this.sourceWeapon() === undefined) {
      return true;
    }

    return this.weaponsOnBuildUpPath().has(weapon);
  }

  onWeaponClick(weapon: Weapon<T>) {
    if (
      this.sourceWeapon() === undefined ||
      !this.isWeaponOnBuildUpPath(weapon)
    ) {
      this.sourceWeapon.set(weapon);
      this.destinationWeapon.set(weapon);
      this.sourceOrDestinationToSetNext = 'destination';
      return;
    }

    if (this.sourceOrDestinationToSetNext === 'source') {
      this.sourceWeapon.set(weapon);
      this.sourceOrDestinationToSetNext = 'destination';
      return;
    }

    this.destinationWeapon.set(weapon);
    this.sourceOrDestinationToSetNext = 'source';
  }

  optimizeIntersectionsByBarycenter(
    fixedRow: Array<Weapon<T>>,
    mutableRow: Array<Weapon<T>>,
    sweepDirection: SweepDirection
  ) {
    const tempMutableRow = mutableRow.slice();

    tempMutableRow.sort((a, b) => {
      const aAdjacentIndices: number[] = [];
      const bAdjacentIndices: number[] = [];

      for (let i = 0; i < fixedRow.length; i++) {
        const fixedRowWeapon = fixedRow[i];

        if (sweepDirection === 'down') {
          if (fixedRowWeapon.buildsUpInto.has(a)) {
            aAdjacentIndices.push(i);
          }

          if (fixedRowWeapon.buildsUpInto.has(b)) {
            bAdjacentIndices.push(i);
          }
        } else {
          if (a.buildsUpInto.has(fixedRowWeapon)) {
            aAdjacentIndices.push(i);
          }

          if (b.buildsUpInto.has(fixedRowWeapon)) {
            bAdjacentIndices.push(i);
          }
        }
      }

      const aBaryCenterAverage = arrayAverage(aAdjacentIndices);
      const bBaryCenterAverage = arrayAverage(bAdjacentIndices);

      if (aBaryCenterAverage === bBaryCenterAverage) {
        if (Math.random() < 0.5) {
          return 1;
        }
      }

      return aBaryCenterAverage - bBaryCenterAverage;
    });

    return tempMutableRow;
  }

  optimizeIntersectionsByPermutation(
    fixedRow: Array<Weapon<T>>,
    mutableRow: Array<Weapon<T>>,
    sweepDirection: SweepDirection
  ) {
    const shuffledMutableRow = shuffleArray(mutableRow);

    let minIntersections = this.getIntersectionsBetweenRows(
      sweepDirection === 'down' ? fixedRow : shuffledMutableRow,
      sweepDirection === 'down' ? shuffledMutableRow : fixedRow
    );
    let bestPermutation = shuffledMutableRow;

    const mutableRowPermutations = heapsAlgorithm(shuffledMutableRow.slice());
    mutableRowPermutations.forEach((permutation) => {
      const permutationIntersections = this.getIntersectionsBetweenRows(
        sweepDirection === 'down' ? fixedRow : permutation,
        sweepDirection === 'down' ? permutation : fixedRow
      );

      if (permutationIntersections < minIntersections) {
        minIntersections = permutationIntersections;
        bestPermutation = permutation;
      } else if (permutationIntersections === minIntersections) {
        if (Math.random() < 0.5) {
          bestPermutation = permutation;
        }
      }
    });

    return bestPermutation;
  }
}
