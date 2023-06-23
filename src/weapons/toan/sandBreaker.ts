import Weapon from '../Weapon';

const sandBreaker = new Weapon({
  antiBeast: { min: 8 },
  antiMage: { min: 8 },
  antiMetal: { min: 10 },
  attack: { max: 68, min: 28 },
  endurance: { min: 20 },
  holy: { min: 12 },
  ice: { min: 10 },
  magicalPower: { max: 45, min: 14 },
  speed: { min: 70 },
  wind: { min: 10 },
});

export default sandBreaker;
