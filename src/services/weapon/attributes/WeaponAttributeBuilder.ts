import type IWeaponAttribute from './IWeaponAttribute';
import WeaponAttribute from './WeaponAttribute';

export default class WeaponAttributeBuilder<T extends WeaponAttribute>
  implements Partial<IWeaponAttribute>
{
  current?: number;
  max?: number;
  min?: number;

  build(): T {
    return new WeaponAttribute(this.min, this.max, this.current) as T;
  }

  setCurrent(newCurrent: number) {
    this.current = newCurrent;
    return this;
  }

  setMax(newMax: number) {
    this.max = newMax;
    return this;
  }

  setMin(newMin: number) {
    this.min = newMin;
    return this;
  }
}
