import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchArtwork, fetchHandmade, fetchClothing, fetchBooks, fetchHomeware} from '../actions/index';
import { Navbar, Navigation, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';

class Header extends Component {
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
        return this.props.fetchArtwork();
      case "2":
        return this.props.fetchHandmade();
      case "3":
        return this.props.fetchClothing();
      case "4":
          return this.props.fetchBooks();
      case "5":
          return this.props.fetchHomeware();
        default:
          return this.props.fetchHomeware();
    }
  }

  render() {
    return (

      <Nav  justified activeKey="1" onSelect={this.categorySelect}>
          <Link to=""><h1 className="brand">Balance</h1></Link>
        <NavItem eventKey="1" title="Artwork"><Link to={`/artwork`}>Artwork</Link></NavItem>
        <NavItem eventKey="2" title="Handmade"><Link to={`/handmade`}>Handmade</Link></NavItem>
        <NavItem eventKey="3" title="Clothing"><Link to={`/clothing`}>Clothing</Link></NavItem>
        <NavItem eventKey="4" title="Books"><Link to={`/books`}>Books</Link></NavItem>
        <NavItem eventKey="5" title="Homeware"><Link to={`/homeware`}>Homeware</Link></NavItem>
      </Nav>
    );
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchArtwork, fetchHandmade, fetchClothing, fetchBooks, fetchHomeware }, dispatch);
}
                      // null means no state
export default connect(null, mapDispatchToProps)(Header);
