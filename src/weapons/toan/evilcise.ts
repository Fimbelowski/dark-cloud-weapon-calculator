import Weapon from '../Weapon';

const evilcise = new Weapon({
  antiBeast: { min: 10 },
  antiMage: { min: 10 },
  antiMetal: { min: 10 },
  antiUndead: { min: 10 },
  attack: { max: 80, min: 43 },
  endurance: { min: 40 },
  ice: { min: 20 },
  magicalPower: { max: 75, min: 38 },
  speed: { min: 50 },
  thunder: { min: 10 },
});

export default evilcise;
