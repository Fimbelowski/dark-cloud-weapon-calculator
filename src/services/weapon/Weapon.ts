import type WeaponNameByType from './WeaponNameByType';
import type WeaponName from './WeaponType';

export default abstract class Weapon<T extends WeaponName> {
  buildsUpInto: Set<Weapon<T>>;
  defaultWeapon: boolean;
  name: WeaponNameByType[T];

  constructor(
    name: WeaponNameByType[T],
    buildsUpInto = new Set<Weapon<T>>(),
    defaultWeapon = false
  ) {
    this.buildsUpInto = buildsUpInto;
    this.defaultWeapon = defaultWeapon;
    this.name = name;
  }
}
