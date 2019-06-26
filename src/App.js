import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import AllProjects from "./components/AllProjects";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <section className="app">
        <Route exact path="/portfolio" component={Home} />
        <Route exact path="/portfolio/Projects" component={AllProjects} />
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
