import Choora from './Choora';
import Dusack from './Dusack';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class Chopper extends Sword {
  constructor() {
    super(
      'Chopper',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(30).withMax(65))
        .withAttribute('endurance', (a) => a.withMin(40))
        .withAttribute('speed', (a) => a.withMin(50))
        .withAttribute('magicalPower', (a) => a.withMin(15).withMax(43))
        // Elemental Attributes
        .withAttribute('thunder', (a) => a.withMin(10))
        // Anti-Monster-Type Attributes
        .withAttribute('antiUndead', (a) => a.withMin(10))
        .withAttribute('antiBeast', (a) => a.withMin(10))
        .withAttribute('antiMetal', (a) => a.withMin(10))
        .withAttribute('antiMage', (a) => a.withMin(10))
        .build(),
      4,
      { alt: 'A short sword with a curvy blade.', pathFragment: 'chopper' },
      {
        buildsUpInto: new Set([new Choora(), new Dusack()]),
      }
    );
  }
}
