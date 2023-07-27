import choora from './choora';
import dusack from './dusack';
import Sword from './Sword';

export default new Sword(
  'Chopper',
  { alt: 'A short sword with a curvy blade.', pathFragment: 'chopper' },
  new Set([choora, dusack])
);
