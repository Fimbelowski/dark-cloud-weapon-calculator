import Sword from './Sword';
import WeaponAttributeWithMaybeMin from '../attributes/WeaponAttributeWithMaybeMin';
import WeaponAttributeWithMin from '../attributes/WeaponAttributeWithMin';
import WeaponAttributeWithMinAndMax from '../attributes/WeaponAttributeWithMinAndMax';
import WeaponAttributeCollection from '../attributes/WeaponAttributeCollection';

export default class Dagger extends Sword {
  constructor() {
    super(
      'Dagger',
      new WeaponAttributeCollection(
        new WeaponAttributeWithMinAndMax(6, 25),
        new WeaponAttributeWithMin(30),
        new WeaponAttributeWithMin(70),
        new WeaponAttributeWithMinAndMax(2, 24),
        {
          // Elemental attributes
          fire: new WeaponAttributeWithMaybeMin(),
          ice: new WeaponAttributeWithMaybeMin(),
          thunder: new WeaponAttributeWithMaybeMin(),
          wind: new WeaponAttributeWithMaybeMin(4),
          holy: new WeaponAttributeWithMaybeMin(),

          // Anti-monster attributes
          antiDragon: new WeaponAttributeWithMaybeMin(),
          antiUndead: new WeaponAttributeWithMaybeMin(),
          antiMarine: new WeaponAttributeWithMaybeMin(),
          antiRock: new WeaponAttributeWithMaybeMin(),
          antiPlant: new WeaponAttributeWithMaybeMin(),
          antiBeast: new WeaponAttributeWithMaybeMin(4),
          antiSky: new WeaponAttributeWithMaybeMin(),
          antiMetal: new WeaponAttributeWithMaybeMin(),
          antiMimic: new WeaponAttributeWithMaybeMin(),
          antiMage: new WeaponAttributeWithMaybeMin(),
        }
      ),
      {
        defaultWeapon: true,
      }
    );
  }
}
