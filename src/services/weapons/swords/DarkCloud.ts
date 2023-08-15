import SeventhHeaven from './7thHeaven';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class DarkCloud extends Sword {
  constructor() {
    super(
      'Dark Cloud',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(75).withMax(145))
        .withAttribute('endurance', (a) => a.withMin(55))
        .withAttribute('speed', (a) => a.withMin(75))
        .withAttribute('magicalPower', (a) => a.withMin(45))
        // Elemental Attributes
        .withAttribute('ice', (a) => a.withMin(50))
        .withAttribute('thunder', (a) => a.withMin(45))
        // Anti-Monster-Type Attributes
        .withAttribute('antiDragon', (a) => a.withMin(30))
        .withAttribute('antiMetal', (a) => a.withMin(30))
        .withAttribute('antiMimic', (a) => a.withMin(30))
        .build(),
      {
        alt: 'A long sword with a black blade that has a white center with black emblems down the length of the blade. A hilt that looks like a mouth with sharp teeth.',
        pathFragment: 'darkCloud',
      },
      {
        buildsUpInto: new Set([new SeventhHeaven()]),
      }
    );
  }
}
