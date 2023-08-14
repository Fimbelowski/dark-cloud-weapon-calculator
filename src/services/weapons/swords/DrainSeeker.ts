import darkCloud from './DarkCloud';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class DrainSeeker extends Sword {
  constructor() {
    super(
      'Drain Seeker',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(50))
        .withAttribute('endurance', (a) => a.withMin(40))
        .withAttribute('speed', (a) => a.withMin(60))
        .withAttribute('magicalPower', (a) => a.withMin(55).withMax(85))
        // Elemental Attributes
        .withAttribute('fire', (a) => a.withMin(30))
        .withAttribute('ice', (a) => a.withMin(30))
        .withAttribute('thunder', (a) => a.withMin(35))
        .withAttribute('wind', (a) => a.withMin(30))
        // Anti-Monster-Type Attributes
        .withAttribute('antiRock', (a) => a.withMin(30))
        .withAttribute('antiBeast', (a) => a.withMin(30))
        .withAttribute('antiSky', (a) => a.withMin(25))
        .withAttribute('antiMage', (a) => a.withMin(10))
        .build(),
      {
        alt: 'A sword with a deep red blade with a spur at the end and black patterning near the base, and a hilt that looks like curly horns.',
        pathFragment: 'drainSeeker',
      },
      {
        buildsUpInto: new Set([darkCloud]),
      }
    );
  }
}
