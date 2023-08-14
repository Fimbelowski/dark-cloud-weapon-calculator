import type IWeaponAttribute from './IWeaponAttribute';
import WeaponAttribute from './WeaponAttribute';

export default class WeaponAttributeBuilder implements IWeaponAttribute {
  current!: number;
  max!: number;
  min!: number;

  build() {
    return new WeaponAttribute(this.min, this.max, this.current);
  }

  withCurrent(newCurrent: number) {
    this.current = newCurrent;
    return this;
  }

  withMax(newMax: number) {
    this.max = newMax;
    return this;
  }

  withMin(newMin: number) {
    this.min = newMin;
    return this;
  }
}
