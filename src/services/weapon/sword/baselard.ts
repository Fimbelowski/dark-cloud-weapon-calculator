import sax from './sax';
import shamshir from './shamshir';
import Sword from './Sword';

export default new Sword(
  'Baselard',
  {
    alt: 'A medium-sized, single-edged sword with a tan blade that curves slightly and has a spur on the backside.',
    pathFragment: 'baselard',
  },
  new Set([sax, shamshir])
);
