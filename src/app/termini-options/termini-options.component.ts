import { Component, Input } from '@angular/core';

import type Weapon from 'src/services/weapons/Weapon';
import type WeaponType from 'src/services/weapons/WeaponType';

@Component({
  selector: 'app-termini-options',
  templateUrl: './termini-options.component.html',
  styleUrls: ['./termini-options.component.scss'],
})
export class TerminiOptionsComponent<T extends WeaponType> {
  @Input() sourceWeapon?: Weapon<T>;
  @Input() destinationWeapon?: Weapon<T>;
}
