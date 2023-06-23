import Weapon from '../Weapon';

const lambsSword = new Weapon({
  antiBeast: { min: 35 },
  antiPlant: { min: 30 },
  antiSky: { min: 35 },
  attack: { max: 80, min: 45 },
  endurance: { min: 44 },
  magicalPower: { max: 60, min: 20 },
  speed: { min: 70 },
  thunder: { min: 20 },
});

export default lambsSword;
