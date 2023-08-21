import { Component, Input, signal, type WritableSignal } from '@angular/core';

import type Weapon from 'src/services/weapons/Weapon';
import type WeaponGraph from 'src/services/graphs/WeaponGraph';
import type WeaponType from 'src/services/weapons/WeaponType';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent<T extends WeaponType> {
  @Input({ required: true }) weaponGraph!: WeaponGraph<T>;

  sourceWeapon: WritableSignal<Weapon<T> | undefined> = signal(undefined);
  destinationWeapon: WritableSignal<Weapon<T> | undefined> = signal(undefined);

  onDestinationWeaponChange(weaponOrUndefined: Weapon<T> | undefined) {
    this.destinationWeapon.set(weaponOrUndefined);
  }

  onSourceWeaponChange(weaponOrUndefined: Weapon<T> | undefined) {
    this.sourceWeapon.set(weaponOrUndefined);
  }
}
