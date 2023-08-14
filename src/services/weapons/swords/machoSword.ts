import agasSword from './AgasSword';
import crossHeinder from './crossHeinder';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default new Sword(
  'Macho Sword',
  new WeaponAttributeCollectionBuilder()
    // Base Attributes
    .withAttribute('attack', (a) => a.withMin(43).withMax(68))
    .withAttribute('endurance', (a) => a.withMin(52))
    .withAttribute('speed', (a) => a.withMin(50))
    .withAttribute('magicalPower', (a) => a.withMin(20).withMax(54))
    // Anti-Monster-Type Attributes
    .withAttribute('antiRock', (a) => a.withMin(8))
    .withAttribute('antiBeast', (a) => a.withMin(12))
    .withAttribute('antiMimic', (a) => a.withMin(35))
    .build(),
  {
    alt: 'A sword with a geometrically patterned blade and a hilt that looks like a man flexing his biceps.',
    pathFragment: 'machoSword',
  },
  {
    buildsUpInto: new Set([agasSword, crossHeinder]),
  }
);
