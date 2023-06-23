import Weapon from '../Weapon';

const dagger = new Weapon({
  antiBeast: { min: 4 },
  attack: { max: 25, min: 6 },
  endurance: { min: 30 },
  magicalPower: { max: 24, min: 2 },
  speed: { min: 70 },
  wind: { min: 4 },
});

export default dagger;
