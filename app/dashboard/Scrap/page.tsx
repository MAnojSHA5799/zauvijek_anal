"use client";

import React, { useState } from "react";
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
  AreaChart,
  Area,
} from "recharts";

// ✅ Type Definitions
interface ScrapData {
  dust: string;
  extraEnergy: string;
  energyKWh: number;
  costPerTon: number;
  monthlyLoss: number;
}

interface PieData {
  name: string;
  value: number;
}

interface BarChartData {
  date: string;
  manual: number;
  zauvijek: number;
}

// ✅ Sample Data
const scrapData: ScrapData[] = [
  { dust: "0%", extraEnergy: "0%", energyKWh: 900, costPerTon: 9000, monthlyLoss: 0 },
  { dust: "1%", extraEnergy: "+2%", energyKWh: 918, costPerTon: 9180, monthlyLoss: 270000 },
  { dust: "3%", extraEnergy: "+6%", energyKWh: 954, costPerTon: 9540, monthlyLoss: 810000 },
  { dust: "5%", extraEnergy: "+10%", energyKWh: 990, costPerTon: 9900, monthlyLoss: 1350000 },
];

const barChartData: BarChartData[] = [
  { date: "2024-05-01", manual: 2000, zauvijek: 800 },
  { date: "2024-05-10", manual: 2000, zauvijek: 800 },
  { date: "2024-05-20", manual: 2000, zauvijek: 800 },
  { date: "2024-05-30", manual: 2000, zauvijek: 800 },
];

const COLORS = ["#22c55e", "#3b82f6", "#f97316", "#ef4444"];

// ✅ Main Component
const Scrapviewpage = () => {
  const [selectedDust, setSelectedDust] = useState<string>("All");

  const filteredData: ScrapData[] =
    selectedDust === "All"
      ? scrapData
      : scrapData.filter((item) => item.dust === selectedDust);

  const filteredPieData: PieData[] = filteredData
    .filter((item) => item.monthlyLoss > 0)
    .map((item) => ({
      name: item.dust,
      value: item.monthlyLoss,
    }));

  return (
    <div className="bg-[#0f172a] text-white min-h-screen p-6 space-y-10">
      <h2 className="text-2xl font-bold mb-6">🧪 Scrap Impact Analysis</h2>

      {/* Dust Filter */}
      <div className="flex items-center gap-4 mb-6">
        <label htmlFor="dustFilter" className="text-lg font-medium">
          Filter by Dust %
        </label>
        <select
          id="dustFilter"
          value={selectedDust}
          onChange={(e) => setSelectedDust(e.target.value)}
          className="p-2 rounded border border-gray-600 text-black"
        >
          <option value="All">All</option>
          {scrapData.map((item) => (
            <option key={item.dust} value={item.dust}>
              {item.dust}
            </option>
          ))}
        </select>
      </div>

      {/* Line Graphs */}
      <section>
        <h3 className="text-xl font-semibold mb-4">📊 Graphs Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ChartCard title="💰 Cost per Ton vs. Scrap Dust %">
            <LineChartBase data={filteredData}>
              <Line type="monotone" dataKey="costPerTon" stroke="#6366f1" name="₹/Ton" />
            </LineChartBase>
          </ChartCard>

          <ChartCard title="⚡ Energy (kWh/Ton) vs. Scrap Dust %">
            <LineChartBase data={filteredData}>
              <Line type="monotone" dataKey="energyKWh" stroke="#22c55e" name="kWh/Ton" />
            </LineChartBase>
          </ChartCard>

          <ChartCard title="💸 Monthly Loss (₹) vs. Scrap Dust %">
            <LineChartBase data={filteredData}>
              <Line type="monotone" dataKey="monthlyLoss" stroke="#f87171" name="₹ Loss" />
            </LineChartBase>
          </ChartCard>

          <ChartCard title="🔁 Extra Energy % vs. Scrap Dust %">
            <LineChartBase
              data={filteredData.map((item) => ({
                ...item,
                extra: parseFloat(item.extraEnergy.replace("+", "").replace("%", "")),
              }))}
            >
              <Line type="monotone" dataKey="extra" stroke="#34d399" name="Extra Energy %" />
            </LineChartBase>
          </ChartCard>

          <ChartCard title="🥧 Monthly Loss Share by Scrap %" fullWidth>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={filteredPieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                  label
                >
                  {filteredPieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(val) => `₹${(+val / 100000).toFixed(2)} Lakh`}
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    borderColor: "#475569",
                    color: "white",
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </section>

      {/* Bar and Area Charts */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartCard title="📊 Bar Chart – Manual vs Zauvijek">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="date" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip contentStyle={{ backgroundColor: "#1e293b", color: "#fff" }} />
              <Legend />
              <Bar dataKey="manual" fill="#6366f1" name="Manual" />
              <Bar dataKey="zauvijek" fill="#f97316" name="Zauvijek" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="📈 Area Chart – Cost per Ton Trend">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={filteredData}>
              <defs>
                <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="dust" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip contentStyle={{ backgroundColor: "#1e293b", color: "#fff" }} />
              <Area
                type="monotone"
                dataKey="costPerTon"
                stroke="#22c55e"
                fillOpacity={1}
                fill="url(#colorCost)"
              />
              <Legend />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </section>

      {/* Combined Chart */}
      <section>
        <ChartCard title="📈 All Metrics vs. Scrap Dust %" fullWidth>
          <LineChartBase data={filteredData} height={350}>
            <Line type="monotone" dataKey="energyKWh" stroke="#0ea5e9" name="kWh/Ton" />
            <Line type="monotone" dataKey="costPerTon" stroke="#a855f7" name="₹/Ton" />
            <Line type="monotone" dataKey="monthlyLoss" stroke="#f97316" name="₹ Loss" />
          </LineChartBase>
        </ChartCard>
      </section>
    </div>
  );
};

// ✅ ChartCard Component
const ChartCard = ({
  title,
  children,
  fullWidth,
}: {
  title: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}) => (
  <div
    className={`${
      fullWidth ? "col-span-2" : ""
    } bg-[#1e293b] p-4 rounded-xl shadow text-white`}
  >
    <h4 className="text-md font-semibold mb-3">{title}</h4>
    {children}
  </div>
);

// ✅ LineChart Wrapper
const LineChartBase = ({
  data,
  children,
  height = 300,
}: {
  data: ScrapData[];
  children: React.ReactNode;
  height?: number;
}) => (
  <ResponsiveContainer width="100%" height={height}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
      <XAxis dataKey="dust" stroke="#cbd5e1" />
      <YAxis stroke="#cbd5e1" />
      <Tooltip
        contentStyle={{
          backgroundColor: "#1e293b",
          borderColor: "#475569",
          color: "white",
        }}
      />
      <Legend />
      {children}
    </LineChart>
  </ResponsiveContainer>
);

export default Scrapviewpage;
