const EVENT_NUM = 10;
const KeyCode = {
  ESCAPE: `Escape`,
  ESC: `Esc`
};

import InfoHeadView from "./view/info-head.js";
import ControlBoardView from "./view/controlBoard.js";
import FilterBoardView from "./view/filter-board.js";
import FilterView from "./view/filters.js";
import FilterButtonView from "./view/filter-button";
import SortView from "./view/sort.js";
import TripEventListView from "./view/trip-event-list.js";
import EditEventView from "./view/edit-event.js";
import TripEventView from "./view/trip-event.js";
import {Event} from "./mock/travel.js";
import {renderElement, RenderPosition} from "./utils.js";

let events = [];
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
    tripEventListElement.replaceChild(eventComponent.getElement(), eventEditComponent.getElement());
  };

  const replaceEventToEdit = () => {
    tripEventListElement.replaceChild(eventEditComponent.getElement(), eventComponent.getElement());
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === KeyCode.ESCAPE || evt.key === KeyCode.ESC) {
      evt.preventDefault();
      replaceEditToEvent();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  eventComponent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
    replaceEventToEdit();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  eventEditComponent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
    replaceEditToEvent();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  eventEditComponent.getElement().addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    replaceEditToEvent();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  renderElement(tripEventListElement, eventComponent.getElement(), RenderPosition.BEFOREEND);
};

renderElement(siteTripMainElement, new InfoHeadView(events).getElement(), RenderPosition.AFTERBEGIN);
renderElement(siteMenuElement, new ControlBoardView().getElement(), RenderPosition.BEFOREEND);

const filterBoardComponent = new FilterBoardView();
renderElement(siteFiltersElement, filterBoardComponent.getElement(), RenderPosition.AFTEREND);
renderElement(filterBoardComponent.getElement(), new FilterView().getElement(), RenderPosition.AFTERBEGIN);
renderElement(filterBoardComponent.getElement(), new FilterButtonView().getElement(), RenderPosition.BEFOREEND);

renderElement(siteTripEventsHead, new SortView().getElement(), RenderPosition.AFTEREND);

const tripEventListComponent = new TripEventListView();
renderElement(siteTripEventsSection, tripEventListComponent.getElement(), RenderPosition.BEFOREEND);

events.forEach((event) => renderTripEvent(tripEventListComponent.getElement(), event));

// import flatpickr from "flatpickr";
// // Otherwise, selectors are also supported
// flatpickr("#myID", {
//   minDate: "today",
//   maxDate: new Date().fp_incr(14) // 14 days from now
// });
