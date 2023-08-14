import lambsSword from './LambsSword';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class WiseOwlSword extends Sword {
  constructor() {
    super(
      'Wise Owl Sword',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(30).withMax(55))
        .withAttribute('endurance', (a) => a.withMin(22))
        .withAttribute('speed', (a) => a.withMin(70))
        .withAttribute('magicalPower', (a) => a.withMin(12).withMax(50))
        // Elemental Attributes
        .withAttribute('wind', (a) => a.withMin(16))
        // Anti-Monster-Type Attributes
        .withAttribute('antiPlant', (a) => a.withMin(12))
        .withAttribute('antiBeast', (a) => a.withMin(12))
        .withAttribute('antiMage', (a) => a.withMin(12))
        .build(),
      {
        alt: "A silvery sword whose tip looks feathered. There is an owl's face on the hilt with a large moustache.",
        pathFragment: 'wiseOwlSword',
      },
      {
        buildsUpInto: new Set([lambsSword]),
      }
    );
  }
}
