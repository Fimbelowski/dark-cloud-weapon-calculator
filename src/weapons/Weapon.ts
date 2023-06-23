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

type WeaponWithCompleteAttributes = {
  [key in WeaponAttributeKeys]: WeaponAttribute;
};

type WeaponWithPartialAttributes = Map<
  WeaponAttributeKeys,
  Partial<WeaponAttribute>
>;

export default class Weapon implements WeaponWithCompleteAttributes {
  constructor(weapon: WeaponWithPartialAttributes) {
    weapon.forEach(({ min = 0, max = 99, current = min }, key) => {
      this[key] = { current, max, min };
    });
  }
}
