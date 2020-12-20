// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random


const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
const getRandom = (array)=>{
  return array[getRandomInteger(0, array.length - 1)];
};
/* Array.prototype.getRandom = function(){
  let arr = this;
  return arr[getRandomInteger(0,arr.length)]
};*/


const getRandomDate = (a = 1, b = 24 * 30) => {
  let curDate = new Date();
  let RandomMilliseconds = getRandomInteger(a * 3600000, b * 3600000);
  let RandomDate = new Date(curDate.valueOf() + RandomMilliseconds);
  return RandomDate;
};
let eventDestinationDeskriptions = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];
const eventDestinationDeskriptionGen = () => {
  const sentenceNumber = getRandomInteger(0, 5);
  let eventDestinationDeskription = ``;
  for (let index = 0; index < sentenceNumber; index++) {
    let sentence = eventDestinationDeskriptions[getRandomInteger(0, eventDestinationDeskriptions.length)];
    eventDestinationDeskription += sentence;
  }
  return eventDestinationDeskription;
};

const eventDestinationPhotoGen = () => `http://picsum.photos/248/152?r=` + Math.random();

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

let offersList = [
  {
    type: `taxi`,
    name: `Switch to comfort`,
    price: 20
  },
  {
    type: `taxi`,
    name: `Order Uber`,
    price: 20
  },
  {
    type: `flight`,
    name: `Add luggage`,
    price: 50
  },
  {
    type: `flight`,
    name: `Switch to comfort`,
    price: 60
  },
  {
    type: `drive`,
    name: `Rent a car`,
    price: 200
  },
  {
    type: `check-in`,
    name: `Add breakfast`,
    price: 50
  },
  {
    type: `sightseeing`,
    name: `Lunch in city`,
    price: 30
  },
  {
    type: `sightseeing`,
    name: `Book tickets`,
    price: 40
  }
];

const findOffer = (type) => {
  let results = [];
  offersList.forEach(element => {
    if (element.type === type) {
      results.push(element);
    }
  });
  return results;// offers.find(offer=>offer.type===type)
};

export class Event {
  constructor() {
    this.dateBegin = getRandomDate();
    this.dateEnd = new Date(this.dateBegin.valueOf() + getRandomInteger(0.5 * 3600000, 52 * 3600000));
    let type = getRandom(eventTypes);
    this.type = type[0];
    this.typeText = type[1];
    this.typeIconSrc = type[2];
    this.location = getRandom(eventLocations);
    this.price = getRandomInteger(10, 1000);
    let offers = findOffer(this.type);
    if (offers.length > 0) {
      this.offers = offers;
    }
    this.favority = Boolean(getRandomInteger());
  }
}
