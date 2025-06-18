"use client";

import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  CartesianGrid,
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
} from "recharts";
import { useState } from "react";

type FilterType = "daily" | "weekly" | "monthly" | "yearly";

const COLORS = ["#F97316", "#10B981"];

const allData = {
  daily: {
    electricityData: [
      { name: "Day 1", before: 10968.75, after: 9587.5 },
      { name: "Day 2", before: 10900, after: 9500 },
      { name: "Day 3", before: 10800, after: 9450 },
      { name: "Day 4", before: 10700, after: 9400 },
      { name: "Day 5", before: 10600, after: 9350 },
      { name: "Day 6", before: 10500, after: 9300 },
      { name: "Day 7", before: 10400, after: 9250 },
      { name: "Day 8", before: 10300, after: 9200 },
      { name: "Day 9", before: 10200, after: 9150 },
      { name: "Day 10", before: 10100, after: 9100 },
    ],
    co2Data: [
      { name: "Day 1", saved: 124.31 },
      { name: "Day 2", saved: 120.5 },
      { name: "Day 3", saved: 118.0 },
      { name: "Day 4", saved: 115.2 },
      { name: "Day 5", saved: 112.6 },
      { name: "Day 6", saved: 110.3 },
      { name: "Day 7", saved: 108.1 },
      { name: "Day 8", saved: 106.0 },
      { name: "Day 9", saved: 103.8 },
      { name: "Day 10", saved: 101.6 },
    ],
    pieData: [
      { name: "Before Zauvijek", value: 10968.75 },
      { name: "With Zauvijek", value: 9587.5 },
    ],
  },
  weekly: {
    electricityData: [
      { name: "Week 1", before: 5484.38, after: 4793.75 },
      { name: "Week 2", before: 5484.38, after: 4793.75 },
    ],
    co2Data: [
      { name: "Week 1", saved: 62.15 },
      { name: "Week 2", saved: 62.15 },
    ],
    pieData: [
      { name: "Before Zauvijek", value: 10968.75 },
      { name: "With Zauvijek", value: 9587.5 },
    ],
  },
  monthly: {
    electricityData: [
      { name: "Metal Melting", before: 10968.75, after: 9587.5 },
    ],
    co2Data: [
      { name: "Metal Melting", saved: 124.31 },
    ],
    pieData: [
      { name: "Before Zauvijek", value: 10968.75 },
      { name: "With Zauvijek", value: 9587.5 },
    ],
  },
  yearly: {
    electricityData: [
      { name: "Metal Melting", before: 131625, after: 115050 },
    ],
    co2Data: [
      { name: "Metal Melting", saved: 1491.72 },
    ],
    pieData: [
      { name: "Before Zauvijek", value: 131625 },
      { name: "With Zauvijek", value: 115050 },
    ],
  },
};

const sampleData1 = [
  { name: "Jan", production: 20000, current: 18000 },
  { name: "Feb", production: 19500, current: 17500 },
  { name: "Mar", production: 19000, current: 17000 },
  { name: "Apr", production: 18500, current: 16500 },
  { name: "May", production: 18000, current: 16000 },
  { name: "Jun", production: 17500, current: 15500 },
  { name: "Jul", production: 17000, current: 15000 },
  { name: "Aug", production: 16500, current: 14500 },
  { name: "Sep", production: 16000, current: 14000 },
  { name: "Oct", production: 15500, current: 13500 },
  { name: "Nov", production: 15000, current: 13000 },
  { name: "Dec", production: 14500, current: 12500 },
];

export default function MetalMeltingViewPage() {
  const [filter, setFilter] = useState<FilterType>("daily");
  const { electricityData, co2Data, pieData } = allData[filter];

  return (
    <div className="space-y-4 mb-5">
      <div className="flex justify-end mb-2">
        <select
          className="p-2 border rounded"
          value={filter}
          onChange={(e) => setFilter(e.target.value as FilterType)}
        >
          <option value="daily">Last 10 Days</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-3">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">Process Name</div>
          <div className="text-sm">Metal Melting</div>
        </div>

        <div className="bg-gradient-to-r from-gray-700 to-gray-500 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">Electricity Saved</div>
          <div className="text-sm">₹1,381.25</div>
        </div>

        <div className="bg-gradient-to-r from-sky-700 to-sky-500 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">CO₂ Reduced</div>
          <div className="text-sm">124.31 kg</div>
        </div>

        <div className="bg-gradient-to-r from-rose-600 to-red-500 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">Total Rejections</div>
          <div className="text-sm">Reduced</div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">Without Zauvijek</div>
          <div className="text-sm">₹10,968.75</div>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-orange-400 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">With Zauvijek</div>
          <div className="text-sm">₹9,587.5</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-md h-[400px]">
          <h4 className="h6 mb-3">Electricity: Before vs After Zauvijek</h4>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={electricityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => `₹${value}`} />
              <Legend />
              <Bar dataKey="before" fill="#F97316" name="Before Zauvijek" />
              <Bar dataKey="after" fill="#10B981" name="With Zauvijek" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-md h-[400px]">
          <h4 className="h6 mb-3">Electricity Trends</h4>
          <ResponsiveContainer width="100%" height="90%">
            <LineChart data={electricityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="before" stroke="#F97316" name="Before Zauvijek" />
              <Line type="monotone" dataKey="after" stroke="#10B981" name="With Zauvijek" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-md h-[400px]">
          <h4 className="h6 mb-3">CO₂ Savings</h4>
          <ResponsiveContainer width="100%" height="90%">
            <AreaChart data={co2Data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="saved"
                stroke="#10B981"
                fill="#A7F3D0"
                name="CO₂ Saved (kg)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-md h-[400px]">
          <h4 className="h6 mb-3">Electricity Split</h4>
          <ResponsiveContainer width="100%" height="90%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-md h-[440px]">
        <h4 className="h6 mb-3">Monthly Consumption</h4>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={sampleData1} margin={{ top: 20, right: 30, left: 0, bottom: 50 }}>
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={70}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="production" name="Production" fill="#10b981" barSize={20} />
            <Line dataKey="current" name="Current" type="monotone" stroke="#fbbf24" strokeWidth={2} dot />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
