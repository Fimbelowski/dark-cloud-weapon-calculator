import Weapon from '../Weapon';

const gladius = new Weapon({
  antiUndead: { min: 15 },
  attack: { max: 37, min: 10 },
  endurance: { min: 32 },
  holy: { min: 5 },
  magicalPower: { max: 36, min: 6 },
  speed: { min: 60 },
});

export default gladius;
