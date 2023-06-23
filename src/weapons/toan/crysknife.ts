import Weapon from '../Weapon';

const crysknife = new Weapon({
  antiBeast: { min: 5 },
  antiSky: { min: 5 },
  antiUndead: { min: 5 },
  attack: { max: 40, min: 12 },
  endurance: { min: 25 },
  holy: { min: 8 },
  magicalPower: { max: 38, min: 8 },
  speed: { min: 70 },
});

export default crysknife;
