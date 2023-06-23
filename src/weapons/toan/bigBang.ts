import Weapon from '../Weapon';

const bigBang = new Weapon({
  antiDragon: { min: 35 },
  antiMage: { min: 40 },
  antiMetal: { min: 40 },
  antiRock: { min: 45 },
  antiUndead: { min: 35 },
  attack: { max: 170, min: 80 },
  endurance: { min: 77 },
  fire: { min: 50 },
  holy: { min: 30 },
  ice: { min: 30 },
  magicalPower: { max: 95, min: 58 },
  speed: { min: 60 },
  thunder: { min: 55 },
  wind: { min: 30 },
});

export default bigBang;
