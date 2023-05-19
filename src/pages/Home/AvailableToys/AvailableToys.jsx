import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";

const AvailableToys = () => {

    const [jobs, setJob] = useState([]);
    const [activeTab, setActiveTab] = useState("remote");
  
    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };
    return (
        <div>
        <h1 className="title text-center mt-5 p-5">Available Job's</h1>
        <div className="tab-container text-center">
          <div className="text-center w-100 m-auto">
            <div className="tabs flex justify-center align-center">
              <div
                onClick={() => handleTabClick("remote")}
                className={`tab  tab2 remote ${
                  activeTab == "remote" ? " bg-orange-600 text-black" : ""
                }`}
              >
                Remote
              </div>
              <div
                onClick={() => handleTabClick("offline")}
                className={`tab  tab2 Offline ${
                  activeTab == "offline" ? " bg-orange-600 text-black" : ""
                }`}
              >
                Offline
              </div>
            </div>
          </div>
        </div>
        <div className="jobs-container mt-5 row"></div>
      </div>
    );
};

export default AvailableToys;