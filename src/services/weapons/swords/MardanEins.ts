import MardanTwei from './MardanTwei';
import Sword from './Sword';
import WeaponAttributeCollectionBuilder from '../attributes/WeaponAttributeCollectionBuilder';

export default class MardanEins extends Sword {
  constructor() {
    super(
      'Mardan Eins',
      new WeaponAttributeCollectionBuilder()
        // Base Attributes
        .withAttribute('attack', (a) => a.withMin(50).withMax(70))
        .withAttribute('endurance', (a) => a.withMin(50))
        .withAttribute('speed', (a) => a.withMin(50))
        .withAttribute('magicalPower', (a) => a.withMin(50).withMax(65))
        // Elemental Attributes
        .withAttribute('fire', (a) => a.withMin(5))
        .withAttribute('ice', (a) => a.withMin(5))
        .withAttribute('thunder', (a) => a.withMin(5))
        .withAttribute('wind', (a) => a.withMin(5))
        .withAttribute('holy', (a) => a.withMin(5))
        // Anti-Monster-Type Attributes
        .withAttribute('antiDragon', (a) => a.withMin(10))
        .withAttribute('antiUndead', (a) => a.withMin(8))
        .withAttribute('antiMarine', (a) => a.withMin(10))
        .withAttribute('antiRock', (a) => a.withMin(10))
        .withAttribute('antiMimic', (a) => a.withMin(10))
        .build(),
      3,
      {
        alt: 'An ornate sword with a blue hilt and a light blue blade with an ornate eye.',
        pathFragment: 'mardanEins',
      },
      {
        buildsUpInto: new Set([new MardanTwei()]),
      }
    );
  }
}
