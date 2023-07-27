import crossHeinder from './crossHeinder';
import Sword from './Sword';

export default new Sword(
  'Claymore',
  {
    alt: 'A long sword with a channel in the blade and a large, red hilt.',
    pathFragment: 'claymore',
  },
  new Set([crossHeinder])
);
