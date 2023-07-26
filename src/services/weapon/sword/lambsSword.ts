import atlamilliaSword from './atlamilliaSword';
import iconLamb from '../../../assets/weapons/swords/lambsSwordLamb.webp';
import iconWolf from '../../../assets/weapons/swords/lambsSwordWolf.webp';
import Sword from './Sword';

export default new Sword(
  "Lamb's Sword",
  [iconLamb, iconWolf],
  new Set([atlamilliaSword])
);
