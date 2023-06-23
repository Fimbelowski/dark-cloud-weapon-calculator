import Weapon from '../Weapon';

const sevenBranchSword = new Weapon({
  attack: { max: 99, min: 65 },
  endurance: { min: 40 },
  fire: { min: 20 },
  holy: { min: 20 },
  ice: { min: 20 },
  magicalPower: { max: 65, min: 35 },
  speed: { min: 80 },
  thunder: { min: 20 },
  wind: { min: 20 },
});

export default sevenBranchSword;
