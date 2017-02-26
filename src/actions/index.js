import axios from 'axios';

const API_KEY = '5816cda4f2d9a3951b14c87316cbaa88';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_BOOKS = 'FETCH_BOOKS';

export function fetchBooks() {
  //const url = `${ROOT_URL}&q=${city},us`;
  const herokuURL = `http://balance-api.herokuapp.com/product?category=Books&sortKey=date_added&ascDesc=asc`;
  const request = axios.get(herokuURL)

  return {
    type: FETCH_BOOKS,
    payload: request
  };
}

export const FETCH_HOMEWARE = 'FETCH_HOMEWARE';

export function fetchHomeware() {
  //const url = `${ROOT_URL}&q=${city},us`;
  const herokuURL = `http://balance-api.herokuapp.com/product?category=Home&sortKey=date_added&ascDesc=asc`;
  const request = axios.get(herokuURL)

  return {
    type: FETCH_HOMEWARE,
    payload: request
  };
}

export const FETCH_SELECTED_PRODUCT = 'FETCH_SELECTED_PRODUCT';

export function fetchSelectedProduct() {
  //const url = `${ROOT_URL}&q=${city},us`;
  const herokuURL = `http://balance-api.herokuapp.com/product?category=all&sortKey=date_added&ascDesc=asc`;
  const request = axios.get(herokuURL)

  return {
    type: FETCH_SELECTED_PRODUCT,
    payload: request
  };
}
