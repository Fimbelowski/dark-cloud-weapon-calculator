import type IWeaponAttributeCollection from './IWeaponAttributeCollection';
import WeaponAttribute from './WeaponAttribute';

export default class WeaponAttributeCollection
  implements IWeaponAttributeCollection
{
  constructor(
    public attack = new WeaponAttribute(),
    public endurance = new WeaponAttribute(),
    public magicalPower = new WeaponAttribute(),
    public speed = new WeaponAttribute()
  ) {
    this.attack = attack;
    this.endurance = endurance;
    this.magicalPower = magicalPower;
    this.speed = speed;
  }
}
