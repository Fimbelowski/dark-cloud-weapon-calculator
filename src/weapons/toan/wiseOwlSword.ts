import Weapon from '../Weapon';

const wiseOwlSword = new Weapon({
  antiBeast: { min: 12 },
  antiMage: { min: 12 },
  antiPlant: { min: 12 },
  attack: { max: 55, min: 30 },
  endurance: { min: 22 },
  magicalPower: { max: 50, min: 12 },
  speed: { min: 70 },
  wind: { min: 16 },
});

export default wiseOwlSword;
