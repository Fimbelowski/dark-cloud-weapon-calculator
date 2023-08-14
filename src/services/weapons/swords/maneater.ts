import atlamilliaSword from './atlamilliaSword';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default new Sword(
  'Maneater',
  new WeaponAttributeCollectionBuilder()
    // Base Attributes
    .withAttribute('attack', (a) => a.withMin(55))
    .withAttribute('endurance', (a) => a.withMin(40))
    .withAttribute('speed', (a) => a.withMin(50))
    .withAttribute('magicalPower', (a) => a.withMin(55).withMax(63))
    // Elemental Attributes
    .withAttribute('thunder', (a) => a.withMin(10))
    // Anti-Monster-Type Attributes
    .withAttribute('antiUndead', (a) => a.withMin(10))
    .withAttribute('antiBeast', (a) => a.withMin(10))
    .withAttribute('antiMetal', (a) => a.withMin(10))
    .withAttribute('antiMage', (a) => a.withMin(55))
    .build(),
  {
    alt: 'A curved sword with a thick red channel with oval-shaped stones embedded in it.',
    pathFragment: 'maneater',
  },
  {
    buildsUpInto: new Set([atlamilliaSword]),
  }
);
