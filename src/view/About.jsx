import React, { useState } from "react";
import Navbar from "../componant/Navbar";
import Contactbar from "../componant/Contactbar";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

// import ClientCarasole from "./ClientCarasole";

const features = [
  {
    img : "../../public/assets/icon/uiux.png",
    title: "UI/UX Design",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    bgColor: "#F2DCF3",
  },
  {
    img: "../../public/assets/icon/webDevelop.png",
    title: "Web Development",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    bgColor:'#DBEAF3',
  },
  {
    img:"../../public/assets/icon/appDevelop.png",
    title: "App Development",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    bgColor:'#DBEAF3',
  },
  {
    img:"../../public/assets/icon/photography.png",
    title: "Photography",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    bgColor: "#F2DCF3",
  },
];



export default function About() {
 
  return (
    <section>
      <div className="d-flex justify-content-around m-5 pt-2">
        <Contactbar />

        <div className="inform-div">
          <div className="inform-navbar">
            <h1>About</h1>
            <div>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </div>
            <div>
              <h3>What ! Do</h3>
            </div>
            <div>
              <Row xs={1} md={2} className="g-4">
                {features.map((card, idx) => (
                  <Col key={idx}>
                    <Card className="border-0" style={{ backgroundColor: card.bgColor }}>
                      <Card.Body className="d-flex px-2 py-3">
                        <div style={{width:'200px'}}>
                        <Card.Img variant="top" src={card.img} />
                        </div>
                        <div className="ps-2">
                        <Card.Title className="fs-4">{card.title} </Card.Title>
                        <Card.Text>
                          {card.description}
                        </Card.Text>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
          <div className="bg-secondary bg-opacity-10 text-center">

            {/* <ClientCarasole/> */}
          </div>
          <div className="text-center bg-white mb-2 pb-0">
            copy write @ Jayanta Barman
          </div>
        </div>
        <div className="nav-div rounded">
          <Navbar />
        </div>
      </div>
    </section>
  );
}
