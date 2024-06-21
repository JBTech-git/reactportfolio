import React from "react";
import Contactbar from "../componant/Contactbar";
import Navbar from "../componant/Navbar";

const educationInfo = [
  {
    year: "2016-2018",
    title: "Higher Secondary",
    institute: "Kaliyaganj Parbati Sundari H.S",
  },
  {
    year: "2018-2021",
    title: "BCA",
    institute: "Raiganj University",
  },
  {
    year: "2021-2023",
    title: "MCA",
    institute: "Brainware University",
  },
];

const ExperienceInfo = [
  {
    year: "2023",
    title: "Web Developer",
    institute: "Leelija Web Solution Pvt Ltd.",
  },
  {
    year: "2023",
    title: "Web Developer",
    institute: "Leelija Web Solution Pvt Ltd.",
  },
  {
    year: "2023",
    title: "Web Developer",
    institute: "Leelija Web Solution Pvt Ltd.",
  },
];

export default function Resume() {
  return (
    <section>
      <div className="d-flex justify-content-around m-5 pt-2">
        <Contactbar />
        <div className="inform-div">
          <div className="inform-navbar">
            <h1>resume__</h1>
            <div className="mt-4 row">
              <div className="col-sm-6">
                <h4>Education</h4>
                {educationInfo.map((eduinfo, index) => (
                  <div
                    className="card mb-2 border-0"
                    key={index}
                    style={{
                      width: "18rem",
                      backgroundColor: index % 2 !== 0 ? "#94bbe9" : "#eeaeca",
                    }}
                  >
                    <div className="card-body">
                      <span>{eduinfo.year}</span>
                      <h5 className="card-title">{eduinfo.title}</h5>
                      <p className="card-text">{eduinfo.institute}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-sm-6">
                <h4>Experience</h4>
                {ExperienceInfo.map((expinfo, index) => (
                  <div
                    className="card mb-2 border-0"
                    key={index}
                    style={{
                      width: "18rem",
                      backgroundColor: index % 2 !== 0 ? "#eeaeca" : "#94bbe9",
                    }}
                  >
                    <div className="card-body">
                      <span>{expinfo.year}</span>
                      <h5 className="card-title">{expinfo.title}</h5>
                      <p className="card-text">{expinfo.institute}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-secondary bg-opacity-10 py-5">
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped"
                role="progressbar"
                aria-label="Default striped example"
                style={{width: "40%"}}
                aria-valuenow="40"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="text-center bg-white mb-2 pb-0">
            copy write @ Jayanta Barman
          </div>
        </div>
        <div className="nav-div bg-white rounded">
          <Navbar />
        </div>
      </div>
    </section>
  );
}
