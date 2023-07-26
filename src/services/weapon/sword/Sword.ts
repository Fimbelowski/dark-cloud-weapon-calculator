import Weapon from '../Weapon';
import type SwordName from './SwordName';

export default class Sword extends Weapon<'sword'> {
  constructor(
    name: SwordName,
    iconOrIcons: string | string[],
    buildUpInto?: Set<Sword>,
    defaultWeapon = false
  ) {
    super(name, iconOrIcons, buildUpInto, defaultWeapon);
  }
}
