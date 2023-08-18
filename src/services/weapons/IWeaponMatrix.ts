import type Weapon from './Weapon';
import type WeaponType from './WeaponType';

export type WeaponMatrixRow<T extends WeaponType> = Weapon<T>[];
export type IWeaponMatrix<T extends WeaponType> = WeaponMatrixRow<T>[];
