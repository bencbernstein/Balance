import React from 'react';
import Body from './body';

function showArtwork() {
  function handleClick(e) {
    e.preventDefault();
    console.log('showartworkwasclicked')
  };
};

const Header = () => {

  return (
    <div className="text-center">
      <h1>
      Balance
      </h1>
      <nav className="navbar navbar-default">
        <ul className="list-inline">
          <li ><a href="#">Artwork</a></li>
          <li className="active"><a href="#">Handmade</a></li>
          <li className="active"><a href="#">Homeware</a></li>
        </ul>
      </nav>
    </div>

  );


};

export default Header;
