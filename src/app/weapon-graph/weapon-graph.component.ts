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

import type Weapon from 'src/services/weapon/Weapon';
import { WeaponComponent } from '../weapon/weapon.component';
import WeaponGraph from 'src/services/weapon/WeaponGraph';
import type WeaponName from 'src/services/weapon/WeaponName';
import type WeaponNameByType from 'src/services/weapon/WeaponNameByType';

@Component({
  selector: 'app-weapon-graph',
  templateUrl: './weapon-graph.component.html',
  styleUrls: ['./weapon-graph.component.scss'],
})
export class WeaponGraphComponent<T extends WeaponName>
  implements AfterViewInit, OnChanges
{
  @HostBinding('style.grid-template-columns') get gridTemplateColumns() {
    const columns = Math.max(...this.weaponsMatrix.map((row) => row.length));
    return `repeat(${columns}, 1fr)`;
  }
  @HostBinding('style.grid-template-rows') get gridTemplateRows() {
    const rows = this.weaponsMatrix.length;
    return `repeat(${rows}, 1fr)`;
  }
  @Input({ required: true }) weaponGraph!: Readonly<WeaponGraph<T>>;
  @ViewChildren(WeaponComponent, { read: ElementRef })
  children!: QueryList<ElementRef>;

  edges = new Set<[HTMLElement, HTMLElement]>();
  weaponsByName = new Map<WeaponNameByType[T], Weapon<T>>();
  weaponElementsByName = new Map<WeaponNameByType[T], HTMLElement>();
  weaponsMatrix: Array<Array<Weapon<T>>> = [];

  ngOnChanges() {
    this.buildWeaponsByName();
    this.buildWeaponsMatrix();
  }

  ngAfterViewInit() {
    this.buildWeaponElementsByName();
    this.buildEdges();
  }

  buildEdges() {
    this.weaponGraph.vertices.forEach((weapon) => {
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
      const weaponElement = child.nativeElement.children[0];
      this.weaponElementsByName.set(weaponElement.innerText, weaponElement);
    });
  }

  buildWeaponsByName() {
    this.weaponGraph.vertices.forEach((weapon) => {
      this.weaponsByName.set(weapon.name, weapon);
    });
  }

  buildWeaponsMatrix() {
    this.weaponGraph.vertices.forEach((weapon) => {
      const distanceFromTerminal =
        this.weaponGraph.getVertexDistanceFromTerminal(weapon);
      if (this.weaponsMatrix[distanceFromTerminal] === undefined) {
        this.weaponsMatrix[distanceFromTerminal] = [];
      }

      this.weaponsMatrix[distanceFromTerminal].push(weapon);
    });
  }
}
