import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <section id="section-nav">
        {/* NAVIGATION BAR ON LANDING SCREEN */}
        <nav className="navbar navbar-expand-lg p-0">
          <div className="container-fluid">
            {/* <a className="navbar-brand" href="#">
              <img src="./images/logo.png" id="logo" />
            </a> */}
            <Link to="/" className="text-decoration-none text-light fw-bold pt-2 ps-2">AtmosTech</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center pt-3">
                <li className="nav-item">
                  <Link
                    className="nav-link text-light px-3"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light px-3" href="https://0223c7bb344da0df62.gradio.live/" target="_blank">
                    Wind-Pressure Predictor
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-light px-3" href="https://399a014e9b149aacf1.gradio.live/" target="_blank">
                    Envio-Your-Weather-Companion
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link text-light px-3" href="#">
                    Contact Us
                  </a>
                </li> */}
                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-light"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item " href="#">
                        Blogs
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item " href="#">
                        Partners
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Reviews
                      </a>
                    </li>
                  </ul>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>

        {/* LANDING SCREEN */}
        <div className="m-5">
          <h1 className="mt-5 mx-5 text-bold nav-h1">
            Track Trends & Predict
            <h1 className="nav-h1">Outcomes</h1>
          </h1>
          <p className="text-light w-50 m-5" id="navbar-p">
            EnviroWatch is designed to help you track temperature, sound, and
            humidity levels and use the data to predict weather climate, rain
            percentages, and more. Through easy-to-use graphs and charts, you
            can quickly get an understanding of changes in the envirorment over
            time and have more accurate forecasting of the future.
          </p>
          <div>
            <a href="https://thingspeak.com/channels/2218123" target="_blank">
              <button className="btn-carousel ms-5 my-2 rounded-3 border-0 fw-bold">
                Analyze Graphs
              </button>
            </a>
            <Link to="/show-report">
              <button className="btn-carousel ms-3 my-2 rounded-3 border-0 fw-bold">
                Analyze Results
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
