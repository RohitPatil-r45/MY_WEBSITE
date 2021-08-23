import React, { useState } from "react";
import Helmet from "react-helmet";
import Tilt from "react-parallax-tilt";
// import { games } from "./data";
import { GiWildfires, GiGamepad } from "react-icons/gi";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
// import clash from "./CR.jpg";
// import bgmi from "./BGMI.png";
const Games = () => {
  // const [rotateContent, setRotateContent] = React.useState(false);
  // const rotate = () => {
  //   setRotateContent(!rotateContent);
  // };
  const [toggle, setToggle] = useState("false");
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
            <h1>Gyroscope For Mobile</h1>
            <button className="toggle-btn" onClick={() => setToggle(!toggle)}>
              <BsToggleOff />
            </button>
          </div>
        ) : (
          <div className="gyro">
            <h1>Gyroscope For Mobile</h1>
            <button className="toggle-btn" onClick={() => setToggle(!toggle)}>
              <BsToggleOn />
            </button>
          </div>
        )}
      </div>
      {/* {games.map((game) => {
          const { id, name, url, game_name, game_id } = game;
          return (
            <div key={id} className="game-box">
              <img src={clash} height="100px" width="100px" alt={game_name} />
              <h1>{game_name}</h1>
              <h3>Game Name : {name}</h3>
              <h2>Game Id : {game_id}</h2>
            </div>
          );
        })} */}

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
