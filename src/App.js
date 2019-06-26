import React from "react";
import Hero from "./components/HeroComponent";
import Skills from "./components/SkillsComponent";
import Projects from "./components/ProjectsComponent";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <section className="app">
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </section>
  );
}

export default App;
