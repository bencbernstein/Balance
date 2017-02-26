import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSelectedProduct} from '../actions/index';

class ProductDetail extends Component {

  componentWillMount() {
    this.props.fetchSelectedProduct();
    console.log(this.props.selectedProduct)
  }


  render() {
    return (
      <div className="container">
          <div>This will be a post named {this.props.params.name} </div>

      </div>

)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSelectedProduct }, dispatch);
}

function mapStateToProps({ selectedProduct}) {
  return { selectedProduct };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
