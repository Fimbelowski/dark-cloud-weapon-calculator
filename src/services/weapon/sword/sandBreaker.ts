import antiqueSword from './antiqueSword';
import Sword from './Sword';

export default new Sword(
  'Sand Breaker',
  {
    alt: 'A sword with a rust-colored blade, three vertical slits near the base of the blade, and a hole on the back edge of the blade near the hilt.',
    pathFragment: 'sandBreaker',
  },
  new Set([antiqueSword])
);
