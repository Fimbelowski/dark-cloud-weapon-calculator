import evilcise from './evilcise';
import Sword from './Sword';
import tsukikage from './tsukikage';

export default new Sword(
  'Serpent Sword',
  'serpentSword',
  new Set([evilcise, tsukikage])
);
