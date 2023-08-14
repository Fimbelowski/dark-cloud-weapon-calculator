import Sword from './Sword';
import WeaponAttributeWithMaybeMin from '../attributes/WeaponAttributeWithMaybeMin';
import WeaponAttributeWithMin from '../attributes/WeaponAttributeWithMin';
import WeaponAttributeWithMinAndMax from '../attributes/WeaponAttributeWithMinAndMax';
import WeaponAttributeCollection from '../attributes/WeaponAttributeCollection';

export default class Sax extends Sword {
  constructor() {
    super(
      'Sax',
      new WeaponAttributeCollection(
        new WeaponAttributeWithMinAndMax(26, 65),
        new WeaponAttributeWithMin(40),
        new WeaponAttributeWithMin(50),
        new WeaponAttributeWithMinAndMax(15, 41),
        {
          // Elemental attributes
          thunder: new WeaponAttributeWithMaybeMin(10),

          // Anti-monster attributes
          antiPlant: new WeaponAttributeWithMaybeMin(10),
          antiMimic: new WeaponAttributeWithMaybeMin(10),
        }
      )
    );
  }
}
