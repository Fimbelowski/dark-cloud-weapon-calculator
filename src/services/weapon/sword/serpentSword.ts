import evilcise from './evilcise';
import Sword from './Sword';
import tsukikage from './tsukikage';

export default new Sword(
  'Serpent Sword',
  {
    alt: 'A red sword with a white-edged blade and pentagonal holes near the tip.',
    pathFragment: 'serpentSword',
  },
  new Set([evilcise, tsukikage])
);
