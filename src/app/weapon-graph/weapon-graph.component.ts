import { Component, Input, OnInit } from '@angular/core';

import type Weapon from 'src/services/weapon/Weapon';
import WeaponGraph from 'src/services/weapon/WeaponGraph';
import type WeaponName from 'src/services/weapon/WeaponName';
import type WeaponNameByType from 'src/services/weapon/WeaponNameByType';

@Component({
  selector: 'app-weapon-graph',
  templateUrl: './weapon-graph.component.html',
  styleUrls: ['./weapon-graph.component.scss'],
})
export class WeaponGraphComponent<T extends WeaponName> implements OnInit {
  @Input({ required: true }) weaponGraph!: Readonly<WeaponGraph<T>>;

  edges = new Set<[WeaponNameByType[T], WeaponNameByType[T]]>();
  styles = new Map<string, string>();
  weaponsMatrix: Array<Array<Weapon<T>>> = [];

  ngOnInit() {
    this.buildWeaponsMatrix();
    this.buildEdges();
    this.setStyles();
  }

  buildEdges() {
    this.weaponGraph.adjacencyList.forEach((value, key) => {
      value.forEach((potentialBuildUp) => {
        this.edges.add([key.name, potentialBuildUp.name]);
      });
    });

    console.log(this.edges);
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

  setStyles() {
    const columns = Math.max(...this.weaponsMatrix.map((row) => row.length));
    const rows = this.weaponsMatrix.length;

    this.styles.set('grid-template-columns', `repeat(${columns}, 1fr)`);
    this.styles.set('grid-template-rows', `repeat(${rows}, 1fr)`);
  }
}
