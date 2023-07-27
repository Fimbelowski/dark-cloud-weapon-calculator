import chopper from './chopper';
import smallSword from './smallSword';
import Sword from './Sword';

export default new Sword('Gladius', 'gladius', new Set([chopper, smallSword]));
