import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/services";
// import MyWork from "./MyWork/mywork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Footer/Footer";
import MyWork from "./MyWork/MyWork";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
     
      <MyWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
