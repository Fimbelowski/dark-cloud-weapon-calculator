import chopper from './Chopper';
import sax from './sax';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class KitchenKnife extends Sword {
  constructor() {
    super(
      'Kitchen Knife',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(5).withMax(30))
        .withAttribute('endurance', (a) => a.withMin(22))
        .withAttribute('speed', (a) => a.withMin(80))
        .withAttribute('magicalPower', (a) => a.withMax(15))
        // Elemental Attributes
        .withAttribute('ice', (a) => a.withMin(8))
        // Anti-Monster-Type Attributes
        .withAttribute('antiMarine', (a) => a.withMin(33))
        .build(),
      {
        alt: 'A dark blue kitchen cleaver with a whitish edge.',
        pathFragment: 'kitchenKnife',
      },
      {
        buildsUpInto: new Set([chopper, sax]),
      }
    );
  }
}
