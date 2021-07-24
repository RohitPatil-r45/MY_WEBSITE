import React from "react";
import Helmet from "react-helmet";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
// import resume from "./Rohit_Patil_Resume.pdf";
const About = () => {
  return (
    <section className="pos">
      <Helmet>
        <title>About | Rohit Patil</title>
        <link rel="icon" href="./images/R2.ico" />
        <meta name="description" content="About Page, Myself"></meta>
      </Helmet>
      <div className="about-container">
        <div className="heading">
          <h1 className="head">Skills</h1>
        </div>
        <div className="skill-container">
          <div className="card">
            <FaHtml5 className="html-icons" />
            <h1>HTML</h1>
            <h1>95%</h1>
          </div>
          <div className="card">
            <FaCss3Alt className="css-icons" />
            <h1>CSS</h1>
            <h1>90%</h1>
          </div>
          <div className="card">
            <FaJsSquare className="js-icons" />
            <h1>JavaScript</h1>
            <h1>80%</h1>
          </div>
          <div className="card">
            <FaReact className="react-icons" />
            <h1>React JS</h1>
            <h1>60%</h1>
          </div>
          <div className="card">
            <FaPython className="python-icons" />
            <h1>Python</h1>
            <h1>80%</h1>
          </div>
          <div className="card">
            <FaGitAlt className="git-icons" />
            <h1>Git and Github</h1>
            <h1>60%</h1>
          </div>
        </div>

        <div className="heading">
          <h1 className="head">Education</h1>
        </div>
        <div className="edu-container">
          <div className="edu-card1 edu">
            <h1>"Bachelor of Engineering"</h1>
            <p>Saraswati College Of Engineering, Khargar / Mumbai University</p>
            <h2>72.23%</h2>
          </div>
          <div className="edu-card2 edu">
            <h1>"12th / HSC"</h1>
            <p>S.E.S. Secondary School, Kalamboli / Maharashtra State Board</p>
            <h2>77.08%</h2>
          </div>
          <div className="edu-card3 edu">
            <h1>"10th / SSC"</h1>
            <p>S.E.S. Secondary School, Kalamboli / Maharashtra State Board</p>
            <h2>88.80%</h2>
          </div>
        </div>

        <div className="heading">
          <h1 className="head">Languages</h1>
        </div>
        <div className="lan-container">
          <div className="lang">
            <h2>Marathi :</h2>
            <div className="progress">
              <span className="progress-bar" style={{ width: "100%" }}></span>
            </div>
            <h2>100%</h2>
          </div>
          <div className="lang">
            <h2>Hindi :</h2>
            <div className="progress">
              <span className="progress-bar" style={{ width: "90%" }}></span>
            </div>
            <h2>90%</h2>
          </div>
          <div className="lang">
            <h2>English :</h2>
            <div className="progress">
              <span className="progress-bar" style={{ width: "85%" }}></span>
            </div>
            <h2>85%</h2>
          </div>
        </div>
        <div className="download">
          <a
            className="btn-grad"
            href="./images/ROHIT_PATIL_RESUME.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
