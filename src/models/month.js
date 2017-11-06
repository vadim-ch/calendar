import Model from './model.js';

export default class Month extends Model {
  constructor(date) {
    super(new Set());
    this._date = date;
    this._id = Month.parseDate(this._date);
  }

  static parseDate(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${month}-${year}`;
  }

  get id() {
    return this._id;
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
}
