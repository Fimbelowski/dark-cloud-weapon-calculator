import type WeaponNameByType from './WeaponNameByType';
import type WeaponName from './WeaponType';

export default abstract class Weapon<T extends WeaponName> {
  buildsUpInto: Set<Weapon<T>>;
  defaultWeapon: boolean;
  icons: string[];
  name: WeaponNameByType[T];

  constructor(
    name: WeaponNameByType[T],
    iconOrIcons: string | string[],
    buildsUpInto = new Set<Weapon<T>>(),
    defaultWeapon = false
  ) {
    this.buildsUpInto = buildsUpInto;
    this.defaultWeapon = defaultWeapon;
    this.icons = typeof iconOrIcons === 'string' ? [iconOrIcons] : iconOrIcons;
    this.name = name;
  }
}
