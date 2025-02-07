"use client"

import Image from "next/image";
import { useState } from "react";

const RecommendedCars = ({ cars }: { cars: any[] }) => {
  const [favorites, setFavorites] = useState(new Set());

  const handleFavoriteToggle = (carId: string) => {
    const updatedFavorites = new Set(favorites);
    if (updatedFavorites.has(carId)) {
      updatedFavorites.delete(carId); // Remove from favorites
    } else {
      updatedFavorites.add(carId); // Add to favorites
    }
    setFavorites(updatedFavorites);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <h1 className="text-2xl font-bold text-blue-500 mb-4 sm:mb-0">
          Recommended Cars
        </h1>
        <a className="text-blue-500 hover:underline cursor-pointer">View All</a>
      </div>

      {/* Recommended Cars Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            {/* Car Image */}
            <div className="relative">
              <Image
                src={car.image}
                alt={car.name}
                width={232}
                height={72}
                className="rounded-lg object-cover w-full h-15"
              />
              {/* Favorite Icon */}
              <div
                onClick={() => handleFavoriteToggle(car._id)}
                className="absolute top-2 right-2 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={favorites.has(car._id) ? "red" : "none"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              </div>
            </div>

            {/* Car Details */}
            <div className="mt-4">
              <h4 className="text-lg font-bold text-black">{car.name}</h4>
              <p className="text-sm text-gray-500">{car.type}</p>

              <div className="flex items-center space-x-4 mt-4">
                <span className="text-gray-500 text-sm">{car.gasoline}</span>
                <span className="text-gray-500 text-sm">
                  {car.transmission}
                </span>
                <span className="text-gray-500 text-sm">{car.capacity}</span>
              </div>

              {/* Price & Button */}
              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-lg font-bold text-blue-500">
                    ${car.price}/day
                  </p>
                  {car.discountPrice && (
                    <p className="text-sm text-gray-400 line-through">
                      ${car.discountPrice}/day
                    </p>
                  )}
                </div>
                <button className="bg-blue-500 text-white px-2 py-2 rounded-lg hover:bg-blue-600 transition">
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCars;
