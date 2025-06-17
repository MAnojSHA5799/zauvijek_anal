"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
  LineChart,
  Line,
  CartesianGrid
} from "recharts";

// KPI stats for display
const processStats = [
  { label: "Processes Name", value: "Metal Melting", color: "#3B82F6" },
  { label: "Electricity Saved", value: "₹5,525", color: "#10B981" },
  { label: "Carbon Reduced", value: "~12.6%", color: "#22C55E" },
  { label: "Total Rejections", value: "Reduced", color: "#EF4444" },
  { label: "Total Savings", value: "₹5,525", color: "#F59E0B" },
];

// Area chart data (30 days)
const costComparisonData = Array.from({ length: 30 }).map((_, i) => ({
  day: i + 1,
  manual: 43875 - i * 100,
  zauvijek: 38350 + i * 60,
}));

// Pie chart data
const efficiencySplitData = [
  { name: "Zauvijek Automated (87.4%)", value: 87.4 },
  { name: "Manual (12.6%)", value: 12.6 },
];

// Extended bar chart data for one year (monthly)
const rejectionData = [
  { category: "Jan", manual: 22, zauvijek: 18 },
  { category: "Feb", manual: 21, zauvijek: 17 },
  { category: "Mar", manual: 23, zauvijek: 16 },
  { category: "Apr", manual: 24, zauvijek: 18 },
  { category: "May", manual: 22, zauvijek: 17 },
  { category: "Jun", manual: 25, zauvijek: 19 },
  { category: "Jul", manual: 23, zauvijek: 18 },
  { category: "Aug", manual: 21, zauvijek: 17 },
  { category: "Sep", manual: 22, zauvijek: 16 },
  { category: "Oct", manual: 24, zauvijek: 18 },
  { category: "Nov", manual: 23, zauvijek: 17 },
  { category: "Dec", manual: 22, zauvijek: 18 },
];

// Combined bar + line chart data (weekly sample)
const monthlyConsumption = [
  { date: "Week 1", production: 700, current: 650 },
  { date: "Week 2", production: 690, current: 640 },
  { date: "Week 3", production: 680, current: 630 },
  { date: "Week 4", production: 670, current: 620 },
  { date: "Week 5", production: 660, current: 610 },
  { date: "Week 6", production: 650, current: 600 },
  { date: "Week 7", production: 640, current: 590 },
  { date: "Week 8", production: 630, current: 580 },
  { date: "Week 9", production: 620, current: 570 },
  { date: "Week 10", production: 610, current: 560 },
  { date: "Week 11", production: 600, current: 550 },
  { date: "Week 12", production: 590, current: 540 },
];
const temperatureEfficiencyData = [
  { tempRange: "600-800°C", efficiency: 75 },
  { tempRange: "800-1000°C", efficiency: 82 },
  { tempRange: "1000-1200°C", efficiency: 88 },
  { tempRange: "1200-1400°C", efficiency: 91 },
  { tempRange: "1400-1600°C", efficiency: 89 },
];

const carbonEmissionData = [
  { month: "Jan", emission: 1300 },
  { month: "Feb", emission: 1250 },
  { month: "Mar", emission: 1180 },
  { month: "Apr", emission: 1150 },
  { month: "May", emission: 1125 },
  { month: "Jun", emission: 1100 },
];

const predictiveROIData = [
  { month: "Jan", roi: 8 },
  { month: "Feb", roi: 9 },
  { month: "Mar", roi: 10 },
  { month: "Apr", roi: 12 },
  { month: "May", roi: 14 },
  { month: "Jun", roi: 15 },
];
const powerFactorData = [
  { week: "W1", pf: 0.88 },
  { week: "W2", pf: 0.89 },
  { week: "W3", pf: 0.91 },
  { week: "W4", pf: 0.93 },
  { week: "W5", pf: 0.94 },
  { week: "W6", pf: 0.95 },
];


const COLORS = ["#6366F1", "#10B981"];

// 🔹 KPI Card
interface StatCardProps {
  label: string;
  value: string;
  color: string;
}

