import AcyclicDirectedGraph from './AcyclicDirectedGraph';
import type Weapon from '../weapons/Weapon';
import WeaponMap from '../weapons/WeaponMap';
import WeaponMatrix from '../weapons/WeaponMatrix';
import type WeaponType from '../weapons/WeaponType';

export default class WeaponGraph<
  T extends WeaponType
> extends AcyclicDirectedGraph<Weapon<T>> {
  private weaponMap = new WeaponMap<T>();

  constructor(...weapons: Array<Weapon<T>>) {
    super();

    weapons.forEach((weapon) => {
      this.addWeapon(weapon);
    });
  }

  addWeapon(weapon: Weapon<T>) {
    const weaponFromMap = this.weaponMap.getWeapon(weapon);
    this.addVertex(weaponFromMap);

    for (const buildUpWeapon of weaponFromMap.buildsUpInto) {
      const buildUpWeaponFromMap = this.weaponMap.getWeapon(buildUpWeapon);
      this.addEdge(weaponFromMap, buildUpWeaponFromMap);
    }
  }

  getWeaponDescendants(weapon: Weapon<T>) {
    const descendants = new Set<Weapon<T>>();

    weapon.buildsUpInto.forEach((buildUpWeapon) => {
      const buildUpWeaponFromMap = this.weaponMap.getWeapon(buildUpWeapon);
      descendants.add(buildUpWeaponFromMap);
    });

    weapon.buildsUpInto.forEach((buildUpWeapon) => {
      this.getWeaponDescendants(buildUpWeapon).forEach((descendant) => {
        const descendantFromMap = this.weaponMap.getWeapon(descendant);
        descendants.add(descendantFromMap);
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

  toMatrix() {
    return new WeaponMatrix(this, this.weaponMap).matrix;
  }
}
