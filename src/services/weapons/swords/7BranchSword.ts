import AtlamilliaSword from './AtlamilliaSword';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class SevenBranchSword extends Sword {
  constructor() {
    super(
      '7 Branch Sword',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(65))
        .withAttribute('endurance', (a) => a.withMin(40))
        .withAttribute('speed', (a) => a.withMin(80))
        .withAttribute('magicalPower', (a) => a.withMin(35).withMax(65))
        // Elemental Attributes
        .withAttribute('fire', (a) => a.withMin(20))
        .withAttribute('ice', (a) => a.withMin(20))
        .withAttribute('thunder', (a) => a.withMin(20))
        .withAttribute('wind', (a) => a.withMin(20))
        .withAttribute('holy', (a) => a.withMin(20))
        .build(),
      {
        alt: 'A long, double-edged sword with branches that look like smaller swords coming out of both sides of the blade.',
        pathFragment: '7BranchSword',
      },
      {
        buildsUpInto: new Set([new AtlamilliaSword()]),
      }
    );
  }
}
