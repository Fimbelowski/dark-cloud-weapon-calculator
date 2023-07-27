import Weapon from '../Weapon';
import type SwordName from './SwordName';

export default class Sword extends Weapon<'sword'> {
  ICON_URL_FOLDER = 'swords';

  constructor(
    name: SwordName,
    iconPathOrPaths: string | string[],
    buildUpInto?: Set<Sword>,
    defaultWeapon = false
  ) {
    super(name, iconPathOrPaths, buildUpInto, defaultWeapon);
  }
}
