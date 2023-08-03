import sandBreaker from './sandBreaker';
import smallSword from './smallSword';
import Sword from './Sword';

export default new Sword(
  'Crysknife',
  {
    alt: 'A short sword with a curvy, blue, triangle-shaped blade.',
    pathFragment: 'crysknife',
  },
  {
    buildsUpInto: new Set([sandBreaker, smallSword]),
  }
);
