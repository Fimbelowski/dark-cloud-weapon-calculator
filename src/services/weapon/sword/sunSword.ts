import bigBang from './bigBang';
import Sword from './Sword';

export default new Sword(
  'Sun Sword',
  {
    alt: 'A golden blade with a black patterned center and a sun and moon emblem on the hilt.',
    pathFragment: 'sunSword',
  },
  new Set([bigBang])
);
