import BigBang from './BigBang';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class CrossHinder extends Sword {
  constructor() {
    super(
      'Cross Hinder',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(68).withMax(110))
        .withAttribute('endurance', (a) => a.withMin(40))
        .withAttribute('speed', (a) => a.withMin(60))
        .withAttribute('magicalPower', (a) => a.withMin(21).withMax(60))
        // Elemental Attributes
        .withAttribute('fire', (a) => a.withMin(10))
        .withAttribute('ice', (a) => a.withMin(10))
        .withAttribute('thunder', (a) => a.withMin(10))
        .withAttribute('holy', (a) => a.withMin(30))
        // Anti-Monster-Type Attributes
        .withAttribute('antiDragon', (a) => a.withMin(30))
        .withAttribute('antiRock', (a) => a.withMin(35))
        .withAttribute('antiMetal', (a) => a.withMin(15))
        .withAttribute('antiMimic', (a) => a.withMin(20))
        .build(),
      3,
      {
        alt: 'A big, golden sword shaped like  cross with a red channel throughout.',
        pathFragment: 'crossHeinder',
      },
      {
        buildsUpInto: new Set([new BigBang()]),
      }
    );
  }
}
