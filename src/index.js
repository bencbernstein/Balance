import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Featured from './components/featured';
import Footer from './components/footer';


class App extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }

    // endpoint to get products goes here

    };

  render() {
    return (
      <div className="text-center !important">
        <Header />
        <Featured products={this.state.products}/>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
