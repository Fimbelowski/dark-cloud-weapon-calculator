import atlamilliaSword from './AtlamilliaSword';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class AgasSword extends Sword {
  constructor() {
    super(
      "Aga's Sword",
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(60).withMax(95))
        .withAttribute('endurance', (a) => a.withMin(60))
        .withAttribute('speed', (a) => a.withMin(50))
        .withAttribute('magicalPower', (a) => a.withMin(30).withMax(80))
        // Elemental Attributes
        .withAttribute('fire', (a) => a.withMin(6))
        .withAttribute('holy', (a) => a.withMin(8))
        // Anti-Monster-Type Attributes
        .withAttribute('antiDragon', (a) => a.withMin(20))
        .withAttribute('antiUndead', (a) => a.withMin(23))
        .withAttribute('antiMarine', (a) => a.withMin(20))
        .withAttribute('antiRock', (a) => a.withMin(20))
        .withAttribute('antiPlant', (a) => a.withMin(23))
        .withAttribute('antiBeast', (a) => a.withMin(20))
        .withAttribute('antiSky', (a) => a.withMin(20))
        .withAttribute('antiMetal', (a) => a.withMin(20))
        .withAttribute('antiMimic', (a) => a.withMin(10))
        .withAttribute('antiMage', (a) => a.withMin(18))
        .build(),
      {
        alt: 'A long, single-edge sword with a notch cut out of the blade. The orangish hilt looks like the face of a cat.',
        pathFragment: 'agasSword',
      },
      {
        buildsUpInto: new Set([atlamilliaSword]),
      }
    );
  }
}
