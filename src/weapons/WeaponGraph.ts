import DirectedGraph from './DirectedGraph';
import type Weapon from './Weapon';

export default class WeaponGraph<T extends Weapon> extends DirectedGraph {
  constructor() {
    super();
  }

  addWeapon(weapon: T) {
    this.addVertex(weapon.name);
  }
}
