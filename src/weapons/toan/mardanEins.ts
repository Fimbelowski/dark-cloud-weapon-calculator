import Weapon from '../Weapon';

const mardanEins = new Weapon({
  antiDragon: { min: 10 },
  antiMarine: { min: 10 },
  antiMimic: { min: 10 },
  antiRock: { min: 10 },
  antiUndead: { min: 10 },
  attack: { max: 70, min: 50 },
  endurance: { min: 50 },
  fire: { min: 5 },
  holy: { min: 5 },
  ice: { min: 5 },
  magicalPower: { max: 65, min: 50 },
  speed: { min: 50 },
  thunder: { min: 5 },
  wind: { min: 5 },
});

export default mardanEins;
