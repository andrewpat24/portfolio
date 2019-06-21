import React from "react";
import HeroComponent from "./components/HeroComponent";

function App() {
  return (
    <section className="app">
      <HeroComponent />
      <div>
        <div className="columns">
          <div className="column">test</div>
          <div className="column">test</div>
        </div>
      </div>
    </section>
  );
}

export default App;
