import Weapon from '../Weapon';
import type SwordName from './SwordName';

export default class Sword extends Weapon<'sword'> {
  constructor(
    name: SwordName,
    buildUpInto?: Set<Sword>,
    defaultWeapon = false
  ) {
    super(name, buildUpInto, defaultWeapon);
  }
}
