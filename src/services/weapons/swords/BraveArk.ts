import darkCloud from './darkCloud';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class BraveArk extends Sword {
  constructor() {
    super(
      'Brave Ark',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(60).withMax(95))
        .withAttribute('endurance', (a) => a.withMin(75))
        .withAttribute('speed', (a) => a.withMin(80))
        .withAttribute('magicalPower', (a) => a.withMin(20).withMax(60))
        // Elemental Attributes
        .withAttribute('fire', (a) => a.withMin(30))
        .withAttribute('holy', (a) => a.withMin(40))
        // Anti-Monster-Type Attributes
        .withAttribute('antiUndead', (a) => a.withMin(34))
        .withAttribute('antiRock', (a) => a.withMin(38))
        .withAttribute('antiSky', (a) => a.withMin(30))
        .withAttribute('antiMetal', (a) => a.withMin(25))
        .withAttribute('antiMage', (a) => a.withMin(18))
        .build(),
      {
        alt: 'A double-edged, sand-colored sword with runic markings down the middle of the blade.',
        pathFragment: 'braveArk',
      },
      {
        buildsUpInto: new Set([darkCloud]),
      }
    );
  }
}
