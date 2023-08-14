import crossHeinder from './crossHeinder';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class AgasSword extends Sword {
  constructor() {
    super(
      'Claymore',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(55).withMax(68))
        .withAttribute('endurance', (a) => a.withMin(50))
        .withAttribute('speed', (a) => a.withMin(70))
        .withAttribute('magicalPower', (a) => a.withMin(20).withMax(45))
        // Elemental Attributes
        .withAttribute('ice', (a) => a.withMin(10))
        .withAttribute('wind', (a) => a.withMin(10))
        .withAttribute('holy', (a) => a.withMin(12))
        // Anti-Monster-Type Attributes
        .withAttribute('antiRock', (a) => a.withMin(15))
        .withAttribute('antiBeast', (a) => a.withMin(8))
        .withAttribute('antiSky', (a) => a.withMin(10))
        .withAttribute('antiMetal', (a) => a.withMin(10))
        .withAttribute('antiMimic', (a) => a.withMin(10))
        .withAttribute('antiMage', (a) => a.withMin(8))
        .build(),
      {
        alt: 'A long sword with a channel in the blade and a large, red hilt.',
        pathFragment: 'claymore',
      },
      {
        buildsUpInto: new Set([crossHeinder]),
      }
    );
  }
}
