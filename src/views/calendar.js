export default class CalendarView {
  constructor(model) {
    this._model = model;
  }

  static render(html) {
    const element = document.createElement(`div`);
    element.innerHTML = html;
    return element;
  }

  get element() {
    if (!this._element) {
      this._element = CalendarView.render(this.template);
      this.__bindListeners();
    }
    return this._element;
  }

  get template() {
    const days = this._model.currentMonth.days.reduce((acc, day) => {
      acc = acc + `<div class='calendar_day'>${day.dayNumber}</div>`;
      return acc;
    }, '');
    return `<div class="calendar">${days}</div>`;
  }

  __bindListeners() {

  }
}
