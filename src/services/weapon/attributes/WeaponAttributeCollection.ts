import type Cloneable from '../Cloneable';
import type IWeaponAttributeCollection from './IWeaponAttributeCollection';
import WeaponAttribute from './WeaponAttribute';

export default class WeaponAttributeCollection
  implements IWeaponAttributeCollection, Cloneable<WeaponAttributeCollection>
{
  constructor(
    public antiBeast = new WeaponAttribute(),
    public antiDragon = new WeaponAttribute(),
    public antiMage = new WeaponAttribute(),
    public antiMarine = new WeaponAttribute(),
    public antiMetal = new WeaponAttribute(),
    public antiMimic = new WeaponAttribute(),
    public antiPlant = new WeaponAttribute(),
    public antiRock = new WeaponAttribute(),
    public antiSky = new WeaponAttribute(),
    public antiUndead = new WeaponAttribute(),
    public attack = new WeaponAttribute(),
    public endurance = new WeaponAttribute(),
    public fire = new WeaponAttribute(),
    public holy = new WeaponAttribute(),
    public ice = new WeaponAttribute(),
    public magicalPower = new WeaponAttribute(),
    public speed = new WeaponAttribute(),
    public thunder = new WeaponAttribute(),
    public wind = new WeaponAttribute()
  ) {
    this.antiBeast = antiBeast;
    this.antiDragon = antiDragon;
    this.antiMage = antiMage;
    this.antiMarine = antiMarine;
    this.antiMetal = antiMetal;
    this.antiMimic = antiMimic;
    this.antiPlant = antiPlant;
    this.antiRock = antiRock;
    this.antiSky = antiSky;
    this.antiUndead = antiUndead;
    this.attack = attack;
    this.endurance = endurance;
    this.fire = fire;
    this.holy = holy;
    this.ice = ice;
    this.magicalPower = magicalPower;
    this.speed = speed;
    this.thunder = thunder;
    this.wind = wind;
  }

  clone() {
    return new WeaponAttributeCollection(
      this.antiBeast.clone(),
      this.antiDragon.clone(),
      this.antiMage.clone(),
      this.antiMarine.clone(),
      this.antiMetal.clone(),
      this.antiMimic.clone(),
      this.antiPlant.clone(),
      this.antiRock.clone(),
      this.antiSky.clone(),
      this.antiUndead.clone(),
      this.attack.clone(),
      this.endurance.clone(),
      this.fire.clone(),
      this.holy.clone(),
      this.ice.clone(),
      this.magicalPower.clone(),
      this.speed.clone(),
      this.thunder.clone(),
      this.wind.clone()
    );
  }
}
