import chronicleSword from './chronicleSword';
import Sword from './Sword';

export default new Sword(
  'Atlamillia Sword',
  {
    alt: 'A long, single-edged sword with a blue blade with an orange back. A blue sphere surrounded by orange is on the hilt.',
    pathFragment: 'atlamilliaSword',
  },
  new Set([chronicleSword])
);
