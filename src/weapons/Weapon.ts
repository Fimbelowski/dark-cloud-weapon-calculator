interface WeaponAttribute {
  current: number;
  max: number;
  min: number;
}

type PartialWeaponAttribute = Partial<WeaponAttribute>;

interface WeaponAttributeWithMin extends PartialWeaponAttribute {
  min: number;
}

interface WeaponAttributeWithMinAndMax extends WeaponAttributeWithMin {
  max: number;
}

interface PartialWeapon {
  antiBeast?: PartialWeaponAttribute;
  antiDragon?: PartialWeaponAttribute;
  antiMage?: PartialWeaponAttribute;
  antiMarine?: PartialWeaponAttribute;
  antiMetal?: PartialWeaponAttribute;
  antiMimic?: PartialWeaponAttribute;
  antiPlant?: PartialWeaponAttribute;
  antiRock?: PartialWeaponAttribute;
  antiSky?: PartialWeaponAttribute;
  antiUndead?: PartialWeaponAttribute;
  attack: WeaponAttributeWithMinAndMax;
  endurance: WeaponAttributeWithMin;
  fire?: PartialWeaponAttribute;
  holy?: PartialWeaponAttribute;
  ice?: PartialWeaponAttribute;
  magicalPower: WeaponAttributeWithMinAndMax;
  speed: WeaponAttributeWithMin;
  thunder?: PartialWeaponAttribute;
  wind?: PartialWeaponAttribute;
}

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
    antiBeast = {},
    antiDragon = {},
    antiMage = {},
    antiMarine = {},
    antiMetal = {},
    antiMimic = {},
    antiPlant = {},
    antiRock = {},
    antiSky = {},
    antiUndead = {},
    attack,
    endurance,
    fire = {},
    holy = {},
    ice = {},
    magicalPower,
    speed,
    thunder = {},
    wind = {},
  }: PartialWeapon) {
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
