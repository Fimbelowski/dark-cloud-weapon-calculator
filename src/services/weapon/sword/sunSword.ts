import bigBang from './bigBang';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default new Sword(
  'Sun Sword',
  new WeaponAttributeCollectionBuilder()
    // Base Attributes
    .withAttribute('attack', (a) => a.withMin(50).withMax(110))
    .withAttribute('endurance', (a) => a.withMin(40))
    .withAttribute('speed', (a) => a.withMin(60))
    .withAttribute('magicalPower', (a) => a.withMin(30).withMax(58))
    // Elemental Attributes
    .withAttribute('fire', (a) => a.withMin(30))
    // Anti-Monster-Type Attributes
    .withAttribute('antiDragon', (a) => a.withMin(30))
    .withAttribute('antiUndead', (a) => a.withMin(30))
    .withAttribute('antiRock', (a) => a.withMin(30))
    .withAttribute('antiMetal', (a) => a.withMin(15))
    .withAttribute('antiMage', (a) => a.withMin(10))
    .build(),
  {
    alt: 'A golden blade with a black patterned center and a sun and moon emblem on the hilt.',
    pathFragment: 'sunSword',
  },
  {
    buildsUpInto: new Set([bigBang]),
  }
);
