import {createElement} from "../utils.js";

const createFilterBoardTemplate = () => `<form class="trip-filters" action="#" method="get"></form>`;

export default class FilterBoardView {
  constructor() {
    this._element = null;
  }
  getTemplate() {
    return createFilterBoardTemplate();
  }
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }
  removeElement() {
    this._element = null;
  }
}