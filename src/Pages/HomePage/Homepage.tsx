import React from "react";
import NotificationSection from "../../Components/NotificationSection/NotificationSection";
import NetworkSection from "../../Components/NetworkSection/NetworkSection";
import MedicalServices from "../../Components/MedicalService/MedicalService";
import InsuranceService from "../../Components/InsuranceService/InsuranceService";

const Homepage: React.FC = () => {
  return (
    <div>
      <NotificationSection />
      <NetworkSection />
      <MedicalServices />
      <InsuranceService />
    </div>
  );
};

export default Homepage;
