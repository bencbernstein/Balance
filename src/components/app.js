import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import ProductList from '../containers/product_list';

export default class App extends Component {
  render() {
    return (
      <div>
      <h1> Balance </h1>
      <SearchBar />
      <ProductList />
      </div>
    );
  };
}
