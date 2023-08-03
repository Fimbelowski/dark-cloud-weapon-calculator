import atlamilliaSword from './atlamilliaSword';
import Sword from './Sword';

export default new Sword(
  "Aga's Sword",
  {
    alt: 'A long, single-edge sword with a notch cut out of the blade. The orangish hilt looks like the face of a cat.',
    pathFragment: 'agasSword',
  },
  {
    buildsUpInto: new Set([atlamilliaSword]),
  }
);
