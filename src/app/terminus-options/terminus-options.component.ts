import { Component, Input } from '@angular/core';

import type Weapon from 'src/services/weapon/Weapon';
import type WeaponType from 'src/services/weapon/WeaponType';

@Component({
  selector: 'app-terminus-options',
  templateUrl: './terminus-options.component.html',
  styleUrls: ['./terminus-options.component.scss'],
})
export class TerminusOptionsComponent<T extends WeaponType> {
  @Input({ required: true }) terminusType!: 'Destination' | 'Source';
  @Input({ required: true }) weapon: Weapon<T> | undefined;

  isWeaponDefined(weapon?: Weapon<T>): weapon is Weapon<T> {
    return weapon !== undefined;
  }
}
