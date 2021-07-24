import React from "react";
import Helmet from "react-helmet";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <section className="pos">
      <Helmet>
        <title>Home | Rohit Patil </title>
        <link rel="icon" href="./images/Rlogo.ico" />
        <meta name="description" content="Home Page"></meta>
      </Helmet>
      <div className="home-container">
        <div className="home-header">
          <div className="home-header-content">
            <span className="typewriter">
              <Typewriter
                options={{
                  strings: ["Hi There!", "Welcome"],
                  autoStart: true,
                  loop: true,
                  pauseFor: 2000,
                }}
              />
            </span>
          </div>
          <div className="home-header-content" style={{ height: "40px" }}>
            <p>I am &nbsp;</p>
            <span className="typewriter2">
              <Typewriter
                options={{
                  strings: [
                    "IT Engineer 💻",
                    "Frontend Developer 📱",
                    "Gamer 🎮",
                    "Cricketer 🏏",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
        </div>
        <div className="home-content">
          <div className="home-img">
            <img src="./images/myphoto.jpeg" alt="Rohit" className="myimg" />
          </div>
          <ul>
            <li>
              <span>Birthday </span>
              <p>: 23/03/2000</p>
            </li>
            <li>
              <span>Phone </span>
              <p>: +91 9082120279</p>
            </li>
            <li>
              <span>Email </span>
              <p>: rohitpatil233000@gmail.com</p>
            </li>

            <li>
              <span>Website </span>
              <p>: https://rohit-patil-23.netlify.app</p>
            </li>
            <li>
              <span>Address </span>
              <p>: Kharghar, Maharashtra, India.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
