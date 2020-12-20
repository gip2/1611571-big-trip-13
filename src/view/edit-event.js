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


const eventTypeCheck = (eventTypeElement, event) => {
  console.log(`eventTypeElement[0] = `, eventTypeElement[0]);
  console.log(`event.type = `, event.type);
  if (eventTypeElement[0] === event.type) {
    return ` checked`;
  }
  return ` `;
};

const createEventTypeList = (eventTypes, event) => {
  let s = ``;
  eventTypes.forEach(element => 
  {s += `<div class="event__type-item">
              <input id="event-type-` +
              element[0] +
              `-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="` +
              element[0] + `"` +
              eventTypeCheck(element, event) +
              `>
              <label class="event__type-label  event__type-label--` +
              element[0] +
              `" for="event-type-` +
              element[0] +
              `-1">` +
              element[1] +
              `</label>
            </div>
`});
  return s;
};

const createDestinationList = (eventLocations, event) => {
  let s = ``;
  eventLocations.forEach(element => 
  {s += `<option value="` + element + `"></option>`});
  return s;
};

const createDateTimeString = (date) => date.getDate() + `/` + (date.getMonth() + 1) + `/` + String(date.getFullYear()).slice(2,4) + ` ` + String(date.toTimeString()).slice(0, 5)
/* 19/03/19 00:00 */

export const createEditEventTemplate = (event) => {
  return `<form class="event event--edit" action="#" method="post">
    <header class="event__header">
      <div class="event__type-wrapper">
        <label class="event__type  event__type-btn" for="event-type-toggle-1">
          <span class="visually-hidden">Choose event type</span>
          <img class="event__type-icon" width="17" height="17" src=` +
          event.typeIconSrc +
          `  alt="Event type icon">
        </label>
        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

        <div class="event__type-list">
          <fieldset class="event__type-group">
            <legend class="visually-hidden">Event type</legend>` +
            createEventTypeList(eventTypes, event) +
          `</fieldset>
        </div>
      </div>

      <div class="event__field-group  event__field-group--destination">
        <label class="event__label  event__type-output" for="event-destination-1">
          ` + event.typeText +
        `</label>
        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="` +
        event.location + `" list="destination-list-1">
        <datalist id="destination-list-1">` +
        createDestinationList(eventLocations, event) +
        `</datalist>
      </div>

      <div class="event__field-group  event__field-group--time">
        <label class="visually-hidden" for="event-start-time-1">From</label>
        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="` +
        createDateTimeString(event.dateBegin)/* 19/03/19 00:00*/ + `">
        —
        <label class="visually-hidden" for="event-end-time-1">To</label>
        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="` +
        createDateTimeString(event.dateEnd)/* 19/03/19 00:00*/ + `">
      </div>

      <div class="event__field-group  event__field-group--price">
        <label class="event__label" for="event-price-1">
          <span class="visually-hidden">Price</span>
          €
        </label>
        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
      </div>

      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
      <button class="event__reset-btn" type="reset">Cancel</button>
    </header>
    <section class="event__details">
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

        <div class="event__available-offers">
          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked="">
            <label class="event__offer-label" for="event-offer-luggage-1">
              <span class="event__offer-title">Add luggage</span>
              +€&nbsp;
              <span class="event__offer-price">30</span>
            </label>
          </div>

          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked="">
            <label class="event__offer-label" for="event-offer-comfort-1">
              <span class="event__offer-title">Switch to comfort class</span>
              +€&nbsp;
              <span class="event__offer-price">100</span>
            </label>
          </div>

          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">
            <label class="event__offer-label" for="event-offer-meal-1">
              <span class="event__offer-title">Add meal</span>
              +€&nbsp;
              <span class="event__offer-price">15</span>
            </label>
          </div>

          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">
            <label class="event__offer-label" for="event-offer-seats-1">
              <span class="event__offer-title">Choose seats</span>
              +€&nbsp;
              <span class="event__offer-price">5</span>
            </label>
          </div>

          <div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">
            <label class="event__offer-label" for="event-offer-train-1">
              <span class="event__offer-title">Travel by train</span>
              +€&nbsp;
              <span class="event__offer-price">40</span>
            </label>
          </div>
        </div>
      </section>

      <section class="event__section  event__section--destination">
        <h3 class="event__section-title  event__section-title--destination">Destination</h3>
        <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>

        <div class="event__photos-container">
          <div class="event__photos-tape">
            <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">
            <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">
            <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">
            <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">
            <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">
          </div>
        </div>
      </section>
    </section>
  </form>`
};
