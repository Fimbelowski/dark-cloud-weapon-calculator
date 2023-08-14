import type SwordName from '../SwordName';
import Weapon from '../Weapon';
import type WeaponAttributeCollection from '../attributes/WeaponAttributeCollection';
import type WeaponType from '../WeaponType';

export default abstract class Sword extends Weapon<WeaponType.Sword> {
  constructor(name: SwordName, attributes: WeaponAttributeCollection) {
    super(name, attributes);
  }
}
