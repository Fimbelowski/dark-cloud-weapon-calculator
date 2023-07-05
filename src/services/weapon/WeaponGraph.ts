import DirectedGraph from '../graph/DirectedGraph';
import type Weapon from './Weapon';
import type WeaponNameByType from './WeaponNameByType';

export default class WeaponGraph<
  T extends keyof WeaponNameByType
> extends DirectedGraph<Weapon<T>> {
  constructor(...weapons: Array<Weapon<T>>) {
    super();

    weapons.forEach((weapon) => {
      const { buildsUpInto, name } = weapon;

      this.addVertex(weapon);
      buildsUpInto.forEach((buildUpWeapon) => {
        this.addEdge(name, buildUpWeapon);
      });
    });
  }
}
