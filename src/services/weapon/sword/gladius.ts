import chopper from './chopper';
import smallSword from './smallSword';
import Sword from './Sword';

export default new Sword(
  'Gladius',
  {
    alt: 'A medium-sized symmetrical sword with a leather hilt.',
    pathFragment: 'gladius',
  },
  new Set([chopper, smallSword])
);
