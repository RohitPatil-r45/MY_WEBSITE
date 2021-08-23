import React, { useState } from "react";
import Helmet from "react-helmet";
import Tilt from "react-parallax-tilt";

import { GiWildfires, GiGamepad } from "react-icons/gi";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";

const Games = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <section className="pos">
      <Helmet>
        <title>Games | Rohit Patil</title>
        <link rel="icon" href="./images/R3.ico" />
        <meta name="description" content="Games Page, game account"></meta>
      </Helmet>
      <div className="slider">
        <h1>
          <GiGamepad className="gamepad" />
          &nbsp; Welcome To Super Fission Gaming &nbsp;
          <GiWildfires className="wildfires" />
        </h1>
      </div>
      <div className="App">
        {toggle ? (
          <div className="gyro">
            <h1>Gyroscope</h1>
            <button className="toggle-btn" onClick={() => setToggle(!toggle)}>
              <BsToggleOn />
            </button>
          </div>
        ) : (
          <div className="gyro">
            <h1>Gyroscope</h1>
            <button className="toggle-btn" onClick={() => setToggle(!toggle)}>
              <BsToggleOff />
            </button>
          </div>
        )}
      </div>
      <div className="games-container">
        <Tilt gyroscope={toggle}>
          <div className="game-box">
            <img src="./images/CR.jpg" alt="Clash Royale" />
            <h1>Clash Royale</h1>
            <h3>Game Name : Rohit</h3>
            <h2>Game Id : #2Q9YUU08</h2>
          </div>
        </Tilt>
        <Tilt gyroscope={toggle}>
          <div className="game-box">
            <img src="./images/BGMI.png" alt="BGMI" />
            <h1>BGMI</h1>
            <h3>Game Name : HIT๛彡OGGY彡</h3>
            <h2>Game Id : 540130594</h2>
          </div>
        </Tilt>
      </div>
    </section>
  );
};

export default Games;
