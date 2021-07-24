import React from "react";
import { social } from "./data";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-social-links-container">
        <ul className="footer-social-links">
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
      <div className="footer-text">
        <p>
          &copy;2021 Rohit Patil. All rights reserved. Built with{" "}
          <span>React</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
