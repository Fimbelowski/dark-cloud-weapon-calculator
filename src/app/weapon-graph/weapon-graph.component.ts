import { Component, Input } from '@angular/core';

import type WeaponGraph from 'src/services/graphs/WeaponGraph';
import type WeaponName from 'src/services/weapon/WeaponType';

@Component({
  selector: 'app-weapon-graph',
  templateUrl: './weapon-graph.component.html',
  styleUrls: ['./weapon-graph.component.scss'],
})
export class WeaponGraphComponent<T extends WeaponName> {
  @Input({ required: true }) weaponGraph!: Readonly<WeaponGraph<T>>;
}
