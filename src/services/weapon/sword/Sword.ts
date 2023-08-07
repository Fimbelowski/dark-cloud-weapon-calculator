import type Cloneable from '../Cloneable';
import Weapon from '../Weapon';

export default class Sword extends Weapon<'sword'> implements Cloneable<Sword> {
  ICON_URL_FOLDER = 'swords';

  constructor(...args: ConstructorParameters<typeof Weapon<'sword'>>) {
    super(...args);
  }

  clone() {
    return new Sword(this.name, this.attributes.clone(), this.icons, {
      buildsUpInto: this.buildsUpInto,
      defaultWeapon: this.defaultWeapon,
    });
  }
}
