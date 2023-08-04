import { Component } from '@angular/core';

import swordGraph from 'src/services/weapon/sword/graph';
import type Weapon from 'src/services/weapon/Weapon';
import type WeaponType from 'src/services/weapon/WeaponType';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent<T extends WeaponType> {
  // Ideally the layout component should be stateless, but in order to avoid
  // polluting the codebase with a state-management library for the sake of two
  // variables I'm adding that state here.
  destinationWeapon?: Weapon<T>;
  sourceWeapon?: Weapon<T>;
  weaponGraph = swordGraph;
}
