import Weapon from '../Weapon';

const heavensCloud = new Weapon({
  antiBeast: { min: 30 },
  antiDragon: { min: 30 },
  antiMetal: { min: 35 },
  attack: { max: 102, min: 65 },
  endurance: { min: 50 },
  holy: { min: 12 },
  ice: { min: 30 },
  magicalPower: { max: 85, min: 40 },
  speed: { min: 80 },
  thunder: { min: 38 },
  wind: { min: 38 },
});

export default heavensCloud;
