'use client';

import { ratingsData } from '@/data/mock';

function RatingCircle({ value, name, color, size, position }) {
  return (
    <div
      className={`absolute ${size} ${position} rounded-full flex flex-col items-center justify-center text-white`}
      style={{ backgroundColor: color }}
    >
      <span className="text-2xl font-bold">{value}%</span>
      <span className="text-sm">{name}</span>
    </div>
  );
}

export function RatingsCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm h-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-1">Your Rating</h3>
      <p className="text-sm text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur</p>
      
      <div className="relative h-48 mt-6">
        <RatingCircle
          value={ratingsData.packaging}
          name="Packaging"
          color="#2563EB" 
          size="w-32 h-32"
          position="top-0 left-4"
        />
        <RatingCircle
          value={ratingsData.hygiene}
          name="Hygiene"
          color="#8B5CF6" 
          size="w-24 h-24"
          position="top-20 right-12"
        />
        <RatingCircle
          value={ratingsData.foodTaste}
          name="Food Taste"
          color="#F97316" 
          size="w-40 h-40"
          position="bottom-0 right-0"
        />
      </div>
    </div>
  );
}