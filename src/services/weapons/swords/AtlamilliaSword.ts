import chronicleSword from './chronicleSword';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class AtlamilliaSword extends Sword {
  constructor() {
    super(
      'Atlamillia Sword',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(70).withMax(155))
        .withAttribute('endurance', (a) => a.withMin(80))
        .withAttribute('speed', (a) => a.withMin(80))
        .withAttribute('magicalPower', (a) => a.withMin(60).withMax(101))
        // Elemental Attributes
        .withAttribute('fire', (a) => a.withMin(25))
        .withAttribute('ice', (a) => a.withMin(40))
        .withAttribute('thunder', (a) => a.withMin(25))
        .withAttribute('wind', (a) => a.withMin(40))
        .withAttribute('holy', (a) => a.withMin(20))
        // Anti-Monster-Type Attributes
        .withAttribute('antiDragon', (a) => a.withMin(30))
        .withAttribute('antiUndead', (a) => a.withMin(20))
        .withAttribute('antiMarine', (a) => a.withMin(10))
        .withAttribute('antiRock', (a) => a.withMin(20))
        .withAttribute('antiPlant', (a) => a.withMin(10))
        .withAttribute('antiBeast', (a) => a.withMin(10))
        .withAttribute('antiSky', (a) => a.withMin(10))
        .withAttribute('antiMetal', (a) => a.withMin(30))
        .withAttribute('antiMimic', (a) => a.withMin(40))
        .withAttribute('antiMage', (a) => a.withMin(20))
        .build(),
      {
        alt: 'A long, single-edged sword with a blue blade with an orange back. A blue sphere surrounded by orange is on the hilt.',
        pathFragment: 'atlamilliaSword',
      },
      {
        buildsUpInto: new Set([chronicleSword]),
      }
    );
  }
}
