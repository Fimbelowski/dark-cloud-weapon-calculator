import Weapon from '../Weapon';
import type SwordName from './SwordName';

export default class Sword extends Weapon<SwordName> {
  constructor(
    swordName: SwordName,
    buildsUpInto: SwordName[] = [],
    defaultWeapon = false
  ) {
    super(swordName, buildsUpInto, defaultWeapon);
  }
}
