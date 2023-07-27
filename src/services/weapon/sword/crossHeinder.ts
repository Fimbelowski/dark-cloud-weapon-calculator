import bigBang from './bigBang';
import Sword from './Sword';

export default new Sword(
  'Cross Heinder',
  {
    alt: 'A big, golden sword shaped like  cross with a red channel throughout.',
    pathFragment: 'crossHeinder',
  },
  new Set([bigBang])
);
