import type Weapon from './Weapon';
import type WeaponNameByType from './WeaponNameByType';
import type WeaponType from './WeaponType';

export default abstract class WeaponFactory {
  public static weaponMap = new Map<
    WeaponNameByType[WeaponType],
    Weapon<WeaponType>
  >();

  public static getWeapon<T extends WeaponType>(weapon: Weapon<T>) {
    const { name } = weapon;

    if (!this.weaponMap.has(name)) {
      this.weaponMap.set(name, weapon);
    }

    const weaponFromMap = this.weaponMap.get(name);

    if (weaponFromMap === undefined) {
      throw Error(`Weapon ${name} could not be found.`);
    }

    return weaponFromMap;
  }
}
