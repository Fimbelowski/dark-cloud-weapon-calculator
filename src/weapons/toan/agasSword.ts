import Weapon from '../Weapon';

const agasSword = new Weapon({
  antiBeast: { min: 20 },
  antiDragon: { min: 20 },
  antiMage: { min: 18 },
  antiMarine: { min: 20 },
  antiMetal: { min: 20 },
  antiMimic: { min: 10 },
  antiPlant: { min: 23 },
  antiRock: { min: 20 },
  antiSky: { min: 20 },
  antiUndead: { min: 23 },
  attack: { max: 95, min: 60 },
  endurance: { min: 60 },
  fire: { min: 6 },
  holy: { min: 8 },
  magicalPower: { max: 80, min: 30 },
  speed: { min: 50 },
});

export default agasSword;
