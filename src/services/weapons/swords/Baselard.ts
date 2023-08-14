import sax from './sax';
import shamshir from './shamshir';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class AgasSword extends Sword {
  constructor() {
    super(
      'Baselard',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(8).withMax(26))
        .withAttribute('endurance', (a) => a.withMin(20))
        .withAttribute('speed', (a) => a.withMin(60))
        .withAttribute('magicalPower', (a) => a.withMin(4).withMax(25))
        // Elemental Attributes
        .withAttribute('fire', (a) => a.withMin(6))
        // Anti-Monster-Type Attributes
        .withAttribute('antiSky', (a) => a.withMin(10))
        .build(),
      {
        alt: 'A medium-sized, single-edged sword with a tan blade that curves slightly and has a spur on the backside.',
        pathFragment: 'baselard',
      },
      {
        buildsUpInto: new Set([sax, shamshir]),
      }
    );
  }
}
