import atlamilliaSword from './atlamilliaSword';
import Sword from './Sword';

export default new Sword(
  '7 Branch Sword',
  {
    alt: 'A long, double-edged sword with branches that look like smaller swords coming out of both sides of the blade.',
    pathFragment: '7BranchSword',
  },
  {
    buildsUpInto: new Set([atlamilliaSword]),
  }
);
