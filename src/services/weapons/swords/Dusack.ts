import braveArk from './BraveArk';
import sevenBranchSword from './7BranchSword';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class Dusack extends Sword {
  constructor() {
    super(
      'Dusack',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(38).withMax(78))
        .withAttribute('endurance', (a) => a.withMin(40))
        .withAttribute('speed', (a) => a.withMin(70))
        .withAttribute('magicalPower', (a) => a.withMin(29).withMax(45))
        // Elemental Attributes
        .withAttribute('ice', (a) => a.withMin(20))
        .withAttribute('wind', (a) => a.withMin(20))
        .withAttribute('holy', (a) => a.withMin(12))
        // Anti-Monster-Type Attributes
        .withAttribute('antiBeast', (a) => a.withMin(8))
        .withAttribute('antiMetal', (a) => a.withMin(10))
        .withAttribute('antiMage', (a) => a.withMin(8))
        .build(),
      { alt: 'A black, slightly curved cutlass.', pathFragment: 'dusack' },
      {
        buildsUpInto: new Set([braveArk, sevenBranchSword]),
      }
    );
  }
}
