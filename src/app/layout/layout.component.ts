import { Component, Input } from '@angular/core';

import type Weapon from 'src/services/weapon/Weapon';
import type WeaponGraph from 'src/services/graphs/WeaponGraph';
import type WeaponType from 'src/services/weapon/WeaponType';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent<T extends WeaponType> {
  @Input({ required: true }) weaponGraph!: WeaponGraph<T>;

  // Ideally the layout component should be stateless, but in order to avoid
  // polluting the codebase with a state-management library for the sake of two
  // variables I'm adding that state here.
  destinationWeapon?: Weapon<T>;
  sourceWeapon?: Weapon<T>;

  onDestinationWeaponSet(newDestinationWeapon: Weapon<T> | undefined) {
    this.destinationWeapon = newDestinationWeapon?.clone();
  }

  onSourceWeaponSet(newSourceWeapon: Weapon<T>) {
    this.sourceWeapon = newSourceWeapon.clone();
  }
}
