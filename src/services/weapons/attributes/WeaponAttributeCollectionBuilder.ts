import type IWeaponAttributeCollection from './IWeaponAttributeCollection';
import WeaponAttribute from './WeaponAttribute';
import WeaponAttributeBuilder from './WeaponAttributeBuilder';
import WeaponAttributeCollection from './WeaponAttributeCollection';
import type WeaponAttributeName from './WeaponAttributeName';

export default class WeaponAttributeCollectionBuilder
  implements IWeaponAttributeCollection
{
  antiBeast!: WeaponAttribute;
  antiDragon!: WeaponAttribute;
  antiMage!: WeaponAttribute;
  antiMarine!: WeaponAttribute;
  antiMetal!: WeaponAttribute;
  antiMimic!: WeaponAttribute;
  antiPlant!: WeaponAttribute;
  antiRock!: WeaponAttribute;
  antiSky!: WeaponAttribute;
  antiUndead!: WeaponAttribute;
  attack!: WeaponAttribute;
  endurance!: WeaponAttribute;
  fire!: WeaponAttribute;
  holy!: WeaponAttribute;
  ice!: WeaponAttribute;
  magicalPower!: WeaponAttribute;
  speed!: WeaponAttribute;
  thunder!: WeaponAttribute;
  wind!: WeaponAttribute;

  build() {
    return new WeaponAttributeCollection(
      this.antiBeast,
      this.antiDragon,
      this.antiMage,
      this.antiMarine,
      this.antiMetal,
      this.antiMimic,
      this.antiPlant,
      this.antiRock,
      this.antiSky,
      this.antiUndead,
      this.attack,
      this.endurance,
      this.fire,
      this.holy,
      this.ice,
      this.magicalPower,
      this.speed,
      this.thunder,
      this.wind
    );
  }

  withAttribute(
    attributeName: WeaponAttributeName,
    callback: (
      attributeBuilder: WeaponAttributeBuilder
    ) => WeaponAttributeBuilder
  ) {
    this[attributeName] = callback(new WeaponAttributeBuilder()).build();
    return this;
  }
}
