const EVENT_NUM = 10;

import InfoHeadView from "./view/info-head.js";
import ControlBoardView from "./view/controlBoard.js";
import FilterBoardView from "./view/filter-board.js";
import FilterView from "./view/filters.js";
import FilterButtonView from "./view/filter-button";
import SortBoardView from "./view/sort-board.js";
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
    if (evt.key === `Escape` || evt.key === `Esc`) {
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

  eventEditComponent.getElement().querySelector(`.event__header`).addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    replaceEditToEvent();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  renderElement(tripEventListElement, eventComponent.getElement(), RenderPosition.BEFOREEND);
};

renderElement(siteTripMainElement, new InfoHeadView(events).getElement(), RenderPosition.AFTERBEGIN);
renderElement(siteMenuElement, new ControlBoardView().getElement(), RenderPosition.BEFOREEND);

const filterBoardComponent = new FilterBoardView();
renderElement(siteFiltersElement, filterBoardComponent.getElement(), RenderPosition.BEFOREEND);
renderElement(filterBoardComponent.getElement(), new FilterView().getElement(), RenderPosition.AFTERBEGIN);
renderElement(filterBoardComponent.getElement(), new FilterButtonView().getElement(), RenderPosition.BEFOREEND);

const sortBoardComponent = new SortBoardView();
renderElement(siteTripEventsHead, sortBoardComponent.getElement(), RenderPosition.AFTERBEGIN);
renderElement(sortBoardComponent.getElement(), new SortView().getElement(), RenderPosition.AFTERBEGIN);

const tripEventListComponent = new TripEventListView();
renderElement(siteTripEventsSection, tripEventListComponent.getElement(), RenderPosition.AFTERBEGIN);

events.forEach((event) => renderTripEvent(tripEventListComponent.getElement(), event));

// import flatpickr from "flatpickr";
// // Otherwise, selectors are also supported
// flatpickr("#myID", {
//   minDate: "today",
//   maxDate: new Date().fp_incr(14) // 14 days from now
// });
