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
  PieChart,
  Pie,
  Cell,
} from "recharts";

const scrapData = [
  { dust: "0%", extraEnergy: "0%", energyKWh: 900, costPerTon: 9000, monthlyLoss: 0 },
  { dust: "1%", extraEnergy: "+2%", energyKWh: 918, costPerTon: 9180, monthlyLoss: 270000 },
  { dust: "3%", extraEnergy: "+6%", energyKWh: 954, costPerTon: 9540, monthlyLoss: 810000 },
  { dust: "5%", extraEnergy: "+10%", energyKWh: 990, costPerTon: 9900, monthlyLoss: 1350000 },
];

const COLORS = ["#22c55e", "#3b82f6", "#f97316", "#ef4444"];

const Tappingviewpage = () => {
  const pieData = scrapData
    .filter((item) => item.monthlyLoss > 0)
    .map((item) => ({
      name: item.dust,
      value: item.monthlyLoss,
    }));

  return (
    <div className="p-4 space-y-10">
      <h2 className="text-2xl font-bold mb-6">🧪 Tapping Impact Analysis</h2>

      {/* Table */}
      <section>
        <h3 className="text-xl font-semibold mb-4">📋 Data Table</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm text-center">
           <thead className="bg-gray-100 font-medium text-black">

              <tr>
                <th className="border px-4 py-2">Scrap Dust %</th>
                <th className="border px-4 py-2">Extra Energy Use</th>
                <th className="border px-4 py-2">Energy (kWh/Ton)</th>
                <th className="border px-4 py-2">Cost (₹/Ton)</th>
                <th className="border px-4 py-2">Monthly Loss</th>
              </tr>
            </thead>
            <tbody>
              {scrapData.map((item, idx) => (
                <tr key={idx}>
                  <td className="border px-4 py-2">{item.dust}</td>
                  <td className="border px-4 py-2">{item.extraEnergy}</td>
                  <td className="border px-4 py-2">{item.energyKWh}</td>
                  <td className="border px-4 py-2">₹{item.costPerTon.toLocaleString()}</td>
                  <td className="border px-4 py-2">
                    {item.monthlyLoss === 0 ? "–" : `₹${(item.monthlyLoss / 100000).toFixed(2)} Lakh`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Graphs (2 per row) */}
      <section>
        <h3 className="text-xl font-semibold mb-4">📊 Graphs Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cost per Ton */}
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

          {/* Energy */}
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

          {/* Monthly Loss */}
          <div>
            <h4 className="text-lg font-semibold mb-2">💸 Monthly Loss (₹) vs. Scrap Dust %</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={scrapData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dust" />
                <YAxis />
                <Tooltip formatter={(val) => `₹${(+val / 100000).toFixed(2)} Lakh`} />
                <Legend />
                <Line type="monotone" dataKey="monthlyLoss" stroke="#f87171" name="₹ Loss" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Extra Energy % */}
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
                <Tooltip formatter={(val) => `₹${(+val / 100000).toFixed(2)} Lakh`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Combined Chart */}
      <section>
        <h3 className="text-xl font-semibold mb-2">📈 All Metrics vs. Scrap Dust %</h3>
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
      </section>
    </div>
  );
};

export default Tappingviewpage;
