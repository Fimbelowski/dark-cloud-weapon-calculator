import WeaponAttribute from './WeaponAttribute';

export default class WeaponAttributeWithMaybeMin extends WeaponAttribute {
  constructor(min = 0) {
    super(min);
  }
}
