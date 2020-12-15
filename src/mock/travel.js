// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
    const lower = Math.ceil(Math.min(a, b));
    const upper = Math.floor(Math.max(a, b));
    return Math.floor(lower + Math.random() * (upper - lower + 1));
  };
  const generateDescription = () => {
    const descriptions = [
      `Изучить теорию`,
      `Сделать домашку`,
      `Пройти интенсив на соточку`
    ];

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

let offers = (
  {
    Type: `Taxi`,
    `Name`:`Comfort`,
    `Price` : `20`
  },

);
