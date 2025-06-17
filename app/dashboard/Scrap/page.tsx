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
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell
} from "recharts";

const COLORS = ["#22c55e", "#3b82f6", "#f97316", "#ef4444"];

const carbonData = [
  { label: "Total Units Used (kWh)", value: 1350000 },
  { label: "Monthly CO₂ Emission (tons)", value: 1215 },
  { label: "Yearly CO₂ Emission (tons)", value: 14580 },
  { label: "Energy Saved (10%) (kWh)", value: 135000 },
  { label: "CO₂ Saved (tons/year)", value: 1458 },
];

const savingsData = [
  { label: "Monthly Bill (₹)", value: 13500000 },
  { label: "Saving 10% (₹/month)", value: 1350000 },
  { label: "Annual Saving (₹)", value: 16200000 },
  { label: "Total Saving with Zauvijek (₹)", value: 16200000 + 1749600 },
];

const carbonCreditData = [
  { rate: "₹800", income: 1166400 },
  { rate: "₹1200", income: 1749600 },
];

const co2TrendData = [
  { month: "Jan", actual: 1215, saved: 1093.5 },
  { month: "Feb", actual: 1215, saved: 1093.5 },
  { month: "Mar", actual: 1215, saved: 1093.5 },
  { month: "Apr", actual: 1215, saved: 1093.5 },
  { month: "May", actual: 1215, saved: 1093.5 },
  { month: "Jun", actual: 1215, saved: 1093.5 },
];

const unitTrendData = [
  { month: "Jan", manual: 1350000, optimized: 1215000 },
  { month: "Feb", manual: 1350000, optimized: 1215000 },
  { month: "Mar", manual: 1350000, optimized: 1215000 },
  { month: "Apr", manual: 1350000, optimized: 1215000 },
  { month: "May", manual: 1350000, optimized: 1215000 },
  { month: "Jun", manual: 1350000, optimized: 1215000 },
];

const productionStats = [
  { label: "Total Production (tons)", value: "1500", color: "#3B82F6" },
  { label: "Scrap Rate (₹/ton)", value: "₹40,000", color: "#F59E0B" },
  { label: "Energy Saved (10%)", value: "1.35 lakh kWh", color: "#10B981" },
  { label: "Carbon Saved (tons/year)", value: "1458", color: "#22C55E" },
  { label: "Carbon Credit (₹)", value: "₹11–17 lakh/year", color: "#EF4444" },
  { label: "Total Saving with Zauvijek (₹)", value: "₹1.79 Cr/year", color: "#8B5CF6" },
];

export default function Scrapviewpage() {
  return (
    <div className="space-y-8 p-6 bg-white text-gray-900 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center text-teal-600">
        ⚙️ Energy & CO₂ Impact Dashboard
      </h2>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {productionStats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white shadow rounded-lg p-4"
            style={{ borderTop: `4px solid ${stat.color}` }}
          >
            <h4 className="text-sm font-semibold text-gray-500">{stat.label}</h4>
            <p className="text-lg font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Two-column Graph Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Electricity Cost Comparison */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h6 className="font-semibold text-gray-700 mb-3">💡 Monthly Electricity Cost Comparison</h6>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={[{ month: "Current", manual: 13500000, zauvijek: 12150000 }]}> 
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="manual" fill="#f97316" name="Current Cost" />
              <Bar dataKey="zauvijek" fill="#3b82f6" name="After Automation" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* CO₂ Emissions Overview */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h6 className="font-semibold text-gray-700 mb-3">🌫 CO₂ Emissions Overview</h6>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={carbonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#3b82f6" name="CO₂ Metrics" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Annual Savings */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h6 className="font-semibold text-gray-700 mb-3">💸 Annual Monetary Savings</h6>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={savingsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#0ea5e9" fill="#bae6fd" name="₹ Saved" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Carbon Credit Potential */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h6 className="font-semibold text-gray-700 mb-3">♻️ Carbon Credit Revenue Potential</h6>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={carbonCreditData} dataKey="income" nameKey="rate" outerRadius={90} label>
                {carbonCreditData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip formatter={(val) => `₹${(+val).toLocaleString()}`} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Monthly CO₂ Savings Trend */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h6 className="font-semibold text-gray-700 mb-3">📉 Monthly CO₂ Emissions – Actual vs Saved</h6>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={co2TrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="actual" stroke="#ef4444" name="Actual Emission" />
              <Line type="monotone" dataKey="saved" stroke="#10b981" name="Saved Emission" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Electricity Consumption Trend */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h6 className="font-semibold text-gray-700 mb-3">⚡ Monthly Electricity Usage – Manual vs Optimized</h6>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={unitTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="manual" fill="#6366f1" name="Manual" />
              <Bar dataKey="optimized" fill="#34d399" name="Zauvijek" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
