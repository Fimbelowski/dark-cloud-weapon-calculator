import Weapon from '../Weapon';

const baselard = new Weapon({
  antiSky: { min: 10 },
  attack: { max: 26, min: 8 },
  endurance: { min: 2 },
  fire: { min: 6 },
  magicalPower: { max: 25, min: 4 },
  speed: { min: 60 },
});

export default baselard;
