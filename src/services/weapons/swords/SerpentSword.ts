import Evilcise from './Evilcise';
import Sword from './Sword';
import Tsukikage from './Tsukikage';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class SerpentSword extends Sword {
  constructor() {
    super(
      'Serpent Sword',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(22).withMax(70))
        .withAttribute('endurance', (a) => a.withMin(48))
        .withAttribute('speed', (a) => a.withMin(60))
        .withAttribute('magicalPower', (a) => a.withMin(8).withMax(55))
        // Elemental Attributes
        .withAttribute('thunder', (a) => a.withMin(14))
        .withAttribute('wind', (a) => a.withMin(12))
        // Anti-Monster-Type Attributes
        .withAttribute('antiDragon', (a) => a.withMin(21))
        .withAttribute('antiMarine', (a) => a.withMin(12))
        .withAttribute('antiPlant', (a) => a.withMin(23))
        .withAttribute('antiBeast', (a) => a.withMin(24))
        .withAttribute('antiSky', (a) => a.withMin(23))
        .build(),
      3,
      {
        alt: 'A red sword with a white-edged blade and pentagonal holes near the tip.',
        pathFragment: 'serpentSword',
      },
      {
        buildsUpInto: new Set([new Evilcise(), new Tsukikage()]),
      }
    );
  }
}
