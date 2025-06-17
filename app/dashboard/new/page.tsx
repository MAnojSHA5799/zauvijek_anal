"use client";
import React from "react";
import {
  LineChart, Line, BarChart, Bar,
  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
  CartesianGrid
} from "recharts";

const summaryStats = [
  { label: "Total users", value: "81.35K", color: "from-purple-500 to-indigo-500" },
  { label: "New users", value: "57.04K", color: "from-blue-500 to-sky-500" },
  { label: "Sessions", value: "100.81K", color: "from-sky-600 to-blue-400" },
  { label: "Purchases", value: "1.81K", color: "from-green-400 to-emerald-500" },
  { label: "Revenue", value: "12.64K", color: "from-pink-500 to-rose-500" }
];

const trafficData = [
  { date: "Apr 06", traffic: 1200 },
  { date: "Apr 13", traffic: 3100 },
  { date: "Apr 20", traffic: 2500 },
  { date: "Apr 27", traffic: 3300 },
  { date: "May 04", traffic: 2700 },
];

const purchaseData = [
  { date: "Apr 06", purchases: 40, revenue: 300 },
  { date: "Apr 13", purchases: 65, revenue: 500 },
  { date: "Apr 20", purchases: 50, revenue: 430 },
  { date: "Apr 27", purchases: 70, revenue: 600 },
  { date: "May 04", purchases: 55, revenue: 450 },
];

const monthlyData = [
  { month: "Jul 2024", traffic: 220000 },
  { month: "Aug 2024", traffic: 210000 },
  { month: "Sep 2024", traffic: 230000 },
  { month: "Oct 2024", traffic: 225000 },
  { month: "Nov 2024", traffic: 235000 },
  { month: "Dec 2024", traffic: 240000 },
  { month: "Jan 2025", traffic: 200000 },
  { month: "Feb 2025", traffic: 250000 },
];
const dailyTrafficData = [
  { date: "Apr 06", traffic: 1000 },
  { date: "Apr 07", traffic: 2800 },
  { date: "Apr 08", traffic: 2200 },
  { date: "Apr 09", traffic: 3500 },
  { date: "Apr 10", traffic: 1800 },
  { date: "Apr 11", traffic: 3700 },
  { date: "Apr 12", traffic: 3200 },
];

const purchaseRevenueData = [
  { date: "Apr 06", purchases: 50, revenue: 400 },
  { date: "Apr 07", purchases: 70, revenue: 550 },
  { date: "Apr 08", purchases: 40, revenue: 350 },
  { date: "Apr 09", purchases: 80, revenue: 600 },
  { date: "Apr 10", purchases: 65, revenue: 500 },
];

const weeklyTraffic = [
  { week: "Jan 2025", users: 52000 },
  { week: "Feb 2025", users: 61000 },
  { week: "Mar 2025", users: 29000 },
  { week: "Apr 2025", users: 54000 },
  { week: "May 2025", users: 66000 },
];

const NewviewPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Summary Cards */}
      <div className="flex flex-wrap gap-4 mb-6">
        {summaryStats.map((stat) => (
          <div
            key={stat.label}
            className={`flex-1 min-w-[150px] p-4 rounded-xl bg-gradient-to-r ${stat.color} text-white shadow-lg`}
          >
            <p className="text-sm">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="flex flex-col lg:flex-row gap-2">
        {/* Daily Traffic */}
        <div className="bg-white p-4 rounded-xl shadow-md w-full lg:w-1/3">
          <h6 className="text-gray-700 font-semibold mb-2">Recent Daily Traffic</h6>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="traffic" stroke="#3b82f6" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Daily Purchases */}
        <div className="bg-white p-4 rounded-xl shadow-md w-full lg:w-1/3">
          <h6 className="text-gray-700 font-semibold mb-2">Recent Daily Purchases & Revenue</h6>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={purchaseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="purchases" stroke="#10b981" />
              <Line type="monotone" dataKey="revenue" stroke="#8b5cf6" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly Traffic */}
        <div className="bg-white p-4 rounded-xl shadow-md w-full lg:w-1/3">
          <h6 className="text-gray-700 font-semibold mb-2">Monthly Traffic for Last 12 Months</h6>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="traffic" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-6 flex flex-col lg:flex-row justify-between gap-4">
        <div className="flex-1">
          <div className="bg-white rounded-xl p-4 shadow-md">
          <h6 className="text-sm font-semibold text-gray-700 mb-4">Recent Daily Traffic</h6>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={dailyTrafficData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="traffic" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md w-full lg:w-1/4 space-y-4">
          <label className="block text-sm font-medium text-gray-700">Date Range</label>
          <input type="date" className="w-full border px-2 py-1 rounded-md" />
          <input type="date" className="w-full border px-2 py-1 rounded-md" />

          <label className="block text-sm font-medium text-gray-700">Device Category</label>
          <div className="space-y-1">
            {["desktop", "mobile", "smart tv"].map((device) => (
              <div key={device} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <label className="text-sm text-gray-600">{device}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Charts */}
      <div className="flex flex-row gap-4 mt-6">
  {/* Chart 1: Daily Purchases & Revenue */}
  <div className="bg-white rounded-xl p-4 shadow-md w-1/2">
    <h6 className="text-sm font-semibold text-gray-700 mb-4">
      Recent Daily Purchases & Revenue
    </h6>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={purchaseRevenueData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="purchases"
          stroke="#6366F1"
          strokeWidth={2}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="revenue"
          stroke="#22c55e"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>

  {/* Chart 2: Weekly Traffic */}
  <div className="bg-white rounded-xl p-4 shadow-md w-1/2">
    <h6 className="text-sm font-semibold text-gray-700 mb-4">
      Weekly Traffic for Last 6 Months
    </h6>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={weeklyTraffic}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="users"
          stroke="#f97316"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
</div>

    </div>
  );
};

export default NewviewPage;
