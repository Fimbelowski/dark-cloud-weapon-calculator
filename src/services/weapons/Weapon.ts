import type WeaponNameByType from './WeaponNameByType';
import type WeaponType from './WeaponType';

export default class Weapon<T extends WeaponType> {
  constructor(public readonly name: WeaponNameByType[T]) {}
}
