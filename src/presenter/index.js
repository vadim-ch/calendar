import CalendarModel, {Rel} from '../models/calendar-model.js';
import EventsModel from '../models/events-model.js';
import CalendarView from '../views/calendar.js';
import ControlsView from '../views/controls.js';

export function presenter()  {
  const calendar = new CalendarModel(new Date);
  const events = new EventsModel();
  const calendarView = new CalendarView(calendar, (id) => calendar.selected = id);
  const controlsView = new ControlsView(
      calendar,
      () => calendar.changeMonth(Rel.PREV),
      () => calendar.changeMonth(Rel.NEXT)
  );
  calendar.subscribe(() => {
    controlsView.updateName();
    calendarView.update();
  });

  const mainSection = document.querySelector('.main_section');
  mainSection.appendChild(controlsView.element);
  mainSection.appendChild(calendarView.element);
}
