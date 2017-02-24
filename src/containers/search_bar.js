import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

  //binding the instance to searchbar ... overwriting the local method
  // if you ever pass a callback around and has a this, you probably have to binding
  // the context ... 'error is clear, i.e. setstate is undefined'
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    //fetchweather fires
    this.props.fetchWeather(this.state.term);
    this.setState({ term: ''});

  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Hit the button to fire the API..."
          className="form-control"
          value={this.state.term}
          onChange = {this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}
                      // null means no state
export default connect(null, mapDispatchToProps)(SearchBar);
