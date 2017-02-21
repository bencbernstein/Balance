import React from 'react';
import Featured from './featured';

const Body = (props) => {
    const Products = props.products.map((product) => {
      return <div className ="center text-center">
            <div>{product.name}</div>
            <img src={product.img}/>
            <div>{product.description}</div>
            <br />
       </div>
    });

  return (
    <div>
      {Products}
    </div>
  );
};

export default Body;
