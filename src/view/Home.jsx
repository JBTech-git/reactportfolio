import React from "react";
import Navbar from "../componant/Navbar";
import Contactbar from "../componant/Contactbar";

export default function Home() {
  return (
    <section className="home-section">
      <div className="d-flex justify-content-around m-5 pt-5">
        <Contactbar/>
        <div className="inform-div">
          <div className="inform-navbar"></div>
        </div>
        <div className="nav-div bg-white rounded">
          <Navbar />
        </div>
      </div>
    </section>
  );
}
