import WeaponAttributeCollection from './attributes/IWeaponAttributeCollection';
import type WeaponNameByType from './WeaponNameByType';
import type WeaponType from './WeaponType';

interface Icon {
  alt: string;
  pathFragment: string;
}

interface WeaponOptions<T extends WeaponType> {
  buildsUpInto?: Set<Weapon<T>>;
  defaultWeapon?: true;
}

export default abstract class Weapon<T extends WeaponType> {
  public readonly buildsUpInto = new Map<WeaponNameByType[T], Weapon<T>>();
  public readonly defaultWeapon: boolean;
  public readonly icons: Icon[];

  private static BASE_ICON_URL = '../../../assets/weapons';
  abstract ICON_URL_FOLDER: string;

  constructor(
    public readonly name: WeaponNameByType[T],
    public attributes: WeaponAttributeCollection,
    public readonly slots: 2 | 3 | 4 | 5,
    iconOrIcons: Icon | Icon[],
    options?: WeaponOptions<T>
  ) {
    this.icons = Array.isArray(iconOrIcons) ? iconOrIcons : [iconOrIcons];

    const buildsUpInto = options?.buildsUpInto ?? new Set();
    buildsUpInto.forEach((weapon) => {
      this.buildsUpInto.set(weapon.name, weapon);
    });

    this.defaultWeapon = options?.defaultWeapon ?? false;
  }

  public getCompleteIconPath({ pathFragment }: Icon) {
    return `${Weapon.BASE_ICON_URL}/${this.ICON_URL_FOLDER}/${pathFragment}.webp`;
  }

  public is(weapon: Weapon<T>) {
    return this.name === weapon.name;
  }
}
