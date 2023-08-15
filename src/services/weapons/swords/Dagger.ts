import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class Dagger extends Sword {
  constructor() {
    super(
      'Dagger',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(6).withMax(25))
        .withAttribute('endurance', (a) => a.withMin(30))
        .withAttribute('speed', (a) => a.withMin(70))
        .withAttribute('magicalPower', (a) => a.withMin(2).withMax(24))
        // Elemental Attributes
        .withAttribute('wind', (a) => a.withMin(4))
        // Anti-Monster-Type Attributes
        .withAttribute('antiBeast', (a) => a.withMin(4))
        .build(),
      { alt: 'A simple, short dagger.', pathFragment: 'dagger' },
      {
        defaultWeapon: true,
      }
    );
  }
}
