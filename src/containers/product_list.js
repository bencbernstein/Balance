import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductList extends Component {
  renderProducts(results) {
    return (
      results.map((item) =>
        <tr key = {item.title}>
         <td>{item.title} </td>
         <td><img src={item.imageUrl}></img> </td>
         <td>{item.fromEntity} </td>
        <td>{item.description} </td>
        <td>${item.price} </td>
        </tr>

        )
    );
  };
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Item</th>
            <th>Image</th>
            <th>Org</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map(this.renderProducts)}
          </tbody>
        </table>
    );
  };
}

function mapStateToProps({ products }) {
  return { products }; // { weather } === { weather: weather}
};

// exporting the conected version
export default connect(mapStateToProps)(ProductList);
