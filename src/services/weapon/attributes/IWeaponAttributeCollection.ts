import type WeaponAttribute from './WeaponAttribute';
import type WeaponAttributeName from './WeaponAttributeName';

type WeaponAttributeCollection = {
  [name in WeaponAttributeName]: WeaponAttribute;
};

export default WeaponAttributeCollection;
