const FIELD_COUNT = 35;

export default class CalendarView {
  constructor(model, changeSelected) {
    this._model = model;
    this._changeSelected = changeSelected;
  }

  static render(html) {
    const element = document.createElement(`div`);
    element.innerHTML = html;
    return element;
  }

  get element() {
    if (!this._element) {
      this._element = CalendarView.render(this.template);
      this.__bindListeners(this._element);
    }
    return this._element;
  }

  get template() {
    const countPrevDays = this._model.currentMonth.days[0].dayNumber - 1;
    const countNextDays = FIELD_COUNT - this._model.currentMonth.daysCount - countPrevDays;
    const prevDays = this._model.prevMonth.days.slice(this._model.prevMonth.days.length - countPrevDays);
    const nextDays = countNextDays > 0 ? this._model.nextMonth.days.slice(0, countNextDays) : [];
    const selectedId = this._model.selected;

    const htmlPrevDays = prevDays.map(day => this.__htmlDay(day.id, 'calendar_day prev', day.day, day.isCurrentDay, day.id === selectedId));
    const htmlDays = this._model.currentMonth.days.map(day => this.__htmlDay(day.id, 'calendar_day', day.day, day.isCurrentDay, day.id === selectedId));
    const htmlNextDays = nextDays.map(day => this.__htmlDay(day.id, 'calendar_day next', day.day, day.isCurrentDay, day.id === selectedId));
    const days = [...htmlPrevDays, ...htmlDays, ...htmlNextDays];

    return `<div class="container">
  <div class="calendar">
    <div class="calendar_week">${days.slice(0, 7).join('')}</div>
    <div class="calendar_week">${days.slice(7, 14).join('')}</div>
    <div class="calendar_week">${days.slice(14, 21).join('')}</div>
    <div class="calendar_week">${days.slice(21, 28).join('')}</div>
    <div class="calendar_week">${days.slice(28, 36).join('')}</div>
  </div>
</div>`;
  }

   __htmlDay(id, classes, text, currentDay, selected) {
    return `<div class="${classes} ${currentDay ? 'now_day' : ''} ${selected ? 'selected' : ''}" data-id=${id}>${text}</div>`;
  }

  update() {
    this._element.innerHTML = this.template;
  }

  __bindListeners(element) {
    element.addEventListener('click', (event) => {
      if (event.target.closest('.calendar_day')) {
        this._changeSelected(event.target.dataset.id);
      }
    })
  }
}
