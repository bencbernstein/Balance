import React from 'react';

const Featured = (props) => {
  // map out the props.products passed to us from app.js

  // then put them in the divs. reference video_detail.js in example 

  return (
    <div>
      <h1> LATEST STEVE OLSON PHOTOGRAPHIC PRINT</h1>
      <img src="http://stephenolson.com/images/dove.jpg"/>
      <caption> BENEFITS ACLU </caption>
    </div>
  );
};

export default Featured;
