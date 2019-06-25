import React from "react";
import "../styles/ProjectCard.scss";

function ProjectCardComponent() {
  return (
    <section className="ProjectCardComponent horizontally-center">
      <div className="card add-border-radius">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/640x480.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="title">HushHush</div>
          <div className="project-description">
            <p className="subtitle is-5">
              A service for sharing files securely. Upload your file, set a
              secret key, tell us how long you need it available, and how many
              times it may be downloaded. We then provide a link to download the
              file using the secret key as a password.
            </p>
          </div>
          <div className="project-tooling">
            <div className="static-columns is-multiline horizontally-center project-tools">
              <div className="static-column-10 text-center">
                <div className="grey-text-background">Test</div>
              </div>
              <div className="static-column-10 text-center">
                <div className="grey-text-background">Test</div>
              </div>
              <div className="static-column-10 text-center">
                <div className="grey-text-background">Test</div>
              </div>
              <div className="static-column-10 text-center">
                <div className="grey-text-background">Test</div>
              </div>
              <div className="static-column-10 text-center">
                <div className="grey-text-background">Test</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectCardComponent;
