import React from "react";
import w1 from "../../images/wwa.png";
import m1 from "../../images/mission.webp";
import v1 from '../../images/vvv.webp'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import "../Style/style.css";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

export default function Whoweare() {
  return (
    <div>
      {/* bannner */}
      <div className="py-5 text-center Herobanner2 d-flex">
        <div className="my-auto mx-auto">
          <h2 className="fs-2 fw-bold text-theme-dark">Who we are</h2>
          <p className="fs-s">Home / Who we are</p>
        </div>
      </div>

      <div className="my-5 container">
        {/* Who we are */}
        <div className="w-100 my-5 d-flex ">
          <div className="w-50 p-5 mx-auto">
            <img src={w1} alt="" className="w-100 mx-auto" />
          </div>
          <div className="w-50 p-5 my-auto">
            <h3 className="fw-bold">The Research Alliance Network (RAN)</h3>
            <p>
              RAN is a social enterprise aiming to develop human resources and
              undertake research to constructively and positively transform
              people’s lives. We are an ethical and responsible organisation.
              All profits we make we invest in community development.{" "}
            </p>
          </div>
        </div>

        {/* mission */}
        <div className="w-100 my-5 d-flex ">
          <div className="w-50 p-5 my-auto">
            <h3 className="fw-bold">Mission</h3>
            <p>
              RAN aim to engage, enable and empower people to transform people’s
              life constructively and positively.{" "}
            </p>
          </div>
          <div className="w-50 my-auto">
            <img src={m1} alt="" className="w-100 mx-auto" />
          </div>
        </div>

        <div className="p-5">
          <h2 className="fw-3 fw-bold ps-1">Objectives</h2>
          <div className="py-3 px-5">
            <div>
              <DoubleArrowIcon className="me-2 text-theme" />
              To make positive and constructive RAN through human resource
              development.
            </div>
            <div>
              <DoubleArrowIcon className="me-2 text-theme" />
              To promote learning and innovation in the health and social care
              sector in order to improve practice.
            </div>
            <div>
              <DoubleArrowIcon className="me-2 text-theme" />
              To promote and conduct multidisciplinary research on health and
              social care
            </div>
            <div>
              <DoubleArrowIcon className="me-2 text-theme" />
              To impart training to build and enhance the capacity and
              capabilities of people.
            </div>
            <div>
              <DoubleArrowIcon className="me-2 text-theme" />
              To disseminate research findings to influence the development of
              policy and practice.
            </div>
            <div>
              <DoubleArrowIcon className="me-2 text-theme" />
              To support the development of health and social care
              organizations.
            </div>
            <div>
              <DoubleArrowIcon className="me-2 text-theme" />
              To render advice and recommendations in the area of health and
              social care.
            </div>
            <div>
              <DoubleArrowIcon className="me-2 text-theme" />
              To make a positive difference to marginalized and disadvantaged
              people.
            </div>
          </div>
        </div>



        <div className="w-100 my-5 d-flex ">
          <div className="w-50 my-auto p-5">
            <img src={v1} alt="" className="w-100 mx-auto" />
          </div>
          <div className="w-50 p-5 my-auto">
            <h3 className="fw-bold">Values</h3>
            <div className="p-3">
            <div>
              <PlayArrowIcon className="me-2 text-theme" />
              We are committed, dedicated, and passionate in our work.
            </div>
            <div>
              <PlayArrowIcon className="me-2 text-theme" />
              We are curious and creative.
            </div>
            <div>
              <PlayArrowIcon className="me-2 text-theme" />
              We work together collaboratively.
            </div>
            <div>
              <PlayArrowIcon className="me-2 text-theme" />
              We do what we preach.
            </div>
            <div>
              <PlayArrowIcon className="me-2 text-theme" />
              We are honest, transparent, polite and friendly.

            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
