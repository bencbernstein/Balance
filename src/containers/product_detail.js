import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSelectedProduct } from '../actions/index';
import { Carousel } from 'react-bootstrap';

import { Link } from 'react-router';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
  }



  componentWillMount() {
    console.log(this.props.params.name)
    this.props.fetchSelectedProduct(this.props.params.name);
  }

  renderSelected(results) {
    return (
      results.map((item) =>
                        <div className="row">
                          <div className="col-md-6"><img src={item.imageUrl}/></div>
                          <div className="col-md-6 left">
                          <h3 className="title">{item.title}  </h3>
                          <h5 className="grey">{item.fromEntity} </h5>
                          <h4 className="price"> ${item.price} </h4>
                          <hr />
                          <p> {item.description} </p>
                        </div>
                        </div>
        )
    );
  };

  render() {
    return (
            <div> {this.renderSelected(this.props.selectedProduct)} </div>

    );
  };

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSelectedProduct }, dispatch);
}

function mapStateToProps({ selectedProduct }) {
  return { selectedProduct };
};

// exporting the conected version
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
