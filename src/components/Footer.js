import React from "react";
import "../styles/Footer.scss";

function Footer() {
  return (
    <section className="Footer">
      <div className="footer-container horizontally-center">
        <div className="arrange-contents-vertically text-center">
          <div className=" subtitle is-3">
            Handcrafted with love and care by Andrew Patterson
          </div>

          <div className=" subtitle is-3">Created with React + Bulma</div>

          <div className=" subtitle is-3">
            Get the source on{" "}
            <a href="https://github.com/andrewpat24/portfolio">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
