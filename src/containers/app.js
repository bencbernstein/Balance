import React from 'react';
import { Component } from 'react';

import Header from '../containers/header';
import Footer from '../containers/footer';
import ProductList from '../containers/product_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  };
}
