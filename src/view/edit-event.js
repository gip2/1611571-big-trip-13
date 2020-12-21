let eventTypes = [
  [`taxi`, `Taxi`, `img/icons/taxi.png`],
  [`bus`, `Bus`, `img/icons/bus.png`],
  [`train`, `Train`, `img/icons/train.png`],
  [`ship`, `Ship`, `img/icons/ship.png`],
  [`transport`, `Transport`, `img/icons/transport.png`],
  [`drive`, `Drive`, `img/icons/drive.png`],
  [`flight`, `Flight`, `img/icons/flight.png`],
  [`check-in`, `CheckIn`, `img/icons/check-in.png`],
  [`sightseeing`, `Sightseeing`, `img/icons/sightseeing.png`],
  [`restaurant`, `Restaurant`, `img/icons/restaurant.png`]
];

let eventLocations = [
  `Amsterdam`,
  `Shamonix`,
  `Geneva`,
  `Paris`,
  `Parma`,
  `Istanbul`,
  `Moscow`,
  `London`,
  `Saint Petersburg`,
  `Berlin`,
  `Madrid`,
  `Rome`,
  `Bucharest`,
  `Minsk`,
  `Vienna`,
  `Hamburg`,
  `Warsaw`,
  `Budapest`,
  `Barcelona`,
  `Munich`,
  `Milan`
];


const createEventTypeList = (eventTypes, event) => {
  let s = ``;
  eventTypes.forEach((element) => {
    const {type, text} = element;
    s += `<div class="event__type-item">
              <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}" ${(type === event.type) ? `checked` : ``}>
              <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${text}</label>
            </div>
`});
  return s;
};

const createDestinationList = (eventLocations, event) => {
  let s = ``;
  eventLocations.forEach((element) => 
  {s += `<option value="${element}"></option>`});
  return s;
};

const createDateTimeString = (date) => `${date.getDate()}/${(date.getMonth() + 1)}/${String(date.getFullYear()).slice(2,4)} ${String(date.toTimeString()).slice(0, 5)}`;
// 19/03/19 00:00


const createEventOfferSelector = (offers) => {
  let s = ``;
  offers.forEach((element) => {
    const {type,title,price,checked} = element;
    s += `<div class="event__available-offers">
  <div class="event__offer-selector">
    <input class="event__offer-checkbox  visually-hidden" id="event-offer-${type}-1" type="checkbox" name="event-offer-${type}"${checked ? `checked=""` : ` `}>
    <label class="event__offer-label" for="event-offer-${type}-1">
      <span class="event__offer-title">Add ${title}</span>
      +€&nbsp;
      <span class="event__offer-price">${price}</span>
    </label>
  </div>
  `});
  return s;
};

const createPhotoContainerTemplate = (photos) => {
  let s = `<div class="event__photos-container">
  <div class="event__photos-tape">
    `;
  photos.forEach((element) => {
    s += `<img class="event__photo" src="${element}" alt="Event photo">`;
  });
  s += `
  </div>
</div>`;
  return s;
};

export const createEditEventTemplate = (event) => {
  const {typeIconSrc, typeText, location, destinationDescription, dateBegin, dateEnd, price, offers, photos} = event;
  return `<form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src=${typeIconSrc}  alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>
            ${createEventTypeList(eventTypes, event)}
          </fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          ${typeText}
        </label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${location}" list="destination-list-1">
        <datalist id="destination-list-1">
          ${createDestinationList(eventLocations, event)}
        </datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${createDateTimeString(dateBegin)}">
        —
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${createDateTimeString(dateEnd)}">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          €
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price}">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Cancel</button>
    </header>
    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        ${(event.hasOwnProperty('offers') !== false) ? createEventOfferSelector(offers) : ``}
        
      </section>

      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">${destinationDescription}</p>

        ${(event.hasOwnProperty('photos') !== false) ? createPhotoContainerTemplate(photos) : ``}
        
      </section>
    </section>
  </form>`;
};
