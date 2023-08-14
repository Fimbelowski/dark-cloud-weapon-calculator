import antiqueSword from './AntiqueSword';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default new Sword(
  'Sand Breaker',
  new WeaponAttributeCollectionBuilder()
    // Base Attributes
    .withAttribute('attack', (a) => a.withMin(28).withMax(68))
    .withAttribute('endurance', (a) => a.withMin(20))
    .withAttribute('speed', (a) => a.withMin(70))
    .withAttribute('magicalPower', (a) => a.withMin(14).withMax(45))
    // Elemental Attributes
    .withAttribute('ice', (a) => a.withMin(10))
    .withAttribute('wind', (a) => a.withMin(10))
    .withAttribute('holy', (a) => a.withMin(12))
    // Anti-Monster-Type Attributes
    .withAttribute('antiBeast', (a) => a.withMin(8))
    .withAttribute('antiMetal', (a) => a.withMin(10))
    .withAttribute('antiMage', (a) => a.withMin(8))
    .build(),
  {
    alt: 'A sword with a rust-colored blade, three vertical slits near the base of the blade, and a hole on the back edge of the blade near the hilt.',
    pathFragment: 'sandBreaker',
  },
  {
    buildsUpInto: new Set([antiqueSword]),
  }
);
