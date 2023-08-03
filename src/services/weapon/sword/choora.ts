import heavensCloud from './heavensCloud';
import maneater from './maneater';
import Sword from './Sword';

export default new Sword(
  'Choora',
  {
    alt: 'A short swordwith a goldish blade that looks fastened to the hilt with many leather straps.',
    pathFragment: 'choora',
  },
  {
    buildsUpInto: new Set([heavensCloud, maneater]),
  }
);
