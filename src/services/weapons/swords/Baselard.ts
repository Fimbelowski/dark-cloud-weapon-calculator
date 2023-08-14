import Sax from './Sax';
import Shamshir from './Shamshir';
import Sword from './Sword';
import WeaponAttributeWithMaybeMin from '../attributes/WeaponAttributeWithMaybeMin';
import WeaponAttributeWithMin from '../attributes/WeaponAttributeWithMin';
import WeaponAttributeWithMinAndMax from '../attributes/WeaponAttributeWithMinAndMax';
import WeaponAttributeCollection from '../attributes/WeaponAttributeCollection';

export default class Baselard extends Sword {
  constructor() {
    super(
      'Baselard',
      new WeaponAttributeCollection(
        new WeaponAttributeWithMinAndMax(8, 26),
        new WeaponAttributeWithMin(20),
        new WeaponAttributeWithMin(60),
        new WeaponAttributeWithMinAndMax(4, 25),
        {
          // Elemental attributes
          fire: new WeaponAttributeWithMaybeMin(6),

          // Anti-monster attributes
          antiSky: new WeaponAttributeWithMaybeMin(10),
        }
      ),
      {
        buildsUpInto: new Set([new Sax(), new Shamshir()]),
      }
    );
  }
}
