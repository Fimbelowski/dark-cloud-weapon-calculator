import Sword from './Sword';
import tsukikage from './tsukikage';

export default new Sword(
  'Small Sword',
  {
    alt: 'A small, simple sword with a squared curve at the end of the blade.',
    pathFragment: 'smallSword',
  },
  new Set([tsukikage])
);
