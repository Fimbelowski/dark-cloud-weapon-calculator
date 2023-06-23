import Weapon from '../Weapon';

const kitchenKnife = new Weapon({
  antiMarine: { min: 33 },
  attack: { max: 30, min: 5 },
  endurance: { min: 22 },
  ice: { min: 8 },
  magicalPower: { max: 15 },
  speed: { min: 80 },
});

export default kitchenKnife;
