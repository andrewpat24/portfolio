import React from "react";
import { Link } from "react-router-dom";
import ProjectCardGenerator from "./ProjectCardGeneratorComponent";

function Home() {
  return (
    <section className="AllProjects">
      <div className="container">
        <h1 className="title">Projects</h1>
        <p className="subtitle">
          My first website with <strong>Bulma</strong>!
        </p>
        <Link to="/#Projects" class="button is-primary is-outlined">
          Home
        </Link>
      </div>
    </section>
  );
}

export default Home;
