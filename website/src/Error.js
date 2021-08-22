import React from "react";
import { Link } from "react-router-dom";
import errorPage from "./images/error_page.png";
const Error = () => {
  return (
    <section className="pos">
      <div className="error-container">
        <img src={errorPage} alt="Error" className="error-img" />

        <Link to="/">
          <button className="back-btn">Back to Home</button>
        </Link>
      </div>
    </section>
  );
};

export default Error;
