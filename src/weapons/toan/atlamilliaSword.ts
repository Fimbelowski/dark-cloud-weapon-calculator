import Weapon from '../Weapon';

const atlamilliaSword = new Weapon({
  antiBeast: { min: 10 },
  antiDragon: { min: 30 },
  antiMage: { min: 20 },
  antiMarine: { min: 10 },
  antiMetal: { min: 30 },
  antiMimic: { min: 40 },
  antiPlant: { min: 10 },
  antiRock: { min: 20 },
  antiSky: { min: 10 },
  antiUndead: { min: 20 },
  attack: { max: 155, min: 70 },
  endurance: { min: 80 },
  fire: { min: 25 },
  holy: { min: 20 },
  ice: { min: 40 },
  magicalPower: { max: 101, min: 60 },
  speed: { min: 80 },
  thunder: { min: 25 },
  wind: { min: 40 },
});

export default atlamilliaSword;
