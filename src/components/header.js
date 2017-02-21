import React from 'react';

const Header = () => {


  return (
    <div className="text-center">
      <h1>
      Balance
      </h1>
      <nav className="navbar navbar-default">
        <ul className="list-inline">

          <li className="active"><a href="#">Artwork</a></li>
          <li className="active"><a href="#">Handmade</a></li>
          <li className="active"><a href="#">Homeware</a></li>
        </ul>
      </nav>
    </div>

  );
};

export default Header;
