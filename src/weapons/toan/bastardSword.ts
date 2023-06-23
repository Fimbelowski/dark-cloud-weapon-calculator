import Weapon from '../Weapon';

const bastardSword = new Weapon({
  antiBeast: { min: 10 },
  antiMage: { min: 10 },
  antiMetal: { min: 10 },
  antiUndead: { min: 10 },
  attack: { max: 65, min: 24 },
  endurance: { min: 40 },
  magicalPower: { max: 35 },
  speed: { min: 50 },
});

export default bastardSword;
