import React from 'react';
import Contactbar from '../componant/Contactbar';
import Navbar from '../componant/Navbar';

export default function Portfolio() {
  return (
    <section>
        <div className="d-flex justify-content-around m-5 pt-5">
        <Contactbar/>
        <div className="inform-div">
          <div className="inform-navbar">
            <h1>Portfolio</h1>
          </div>
        </div>
        <div className="nav-div bg-white rounded">
          <Navbar />
        </div>
      </div>
    </section>
  )
}
