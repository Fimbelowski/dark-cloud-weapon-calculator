import Weapon from '../Weapon';
import type SwordName from './SwordName';

export default class Sword extends Weapon<'sword'> {
  constructor(name: SwordName, buildUpInto?: Sword[]) {
    super(name, buildUpInto);
  }
}
