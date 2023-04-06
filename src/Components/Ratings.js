import React from "react";
import Navbar from "./Navbar"; // import the navbar component
import ProfilePic from "../Assets/photo.png";
import { AiFillStar } from "react-icons/ai";

const Ratings = () => {
  return (
    <div>
      <Navbar /> {/* add the navbar component here */}
      <div className="rating-section-wrapper">
        <div className="service-section-top">
          <p className="primary-subheading">RATINGS</p>
          <h1 className="primary-heading">What They Are Saying</h1>
          <p className="primary-text">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
        </div>
        <div className="rating-section-bottom">
          <img className="rating-photo" src={ProfilePic} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
          <div className="ratings-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h2>Altina Salihu</h2>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
