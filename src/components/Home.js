import React from "react";
import Hero from "./HeroComponent";
import Skills from "./SkillsComponent";
import Projects from "./ProjectsComponent";
import About from "./About";

function Home() {
  return (
    <section className="Home">
      <Hero />
      <Skills />
      <Projects />
      <About />
    </section>
  );
}

export default Home;
