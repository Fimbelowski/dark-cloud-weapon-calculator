interface WeaponAttribute {
  current: number;
  max: number;
  min: number;
}

type BaseAttributes = 'attack' | 'endurance' | 'speed' | 'magicalPower';

type ElementalAttributes = 'fire' | 'holy' | 'ice' | 'thunder' | 'wind';

type MonsterTypes =
  | 'beast'
  | 'dragon'
  | 'mage'
  | 'marine'
  | 'metal'
  | 'mimic'
  | 'plant'
  | 'rock'
  | 'sky'
  | 'undead';

type AntiMonstertTypeAttributes = `anti${Capitalize<MonsterTypes>}`;

type WeaponAttributeKeys =
  | BaseAttributes
  | ElementalAttributes
  | AntiMonstertTypeAttributes;

type WeaponWithPartialAttributes = {
  [key in WeaponAttributeKeys]: Partial<WeaponAttribute>;
};

export default class Weapon {
  // Not DRY but couldn't find an elegant solution with TS.
  antiBeast: WeaponAttribute;
  antiDragon: WeaponAttribute;
  antiMage: WeaponAttribute;
  antiMarine: WeaponAttribute;
  antiMetal: WeaponAttribute;
  antiMimic: WeaponAttribute;
  antiPlant: WeaponAttribute;
  antiRock: WeaponAttribute;
  antiSky: WeaponAttribute;
  antiUndead: WeaponAttribute;
  attack: WeaponAttribute;
  endurance: WeaponAttribute;
  fire: WeaponAttribute;
  holy: WeaponAttribute;
  ice: WeaponAttribute;
  magicalPower: WeaponAttribute;
  speed: WeaponAttribute;
  thunder: WeaponAttribute;
  wind: WeaponAttribute;

  constructor({
    antiBeast,
    antiDragon,
    antiMage,
    antiMarine,
    antiMetal,
    antiMimic,
    antiPlant,
    antiRock,
    antiSky,
    antiUndead,
    attack,
    endurance,
    fire,
    holy,
    ice,
    magicalPower,
    speed,
    thunder,
    wind,
  }: WeaponWithPartialAttributes) {
    this.antiBeast = this.mergeDefaultsIntoPartialAttribute(antiBeast);
    this.antiDragon = this.mergeDefaultsIntoPartialAttribute(antiDragon);
    this.antiMage = this.mergeDefaultsIntoPartialAttribute(antiMage);
    this.antiMarine = this.mergeDefaultsIntoPartialAttribute(antiMarine);
    this.antiMetal = this.mergeDefaultsIntoPartialAttribute(antiMetal);
    this.antiMimic = this.mergeDefaultsIntoPartialAttribute(antiMimic);
    this.antiPlant = this.mergeDefaultsIntoPartialAttribute(antiPlant);
    this.antiRock = this.mergeDefaultsIntoPartialAttribute(antiRock);
    this.antiSky = this.mergeDefaultsIntoPartialAttribute(antiSky);
    this.antiUndead = this.mergeDefaultsIntoPartialAttribute(antiUndead);
    this.attack = this.mergeDefaultsIntoPartialAttribute(attack);
    this.endurance = this.mergeDefaultsIntoPartialAttribute(endurance);
    this.fire = this.mergeDefaultsIntoPartialAttribute(fire);
    this.holy = this.mergeDefaultsIntoPartialAttribute(holy);
    this.ice = this.mergeDefaultsIntoPartialAttribute(ice);
    this.magicalPower = this.mergeDefaultsIntoPartialAttribute(magicalPower);
    this.speed = this.mergeDefaultsIntoPartialAttribute(speed);
    this.thunder = this.mergeDefaultsIntoPartialAttribute(thunder);
    this.wind = this.mergeDefaultsIntoPartialAttribute(wind);
  }

  mergeDefaultsIntoPartialAttribute({
    min = 0,
    max = 99,
    current = min,
  }: Partial<WeaponAttribute>) {
    return {
      current,
      max,
      min,
    };
  }
}
