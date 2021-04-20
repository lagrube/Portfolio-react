import React from "react";
import Particles from "react-particles-js";
import Navbar from "../components/Navbar";
import ParticleConfig from "../components/ParticleConfig";

const Home = () => {
  return (
    <div>
      <div className="background">
        <Particles params={ParticleConfig}></Particles>
      </div>
      <Navbar />
      <div className="descriptionCenter">
        <p className="normalSize">
          Bienvenue sur le site de <br />{" "}
          <span className="bold"> Guillaume Gruber</span>
        </p>
        <p className="smallSize">Vous pouvez me retrouver sur</p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/guillaume-gruber-9a78a91b9/">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/lagrube">
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
