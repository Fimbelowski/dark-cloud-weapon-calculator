import braveArk from './braveArk';
import Sword from './Sword';

export default new Sword(
  'Antique Sword',
  {
    alt: 'A long, double-edge sword with a mostly flat blade that flares at the end.',
    pathFragment: 'antiqueSword',
  },
  {
    buildsUpInto: new Set([braveArk]),
  }
);
