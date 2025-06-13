// components/scrap/Scrapviewpage.tsx
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
  ScatterChart,
  Scatter,
  ZAxis,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from "recharts";

// const scrapData = [
//   { condition: "Without Zauvijek", energyKWh: 4.5, costPerTon: 2925, monthlyLoss: 0 },
//   { condition: "With Zauvijek", energyKWh: 2, costPerTon: 1300, monthlyLoss: -1625 },
// ];

const weeklyData = [
  { day: "Mon", energy: 4.5, cost: 2925 },
  { day: "Tue", energy: 4.3, cost: 2820 },
  { day: "Wed", energy: 4.1, cost: 2700 },
  { day: "Thu", energy: 3.8, cost: 2500 },
  { day: "Fri", energy: 3.6, cost: 2350 },
  { day: "Sat", energy: 3.2, cost: 2100 },
  { day: "Sun", energy: 2, cost: 1300 },
];

const voltageData = [
  { month: "Aug", voltage: 220, current: 20, pf: 0.92 },
  { month: "Jul", voltage: 215, current: 18, pf: 0.9 },
  { month: "Jun", voltage: 225, current: 22, pf: 0.94 },
];

const frequencyData = [
  { date: "Jan 22", frequency: 50 },
  { date: "Nov 1", frequency: 49.8 },
  { date: "May 22", frequency: 50.2 },
];

const energyConsumptionData = [
  { date: "Jan 2", energy: 900 },
  { date: "Jan 3", energy: 850 },
  { date: "Jan 4", energy: 800 },
  { date: "Jan 5", energy: 750 },
  { date: "Jan 6", energy: 720 },
  { date: "Jan 7", energy: 700 },
];

const pieData = [
  { name: "Preheat Scrap", value: 3 },
  { name: "Peak Load Mgmt", value: 1 },
  { name: "Induction Furnace", value: 2 },
  { name: "Smart Power Ctrl", value: 2 },
  { name: "Waste Heat Recovery", value: 2 },
  { name: "AI Process Control", value: 1 },
];

const scatterData = [
  { temp: 0, consumption: 0 },
  { temp: 450, consumption: 250 },
  { temp: 900, consumption: 500 },
  { temp: 1350, consumption: 750 },
  { temp: 1800, consumption: 1000 },
];

const MoldPreparationviewpage = () => {
  return (
    <div className="p-4 space-y-10">
      <h2 className="text-2xl font-bold mb-6">🧪 Mold Preparation Impact Analysis</h2>

      <section>
        <h3 className="text-xl font-semibold mb-4">📊 Graphs Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bar Chart - Voltage, Current, PF */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-2">⚡ Power Parameters (Last 3 Months)</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={voltageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="voltage" fill="#fbbf24" name="Voltage" />
                <Bar dataKey="current" fill="#3b82f6" name="Current" />
                <Bar dataKey="pf" fill="#10b981" name="Power Factor" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Line Chart - Frequency */}
          <div>
            <h4 className="text-lg font-semibold mb-2">📈 Frequency Over Time</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={frequencyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line dataKey="frequency" stroke="#f43f5e" name="Frequency" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Area Chart - Energy Consumption */}
          <div>
            <h4 className="text-lg font-semibold mb-2">📉 Energy Consumption Over Time</h4>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={energyConsumptionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area dataKey="energy" stroke="#6366f1" fill="#c7d2fe" name="Energy" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart - Energy Saving */}
          <div>
            <h4 className="text-lg font-semibold mb-2">🥧 Energy Saving Strategies</h4>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Tooltip />
                <Legend />
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#60a5fa" label />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Scatter Chart - Melting Temp vs. Consumption */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-2">🔥 Melting Temp vs. Energy Consumption</h4>
            <ResponsiveContainer width="100%" height={300}>
              <ScatterChart>
                <CartesianGrid />
                <XAxis type="number" dataKey="temp" name="Temperature" unit="°C" />
                <YAxis type="number" dataKey="consumption" name="Energy" unit="kWh" />
                <ZAxis range={[100]} />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Legend />
                <Scatter name="Temp vs Energy" data={scatterData} fill="#8b5cf6" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>

          {/* Radar Chart - Weekly Energy and Cost */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-2">📡 Weekly Scrap Reduction Comparison</h4>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={weeklyData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="day" />
                <PolarRadiusAxis />
                <Radar name="Energy" dataKey="energy" stroke="#14b8a6" fill="#5eead4" fillOpacity={0.6} />
                <Radar name="Cost" dataKey="cost" stroke="#f87171" fill="#fecaca" fillOpacity={0.6} />
                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoldPreparationviewpage;

