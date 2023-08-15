import Sword from './Sword';

import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class SwordOfZeus extends Sword {
  constructor() {
    super(
      'Sword of Zeus',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(100).withMax(199))
        .withAttribute('endurance', (a) => a.withMin(77))
        .withAttribute('speed', (a) => a.withMin(60))
        .withAttribute('magicalPower', (a) => a.withMin(95).withMax(176))
        // Elemental Attributes
        .withAttribute('fire', (a) => a.withMin(70))
        .withAttribute('ice', (a) => a.withMin(70))
        .withAttribute('thunder', (a) => a.withMin(70))
        .withAttribute('wind', (a) => a.withMin(70))
        .withAttribute('holy', (a) => a.withMin(70))
        // Anti-Monster-Type Attributes
        .withAttribute('antiDragon', (a) => a.withMin(30))
        .withAttribute('antiUndead', (a) => a.withMin(30))
        .withAttribute('antiMarine', (a) => a.withMin(33))
        .withAttribute('antiRock', (a) => a.withMin(30))
        .withAttribute('antiPlant', (a) => a.withMin(29))
        .withAttribute('antiBeast', (a) => a.withMin(54))
        .withAttribute('antiSky', (a) => a.withMin(22))
        .withAttribute('antiMetal', (a) => a.withMin(49))
        .withAttribute('antiMimic', (a) => a.withMin(22))
        .withAttribute('antiMage', (a) => a.withMin(60))
        .build(),
      {
        alt: 'A grayish sword with red channels near the tip and base of the blade and a dark gray hilt.',
        pathFragment: 'swordOfZeus',
      }
    );
  }
}
