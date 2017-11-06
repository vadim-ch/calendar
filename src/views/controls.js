const MonthNames = {
  0: 'Январь',
  1: 'Февраль',
  2: 'Март',
  3: 'Апрель',
  4: 'Май',
  5: 'Июнь',
  6: 'Июль',
  7: 'Август',
  8: 'Сентябрь',
  9: 'Октябрь',
  10: 'Ноябрь',
  11: 'Декабрь',
};

export default class ControlsView {
  constructor(model, changePrev, changeNext) {
    this._model = model;
    this._changePrev = changePrev;
    this._changeNext = changeNext;
  }

  static render(html) {
    const element = document.createElement(`div`);
    element.innerHTML = html;
    return element;
  }

  get element() {
    if (!this._element) {
      this._element = ControlsView.render(this.template);
      this.__bindListeners();
    }
    return this._element;
  }

  get template() {
    const monthNumber = this._model.currentMonth.monthNumber;
    const year = this._model.currentMonth.year;
    return `
<button type=button>Назад</button>
<div class="calendar_control">${MonthNames[monthNumber]} ${year}</div>
<button type=button>Впередё</button>`;
  }

  __bindListeners(element, ) {
  }
}
