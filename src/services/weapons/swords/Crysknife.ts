import sandBreaker from './SandBreaker';
import smallSword from './SmallSword';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class Crysknife extends Sword {
  constructor() {
    super(
      'Crysknife',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(12).withMax(40))
        .withAttribute('endurance', (a) => a.withMin(25))
        .withAttribute('speed', (a) => a.withMin(70))
        .withAttribute('magicalPower', (a) => a.withMin(8).withMax(38))
        // Elemental Attributes
        .withAttribute('holy', (a) => a.withMin(8))
        // Anti-Monster-Type Attributes
        .withAttribute('antiBeast', (a) => a.withMin(5))
        .withAttribute('antiSky', (a) => a.withMin(5))
        .build(),
      {
        alt: 'A short sword with a curvy, blue, triangle-shaped blade.',
        pathFragment: 'crysknife',
      },
      {
        buildsUpInto: new Set([sandBreaker, smallSword]),
      }
    );
  }
}
