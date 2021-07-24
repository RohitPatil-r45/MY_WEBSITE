import React from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/games",
    text: "games",
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
  },
  {
    id: 4,
    url: "/about",
    text: "about",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com/rohitpatil2345",
    icon: <FaFacebook style={{ color: "#006BEA" }} />,
  },
  {
    id: 2,
    url: "https://www.instagram.com/rohitpatil_2345",
    icon: (
      <FaInstagram
        style={{
          color: "white",
          background:
            "linear-gradient(45deg,#405DE6,#5851DB,#833AB4,#C13584,#E1306C,#FD1D1D)",
        }}
      />
    ),
  },
  {
    id: 3,
    url: "https://www.linkedin.com/in/rohit-patil-a60a3a1b4",
    icon: <FaLinkedin style={{ color: "#0077B5" }} />,
  },
  {
    id: 4,
    url: "https://github.com/RohitPatil-r45",
    icon: <FaGithub style={{ color: "white" }} />,
  },
];

export const games = [
  {
    id: 1,
    game_name: "Clash Royale",
    name: "Rohit",
    game_id: "#2Q9YUU08",

    // url: "https://play-lh.googleusercontent.com/rIvZQ_H3hfmexC8vurmLczLtMNBFtxCEdmb2NwkSPz2ZuJJ5nRPD0HbSJ7YTyFGdADQ=s360",
  },
  {
    id: 2,
    game_name: "BGMI",
    name: "HIT๛彡OGGY彡",
    game_id: "540130594",

    // url: "https://play-lh.googleusercontent.com/jwL7aqLp7v_7owPxf30e41MCggN-ot3MeP3zxbIMVKdiGkUs33jmGW7c7QmYxMFamHSj=s360",
  },
];
