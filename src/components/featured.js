import React from 'react';

const Featured = (props) =>  {
  const featuredItems = props.map((item) => {
    return <div> Featured item is hi {item.name}</div>;
  });

  return (

    <ul className="col-md-4 list-group">
      {featuredItems}
    </ul >

    );
  };

export default Featured;
