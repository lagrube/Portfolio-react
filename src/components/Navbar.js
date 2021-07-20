import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <NavLink
          to="/portfolio-deploy"
          exact
          className="lien"
          activeClassName="nav-active"
        >
          <li>Accueil</li>
        </NavLink>
      </div>
      <div className="navbar__right">
        <ul>
          <li className="lien nav-portfolio">
            Portfolio
            <ul>
              <NavLink
                to="/portfolio-deploy/projet-1"
                exact
                className="lien nav-project"
              >
                <li>Projet 1</li>
              </NavLink>
              <NavLink
                to="/portfolio-deploy/projet-2"
                exact
                className="lien nav-project"
              >
                <li>Projet 2</li>
              </NavLink>
              <NavLink
                to="/portfolio-deploy/projet-3"
                exact
                className="lien nav-project"
              >
                <li>Projet 3</li>
              </NavLink>
              <NavLink
                to="/portfolio-deploy/projet-4"
                exact
                className="lien nav-project"
              >
                <li>Projet 4</li>
              </NavLink>
            </ul>
          </li>
          <a href="https://lagrube.github.io/cv-deploy/" className="lien">
            <li>CV</li>
          </a>
          <NavLink to="/portfolio-deploy/contact" className="lien">
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
