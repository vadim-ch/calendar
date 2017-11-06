import CalendarModel, {Rel} from '../models/calendar-model.js';
import EventsModel from '../models/events-model.js';
import CalendarView from '../views/calendar.js';
import ControlsView from '../views/controls.js';

export function presenter()  {
  const calendar = new CalendarModel(new Date);
  const events = new EventsModel();
  const calendarView = new CalendarView(calendar);
  const controlsView = new ControlsView(calendar);
  calendar.subscribe(() => {
    console.log('обновился');
  });

  document.body.appendChild(controlsView.element);
  document.body.appendChild(calendarView.element);
}
