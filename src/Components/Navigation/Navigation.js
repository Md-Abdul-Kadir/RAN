/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import "./Navigation.css";
import logo from "../../images/Navbar/logoranr.png";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import { Diversity1Sharp } from "@mui/icons-material";

export default function Navigation() {
  const [whoweare, setWhoweare] = useState(false);
  const [whowedo, setWhowedo] = useState(false);
  const [whatyoucantdo, setwhatyoucantdo] = useState(false);
  const [whatwepublish, setwhatwepublish] = useState(false);
  const [whatishappening, setwhatishappening] = useState(false);
  return (
    <>
      <div className="d-flex  bg-theme">
        <div className=" text-updat d-flex">
          {/* <span className="text-light py-1">
            <LabelImportantIcon /> support.ran@gmail.com
          </span>
          <span className="text-light ms-auto py-1">
            <WifiCalling3Icon /> +8801799666555
          </span> */}
          <p className="text-light my-auto py-2 move">
            The undersigned is directed to convey the sanction of the
            Governments of the Bangladesh for the nine officials listed below to
            take part in the learning visit on Shock Responsive Social
            Protection in Dominican Republic from 26 June 2023 to 30 June 2023.
          </p>
        </div>
      </div>

      <Nav className="bg-nav  my-auto sticky-top shadow-lg" activeKey="/home">
        <div className="px-5 d-flex mx-auto">
          <Nav.Item className=" d-flex">
            <Nav.Link
              href="/home"
              className="me-5 my-auto brand-name text-theme "
            >
              {" "}
              <img
                src={logo}
                width="240px"
                height="105px"
                alt=""
                className="rounded-3 my-auto img-displaced"
              />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="d-flex text-theme">
            <Nav.Link
              href="/home"
              eventKey="link-2"
              className="text-theme my-auto text-hover"
            >
              HOME
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="d-flex text-theme position-relative">
            <Nav.Link
              onClick={() => {
                setwhatyoucantdo(false);
                setwhatwepublish(false);
                setwhatishappening(false);
                setWhowedo(false);
                setWhoweare((prevs) => {
                  return !prevs;
                });
              }}
              // href="/whoweare"
              eventKey="link-2"
              className="text-theme my-auto text-hover"
            >
              WHO WE ARE
            </Nav.Link>
            {whoweare && (
              <div className="position-absolute start-0 top-100">
                <div className="list-style-none w-220px d-flex flex-column">
                  <div className="nav-drop  py-4 w-100 d-flex ">
                    <a
                      href="/whoweare"
                      className="text-decoration-none text-light ps-5"
                    >
                      Our Approach
                    </a>
                  </div>
                  <div className="nav-drop w-100 d-flex py-3 ">
                    <a
                      hhref="/whoweare"
                      className="text-decoration-none text-light ps-5 
                      "
                    >
                      Our Team
                    </a>
                  </div>
                  <div className="nav-drop w-100 d-flex py-3 ">
                    <a
                      href="/whoweare"
                      className="text-decoration-none text-light ps-5"
                    >
                      Our Partners
                    </a>
                  </div>
                </div>
              </div>
            )}
          </Nav.Item>
          <Nav.Item className=" d-flex text-theme position-relative">
            <Nav.Link
              onClick={() => {
                setWhoweare(false);
                setwhatyoucantdo(false);
                setwhatwepublish(false);
                setwhatishappening(false);
                setWhowedo((prevs) => {
                  return !prevs;
                });
              }}
              // href="/whatwedo"
              className="text-theme my-auto text-hover"
              id="wed"
            >
              WHAT WE DO
            </Nav.Link>
            {whowedo && (
              <div className="position-absolute start-0 top-100">
                <div className="list-style-none">
                  <div className="nav-drop px-5 py-3">
                    <a
                      href="/whoweare"
                      className="text-decoration-none text-light "
                    >
                      Our goals
                    </a>
                  </div>
                  <div className="nav-drop px-5 py-3">
                    <a
                      hhref="/whoweare"
                      className="text-decoration-none text-light "
                    >
                      Research
                    </a>
                  </div>
                  <div className="nav-drop px-5 py-3">
                    <a
                      href="/whoweare"
                      className="text-decoration-none text-light "
                    >
                      Training
                    </a>
                  </div>
                  <div className="nav-drop px-5 py-3">
                    <a
                      href="/whoweare"
                      className="text-decoration-none text-light "
                    >
                      Consultancy
                    </a>
                  </div>
                </div>
              </div>
            )}
          </Nav.Item>
          <Nav.Item className=" d-flex position-relative">
            <Nav.Link
              onClick={() => {
                setwhatwepublish(false);
                setwhatishappening(false);
                setWhowedo(false);
                setWhoweare(false);
                setwhatyoucantdo((prevs) => {
                  return !prevs;
                });
              }}
              //href="/howweworks"
              eventKey="link-1"
              className="text-theme my-auto text-uppercase text-hover"
            >
              What you can do
            </Nav.Link>

            {whatyoucantdo && (
              <div className="position-absolute start-0 top-100">
                <div className="list-style-none w-220px">
                  <div className="nav-drop mx-auto py-3 d-flex">
                    <a
                      href="/whoweare"
                      className="text-decoration-none ps-5 text-light "
                    >
                      Members s
                    </a>
                  </div>
                  <div className="nav-drop px-5 py-3">
                    <a
                      hhref="/whoweare"
                      className="text-decoration-none text-light "
                    >
                      Volunteers
                    </a>
                  </div>
                  <div className="nav-drop py-3 d-flex">
                    <a
                      href="/whoweare"
                      className="text-decoration-none text-light ps-5"
                    >
                      Partner with us
                    </a>
                  </div>
                  <div className="nav-drop py-3 d-flex">
                    <a
                      href="/whoweare"
                      className="text-decoration-none text-light ps-5"
                    >
                      Ways to donate
                    </a>
                  </div>
                </div>
              </div>
            )}
          </Nav.Item>
          <Nav.Item className=" d-flex position-relative">
            <Nav.Link
              onClick={() => {
                setwhatyoucantdo(false);
                setwhatishappening(false);
                setWhowedo(false);
                setWhoweare(false);
                setwhatwepublish((prevs) => {
                  return !prevs;
                });
              }}
              //href="howweworks"
              eventKey="link-1"
              className="text-theme my-auto text-uppercase text-hover"
            >
              What we have published
            </Nav.Link>
            {whatwepublish && (
              <div className="position-absolute start-0 top-100">
                <div className="list-style-none w-220px">
                  <div className="nav-drop mx-auto py-3 d-flex">
                    <a
                      href="/whoweare"
                      className="text-decoration-none ps-5 text-light "
                    >
                      Reports
                    </a>
                  </div>
                  <div className="nav-drop px-5 py-3">
                    <a
                      hhref="/whoweare"
                      className="text-decoration-none text-light "
                    >
                      Stories of Impact
                    </a>
                  </div>
                  <div className="nav-drop py-3 d-flex">
                    <a
                      href="/whoweare"
                      className="text-decoration-none text-light ps-5"
                    >
                      Blogs
                    </a>
                  </div>
                </div>
              </div>
            )}
          </Nav.Item>
          <Nav.Item className=" d-flex position-relative">
            <Nav.Link
              onClick={() => {
                setwhatyoucantdo(false);
                setwhatwepublish(false);
                setWhowedo(false);
                setWhoweare(false);
                setwhatishappening((prevs) => {
                  return !prevs;
                });
              }}
              //href="howweworks"
              eventKey="link-1"
              className="text-theme my-auto text-uppercase text-hover"
            >
              What is happening
            </Nav.Link>
            {whatishappening && (
              <div className="position-absolute start-0 top-100">
                <div className="list-style-none w-250px">
                  <div className="nav-drop mx-auto py-3 d-flex">
                    <a
                      href="/whoweare"
                      className="text-decoration-none ps-5 text-light "
                    >
                      News
                    </a>
                  </div>
                  <div className="nav-drop px-5 py-3">
                    <a
                      hhref="/whoweare"
                      className="text-decoration-none text-light "
                    >
                      Events
                    </a>
                  </div>
                  <div className="nav-drop py-3 d-flex">
                    <a
                      href="/whoweare"
                      className="text-decoration-none text-light ps-5"
                    >
                      Knowledge cafe
                    </a>
                  </div>
                  <div className="nav-drop py-3 d-flex">
                    <a
                      href="/whoweare"
                      className="text-decoration-none text-light ps-5"
                    >
                      Seminar and conferences
                    </a>
                  </div>
                </div>
              </div>
            )}
          </Nav.Item>

          {/*<Nav.Item className=' d-flex'>
          <Nav.Link eventKey="" className='text-light my-auto'>
            Downlaod
          </Nav.Link>
        </Nav.Item> */}
          <Nav.Item className=" d-flex">
            <Nav.Link
              href="/aboutran"
              className="text-theme my-auto text-hover"
            >
              ABOUT RAN
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className=" d-flex">
            <Nav.Link
              href="/contactus"
              className="text-theme my-auto text-hover"
            >
              CONTACT
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="ms-auto d-flex">
            <Nav.Link href="/login" className="text-theme my-auto ">
              LOG IN
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="d-flex">
            <Nav.Link href="/signup" className="text-theme my-auto">
              <button className="btn btn-outline-theme text-theme py-auto rounded-0">
                SIGN UP
              </button>
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    </>
  );
}
