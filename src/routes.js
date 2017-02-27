import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import Header from './containers/header';
import ProductsList from './containers/product_list';
import ProductsFeatured from './containers/products_featured';
import ProductDetail from './containers/product_detail';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={ProductsFeatured} />
    <Route path ="/:category" component={ProductsList} />
    <Route path ="/product/:name" component={ProductDetail} />
  </Route>
);
