const EVENT_NUM = 10;

import InfoHeadView from "./view/info-head.js";
import ControlBoardView from "./view/controlBoard.js";
import FilterBoardView from "./view/filter-board.js";
import FilterView from "./view/filters.js";
import FilterButtonView from "./view/filter-button";
import SortBoardView from "./view/sort-board.js";
import SortView from "./view/sort.js";
import {createTripEventTemplate} from "./view/trip-event.js";
import {createTripEventListTemplate} from "./view/trip-event-list.js";
import {createEditEventTemplate} from "./view/edit-event.js";
import {Event} from "./mock/travel.js";
import {renderTemplate, renderElement, RenderPosition} from "./utils.js";


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

renderTemplate(siteTripMainElement, new InfoHeadView().getElement(), RenderPosition.BEFOREEND);

renderTemplate(siteMenuElement, new ControlBoardView().getElement(), RenderPosition.AFTEREND);

const FilterBoardComponent = new FilterBoardView();
renderElement(siteFiltersElement, FilterBoardComponent.getElement(), RenderPosition.BEFOREEND);
renderElement(FilterBoardComponent.getElement(), new FilterView().getElement(), RenderPosition.AFTERBEGIN);
renderElement(FilterBoardComponent.getElement(), new FilterButtonView().getElement(), RenderPosition.BEFOREEND);

const SortBoardComponent = new SortBoardView();
renderElement(siteTripEventsHead, SortBoardComponent.getElement(), RenderPosition.AFTERBEGIN);
renderElement(SortBoardComponent.getElement(), new SortView().getElement(), RenderPosition.AFTERBEGIN);



renderTemplate(siteTripEventsSection, createTripEventListTemplate());
const siteTripEventsList = document.querySelector(`.trip-events__list`);
renderTemplate(siteTripEventsList, createEditEventTemplate(events[0]));

events.forEach((element) => {
  renderTemplate(siteTripEventsList, createTripEventTemplate(element));
});


// import flatpickr from "flatpickr";
// // Otherwise, selectors are also supported
// flatpickr("#myID", {
//   minDate: "today",
//   maxDate: new Date().fp_incr(14) // 14 days from now
// });
