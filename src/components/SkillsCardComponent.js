import React from "react";
import "../styles/SkillsCard.scss";

function SkillsCardComponent(props) {
  const generateItemMarkeup = (props, field) => {
    if (typeof props[field] === "undefined") {
      return "";
    }

    const itemList = props[field];
    let markup = new Array();

    itemList.forEach(item => {
      markup.push(
        <div className="static-column-10 item text-center" key={item}>
          <div className="grey-text-background">{item}</div>
        </div>
      );
    });

    return markup;
  };

  return (
    <section className="SkillsCardComponent">
      <div className="skills-card-container">
        <div className="card shadowed">
          <div className="card-content">
            <div className="title text-center is-2">{props.Title}</div>
            <div className="content">
              <div className="card-description">
                <p className="text-center">{props.Description}</p>
              </div>

              <div className="card-section">
                <div className="subtitle text-center is-2">Languages</div>
                <div className="item-list horizontally-center">
                  <div className="static-columns">
                    {generateItemMarkeup(props, "Languages")}
                  </div>
                </div>
              </div>

              <div className="card-section">
                <div className="subtitle text-center is-2">Frameworks</div>
                <div className="item-list horizontally-center">
                  <div className="static-columns">
                    {generateItemMarkeup(props, "Frameworks")}
                  </div>
                </div>
              </div>

              <div className="card-section">
                <div className="subtitle text-center is-2">Tools</div>
                <div className="item-list horizontally-center">
                  <div className="static-columns">
                    {generateItemMarkeup(props, "Tools")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsCardComponent;
