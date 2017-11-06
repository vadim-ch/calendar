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
    let i = 1;
    let days = ``;
    while (i <= this._model.currentMonth.daysCount) {
      days = days + `<div class='calendar_day'>${i}</div>`;
      i++;
    }
    return `<div class="calendar">${days}</div>`;
  }

  __bindListeners() {

  }
}
