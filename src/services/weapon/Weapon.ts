import type WeaponNameByType from './WeaponNameByType';
import type WeaponName from './WeaponType';

export default abstract class Weapon<T extends WeaponName> {
  buildsUpInto: Set<Weapon<T>>;
  defaultWeapon: boolean;
  iconPaths: string[];
  name: WeaponNameByType[T];

  private static BASE_ICON_URL = '../../../assets/weapons';
  abstract ICON_URL_FOLDER: string;

  constructor(
    name: WeaponNameByType[T],
    iconPathOrPaths: string | string[],
    buildsUpInto = new Set<Weapon<T>>(),
    defaultWeapon = false
  ) {
    this.buildsUpInto = buildsUpInto;
    this.defaultWeapon = defaultWeapon;
    this.iconPaths =
      typeof iconPathOrPaths === 'string' ? [iconPathOrPaths] : iconPathOrPaths;
    this.name = name;
  }

  getCompleteIconPaths() {
    return this.iconPaths.map(
      (iconPath) =>
        `${Weapon.BASE_ICON_URL}/${this.ICON_URL_FOLDER}/${iconPath}.webp`
    );
  }
}
