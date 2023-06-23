import Weapon from '../Weapon';

const darkCloud = new Weapon({
  antiDragon: { min: 30 },
  antiMetal: { min: 30 },
  antiMimic: { min: 30 },
  attack: { max: 145, min: 75 },
  endurance: { min: 55 },
  ice: { min: 50 },
  magicalPower: { max: 99, min: 45 },
  speed: { min: 75 },
  thunder: { min: 45 },
});

export default darkCloud;
