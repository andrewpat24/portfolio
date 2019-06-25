import React from "react";
import "../styles/Projects.scss";
import ProjectCardGenerator from "./ProjectCardGeneratorComponent";
// import ProjectCard from "./ProjectCardComponent";

function ProjectsComponent() {
  // <ProjectCardGenerator NumberOfDisplayedProjects={3} />
  return (
    <section className="ProjectsComponent">
      <div className="projects-container">
        <div className="projects">
          <div className="columns is-multiline">
            <div className="column project-section-header is-one-quarter">
              <div className="subtitle is-1">Projects</div>
              <div className="projects-description">
                <p>
                  After finishing my degree in computer science I have worked on
                  several personal and professional projects including this
                  portfolio.
                </p>
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
