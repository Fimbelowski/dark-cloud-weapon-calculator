import Weapon from '../Weapon';

const claymore = new Weapon({
  antiBeast: { min: 8 },
  antiMage: { min: 8 },
  antiMetal: { min: 10 },
  antiMimic: { min: 10 },
  antiRock: { min: 15 },
  antiSky: { min: 10 },
  attack: { max: 68, min: 55 },
  endurance: { min: 50 },
  holy: { min: 12 },
  ice: { min: 10 },
  magicalPower: { max: 45, min: 20 },
  speed: { min: 70 },
  wind: { min: 10 },
});

export default claymore;
