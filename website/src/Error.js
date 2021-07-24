import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className="pos">
      <div className="error-container">
        <h1>Error Page</h1>
        <Link to="/">
          <button className="back-btn">Back to Home</button>
        </Link>
      </div>
    </section>
  );
};

export default Error;
