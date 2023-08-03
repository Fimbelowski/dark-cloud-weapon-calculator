import agasSword from './agasSword';
import crossHeinder from './crossHeinder';
import Sword from './Sword';

export default new Sword(
  'Macho Sword',
  {
    alt: 'A sword with a geometrically patterned blade and a hilt that looks like a man flexing his biceps.',
    pathFragment: 'machoSword',
  },
  {
    buildsUpInto: new Set([agasSword, crossHeinder]),
  }
);
