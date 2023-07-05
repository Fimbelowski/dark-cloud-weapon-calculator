import type WeaponNameByType from './WeaponNameByType';

export default abstract class Weapon<T extends keyof WeaponNameByType> {
  buildsUpInto: Array<Weapon<T>>;
  name: WeaponNameByType[T];

  constructor(name: WeaponNameByType[T], buildsUpInto: Array<Weapon<T>> = []) {
    this.buildsUpInto = buildsUpInto;
    this.name = name;
  }
}
