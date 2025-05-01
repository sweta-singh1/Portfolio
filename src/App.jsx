import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
// import Services from "./Services/services";
// import MyWork from "./MyWork/mywork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Footer/Footer";
import MyWork from "./MyWork/MyWork";
import Service from "./Service/Service";
// import Services from "./Services/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      {/* <Service /> */}

      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
