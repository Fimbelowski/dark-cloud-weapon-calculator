import braveArk from './braveArk';
import sevenBranchSword from './7BranchSword';
import Sword from './Sword';

export default new Sword(
  'Dusack',
  { alt: 'A black, slightly curved cutlass.', pathFragment: 'dusack' },
  {
    buildsUpInto: new Set([braveArk, sevenBranchSword]),
  }
);
