import type WeaponNameByType from './WeaponNameByType';
import type WeaponName from './WeaponName';

export default abstract class Weapon<T extends WeaponName> {
  buildsUpInto: Array<Weapon<T>>;
  name: WeaponNameByType[T];

  constructor(name: WeaponNameByType[T], buildsUpInto: Array<Weapon<T>> = []) {
    this.buildsUpInto = buildsUpInto;
    this.name = name;
  }

  get distanceFromTerminal(): number {
    const { buildsUpInto } = this;

    if (buildsUpInto.length === 0) {
      return 0;
    }

    return buildsUpInto[0].distanceFromTerminal + 1;
  }
}
