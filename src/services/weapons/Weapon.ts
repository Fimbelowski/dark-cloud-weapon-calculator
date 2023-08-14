import type WeaponAttributeCollection from './attributes/WeaponAttributeCollection';
import type WeaponNameByType from './WeaponNameByType';
import type WeaponType from './WeaponType';

export interface WeaponOptions {
  defaultWeapon?: boolean;
}

export abstract class Weapon<T extends WeaponType> {
  public readonly defaultWeapon: boolean;

  constructor(
    public readonly name: WeaponNameByType[T],
    public attributes: WeaponAttributeCollection,
    options?: WeaponOptions
  ) {
    this.defaultWeapon = options?.defaultWeapon ?? false;
  }
}
