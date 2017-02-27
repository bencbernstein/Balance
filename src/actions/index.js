import axios from 'axios';

const API_KEY = '5816cda4f2d9a3951b14c87316cbaa88';

export const FETCH_FEATURED = 'FETCH_FEATURED';

export function fetchFeaturedProduct() {
  //const url = `${ROOT_URL}&q=${city},us`;
  const herokuURL = `https://balance-api.herokuapp.com/product?category=all&sortKey=date_added&ascDesc=desc`;
  const request = axios.get(herokuURL)

  return {
    type: FETCH_FEATURED,
    payload: request
  };
}

export const FETCH_CATEGORY = 'FETCH_CATEGORY';

export function fetchCategory(cat) {
  //const url = `${ROOT_URL}&q=${city},us`;
  const category = cat.replace(/\b\w/g, function(l){ return l.toUpperCase() })
  const herokuURL = `https://balance-api.herokuapp.com/product?category=` + category + `&sortKey=date_added&ascDesc=desc`;

  const request = axios.get(herokuURL)

  return {
    type: FETCH_CATEGORY,
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
