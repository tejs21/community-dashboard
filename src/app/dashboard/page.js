'use client';

import { useState, useEffect } from 'react';
import { MostOrderedCard } from '@/components/dashboard/MostOrderedCard';
import { OrderStatsCard } from '@/components/dashboard/OrderStatsCard';
import { OrderTimeCard } from '@/components/dashboard/OrderTimeCard';
import { RatingsCard } from '@/components/dashboard/RatingsCard';
import { RevenueCard } from '@/components/dashboard/RevenueCard';
import { mostOrderedFood } from '@/data/mock'; 


export default function DashboardPage({ searchTerm }) { 
  const [filteredFood, setFilteredFood] = useState(mostOrderedFood);

  useEffect(() => {
    if (searchTerm === '' || searchTerm === undefined) {
      setFilteredFood(mostOrderedFood);
    } else {
      const filtered = mostOrderedFood.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredFood(filtered);
    }
  }, [searchTerm]);

  return (
    <div className="p-4 sm:p-6 md:p-8 text-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <RevenueCard />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RatingsCard />
            <MostOrderedCard foodItems={filteredFood} />
          </div>
        </div>

        <div className="lg:col-span-1 space-y-6">
          <OrderTimeCard />
          <OrderStatsCard />
        </div>
      </div>
    </div>
  );
}