import axios from 'axios';

const API_KEY = '5816cda4f2d9a3951b14c87316cbaa88';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_FEATURED = 'FETCH_FEATURED';

export function fetchFeaturedProduct() {
  //const url = `${ROOT_URL}&q=${city},us`;
  const herokuURL = `http://balance-api.herokuapp.com/product?category=all&sortKey=date_added&ascDesc=desc`;
  const request = axios.get(herokuURL)

  return {
    type: FETCH_FEATURED,
    payload: request
  };
}

export const FETCH_ARTWORK = 'FETCH_ARTWORK';

export function fetchArtwork() {
  //const url = `${ROOT_URL}&q=${city},us`;
  const herokuURL = `http://balance-api.herokuapp.com/product?category=Artwork&sortKey=date_added&ascDesc=asc`;
  const request = axios.get(herokuURL)

  return {
    type: FETCH_ARTWORK,
    payload: request
  };
}

export const FETCH_HANDMADE = 'FETCH_HANDMADE';

export function fetchHandmade() {
  //const url = `${ROOT_URL}&q=${city},us`;
  const herokuURL = `http://balance-api.herokuapp.com/product?category=Handmade&sortKey=date_added&ascDesc=asc`;
  const request = axios.get(herokuURL)

  return {
    type: FETCH_HANDMADE,
    payload: request
  };
}

export const FETCH_CLOTHING = 'FETCH_CLOTHING';

export function fetchClothing() {
  //const url = `${ROOT_URL}&q=${city},us`;
  const herokuURL = `http://balance-api.herokuapp.com/product?category=Clothing&sortKey=date_added&ascDesc=asc`;
  const request = axios.get(herokuURL)

  return {
    type: FETCH_CLOTHING,
    payload: request
  };
}

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

export function fetchSelectedProduct(id) {
  //const url = `${ROOT_URL}&q=${city},us`;
  const ID = id;
  const herokuURL = `https://balance-api.herokuapp.com/product/details?id=${ID}`;
  const request = axios.get(herokuURL)

  return {
    type: FETCH_SELECTED_PRODUCT,
    payload: request
  };
}
