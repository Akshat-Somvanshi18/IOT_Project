import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ShowReport = () => {
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [update_time, setUpdate_time] = useState("");
  const [create_time, setCreate_time] = useState("");
  const [co2ppm, setCo2ppm] = useState("");
  const [coppm, setCoppm] = useState("");
  const [alcoholppm, setAlcoholppm] = useState("");
  const [nh4, setNh4] = useState("");
  const [toluene, setToluene] = useState("");
  const [acetone, setAcetone] = useState("");



  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const a = await axios.get(
      "https://api.thingspeak.com/channels/2218123/feeds.json?results=2"
    );
    console.log(a.data);
    setTemp(a.data.feeds[1].field1);
    setHumidity(a.data.feeds[1].field2);
    setCo2ppm(a.data.feeds[1].field3);
    setCoppm(a.data.feeds[1].field4);
    setAlcoholppm(a.data.feeds[1].field5);
    setNh4(a.data.feeds[1].field6);
    setToluene(a.data.feeds[1].field7);
    setAcetone(a.data.feeds[1].field8);
    setUpdate_time(a.data.channel.updated_at);
    setCreate_time(a.data.channel.created_at);
  };

  return (
    <>
    <div className="d-flex align-items-center justify-content-between shadow nav-report">
      <Link to="/" className="text-decoration-none text-dark p-3"><h5>AtmosTech</h5></Link>
      <Link to="/" className="text-decoration-none text-dark p-3"><h5>Go Back</h5></Link>
    </div>
    <h4 className="text-center pt-5">Created At (API Key) : {create_time.slice(0,10)} | <span className="text-danger ">{create_time.slice(11,19)}</span></h4>
    <h4 className="text-center pt-2">Updated At (API Key) : {update_time.slice(0,10)} | <span className="text-danger ">{update_time.slice(11,19)}</span></h4>
    <section className="d-flex align-items-center justify-content-evenly mt-5 flex-wrap">

      {/* ****************temperature********************* */}
      <div className="card-temp mb-5 d-flex flex-column justify-content-center align-items-center shadow-lg p-4 rounded-5">
        <img src="./images/temp-logo.svg" alt=".." className="report-logo my-5"/>
        <div
          className="progress mb-5"
          role="progressbar"
          aria-label="Success example"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar bg-success" style={{width: `${temp}%`}}>
            {temp}
          </div>
        </div>
        <h4>Temperature Report</h4>
        <h3 className="pt-2 text-success">{temp}&deg;C</h3>
      </div>

      {/* ************************Humidity**************************** */}
      <div className="card-temp mb-5 d-flex flex-column justify-content-center align-items-center p-4 rounded-5 shadow-lg">
        <img src="./images/humidity-logo.svg" alt=".." className="report-logo my-5"/>
        <div
          className="progress mb-5"
          role="progressbar"
          aria-label="Success example"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar bg-success" style={{width: `${humidity}%`}}>
            {humidity}
          </div>
        </div>
        <h4>Humidity Report</h4>
        <h3 className="pt-2 text-success">{humidity}%</h3>
      </div>

      {/* **********************CO2 ppm****************************************** */}
      <div className="card-temp mb-5 d-flex flex-column justify-content-center align-items-center shadow-lg p-4 rounded-5">
        <img src="./images/logo-air.svg" alt=".." className="report-logo my-5"/>
        <div
          className="progress mb-5"
          role="progressbar"
          aria-label="Success example"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar bg-success" style={{width: `${(co2ppm*100)/3000}%`}}>
            {co2ppm}
          </div>
        </div>
        <h4>CO2 ppm Report</h4>
        <h3 className="pt-2 text-success">{co2ppm} ppm</h3>
      </div>

      {/* **************************CO ppm ***************************** */}
      <div className="card-temp mb-5 d-flex flex-column justify-content-center align-items-center shadow-lg p-4 rounded-5">
        <img src="./images/logo-air.svg" alt=".." className="report-logo my-5"/>
        <div
          className="progress mb-5"
          role="progressbar"
          aria-label="Success example"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar bg-success" style={{width: `${(coppm*100)/50000}%`}}>
            {coppm}
          </div>
        </div>
        <h4>CO ppm Report</h4>
        <h3 className="pt-2 text-success">{coppm} ppm</h3>
      </div>

      {/* ***************************Alcohol ppm******************************** */}
      <div className="card-temp mb-5 d-flex flex-column justify-content-center align-items-center shadow-lg p-4 rounded-5">
        <img src="./images/logo-air.svg" alt=".." className="report-logo my-5"/>
        <div
          className="progress mb-5"
          role="progressbar"
          aria-label="Success example"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar bg-success" style={{width: `${(alcoholppm*100)/3000}%`}}>
            {alcoholppm}
          </div>
        </div>
        <h4>Alcohol ppm Report</h4>
        <h3 className="pt-2 text-success">{alcoholppm} ppm</h3>
      </div>
      
      {/* ****************************NH4 ppm************************************ */}
      <div className="card-temp mb-5 d-flex flex-column justify-content-center align-items-center shadow-lg p-4 rounded-5">
        <img src="./images/logo-air.svg" alt=".." className="report-logo my-5"/>
        <div
          className="progress mb-5"
          role="progressbar"
          aria-label="Success example"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar bg-success" style={{width: `${(nh4*100)/3000}%`}}>
            {nh4}
          </div>
        </div>
        <h4>NH4 ppm Report</h4>
        <h3 className="pt-2 text-success">{nh4} ppm</h3>
      </div>

      {/* *****************************Toluene************************************ */}
      <div className="card-temp mb-5 d-flex flex-column justify-content-center align-items-center shadow-lg p-4 rounded-5">
        <img src="./images/logo-air.svg" alt=".." className="report-logo my-5"/>
        <div
          className="progress mb-5"
          role="progressbar"
          aria-label="Success example"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar bg-success" style={{width: `${(toluene*100)/3000}%`}}>
            {toluene}
          </div>
        </div>
        <h4>Toluene ppm Report</h4>
        <h3 className="pt-2 text-success">{toluene} ppm</h3>
      </div>

      {/* ****************************Acetone********************************* */}
      <div className="card-temp mb-5 d-flex flex-column justify-content-center align-items-center shadow-lg p-4 rounded-5">
        <img src="./images/logo-air.svg" alt=".." className="report-logo my-5"/>
        <div
          className="progress mb-5"
          role="progressbar"
          aria-label="Success example"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div className="progress-bar bg-success" style={{width: `${(acetone*100)/3000}%`}}>
            {acetone}
          </div>
        </div>
        <h4>Acetone ppm Report</h4>
        <h3 className="pt-2 text-success">{acetone} ppm</h3>
      </div>
      </section>
    </>
  );
};

export default ShowReport;
