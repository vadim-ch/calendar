import Model from './model.js';

export default class Day extends Model {
  constructor(day, dayNumber, month, year, currentDay) {
    super(new Set());
    this._day = day;
    this._dayNumber = dayNumber;
    this._month = month;
    this._year = year;
    this._currentDay = currentDay;
    this._id = this.__generateId();
  }

  get day() {
    return this._day;
  }

  get dayNumber() {
    return this._dayNumber;
  }

  get id() {
    return this._id;
  }

  get isCurrentDay() {
    return this._currentDay;
  }

  __generateId() {
    return `${this.day}-${this._month}-${this._year}`;
  }
}
