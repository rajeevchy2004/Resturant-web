import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "./NotFound.css"; // Import CSS file for styling

const NotFound = () => {
  return (
    <section className="notFound">
      <div className="container">
        <img src="/notFound.svg" alt="Page Not Found" />
        <h1>LOOKS LIKE YOU'RE LOST</h1>
        <p>We can't seem to find the page you're looking for.</p>
        <Link to="/" className="back-home">
          Back to Home{" "}
          <span>
            <HiOutlineArrowNarrowRight />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
