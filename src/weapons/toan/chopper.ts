import Weapon from '../Weapon';

const chopper = new Weapon({
  antiBeast: { min: 10 },
  antiMage: { min: 10 },
  antiMetal: { min: 10 },
  antiUndead: { min: 10 },
  attack: { max: 65, min: 30 },
  endurance: { min: 40 },
  magicalPower: { max: 43, min: 15 },
  speed: { min: 50 },
  thunder: { min: 10 },
});

export default chopper;
