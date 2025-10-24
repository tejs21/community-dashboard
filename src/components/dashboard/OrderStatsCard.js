import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { dailyChartData } from '@/data/mock';

export function OrderStatsCard() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Order</h3>
          <p className="text-3xl font-extrabold text-gray-900">2,568</p>
          <p className="text-sm text-gray-500">Sales from 1-6 Dec, 2020</p>
          <p className="text-sm text-red-500 font-semibold">↓ 2.1% vs last week</p>
        </div>
        <button className="text-sm text-purple-600 font-medium">View Report</button>
      </div>
      <div style={{ width: '100%', height: 150 }}>
        <ResponsiveContainer>
          <LineChart data={dailyChartData.slice(0, 6)} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
            <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
            <Tooltip />
            <Line type="monotone" dataKey="last8Days" stroke="#818CF8" strokeWidth={2} name="Last 8 days" dot={false} />
            <Line type="monotone" dataKey="lastWeek" stroke="#E5E7EB" strokeWidth={2} name="Last Week" dot={false}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}