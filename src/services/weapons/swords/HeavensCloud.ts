import DarkCloud from './DarkCloud';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class HeavensCloud extends Sword {
  constructor() {
    super(
      "Heaven's Cloud",
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(65).withMax(102))
        .withAttribute('endurance', (a) => a.withMin(50))
        .withAttribute('speed', (a) => a.withMin(80))
        .withAttribute('magicalPower', (a) => a.withMin(40).withMax(85))
        // Elemental Attributes
        .withAttribute('ice', (a) => a.withMin(30))
        .withAttribute('thunder', (a) => a.withMin(38))
        .withAttribute('wind', (a) => a.withMin(38))
        .withAttribute('holy', (a) => a.withMin(12))
        // Anti-Monster-Type Attributes
        .withAttribute('antiDragon', (a) => a.withMin(30))
        .withAttribute('antiBeast', (a) => a.withMin(30))
        .withAttribute('antiMetal', (a) => a.withMin(35))
        .build(),
      {
        alt: 'A sword with a deep blue blade with ornate golden engravings and a golden hilt.',
        pathFragment: 'heavensCloud',
      },
      {
        buildsUpInto: new Set([new DarkCloud()]),
      }
    );
  }
}
