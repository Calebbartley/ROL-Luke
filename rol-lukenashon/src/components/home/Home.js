import React from "react";
import AboutUs from "../about/AboutUs";
import ContactUs from "../contact/ContactUs";
import Login from "../login/Login";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <div className="Title">RICH OFF LOCKS</div>
      <div className="Logo"> LOGO IDEA </div>
      <div className="NavigationBar">
        <AboutUs />
        <Login />
        <ContactUs />
      </div>
    </div>
  );
}

export default Home;
