import Weapon from '../Weapon';

const crossHeinder = new Weapon({
  antiDragon: { min: 30 },
  antiMetal: { min: 15 },
  antiMimic: { min: 20 },
  antiRock: { min: 35 },
  attack: { max: 110, min: 68 },
  endurance: { min: 40 },
  fire: { min: 10 },
  holy: { min: 30 },
  ice: { min: 10 },
  magicalPower: { max: 60, min: 21 },
  speed: { min: 60 },
  thunder: { min: 10 },
});

export default crossHeinder;
