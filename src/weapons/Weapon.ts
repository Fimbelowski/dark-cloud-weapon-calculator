import type SwordName from './toan/SwordName';

type WeaponName = SwordName;

export default abstract class Weapon {
  name: string;

  constructor(name: WeaponName) {
    {
      this.name = name;
    }
  }
}
