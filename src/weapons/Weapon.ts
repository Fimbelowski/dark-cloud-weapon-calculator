type SwordName =
  | '7 Branch Sword'
  | '7th Heaven'
  | "Aga's Sword"
  | 'Antique Sword'
  | 'Arise Mardan'
  | 'Atlamillia Sword'
  | 'Baselard'
  | 'Bastard Sword'
  | 'Big Bang'
  | 'Bone Rapier'
  | 'Brave Ark'
  | 'Choora'
  | 'Chopper'
  | 'Chronicle 2'
  | 'Chronicle Sword'
  | 'Claymore'
  | 'Cross Heinder'
  | 'Crysknife'
  | 'Dagger'
  | 'Dark Cloud'
  | 'Drain Seeker'
  | 'Dusack'
  | 'Evilcise'
  | 'Gladius'
  | "Heaven's Cloud"
  | 'Kitchen Knife'
  | "Lamb's Sword"
  | 'Macho Sword'
  | 'Maneater'
  | 'Mardan Eins'
  | 'Mardan Twei'
  | 'Sand Breaker'
  | 'Sax'
  | 'Serpent Sword'
  | 'Shamshir'
  | 'Small Swod'
  | 'Sun Sword'
  | 'Sword of Zeus'
  | 'Tsukikage'
  | 'Wise Owl Sword';

export default abstract class Weapon {
  name: string;

  constructor(name: SwordName) {
    {
      this.name = name;
    }
  }
}
