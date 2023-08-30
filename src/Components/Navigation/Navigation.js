import React from "react";
import Nav from "react-bootstrap/Nav";
import "./Navigation.css";
import logo from "../../images/Navbar/logoranr.png";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";

export default function Navigation() {
  return (
    <>
      <div className="d-flex  bg-theme">
        <div className="container d-flex">
          <span className="text-light py-1">
            <LabelImportantIcon /> support.ran@gmail.com
          </span>
          <span className="text-light ms-auto py-1">
            <WifiCalling3Icon /> +8801799666555
          </span>
        </div>
      </div>

      <Nav className="bg-nav  my-auto sticky-top shadow-lg" activeKey="/home">
        <div className="container d-flex">
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
              href="/whoweare"
              eventKey="link-2"
              className="text-theme my-auto "
            >
              WHO WE ARE
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className=" d-flex">
            <Nav.Link href="/whatwedo" className="text-theme my-auto " id="wed">
              WHAT WE DO
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className=" d-flex">
            <Nav.Link
              href="howweworks"
              eventKey="link-1"
              className="text-theme my-auto "
            >
              HOW WE WORKS
            </Nav.Link>
          </Nav.Item>

          {/*<Nav.Item className=' d-flex'>
          <Nav.Link eventKey="" className='text-light my-auto'>
            Downlaod
          </Nav.Link>
        </Nav.Item> */}
          <Nav.Item className=" d-flex">
            <Nav.Link href="/aboutran" className="text-theme my-auto ">
              ABOUT RAN
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className=" d-flex">
            <Nav.Link href="/contactus" className="text-theme my-auto ">
              CONTACT
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="ms-auto d-flex">
            <Nav.Link href="/login" className="text-theme my-auto">
              LogIn
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="d-flex">
            <Nav.Link href="/signup" className="text-theme my-auto">
              <button className="btn btn-outline-theme text-theme py-auto">
                SignIn
              </button>
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    </>
  );
}
