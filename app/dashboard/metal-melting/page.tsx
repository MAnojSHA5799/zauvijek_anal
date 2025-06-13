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

const scrapData = [
  { dust: "0%", extraEnergy: "0%", energyKWh: 650, costPerTon: 4225, monthlyLoss: 0 },
  { dust: "1%", extraEnergy: "+2%", energyKWh: 670, costPerTon: 4350, monthlyLoss: 55300 },
  { dust: "3%", extraEnergy: "+6%", energyKWh: 690, costPerTon: 4500, monthlyLoss: 165800 },
  { dust: "5%", extraEnergy: "+10%", energyKWh: 700, costPerTon: 4650, monthlyLoss: 275300 },
];

const COLORS = ["#22c55e", "#3b82f6", "#f97316", "#ef4444"];

const MetalMeltingviewpage = () => {
  const pieData = scrapData
    .filter((item) => item.monthlyLoss > 0)
    .map((item) => ({
      name: item.dust,
      value: item.monthlyLoss,
    }));

  return (
    <div className="h-screen overflow-y-auto p-4 space-y-10 ">
      <h2 className="text-2xl font-bold mb-6">🧪 Metal Melting Impact Analysis</h2>

      {/* Table */}
     

      {/* Graphs */}
      <section>
        <h3 className="text-xl font-semibold mb-4">📊 Graphs Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Cost per Ton Line Chart */}
          <div>
            <h4 className="text-lg font-semibold mb-2">💰 Cost per Ton vs. Scrap Dust %</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={scrapData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dust" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="costPerTon" stroke="#8884d8" name="₹/Ton" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Cost per Ton Bar Chart */}
          <div>
            <h4 className="text-lg font-semibold mb-2">📊 Bar Chart: Cost per Ton vs Scrap Dust %</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={scrapData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dust" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="costPerTon" fill="#8884d8" name="₹/Ton" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Energy (kWh/Ton) Line Chart */}
          <div>
            <h4 className="text-lg font-semibold mb-2">⚡ Energy (kWh/Ton) vs. Scrap Dust %</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={scrapData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dust" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="energyKWh" stroke="#22c55e" name="kWh/Ton" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Monthly Loss Line Chart */}
          <div>
            <h4 className="text-lg font-semibold mb-2">💸 Monthly Loss (₹) vs. Scrap Dust %</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={scrapData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dust" />
                <YAxis />
                <Tooltip formatter={(val) => `₹${(+val / 1000).toFixed(1)}k`} />
                <Legend />
                <Line type="monotone" dataKey="monthlyLoss" stroke="#f87171" name="₹ Loss" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Extra Energy Line Chart */}
          <div>
            <h4 className="text-lg font-semibold mb-2">🔁 Extra Energy % vs. Scrap Dust %</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={scrapData.map((item) => ({
                  ...item,
                  extra: parseFloat(item.extraEnergy.replace("+", "").replace("%", "")),
                }))}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dust" />
                <YAxis unit="%" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="extra" stroke="#34d399" name="Extra Energy %" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-2">🥧 Monthly Loss Share by Scrap %</h4>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={100} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(val) => `₹${(+val / 1000).toFixed(1)}k`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Combined Hologram Chart */}
      <section>
        <h3 className="text-xl font-semibold mb-2">📈 All Metrics vs. Scrap Dust %</h3>
        <div className="p-6 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/70">
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={scrapData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dust" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="energyKWh" stroke="#0ea5e9" name="kWh/Ton" />
              <Line type="monotone" dataKey="costPerTon" stroke="#a855f7" name="₹/Ton" />
              <Line type="monotone" dataKey="monthlyLoss" stroke="#f97316" name="₹ Loss" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default MetalMeltingviewpage;
