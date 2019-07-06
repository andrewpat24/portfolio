import React from "react";
import "../styles/About.scss";
import linkedInProfileImg from "../images/linkedinprofile.jpeg";

function About() {
  return (
    <section className="About">
      <div className="about-container horizontally-center">
        <div className="about">
          <div className="about-header">
            <div className="subtitle is-2 horizontally-center">About Me</div>
            <div className="title-img horizontally-center">
              <figure class="image is-128x128">
                <img className="is-rounded" src={linkedInProfileImg} />
              </figure>
            </div>
          </div>
          <div className="about-content">
            <div className="about-description subtitle is-3">
              I'm Andrew, a full stack developer from the Bay Area and graduate
              of San Francisco State University with a Bachelors of Science in
              CompSci. I'm a result-oriented programmer with 2 years of
              professional software development experience designing and
              developing software with direct input from end-users to managing
              development teams for enterprise-level projects.
            </div>
            <div className="about-resume-link horizontally-center">
              <a
                class="button is-primary is-rounded"
                href="https://github.com/andrewpat24"
                target="_blank"
                rel="noopener noreferrer"
              >
                Résumé
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
