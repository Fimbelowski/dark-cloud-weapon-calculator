import sandBreaker from './sandBreaker';
import smallSword from './smallSword';
import Sword from './Sword';

export default new Sword(
  'Crysknife',
  'crysknife',
  new Set([sandBreaker, smallSword])
);
