import lambsSword from './lambsSword';
import Sword from './Sword';

export default new Sword(
  'Wise Owl Sword',
  {
    alt: "A silvery sword whose tip looks feathered. There is an owl's face on the hilt with a large moustache.",
    pathFragment: 'wiseOwlSword',
  },
  {
    buildsUpInto: new Set([lambsSword]),
  }
);
