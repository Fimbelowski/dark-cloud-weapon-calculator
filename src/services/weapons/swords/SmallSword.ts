import Sword from './Sword';
import Tsukikage from './Tsukikage';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class SmallSword extends Sword {
  constructor() {
    super(
      'Small Sword',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(20).withMax(60))
        .withAttribute('endurance', (a) => a.withMin(33))
        .withAttribute('speed', (a) => a.withMin(80))
        .withAttribute('magicalPower', (a) => a.withMin(36).withMax(60))
        // Elemental Attributes
        .withAttribute('ice', (a) => a.withMin(8))
        .withAttribute('thunder', (a) => a.withMin(10))
        .withAttribute('wind', (a) => a.withMin(10))
        // Anti-Monster-Type Attributes
        .withAttribute('antiMarine', (a) => a.withMin(33))
        .build(),
      3,
      {
        alt: 'A small, simple sword with a squared curve at the end of the blade.',
        pathFragment: 'smallSword',
      },
      {
        buildsUpInto: new Set([new Tsukikage()]),
      }
    );
  }
}
