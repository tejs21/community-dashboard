import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { dailyChartData } from '@/data/mock';

export function RevenueCard() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Revenue</h3>
          <p className="text-3xl font-bold text-gray-900">IDR 7,852,000</p>
          <p className="text-sm text-gray-500">Sales from 1-12 Dec, 2020</p>
          <p className="text-sm text-green-500 font-semibold">↑ 2.1% vs last week</p>
        </div>
        <button className="text-sm text-blue-600 font-semibold">View Report</button>
      </div>
      <div style={{ width: '100%', height: 250 }}>
        <ResponsiveContainer>
          <BarChart data={dailyChartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
            <Tooltip cursor={{ fill: 'rgba(243, 244, 246, 0.5)' }} />
            <Legend iconType="circle" iconSize={8} wrapperStyle={{ paddingTop: '20px' }} />
            <Bar dataKey="last8Days" fill="#818CF8" name="Last 8 days" radius={[4, 4, 0, 0]} />
            <Bar dataKey="lastWeek" fill="#E5E7EB" name="Last Week" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}