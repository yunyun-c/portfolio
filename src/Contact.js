import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="content-wrapper">
        <h2 className="contact">Let's Connect!</h2>
        <address>
          <a href="mailto:yunyunlovedesgin@gmail.com">
            yunyunlovedesign@gmail.com
          </a>
        </address>
        <div className="icons">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/yunyun-c"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
