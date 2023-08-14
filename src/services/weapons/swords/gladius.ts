import chopper from './Chopper';
import smallSword from './smallSword';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default new Sword(
  'Gladius',
  new WeaponAttributeCollectionBuilder()
    // Base Attributes
    .withAttribute('attack', (a) => a.withMin(10).withMax(37))
    .withAttribute('endurance', (a) => a.withMin(32))
    .withAttribute('speed', (a) => a.withMin(60))
    .withAttribute('magicalPower', (a) => a.withMin(6).withMax(36))
    // Elemental Attributes
    .withAttribute('holy', (a) => a.withMin(5))
    // Anti-Monster-Type Attributes
    .withAttribute('antiUndead', (a) => a.withMin(15))
    .build(),
  {
    alt: 'A medium-sized symmetrical sword with a leather hilt.',
    pathFragment: 'gladius',
  },
  {
    buildsUpInto: new Set([chopper, smallSword]),
  }
);
