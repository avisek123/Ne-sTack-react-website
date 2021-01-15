import React from "react";
import { NavLink } from "react-router-dom";
import web from "./img/about.png";
import Common from "./Common";
const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgSrc={web}
        visit="/contact"
        btnName="contact now"
      />
    </>
  );
};
export default About;
