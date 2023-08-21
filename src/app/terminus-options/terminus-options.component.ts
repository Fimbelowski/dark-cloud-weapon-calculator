import { Component, Input } from '@angular/core';

import type Weapon from 'src/services/weapons/Weapon';
import type WeaponType from 'src/services/weapons/WeaponType';

@Component({
  selector: 'app-terminus-options',
  templateUrl: './terminus-options.component.html',
  styleUrls: ['./terminus-options.component.scss'],
})
export class TerminusOptionsComponent<T extends WeaponType> {
  @Input() weapon?: Weapon<T>;
}
