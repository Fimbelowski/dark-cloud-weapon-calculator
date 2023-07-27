import chopper from './chopper';
import sax from './sax';
import Sword from './Sword';

export default new Sword(
  'Kitchen Knife',
  {
    alt: 'A dark blue kitchen cleaver with a whitish edge.',
    pathFragment: 'kitchenKnife',
  },
  new Set([chopper, sax])
);
