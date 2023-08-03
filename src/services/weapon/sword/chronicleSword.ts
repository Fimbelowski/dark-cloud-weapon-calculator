import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default new Sword(
  'Chronicle Sword',
  new WeaponAttributeCollectionBuilder()
    // Base Attributes
    .withAttribute('attack', (a) => a.withMin(120).withMax(260))
    .withAttribute('endurance', (a) => a.withMin(80))
    .withAttribute('speed', (a) => a.withMin(80))
    .withAttribute('magicalPower', (a) => a.withMin(101).withMax(150))
    // Elemental Attributes
    .withAttribute('fire', (a) => a.withMin(55))
    .withAttribute('ice', (a) => a.withMin(55))
    .withAttribute('thunder', (a) => a.withMin(90))
    .withAttribute('wind', (a) => a.withMin(55))
    .withAttribute('holy', (a) => a.withMin(90))
    // Anti-Monster-Type Attributes
    .withAttribute('antiDragon', (a) => a.withMin(60))
    .withAttribute('antiUndead', (a) => a.withMin(60))
    .withAttribute('antiMarine', (a) => a.withMin(60))
    .withAttribute('antiRock', (a) => a.withMin(60))
    .withAttribute('antiPlant', (a) => a.withMin(60))
    .withAttribute('antiBeast', (a) => a.withMin(60))
    .withAttribute('antiSky', (a) => a.withMin(60))
    .withAttribute('antiMetal', (a) => a.withMin(60))
    .withAttribute('antiMimic', (a) => a.withMin(60))
    .withAttribute('antiMage', (a) => a.withMin(60))
    .build(),
  {
    alt: 'A huge sword with a scissor-shaped gap in the tip. Greenish diamond shapes run along the center of the blade. Large, ornate golden hilt.',
    pathFragment: 'chronicleSword',
  }
);
