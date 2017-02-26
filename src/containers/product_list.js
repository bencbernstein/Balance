import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  renderCategory(results) {
    return (
      results.map((item) =>
        <Link to={`/product/${item.pid}`}>
          <div className="col-md-3 col-xs-12 ">
            <img className="img-rounded img-responsive" src= {item.imageUrl}> </img>
            <h4 className="title">{item.title}  </h4>
            <h5 className="grey">{item.fromEntity} </h5>
            <h4 className="grey"> ${item.price} </h4>
          </div>
          </Link>

        )
    );
  };

  render() {
    return (
      <div className="row">
          {this.props.products.map(this.renderCategory)}
        </div>
    );
  };

}


function mapStateToProps({ products}) {
  return { products }; // { weather } === { weather: weather}
};

// exporting the conected version
export default connect(mapStateToProps)(ProductList);
