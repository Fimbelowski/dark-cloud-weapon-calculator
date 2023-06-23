import Weapon from '../Weapon';

const shamshir = new Weapon({
  antiMage: { min: 4 },
  antiSky: { min: 10 },
  attack: { max: 60, min: 20 },
  endurance: { min: 30 },
  magicalPower: { max: 39, min: 6 },
  speed: { min: 70 },
  thunder: { min: 8 },
});

export default shamshir;
