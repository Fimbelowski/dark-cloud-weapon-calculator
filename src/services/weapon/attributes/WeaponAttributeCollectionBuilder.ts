import type IWeaponAttributeCollection from './IWeaponAttributeCollection';
import WeaponAttribute from './WeaponAttribute';
import WeaponAttributeBuilder from './WeaponAttributeBuilder';
import WeaponAttributeCollection from './WeaponAttributeCollection';
import type WeaponAttributeName from './WeaponAttributeName';

export default class WeaponAttributeCollectionBuilder
  implements IWeaponAttributeCollection
{
  attack!: WeaponAttribute;
  endurance!: WeaponAttribute;
  magicalPower!: WeaponAttribute;
  speed!: WeaponAttribute;

  build() {
    return new WeaponAttributeCollection(
      this.attack,
      this.endurance,
      this.magicalPower,
      this.speed
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
