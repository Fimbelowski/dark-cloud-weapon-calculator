import Weapon from '../Weapon';
import type SwordName from './SwordName';

export default abstract class Sword extends Weapon<SwordName> {
  constructor(swordName: SwordName, buildsUpInto: SwordName[]) {
    super(swordName, buildsUpInto);
  }
}
