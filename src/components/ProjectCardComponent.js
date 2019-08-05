import React from "react";
import "../styles/ProjectCard.scss";

function ProjectCardComponent(props) {
  const generateItemMarkeup = (props, field) => {
    if (typeof props[field] === "undefined") {
      return "";
    }

    const itemList = props[field];
    let markup = new Array();

    itemList.forEach(item => {
      markup.push(
        <div className="static-column-10 text-center" key={item}>
          <div className="grey-text-background">{item}</div>
        </div>
      );
    });

    return markup;
  };

  return (
    <section className="ProjectCardComponent horizontally-center">
      <div className="card add-border-radius reduce-card-max-width increase-card-min-width">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              className="add-border-radius"
              src={props.Image}
              alt="Project Image"
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="title">{props.Title}</div>
          <div className="project-description">
            <p className="subtitle is-5">{props.Description}</p>
          </div>
          <div className="project-tooling">
            <div className="static-columns is-multiline horizontally-center project-tools">
              {generateItemMarkeup(props, "Tools")}
            </div>
          </div>
          <div className="project-links columns">
            <div className="column">
              <a
                href={props.Source}
                target="_blank"
                rel="noopener noreferrer"
                className=" project-git button is-primary horizontally-center link-font-size"
              >
                Source Code
              </a>
            </div>
            <div className="column">
              <a
                href={props.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="column project-url button is-link horizontally-center link-font-size"
              >
                Project Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectCardComponent;
