import Weapon from '../Weapon';

const maneater = new Weapon({
  antiBeast: { min: 10 },
  antiMage: { min: 55 },
  antiMetal: { min: 10 },
  antiUndead: { min: 10 },
  attack: { max: 99, min: 55 },
  endurance: { min: 40 },
  magicalPower: { max: 63, min: 55 },
  speed: { min: 50 },
  thunder: { min: 10 },
});

export default maneater;
