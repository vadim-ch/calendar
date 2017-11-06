import Model from './model.js';

export default class Day extends Model {
  constructor(day, month, year) {
    super(new Set());
    this._day = day;
    this._month = month;
    this._year = year;
    this._id = this.__generateId();
  }

  get dayNumber() {
    return this._day;
  }

  get id() {
    return this._id;
  }

  __generateId() {
    return `${this._day}-${this._month}-${this._year}`;
  }
}
