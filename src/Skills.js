import React from "react";
import images from "./images";

function Skills() {
  return (
    <section id="skills">
      <div className="content-wrapper">
        <h2>Skills</h2>
        <div className="move-list">
          <div class="skill-list">
            <i class="fa-brands fa-chrome"></i>
            <h3>Chrome Dev Tools</h3>
          </div>
          <div class="skill-list">
            <i class="fa-brands fa-html5"></i>
            <h3>HTML</h3>
          </div>
          <div class="skill-list">
            <i class="fa-brands fa-css3-alt"></i>
            <h3>CSS</h3>
          </div>
          <div class="skill-list">
            <i class="fa-brands fa-sass"></i>
            <h3>SCSS</h3>
          </div>
          <div class="skill-list">
            <i class="fa-brands fa-square-js"></i>
            <h3>JavaScript</h3>
          </div>
          <div class="skill-list">
            <i class="fa-brands fa-git-alt"></i>
            <h3>Git</h3>
          </div>
          <div class="skill-list">
            <i class="fa-brands fa-react"></i>
            <h3>React.js</h3>
          </div>
          <div class="skill-list">
            <i class="fa-brands fa-github"></i>
            <h3>Github</h3>
          </div>
          <div class="skill-list">
            <i class="fa-brands">
              <img src={images.vscode} alt="vscode" />
            </i>
            <h3>VS Code</h3>
          </div>
          <div class="skill-list">
            <i class="fa-brands fa-figma"></i>
            <h3>Figma</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
