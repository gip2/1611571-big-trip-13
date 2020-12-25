import {getMonthAndDay} from "./trip-event.js";
const EVENTS_INFO_LENGTH_SHORT = 1;
const EVENTS_INFO_LENGTH_TWO = 2;
const EVENTS_INFO_LENGTH_THREE = 3;
const MAX_EVENTS_ITEMS = 3;

const calculateInfoEvents = (events) => {
  const info = {
    title: ``,
    date: ``,
    cost: 0.0
  };
  if (!events || !events.length) {
    return info;
  }
  // debugger;
  if (events.length > MAX_EVENTS_ITEMS) {
    info.title = `${events[0].destination}  &mdash; ... &mdash;  ${events[events.length - 1].destination}`;
  } else {
    info.title = events.map((event)=>event.destination).join(` &mdash;`);
  }
/*  switch (events.length) {
    case EVENTS_INFO_LENGTH_SHORT:
      info.title = events[0].destination;
      break;
    case EVENTS_INFO_LENGTH_TWO:
      info.title = `${events[0].destination} &mdash; ${events[1].destination}`;
      break;
    case EVENTS_INFO_LENGTH_THREE:
      info.title = `${events[0].destination} &mdash; ${events[1].destination} &mdash; ${events[2].destination}`;
      break;
    default:
      info.title = `${events[0].destination}  &mdash; ... &mdash;  ${events[events.length - 1].destination}`;
      break;
  }*/
  let dateBegin = getMonthAndDay(events[0].dateBegin);
  let dateEnd = getMonthAndDay(events[events.length - 1].dateEnd);
  if (dateBegin === dateEnd) {
    info.date = dateBegin;
  } else {
    if (dateBegin.slice(0, 3) === dateEnd.slice(0, 3)) {
      info.date = `${dateBegin}&nbsp;&mdash;&nbsp;${dateEnd.slice(4)}`;
    } else {
      info.date = `${dateBegin}&nbsp;&mdash;&nbsp;${dateEnd}`;
    }
  }
  info.cost = events.reduce((accumulator, event) => {
    const {price, offers} = event;
    accumulator += price;
    if (offers !== undefined) {
      accumulator = offers.reduce((accumulator, offer) => {
        if (offer.checked) {
          accumulator += offer.price;
        }
        return accumulator;
      }, accumulator);
    }
    return accumulator;
  }, 0);
  return info;
};


export const createInfoHeadTemplate = (events) => {
  const info = calculateInfoEvents(events);
  const {title, date, cost} = info;
  return `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${title}</h1>

      <p class="trip-info__dates">${date}</p>
    </div>

    <p class="trip-info__cost">
      Total: €&nbsp;<span class="trip-info__cost-value">${cost}</span>
    </p>
  </section>`;
};
