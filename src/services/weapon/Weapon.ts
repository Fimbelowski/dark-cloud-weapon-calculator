import type WeaponNameByType from './WeaponNameByType';
import type WeaponName from './WeaponType';

interface Icon {
  alt: string;
  pathFragment: string;
}

export default abstract class Weapon<T extends WeaponName> {
  buildsUpInto: Set<Weapon<T>>;
  defaultWeapon: boolean;
  icons: Icon[];
  name: WeaponNameByType[T];

  private static BASE_ICON_URL = '../../../assets/weapons';
  abstract ICON_URL_FOLDER: string;

  constructor(
    name: WeaponNameByType[T],
    iconOrIcons: Icon | Icon[],
    buildsUpInto = new Set<Weapon<T>>(),
    defaultWeapon = false
  ) {
    this.buildsUpInto = buildsUpInto;
    this.defaultWeapon = defaultWeapon;
    this.icons = Array.isArray(iconOrIcons) ? iconOrIcons : [iconOrIcons];
    this.name = name;
  }

  getCompleteIconPath({ pathFragment }: Icon) {
    return `${Weapon.BASE_ICON_URL}/${this.ICON_URL_FOLDER}/${pathFragment}.webp`;
  }
}
