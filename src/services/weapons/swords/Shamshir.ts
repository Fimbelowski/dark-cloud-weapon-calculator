import Dusack from './Dusack';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class Shamshir extends Sword {
  constructor() {
    super(
      'Shamshir',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(20).withMax(60))
        .withAttribute('endurance', (a) => a.withMin(30))
        .withAttribute('speed', (a) => a.withMin(70))
        .withAttribute('magicalPower', (a) => a.withMin(6).withMax(39))
        // Elemental Attributes
        .withAttribute('thunder', (a) => a.withMin(8))
        // Anti-Monster-Type Attributes
        .withAttribute('antiSky', (a) => a.withMin(10))
        .withAttribute('antiMage', (a) => a.withMin(4))
        .build(),
      2,
      {
        alt: 'A gray sword with a bluish center to the blade. Very curved blade and hilt.',
        pathFragment: 'shamshir',
      },
      {
        buildsUpInto: new Set([new Dusack()]),
      }
    );
  }
}
