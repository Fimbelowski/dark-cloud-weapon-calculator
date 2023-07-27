import darkCloud from './darkCloud';
import Sword from './Sword';

export default new Sword(
  "Heaven's Cloud",
  {
    alt: 'A sword with a deep blue blade with ornate golden engravings and a golden hilt.',
    pathFragment: 'heavensCloud',
  },
  new Set([darkCloud])
);
