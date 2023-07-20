import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChildren,
} from '@angular/core';

import { WeaponComponent } from '../weapon/weapon.component';
import type WeaponGraph from 'src/services/graphs/WeaponGraph';
import type WeaponName from 'src/services/weapon/WeaponType';
import type WeaponNameByType from 'src/services/weapon/WeaponNameByType';

@Component({
  selector: 'app-weapon-graph',
  templateUrl: './weapon-graph.component.html',
  styleUrls: ['./weapon-graph.component.scss'],
})
export class WeaponGraphComponent<T extends WeaponName>
  implements AfterViewInit
{
  @Input({ required: true }) weaponGraph!: Readonly<WeaponGraph<T>>;

  @ViewChildren(WeaponComponent, { read: ElementRef })
  children!: QueryList<ElementRef>;

  edges = new Set<[HTMLElement, HTMLElement]>();
  weaponElementsByName = new Map<WeaponNameByType[T], HTMLElement>();

  ngAfterViewInit() {
    this.buildWeaponElementsByName();
    this.buildEdges();
    console.log(this.edges);
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
}
