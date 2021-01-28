import InfoHeadView from "./view/info-head.js";
import ControlBoardView from "./view/controlBoard.js";
import FilterView from "./view/filters.js";
import SortView from "./view/sort.js";
import TripEventListView from "./view/trip-event-list.js";
import EditEventView from "./view/edit-event.js";
import TripEventView from "./view/trip-event.js";
import {Event} from "./mock/travel.js";
import {render, replace, RenderPosition} from "./utils/render.js";

const EVENT_NUM = 10;
const KeyCode = {
  ESCAPE: `Escape`,
  ESC: `Esc`
};

const events = [];
for (let index = 0; index < EVENT_NUM; index++) {
  events.push(new Event());
}
// console.log(events);

const siteTripMainElement = document.querySelector(`.trip-main`);
const siteMenuElement = document.querySelector(`#menu`);
const siteFiltersElement = document.querySelector(`#filters`);
const siteTripEventsHead = document.querySelector(`#tripEvents`);
const siteTripEventsSection = document.querySelector(`.trip-events`);

const renderTripEvent = (tripEventListElement, event) => {
  const eventComponent = new TripEventView(event);
  const eventEditComponent = new EditEventView(event);

  const replaceEditToEvent = () => {
    replace(eventComponent, eventEditComponent);
  };

  const replaceEventToEdit = () => {
    replace(eventEditComponent, eventComponent);
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === KeyCode.ESCAPE || evt.key === KeyCode.ESC) {
      evt.preventDefault();
      replaceEditToEvent();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  eventComponent.setEditClickHandler(() => {
    replaceEventToEdit();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  // eventComponent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
  //   replaceEventToEdit();
  //   document.addEventListener(`keydown`, onEscKeyDown);
  // });

  eventEditComponent.setRollupClickHandler(() => {
    replaceEditToEvent();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  // eventEditComponent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
  //   replaceEditToEvent();
  //   document.removeEventListener(`keydown`, onEscKeyDown);
  // });

  eventEditComponent.setSubmitHandler(() => {
    replaceEditToEvent();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  // eventEditComponent.getElement().addEventListener(`submit`, (evt) => {
  //   evt.preventDefault();
  //   replaceEditToEvent();
  //   document.removeEventListener(`keydown`, onEscKeyDown);
  // });

  render(tripEventListElement, eventComponent, RenderPosition.BEFOREEND);
};

render(siteTripMainElement, new InfoHeadView(events), RenderPosition.AFTERBEGIN);
render(siteMenuElement, new ControlBoardView(), RenderPosition.AFTEREND);

render(siteFiltersElement, new FilterView(), RenderPosition.AFTEREND);

render(siteTripEventsHead, new SortView(), RenderPosition.AFTEREND);

const tripEventListComponent = new TripEventListView();
render(siteTripEventsSection, tripEventListComponent, RenderPosition.BEFOREEND);

events.forEach((event) => renderTripEvent(tripEventListComponent.getElement(), event));

// import flatpickr from "flatpickr";
// // Otherwise, selectors are also supported
// flatpickr("#myID", {
//   minDate: "today",
//   maxDate: new Date().fp_incr(14) // 14 days from now
// });
