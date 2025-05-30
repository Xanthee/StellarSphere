import { useState } from "react";
import StarCard from "./StarCard";
import starData from "@/data/stars.json";
import '../Styles/style.css';


export default function StarCarousel({ onBack }) {
  // Manage through dataset (stars.json) 
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = (index) => {
    if (index >= 0 && index < starData.length) {
      setCurrentIndex(index);
    }
  };

  return (
    // BACK BUTTON
    <div className="w-full h-screen flex items-center justify-center relative">
      <button
        onClick={onBack}
        className="absolute top-6 left-6 text-6xl text-white m-10 z-10 transition-transform duration-300 hover:scale-150"
      >
        ←
      </button>

      {/* CAROUSEL CONTENT */}
      <div className="flex items-center gap-8 transition-all duration-700 ease-in-out">
        {starData.map((star, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={star.name}
              onClick={() => goTo(index)}
              className={`transition-all duration-700 cursor-pointer ${
                isActive ? "scale-100" : "scale-75 opacity-60"
              }`}
            >
              <StarCard data={star} isActive={isActive} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
