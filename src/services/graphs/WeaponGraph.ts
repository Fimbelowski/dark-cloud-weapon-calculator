import AcyclicDirectedGraph from './AcyclicDirectedGraph';
import type Weapon from '../weapons/Weapon';
import type WeaponType from '../weapons/WeaponType';

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

  getWeaponDescendants(weapon: Weapon<T>) {
    const descendants = new Set<Weapon<T>>([...weapon.buildsUpInto]);

    weapon.buildsUpInto.forEach((buildUpWeapon) => {
      this.getWeaponDescendants(buildUpWeapon).forEach((descendant) => {
        descendants.add(descendant);
      });
    });

    return descendants;
  }

  getWeaponLongestDistanceFromLeaf(weapon: Weapon<T>) {
    if (weapon.defaultWeapon) {
      return Math.max(
        ...Array.from(this.vertices.keys()).map((weapon) =>
          this.getVertexLongestDistanceFromLeaf(weapon)
        )
      );
    }

    return this.getVertexLongestDistanceFromLeaf(weapon);
  }
}
