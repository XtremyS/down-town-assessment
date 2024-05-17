import React from "react";
import "./NetworkSection.css";

const NetworkSection: React.FC = () => {
  return (
    <div className="network-section">
      <div className="network-text-section">
        <h2 className="network-main-heading">Our Network</h2>
        <p className="network-description">
          Navigate within our network of healthcare providers
        </p>
        <div className="search-network-btn-container">
          <div>
            <button className="search-network-btn">Search Network</button>
          </div>
          <div>
            {/* ARROW ICON */}
            <svg
              width="16"
              height="11"
              viewBox="0 0 16 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.4032 5.49676C14.9767 5.11394 14.5701 4.75005 14.1652 4.38466C12.6957 3.06049 11.2263 1.73633 9.75679 0.412165C9.22701 -0.0647331 8.63204 -0.128452 8.11552 0.224492C7.51116 0.637173 7.46641 1.36447 8.03542 1.89463C8.67237 2.48901 9.32645 3.06995 9.97832 3.6489C10.2374 3.87789 10.5203 4.08548 10.7921 4.30252L10.7213 4.43046L10.3092 4.43046C7.37618 4.43046 4.44351 4.43045 1.5112 4.43045C1.02119 4.43045 0.642225 4.61713 0.413517 5.02135C0.184811 5.42557 0.244473 5.81286 0.542234 6.1663C0.807401 6.47893 1.18637 6.575 1.61008 6.57451C4.49378 6.57252 7.37766 6.57252 10.2617 6.57451L10.7981 6.57451C10.6639 6.71389 10.5888 6.802 10.502 6.87966C9.68277 7.62139 8.85909 8.35864 8.04149 9.10237C7.6918 9.42046 7.53215 9.79929 7.6918 10.2433C7.83986 10.6585 8.17131 10.8965 8.63867 10.9801C9.02869 11.0503 9.37451 10.9303 9.64244 10.6924C11.5572 8.97443 13.4614 7.24953 15.4032 5.49676Z"
                fill="#484848"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* DOCTOR IMAGE */}
      <div className="doctor-image-container">
        <img
          className="doctor-image"
          src="/NetworkSectionImages/doctorImage.png"
          alt="doctor"
        />
      </div>
    </div>
  );
};

export default NetworkSection;
