import type SwordName from '../SwordName';
import Weapon from '../Weapon';
import type WeaponType from '../WeaponType';

export default abstract class Sword extends Weapon<WeaponType.Sword> {
  constructor(name: SwordName) {
    super(name);
  }
}
