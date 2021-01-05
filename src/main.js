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
import {renderTemplate, renderElement, RenderPosition} from "./utils.js";
import { debug } from "webpack";


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

const filterBoardComponent = new FilterBoardView();
renderElement(siteFiltersElement, filterBoardComponent.getElement(), RenderPosition.BEFOREEND);
renderElement(filterBoardComponent.getElement(), new FilterView().getElement(), RenderPosition.AFTERBEGIN);
renderElement(filterBoardComponent.getElement(), new FilterButtonView().getElement(), RenderPosition.BEFOREEND);

const sortBoardComponent = new SortBoardView();
renderElement(siteTripEventsHead, sortBoardComponent.getElement(), RenderPosition.AFTERBEGIN);
renderElement(sortBoardComponent.getElement(), new SortView().getElement(), RenderPosition.AFTERBEGIN);

const tripEventListComponent = new TripEventListView();
renderElement(siteTripEventsSection, tripEventListComponent.getElement(), RenderPosition.AFTERBEGIN);
renderElement(tripEventListComponent.getElement(), new EditEventView().getElement(), RenderPosition.AFTERBEGIN);

events.forEach((event) => renderElement(tripEventListComponent.getElement(), new TripEventView().getElement(event), RenderPosition.BEFOREEND));


// import flatpickr from "flatpickr";
// // Otherwise, selectors are also supported
// flatpickr("#myID", {
//   minDate: "today",
//   maxDate: new Date().fp_incr(14) // 14 days from now
// });
