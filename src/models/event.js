import Model from './model.js';

export default class Event extends Model {

  constructor(title, date, members, description) {
    super(new Set());
    this._title = title;
    this._date = date;
    this._members = members;
    this._description = description;
  }

  get title() {
    return this._title;
  }

  get date() {
    return this._date;
  }

  get members() {
    return this._members;
  }

  get description() {
    return this._description;
  }

  updateEvent(data) {
    const {title, date, members, description} = data;
    this._title = title ? title : this._title;
    this._date = date ? date : this._date;
    this._members = members ? members : this._members;
    this._description = description ? description : this._description;
    this.__notifyAll();
  }
}
