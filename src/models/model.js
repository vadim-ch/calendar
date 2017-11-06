export default class Model {
  constructor(listeners) {
    this.listeners = listeners;
  }

  subscribe(callback) {
    this.listeners.add(callback);
  }

  __notifyAll() {
    for (const listener of this.listeners) {
      listener();
    }
  }
}
