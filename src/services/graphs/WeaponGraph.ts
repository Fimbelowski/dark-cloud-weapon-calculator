import AcyclicDirectedGraph from './AcyclicDirectedGraph';
import type Weapon from '../weapons/Weapon';
import WeaponMatrix from '../weapons/WeaponMatrix';
import type WeaponNameByType from '../weapons/WeaponNameByType';
import type WeaponType from '../weapons/WeaponType';

export default class WeaponGraph<
  T extends WeaponType
> extends AcyclicDirectedGraph<Weapon<T>> {
  private weaponMap = new Map<WeaponNameByType[T], Weapon<T>>();

  constructor(...weapons: Array<Weapon<T>>) {
    super();

    weapons.forEach((weapon) => {
      this.addWeapon(weapon);
    });
  }

  addWeapon(weapon: Weapon<T>) {
    const weaponFromMap = this.getWeaponFromMap(weapon);
    this.addVertex(weaponFromMap);

    weapon.buildsUpInto.forEach((buildUpWeapon) => {
      const buildUpWeaponFromMap = this.getWeaponFromMap(buildUpWeapon);
      this.addEdge(weaponFromMap, buildUpWeaponFromMap);
    });
  }

  getWeaponBuildUpOptions(
    sourceWeapon: Weapon<T> | undefined,
    destinationWeapon: Weapon<T> | undefined
  ) {
    const buildUpOptions = new Map<WeaponNameByType[T], Weapon<T>>();

    if (sourceWeapon === undefined) {
      this.vertices.forEach((vertex, weapon) => {
        buildUpOptions.set(weapon.name, weapon);
      });

      return buildUpOptions;
    }

    buildUpOptions.set(sourceWeapon.name, sourceWeapon);

    if (destinationWeapon === undefined) {
      buildUpOptions.set(sourceWeapon.name, sourceWeapon);

      this.getWeaponDescendants(sourceWeapon).forEach((descendant) => {
        buildUpOptions.set(descendant.name, descendant);
      });

      return buildUpOptions;
    }

    this.getWeaponBuildUpOptionsDfs(
      sourceWeapon,
      destinationWeapon,
      buildUpOptions
    );

    return buildUpOptions;
  }

  private getWeaponBuildUpOptionsDfs(
    sourceWeapon: Weapon<T>,
    destinationWeapon: Weapon<T>,
    buildUpOptions: Map<WeaponNameByType[T], Weapon<T>>,
    buildUpOptionsStack: Array<Weapon<T>> = []
  ) {
    if (sourceWeapon.is(destinationWeapon)) {
      buildUpOptionsStack.forEach((weapon) => {
        buildUpOptions.set(weapon.name, weapon);
      });
    } else {
      sourceWeapon.buildsUpInto.forEach((buildUpWeapon) => {
        buildUpOptionsStack.push(buildUpWeapon);

        this.getWeaponBuildUpOptionsDfs(
          buildUpWeapon,
          destinationWeapon,
          buildUpOptions,
          buildUpOptionsStack
        );

        buildUpOptionsStack.pop();
      });
    }
  }

  private getWeaponFromMap(weapon: Weapon<T>) {
    const { name } = weapon;

    if (!this.weaponMap.has(name)) {
      this.weaponMap.set(name, weapon);
    }

    const weaponFromMap = this.weaponMap.get(name);

    if (weaponFromMap === undefined) {
      throw Error(`Weapon "${name}" could not be found.`);
    }

    return weaponFromMap;
  }

  public getWeaponDescendants(weapon: Weapon<T>) {
    const descendants = new Set<Weapon<T>>();

    weapon.buildsUpInto.forEach((buildUpWeapon) => {
      descendants.add(buildUpWeapon);
    });

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

  toMatrix() {
    return new WeaponMatrix(this).matrix;
  }
}
