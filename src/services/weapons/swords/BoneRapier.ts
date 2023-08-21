import Evilcise from './Evilcise';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class BoneRapier extends Sword {
  constructor() {
    super(
      'Bone Rapier',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(15).withMax(55))
        .withAttribute('endurance', (a) => a.withMin(20))
        .withAttribute('speed', (a) => a.withMin(80))
        .withAttribute('magicalPower', (a) => a.withMin(30).withMax(62))
        // Elemental Attributes
        .withAttribute('ice', (a) => a.withMin(5))
        .build(),
      2,
      {
        alt: 'A very thin, ragged looking rapier with a skull and crossbones hilt.',
        pathFragment: 'boneRapier',
      },
      {
        buildsUpInto: new Set([new Evilcise()]),
      }
    );
  }
}
