import Sword from './Sword';
import swordOfZeus from './swordOfZeus';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class AgasSword extends Sword {
  constructor() {
    super(
      'Big Bang',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(80).withMax(170))
        .withAttribute('endurance', (a) => a.withMin(77))
        .withAttribute('speed', (a) => a.withMin(60))
        .withAttribute('magicalPower', (a) => a.withMin(58).withMax(95))
        // Elemental Attributes
        .withAttribute('fire', (a) => a.withMin(50))
        .withAttribute('ice', (a) => a.withMin(30))
        .withAttribute('thunder', (a) => a.withMin(55))
        .withAttribute('wind', (a) => a.withMin(30))
        .withAttribute('holy', (a) => a.withMin(30))
        // Anti-Monster-Type Attributes
        .withAttribute('antiDragon', (a) => a.withMin(35))
        .withAttribute('antiUndead', (a) => a.withMin(35))
        .withAttribute('antiRock', (a) => a.withMin(45))
        .withAttribute('antiMetal', (a) => a.withMin(40))
        .withAttribute('antiMage', (a) => a.withMin(40))
        .build(),
      {
        alt: 'A short, but thick double-edged sword with a sun and moon emblem on the hilt.',
        pathFragment: 'bigBang',
      },
      {
        buildsUpInto: new Set([swordOfZeus]),
      }
    );
  }
}
