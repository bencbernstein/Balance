import React, { Component } from 'react';

// extends component gives it added functionality
class SearchBar extends Component {
  // define a method in this class
  // called automatically, constructor is, setup for the class. initialize
  // variables, state
  constructor(props) {
    // i think this calls on component ... super
    super(props);
    // whenever they update term, this is the property
    // they record term on... update this.state to be value of input
    this.state = { term: ''};
  }
  render() {
    return  (
      <div>
        <input
          value= {this.state.term}
          onChange={event => this.setState({ term: event.target.value})} />
      </div>
    )

  }

}

export default SearchBar;
// can import the searchbar now...

// class based components have states
