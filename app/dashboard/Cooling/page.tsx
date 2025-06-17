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
  { label: "Processes Name", value: "Cooling", color: "#3B82F6" },
  { label: "Electricity Saved", value: "₹585", color: "#10B981" },
  { label: "Carbon Reduced", value: "~40%", color: "#22C55E" },
  { label: "Total Rejections", value: "Reduced", color: "#EF4444" },
  { label: "Total Savings", value: "₹585", color: "#F59E0B" },
];

const scrapData = [
  { dust: "0%", extraEnergy: "0%", energyKWh: 15, costPerTon: 877.5, monthlyLoss: 0 },
  { dust: "1%", extraEnergy: "+2%", energyKWh: 16, costPerTon: 900, monthlyLoss: 8000 },
  { dust: "3%", extraEnergy: "+6%", energyKWh: 18, costPerTon: 950, monthlyLoss: 18000 },
  { dust: "5%", extraEnergy: "+10%", energyKWh: 20, costPerTon: 1000, monthlyLoss: 30000 },
];

const savingsForecastData = [
  { month: "Jan", manual: 1462.5, zauvijek: 877.5 },
  { month: "Feb", manual: 1450, zauvijek: 865 },
  { month: "Mar", manual: 1435, zauvijek: 850 },
  { month: "Apr", manual: 1420, zauvijek: 835 },
  { month: "May", manual: 1405, zauvijek: 820 },
  { month: "Jun", manual: 1390, zauvijek: 805 },
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
  { week: "W1", pf: 0.88 },
  { week: "W2", pf: 0.89 },
  { week: "W3", pf: 0.91 },
  { week: "W4", pf: 0.93 },
  { week: "W5", pf: 0.94 },
  { week: "W6", pf: 0.95 },
];

const COLORS = ["#22c55e", "#3b82f6", "#f97316", "#ef4444"];

export default function Coolingviewpage() {
  const pieData = scrapData
    .filter((item) => item.monthlyLoss > 0)
    .map((item) => ({ name: item.dust, value: item.monthlyLoss }));

  return (
    <div className="space-y-8">
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

      <div className="bg-white p-4 rounded-lg shadow">
        <h6 className="font-semibold text-gray-700 mb-3">📊 Monthly Cost Comparison</h6>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={savingsForecastData}>
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

      <div className="bg-white p-4 rounded-lg shadow">
        <h6 className="font-semibold text-gray-700 mb-3">🥧 Monthly Loss Share by Scrap %</h6>
        <ResponsiveContainer width="100%" height={250}>
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
    </div>
  );
}