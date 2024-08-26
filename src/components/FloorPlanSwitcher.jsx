import React from "react";
import Logo from "../assets/logo.png";
const FloorPlanSwitcher = ({ currentPlan, setCurrentPlan }) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-16 h-16" />
        <h1 className="text-2xl font-bold text-white">
          Aeropuerto Internacional de Puerto Vallarta
        </h1>
      </div>
      <div className="flex justify-center my-4 text-nowrap whitespace-nowrap">
        <button
          className={`px-4 py-2 mx-2 max-h-10 ${
            currentPlan === "alta"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setCurrentPlan("alta")}
        >
          Planta Alta
        </button>
        <button
          className={`px-4 py-2 mx-2 max-h-10 ${
            currentPlan === "baja"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
          onClick={() => setCurrentPlan("baja")}
        >
          Planta Baja
        </button>
      </div>
    </div>
  );
};

export default FloorPlanSwitcher;
