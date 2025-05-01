import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        {/* <img src="/public/girl.jpg" alt="image" /> */}
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src="/public/girl.jpg" alt="image" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Hi, I'm Sweta Singh, a passionate and dedicated BCA-MCA student at
              BBDU with a strong interest in web development and software
              engineering. I specialize in React.js, C# .NET MVC, ASP.NET, and
              Database Management (SQL, DBMS).
            </p>

            <p>
              I am preparing for fresher-level interviews in React.js, ASP.NET,
              and DBMS to kickstart my career in the IT industry. My focus is on
              building modern, user-friendly, and efficient web applications.
            </p>
            <div className="about-skill">
              <div className="about-diff-skill">
                <p>HTML, CSS, JavaScript, React.js</p>

                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-diff-skill">
                <p>C#, ASP.NET, .NET MVC</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-diff-skill">
                <p>SQL, DBMS</p>
                <hr style={{ width: "50%" }} />
              </div>
              <div className="about-diff-skill">
                <p>Problem-Solving, Debugging, Version Control (Git)</p>
                <hr style={{ width: "50%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-achivement">
        <div className="about-diff-achivement">
          <h1>0-1</h1>
          <p>Years of experience</p>
        </div>
        <hr />

        <div className="about-diff-achivement">
          <h1>2+</h1>
          <p>Projects</p>
        </div>
        <hr />
        <div className="about-diff-achivement">
          <h1>150+</h1>
          <p>Clients</p>
        </div>
      </div>
    </div>
  );
};

export default About;
