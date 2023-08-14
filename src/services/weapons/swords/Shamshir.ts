import Sword from './Sword';
import WeaponAttributeWithMaybeMin from '../attributes/WeaponAttributeWithMaybeMin';
import WeaponAttributeWithMin from '../attributes/WeaponAttributeWithMin';
import WeaponAttributeWithMinAndMax from '../attributes/WeaponAttributeWithMinAndMax';
import WeaponAttributeCollection from '../attributes/WeaponAttributeCollection';

export default class Shamshir extends Sword {
  constructor() {
    super(
      'Shamshir',
      new WeaponAttributeCollection(
        new WeaponAttributeWithMinAndMax(20, 60),
        new WeaponAttributeWithMin(30),
        new WeaponAttributeWithMin(70),
        new WeaponAttributeWithMinAndMax(6, 39),
        {
          // Elemental attributes
          thunder: new WeaponAttributeWithMaybeMin(8),

          // Anti-monster attributes
          antiSky: new WeaponAttributeWithMaybeMin(10),
          antiMage: new WeaponAttributeWithMaybeMin(4),
        }
      )
    );
  }
}
