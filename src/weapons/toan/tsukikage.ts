import Weapon from '../Weapon';

const tsukikage = new Weapon({
  antiBeast: { min: 8 },
  antiMage: { min: 8 },
  antiMetal: { min: 20 },
  attack: { max: 68, min: 40 },
  endurance: { min: 20 },
  ice: { min: 10 },
  magicalPower: { max: 70, min: 34 },
  speed: { min: 70 },
  thunder: { min: 20 },
  wind: { min: 10 },
});

export default tsukikage;
