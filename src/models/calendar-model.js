import Model from './model.js';
import Month from './month.js';
import {getDateWithChangeMonths} from '../utils/index.js';

export const Rel = {
  PREV: -1,
  NEXT: 1
};

export default class CalendarModel extends Model {
  constructor(initialDate) {
    super(new Set());
    this._currentDate = initialDate;
    this._currentMonth = new Month(this._currentDate);
  }

  get currentMonth() {
    return this._currentMonth;
  }

  get selected() {
    return this._selectedId;
  }

  set selected(id) {
    this._selectedId = id
  }

  changeMonth(rel) {
    this._currentDate = getDateWithChangeMonths(this._currentDate, rel);
    this._currentMonth = new Month(this._currentDate);
    this.__notifyAll();
  }
}
