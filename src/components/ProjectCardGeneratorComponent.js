import React from "react";
import "../styles/Projects.scss";
import ProjectCard from "./ProjectCardComponent";

function ProjectCardGeneratorComponent() {
  return (
    <section className="ProjectCardComponent">
      <div className="columns is-multiline">
        <div className="column">
          <ProjectCard />
        </div>
        <div className="column">
          <ProjectCard />
        </div>
        <div className="column">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}

export default ProjectCardGeneratorComponent;
