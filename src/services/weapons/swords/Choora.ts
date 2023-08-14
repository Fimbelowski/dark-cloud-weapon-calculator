import heavensCloud from './HeavensCloud';
import maneater from './Maneater';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class Choora extends Sword {
  constructor() {
    super(
      'Choora',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(39).withMax(74))
        .withAttribute('endurance', (a) => a.withMin(44))
        .withAttribute('speed', (a) => a.withMin(80))
        .withAttribute('magicalPower', (a) => a.withMin(28).withMax(55))
        // Elemental Attributes
        .withAttribute('ice', (a) => a.withMin(8))
        // Anti-Monster-Type Attributes
        .withAttribute('antiMage', (a) => a.withMin(20))
        .build(),
      {
        alt: 'A short swordwith a goldish blade that looks fastened to the hilt with many leather straps.',
        pathFragment: 'choora',
      },
      {
        buildsUpInto: new Set([heavensCloud, maneater]),
      }
    );
  }
}
