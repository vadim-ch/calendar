export default class HeaderView {
  constructor(model, changePrev, changeNext) {
    this._model = model;
    this._changePrev = changePrev;
    this._changeNext = changeNext;
  }

  static render(html) {
    const element = document.createElement(`header`);
    element.innerHTML = html;
    return element;
  }

  get element() {
    if (!this._element) {
      this._element = HeaderView.render(this.template);
      this.__bindListeners(this._element);
    }
    return this._element;
  }

  get template() {
    return `<div class="container">
  <div class="header_buttons">
    <button class="main_button button_add" disabled>Добавить</button>
    <button class="main_button button_update" disabled>Обновить</button>
  </div>
</div>`;
  }

  updateButtonsState() {
    for (const button of this.element.querySelectorAll('.main_button')) {
      button.disabled = !this._model.selected;
    }
  }

  __bindListeners(element) {

  }
}
