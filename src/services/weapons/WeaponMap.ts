import type Weapon from './Weapon';
import type WeaponNameByType from './WeaponNameByType';
import type WeaponType from './WeaponType';

export default class WeaponMap<T extends WeaponType> {
  private map = new Map<WeaponNameByType[T], Weapon<T>>();

  public getWeapon(weapon: Weapon<T>): Weapon<T> {
    const { name } = weapon;

    if (!this.map.has(name)) {
      this.map.set(name, weapon);
    }

    const weaponFromMap = this.map.get(name);

    if (weaponFromMap === undefined) {
      throw Error(`Weapon "${name}" could not be found.`);
    }

    return weaponFromMap;
  }

  public getWeaponBuildsUpInto({ buildsUpInto }: Weapon<T>) {
    const setFromMap = new Set<Weapon<T>>();

    buildsUpInto.forEach((buildUpWeapon) => {
      const buildUpWeaponFromMap = this.getWeapon(buildUpWeapon);
      setFromMap.add(buildUpWeaponFromMap);
    });

    return setFromMap;
  }
}
