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

    // this.state = {
    //   products: [
    //       {
    //    "name" : "Steven Olson Photographic Print",
    //    "img" : "http://stephenolson .com/images/dove.jpg",
    //    "description" : "This print benefits the ACLU",
    //     "category" : "Artwork"},
    //       {
    //     "name" : "Ally Bernstein Linocut",
    //     "img" : "http://allybernstein.com/files/gimgs/th-5_relief1.jpg",
    //     "description" : "This print benefits the SPLC",
    //      "category" : "Artwork"},
    //    ],
    // };

    // url (required), options (optional)
    fetch('https://balance-api.herokuapp.com/product?category=all&sortKey=date_added&ascDesc=asc', {
      method: 'get',
      mode: 'no-cors',
      headers: {'Access-Control-Allow-Origin': '*'}
    }).then(function(response) {
        console.log(response)
    }).catch(function(err) {
    // Error :(
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
