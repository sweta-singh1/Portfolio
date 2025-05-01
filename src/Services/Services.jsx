import React from "react";
import "./services.css";
import services_data from "../assets/Services_data/services-data";

function Services() {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        {/* <img src="" alt=""/> */}
      </div>

      <div className="services-container">
        {services_data.map((services, index) => {
          return (
            <div key={index} className="services-format">
              <h3>{services.s_no}</h3>
              <h2>{services.s_name}</h2>
              <p>{services.s_desc}</p>
              <div className="services-readmore">
                <p>Read More</p>
                {/* <img src="" alt="" /> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
