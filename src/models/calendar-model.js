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
    this._prevMonth = new Month(getDateWithChangeMonths(this._currentDate, -1));
    this._nextMonth = new Month(getDateWithChangeMonths(this._currentDate, 1));
  }

  get currentMonth() {
    return this._currentMonth;
  }

  get prevMonth() {
    return this._prevMonth;
  }

  get nextMonth() {
    return this._nextMonth;
  }

  get selected() {
    return this._selectedId;
  }

  set selected(id) {
    this._selectedId = id;
    this.__notifyAll();
  }

  changeMonth(rel) {
    this._currentDate = getDateWithChangeMonths(this._currentDate, rel);
    this._currentMonth = new Month(this._currentDate);
    this._prevMonth = new Month(getDateWithChangeMonths(this._currentDate, -1));
    this._nextMonth = new Month(getDateWithChangeMonths(this._currentDate, 1));
    this.__notifyAll();
  }
}