const StatCard = ({ label, value, color }: StatCardProps) => (
  <div className="flex-1 bg-white shadow rounded-lg p-4" style={{ borderTop: `4px solid ${color}` }}>
    <h4 className="text-sm font-semibold text-gray-500">{label}</h4>
    <p className="text-1xl font-bold text-gray-900">{value}</p>
  </div>
);

// 🔷 Dashboard Layout
const MetalMeltingviewpage = () => {
  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen mb-5">
      {/* KPI Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {processStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Area Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-3">
            <h6 className="font-semibold text-gray-700">Electricity Cost Comparison (₹)</h6>
            <a href="#" className="text-indigo-600 text-sm">View Full Report →</a>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={costComparisonData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="manual" stroke="#f97316" fill="#f97316" fillOpacity={0.2} name="Manual Cost" />
              <Area type="monotone" dataKey="zauvijek" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} name="Zauvijek Cost" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-3">
            <h6 className="font-semibold text-gray-700">Electricity Efficiency Split</h6>
            <a href="#" className="text-indigo-600 text-sm">View report →</a>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={efficiencySplitData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label
              >
                {efficiencySplitData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-lg shadow col-span-1 md:col-span-2">
          <div className="flex justify-between items-center mb-3">
            <h6 className="font-semibold text-gray-700">Monthly Rejection Rate (1 Year)</h6>
            <a href="#" className="text-indigo-600 text-sm">See analysis →</a>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={rejectionData}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="manual" fill="#f97316" name="Manual Rejections" />
              <Bar dataKey="zauvijek" fill="#10b981" name="Zauvijek Rejections" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Mixed Bar + Line Chart */}
        <div className="bg-white p-4 rounded-lg shadow col-span-1 md:col-span-2">
          <div className="flex justify-between items-center mb-3">
            <h6 className="font-semibold text-gray-700">Monthly Consumption</h6>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyConsumption}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="production" fill="#10b981" name="Production" />
              <Line type="monotone" dataKey="current" stroke="#fbbf24" name="Current" dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* Additional Graph: Temperature Efficiency */}
<div className="bg-white p-4 rounded-lg shadow">
  <div className="flex justify-between items-center mb-3">
    <h6 className="font-semibold text-gray-700">Temperature Range vs. Efficiency</h6>
  </div>
  <ResponsiveContainer width="100%" height={250}>
    <BarChart data={temperatureEfficiencyData}>
      <XAxis dataKey="tempRange" />
      <YAxis unit="%" />
      <Tooltip />
      <Legend />
      <Bar dataKey="efficiency" fill="#6366F1" name="Efficiency %" />
    </BarChart>
  </ResponsiveContainer>
</div>

{/* Additional Graph: Carbon Emissions Over Time */}
<div className="bg-white p-4 rounded-lg shadow">
  <div className="flex justify-between items-center mb-3">
    <h6 className="font-semibold text-gray-700">Monthly Carbon Emissions (kg CO₂)</h6>
  </div>
  <ResponsiveContainer width="100%" height={250}>
    <LineChart data={carbonEmissionData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="emission" stroke="#EF4444" name="Emissions" />
    </LineChart>
  </ResponsiveContainer>
</div>
<div className="bg-white p-4 rounded-lg shadow col-span-1 md:col-span-2">
  <div className="flex justify-between items-center mb-3">
    <h6 className="font-semibold text-gray-700">📈 Predictive ROI Over Months (%)</h6>
  </div>
  <ResponsiveContainer width="100%" height={250}>
    <LineChart data={predictiveROIData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis unit="%" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="roi" stroke="#3b82f6" name="ROI %" />
    </LineChart>
  </ResponsiveContainer>
</div>
<div className="bg-white p-4 rounded-lg shadow col-span-1 md:col-span-2">
  <div className="flex justify-between items-center mb-3">
    <h6 className="font-semibold text-gray-700">⚡ Power Factor Improvement Over Weeks</h6>
  </div>
  <ResponsiveContainer width="100%" height={250}>
    <LineChart data={powerFactorData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="week" />
      <YAxis domain={[0.85, 1]} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pf" stroke="#16a34a" name="Power Factor" />
    </LineChart>
  </ResponsiveContainer>
</div>
      </div>
    </div>
  );
};

export default MetalMeltingviewpage;


