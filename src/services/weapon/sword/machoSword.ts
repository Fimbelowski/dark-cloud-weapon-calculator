import agasSword from './agasSword';
import crossHeinder from './crossHeinder';
import Sword from './Sword';

export default new Sword(
  'Macho Sword',
  'machoSword',
  new Set([agasSword, crossHeinder])
);
