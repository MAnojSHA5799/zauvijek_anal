"use client";

import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

type ElectricityDataPoint = {
  date: string;
  electricity: number;
};

type ProcessData = {
  manual: ElectricityDataPoint[];
  zauvijek: ElectricityDataPoint[];
};

const generateData = (manualBase: number, zauvijekBase: number): ProcessData => {
  const dates = [
    "2016-03-01",
    "2016-03-10",
    "2016-03-20",
    "2016-03-30",
    "2016-04-10",
    "2016-04-20",
    "2016-04-30",
  ];
  return {
    manual: dates.map((date, i) => ({ date, electricity: manualBase + (i % 2 === 0 ? 0 : 15) })),
    zauvijek: dates.map((date, i) => ({ date, electricity: zauvijekBase - (i % 2 === 0 ? 0 : 15) })),
  };
};

const processes = [
  { name: "Pattern Making", ...generateData(1950, 780) },
  { name: "Purification", ...generateData(1820, 720) },
  { name: "Pouring", ...generateData(1650, 680) },
  { name: "Rough Casting", ...generateData(1780, 710) },
  { name: "Cooling", ...generateData(1600, 650) },
  { name: "Solidification", ...generateData(1720, 690) },
  { name: "Risers", ...generateData(1680, 670) },
  { name: "Shakeout", ...generateData(1800, 700) },
  { name: "Shot Blasting", ...generateData(1900, 740) },
  { name: "Fettling", ...generateData(1750, 690) },
];

const filterDataByDate = (
  data: ElectricityDataPoint[],
  from: string,
  to: string
): ElectricityDataPoint[] =>
  data.filter((d) => d.date >= from && d.date <= to);

const Overviewpage = () => {
  const [fromDate, setFromDate] = useState("2016-03-01");
  const [toDate, setToDate] = useState("2016-04-30");

  return (
    <div className="p-6 space-y-16 bg-black text-white min-h-screen">
      {/* 🔍 Date Filter UI */}
      <div className="flex flex-wrap gap-4 mb-8 items-center">
        <label className="space-x-2">
          <span className="text-gray-300">From:</span>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-600"
          />
        </label>
        <label className="space-x-2">
          <span className="text-gray-300">To:</span>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-600"
          />
        </label>
      </div>

      {processes.map((process, index) => {
        const filteredManual = filterDataByDate(process.manual, fromDate, toDate);
        const filteredZauvijek = filterDataByDate(process.zauvijek, fromDate, toDate);

        const combinedData = filteredManual.map((d, i) => ({
          date: d.date,
          manual: d.electricity,
          zauvijek: filteredZauvijek[i]?.electricity || 0,
        }));

        return (
          <div key={index} className="space-y-6">
            <h2 className="text-2xl font-bold mb-4">
              📊 {process.name} - Electricity Consumption Comparison
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Bar Chart */}
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Bar Chart - Interactive</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={combinedData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                    <XAxis dataKey="date" stroke="#D1D5DB" />
                    <YAxis stroke="#D1D5DB" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="manual" fill="#6366f1" name="Manual" />
                    <Bar dataKey="zauvijek" fill="#f97316" name="Zauvijek" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Combo Chart */}
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Electric Consumption and Rust Value by Vendor
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={filteredManual.map((d, i) => ({
                      vendor: `Vendor ${i + 1}`,
                      rust_value: filteredZauvijek[i]?.electricity || 0,
                      electricity_consume: d.electricity,
                    }))}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                    <XAxis dataKey="vendor" stroke="#D1D5DB" />
                    <YAxis stroke="#D1D5DB" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="rust_value" fill="#eab308" name="Rust Value" />
                    <Line
                      type="monotone"
                      dataKey="electricity_consume"
                      stroke="#0ea5e9"
                      name="Electricity Consume"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Line Chart */}
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Line Chart - Frequency</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                    <XAxis dataKey="date" stroke="#D1D5DB" />
                    <YAxis stroke="#D1D5DB" />
                    <Tooltip />
                    <Legend />
                    <Line dataKey="electricity" data={filteredManual} stroke="#6366f1" name="Manual" />
                    <Line dataKey="electricity" data={filteredZauvijek} stroke="#f97316" name="Zauvijek" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Pie Chart */}
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Overall Equipment Effectiveness (OEE)</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Tooltip />
                    <Legend />
                    <Pie
                      dataKey="electricity"
                      data={[
                        {
                          name: "Manual",
                          electricity: filteredManual.reduce((sum, d) => sum + d.electricity, 0),
                        },
                        {
                          name: "Zauvijek",
                          electricity: filteredZauvijek.reduce((sum, d) => sum + d.electricity, 0),
                        },
                      ]}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                    >
                      <Cell fill="#6366f1" />
                      <Cell fill="#f97316" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Area Chart */}
            <div className="bg-gray-900 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Area Chart - Electricity Usage Trend</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={combinedData}>
                  <defs>
                    <linearGradient id="colorManual" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorZauvijek" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                  <XAxis dataKey="date" stroke="#D1D5DB" />
                  <YAxis stroke="#D1D5DB" />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="manual"
                    stroke="#6366f1"
                    fillOpacity={1}
                    fill="url(#colorManual)"
                    name="Manual"
                  />
                  <Area
                    type="monotone"
                    dataKey="zauvijek"
                    stroke="#f97316"
                    fillOpacity={1}
                    fill="url(#colorZauvijek)"
                    name="Zauvijek"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Overviewpage;
