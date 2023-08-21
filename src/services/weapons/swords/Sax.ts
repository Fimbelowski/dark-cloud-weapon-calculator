import Dusack from './Dusack';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class Sax extends Sword {
  constructor() {
    super(
      'Sax',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(26).withMax(65))
        .withAttribute('endurance', (a) => a.withMin(40))
        .withAttribute('speed', (a) => a.withMin(50))
        .withAttribute('magicalPower', (a) => a.withMin(15).withMax(41))
        // Elemental Attributes
        .withAttribute('thunder', (a) => a.withMin(10))
        // Anti-Monster-Type Attributes
        .withAttribute('antiPlant', (a) => a.withMin(10))
        .withAttribute('antiMimic', (a) => a.withMin(10))
        .build(),
      3,
      {
        alt: 'A sword with an angular blade that has teeth like a saw. The hilt curves up and away from the blade.',
        pathFragment: 'sax',
      },
      {
        buildsUpInto: new Set([new Dusack()]),
      }
    );
  }
}
