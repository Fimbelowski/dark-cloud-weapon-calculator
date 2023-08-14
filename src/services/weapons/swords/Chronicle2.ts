import Sword from './Sword';

import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class AgasSword extends Sword {
  constructor() {
    super(
      'Chronicle 2',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(199).withMax(350))
        .withAttribute('endurance', (a) => a.withMin(99))
        .withAttribute('speed', (a) => a.withMin(89))
        .withAttribute('magicalPower', (a) => a.withMin(110).withMax(200))
        // Elemental Attributes
        .withAttribute('fire', (a) => a.withMin(50))
        .withAttribute('ice', (a) => a.withMin(50))
        .withAttribute('thunder', (a) => a.withMin(50))
        .withAttribute('wind', (a) => a.withMin(50))
        .withAttribute('holy', (a) => a.withMin(50))
        // Anti-Monster-Type Attributes
        .withAttribute('antiDragon', (a) => a.withMin(50))
        .withAttribute('antiUndead', (a) => a.withMin(50))
        .withAttribute('antiMarine', (a) => a.withMin(50))
        .withAttribute('antiRock', (a) => a.withMin(50))
        .withAttribute('antiPlant', (a) => a.withMin(50))
        .withAttribute('antiBeast', (a) => a.withMin(50))
        .withAttribute('antiSky', (a) => a.withMin(50))
        .withAttribute('antiMetal', (a) => a.withMin(50))
        .withAttribute('antiMimic', (a) => a.withMin(50))
        .withAttribute('antiMage', (a) => a.withMin(50))
        .build(),
      {
        alt: 'A huge sword with a bronzish blade and a large red channel through the middle. Very large, ornate golden hilt.',
        pathFragment: 'chronicle2',
      }
    );
  }
}
