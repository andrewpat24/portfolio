import React from "react";
import "../styles/Projects.scss";
import ProjectCard from "./ProjectCardComponent";

// Project Images
import HushHushImg from "../images/HushHush.png";
import ReactImg from "../images/React-icon.svg";
import LaneBreachImg from "../images/LaneBreachLogo.jpg";
import PortfolioImg from "../images/portfolio.png";

function ProjectCardGeneratorComponent(props) {
  const HushHush = {
    Title: "HushHush",
    Description: `A service for sharing files securely. Upload your file, set a
        secret key, tell us how long you need it available, and how many
        times it may be downloaded. We then provide a link to download the
        file using the secret key as a password.`,
    Image: HushHushImg,
    Tools: ["Node.js", "Express", "React", "AWS Lambda", "MongoDB Atlas"],
    Source: "https://github.com/hushhushpass/hushpass"
  };

  const Emaily = {
    Title: "Emaily",
    Description: `Emaily utilizes google oauth, stripe, and sendgrid APIs to allow users to send and review email surveys. Created during Stephen Grider's Express with React Udemy course.`,
    Image: ReactImg,
    Tools: [
      "React",
      "Node.js",
      "Express",
      "Google OAuth",
      "SendGrid",
      "MongoDB Atlas",
      "Udemy"
    ],
    Source: "https://github.com/andrewpat24/emaily"
  };

  const LaneBreach = {
    Title: "LaneBreach",
    Description: `An open source project to allow bicyclists commuters to easily report bike-lane blockages by streamlining the process to send the image and metadata directly to 311's servers.`,
    Image: LaneBreachImg,
    Tools: ["React", "Express", "Node.js", "Docker", "CircleCI"],
    Source: "https://github.com/lanebreach/frontend"
  };

  const Portfolio = {
    Title: "Portfolio",
    Description: `A modular portfolio that can be easily modified by and for other developers.`,
    Image: PortfolioImg,
    Tools: ["React", "Bulma"],
    Source: "https://github.com/andrewpat24/portfolio"
  };

  const Expensify = {
    Title: "Expensify",
    Description: `A react application utilizing firebase where users can login to track their expenses.`,
    Image: ReactImg,
    Tools: [
      "React",
      "Redux",
      "Jest",
      "Enzyme",
      "Webpack",
      "Babel",
      "Firebase",
      "Google OAuth",
      "Udemy"
    ],
    Source: "https://rocky-beach-76443.herokuapp.com"
  };

  const ProjectList = [HushHush, Emaily, LaneBreach, Portfolio, Expensify];

  function generateProjectCards(ProjectList, numberOfCardsToGenerate) {
    let cardMarkeup = [];

    for (
      let ii = 0;
      ii < numberOfCardsToGenerate && ii < ProjectList.length;
      ii++
    ) {
      cardMarkeup.push(
        <div className="column is-multiline" key={ProjectList[ii].Description}>
          <ProjectCard
            Title={ProjectList[ii].Title}
            Description={ProjectList[ii].Description}
            Image={ProjectList[ii].Image}
            Tools={ProjectList[ii].Tools}
            Source={ProjectList[ii].Source}
          />
        </div>
      );
    }
    return cardMarkeup;
  }

  return (
    <section className="ProjectCard">
      <div className="columns is-multiline">
        {generateProjectCards(ProjectList, props.numberOfCardsToGenerate)}
      </div>
    </section>
  );
}

export default ProjectCardGeneratorComponent;
