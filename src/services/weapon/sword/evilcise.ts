import drainSeeker from './drainSeeker';
import Sword from './Sword';

export default new Sword(
  'Evilcise',
  {
    alt: 'A black sword with a spiral hole cut from the back of the blade and a thin blue hilt.',
    pathFragment: 'evilcise',
  },
  {
    buildsUpInto: new Set([drainSeeker]),
  }
);
