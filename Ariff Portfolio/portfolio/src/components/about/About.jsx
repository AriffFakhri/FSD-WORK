import React from "react";
import "./about.css";
import ME from "../../assets/aboutimage.jpeg";
import { FaAward } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { PiFolderSimple } from "react-icons/pi";

const About = () => {
  return (
    <section id="about">
      About
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container ">
        <div className="about_me">
          <div className="about_me-image">
          <img src={ME} alt="about image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about_card">
            <LuUsers className="about_icon" />
              <h5>Clients</h5>
              <small>0+ Clients</small>
            </article>
            <article className="about_card">
              <PiFolderSimple className="about_icon" />
              <h5>Projects</h5>
              <small>0+ Completed Projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea illo rem quos expedita 
            sapiente minus facilis illum voluptatum, qui dolor itaque repudiandae nulla, ullam fuga magnam doloribus, eligendi facere velit?</p>
            <a href="#contact" className="btn btn-primary"> Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
