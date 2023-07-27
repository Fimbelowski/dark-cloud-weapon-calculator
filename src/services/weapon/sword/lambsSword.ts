import atlamilliaSword from './atlamilliaSword';
import Sword from './Sword';

export default new Sword(
  "Lamb's Sword",
  [
    {
      alt: 'A wavy, beige colored sword with a hilt that looks like a lamb.',
      pathFragment: 'lambsSwordLamb',
    },
    {
      alt: 'A large, curved sword with a notch in the and and a hilt that looks like a wolf.',
      pathFragment: 'lambsSwordWolf',
    },
  ],
  new Set([atlamilliaSword])
);
