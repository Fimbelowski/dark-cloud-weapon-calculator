import type Cloneable from '../Cloneable';
import type IWeaponAttribute from './IWeaponAttribute';

export default class WeaponAttribute
  implements IWeaponAttribute, Cloneable<WeaponAttribute>
{
  constructor(
    public readonly min = 0,
    public readonly max = 99,
    public current = min
  ) {
    this.min = min;
    this.max = max;
    this.current = current;
  }

  clone() {
    return new WeaponAttribute(this.min, this.max, this.current);
  }
}
