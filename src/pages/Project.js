import React from "react";
import ButtonsBottom from "../components/ButtonsBottom";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

export const Project1 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <Project projectNumber={0} />
        <ButtonsBottom
          left={"/portfolio-deploy"}
          right={"/portfolio-deploy/projet-2"}
        />
      </div>
    </main>
  );
};

export const Project2 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <Project projectNumber={1} />
        <ButtonsBottom
          left={"/portfolio-deploy/projet-1"}
          right={"/portfolio-deploy/projet-3"}
        />
      </div>
    </main>
  );
};

export const Project3 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <Project projectNumber={2} />
        <ButtonsBottom
          left={"/portfolio-deploy/projet-2"}
          right={"/portfolio-deploy/projet-4"}
        />
      </div>
    </main>
  );
};

export const Project4 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <Project projectNumber={3} />
        <ButtonsBottom
          left={"/portfolio-deploy/projet-3"}
          right={"/portfolio-deploy/projet-5"}
        />
      </div>
    </main>
  );
};

export const Project5 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <Project projectNumber={4} />
        <ButtonsBottom
          left={"/portfolio-deploy/projet-4"}
          right={"/portfolio-deploy/contact"}
        />
      </div>
    </main>
  );
};
