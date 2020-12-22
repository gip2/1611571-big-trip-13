import {getMonthAndDay} from "./trip-event.js";

const calculateInfoEvents = (events) => {
  let info = {
    title: ``,
    date: ``,
    cost: 0.0
  };
  if (events !== undefined && events.length) {
    switch (events.length) {
      case 1:
        info.title = events[0].destination;
        break;
      case 2:
        info.title = `${events[0].destination} — ${events[1].destination}`;
        break;
      case 3:
        info.title = `${events[0].destination} — ${events[1].destination} — ${events[2].destination}`;
        break;
      default:
        info.title = `${events[0].destination} —...— ${events[events.length-1].destination}`;
        break;
    }
    let dateBegin = getMonthAndDay(events[0].dateBegin);
    let dateEnd = getMonthAndDay(events[events.length -1].dateEnd);
    if (dateBegin === dateEnd) {
      info.date = dateBegin;
    } else {
      if (dateBegin.slice(0,3) === dateEnd.slice(0,3)) {
        info.date = `${dateBegin} — ${dateEnd.slice(4)}`;
      } else {
        info.date = `${dateBegin} — ${dateEnd}`;
      }
    }
    events.forEach((event) => {
      const {type, price, offers} = event;
      info.cost += price*10;
    });
  }
  return info;
};


export const createInfoHeadTemplate = (events) => {
  const info = calculateInfoEvents(events);
  const {title,date,cost} = info;
  return `<section class="trip-main__trip-info  trip-info">
    <div class="trip-info__main">
      <h1 class="trip-info__title">${title}</h1>

      <p class="trip-info__dates">${date}</p>
    </div>

    <p class="trip-info__cost">
      Total: €&nbsp;<span class="trip-info__cost-value">${cost}</span>
    </p>
  </section>`;
}