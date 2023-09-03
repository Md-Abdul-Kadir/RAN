/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "animate.css";
import Row from "react-bootstrap/Row";
import Hero from "../Hero/Hero";
import "../Style/style.css";
import "./Home.css";
import Gallery from "../Gallery/Gallery";

export default function Home() {
  return (
    <div>
      <Hero></Hero>

      {/* home who we are  */}
      <div className="container my-5 py-5 ">
        <div className="text-center border- border-dark pb-3 text-theme-dark animate__animated animate__lightSpeedInLeft ">
          <h3 className="fw-bold text-dark">WHO WE ARE</h3>
          <p className="text-dark pt-3">
            We connect researchers, institutions, and organizations to
            collaborate, share knowledge, access resources, and advance research
            in specific fields, promoting innovation and the exchange of ideas.
          </p>
        </div>
        <div className="w-100 d-flex ">
          <div className="w-50 pt-5 pe-5 mx-auto">
            <img
              src="/Images/whatweare2.png"
              alt=""
              className="w-100 mx-auto mx-auto"
            />
          </div>
          <div className="w-50 p-5 my-auto bar">
            <h2 className="pb-3 pt-5 ">The Research Alliance Network (RAN)</h2>
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

      <div className="container py-md-5 ">
        <div className="text-center  pb-3 text-theme-dark animate__animated animate__lightSpeedInLeft ">
          <h3 className="fw-bold text-dark">WHAT WE DO</h3>
          <p className="text-dark pt-3">
            We connect researchers, institutions, and organizations to
            collaborate, share knowledge, access resources, and advance research
            in specific fields, promoting innovation and the exchange of ideas.
          </p>
        </div>

        <div className="border-bottom p-5">
          <Row className="gap-5 my-5 d-flex justify-between">
            <div className="p-0 col-12  d-flex">
              <img
                width="100%"
                hight="100%"
                alt="icon"
                className="my-auto col-4"
                src="Images/Home/research.jpg"
              />

              <div className="py-2 px-5 h-100  rounded-0 bar  m-auto border-sevice">
                <h2 className="fw-bolder mt-5">Research</h2>
                <p>
                  We connect researchers, institutions, and organizations to
                  collaborate, share knowledge, access resources, and advance
                  research in specific fields, promoting innovation and the
                  exchange of ideas.
                </p>
              </div>
            </div>
          </Row>
          <Row className="gap-5 my-5 d-flex justify-between">
            <div className="p-0 col-12  d-flex">
              <div className=" px-5  rounded-0  my-auto bar">
                <h2 className="fw-bolder">Training</h2>
                <p>
                  We connect researchers, institutions, and organizations to
                  collaborate, share knowledge, access resources, and advance
                  research in specific fields, promoting innovation and the
                  exchange of ideas.
                </p>
              </div>
              <img
                width="100%"
                hight="100%"
                alt="icon"
                className="my-auto col-4"
                src="Images/Home/training.webp"
              />
            </div>
          </Row>
          <Row className="gap-5 my-5 d-flex justify-between">
            <div className="p-0 col-12  d-flex">
              <img
                width="100%"
                hight="100%"
                alt="icon"
                className="my-auto col-4"
                src="Images/Home/con.jpg"
              />

              <div className="py-2 px-5 h-100 rounded-0  my-auto bar border-sevice">
                <h2 className="fw-bolder pt-4">Consultancy</h2>
                <p>
                  We connect researchers, institutions, and organizations to
                  collaborate, share knowledge, access resources, and advance
                  research in specific fields, promoting innovation and the
                  exchange of ideas.
                </p>
              </div>
            </div>
          </Row>
          <Row className="gap-5 my-5 d-flex justify-between">
            <div className="p-0 col-12  d-flex">
              <div className="py-2 px-5  rounded-0  my-auto bar">
                <h2 className="fw-bolder">Community development</h2>
                <p>
                  We connect researchers, institutions, and organizations to
                  collaborate, share knowledge, access resources, and advance
                  research in specific fields, promoting innovation and the
                  exchange of ideas.
                </p>
              </div>
              <img
                width="100%"
                hight="100%"
                alt="icon"
                className="my-auto col-4"
                src="Images/Home/community.jpg"
              />
            </div>
          </Row>
        </div>
      </div>

      {/* gallery section    */}
      <div className="bar text-center d-flex pb-5 flex-column  container py-4p">
        <h2 className="mx-auto"> Our Gallery</h2>
        <p className="pb-4">
          We connect researchers, institutions, and organizations to
          collaborate, share knowledge, access resources, and advance research
          in specific fields, promoting innovation and the exchange of ideas.
        </p>
        <Gallery />
      </div>

      {/* video section  */}
      <div className="bar text-center d-flex pb-4 flex-column  container py-4p">
        <h2 className="mx-auto"> Our Videos</h2>
        <p>
          We connect researchers, institutions, and organizations to
          collaborate, share knowledge, access resources, and advance research
          in specific fields, promoting innovation and the exchange of ideas.
        </p>
        <div className="container d-flex mx-auto py-4p">
          <div className="w-50">
            <iframe
              width="100%"
              height="355"
              src="https://www.youtube.com/embed/mV0bUQpz468?si=-m1LEsY1V6fFgKnA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="w-50 my-auto ps-5 bar text-start ">
            <h2 className=" pb-3 ">What is research </h2>
            <p>
              We connect researchers, institutions, and organizations to
              collaborate, share knowledge, access resources, and advance
              research in specific fields, promoting innovation and the exchange
              of ideas.
            </p>
            <a href="#" className="text-secondary text-decoration-none">
              <button className="btn btn-danger rounded-0 px-5 py-2">
                Show more
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
