import type SwordName from './toan/SwordName';

type WeaponName = SwordName;

export default abstract class Weapon<T extends WeaponName> {
  buildsUpInto: T[];
  defaultWeapon: boolean;
  name: T;

  constructor(name: T, buildsUpInto: T[] = [], defaultWeapon = false) {
    {
      this.buildsUpInto = buildsUpInto;
      this.defaultWeapon = defaultWeapon;
      this.name = name;
    }
  }
}
