import WeaponAttributeCollection from './attributes/IWeaponAttributeCollection';
import type WeaponNameByType from './WeaponNameByType';
import type WeaponName from './WeaponType';

interface Icon {
  alt: string;
  pathFragment: string;
}

interface WeaponOptions<T extends WeaponName> {
  buildsUpInto?: Set<Weapon<T>>;
  defaultWeapon?: true;
}

export default abstract class Weapon<T extends WeaponName> {
  public readonly buildsUpInto: Set<Weapon<T>>;
  public readonly defaultWeapon: boolean;
  public readonly icons: Icon[];

  private static BASE_ICON_URL = '../../../assets/weapons';
  abstract ICON_URL_FOLDER: string;

  constructor(
    public readonly name: WeaponNameByType[T],
    public attributes: WeaponAttributeCollection,
    iconOrIcons: Icon | Icon[],
    options?: WeaponOptions<T>
  ) {
    this.attributes = attributes;
    this.buildsUpInto = options?.buildsUpInto ?? new Set();
    this.defaultWeapon = options?.defaultWeapon ?? false;
    this.icons = Array.isArray(iconOrIcons) ? iconOrIcons : [iconOrIcons];
    this.name = name;
  }

  getCompleteIconPath({ pathFragment }: Icon) {
    return `${Weapon.BASE_ICON_URL}/${this.ICON_URL_FOLDER}/${pathFragment}.webp`;
  }
}
