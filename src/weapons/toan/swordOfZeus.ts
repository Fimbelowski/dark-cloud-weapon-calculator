import Weapon from '../Weapon';

const swordOfZeus = new Weapon({
  antiBeast: { min: 54 },
  antiDragon: { min: 30 },
  antiMage: { min: 60 },
  antiMarine: { min: 33 },
  antiMetal: { min: 49 },
  antiMimic: { min: 22 },
  antiPlant: { min: 29 },
  antiRock: { min: 30 },
  antiSky: { min: 22 },
  antiUndead: { min: 30 },
  attack: { max: 199, min: 100 },
  endurance: { min: 77 },
  fire: { min: 70 },
  holy: { min: 70 },
  ice: { min: 70 },
  magicalPower: { max: 176, min: 95 },
  speed: { min: 60 },
  thunder: { min: 70 },
  wind: { min: 70 },
});

export default swordOfZeus;
