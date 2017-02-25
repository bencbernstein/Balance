import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBooks, fetchHomeware} from '../actions/index';
import { Navigation, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: ''};

  //binding the instance to searchbar ... overwriting the local method
  // if you ever pass a callback around and has a this, you probably have to binding
  // the context ... 'error is clear, i.e. setstate is undefined'
  //  this.onInputChange = this.onInputChange.bind(this);
    this.categorySelect = this.categorySelect.bind(this);
  }

  categorySelect(eventKey) {
    switch (eventKey) {
      case "1":
        //fetchart
      case "2":
        //fetchhandmade
      case "3":
        //fetchclothing
      case "4":
          console.log('case 4');
          return this.props.fetchBooks();
      case "5":
          return this.props.fetchHomeware();  //fetchhomeware
      default:
          console.log('hitdefault')

    }

  }

  render() {
    return (

      <Nav bsStyle="tabs" activeKey="1" onSelect={this.categorySelect}>
        <NavItem eventKey="1" title="Artwork">Artwork</NavItem>
        <NavItem eventKey="2" title="Handmade">Handmade</NavItem>
        <NavItem eventKey="3" title="Clothing">Clothing</NavItem>
        <NavItem eventKey="4" title="Books">Books</NavItem>
        <NavItem eventKey="5" title="Homeware">Homeware</NavItem>
      </Nav>
    );
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBooks, fetchHomeware }, dispatch);
}
                      // null means no state
export default connect(null, mapDispatchToProps)(SearchBar);
