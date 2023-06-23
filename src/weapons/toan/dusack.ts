import Weapon from '../Weapon';

const dusack = new Weapon({
  antiBeast: { min: 8 },
  antiMage: { min: 8 },
  antiMetal: { min: 10 },
  attack: { max: 78, min: 38 },
  endurance: { min: 40 },
  holy: { min: 12 },
  ice: { min: 20 },
  magicalPower: { max: 45, min: 29 },
  speed: { min: 70 },
  wind: { min: 20 },
});

export default dusack;
