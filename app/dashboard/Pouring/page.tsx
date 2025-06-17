"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

const processStats = [
  { label: "Processes Name", value: "Pouring", color: "#3B82F6" },
  { label: "Electricity Saved", value: "₹1,625", color: "#10B981" },
  { label: "Carbon Reduced", value: "~35.71%", color: "#22C55E" },
  { label: "Total Rejections", value: "Reduced", color: "#EF4444" },
  { label: "Total Savings", value: "₹1,625", color: "#F59E0B" },
];

const scrapData = [
  { dust: "0%", extraEnergy: "0%", energyKWh: 50, costPerTon: 2925, monthlyLoss: 0 },
  { dust: "1%", extraEnergy: "+2%", energyKWh: 52, costPerTon: 3000, monthlyLoss: 25000 },
  { dust: "3%", extraEnergy: "+6%", energyKWh: 55, costPerTon: 3150, monthlyLoss: 70000 },
  { dust: "5%", extraEnergy: "+10%", energyKWh: 58, costPerTon: 3300, monthlyLoss: 130000 },
];

const savingsForecastData = [
  { month: "Jan", savings: 1625, electricity: 80 },
  { month: "Feb", savings: 1650, electricity: 78 },
  { month: "Mar", savings: 1700, electricity: 75 },
  { month: "Apr", savings: 1750, electricity: 73 },
  { month: "May", savings: 1800, electricity: 71 },
  { month: "Jun", savings: 1850, electricity: 69 },
  { month: "Jul", savings: 1875, electricity: 68 },
  { month: "Aug", savings: 1900, electricity: 66 },
  { month: "Sep", savings: 1925, electricity: 65 },
  { month: "Oct", savings: 1950, electricity: 63 },
  { month: "Nov", savings: 1975, electricity: 62 },
  { month: "Dec", savings: 2000, electricity: 60 },
];
const savingsForecastData1 = [
  { month: "Jan", manual: 4550, zauvijek: 2925 },
  { month: "Feb", manual: 4530, zauvijek: 2900 },
  { month: "Mar", manual: 4500, zauvijek: 2880 },
  { month: "Apr", manual: 4480, zauvijek: 2850 },
  { month: "May", manual: 4460, zauvijek: 2825 },
  { month: "Jun", manual: 4440, zauvijek: 2800 },
  { month: "Jul", manual: 4425, zauvijek: 2780 },
  { month: "Aug", manual: 4400, zauvijek: 2760 },
  { month: "Sep", manual: 4380, zauvijek: 2740 },
  { month: "Oct", manual: 4360, zauvijek: 2720 },
  { month: "Nov", manual: 4340, zauvijek: 2700 },
  { month: "Dec", manual: 4325, zauvijek: 2680 },
];

const predictiveROIData = [
  { month: "Jan", roi: 7 },
  { month: "Feb", roi: 8 },
  { month: "Mar", roi: 9 },
  { month: "Apr", roi: 10 },
  { month: "May", roi: 11 },
  { month: "Jun", roi: 12 },
];

const powerFactorData = [
  { week: "W1", pf: 0.87 },
  { week: "W2", pf: 0.88 },
  { week: "W3", pf: 0.89 },
  { week: "W4", pf: 0.91 },
  { week: "W5", pf: 0.93 },
  { week: "W6", pf: 0.94 },
];

const COLORS = ["#22c55e", "#3b82f6", "#f97316", "#ef4444"];

export default function Pouringviewpage() {
  const pieData = scrapData
    .filter((item) => item.monthlyLoss > 0)
    .map((item) => ({ name: item.dust, value: item.monthlyLoss }));

  return (
    <div className="space-y-8 mb-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {processStats.map((stat) => (
          <div
            key={stat.label}
            className="flex-1 bg-white shadow rounded-lg p-4"
            style={{ borderTop: `4px solid ${stat.color}` }}
          >
            <h4 className="text-sm font-semibold text-gray-500">{stat.label}</h4>
            <p className="text-1xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h6 className="font-semibold text-gray-700 mb-3">📈 Savings Forecast</h6>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={savingsForecastData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="savings" fill="#22c55e" name="Monthly Savings (₹)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h6 className="font-semibold text-gray-700 mb-3">⚡ Electricity Saved Per Month (kWh)</h6>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={savingsForecastData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="electricity" fill="#3b82f6" name="Electricity Savings (kWh)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
</div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h6 className="font-semibold text-gray-700 mb-3">📈 Predictive ROI Over Months (%)</h6>
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

        <div className="bg-white p-4 rounded-lg shadow">
          <h6 className="font-semibold text-gray-700 mb-3">⚡ Power Factor Improvement Over Weeks</h6>
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
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h6 className="font-semibold text-gray-700 mb-3">🥧 Monthly Loss Share by Scrap %</h6>
        <ResponsiveContainer width="100%" height={270}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={90} label>
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip formatter={(val) => `₹${(+val / 100000).toFixed(2)} Lakh`} />
          </PieChart>
        </ResponsiveContainer>
        
      </div>
       <div className="bg-white p-4 rounded-lg shadow">
        <h6 className="font-semibold text-gray-700 mb-3">📊 Monthly Cost Comparison</h6>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={savingsForecastData1}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="manual" fill="#ef4444" name="Manual Cost" />
            <Bar dataKey="zauvijek" fill="#22c55e" name="Zauvijek Cost" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      </div>
    </div>
  );
}
