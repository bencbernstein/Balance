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
        <Link to={`/${item.title}`}>
          <div className="col-md-4 ">
            <img src= {item.imageUrl}> </img>
            <h4> {item.title} </h4>
            <h4 className="grey">{item.fromEntity} </h4>
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
