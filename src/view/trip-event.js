const getMonthAndDay = (date) => date.toDateString().slice(4, 10).toUpperCase();
const getTime = (date) => date.toTimeString().slice(0, 5);

const msecInSecond = 1000;
const msecInMinute = 60 * msecInSecond;
const minutesInHour = 60;
const minutesInDay = 24 * minutesInHour;

const durationTemplate = (date1, date2) => {
  let durationMinutes = Math.floor((date2 - date1) / msecInMinute);
  let days = Math.floor(durationMinutes / minutesInDay);
  let hours = Math.floor((durationMinutes - days * minutesInDay) / minutesInHour);
  let minutes = durationMinutes - days * minutesInDay - hours * minutesInHour;
  if (days > 0) {
    return String(days) + `D ` + hours + `H ` + minutes + `M`;
  }
  if (hours > 0) {
    return String(hours) + `H ` + minutes + `M`;
  }
  return String(minutes) + `M`;
};

const createOffersListTemplate = (offers) => {
  if (offers !== undefined) {
    let liString = ``;
    offers.forEach((element) => {
      const {title, price} = element;
      liString += `<li class="event__offer">
        <span class="event__offer-title">${title}</span>
        +€&nbsp;
        <span class="event__offer-price">${price}</span>
      </li>`;
    });
    return `<ul class="event__selected-offers">${liString}</ul>`;
  }
  return ``;
};
const favoritySolidTemplate = (solidFlag) => {
  if (solidFlag) {
    return `--active`;
  }
  return ``;
};

export const createTripEventTemplate = (event) => {
  const {dateBegin, typeIconSrc, typeText, location, dateEnd, price,offers, favority} = event;
  return `<div class="event">
    <time class="event__date" datetime=${dateBegin}>${getMonthAndDay(dateBegin)}</time>
    <div class="event__type">
      <img class="event__type-icon" width="42" height="42" src="${typeIconSrc}" alt="Event type icon">
    </div>
    <h3 class="event__title">${typeText} ${location}</h3>
    <div class="event__schedule">
      <p class="event__time">
        <time class="event__start-time" datetime="${dateBegin}">${getTime(dateBegin)}</time>
        —
        <time class="event__end-time" datetime="${dateEnd}">${getTime(dateEnd)}</time>
      </p>
      <p class="event__duration">${durationTemplate(dateBegin, dateEnd)}</p>
    </div>
    <p class="event__price">
      €&nbsp;<span class="event__price-value">${price}</span>
    </p>
    <h4 class="visually-hidden">Offers:</h4>
    ${createOffersListTemplate(offers)}
    <button class="event__favorite-btn event__favorite-btn${favoritySolidTemplate(favority)}" type="button">
      <span class="visually-hidden">Add to favorite</span>
      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
      </svg>
    </button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </div>`};
