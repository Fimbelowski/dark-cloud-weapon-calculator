import { Component, Input, type Signal } from '@angular/core';

import type Weapon from 'src/services/weapons/Weapon';
import type WeaponType from 'src/services/weapons/WeaponType';

@Component({
  selector: 'app-termini-options',
  templateUrl: './termini-options.component.html',
  styleUrls: ['./termini-options.component.scss'],
})
export class TerminiOptionsComponent<T extends WeaponType> {
  @Input({ required: true }) sourceWeapon!: Signal<Weapon<T> | undefined>;
  @Input({ required: true }) destinationWeapon!: Signal<Weapon<T> | undefined>;
}
