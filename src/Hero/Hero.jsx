import React from "react";
import "./Hero.css";
import myPortfolioImg from "/public/swetaimage.jpeg";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <div className="container">
      {/* Profile Image Section */}
      <div className="image-cont">
        <img src={myPortfolioImg} alt="Sweta" />
      </div>

      {/* Description Section */}
      <div className="desc">
        <h1>Hi I'm Sweta Singh</h1>
        <h1>
          {/* <span>I'm Sweta,</span>{" "} */}
          <span>
            <Typewriter
              words={[
                "a Frontend Developer.",
                "a Backend Developer.",
                "a Fullstack Developer.",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </span>
        </h1>

        {/* CTA Buttons */}
        <div className="paragraph">
          <div className="hero-connect">Connect with me!</div>
          <div className="hero-resume">My Resume</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
