import React from "react";
import AboutUs from "../about/AboutUs";
import ContactUs from "../contact/ContactUs";
import Login from "../login/Login";

function Home() {
  return (
    <div className="home">
      <div className="title">RICH OFF LOCKS</div>
      <div className="logo"> LOGO IDEA </div>
      <div className="navigationBar">
        <AboutUs />
        <Login />
        <ContactUs />
      </div>
    </div>
  );
}

export default Home;
