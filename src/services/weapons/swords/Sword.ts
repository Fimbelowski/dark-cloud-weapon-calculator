import Weapon from '../Weapon';

export default abstract class Sword extends Weapon<'sword'> {
  ICON_URL_FOLDER = 'swords';

  constructor(...args: ConstructorParameters<typeof Weapon<'sword'>>) {
    super(...args);
  }
}
