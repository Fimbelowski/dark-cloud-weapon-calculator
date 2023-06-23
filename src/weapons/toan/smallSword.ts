import Weapon from '../Weapon';

const smallSword = new Weapon({
  antiMarine: { min: 33 },
  attack: { max: 60, min: 20 },
  endurance: { min: 33 },
  ice: { min: 8 },
  magicalPower: { max: 60, min: 36 },
  speed: { min: 80 },
  thunder: { min: 10 },
  wind: { min: 10 },
});

export default smallSword;
