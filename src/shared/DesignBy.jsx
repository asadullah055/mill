import React from "react";
import { Link } from "react-router-dom";

const DesignBy = () => {
  return (
    <div className="main-bg">
      <div className="container">
        <p className="py-2 m-0 d-flex justify-content-between ">
          <span className="text-white font-poppins">
            © 2023 M/s New Rafiq Auto Rice Mill All Right Reserved.
          </span>
          <Link
            className="text-white  font-poppins"
            target="_blank"
            to="https://asadullah-portfolio.netlify.app/"
          >
            Design By Asadullah Ahmed
          </Link>
        </p>
      </div>
    </div>
  );
};

export default DesignBy;
