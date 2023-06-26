import DirectedGraph from './DirectedGraph';
import type Sword from './toan/Sword';

export default class WeaponGraph<T extends Sword> extends DirectedGraph {
  constructor() {
    super();
  }

  addWeapon({ buildsUpInto, name }: T) {
    this.addVertex(name);
    buildsUpInto.forEach((destinationWeaponName) => {
      this.addEdge(name, destinationWeaponName);
    });
  }
}
