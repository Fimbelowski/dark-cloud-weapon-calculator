import agasSword from './agasSword';
import crossHeinder from './crossHeinder';
import icon from '../../../assets/weapons/swords/machoSword.webp';
import Sword from './Sword';

export default new Sword(
  'Macho Sword',
  icon,
  new Set([agasSword, crossHeinder])
);
