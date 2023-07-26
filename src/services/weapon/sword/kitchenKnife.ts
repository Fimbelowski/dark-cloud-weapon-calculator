import chopper from './chopper';
import icon from '../../../assets/weapons/swords/kitchenKnife.webp';
import sax from './sax';
import Sword from './Sword';

export default new Sword('Kitchen Knife', icon, new Set([chopper, sax]));
