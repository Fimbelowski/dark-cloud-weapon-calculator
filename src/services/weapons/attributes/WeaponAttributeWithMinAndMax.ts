import WeaponAttribute from './WeaponAttribute';

export default class WeaponAttributeWithMinAndMax extends WeaponAttribute {
  constructor(min: number, max: number) {
    super(min, max);
  }
}
