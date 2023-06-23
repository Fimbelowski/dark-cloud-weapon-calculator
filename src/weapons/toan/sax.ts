import Weapon from '../Weapon';

const sax = new Weapon({
  antiMimic: { min: 10 },
  antiPlant: { min: 10 },
  attack: { max: 65, min: 26 },
  endurance: { min: 40 },
  magicalPower: { max: 41, min: 15 },
  speed: { min: 50 },
  thunder: { min: 10 },
});

export default sax;
