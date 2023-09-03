/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./Footer.css";
import logo from "../../images/Navbar/logoranv.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Footer = () => {
  return (
    <>
      <div class="bg-dark mt-5">
        <div class="pt-5 container-fluid text-center text-lg-start text-white">
          <div class="container-fluid py-4 ">
            <section class="">
              <div class="row">
                <div class="col-lg-2 col-md-6  mb-md-0 text-center">
                  <img
                    src={logo}
                    width=""
                    height="130px"
                    alt=""
                    className="rounded-3 my-auto img-displaced"
                  />
                  <div className="pt-4 d-flex justify-content-center gap-4">
                    <a href="https://www.facebook.com/Abdul.Kader.Akash.505">
                      <FacebookIcon className="text-light fs-2" />
                    </a>
                    <a href="https://www.facebook.com/Abdul.Kader.Akash.505">
                      <InstagramIcon className="text-light fs-2" />
                    </a>
                    <a href="https://www.facebook.com/Abdul.Kader.Akash.505">
                      <WhatsAppIcon className="text-light fs-2" />
                    </a>
                  </div>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0 text-center">
                  <h5 class=" text-start pb-3 border-bottom">Who we are</h5>

                  <ul class="list-unstyled mb-0 text-start pt-3">
                    <li className="pb-2">
                      <a href="#!" class=" text-light text-decoration-none">
                        Our Approach
                      </a>
                    </li>
                    <li className="pb-2">
                      <a href="#!" class="text-light text-decoration-none">
                        Our Team
                      </a>
                    </li>
                    <li className="pb-2">
                      <a href="#!" class="text-light text-decoration-none">
                        Our Partners
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0 text-start">
                  <h5 class="text- pb-3 border-bottom">What we do</h5>

                  <ul class="list-unstyled mb-0 text-start pt-3">
                    <li className="pb-2">
                      <a href="#!" class=" text-light text-decoration-none">
                        Our goals
                      </a>
                    </li>
                    <li className="pb-2">
                      <a href="#!" class="text-light text-decoration-none">
                        Our Research
                      </a>
                    </li>
                    <li className="pb-2">
                      <a href="#!" class="text-light text-decoration-none">
                        Training
                      </a>
                    </li>
                    <li className="pb-2">
                      <a href="#!" class="text-light text-decoration-none">
                        Consultancy
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0 text-start">
                  <h5 class="text- border-bottom pb-3">What you can do</h5>

                  <ul class="list-unstyled mb-0 text-start pt-3">
                    <li className="pb-2">
                      <a href="#!" class=" text-light text-decoration-none">
                        Members s
                      </a>
                    </li>
                    <li className="pb-2">
                      <a href="#!" class="text-light text-decoration-none">
                        Volunteers
                      </a>
                    </li>
                    <li className="pb-2">
                      <a href="#!" class="text-light text-decoration-none">
                        Partner with us
                      </a>
                    </li>
                    <li className="pb-2">
                      <a href="#!" class="text-light text-decoration-none">
                        Ways to donate
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0 text-start">
                  <h5 class="text- pb-3 border-bottom ">
                    What we have published
                  </h5>

                  <ul class="list-unstyled mb-0 text-start pt-3">
                    <li className="pb-2">
                      <a href="#!" class=" text-light text-decoration-none">
                        Reports
                      </a>
                    </li>
                    <li className="pb-2">
                      <a href="#!" class="text-light text-decoration-none">
                        Stories of Impact
                      </a>
                    </li>
                    <li className="pb-2">
                      <a href="#!" class="text-light text-decoration-none">
                        Blogs
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-2 col-md-6 mb-4 mb-md-0 text-start">
                  <h5 class="text- pb-3 border-bottom ">What is happening</h5>

                  <ul class="list-unstyled mb-0 text-start pt-3">
                    <li className="pb-2">
                      <a href="#!" class=" text-light text-decoration-none">
                        News
                      </a>
                    </li>
                    <li className="pb-2">
                      <a href="#!" class="text-light text-decoration-none">
                        Events
                      </a>
                    </li>
                    <li className="pb-2">
                      <a href="#!" class="text-light text-decoration-none">
                        Knowledge café
                      </a>
                    </li>
                    <li className="pb-2">
                      <a href="#!" class="text-light text-decoration-none">
                        Seminar and conferences
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr class="mb-4" />
            <h6 className="pb-3 bg-dark text-center text-light mb-0">
              <small className="text-center">
                {" "}
                &copy; All rights reserved by{" "}
                <span className="crimson">RAN</span>
              </small>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
