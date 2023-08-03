import atlamilliaSword from './atlamilliaSword';
import Sword from './Sword';

export default new Sword(
  'Maneater',
  {
    alt: 'A curved sword with a thick red channel with oval-shaped stones embedded in it.',
    pathFragment: 'maneater',
  },
  {
    buildsUpInto: new Set([atlamilliaSword]),
  }
);
