import seventhHeaven from './7thHeaven';
import Sword from './Sword';

export default new Sword(
  'Dark Cloud',
  {
    alt: 'A long sword with a black blade that has a white center with black emblems down the length of the blade. A hilt that looks like a mouth with sharp teeth.',
    pathFragment: 'darkCloud',
  },
  {
    buildsUpInto: new Set([seventhHeaven]),
  }
);
