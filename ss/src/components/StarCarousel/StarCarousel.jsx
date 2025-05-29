import { useState } from "react";
import StarCard from "./StarCard";
import starData from "@/data/stars.json";

export default function StarCarousel({ onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = (index) => {
    if (index >= 0 && index < starData.length) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center relative">
      <button
        onClick={onBack}
        className="absolute top-6 left-6 bg-white text-black px-4 py-2 rounded-lg z-10"
      >
        ← Back
      </button>

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
