import React from "react";
import "../styles/Hero.scss";

function HeroComponent() {
  return (
    <section className="HeroComponent">
      <div className="hero-container section horizontally-center vertically-center">
        <div className="hero has-text-centered ">
          <div className="subtitle hero-subtitle has-text-light">Hi,</div>
          <div className="title hero-title has-text-light">
            I'm Andrew Patterson.
          </div>
          <div className="subtitle hero-subtitle has-text-light-orange">
            Software Developer
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroComponent;
