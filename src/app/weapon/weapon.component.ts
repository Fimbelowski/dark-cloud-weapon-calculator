import { Component, HostBinding, Input } from '@angular/core';

import type Weapon from 'src/services/weapon/Weapon';
import type WeaponName from 'src/services/weapon/WeaponType';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.scss'],
})
export class WeaponComponent<T extends WeaponName> {
  @HostBinding('class.weapon--non-descendant') @Input() nonDescendant = false;
  @Input({ required: true }) weapon!: Weapon<T>;
}
