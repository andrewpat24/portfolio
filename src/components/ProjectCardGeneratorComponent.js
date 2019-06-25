import React from "react";
import "../styles/Projects.scss";
import ProjectCard from "./ProjectCardComponent";

// Project Images
import LaneBreachImg from "../images/640x480.png";

function ProjectCardGeneratorComponent() {
  const HushHush = {
    Title: "HushHush",
    Description: `A service for sharing files securely. Upload your file, set a
        secret key, tell us how long you need it available, and how many
        times it may be downloaded. We then provide a link to download the
        file using the secret key as a password.`,
    Image: "https://bulma.io/images/placeholders/640x480.png",
    Tools: ["Node.js", "Express", "React", "AWS Lambda", "MongoDB Atlas"],
    Source: "https://github.com/hushhushpass/hushpass"
  };

  const Emaily = {
    Title: "Emaily",
    Description: `Emaily utilizes google oauth, stripe, and sendgrid APIs to allow users to send and review email surveys. Created during Stephen Grider's Express with React Udemy course.`,
    Image: "https://bulma.io/images/placeholders/640x480.png",
    Tools: [
      "React",
      "Node.js",
      "Express",
      "Google OAuth",
      "SendGrid",
      "MongoDB Atlas"
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

  const ProjectList = [HushHush, Emaily, LaneBreach];

  function generateProjectCards(ProjectList, numberOfCardsToGenerate) {
    let cardMarkeup = [];

    for (
      let ii = 0;
      ii < numberOfCardsToGenerate && ii < ProjectList.length;
      ii++
    ) {
      cardMarkeup.push(
        <div className="column" key={ProjectList[ii].Description}>
          <ProjectCard
            Title={ProjectList[ii].Title}
            Description={ProjectList[ii].Description}
            Image={ProjectList[ii].Image}
            Tools={ProjectList[ii].Tools}
          />
        </div>
      );
    }
    return cardMarkeup;
  }

  return (
    <section className="ProjectCardComponent">
      <div className="columns is-multiline">
        {generateProjectCards(ProjectList, 4)}
      </div>
    </section>
  );
}

export default ProjectCardGeneratorComponent;
