// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random


const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
const getRandom = (array)=>{
  return array[getRandomInteger(0,array.length-1)]
};
/* Array.prototype.getRandom = function(){
  let arr = this;
  return arr[getRandomInteger(0,arr.length)]
};*/


const getRandomDate = (a = 1, b = 24*30) => {
  let curDate = new Date();
  let RandomMilliseconds=getRandomInteger(a*3600000,b*3600000);
  let RandomDate = new Date(curDate.valueOf() + RandomMilliseconds)
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
  const sentenceNumber = getRandomInteger(0,5);
  let eventDestinationDeskription = ``;
  for (let index = 0; index < sentenceNumber; index++) {
    let sentence = eventDestinationDeskriptions[getRandomInteger(0,eventDestinationDeskriptions.length)];
    eventDestinationDeskription += sentence;   
  }
  return eventDestinationDeskription;
};

const eventDestinationPhotoGen = () => `http://picsum.photos/248/152?r=` + Math.random();

var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: [
      'Let It Rock',
      'You Give Love a Bad Name'
    ]
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: [
      '1999',
      'Little Red Corvette'
    ]
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

let eventTypes = [
  `Taxi`,
  `Bus`,
  `Train`,
  `Ship`,
  `Transport`,
  `Drive`,
  `Flight`,
  `CheckIn`, 
  `Sightseeing`,
  `Restaurant`
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

let offers = [
  {
    type: `Taxi`,
    name:`Switch to comfort`,
    price: 20
  },
  {
    type: `Taxi`,
    name:`Order Uber`,
    price: 20
  },
  {
    type: `Flight`,
    name:`Add luggage`,
    price: 50
  },
  {
    type: `Flight`,
    name:`Switch to comfort`,
    price: 60
  },
  {
    type: `Drive`,
    name:`Rent a car`,
    price: 200
  },
  {
    type: `Check-in`,
    name:`Add breakfast`,
    price: 50
  },
  {
    type: `Sightseeing`,
    name:`Lunch in city`,
    price: 30
  },
  {
    type: `Sightseeing`,
    name:`Book tickets`,
    price: 40
  }
];

const findOffer = (type) => {
  let results = [];
  offers.forEach(element => {
    if (element.type === type) {
      results.push(element);
    }
  });
  return getRandom(results);// offers.find(offer=>offer.type===type)
}

class event {
  constructor() {
    this.date = getRandomDate();
    this.type = getRandom(eventTypes);
    this.location = getRandom(eventLocations);
    this.price = getRandomInteger(10,1000);
    let offer = findOffer(this.type);
    if (offer != undefined) {
      this.offerName = offer.name;
      this.offerPrice = offer.price;
    }
    this.favority = false;
  }
}
