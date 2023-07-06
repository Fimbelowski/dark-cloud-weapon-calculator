import { Component, Input, OnInit } from '@angular/core';

import type Weapon from 'src/services/weapon/Weapon';
import WeaponGraph from 'src/services/weapon/WeaponGraph';
import type WeaponName from 'src/services/weapon/WeaponName';

@Component({
  selector: 'app-weapon-graph',
  templateUrl: './weapon-graph.component.html',
  styleUrls: ['./weapon-graph.component.scss'],
})
export class WeaponGraphComponent<T extends WeaponName> implements OnInit {
  @Input({ required: true }) weaponGraph!: Readonly<WeaponGraph<T>>;

  columns = 0;
  weaponsByDistanceFromTerminal = new Map<number, Array<Weapon<T>>>();

  ngOnInit() {
    this.weaponGraph.vertices.forEach((weapon) => {
      const distance = weapon.distanceFromTerminal;

      if (!this.weaponsByDistanceFromTerminal.has(distance)) {
        this.weaponsByDistanceFromTerminal.set(distance, []);
      }

      this.weaponsByDistanceFromTerminal.get(distance)?.push(weapon);
    });

    for (const weapons of this.weaponsByDistanceFromTerminal.values()) {
      this.columns = Math.max(this.columns, weapons.length);
    }

    console.log(this.columns);
  }
}
