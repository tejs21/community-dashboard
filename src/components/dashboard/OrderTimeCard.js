'use client';

import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from 'recharts';
import { orderTimeData } from '@/data/mock';

const COLORS = {
  Afternoon: '#4F46E5', 
  Evening: '#A5B4FC',   
  Morning: '#C7D2FE',   
};

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;

  return (
    <g>
      <text x={cx} y={cy - 10} dy={8} textAnchor="middle" fill="#111827" className="font-bold text-xl">
        {payload.value.toLocaleString()}
      </text>
      <text x={cx} y={cy + 10} dy={8} textAnchor="middle" fill="#6B7280" className="text-sm">
        orders
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 6} 
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};


export function OrderTimeCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Order Time</h3>
        <button className="text-sm text-purple-600 font-medium">View Report</button>
      </div>
      <p className="text-sm text-gray-500 mb-4">from 1-6 Dec, 2020</p>
      <div style={{ width: '100%', height: 200 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={orderTimeData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              cornerRadius={5}
              onMouseEnter={onPieEnter}
            >
              {orderTimeData.map((entry, index) => (
                <Cell key={`cell-${entry.name}`} fill={COLORS[entry.name]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-around mt-4 text-sm text-gray-600">
        {orderTimeData.map(item => (
          <div key={item.name} className="flex items-center">
            <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: COLORS[item.name] }}></span>
            <span>{item.name} {item.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}