import React from "react";
import "../styles/Hero.scss";

function HeroComponent() {
  const linkedInUrl = "https://www.linkedin.com/in/andrew-patterson-65a158110/";
  const githubUrl = "https://github.com/andrewpat24/";
  const twitterUrl = "https://twitter.com/AndrewCodesHere";
  const mailToUrl = "mailto:andrewpat24@gmail.com";

  return (
    <section className="HeroComponent">
      <div className="hero-container section horizontally-center vertically-center">
        <div className="hero has-text-centered ">
          <div className="subtitle hero-subtitle has-text-light">Hi,</div>
          <div className="title hero-title has-text-light">I'm Andrew.</div>
          <div className="subtitle hero-position hero-subtitle has-text-light-orange">
            Software Developer
          </div>

          <div className="static-columns hero-contact-icons horizontally-center vertically-center">
            <div className="static-column">
              <a className="contact-icon" href={linkedInUrl} target="_blank">
                <i class="fab fa-linkedin-in contact-icon" />
              </a>
            </div>
            <div className="static-column">
              <a className="contact-icon" href={githubUrl} target="_blank">
                <i class="fab fa-github contact-icon" />
              </a>
            </div>
            <div className="static-column">
              <a className="contact-icon" href={twitterUrl} target="_blank">
                <i class="fab fa-twitter " />
              </a>
            </div>
            <div className="static-column">
              <a className="contact-icon" href={mailToUrl} target="_blank">
                <i class="far fa-envelope contact-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroComponent;