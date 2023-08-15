import HeavensCloud from './HeavensCloud';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class Tsukikage extends Sword {
  constructor() {
    super(
      'Tsukikage',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(40).withMax(68))
        .withAttribute('endurance', (a) => a.withMin(20))
        .withAttribute('speed', (a) => a.withMin(70))
        .withAttribute('magicalPower', (a) => a.withMin(34).withMax(70))
        // Elemental Attributes
        .withAttribute('ice', (a) => a.withMin(10))
        .withAttribute('thunder', (a) => a.withMin(20))
        .withAttribute('wind', (a) => a.withMin(10))
        // Anti-Monster-Type Attributes
        .withAttribute('antiBeast', (a) => a.withMin(8))
        .withAttribute('antiMetal', (a) => a.withMin(20))
        .withAttribute('antiMage', (a) => a.withMin(8))

        .build(),
      {
        alt: 'A curved sword with a white leading edge and a bluish-gray trailing edge.',
        pathFragment: 'tsukikage',
      },
      {
        buildsUpInto: new Set([new HeavensCloud()]),
      }
    );
  }
}
