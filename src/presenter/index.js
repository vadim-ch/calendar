import CalendarModel, {Rel} from '../models/calendar-model.js';
import EventsModel from '../models/events-model.js';
import HeaderView from '../views/header.js';
import CalendarView from '../views/calendar.js';
import ControlsView from '../views/controls.js';

export function presenter()  {
  const calendar = new CalendarModel(new Date);
  const events = new EventsModel();
  const headerView = new HeaderView(calendar);
  const calendarView = new CalendarView(calendar, (id) => calendar.selected = id);
  const controlsView = new ControlsView(
      calendar,
      () => calendar.changeMonth(Rel.PREV),
      () => calendar.changeMonth(Rel.NEXT)
  );
  calendar.subscribe(() => {
    controlsView.updateName();
    calendarView.update();
    headerView.updateButtonsState();
  });

  const mainSection = document.querySelector('.main_section');
  document.body.insertBefore(headerView.element, mainSection);
  mainSection.appendChild(controlsView.element);
  mainSection.appendChild(calendarView.element);
}
