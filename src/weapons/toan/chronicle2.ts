import Weapon from '../Weapon';

const chronicle2 = new Weapon({
  antiBeast: { min: 50 },
  antiDragon: { min: 50 },
  antiMage: { min: 50 },
  antiMarine: { min: 50 },
  antiMetal: { min: 50 },
  antiMimic: { min: 50 },
  antiPlant: { min: 50 },
  antiRock: { min: 50 },
  antiSky: { min: 50 },
  antiUndead: { min: 50 },
  attack: { max: 350, min: 199 },
  endurance: { min: 99 },
  fire: { min: 50 },
  holy: { min: 50 },
  ice: { min: 50 },
  magicalPower: { max: 200, min: 110 },
  speed: { min: 89 },
  thunder: { min: 50 },
  wind: { min: 50 },
});

export default chronicle2;
