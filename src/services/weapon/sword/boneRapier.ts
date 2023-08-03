import evilcise from './evilcise';
import Sword from './Sword';

export default new Sword(
  'Bone Rapier',
  {
    alt: 'A very thin, ragged looking rapier with a skull and crossbones hilt.',
    pathFragment: 'boneRapier',
  },
  {
    buildsUpInto: new Set([evilcise]),
  }
);
