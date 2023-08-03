import WeaponAttributeWithMin from './WeaponAttributeWithMin';

export default class WeaponAttributeWithMinAndMax extends WeaponAttributeWithMin {
  constructor(min?: number, max?: number, current = min) {
    if (max === undefined) {
      throw Error('A max must be provided.');
    }

    super(min, max, current);
  }
}
