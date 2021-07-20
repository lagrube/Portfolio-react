import React from "react";
import Navigation from "../components/Navigation";
import ButtonsBottom from "../components/ButtonsBottom";
import ContactForm from "../components/ContactForm";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 300,
    },
  };

  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

  return (
    <main>
      <motion.div
        className="contact"
        exit="out"
        animate="in"
        initial="out"
        variants={pageTransition}
        transition={transition}
      >
        <Navigation />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse</h4>
              <p>18 rue des santons</p>
              <p>34990 Juvignac</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="0642844284" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  07 66 31 51 31
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard text="fsagency@gmail.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => {
                    alert("Email copié !");
                  }}
                >
                  lagrube1@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="social-network">
            <ul className="content">
              <a
                href="https://www.linkedin.com/in/guillaume-gruber-9a78a91b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover"
              >
                <li>
                  <i className="fab fa-linkedin"></i>
                </li>
              </a>
              <a
                href="https://github.com/lagrube"
                target="_blank"
                rel="noopener noreferrer"
                className="hover"
              >
                <li>
                  <i className="fab fa-github"></i>
                </li>
              </a>
            </ul>
          </div>
          <div className="credits">
            <p>Guillaume - 2021</p>
          </div>
        </div>
        <ButtonsBottom left={"/portfolio-deploy/projet-5"} />
      </motion.div>
    </main>
  );
};

export default Contact;
