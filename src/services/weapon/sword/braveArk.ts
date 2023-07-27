import darkCloud from './darkCloud';
import Sword from './Sword';

export default new Sword(
  'Brave Ark',
  {
    alt: 'A double-edged, sand-colored sword with runic markings down the middle of the blade.',
    pathFragment: 'braveArk',
  },
  new Set([darkCloud])
);
