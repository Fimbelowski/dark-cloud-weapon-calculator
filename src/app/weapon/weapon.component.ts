import { Component, Input } from '@angular/core';

import type Weapon from 'src/services/weapon/Weapon';
import type WeaponName from 'src/services/weapon/WeaponType';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss'],
})
export class WeaponComponent<T extends WeaponName> {
  @Input({ required: true }) weapon!: Weapon<T>;
}
