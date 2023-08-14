import ariseMardan from './AriseMardan';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default new Sword(
  'Mardan Twei',
  new WeaponAttributeCollectionBuilder()
    // Base Attributes
    .withAttribute('attack', (a) => a.withMin(50))
    .withAttribute('endurance', (a) => a.withMin(50))
    .withAttribute('speed', (a) => a.withMin(50))
    .withAttribute('magicalPower', (a) => a.withMin(50))
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
    alt: 'A vividly colorful sword with a blue hilt and a red blade with an ornate eye.',
    pathFragment: 'mardanTwei',
  },
  {
    buildsUpInto: new Set([ariseMardan]),
  }
);
