import { Component, HostBinding, Input } from '@angular/core';

import type Weapon from 'src/services/weapons/Weapon';
import type WeaponName from 'src/services/weapons/WeaponType';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss'],
})
export class WeaponComponent<T extends WeaponName> {
  @HostBinding('class.weapon--highlighted') @Input() highlighted = true;
  @Input({ required: true }) weapon!: Weapon<T>;
}
