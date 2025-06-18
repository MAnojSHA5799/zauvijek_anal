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

const getLast10Days = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();
  const result = [];

  for (let i = 0; i < 10; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);
    result.push(days[date.getDay()]);
  }

  return result;
};

type FilterType = "daily" | "weekly" | "monthly" | "yearly";
const dynamicDays = getLast10Days();

const allData = {
  daily: {
    electricityData: dynamicDays.map((day, index) => ({
      name: day,
      before: 11.375 - index * 0.05,
      after: 5.688 - index * 0.03,
    })),
    co2Data: dynamicDays.map((day, index) => ({
      name: day,
      saved: 0.51 + (index % 3) * 0.05,
    })),
    pieData: [
      { name: "Before Zauvijek", value: 113.75 },
      { name: "With Zauvijek", value: 56.88 },
    ],
  },
  weekly: {
    electricityData: [
      { name: "Week 1", before: 60, after: 30 },
      { name: "Week 2", before: 53.75, after: 26.88 },
    ],
    co2Data: [
      { name: "Week 1", saved: 2.5 },
      { name: "Week 2", saved: 2.62 },
    ],
    pieData: [
      { name: "Before Zauvijek", value: 113.75 },
      { name: "With Zauvijek", value: 56.88 },
    ],
  },
  monthly: {
    electricityData: [
      { name: "Risers", before: 113.75, after: 56.88 },
    ],
    co2Data: [
      { name: "Risers", saved: 5.12 },
    ],
    pieData: [
      { name: "Before Zauvijek", value: 113.75 },
      { name: "With Zauvijek", value: 56.88 },
    ],
  },
  yearly: {
    electricityData: [
      { name: "Risers", before: 1365, after: 682.5 },
    ],
    co2Data: [
      { name: "Risers", saved: 61.44 },
    ],
    pieData: [
      { name: "Before Zauvijek", value: 1365 },
      { name: "With Zauvijek", value: 682.5 },
    ],
  },
};

const sampleData1 = [
  { name: "Jan", production: 40, current: 20 },
  { name: "Feb", production: 35, current: 18 },
  { name: "Mar", production: 45, current: 25 },
  { name: "Apr", production: 38, current: 22 },
  { name: "May", production: 32, current: 17 },
  { name: "Jun", production: 39, current: 21 },
  { name: "Jul", production: 42, current: 23 },
  { name: "Aug", production: 44, current: 24 },
  { name: "Sep", production: 41, current: 22 },
  { name: "Oct", production: 43, current: 21 },
  { name: "Nov", production: 40, current: 20 },
  { name: "Dec", production: 46, current: 26 },
];

const COLORS = ["#F97316", "#10B981"];

export default function RisersViewPage() {
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
          <div className="text-sm">Risers</div>
        </div>

        <div className="bg-gradient-to-r from-gray-700 to-gray-500 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">Electricity Saved</div>
          <div className="text-sm">₹56.88</div>
        </div>

        <div className="bg-gradient-to-r from-sky-700 to-sky-500 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">CO₂ Reduced</div>
          <div className="text-sm">5.12 kg</div>
        </div>

        <div className="bg-gradient-to-r from-rose-600 to-red-500 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">Total Rejections</div>
          <div className="text-sm">Reduced</div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">Without Zauvijek</div>
          <div className="text-sm">₹113.75</div>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-orange-400 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">With Zauvijek</div>
          <div className="text-sm">₹56.88</div>
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
          <h4 className="h6 mb-3">Electricity</h4>
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
          <ComposedChart
            data={sampleData1}
            margin={{ top: 20, right: 30, left: 0, bottom: 50 }}
          >
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
