import type IWeaponAttribute from './IWeaponAttribute';

export default class WeaponAttribute implements IWeaponAttribute {
  constructor(
    private readonly _min = 0,
    private readonly _max = 99,
    private _current = _min
  ) {
    this.assertGreaterThanOrEqualToZero(_min);
    this.assertGreaterThanOrEqualToZero(_max);
    this.assertGreaterThanOrEqualToZero(_current);

    if (_min > _max) {
      throw Error('Min must be less than or equal to max.');
    }

    if (_current < _min) {
      throw Error('Current must be greater than or equal to min.');
    }

    if (_current > _max) {
      throw Error('Current must be less than or equal to max.');
    }

    this._min = _min;
    this._max = _max;
    this._current = _current;
  }

  private assertGreaterThanOrEqualToZero(value: number) {
    if (value < 0) {
      throw Error('Value must be greater than or equal to 0.');
    }
  }

  get current() {
    return this._current;
  }

  set current(newCurrent: number) {
    this.assertGreaterThanOrEqualToZero(newCurrent);

    if (newCurrent < this._min) {
      throw Error('Current should be greater than or equal to min.');
    }

    if (newCurrent > this._max) {
      throw Error('Current should be less than or equal to max.');
    }

    this._current = newCurrent;
  }

  get max() {
    return this._max;
  }

  get min() {
    return this._min;
  }
}
