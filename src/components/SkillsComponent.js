import React from "react";
import SkillsCard from "./SkillsCardComponent";
import "../styles/Skills.scss";

function SkillsComponent() {
  // Frontend card props
  const frontendTitle = "Front-End Development";
  const frontendDescription = `I have experience ranging from fixing front-end issues caused
  by internet explorer in ES5 to utilizing more modern
  frameworks like React.`;
  const frontendLanguages = ["HTML/CSS", "JavaScript", "TypeScript", "Sass"];
  const frontendFrameworks = ["jQuery", "React", "Bootstrap", "Bulma"];
  const frontendTools = ["Webpack", "Browser Devtools", "Babel"];

  // Backend card props
  const backendTitle = "Back-end Development";
  const backendDescription = `I've worked with both object oriented and functional languages through a web stack or writing scripts. 
  I'm passionate about linking both front and back ends as elegantly as possible.
  `;
  const backendLanguages = ["JavaScript", "Python", "Java", "C#"];
  const backendFrameworks = ["Node", "Express JS", ".NET"];
  const backendTools = [
    "MySQL",
    "PostgreSQL",
    "MongoDB",
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
