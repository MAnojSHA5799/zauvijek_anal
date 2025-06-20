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

const dynamicDays = getLast10Days();

const allData = {
  daily: {
    electricityData: dynamicDays.map((day) => ({
      name: day,
      before: 43.88,
      after: 17.55,
    })),
    co2Data: dynamicDays.map((day) => ({
      name: day,
      saved: 26.33,
    })),
    pieData: [
      { name: "Before Zauvijek", value: 43.88 },
      { name: "With Zauvijek", value: 17.55 },
    ],
    electricitySaved: 292.5,
    co2Reduced: 26.33,
    withoutZauvijek: 487.5,
    withZauvijek: 195,
  },
  weekly: {
    electricityData: [
      { name: "Week 1", before: 43.88 * 7, after: 17.55 * 7 },
      { name: "Week 2", before: 43.88 * 7, after: 17.55 * 7 },
    ],
    co2Data: [
      { name: "Week 1", saved: 26.33 * 7 },
      { name: "Week 2", saved: 26.33 * 7 },
    ],
    pieData: [
      { name: "Before Zauvijek", value: 43.88 * 14 },
      { name: "With Zauvijek", value: 17.55 * 14 },
    ],
    electricitySaved: 292.5 * 7,
    co2Reduced: 26.33 * 7,
    withoutZauvijek: 487.5 * 7,
    withZauvijek: 195 * 7,
  },
  monthly: {
    electricityData: [{ name: "Pattern Making", before: 38091, after: 38091 - 2633 }],
    co2Data: [{ name: "Pattern Making", saved: 26.33 * 30 }],
    pieData: [
      { name: "Before Zauvijek", value: 38091 },
      { name: "With Zauvijek", value: 38091 - 2633 },
    ],
    electricitySaved: 8775,
    co2Reduced: 26.33 * 30,
    withoutZauvijek: 487.5 * 30,
    withZauvijek: 195 * 30,
  },
  yearly: {
    electricityData: [{ name: "Pattern Making", before: 457095, after: 457095 - 2633 * 12 }],
    co2Data: [{ name: "Pattern Making", saved: 316 }],
    pieData: [
      { name: "Before Zauvijek", value: 457095 },
      { name: "With Zauvijek", value: 457095 - 2633 * 12 },
    ],
    electricitySaved: 106762.5,
    co2Reduced: 316,
    withoutZauvijek: 5850,
    withZauvijek: 2340,
  },
};

const sampleData1 = [
  { name: "Jan", production: 400, current: 240 },
  { name: "Feb", production: 300, current: 139 },
  { name: "Mar", production: 500, current: 280 },
  { name: "Apr", production: 278, current: 390 },
  { name: "May", production: 189, current: 480 },
  { name: "Jun", production: 356, current: 298 },
  { name: "Jul", production: 420, current: 310 },
  { name: "Aug", production: 470, current: 345 },
  { name: "Sep", production: 490, current: 360 },
  { name: "Oct", production: 430, current: 375 },
  { name: "Nov", production: 410, current: 295 },
  { name: "Dec", production: 450, current: 320 },
];

export default function PatternMakingviewpage() {
  const [filter, setFilter] = useState<FilterType>("daily");
  const {
    electricityData,
    co2Data,
    pieData,
    electricitySaved,
    co2Reduced,
    withoutZauvijek,
    withZauvijek,
  } = allData[filter];

  return (
    <div className="space-y-4 mb-5">
      <div className="flex justify-end mb-2">
        <select
          className="p-2 border rounded dark:bg-black dark:border-gray-600 dark:text-white"
          value={filter}
          onChange={(e) => setFilter(e.target.value as FilterType)}
        >
          <option value="daily">Last 10 Days</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-3">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-800 dark:to-blue-700 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">Process Name</div>
          <div className="text-sm">Pattern Making</div>
        </div>

        <div className="bg-gradient-to-r from-gray-700 to-gray-500 dark:from-gray-900 dark:to-gray-800 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">Electricity Saved</div>
          <div className="text-sm">₹{electricitySaved.toFixed(2)}</div>
        </div>

        <div className="bg-gradient-to-r from-sky-700 to-sky-500 dark:from-sky-800 dark:to-sky-600 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">CO₂ Reduced</div>
          <div className="text-sm">{co2Reduced.toFixed(2)} kg</div>
        </div>

        <div className="bg-gradient-to-r from-rose-600 to-red-500 dark:from-rose-800 dark:to-red-700 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">Total Rejections</div>
          <div className="text-sm">Reduced</div>
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 dark:from-emerald-800 dark:to-emerald-600 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">Without Zauvijek</div>
          <div className="text-sm">₹{withoutZauvijek.toFixed(2)}</div>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-orange-400 dark:from-yellow-600 dark:to-orange-600 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">With Zauvijek</div>
          <div className="text-sm">₹{withZauvijek.toFixed(2)}</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <ChartCard title="Electricity: Before vs After Zauvijek">
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={electricityData}>
              <CartesianGrid strokeDasharray="0" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => `₹${value}`} />
              <Legend />
             <Bar dataKey="before" fill="#03fce8" name="Before Zauvijek" />
             <Bar dataKey="after" fill="#585df5" name="With Zauvijek" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Electricity Trend">
          <ResponsiveContainer width="100%" height="90%">
            <LineChart data={electricityData}>
              <CartesianGrid strokeDasharray="0" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="before" stroke="#F97316" />
              <Line type="monotone" dataKey="after" stroke="#10B981" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="CO₂ Savings">
          <ResponsiveContainer width="100%" height="90%">
            <AreaChart data={co2Data}>
              <CartesianGrid strokeDasharray="0" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="saved" stroke="#10B981" fill="#A7F3D0" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Electricity Split">
          <ResponsiveContainer width="100%" height="90%">
            <PieChart>
              <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} label dataKey="value">
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>

      <ChartCard title="Monthly Consumption" height={440}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={sampleData1} margin={{ top: 20, right: 30, left: 0, bottom: 50 }}>
            <CartesianGrid stroke="#e5e7eb" strokeDasharray="0" />
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
            <Bar dataKey="production" fill="#10b981" barSize={20} />
            <Line dataKey="current" stroke="#fbbf24" strokeWidth={2} dot />
          </ComposedChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}

function ChartCard({
  title,
  children,
  height = 400,
}: {
  title: string;
  children: React.ReactNode;
  height?: number;
}) {
  return (
    <div
      className={`bg-white dark:bg-[#0f1422] border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-md h-[${height}px]`}
    >
      <h4 className="text-gray-800 dark:text-white text-base font-semibold mb-3">{title}</h4>
      {children}
    </div>
  );
}

