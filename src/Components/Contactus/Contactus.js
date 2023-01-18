import React from 'react'
import '../Style/style.css'
import './Contactus.css'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import TimerIcon from '@mui/icons-material/Timer';
import locicon from "../../images/icons/location-pin.png";
import callicon from "../../images/icons/phone-call.png";
import mailicon from "../../images/icons/email.png";
import GoogleMap from '../GoogleMap.js/GoogleMap';


export default function Contactus() {
  return (
    <div>
     <div className='Herobanner text-center d-flex'>
            <div className='my-auto mx-auto'>
            <h2 className="fs-1 fw-bold text-theme-dark">Contact Us</h2>
              <p className="fs-6 ">Home / Contactus</p>
            </div>
            </div>
            <div className="container py-5">

          <div className="row py-5">
            <div className="col-8">
              <h3 className="text-theme-dark text-start fw-bold mb-3">Get In Touch</h3>
              <p>Have a question or feedback for RAN ?</p>
              <form action="" className="text-start">
                <div className="d-flex pt-4">
                  <div className="w-50 pe-lg-4">
                    <p className="text-start mb-1">
                      Name<span className="spanRed">*</span>
                    </p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      className="w-100 h-75 pe-3"
                    />
                  </div>
                  <div className="w-50 px-lg-3">
                    <p className="text-start mb-1">Email</p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      className="w-100 h-75"
                    />
                  </div>
                </div>
                <div className="d-flex pt-5">
                  <div className="w-50 pe-lg-4">
                    <p className="text-start mb-1">
                      Phone<span className="spanRed">*</span>
                    </p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      className="w-100 h-75 pe-3  "
                    />
                  </div>
                  <div className="w-50 px-lg-3">
                    <p className="text-start mb-1">
                      Address<span className="spanRed">*</span>
                    </p>
                    <input
                      type="text"
                      name="contactName"
                      id=""
                      className="w-100 h-75"
                    />
                  </div>
                </div>
                <div className="pt-5 pe-lg-3">
                  <p className="mb-1 text-start">Message</p>
                  <textarea
                    name="ContactArea"
                    className="w-100 h-50"
                    id=""
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>
                <input
                  type="submit"
                  value="SUBMIT"
                  className="border-0 bg-theme-contact text-white px-5 py-3 my-4"
                />
              </form>
            </div>
            <div className="col-4">
              <div className="bg-theme-contact shadow" >
                <div className="d-flex py-4 justify-content-center align-self-center bb">
                
                  <h4 className="ps-3 text-light my-auto"><TimerIcon/>  OPENING HOURS</h4>
                </div>
                <div className='d-flex'>
                  <h1 className="mx-auto p-md-4 text-light fw-bold"> 24\7</h1>
                </div>
              </div>

              {/* contact info */}
              <div className="shadow mt-5">
                <div className="d-flex py-4 justify-content-center align-self-center bbb">
                  <h4 className="ps-3  text-theme-dark my-auto"><PermContactCalendarIcon/>  CONTACT INFO</h4>
                </div>
                <div className="text-theme-dark p-4">
                  <div className="d-flex py-1">
                    <img
                      src={locicon}
                      alt=""
                      height="28px"
                      className="mx-3 my-2"
                    />
                    <p className="ps-2 text-start">
                      Shahjalal University of Science and technology, Sylhet
                    </p>
                  </div>
                  <div className="d-flex py-2">
                    <img src={callicon} alt="" height="25px" className="mx-3" />
                    <p className="ps-2">+88 01791-615539</p>
                  </div>
                  <div className="d-flex py-1">
                    <img src={mailicon} alt="" height="25px" className="mx-3" />
                    <p className="px-2">support.ran@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

        <div className="mapview">
        <GoogleMap></GoogleMap>
      </div>
       
    
    </div>
  )
}
