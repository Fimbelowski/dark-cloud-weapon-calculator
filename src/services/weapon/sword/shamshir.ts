import dusack from './dusack';
import Sword from './Sword';

export default new Sword(
  'Shamshir',
  {
    alt: 'A gray sword with a bluish center to the blade. Very curved blade and hilt.',
    pathFragment: 'shamshir',
  },
  new Set([dusack])
);
