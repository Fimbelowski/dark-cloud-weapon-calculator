import chopper from './chopper';
import icon from '../../../assets/weapons/swords/gladius.webp';
import smallSword from './smallSword';
import Sword from './Sword';

export default new Sword('Gladius', icon, new Set([chopper, smallSword]));
