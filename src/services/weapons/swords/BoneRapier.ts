import evilcise from './evilcise';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class AgasSword extends Sword {
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
      {
        alt: 'A very thin, ragged looking rapier with a skull and crossbones hilt.',
        pathFragment: 'boneRapier',
      },
      {
        buildsUpInto: new Set([evilcise]),
      }
    );
  }
}
