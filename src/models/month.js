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
    return 32 - new Date(this.year, this.monthNumber, 32).getDate();
  }

  get days() {
    return this._days;
  }

  __createDays() {
    const currentDate = new Date();
    currentDate.setHours(0,0,0,0);
    for(let i = 0; i < this.daysCount; i++) {
      const date = new Date(this.year, this.monthNumber, i + 1);
      this._days.push(
          new Day(i + 1, date.getDay(), this.monthNumber, this.year, date.getTime() === currentDate.getTime()));
    }
  }
}
