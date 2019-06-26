import React from "react";
import { Link } from "react-router-dom";
import "../styles/Projects.scss";
import ProjectCardGenerator from "./ProjectCardGeneratorComponent";
// import ProjectCard from "./ProjectCardComponent";

function ProjectsComponent() {
  // <ProjectCardGenerator NumberOfDisplayedProjects={3} />
  return (
    <section className="Projects" id="Projects">
      <div className="projects-container">
        <div className="projects">
          <div className="columns is-multiline">
            <div className="column project-section-header is-one-quarter">
              <div className="subtitle is-1">Projects</div>
              <div className="projects-description">
                <p>
                  A collection of projects I've done either on my own or through
                  online classes.
                </p>
              </div>
              <div className="projects-page-link">
                <Link to="/Projects" class="button is-primary is-outlined">
                  All Projects
                </Link>
              </div>
            </div>
            <div className="column is-three-quarters">
              <ProjectCardGenerator />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsComponent;
