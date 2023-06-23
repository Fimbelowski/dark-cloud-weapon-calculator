import Weapon from '../Weapon';

const drainSeeker = new Weapon({
  antiBeast: { min: 30 },
  antiMage: { min: 10 },
  antiRock: { min: 30 },
  antiSky: { min: 25 },
  attack: { max: 99, min: 50 },
  endurance: { min: 40 },
  fire: { min: 30 },
  ice: { min: 30 },
  magicalPower: { max: 85, min: 55 },
  speed: { min: 60 },
  thunder: { min: 35 },
  wind: { min: 30 },
});

export default drainSeeker;
