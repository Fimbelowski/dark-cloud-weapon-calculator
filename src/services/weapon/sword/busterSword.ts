import claymore from './claymore';
import Sword from './Sword';

export default new Sword(
  'Buster Sword',
  {
    alt: 'A double-edged sword with a hollow channel near the base of the blade.',
    pathFragment: 'busterSword',
  },
  {
    buildsUpInto: new Set([claymore]),
  }
);
