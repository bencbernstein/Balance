import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFeaturedProduct } from '../actions/index';
import { Carousel } from 'react-bootstrap';

import { Link } from 'react-router';

class ProductsFeatured extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchFeaturedProduct();
  }

  renderFeatured(results) {
    return (
      results.map((item) =>
               <Carousel.Item>
                 <Link to={`/product/${item.pid}`}>
                    <h3 className="title carousel-title"> {item.title} </h3>
                    <img src={item.imageUrl}/>
                    <h4 className="grey"> {item.fromEntity}  </h4>
                    <h4 className="grey"> ${item.price} </h4>

                  </Link>
               </Carousel.Item>


        )
    );
  };

  render() {
    return (
        <Carousel >
            {this.props.featuredProducts.map(this.renderFeatured)}
        </Carousel>
    );
  };

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchFeaturedProduct }, dispatch);
}

function mapStateToProps({ featuredProducts }) {
  return { featuredProducts };
};

// exporting the conected version
export default connect(mapStateToProps, mapDispatchToProps)(ProductsFeatured);
