import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/portfolio-deploy"
          exact
          activeClassName="nav-active"
          className="hover"
        >
          <li>accueil</li>
        </NavLink>

        <li className="nav-portfolio">
          portfolio
          <ul className="nav-projects">
            <NavLink
              to="/portfolio-deploy/projet-1"
              exact
              activeClassName="nav-active"
              className="hover"
            >
              <li>projet 1</li>
            </NavLink>
            <NavLink
              to="/portfolio-deploy/projet-2"
              activeClassName="nav-active"
              className="hover"
            >
              <li>projet 2</li>
            </NavLink>
            <NavLink
              to="/portfolio-deploy/projet-3"
              activeClassName="nav-active"
              className="hover"
            >
              <li>projet 3</li>
            </NavLink>
            <NavLink
              to="/portfolio-deploy/projet-4"
              activeClassName="nav-active"
              className="hover"
            >
              <li>projet 4</li>
            </NavLink>
          </ul>
        </li>

        <NavLink
          to="/portfolio-deploy/contact"
          activeClassName="nav-active"
          className="hover"
        >
          <li>contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
