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

// Colors for charts
const COLORS = ["#22c55e", "#3b82f6", "#f97316", "#ef4444"];

// Sample Data
const dailyElectricityCost = [
  { date: "2025-06-01", manual: 18.5, zauvijek: 7.2 },
  { date: "2025-06-02", manual: 19.1, zauvijek: 7.5 },
  { date: "2025-06-03", manual: 19.6, zauvijek: 7.3 },
  { date: "2025-06-04", manual: 18.9, zauvijek: 7.0 },
  { date: "2025-06-05", manual: 19.3, zauvijek: 7.1 },
  { date: "2025-06-06", manual: 18.3, zauvijek: 7.4 },
  { date: "2025-06-07", manual: 19.0, zauvijek: 7.2 },
];

const dailyTimeConsumption = [
  { date: "2025-06-01", manual: 8.2, zauvijek: 3.5 },
  { date: "2025-06-02", manual: 8.1, zauvijek: 3.6 },
  { date: "2025-06-03", manual: 8.3, zauvijek: 3.4 },
  { date: "2025-06-04", manual: 8.0, zauvijek: 3.5 },
  { date: "2025-06-05", manual: 8.4, zauvijek: 3.3 },
  { date: "2025-06-06", manual: 8.1, zauvijek: 3.5 },
  { date: "2025-06-07", manual: 8.2, zauvijek: 3.4 },
];

const hourlyKwh = [
  { hour: "08:00", manual: 3.1, zauvijek: 1.3 },
  { hour: "09:00", manual: 3.0, zauvijek: 1.2 },
  { hour: "10:00", manual: 3.2, zauvijek: 1.3 },
  { hour: "11:00", manual: 3.3, zauvijek: 1.4 },
  { hour: "12:00", manual: 3.2, zauvijek: 1.3 },
  { hour: "13:00", manual: 3.1, zauvijek: 1.2 },
  { hour: "14:00", manual: 3.0, zauvijek: 1.1 },
];

const errorRateData = [
  { metric: "Dimensional Errors", manual: 12, zauvijek: 2 },
  { metric: "Pattern Rejects", manual: 9, zauvijek: 1 },
  { metric: "Rework Instances", manual: 15, zauvijek: 3 },
];

const costComparison = [
  { factor: "Electricity", manual: 1950, zauvijek: 780 },
  { factor: "Labor", manual: 3000, zauvijek: 1800 },
  { factor: "Material Waste", manual: 2500, zauvijek: 800 },
];

const cumulativeEnergy = [
  { week: "Week 1", manual: 130, zauvijek: 50 },
  { week: "Week 2", manual: 128, zauvijek: 52 },
];

const componentUsage = [
  { name: "Used", value: 2 },
  { name: "Not Used", value: 1 },
];

const patternsCompleted = [
  { date: "2025-06-01", manual: 50, zauvijek: 90 },
  { date: "2025-06-02", manual: 52, zauvijek: 88 },
  { date: "2025-06-03", manual: 51, zauvijek: 89 },
  { date: "2025-06-04", manual: 49, zauvijek: 92 },
  { date: "2025-06-05", manual: 53, zauvijek: 91 },
  { date: "2025-06-06", manual: 50, zauvijek: 90 },
  { date: "2025-06-07", manual: 52, zauvijek: 93 },
];

// Props types for sections
type ChartSectionProps = {
  title: string;
  data: { [key: string]: string | number }[];
  xKey: string;
};

type BarSectionProps = {
  title: string;
  data: { [key: string]: string | number }[];
  xKey: string;
};

// Chart section (LineChart)
const ChartSection = ({ title, data, xKey }: ChartSectionProps) => (
  <section className="w-full mb-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="manual" stroke="#ef4444" name="Manual" />
        <Line type="monotone" dataKey="zauvijek" stroke="#22c55e" name="Zauvijek" />
      </LineChart>
    </ResponsiveContainer>
  </section>
);

// Bar section
const BarSection = ({ title, data, xKey }: BarSectionProps) => (
  <section className="w-full mb-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="manual" fill="#ef4444" name="Manual" />
        <Bar dataKey="zauvijek" fill="#22c55e" name="Zauvijek" />
      </BarChart>
    </ResponsiveContainer>
  </section>
);

// Main Component
const PatternGraphs = () => {
  return (
    <div className="p-4 space-y-10">
      <h2 className="text-2xl font-bold mb-6">📊 Pattern Making Detailed Analysis</h2>

      <ChartSection title="Electricity Cost (₹)" data={dailyElectricityCost} xKey="date" />
      <ChartSection title="Time Consumption (hrs)" data={dailyTimeConsumption} xKey="date" />
      <ChartSection title="Hourly Energy Usage (kWh)" data={hourlyKwh} xKey="hour" />
      <BarSection title="Error Rate Comparison" data={errorRateData} xKey="metric" />
      <BarSection title="Cost Factors (₹)" data={costComparison} xKey="factor" />
      <ChartSection title="Cumulative Weekly Energy Usage" data={cumulativeEnergy} xKey="week" />
      <ChartSection title="Patterns Completed" data={patternsCompleted} xKey="date" />

      <section className="w-full mb-6">
        <h3 className="text-xl font-semibold mb-2">Component Usage (Pie Chart)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={componentUsage}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {componentUsage.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default PatternGraphs;
