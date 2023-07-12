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

  styles = new Map<string, string>();
  weaponsMatrix: Array<Array<Weapon<T>>> = [];

  ngOnInit() {
    this.weaponGraph.vertices.forEach((weapon) => {
      const distanceFromTerminal =
        this.weaponGraph.getVertexDistanceFromTerminal(weapon);
      if (this.weaponsMatrix[distanceFromTerminal] === undefined) {
        this.weaponsMatrix[distanceFromTerminal] = [];
      }

      this.weaponsMatrix[distanceFromTerminal].push(weapon);
    });

    const columns = Math.max(...this.weaponsMatrix.map((row) => row.length));
    const rows = this.weaponsMatrix.length;

    this.styles.set('grid-template-columns', `repeat(${columns}, 1fr)`);
    this.styles.set('grid-template-rows', `repeat(${rows}, 1fr)`);
  }
}
