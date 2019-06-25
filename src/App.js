import React from "react";
import Hero from "./components/HeroComponent";
import Skills from "./components/SkillsComponent";
import Projects from "./components/ProjectsComponent";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="app">
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </section>
  );
}

export default App;
