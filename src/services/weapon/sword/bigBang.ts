import Sword from './Sword';
import swordOfZeus from './swordOfZeus';

export default new Sword(
  'Big Bang',
  {
    alt: 'A short, but thick double-edged sword with a sun and moon emblem on the hilt.',
    pathFragment: 'bigBang',
  },
  new Set([swordOfZeus])
);
