import DirectedGraph from './DirectedGraph';
import type Sword from './toan/Sword';

export default class WeaponGraph<T extends Sword> extends DirectedGraph {
  constructor(...weapons: T[]) {
    super();
    weapons.forEach((weapon) => {
      this.addWeapon(weapon);
    });
  }

  addWeapon({ buildsUpInto, name }: T) {
    this.addVertex(name);
    buildsUpInto.forEach((destinationWeaponName) => {
      this.addEdge(name, destinationWeaponName);
    });
  }
}
