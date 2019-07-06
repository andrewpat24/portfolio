import React from "react";
import SkillsCard from "./SkillsCardComponent";
import "../styles/Skills.scss";

function SkillsComponent() {
  // Frontend card props
  const frontendTitle = "Front-End Development";
  const frontendDescription = `
    From jQuery to React and Bootstrap to rolling my own libraries, 
    I'm an extremely flexible front-end developer with strong fundamentals 
    that can adapt to any tech thrown at me.
  `;
  const frontendLanguages = ["HTML/CSS", "JavaScript", "TypeScript", "Sass"];
  const frontendFrameworks = ["jQuery", "React", "Bootstrap", "Bulma"];
  const frontendTools = ["Webpack", "Browser Devtools", "Babel"];

  // Backend card props
  const backendTitle = "Back-end Development";
  const backendDescription = `
    Developed backends for web stacks using JavaScript's Node.js as well as C#'s .NET Core. 
    I have experience developing a multitude of backend features from DB operations, developing and working with API's, 
    and authentication.  
  `;
  const backendLanguages = ["JavaScript", "Python", "Java", "C#"];
  const backendFrameworks = ["Node", "Express JS", ".NET Core"];
  const backendTools = [
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Jest",
    "AWS Lambda",
    "Postman"
  ];

  return (
    <section className="Skills">
      <div className="skills-container" id="Skills">
        <div className="subtitle is-1 text-center">Skills</div>
        <div className="columns">
          <div className="column">
            <SkillsCard
              Title={frontendTitle}
              Description={frontendDescription}
              Languages={frontendLanguages}
              Frameworks={frontendFrameworks}
              Tools={frontendTools}
            />
          </div>
          <div className="column">
            <SkillsCard
              Title={backendTitle}
              Description={backendDescription}
              Languages={backendLanguages}
              Frameworks={backendFrameworks}
              Tools={backendTools}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsComponent;
