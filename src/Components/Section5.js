import React from "react";

export default function Section5() {
  return (
    <>
    {/* FOOTER SECTION */}
      <section
        id="section5"
        className="d-flex flex-column text-light align-items-center"
      >
        <a href="#section-nav" className="w-100"><button className="text-center btn w-100 text-light p-2" id="btn-back-to-top">Back to Top</button></a>
        <h3 className="pt-5">Experience the intelligence of your environment.</h3>
        <section className="d-flex justify-content-evenly p-5 w-100" >

            {/* FOOTER COLUMN 1 */}
            <div className="d-flex flex-column">
                <p className="fw-bolder pb-2">Get to know us</p>
                <a href="/" className="footer-a text-light py-1">(21BIT0004)</a>
                <a href="/" className="footer-a text-light py-1">(21BIT0351)</a>
                <a href="/" className="footer-a text-light py-1">(21BIT0669)</a>
                <a href="/" className="footer-a text-light py-1">(21BIT0740)</a>
                <a href="/" className="footer-a text-light py-1">(21BIT0741)</a>
                <a href="/" className="footer-a text-light py-1">(21BIT0274)</a>
            </div>
            {/* FOOTER COLUMN 2 */}
            <div className="d-flex flex-column">
                <p className="fw-bolder pb-2">Features</p>
                <a href="/" className="footer-a text-light py-1">Real-Time Results</a>
                <a href="/" className="footer-a text-light py-1">Whatsapp Integration</a>
                <a href="/" className="footer-a text-light py-1">Team Collaboration</a>
            </div>
            {/* FOOTER COLUMN 3 */}
            <div className="d-flex flex-column">
                <p className="fw-bolder pb-2">Equipments</p>
                <a href="/" className="footer-a text-light py-1">Software Devlopment</a>
                <a href="/" className="footer-a text-light py-1">Sensors</a>
                <a href="/" className="footer-a text-light py-1">Designing</a>
                <a href="/" className="footer-a text-light py-1">Integrating</a>
            </div>
        </section>
      </section>
    </>
  );
}
