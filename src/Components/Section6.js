import React from "react";

export default function Section6() {
  return (
    <>
      <section
        id="section6"
        className="d-flex align-items-center justify-content-evenly py-5 mb-5"
      >
        {/* PARTNER SECTION WRITTEN PART */}
        <div id="section6-div">
          <h1 className="pt-5 pb-3 text-end">
          The Dream Team Powering <br></br>Our IoT Endeavor
          </h1>
          <p className="text-break pb-4 text-end">
            Our platform measures and displays crucial environmental parameters
            such as temperature, humidity, sound level, and air quality. With
            our state-of-the-art sensors, we ensure accurate and reliable data
            collection, enabling you to make informed decisions based on
            real-time information.
          </p>
          <div className="text-end">
            <button id="btn-read-more" className="border-0 rounded-2 fw-bold">
              Read More
            </button>
          </div>
        </div>

        {/* JURIDENT LOGO PART IN PARTNERS SECTION */}
        <div className="border-end border-bottom p-5 border-dark ">
          <img src="./images/image-s.jpg" className="img-s" />
          <p className="fw-bold text-center">AtmosTech</p>
        </div>
      </section>
    </>
  );
}
