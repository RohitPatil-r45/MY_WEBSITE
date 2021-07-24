import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import { Link } from "react-router-dom";
// import icons from "./nameLogo.png";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav-header show-nav-header">
        <img src="./images/nameLogo.png" alt="Super Fission" className="Icon" />
        <button className="toggle-btn" onClick={toggleLinks}>
          <FaBars className="toggle-icon" />
        </button>
      </div>
      <div className="links-container" ref={linksContainerRef}>
        <ul className="links" ref={linksRef}>
          {links.map((links) => {
            const { id, url, text } = links;
            return (
              <li key={id}>
                <Link to={url} className="Link">
                  <h1>{text}</h1>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="social-links-container">
        <ul className="social-links">
          {social.map((link) => {
            const { id, url, icon } = link;
            return (
              <li key={id}>
                <a href={url} target="_blank" rel="noreferrer">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
