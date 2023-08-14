import braveArk from './BraveArk';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class AntiqueSword extends Sword {
  constructor() {
    super(
      'Antique Sword',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(37).withMax(77))
        .withAttribute('endurance', (a) => a.withMin(39))
        .withAttribute('speed', (a) => a.withMin(50))
        .withAttribute('magicalPower', (a) => a.withMin(25).withMax(47))
        // Elemental Attributes
        .withAttribute('fire', (a) => a.withMin(6))
        .withAttribute('holy', (a) => a.withMin(20))
        // Anti-Monster-Type Attributes
        .withAttribute('antiDragon', (a) => a.withMin(20))
        .withAttribute('antiUndead', (a) => a.withMin(8))
        .withAttribute('antiRock', (a) => a.withMin(10))
        .withAttribute('antiMimic', (a) => a.withMin(10))
        .build(),
      {
        alt: 'A long, double-edge sword with a mostly flat blade that flares at the end.',
        pathFragment: 'antiqueSword',
      },
      {
        buildsUpInto: new Set([braveArk]),
      }
    );
  }
}
