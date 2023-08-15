import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class AriseMardan extends Sword {
  constructor() {
    super(
      'Arise Mardan',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(50).withMax(250))
        .withAttribute('endurance', (a) => a.withMin(50))
        .withAttribute('speed', (a) => a.withMin(50))
        .withAttribute('magicalPower', (a) => a.withMin(50).withMax(120))
        // Elemental Attributes
        .withAttribute('fire', (a) => a.withMin(5))
        .withAttribute('ice', (a) => a.withMin(5))
        .withAttribute('thunder', (a) => a.withMin(5))
        .withAttribute('wind', (a) => a.withMin(5))
        .withAttribute('holy', (a) => a.withMin(5))
        // Anti-Monster-Type Attributes
        .withAttribute('antiDragon', (a) => a.withMin(10))
        .withAttribute('antiUndead', (a) => a.withMin(8))
        .withAttribute('antiMarine', (a) => a.withMin(10))
        .withAttribute('antiRock', (a) => a.withMin(10))
        .withAttribute('antiMimic', (a) => a.withMin(10))
        .build(),
      {
        alt: "A long, single-edge blade. Blue throughout with gold and red on the back edge of the blade and an eye halfway along the blade's length.",
        pathFragment: 'ariseMardan',
      }
    );
  }
}
