import React from "react";

export default function Section3() {
  return (
    <>
      {/* CARAOUSEL FOR FEEDBACK */}
      <section className="py-5 text-light" id="section3">
        <h1 className="fw-bolder text-center mb-5">
          Sensors that make your world smarter
        </h1>

        {/* FEEDBACK CAROUSEL FOR LARGE SCREENS */}
        <div
          id="carouselExample"
          className="carousel carousel-light slide  d-sm-none d-md-block d-none d-sm-block"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
              <div className="cards-wrapper d-flex justify-content-evenly">
                <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  {/* <img
                    src="./images/jurident-logo.png"
                    className="jurident-logo rounded-circle"
                  /> */}
                  <h4 className="text-center">In-Depth Analytics</h4>
                  <p className="text-center pt-3">
                    Gather in-depth analytics on temperature, sound, and
                    humidity levels to unlock valuable insights. Get a
                    comprehensive view of your data and uncover key patterns you
                    may have missed before.
                  </p>
                  <p className="fw-bold pt-3">AtmosTech</p>
                </div>
                <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  {/* <img
                    src="./images/jurident-logo.png"
                    className="jurident-logo rounded-circle"
                  /> */}
                  <h4 className="text-center">Monitor In Real-Time</h4>
                  <p className="text-center pt-3">
                    Never miss a beat. Monitor all your climates in real-time
                    and get up-to-the-second updates on your environment. With
                    EnviroWatch, you can always stay in the loop.
                  </p>
                  <p className="fw-bold pt-3">AtmosTech</p>
                </div>
                <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  {/* <img
                    src="./images/jurident-logo.png"
                    className="jurident-logo rounded-circle"
                  /> */}
                  <h4 className="text-center">Team Collaboration</h4>
                  <p className="text-center pt-3">
                    Work collaboratively with your team to collect, monitor,
                    analyze, and share your data points. Our platform is
                    designed to make team collaboration easier and get everyone
                    on the same page.
                  </p>
                  <p className="fw-bold pt-3">AtmosTech</p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000">
              <div className="cards-wrapper d-flex justify-content-evenly">
                <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  {/* <img
                    src="./images/jurident-logo.png"
                    className="jurident-logo rounded-circle"
                  /> */}
                  <h4 className="text-center">Sensors</h4>
                  <p className="text-center pt-3">
                    The project utilizes sensors to measure and monitor various
                    environmental parameters including temperature, humidity,
                    sound level, and air quality. The data is displayed on a
                    website, with access to the
                    environmental conditions.
                  </p>
                  <p className="fw-bold pt-3">AtmosTech</p>
                </div>
                <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  {/* <img
                    src="./images/jurident-logo.png"
                    className="jurident-logo rounded-circle"
                  /> */}
                  <h4 className="text-center">Whatsapp Integration</h4>
                  <p className="text-center pt-3">
                    The real-time sensor data can be effortlessly and
                    conveniently received through a WhatsApp chatbot, offering
                    users a seamless and user-friendly experience.
                  </p>
                  <p className="fw-bold pt-3">AtmosTech</p>
                </div>
                <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  {/* <img
                    src="./images/jurident-logo.png"
                    className="jurident-logo rounded-circle"
                  /> */}
                  <h4 className="text-center">Real-Time Results</h4>
                  <p className="text-center pt-3">
                    Our technology is designed to provide real-time results so
                    that you have an up-to-date understanding of your
                    environment. Graphics and charts help make the data easier
                    to read and interpret.
                  </p>
                  <p className="fw-bold pt-3">AtmosTech</p>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* FEEDBACK CAROUSEL FOR SMALL SCREENS */}
        <div
          id="carouselExampleSmallScreen"
          className="carousel carousel-light slide  d-none d-sm-block d-md-none"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <div className="cards-wrapper d-flex justify-content-evenly">
                <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  <img
                    src="./images/jurident-logo.png"
                    className="jurident-logo rounded-circle"
                  />
                  <p className="text-center pt-3">
                    Could you take 60 seconds to go to our website and share
                    your happy experiences? We will be forever grateful.Could
                    you take 60 seconds to go to our website and share your
                    happy experiences? We will be forever grateful.
                  </p>
                  <p className="fw-bold pt-3">- JURIDENT</p>
                </div>
                <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  <img
                    src="./images/jurident-logo.png"
                    className="jurident-logo rounded-circle"
                  />
                  <p className="text-center pt-3">
                    Could you take 60 seconds to go to our website and share
                    your happy experiences? We will be forever grateful.Could
                    you take 60 seconds to go to our website and share your
                    happy experiences? We will be forever grateful.
                  </p>
                  <p className="fw-bold pt-3">- JURIDENT</p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000">
              <div className="cards-wrapper d-flex justify-content-evenly">
                <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  <img
                    src="./images/jurident-logo.png"
                    className="jurident-logo rounded-circle"
                  />
                  <p className="text-center pt-3">
                    Could you take 60 seconds to go to our website and share
                    your happy experiences? We will be forever grateful.Could
                    you take 60 seconds to go to our website and share your
                    happy experiences? We will be forever grateful.
                  </p>
                  <p className="fw-bold pt-3">- JURIDENT</p>
                </div>
                <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  <img
                    src="./images/jurident-logo.png"
                    className="jurident-logo rounded-circle"
                  />
                  <p className="text-center pt-3">
                    Could you take 60 seconds to go to our website and share
                    your happy experiences? We will be forever grateful.Could
                    you take 60 seconds to go to our website and share your
                    happy experiences? We will be forever grateful.
                  </p>
                  <p className="fw-bold pt-3">- JURIDENT</p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000">
              <div className="cards-wrapper d-flex justify-content-evenly">
                <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  <img
                    src="./images/jurident-logo.png"
                    className="jurident-logo rounded-circle"
                  />
                  <p className="text-center pt-3">
                    Could you take 60 seconds to go to our website and share
                    your happy experiences? We will be forever grateful.Could
                    you take 60 seconds to go to our website and share your
                    happy experiences? We will be forever grateful.
                  </p>
                  <p className="fw-bold pt-3">- JURIDENT</p>
                </div>
                <div className="section3-div  p-4 d-flex flex-column align-items-center">
                  <img
                    src="./images/jurident-logo.png"
                    className="jurident-logo rounded-circle"
                  />
                  <p className="text-center pt-3">
                    Could you take 60 seconds to go to our website and share
                    your happy experiences? We will be forever grateful.Could
                    you take 60 seconds to go to our website and share your
                    happy experiences? We will be forever grateful.
                  </p>
                  <p className="fw-bold pt-3">- JURIDENT</p>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleSmallScreen"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleSmallScreen"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* FEEDBACK CAROUSEL FOR EXTRA SMALL SCREENS */}
        <div
          id="carouselExampleXSmallScreen"
          className="carousel carousel-light slide d-block d-sm-none"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <div className="section3-div  p-4 d-flex flex-column align-items-center">
                <img
                  src="./images/jurident-logo.png"
                  className="jurident-logo rounded-circle"
                />
                <p className="text-center pt-3">
                  Could you take 60 seconds to go to our website and share your
                  happy experiences? We will be forever grateful.Could you take
                  60 seconds to go to our website and share your happy
                  experiences? We will be forever grateful.
                </p>
                <p className="fw-bold pt-3">- JURIDENT</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="section3-div  p-4 d-flex flex-column align-items-center">
                <img
                  src="./images/jurident-logo.png"
                  className="jurident-logo rounded-circle"
                />
                <p className="text-center pt-3">
                  Could you take 60 seconds to go to our website and share your
                  happy experiences? We will be forever grateful.Could you take
                  60 seconds to go to our website and share your happy
                  experiences? We will be forever grateful.
                </p>
                <p className="fw-bold pt-3">- JURIDENT</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="section3-div  p-4 d-flex flex-column align-items-center">
                <img
                  src="./images/jurident-logo.png"
                  className="jurident-logo rounded-circle"
                />
                <p className="text-center pt-3">
                  Could you take 60 seconds to go to our website and share your
                  happy experiences? We will be forever grateful.Could you take
                  60 seconds to go to our website and share your happy
                  experiences? We will be forever grateful.
                </p>
                <p className="fw-bold pt-3">- JURIDENT</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="section3-div  p-4 d-flex flex-column align-items-center">
                <img
                  src="./images/jurident-logo.png"
                  className="jurident-logo rounded-circle"
                />
                <p className="text-center pt-3">
                  Could you take 60 seconds to go to our website and share your
                  happy experiences? We will be forever grateful.Could you take
                  60 seconds to go to our website and share your happy
                  experiences? We will be forever grateful.
                </p>
                <p className="fw-bold pt-3">- JURIDENT</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="section3-div  p-4 d-flex flex-column align-items-center">
                <img
                  src="./images/jurident-logo.png"
                  className="jurident-logo rounded-circle"
                />
                <p className="text-center pt-3">
                  Could you take 60 seconds to go to our website and share your
                  happy experiences? We will be forever grateful.Could you take
                  60 seconds to go to our website and share your happy
                  experiences? We will be forever grateful.
                </p>
                <p className="fw-bold pt-3">- JURIDENT</p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="section3-div  p-4 d-flex flex-column align-items-center">
                <img
                  src="./images/jurident-logo.png"
                  className="jurident-logo rounded-circle"
                />
                <p className="text-center pt-3">
                  Could you take 60 seconds to go to our website and share your
                  happy experiences? We will be forever grateful.Could you take
                  60 seconds to go to our website and share your happy
                  experiences? We will be forever grateful.
                </p>
                <p className="fw-bold pt-3">- JURIDENT</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleXSmallScreen"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleXSmallScreen"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}
