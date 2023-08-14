import type GunName from './GunName';
import type HammerName from './HammerName';
import type JewelryName from './JewelryName';
import type SlingshotName from './SlingshotName';
import type SpearName from './SpearName';
import type SwordName from './SwordName';
import type WeaponType from './WeaponType';

export default interface WeaponNameByType {
  [WeaponType.Sword]: SwordName;
  [WeaponType.Slingshot]: SlingshotName;
  [WeaponType.Hammer]: HammerName;
  [WeaponType.Jewelry]: JewelryName;
  [WeaponType.Spear]: SpearName;
  [WeaponType.Gun]: GunName;
}
