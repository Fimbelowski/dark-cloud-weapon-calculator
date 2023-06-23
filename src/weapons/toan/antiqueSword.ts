import Weapon from '../Weapon';

const antiqueSword = new Weapon({
  antiDragon: { min: 20 },
  antiMimic: { min: 10 },
  antiRock: { min: 10 },
  antiUndead: { min: 8 },
  attack: { max: 77, min: 37 },
  endurance: { min: 39 },
  fire: { min: 6 },
  holy: { min: 20 },
  magicalPower: { max: 47, min: 25 },
  speed: { min: 50 },
});

export default antiqueSword;
