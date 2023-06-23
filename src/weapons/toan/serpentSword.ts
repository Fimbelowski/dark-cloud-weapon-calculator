import Weapon from '../Weapon';

const serpentSword = new Weapon({
  antiBeast: { min: 24 },
  antiDragon: { min: 21 },
  antiMarine: { min: 12 },
  antiPlant: { min: 23 },
  antiSky: { min: 23 },
  attack: { max: 70, min: 22 },
  endurance: { min: 48 },
  magicalPower: { max: 55, min: 8 },
  speed: { min: 60 },
  thunder: { min: 14 },
  wind: { min: 12 },
});

export default serpentSword;
