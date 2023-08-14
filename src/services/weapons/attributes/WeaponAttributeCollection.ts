import WeaponAttributeWithMaybeMin from './WeaponAttributeWithMaybeMin';
import type WeaponAttributeWithMin from './WeaponAttributeWithMin';
import type WeaponAttributeWithMinAndMax from './WeaponAttributeWithMinAndMax';

interface ElementalAndAntiMonsterAttributes {
  // Elemental attributes
  fire?: WeaponAttributeWithMaybeMin;
  ice?: WeaponAttributeWithMaybeMin;
  thunder?: WeaponAttributeWithMaybeMin;
  wind?: WeaponAttributeWithMaybeMin;
  holy?: WeaponAttributeWithMaybeMin;

  // Anti-monster attributes
  antiDragon?: WeaponAttributeWithMaybeMin;
  antiUndead?: WeaponAttributeWithMaybeMin;
  antiMarine?: WeaponAttributeWithMaybeMin;
  antiRock?: WeaponAttributeWithMaybeMin;
  antiPlant?: WeaponAttributeWithMaybeMin;
  antiBeast?: WeaponAttributeWithMaybeMin;
  antiSky?: WeaponAttributeWithMaybeMin;
  antiMetal?: WeaponAttributeWithMaybeMin;
  antiMimic?: WeaponAttributeWithMaybeMin;
  antiMage?: WeaponAttributeWithMaybeMin;
}

export default class WeaponAttributeCollection {
  // Elemental attributes
  public fire: WeaponAttributeWithMaybeMin;
  public ice: WeaponAttributeWithMaybeMin;
  public thunder: WeaponAttributeWithMaybeMin;
  public wind: WeaponAttributeWithMaybeMin;
  public holy: WeaponAttributeWithMaybeMin;

  // Anti-monster attributes
  public antiDragon: WeaponAttributeWithMaybeMin;
  public antiUndead: WeaponAttributeWithMaybeMin;
  public antiMarine: WeaponAttributeWithMaybeMin;
  public antiRock: WeaponAttributeWithMaybeMin;
  public antiPlant: WeaponAttributeWithMaybeMin;
  public antiBeast: WeaponAttributeWithMaybeMin;
  public antiSky: WeaponAttributeWithMaybeMin;
  public antiMetal: WeaponAttributeWithMaybeMin;
  public antiMimic: WeaponAttributeWithMaybeMin;
  public antiMage: WeaponAttributeWithMaybeMin;

  constructor(
    // Base attributes
    public attack: WeaponAttributeWithMinAndMax,
    public endurance: WeaponAttributeWithMin,
    public magicalPower: WeaponAttributeWithMinAndMax,
    public speed: WeaponAttributeWithMin,
    options?: ElementalAndAntiMonsterAttributes
  ) {
    // Elemental attributes
    this.fire = options?.fire ?? new WeaponAttributeWithMaybeMin();
    this.ice = options?.ice ?? new WeaponAttributeWithMaybeMin();
    this.thunder = options?.thunder ?? new WeaponAttributeWithMaybeMin();
    this.wind = options?.wind ?? new WeaponAttributeWithMaybeMin();
    this.holy = options?.holy ?? new WeaponAttributeWithMaybeMin();

    // Anti-monster attributes
    this.antiDragon = options?.antiDragon ?? new WeaponAttributeWithMaybeMin();
    this.antiUndead = options?.antiUndead ?? new WeaponAttributeWithMaybeMin();
    this.antiMarine = options?.antiMarine ?? new WeaponAttributeWithMaybeMin();
    this.antiRock = options?.antiRock ?? new WeaponAttributeWithMaybeMin();
    this.antiPlant = options?.antiPlant ?? new WeaponAttributeWithMaybeMin();
    this.antiBeast = options?.antiBeast ?? new WeaponAttributeWithMaybeMin();
    this.antiSky = options?.antiSky ?? new WeaponAttributeWithMaybeMin();
    this.antiMetal = options?.antiMetal ?? new WeaponAttributeWithMaybeMin();
    this.antiMimic = options?.antiMimic ?? new WeaponAttributeWithMaybeMin();
    this.antiMage = options?.antiMage ?? new WeaponAttributeWithMaybeMin();
  }
}
