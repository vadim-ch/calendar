import Model from './model.js';
import Event from './event.js';

export default class EventsModel extends Model {
  constructor() {
    super(new Set());
    this.events = Object.create(null);
  }

  addEvent(day, eventData) {
    const {title, date, members, description} = eventData;
    const newEvent = new Event(title, date, members, description);
    const eventsForDay = this.events[day];
    this.events = {
      ...this.events,
      [day]: (eventsForDay && eventsForDay.length) ? [...eventsForDay, newEvent] : [newEvent]
    };
    this.__notifyAll();
  }

  get eventsByDay() {
    return this.events;
  }
}
