import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Row, Thumbnail} from 'react-bootstrap';

class ProductList extends Component {
  renderProducts(results) {
    return (
      results.map((item) =>
      <Col xs={6} md={3}>
        <Thumbnail href="#" alt="171x180" src={item.imageUrl} />
         <h4>{item.title} </h4>
          <h4 className="grey">{item.fromEntity} </h4>
             <h4 className="grey">${item.price} </h4>
      </Col>
        )
    );
  };
  render() {
    return (
      <Grid>
        <Row>

          {this.props.products.map(this.renderProducts)}

        </Row>
        </Grid>
    );
  };
}

function mapStateToProps({ products }) {
  return { products }; // { weather } === { weather: weather}
};

// exporting the conected version
export default connect(mapStateToProps)(ProductList);
