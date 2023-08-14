import type SwordName from '../SwordName';
import { Weapon, WeaponOptions } from '../Weapon';
import type WeaponAttributeCollection from '../attributes/WeaponAttributeCollection';
import type WeaponType from '../WeaponType';

export default abstract class Sword extends Weapon<WeaponType.Sword> {
  constructor(
    name: SwordName,
    attributes: WeaponAttributeCollection,
    options?: WeaponOptions
  ) {
    super(name, attributes, options);
  }
}
