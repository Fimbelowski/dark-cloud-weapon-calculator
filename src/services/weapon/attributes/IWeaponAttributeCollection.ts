import type WeaponAttributeWithMin from './WeaponAttributeWithMin';
import type WeaponAttributeWithMinAndMax from './WeaponAttributeWithMinAndMax';

export default interface IWeaponAttributeCollection {
  attack: WeaponAttributeWithMinAndMax;
  endurance: WeaponAttributeWithMin;
  magicalPower: WeaponAttributeWithMinAndMax;
  speed: WeaponAttributeWithMin;
}
