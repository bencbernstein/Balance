import axios from 'axios';

const API_KEY = '5816cda4f2d9a3951b14c87316cbaa88';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

//fetchweather needs a city  if you want to use const url...
export function fetchWeather() {
  //const url = `${ROOT_URL}&q=${city},us`;
  const herokuURL = `http://balance-api.herokuapp.com/product?category=all&sortKey=date_added&ascDesc=asc`;

  var config = {
    headers: {
        'Content-Type': 'application/json',

  },
};

  const request = axios.get(herokuURL, config)

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}


//https://balance-api.herokuapp.com/product?category=all&sortKey=date_added&ascDesc=asc
