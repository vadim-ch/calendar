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
  constructor(model, changePrev, changeNext, changeMonthByDate) {
    this._model = model;
    this._changePrev = changePrev;
    this._changeNext = changeNext;
    this._changeMonthByDate = changeMonthByDate;
  }

  static render(html) {
    const element = document.createElement(`div`);
    element.innerHTML = html;
    return element;
  }

  get element() {
    if (!this._element) {
      this._element = ControlsView.render(this.template);
      this.__bindListeners(this._element);
    }
    return this._element;
  }

  get template() {
    return `<div class="container">
  <div class="controls">
    <div class="controls_buttons_wrapper">
      <button type=button class="prev_button control_button fa fa-caret-left"></button>
      <div class="calendar_control">${this.monthName}</div>
      <button type=button class="next_button control_button fa fa-caret-right"></button>
    </div>
    <button class="control_button today_button">Сегодня</button>
  </div>
</div>`;
  }

  get monthName() {
    const monthNumber = this._model.currentMonth.monthNumber;
    const year = this._model.currentMonth.year;
    return `${MonthNames[monthNumber]} ${year}`;
  }

  updateName() {
    this._element.querySelector('.calendar_control').innerText = `${this.monthName}`;
  }

  __bindListeners(element) {
    const prevButton = element.querySelector('.prev_button');
    const nextButton = element.querySelector('.next_button');
    const todayButton = element.querySelector('.today_button');

    prevButton.addEventListener('click', this._changePrev);
    nextButton.addEventListener('click', this._changeNext);
    todayButton.addEventListener('click', this._changeMonthByDate);
  }
}
