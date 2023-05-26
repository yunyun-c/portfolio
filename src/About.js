import React from "react";
import avatar from "./img/avatar.png";
import AnimationArea from "./AnimationArea";

function About() {
  return (
    <section id="about">
      <div className="content-wrapper">
        <AnimationArea />

        <div className="about-info">
          <div className="avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="description">
            <h1>
              <span>Hello! My name is </span>
              <br />
              YunTing<i class="fa-regular fa-face-smile fa-bounce"></i>
            </h1>
            <h2>I'm a front-end developer based in Taipei & Chicago.</h2>
            <p>
              I'm a front-end developer who loves to cook because both have the
              same goal: to make things look and work great. And always learning
              new things to improve my skills and create amazing designs that
              people will enjoy using.
            </p>
            <p>
              When I'm not working, I like to explore nature and cities, bake
              delicious treats, or spend time with my partner.
            </p>
            <p>
              I'm excited to work with people who share my love of design and
              cooking, can't wait to see what we can create together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
