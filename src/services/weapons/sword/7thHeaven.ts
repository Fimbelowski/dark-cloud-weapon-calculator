import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default new Sword(
  '7th Heaven',
  new WeaponAttributeCollectionBuilder()
    // Base Attributes
    .withAttribute('attack', (a) => a.withMin(100).withMax(240))
    .withAttribute('endurance', (a) => a.withMin(40))
    .withAttribute('speed', (a) => a.withMin(70))
    .withAttribute('magicalPower', (a) => a.withMin(95).withMax(110))
    // Elemental Attributes
    .withAttribute('fire', (a) => a.withMin(80))
    .withAttribute('ice', (a) => a.withMin(10))
    .withAttribute('thunder', (a) => a.withMin(85))
    .withAttribute('wind', (a) => a.withMin(10))
    .withAttribute('holy', (a) => a.withMin(12))
    // Anti-Monster-Type Attributes
    .withAttribute('antiUndead', (a) => a.withMin(88))
    .withAttribute('antiBeast', (a) => a.withMin(8))
    .withAttribute('antiMetal', (a) => a.withMin(10))
    .withAttribute('antiMage', (a) => a.withMin(8))
    .build(),
  {
    alt: 'A medium-sized, single-edged sword that transitions from red at the hilt to blue at the tip of the blade.',
    pathFragment: '7thHeaven',
  }
);
