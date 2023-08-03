import WeaponAttribute from './WeaponAttribute';

export default class WeaponAttributeWithMin extends WeaponAttribute {
  constructor(min?: number, max = 99, current = min) {
    if (min === undefined) {
      throw Error('A min must be provided.');
    }

    super(min, max, current);
  }
}
