import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>&copy; Balance 2017</p>
      </footer>
    );
  };
}
