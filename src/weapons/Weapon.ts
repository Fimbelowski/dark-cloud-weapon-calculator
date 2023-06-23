import type SwordName from './toan/SwordName';

type WeaponName = SwordName;

export default abstract class Weapon<T extends WeaponName> {
  buildsUpInto: T[];
  name: T;

  constructor(name: T, buildsUpInto: T[] = []) {
    {
      this.buildsUpInto = buildsUpInto;
      this.name = name;
    }
  }
}
