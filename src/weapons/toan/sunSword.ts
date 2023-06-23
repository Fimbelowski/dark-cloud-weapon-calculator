import Weapon from '../Weapon';

const sunSword = new Weapon({
  antiDragon: { min: 30 },
  antiMage: { min: 10 },
  antiMetal: { min: 15 },
  antiRock: { min: 30 },
  antiUndead: { min: 30 },
  attack: { max: 110, min: 50 },
  endurance: { min: 40 },
  fire: { min: 30 },
  magicalPower: { max: 58, min: 30 },
  speed: { min: 60 },
});

export default sunSword;
