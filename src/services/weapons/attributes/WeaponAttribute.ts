import type IWeaponAttribute from './IWeaponAttribute';

export default class WeaponAttribute implements IWeaponAttribute {
  constructor(
    public readonly min = 0,
    public readonly max = 99,
    public current = min
  ) {
    this.min = min;
    this.max = max;
    this.current = current;
  }
}
