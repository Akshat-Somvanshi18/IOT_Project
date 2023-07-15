import React from "react";
import { SiPivotaltracker } from "react-icons/si";
export default function Section1() {
  return (
    <>
      <section
        id="section1"
        className="d-flex flex-column align-items-center p-4"
      >
        <h1 className="m-4 fw-bolder" id="section1-h1">
          Features
        </h1>
        <h2 className="mb-5" id="section1-h2">
          ...Smart solutions for a sustainable future....
        </h2>
        <div className="d-flex flex-wrap align-items-center justify-content-evenly w-100 ">
          <div className="service-div d-flex flex-column align-items-center p-4 border-top border-start border-secondary">
            <img src="./images/service1.png" className="service-img"></img>
            <h3 className="my-2">Real-Time Tracking</h3>
            <p className="text-break text-center text-secondary">
              Get access to real-time tracking of temperature, sound, and
              humidity levels across environments and different locations. See
              results directly on your home page.
            </p>
          </div>
          <div className="service-div d-flex flex-column align-items-center p-4 border border-bottom-0 border-secondary">
            <img src="./images/service2.png" className="service-img"></img>
            <h3 className="my-2">Predictive Insights</h3>
            <p className="text-break text-center text-secondary">
              Using recent trends in climate data, identify patterns and
              leverage our predictive analytics to anticipate future changes and
              make data-driven decisions.
            </p>
          </div>
          <div className="service-div d-flex flex-column align-items-center p-4 border-top border-end border-secondary">
            <img src="./images/service3.png" className="service-img"></img>
            <h3 className="my-2">Driven Decision</h3>
            <p className="text-break text-center text-secondary">
              Once you're armed with the appropriate data points, you can make
              more informed decisions and reduce the rate of error in your
              forecasting.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
