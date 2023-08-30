import React from "react";
import "animate.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import c1 from "../../images/re.webp";
import w1 from "../../images/whoweare.png";
import c2 from "../../images/train2.webp";
import c3 from "../../images/con2.webp";
import c4 from "../../images/com3.webp";
import Hero from "../Hero/Hero";
import "../Style/style.css";
import Navigation from "../Navigation/Navigation";

export default function Home() {
  return (
    <div>
      <Hero></Hero>

      {/* home who we are  */}
      <div className="container my-5 py-5 ">
        <h3 className="fw-bold text-center border-bottom pb-3 text-theme-dark animate__animated animate__lightSpeedInLeft">
          WHO WE ARE
        </h3>
        <div className="w-100 d-flex ">
          <div className="w-50 p-5 mx-auto">
            <img src={w1} alt="" className="w-75 mx-auto mx-auto" />
          </div>
          <div className="w-50 p-5 my-auto">
            <h3 className="fs-4 fw-bold ">
              The Research Alliance Network (RAN)
            </h3>
            <p>
              RAN is a social enterprise aiming to develop human resources and
              undertake research to constructively and positively transform
              people’s lives. We are an ethical and responsible organisation.
              All profits we make we invest in community development.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* what we do  */}

      <div className="container py-md-5">
        <h3 className="text-center text-theme-dark fw-bold pb-3 border-bottom">
          WHAT WE DO
        </h3>
        <Row className="gap-5 my-5 d-flex justify-between">
          <Card className="p-0 col-3 shadow-lg" style={{ width: "18rem" }}>
            <img
              width="100%"
              hight="100%"
              alt="icon"
              className="my-auto"
              src={c1}
            />

            <Button
              className="w-100 mt-4 py-2 fw-bold rounded-0"
              variant="primary"
            >
              Research
            </Button>
          </Card>
          <Card className="col-3  p-0 shadow-lg" style={{ width: "18rem" }}>
            <img
              width="100%"
              hight="300px"
              alt="icon"
              className="my-auto"
              src={c2}
            />

            <Button
              className="w-100 mt-auto rounded-0 fw-bold  p-2"
              variant="primary"
            >
              Training
            </Button>
          </Card>
          <Card className="p-0 col-3  shadow-lg" style={{ width: "18rem" }}>
            <img
              width="100%"
              hight="100%"
              alt="icon"
              className="my-auto"
              src={c3}
            />

            <Button className="w-100 mt-4 py-2 fw-bold rounded-0">
              Consultancy
            </Button>
          </Card>
          <Card className="p-0 col-3  shadow-lg" style={{ width: "18rem" }}>
            <img
              width="100%"
              hight="100%"
              className="my-auto"
              alt="icon"
              src={c4}
            />

            <Button className="w-100 mt-4 py-2 fw-bold rounded-0">
              Community development
            </Button>
          </Card>
        </Row>
      </div>
    </div>
  );
}
