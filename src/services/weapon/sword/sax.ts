import dusack from './dusack';
import Sword from './Sword';

export default new Sword(
  'Sax',
  {
    alt: 'A sword with an angular blade that has teeth like a saw. The hilt curves up and away from the blade.',
    pathFragment: 'sax',
  },
  {
    buildsUpInto: new Set([dusack]),
  }
);
