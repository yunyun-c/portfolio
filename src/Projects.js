import React from "react";

function Projects() {
  return (
    <section id="projects">
      <div className="content-wrapper">
        <h2>Projects</h2>
        <div className="projects-wrapper">
          <div class="project-item">
            <h3>TodoApp</h3>
            <a
              href="https://snazzy-rabanadas-c1fa4f.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./img/todoapp.png" alt="Rogue Pickings" />
            </a>

            <p class="project-language">JavaScript, CSS, React</p>
            <p class="project-description">
              This to-do list app was created with JavaScript, CSS, and React,
              which can easily check the active and complete list.
            </p>
            <a
              class="project-link"
              href="https://snazzy-rabanadas-c1fa4f.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              live page
            </a>
          </div>

          <div class="project-item">
            <h3>Guess the Word</h3>
            <a
              href="https://guess-the-word-project.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./img/guess-the-word.png" alt="" />
            </a>

            <p class="project-language">
              Manipulate the DOM, Vanilla JavaScript
            </p>
            <p class="project-description">
              A fun game to guess random words one letter at a time. If the
              player guesses all the letters correctly, they win!
            </p>
            <a
              class="project-link"
              href="https://guess-the-word-project.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              live page
            </a>
          </div>

          <div class="project-item">
            <h3>Pig Game</h3>
            <a
              href="https://fun-pig-game-project.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./img/pig-game.png" alt="pig game" />
            </a>

            <p class="project-language">HTML, CSS, JavaScript</p>
            <p class="project-description">
              A game to play with a friend. Roll dice to add up the number;
              which player gets to the number 100 or over 100, then that person
              wins!
            </p>
            <a
              class="project-link"
              href="https://fun-pig-game-project.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              live page
            </a>
          </div>

          <div class="project-item">
            <h3>Unplugged Retreat Website</h3>
            <a
              href="https://unplugged-retreat-project.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./img/unplugged-retreat-website.png"
                alt="Unplugged Retreat Website"
              />
            </a>

            <p class="project-language">CSS3, HTML5, Media Queries, Flexbox</p>
            <p class="project-description">
              This 3-page responsive website is from a design comp that adapts
              to mobile, tablet, and desktop screens.
            </p>
            <a
              class="project-link"
              href="https://unplugged-retreat-project.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              live page
            </a>
          </div>

          <div class="project-item">
            <h3>Recipe Card</h3>
            <a
              href="https://recipe-cards-project.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="./img/recipe-cards.png" alt="" />
            </a>

            <p class="project-language">HTML, CSS, VS Code</p>
            <p class="project-description">
              Three expertly styled recipe cards that are styled by CSS.
            </p>
            <a
              class="project-link"
              href="https://recipe-cards-project.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              live page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
