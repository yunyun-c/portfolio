import React from "react";
import images from "./images";

function Projects() {
  return (
    <section id="projects">
      <div className="content-wrapper">
        <h2>Projects</h2>
        <div className="projects-wrapper">
          <div class="project-item">
            <h3>Sticky Note App</h3>
            <a
              href="https://incredible-fairy-9036a9.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={images.stickyNote} alt="Sticky Note App" />
            </a>

            <p class="project-language">
              ES6, JSX, Managing data flow, Manipulate the DOM
            </p>
            <p class="project-description">
              Create an interactive app that will let users create “sticky
              notes” on their computer to keep track of to-do items.
            </p>
            <a
              class="project-link"
              href="https://incredible-fairy-9036a9.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              live page
            </a>
          </div>
          <div class="project-item">
            <h3>TodoApp</h3>
            <a
              href="https://snazzy-rabanadas-c1fa4f.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={images.todoapp} alt="todoapp" />
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
              <img src={images.guessTheWord} alt="guess the word" />
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
              <img src={images.pigGame} alt="pigGame" />
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
              <img src={images.unplugged} alt="Unplugged Retreat Website" />
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
              <img src={images.recipeCard} alt="Recipe Cards" />
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
