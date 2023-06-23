import Weapon from '../Weapon';
import type SwordName from './SwordName';

export default abstract class Sword extends Weapon {
  constructor(swordName: SwordName) {
    super(swordName);
  }
}
