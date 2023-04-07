import React from "react";
import Navbar from "./Navbar"; 
import Cioppino from "../Assets/cioppino.png";
import Paella from "../Assets/paella.png";
import Ceviche from "../Assets/ceviche.png";

const Services = () => {
    const serviceInfoData = [
      {
        image: Cioppino,
        title: "Cioppino",
        text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum. ",
      },
      {
        image: Paella,
        title: "Paella",
        text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum. ",
      },
      {
        image: Ceviche,
        title: "Ceviche",
        text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum. ",
      },
    ];
    return (
      <div>
        <Navbar /> 
        <div className="service-section-wrapper">
          <div className="service-section-top">
            <p className="primary-subheading">SERVICES</p>
            <h1 className="primary-heading">PRODUCTS</h1>
            <p className="primary-text">
              Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
              elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
            </p>
          </div>
          <div className="service-section-bottom">
            {serviceInfoData.map((data) => (
              <div className="service-section-info" key={data.title}>
                <div className="info-boxes-img-container">
                  <img src={data.image} alt="" />
                </div>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;
