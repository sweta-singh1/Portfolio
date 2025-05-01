import React from "react";
import "./MyWork.css";
import MyWork_data from "../assets/MyWork_data/MyWork_data";

function MyWork() {
  return (
    <div id="portfolio" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
      </div>
      <div className="mywork-container">
        {MyWork_data.map((work, index) => {
          return (
            <img
              key={index}
              className="mywork-format"
              src={work.w_img}
              alt=""
            />
          );
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        {/* <img src="" alt="" /> */}
      </div>
    </div>
  );
}

export default MyWork;
