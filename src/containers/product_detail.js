import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSelectedProduct} from '../actions/index';

class ProductDetail extends Component {


  componentWillMount() {
    //right now it gets all products...
    this.props.fetchSelectedProduct();
    console.log(this.props.selectedProduct)

  }

  renderDetail(results) {
    return (
      results.map((item) =>
      <Col xs={6} md={3}>
        <Thumbnail href="#" alt="171x180" src= {item.imageUrl}/>
         <h4>{item.title} </h4>
          <h4 className="grey">{item.fromEntity} </h4>
             <h4 className="grey">${item.price} </h4>
      </Col>
        )
    );
  };


  render() {
    return (
      <div className="container">
          <div>This will be a post named {this.props.params.name} </div>
      </div>

)
  }
}

function mapStateToProps({ selectedProduct}) {
  return { selectedProduct }; // { weather } === { weather: weather}
};

export default connect( mapStateToProps, { fetchSelectedProduct })(ProductDetail);
