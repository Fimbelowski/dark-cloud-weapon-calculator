import Weapon from '../Weapon';

const choora = new Weapon({
  antiMage: { min: 20 },
  attack: { max: 74, min: 39 },
  endurance: { min: 44 },
  ice: { min: 8 },
  magicalPower: { max: 55, min: 28 },
  speed: { min: 80 },
});

export default choora;
