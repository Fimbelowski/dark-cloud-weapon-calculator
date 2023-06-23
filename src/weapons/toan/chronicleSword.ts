import Weapon from '../Weapon';

const chronicleSword = new Weapon({
  antiBeast: { min: 60 },
  antiDragon: { min: 60 },
  antiMage: { min: 60 },
  antiMarine: { min: 60 },
  antiMetal: { min: 60 },
  antiMimic: { min: 60 },
  antiPlant: { min: 60 },
  antiRock: { min: 60 },
  antiSky: { min: 60 },
  antiUndead: { min: 60 },
  attack: { max: 260, min: 120 },
  endurance: { min: 80 },
  fire: { min: 55 },
  holy: { min: 90 },
  ice: { min: 55 },
  magicalPower: { max: 150, min: 101 },
  speed: { min: 80 },
  thunder: { min: 90 },
  wind: { min: 55 },
});

export default chronicleSword;
