import React from "react";
import "./MedicalService.css";
import { Link } from "react-router-dom";
const MedicalServices: React.FC = () => {
  const MedicalServiceData = [
    {
      text: "Symptom Checker",
      img: "/MedicalServiceSectionImages/femaleDoctor.png",
      link: "/symptom-checker",
    },
    {
      text: "Telehealth",
      img: "/MedicalServiceSectionImages/girlInMobile.png",
      link: "/symptom-checker",
    },
    {
      text: "Facility Search & Booking",
      img: "/MedicalServiceSectionImages/femaleDoctor.png",
      link: "/symptom-checker",
    },
    {
      text: "Medicine Delivery",
      img: "/MedicalServiceSectionImages/deliveryBoy.png",
      link: "/symptom-checker",
    },
  ];

  return (
    <div className="service-section-main-container">
      <h2 className="service-section-main-header">Medical Service</h2>
      <div className="services-container">
        {MedicalServiceData.map((data, index) => (
          <Link to={data.link} key={index} className="service-card-links">
            <div className="service-card">
              <div>
                <img src={data.img} alt={data.text} />
              </div>
              <p className="service-card-text">{data.text}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MedicalServices;
