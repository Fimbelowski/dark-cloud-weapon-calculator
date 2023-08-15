import AtlamilliaSword from './AtlamilliaSword';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class LambsSword extends Sword {
  constructor() {
    super(
      "Lamb's Sword",
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(45).withMax(80))
        .withAttribute('endurance', (a) => a.withMin(44))
        .withAttribute('speed', (a) => a.withMin(70))
        .withAttribute('magicalPower', (a) => a.withMin(20).withMax(60))
        // Elemental Attributes
        .withAttribute('thunder', (a) => a.withMin(20))
        .withAttribute('holy', (a) => a.withMin(20))
        // Anti-Monster-Type Attributes
        .withAttribute('antiPlant', (a) => a.withMin(30))
        .withAttribute('antiBeast', (a) => a.withMin(35))
        .withAttribute('antiSky', (a) => a.withMin(35))
        .build(),
      [
        {
          alt: 'A wavy, beige colored sword with a hilt that looks like a lamb.',
          pathFragment: 'lambsSwordLamb',
        },
        {
          alt: 'A large, curved sword with a notch in the and and a hilt that looks like a wolf.',
          pathFragment: 'lambsSwordWolf',
        },
      ],
      {
        buildsUpInto: new Set([new AtlamilliaSword()]),
      }
    );
  }
}
