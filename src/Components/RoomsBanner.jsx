import React from "react";
import Heading from "./Heading";
import "./Hero.css";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";

const Hero = () => {
  return (
    <>
      <NavBar />
      <section className="roomscon">
        <div className="containers">
          <Heading title="Luxurious Rooms " />
          <Link to="/" className="button-primary">
            return home
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
