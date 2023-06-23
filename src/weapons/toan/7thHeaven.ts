import Weapon from '../Weapon';

const seventhHeaven = new Weapon({
  antiMage: { min: 8 },
  antiBeast: { min: 8 },
  antiMetal: { min: 10 },
  antiUndead: { min: 88 },
  attack: { max: 240, min: 100 },
  endurance: { min: 40 },
  fire: { min: 80 },
  holy: { min: 12 },
  ice: { min: 10 },
  magicalPower: { max: 110, min: 95 },
  speed: { min: 70 },
  thunder: { min: 85 },
  wind: { min: 10 },
});

export default seventhHeaven;
