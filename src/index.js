import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import Fetch from 'react-fetch';

class App extends React.Component  {

  // const showArtwork = (e) => {
  //   e.preventDefault();
  //   console.log('ShowArt link was clicked.');
  // };

  constructor(props) {
    super(props);

    this.state = {products: []};

    fetch('https://balance-api.herokuapp.com/product?category=all&sortKey=date_added&ascDesc=asc', {
      headers:{
       'Access-Control-Allow-Origin':'*',
       'Content-Type': 'multipart/form-data'
        },
      mode: 'no-cors',
    }).then(function(response) {
      console.log(response)
      this.setState ({ products: response
      });
    }).catch(function(err) {

    });

}
  render() {
      return (
        <div>
          <Header  />
          <Body products={this.state.products} />
          <Footer />
        </div>
      )
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));
