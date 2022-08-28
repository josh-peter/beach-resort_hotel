import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    
    <div className="banner">
        <div className="content">
        <h1>Luxurious Rooms</h1>
      <div />
      <p>Deluxe Rooms At $299</p>
      <Link to="/rooms">
        <button className="btn btn-primary">Our Rooms</button>
      </Link>
        </div>
    </div>
  );
};

export default Banner;
