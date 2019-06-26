import React from "react";
import { Link } from "react-router-dom";
import ProjectCardGenerator from "./ProjectCardGeneratorComponent";
import "../styles/AllProjects.scss";

function Home() {
  return (
    <section className="AllProjects">
      <div className="container">
        <div className="all-projects-header">
          <div className="button-container">
            <Link
              to="/portfolio"
              class="button home-btn is-info is-outlined is-large"
            >
              Home
            </Link>
          </div>
          <h1 className="title">Projects</h1>
        </div>
        <ProjectCardGenerator numberOfCardsToGenerate={99} />
      </div>
    </section>
  );
}

export default Home;
