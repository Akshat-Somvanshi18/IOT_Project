import React from "react";

export default function Section2() {
  return (
    <>
      <section className="d-flex align-items-center justify-content-evenly py-5 my-5">
        <div
          className="p-4 border-top border-start border-dark"
          id="service4_div"
        >
          <img src="./images/service4.png" id="service4-img" className="" />
        </div>
        <div className="d-flex flex-column" id="section2-maindiv">
          <h3 className="fw-bolder">Whatsapp Integration</h3>
          <p className="text-break my-2">
            The real-time sensor data can be effortlessly and conveniently
            received through a WhatsApp chatbot, offering users a seamless and
            user-friendly experience.
          </p>
          <div className="d-flex align-items-center my-2">
            <img src="./images/bullet-points.png" className="bullet-points" />
            <h4>Real-Time Results</h4>
          </div>
          <div className="d-flex align-items-center my-2">
            <img src="./images/bullet-points.png" className="bullet-points" />
            <h4>Data-Driven Decisions</h4>
          </div>
          <div className="d-flex align-items-center my-2">
            <img src="./images/bullet-points.png" className="bullet-points" />
            <h4>In-Depth Analytics</h4>
          </div>
        </div>
      </section>
    </>
  );
}
