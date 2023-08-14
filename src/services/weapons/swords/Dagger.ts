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
          wind: new WeaponAttributeWithMaybeMin(4),

          // Anti-monster attributes
          antiBeast: new WeaponAttributeWithMaybeMin(4),
        }
      ),
      {
        defaultWeapon: true,
      }
    );
  }
}
