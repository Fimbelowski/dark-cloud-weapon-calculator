import Weapon from '../Weapon';

const braveArk = new Weapon({
  antiMage: { min: 18 },
  antiMetal: { min: 25 },
  antiSky: { min: 30 },
  antiUndead: { min: 34 },
  attack: { max: 95, min: 60 },
  endurance: { min: 75 },
  fire: { min: 30 },
  holy: { min: 40 },
  magicalPower: { max: 60, min: 20 },
  speed: { min: 80 },
});

export default braveArk;
