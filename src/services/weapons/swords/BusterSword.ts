import Claymore from './Claymore';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class BusterSword extends Sword {
  constructor() {
    super(
      'Buster Sword',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(24).withMax(65))
        .withAttribute('endurance', (a) => a.withMin(40))
        .withAttribute('speed', (a) => a.withMin(50))
        .withAttribute('magicalPower', (a) => a.withMax(35))
        // Anti-Monster-Type Attributes
        .withAttribute('antiUndead', (a) => a.withMin(10))
        .withAttribute('antiBeast', (a) => a.withMin(10))
        .withAttribute('antiSky', (a) => a.withMin(10))
        .withAttribute('antiMage', (a) => a.withMin(10))
        .build(),
      4,
      {
        alt: 'A double-edged sword with a hollow channel near the base of the blade.',
        pathFragment: 'busterSword',
      },
      {
        buildsUpInto: new Set([new Claymore()]),
      }
    );
  }
}
