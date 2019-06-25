import React from "react";
import Hero from "./components/HeroComponent";
import Skills from "./components/SkillsComponent";
import Projects from "./components/ProjectsComponent";

function App() {
  return (
    <section className="app">
      <Hero />
      <Skills />
      <Projects />
    </section>
  );
}

export default App;
