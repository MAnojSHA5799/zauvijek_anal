"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

const processStats = [
  { label: "Processes Name", value: "Tapping", color: "#3B82F6" },
  { label: "Electricity Saved", value: "₹1,750", color: "#10B981" },
  { label: "Carbon Reduced", value: "~43.75%", color: "#22C55E" },
  { label: "Total Rejections", value: "Reduced", color: "#EF4444" },
  { label: "Total Savings", value: "₹1,750", color: "#F59E0B" },
];

const costComparisonData = Array.from({ length: 30 }).map((_, i) => ({
  day: i + 1,
  manual: 4000 - i * 30,
  zauvijek: 2250 + i * 15,
}));

const efficiencySplitData = [
  { name: "Zauvijek Automated (56.25%)", value: 56.25 },
  { name: "Manual (43.75%)", value: 43.75 },
];

const rejectionData = [
  { category: "Jan", manual: 20, zauvijek: 12 },
  { category: "Feb", manual: 19, zauvijek: 11 },
  { category: "Mar", manual: 21, zauvijek: 13 },
  { category: "Apr", manual: 22, zauvijek: 14 },
  { category: "May", manual: 20, zauvijek: 12 },
  { category: "Jun", manual: 23, zauvijek: 15 },
  { category: "Jul", manual: 21, zauvijek: 13 },
  { category: "Aug", manual: 19, zauvijek: 12 },
  { category: "Sep", manual: 20, zauvijek: 11 },
  { category: "Oct", manual: 22, zauvijek: 13 },
  { category: "Nov", manual: 21, zauvijek: 12 },
  { category: "Dec", manual: 20, zauvijek: 13 },
];

const monthlyConsumption = [
  { date: "Week 1", production: 600, current: 540 },
  { date: "Week 2", production: 590, current: 530 },
  { date: "Week 3", production: 580, current: 520 },
  { date: "Week 4", production: 570, current: 510 },
  { date: "Week 5", production: 560, current: 500 },
  { date: "Week 6", production: 550, current: 490 },
  { date: "Week 7", production: 540, current: 480 },
  { date: "Week 8", production: 530, current: 470 },
  { date: "Week 9", production: 520, current: 460 },
  { date: "Week 10", production: 510, current: 450 },
  { date: "Week 11", production: 500, current: 440 },
  { date: "Week 12", production: 490, current: 430 },
];

const temperatureEfficiencyData = [
  { tempRange: "600-800°C", efficiency: 70 },
  { tempRange: "800-1000°C", efficiency: 76 },
  { tempRange: "1000-1200°C", efficiency: 82 },
  { tempRange: "1200-1400°C", efficiency: 87 },
  { tempRange: "1400-1600°C", efficiency: 85 },
];

const carbonEmissionData = [
  { month: "Jan", emission: 950 },
  { month: "Feb", emission: 925 },
  { month: "Mar", emission: 910 },
  { month: "Apr", emission: 890 },
  { month: "May", emission: 870 },
  { month: "Jun", emission: 860 },
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
  { week: "W1", pf: 0.87 },
  { week: "W2", pf: 0.88 },
  { week: "W3", pf: 0.89 },
  { week: "W4", pf: 0.9 },
  { week: "W5", pf: 0.91 },
  { week: "W6", pf: 0.92 },
];
const savingsForecastData = [
  { month: "Jan", savings: 1750, electricity: 1200 },
  { month: "Feb", savings: 1850, electricity: 1100 },
  { month: "Mar", savings: 1950, electricity: 1050 },
  { month: "Apr", savings: 2100, electricity: 1000 },
  { month: "May", savings: 2200, electricity: 980 },
  { month: "Jun", savings: 2350, electricity: 950 },
];

const COLORS = ["#6366F1", "#10B981"];

const StatCard = ({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) => (
  <div
    className="flex-1 bg-white shadow rounded-lg p-4"
    style={{ borderTop: `4px solid ${color}` }}
  >
    <h4 className="text-sm font-semibold text-gray-500">{label}</h4>
    <p className="text-1xl font-bold text-gray-900">{value}</p>
  </div>
);

export default function Tappingviewpage() {
  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen mb-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {processStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h6 className="font-semibold text-gray-700 mb-3">
            Electricity Cost Comparison (₹)
          </h6>
          <ResponsiveContainer width="100%" height={262}>
            <AreaChart data={costComparisonData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="manual"
                stroke="#f97316"
                fill="#f97316"
                fillOpacity={0.2}
                name="Manual Cost"
              />
              <Area
                type="monotone"
                dataKey="zauvijek"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.3}
                name="Zauvijek Cost"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h6 className="font-semibold text-gray-700 mb-3">
            Electricity Efficiency Split
          </h6>
          <ResponsiveContainer width="100%" height={262}>
            <PieChart>
              <Pie
                data={efficiencySplitData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                label
              >
                {efficiencySplitData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow col-span-1 md:col-span-2">
          <h6 className="font-semibold text-gray-700 mb-3">
            Monthly Rejection Rate (1 Year)
          </h6>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={rejectionData}>
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="manual" fill="#f97316" name="Manual Rejections" />
              <Bar
                dataKey="zauvijek"
                fill="#10b981"
                name="Zauvijek Rejections"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow col-span-1 md:col-span-2">
          <h6 className="font-semibold text-gray-700 mb-3">
            Monthly Consumption
          </h6>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyConsumption}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="production" fill="#10b981" name="Production" />
              <Line
                type="monotone"
                dataKey="current"
                stroke="#fbbf24"
                name="Current"
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h6 className="font-semibold text-gray-700 mb-3">
            Temperature Range vs. Efficiency
          </h6>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={temperatureEfficiencyData}>
              <XAxis dataKey="tempRange" />
              <YAxis unit="%" />
              <Tooltip />
              <Legend />
              <Bar dataKey="efficiency" fill="#6366F1" name="Efficiency %" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h6 className="font-semibold text-gray-700 mb-3">
            Monthly Carbon Emissions (kg CO₂)
          </h6>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={carbonEmissionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="emission"
                stroke="#EF4444"
                name="Emissions"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h6 className="font-semibold text-gray-700 mb-3">
            📈 Predictive ROI Over Months (%)
          </h6>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={predictiveROIData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis unit="%" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="roi"
                stroke="#3b82f6"
                name="ROI %"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h6 className="font-semibold text-gray-700 mb-3">
            ⚡ Power Factor Improvement Over Weeks
          </h6>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={powerFactorData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis domain={[0.85, 1]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pf"
                stroke="#16a34a"
                name="Power Factor"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h6 className="font-semibold text-gray-700 mb-3">
              📈 Savings Forecast
            </h6>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={savingsForecastData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="savings"
                  fill="#22c55e"
                  name="Monthly Savings (₹)"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h6 className="font-semibold text-gray-700 mb-3">
              ⚡ Electricity Saved Per Month (kWh)
            </h6>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={savingsForecastData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="electricity"
                  fill="#3b82f6"
                  name="Electricity Savings (kWh)"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
    </div>
  );
}
