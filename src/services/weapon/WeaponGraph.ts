import type Weapon from './Weapon';
import type WeaponName from './WeaponName';

export default class WeaponGraph<T extends WeaponName> {
  adjacencyList: Map<Weapon<T>, Array<Weapon<T>>>;
  vertices: Set<Weapon<T>>;

  constructor(...weapons: Array<Weapon<T>>) {
    this.adjacencyList = new Map();
    this.vertices = new Set();

    weapons.forEach((weapon) => {
      this.addWeapon(weapon);
    });
  }

  addEdge(from: Weapon<T>, to: Weapon<T>) {
    if (!this.adjacencyList.has(from)) {
      this.adjacencyList.set(from, []);
    }

    this.adjacencyList.get(from)?.push(to);
  }

  addVertex(weapon: Weapon<T>) {
    this.vertices.add(weapon);
  }

  addWeapon(weapon: Weapon<T>) {
    this.addVertex(weapon);
    weapon.buildsUpInto.forEach((buildUpWeapon) => {
      this.addEdge(weapon, buildUpWeapon);
    });
  }

  getVertexDistanceFromTerminal(weapon: Weapon<T>): number {
    const { buildsUpInto, defaultWeapon } = weapon;

    if (defaultWeapon) {
      const clonedVertices = new Set(this.vertices);
      clonedVertices.delete(weapon);

      const distances = new Set<number>();
      clonedVertices.forEach((vertex) => {
        distances.add(this.getVertexDistanceFromTerminal(vertex));
      });

      return Math.max(...Array.from(distances));
    }

    if (buildsUpInto.size === 0) {
      return 0;
    }

    return (
      this.getVertexDistanceFromTerminal([...buildsUpInto.values()][0]) + 1
    );
  }
}
