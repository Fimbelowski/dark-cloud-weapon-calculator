import Weapon from '../Weapon';

const machoSword = new Weapon({
  antiBeast: { min: 12 },
  antiMimic: { min: 35 },
  antiRock: { min: 8 },
  attack: { max: 68, min: 43 },
  endurance: { min: 52 },
  magicalPower: { max: 54, min: 20 },
  speed: { min: 50 },
});

export default machoSword;
