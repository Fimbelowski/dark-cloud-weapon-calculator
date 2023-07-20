import AcyclicDirectedGraph from './AcyclicDirectedGraph';
import type Weapon from '../weapon/Weapon';
import type WeaponType from '../weapon/WeaponType';

export default class WeaponGraph<
  T extends WeaponType
> extends AcyclicDirectedGraph<Weapon<T>> {
  constructor(...weapons: Array<Weapon<T>>) {
    super();

    weapons.forEach((weapon) => {
      this.addWeapon(weapon);
    });
  }

  addWeapon(weapon: Weapon<T>) {
    this.addVertex(weapon);

    for (const buildUpWeapon of weapon.buildsUpInto) {
      this.addEdge(weapon, buildUpWeapon);
    }
  }
}
