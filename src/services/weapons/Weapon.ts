import type WeaponNameByType from './WeaponNameByType';
import type WeaponType from './WeaponType';

export default abstract class Weapon<T extends WeaponType> {
  constructor(public readonly name: WeaponNameByType[T]) {}
}
