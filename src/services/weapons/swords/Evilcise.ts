import DrainSeeker from './DrainSeeker';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class Evilcise extends Sword {
  constructor() {
    super(
      'Evilcise',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(43).withMax(80))
        .withAttribute('endurance', (a) => a.withMin(40))
        .withAttribute('speed', (a) => a.withMin(50))
        .withAttribute('magicalPower', (a) => a.withMin(38).withMax(75))
        // Elemental Attributes
        .withAttribute('ice', (a) => a.withMin(20))
        .withAttribute('thunder', (a) => a.withMin(10))
        // Anti-Monster-Type Attributes
        .withAttribute('antiUndead', (a) => a.withMin(10))
        .withAttribute('antiBeast', (a) => a.withMin(10))
        .withAttribute('antiMetal', (a) => a.withMin(10))
        .withAttribute('antiMage', (a) => a.withMin(10))
        .build(),
      2,
      {
        alt: 'A black sword with a spiral hole cut from the back of the blade and a thin blue hilt.',
        pathFragment: 'evilcise',
      },
      {
        buildsUpInto: new Set([new DrainSeeker()]),
      }
    );
  }
}
