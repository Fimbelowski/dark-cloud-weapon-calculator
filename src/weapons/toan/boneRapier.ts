import Weapon from '../Weapon';

const boneRapier = new Weapon({
  attack: { max: 55, min: 15 },
  endurance: { min: 20 },
  ice: { min: 5 },
  magicalPower: { max: 62, min: 30 },
  speed: { min: 80 },
});

export default boneRapier;
