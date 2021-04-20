import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <li>Accueil</li>
      </div>
      <div className="navbar__right">
        <ul>
          <li>Portfolio</li>
          <li>CV</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
