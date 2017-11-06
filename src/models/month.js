import Model from './model.js';
import Day from './day.js';

export default class Month extends Model {
  constructor(date) {
    super(new Set());
    this._date = date;
    this._days = [];
    this.__createDays();
  }

  get monthNumber() {
    return this._date.getMonth();
  }

  get year() {
    return this._date.getFullYear();
  }

  get daysCount() {
    return 32 - new Date(this._date.getFullYear(), this._date.getMonth(), 32).getDate();
  }

  get days() {
    return this._days;
  }

  __createDays() {
    for(let i = 0; i < this.daysCount; i++) {
      this._days.push(new Day(i + 1, this.monthNumber, this.year));
    }
  }
}
