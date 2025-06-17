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
  { label: "Processes Name", value: "Pattern Making", color: "#3B82F6" },
  { label: "Electricity Saved", value: "₹1,170", color: "#10B981" },
  { label: "Carbon Reduced", value: "~60%", color: "#22C55E" },
  { label: "Total Rejections", value: "Reduced", color: "#EF4444" },
  { label: "Total Savings", value: "₹1,170", color: "#F59E0B" },
];

// Area chart data (30 days)
const costComparisonData = Array.from({ length: 30 }).map((_, i) => ({
  day: i + 1,
  manual: 1950 - i * 5,
  zauvijek: 780 + i * 2,
}));

// Pie chart data
const efficiencySplitData = [
  { name: "Zauvijek Automated (60%)", value: 60 },
  { name: "Manual (40%)", value: 40 },
];

// Extended bar chart data for one year (monthly)
const rejectionData = [
  { category: "Jan", manual: 14, zauvijek: 4 },
  { category: "Feb", manual: 13, zauvijek: 5 },
  { category: "Mar", manual: 12, zauvijek: 6 },
  { category: "Apr", manual: 11, zauvijek: 4 },
  { category: "May", manual: 13, zauvijek: 5 },
  { category: "Jun", manual: 14, zauvijek: 6 },
  { category: "Jul", manual: 13, zauvijek: 4 },
  { category: "Aug", manual: 12, zauvijek: 5 },
  { category: "Sep", manual: 11, zauvijek: 6 },
  { category: "Oct", manual: 13, zauvijek: 4 },
  { category: "Nov", manual: 14, zauvijek: 5 },
  { category: "Dec", manual: 13, zauvijek: 6 },
];

// Combined bar + line chart data (weekly sample)
const monthlyConsumption = [
  { date: "Dec 31", production: 550, current: 340 },
  { date: "Jan 7", production: 400, current: 670 },
  { date: "Jan 14", production: 600, current: 640 },
  { date: "Jan 21", production: 450, current: 300 },
  { date: "Jan 28", production: 300, current: 280 },
  { date: "Feb 4", production: 600, current: 720 },
  { date: "Feb 11", production: 480, current: 640 },
  { date: "Feb 18", production: 620, current: 610 },
  { date: "Feb 25", production: 580, current: 320 },
  { date: "Mar 3", production: 300, current: 260 },
  { date: "Mar 10", production: 590, current: 680 },
  { date: "Mar 17", production: 430, current: 650 },
  { date: "Mar 24", production: 310, current: 310 },
  { date: "Apr 1", production: 540, current: 390 },
  { date: "Apr 7", production: 470, current: 440 },
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
const PatternDashboard = () => {
  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
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
          <ResponsiveContainer width="100%" height={260}>
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
          <ResponsiveContainer width="100%" height={260}>
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
      </div>
    </div>
  );
};

export default PatternDashboard;