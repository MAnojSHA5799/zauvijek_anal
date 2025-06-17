"use client";

import React, { useState, useMemo } from "react";

import {
  ComposedChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
import { Row, Col, Modal, Button } from "react-bootstrap";
const COLORS = [
  "#4F46E5",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#6366F1",
  "#14B8A6",
];

// Comparison of electricity cost before and after Zauvijek (Bar/Line chart)
const sampleData = [
  { name: "Pattern Making", manual: 1950, zauvijek: 780 },
  { name: "Mold Prep", manual: 2925, zauvijek: 1300 },
  { name: "Assembly", manual: 1950, zauvijek: 780 },
  { name: "Melting", manual: 43875, zauvijek: 38350 },
  { name: "Tapping", manual: 4000, zauvijek: 2250 },
];

const processData = [
  { name: "Pattern Making", manual: 500, zauvijek: 450, color: "#3B82F6" },
  { name: "Mold Prep", manual: 450, zauvijek: 390, color: "#10B981" },
  { name: "Assembly", manual: 400, zauvijek: 350, color: "#F59E0B" },
  { name: "Melting", manual: 600, zauvijek: 520, color: "#EF4444" },
  { name: "Tapping", manual: 300, zauvijek: 270, color: "#8B5CF6" },
  { name: "Cooling", manual: 320, zauvijek: 280, color: "#EC4899" },
];

const processList = [
  {
    name: "Pattern Making",
    cost: "₹780",
    percent: "60%",
    color: "text-success",
  },
  {
    name: "Mold Preparation",
    cost: "₹1300",
    percent: "55%",
    color: "text-success",
  },
  { name: "Assembly", cost: "₹780", percent: "60%", color: "text-success" },
  { name: "Melting", cost: "₹38350", percent: "13%", color: "text-warning" },
  { name: "Tapping", cost: "₹2250", percent: "44%", color: "text-success" },
  {
    name: "Purification",
    cost: "₹1200",
    percent: "38%",
    color: "text-success",
  },
  { name: "Pouring", cost: "₹900", percent: "42%", color: "text-success" },
  {
    name: "Rough Casting",
    cost: "₹1100",
    percent: "50%",
    color: "text-success",
  },
  { name: "Cooling", cost: "₹1400", percent: "30%", color: "text-warning" },
  {
    name: "Solidification",
    cost: "₹1250",
    percent: "35%",
    color: "text-warning",
  },
  { name: "Risers", cost: "₹950", percent: "40%", color: "text-success" },
  { name: "Shakeout", cost: "₹1000", percent: "36%", color: "text-success" },
  {
    name: "Shot Blasting",
    cost: "₹1600",
    percent: "45%",
    color: "text-success",
  },
  { name: "Fettling", cost: "₹1500", percent: "47%", color: "text-success" },
];

// Electricity usage by device type (Pie chart analogy for system split — example usage)
const pieData = [
  { name: "Zauvijek Automated", value: 70 },
  { name: "Manual", value: 30 },
];

// Monthly ROI trend (Randomized — can be replaced with real financials)
const overviewData = Array.from({ length: 30 }, (_, i) => {
  const day = i + 1;
  const past = 5000 - i * 40 + Math.floor(Math.random() * 100); // manual
  const current = 3000 + Math.floor(Math.random() * 100); // Zauvijek
  return { day, current, past };
});

// Dashboard Summary Cards

// Detailed bar chart of processes (Before/After)
const chartData = [
  {
    month: "Pattern Making",
    "Electricity (kWh)": 195,
    "CO2 Emissions (kg)": 195 * 0.9,
    "Savings (₹)": 195 * 10,
  },
  {
    month: "Mold Prep",
    "Electricity (kWh)": 292.5,
    "CO2 Emissions (kg)": 292.5 * 0.9,
    "Savings (₹)": 292.5 * 10,
  },
  {
    month: "Assembly",
    "Electricity (kWh)": 195,
    "CO2 Emissions (kg)": 195 * 0.9,
    "Savings (₹)": 195 * 10,
  },
  {
    month: "Melting",
    "Electricity (kWh)": 4387.5,
    "CO2 Emissions (kg)": 4387.5 * 0.9,
    "Savings (₹)": 4387.5 * 10,
  },
  {
    month: "Tapping",
    "Electricity (kWh)": 400,
    "CO2 Emissions (kg)": 400 * 0.9,
    "Savings (₹)": 400 * 10,
  },
  {
    month: "Purification",
    "Electricity (kWh)": 390,
    "CO2 Emissions (kg)": 390 * 0.9,
    "Savings (₹)": 390 * 10,
  },
  {
    month: "Pouring",
    "Electricity (kWh)": 455,
    "CO2 Emissions (kg)": 455 * 0.9,
    "Savings (₹)": 455 * 10,
  },
  {
    month: "Rough Casting",
    "Electricity (kWh)": 211.25,
    "CO2 Emissions (kg)": 211.25 * 0.9,
    "Savings (₹)": 211.25 * 10,
  },
  {
    month: "Cooling",
    "Electricity (kWh)": 146.25,
    "CO2 Emissions (kg)": 146.25 * 0.9,
    "Savings (₹)": 146.25 * 10,
  },
  {
    month: "Solidification",
    "Electricity (kWh)": 58.5,
    "CO2 Emissions (kg)": 58.5 * 0.9,
    "Savings (₹)": 58.5 * 10,
  },
  {
    month: "Risers",
    "Electricity (kWh)": 45.5,
    "CO2 Emissions (kg)": 45.5 * 0.9,
    "Savings (₹)": 45.5 * 10,
  },
  {
    month: "Shakeout",
    "Electricity (kWh)": 29.25,
    "CO2 Emissions (kg)": 29.25 * 0.9,
    "Savings (₹)": 29.25 * 10,
  },
  {
    month: "Shot Blasting",
    "Electricity (kWh)": 42.25,
    "CO2 Emissions (kg)": 42.25 * 0.9,
    "Savings (₹)": 42.25 * 10,
  },
  {
    month: "Fettling",
    "Electricity (kWh)": 71.5,
    "CO2 Emissions (kg)": 71.5 * 0.9,
    "Savings (₹)": 71.5 * 10,
  },
];

const sampleData1 = [
  { name: "Dec 31", production: 550, current: 300 },
  { name: "Jan 7", production: 400, current: 650 },
  { name: "Jan 14", production: 600, current: 640 },
  { name: "Jan 21", production: 350, current: 400 },
  { name: "Jan 28", production: 250, current: 320 },
  { name: "Feb 4", production: 580, current: 700 },
  { name: "Feb 11", production: 470, current: 630 },
  { name: "Feb 18", production: 600, current: 620 },
  { name: "Feb 25", production: 390, current: 370 },
  { name: "Mar 3", production: 260, current: 310 },
  { name: "Mar 10", production: 570, current: 680 },
  { name: "Mar 17", production: 430, current: 670 },
  { name: "Mar 24", production: 290, current: 400 },
  { name: "Apr 1", production: 590, current: 350 },
  { name: "Apr 7", production: 460, current: 450 },
];

const vendorData = Array.from({ length: 30 }, (_, i) => {
  const base = 100 * (i + 1);
  return {
    vendor: `Vendor ${i + 1}`,
    rust_value: base + Math.floor(Math.random() * 100),
    electricity_consume: 1800 + Math.floor(Math.random() * 1000),
  };
});

const revenueData = [
  { date: "Jan 10", PatternMaking: 2000, MoldPrep: 700, Assembly: 300 },
  { date: "Jan 24", PatternMaking: 2300, MoldPrep: 850, Assembly: 350 },
  { date: "Feb 07", PatternMaking: 2700, MoldPrep: 1000, Assembly: 500 },
  { date: "Feb 21", PatternMaking: 3200, MoldPrep: 1200, Assembly: 650 },
  { date: "Mar 06", PatternMaking: 3900, MoldPrep: 1300, Assembly: 800 },
  { date: "Mar 20", PatternMaking: 1900, MoldPrep: 800, Assembly: 400 },
  { date: "Apr 03", PatternMaking: 4400, MoldPrep: 1600, Assembly: 1100 },
  { date: "Apr 17", PatternMaking: 2500, MoldPrep: 1000, Assembly: 600 },
  { date: "May 01", PatternMaking: 3000, MoldPrep: 1100, Assembly: 650 },
  { date: "May 15", PatternMaking: 3400, MoldPrep: 1250, Assembly: 700 },
  { date: "May 29", PatternMaking: 4000, MoldPrep: 1400, Assembly: 850 },
  { date: "Jun 12", PatternMaking: 3200, MoldPrep: 1200, Assembly: 700 },
  { date: "Jun 26", PatternMaking: 2700, MoldPrep: 1050, Assembly: 600 },
];

const ChartCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactElement; // <-- FIXED HERE
}) => (
  <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition duration-300 h-[350px]">
    <h4 className="text-lg font-semibold text-gray-700 mb-4">{title}</h4>
    <ResponsiveContainer width="100%" height="80%">
      {children}
    </ResponsiveContainer>
  </div>
);

const OverviewPage = () => {
  const [filter, setFilter] = useState("monthly");
  const [showModal, setShowModal] = useState(false);
  const visibleProcesses = processList.slice(0, 7); // show only first 8 in card
  const filteredData = useMemo(() => {
    if (filter === "weekly") return chartData.slice(0, 5);
    if (filter === "yearly") return chartData;
    return chartData.slice(0, 12);
  }, [filter]);
  type CustomBarProps = {
    fill?: string;
    x?: number | string;
    y?: number | string;
    width?: number | string;
    height?: number | string;
    value?: number | string;
  };

  const CustomBar = ({
    fill = "#8884d8",
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    value = 0,
  }: CustomBarProps): React.JSX.Element => {
    const numX = Number(x);
    const numY = Number(y);
    const numWidth = Number(width);
    const numHeight = Number(height);

    return (
      <g>
        <rect
          x={numX}
          y={numY}
          width={numWidth}
          height={numHeight}
          fill={fill}
          rx={6}
        />
        <text
          x={numX + numWidth / 2}
          y={numY - 8}
          fill="#fff"
          textAnchor="middle"
          fontSize={12}
        >
          {value}
        </text>
      </g>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex flex-wrap gap-3 items-centerp-4 mb-3">
        <label className="flex items-center space-x-2 text-md">
          <span className="font-semibold">Filter By</span>
        </label>
        <select className="px-3 py-2 rounded border text-sm w-32">
          <option>Line 1</option>
          <option>Line 2</option>
        </select>

        <select className="px-3 py-2 rounded border text-sm w-32">
          <option>Date</option>
        </select>

        <select className="px-3 py-2 rounded border text-sm w-32">
          <option>All</option>
          <option>Heavy</option>
          <option>Light</option>
        </select>

        <input
          type="date"
          className="px-3 py-2 rounded border text-sm w-32"
          value="2023-04-28"
        />
        <label className="flex items-center space-x-2 text-md">
          <span className="font-semibold">From</span>
        </label>
        <input
          type="date"
          className="px-3 py-2 rounded border text-sm w-32"
          value="2023-05-11"
        />

        <label className="flex items-center space-x-2 text-sm w-20">
          <input type="checkbox" />
          <span>Prod Qty</span>
        </label>

        <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded flex items-center gap-1">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 12.414V18a1 1 0 01-1 1h-4a1 1 0 01-1-1v-5.586L3.293 6.707A1 1 0 013 6V4z"
            />
          </svg>
          Filter
        </button>
      </div>

      {/* 📊 Metrics Section From Your Code */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-3">
        {/* Total Processes */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">Total Processes</div>
          <div className="text-sm">14</div>
          {/* <div className="text-xs  mt-1">+100%</div> */}
        </div>

        {/* Electricity Saved */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">Electricity Saved</div>
          <div className="text-sm">₹18,337</div>
          {/* <div className="text-xs  mt-1">-47%</div> */}
        </div>

        {/* Carbon Reduced */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">Carbon Reduced</div>
          <div className="text-sm">2.8 Tons</div>
          {/* <div className="text-xs  mt-1">-32%</div> */}
        </div>

        {/* Total Rejections */}
        <div className="bg-gradient-to-r from-rose-600 to-red-500 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">Total Rejections</div>
          <div className="text-sm">6.6 MT</div>
          {/* <div className="text-xs  mt-1">+0.72%</div> */}
        </div>

        {/* Total Savings */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-400 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">Total Savings</div>
          <div className="text-sm">₹42,000</div>
          {/* <div className="text-xs mt-1">+63%</div> */}
        </div>
      </div>

      {/* Users Overview + Device Pie */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-3">
        <div className="bg-white rounded-xl p-4 shadow-md col-span-2 h-[350px]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-gray-700">
              Process Cost Comparison
            </h3>
            <div className="text-sm text-indigo-600 cursor-pointer hover:text-indigo-800">
              View Full Report →
            </div>
          </div>

          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={overviewData}>
              <defs>
                <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorPast" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#facc15" stopOpacity={0.1} />
                </linearGradient>
              </defs>

              <XAxis dataKey="day" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip formatter={(value) => [`₹${value}`, "Cost"]} />
              <Legend verticalAlign="top" height={36} />

              <Area
                type="monotone"
                dataKey="current"
                stroke="#0ea5e9"
                fillOpacity={1}
                fill="url(#colorCurrent)"
                name="Zauvijek Cost"
              />
              <Area
                type="monotone"
                dataKey="past"
                stroke="#f97316"
                strokeDasharray="5 5"
                fill="url(#colorPast)"
                name="Manual Cost"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg h-[350px]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-gray-700">
              Process Efficiency Split
            </h3>
            <div className="text-sm text-indigo-600 cursor-pointer hover:text-indigo-800 transition-colors">
              View report →
            </div>
          </div>

          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                // label={({ name, percent }) =>
                //   `${name} (${(percent * 100).toFixed(0)}%)`
                // }
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name) => [`${value}%`, name]}
                contentStyle={{ borderRadius: "10px", fontSize: "13px" }}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Compute percentages for the legend */}
          <div className="flex justify-around text-sm mt-4">
            {pieData.map((entry, index) => {
              const total = pieData.reduce((sum, item) => sum + item.value, 0);
              const percent = ((entry.value / total) * 100).toFixed(0);
              const color = COLORS[index % COLORS.length];
              return (
                <div key={entry.name} className="flex items-center space-x-2">
                  <span
                    className={`w-3 h-3 rounded-full`}
                    style={{ backgroundColor: color }}
                  ></span>
                  <span className="text-gray-700">
                    {entry.name} ({percent}%)
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Line and Bar Chart */}
      <Row className="mb-3">
        <Col xs={12} md={8}>
          <div className="bg-white rounded-xl p-6 shadow-md h-[350px]">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="h6 text-gray-700">
                Process-Wise Electricity Cost
              </h2>
              <div className="text-sm text-indigo-600 cursor-pointer hover:text-indigo-800 transition-colors">
                View report →
              </div>
            </div>

            {/* Date Filters */}
            <div className="d-flex gap-2 mb-3">
              <input type="date" className="form-control form-control-sm" />
              <input type="date" className="form-control form-control-sm" />
            </div>

            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={sampleData}>
                <defs>
                  <linearGradient
                    id="colorZauvijek"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.7} />
                    <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorManual" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.6} />
                    <stop offset="95%" stopColor="#facc15" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tickFormatter={(v) => `₹${v}`} />
                <Tooltip
                  formatter={(value) => `₹${value}`}
                  labelFormatter={(label) => `Day: ${label}`}
                />
                <Legend verticalAlign="top" height={20} />

                <Area
                  type="monotone"
                  dataKey="manual"
                  stroke="#0ea5e9"
                  strokeWidth={2}
                  fill="url(#colorManual)"
                  name="Manual Cost"
                />
                <Area
                  type="monotone"
                  dataKey="zauvijek"
                  stroke="#f97316"
                  strokeWidth={2}
                  fill="url(#colorZauvijek)"
                  name="Zauvijek Cost"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Col>

        <Col xs={12} md={4}>
          <div className="bg-white rounded-xl p-4 shadow-md h-100">
            <h3 className="h6 mb-3">Process Cost Summary</h3>
            <ul className="list-unstyled">
              {visibleProcesses.map((process, i) => (
                <li
                  key={i}
                  className="d-flex justify-content-between align-items-center mb-2"
                >
                  <span>{process.name}</span>
                  <div className="d-flex gap-2 align-items-center">
                    <span className={`small ${process.color}`}>
                      {process.percent} Saved
                    </span>
                    <strong>{process.cost}</strong>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-end mt-3">
              <Button
                onClick={() => setShowModal(true)}
                className="custom-view-btn"
              >
                View All →
              </Button>
            </div>
          </div>

          {/* Modal for full process list */}
          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            // size="md"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>All Process Cost Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ul className="list-unstyled mb-0">
                {processList.map((process, i) => (
                  <li
                    key={i}
                    className="d-flex justify-content-between align-items-center mb-2"
                  >
                    <span>{process.name}</span>
                    <div className="d-flex gap-2 align-items-center">
                      <span className={`small ${process.color}`}>
                        {process.percent} Saved
                      </span>
                      <strong>{process.cost}</strong>
                    </div>
                  </li>
                ))}
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>

      <Row className="mb-3">
        {/* <Col xs={6} className="h-[350px]">
          <div className="bg-white rounded-xl p-4 shadow-md h-100">
            <h4 className="h6 mb-3">Electricity & CO₂ Table</h4>
            <div style={{ maxHeight: "250px", overflowY: "auto" }}>
              <table className="table table-sm table-striped small">
                <thead>
                  <tr className="text-center">
                    <th>Process</th>
                    <th>Electricity (kWh)</th>
                    <th>CO₂ (kg)</th>
                  </tr>
                </thead>
                <tbody>
                  {chartData.map((item, index) => (
                    <tr key={index}>
                      <td className="text-center">{item.month}</td>
                      <td className="text-center">
                        {item["Electricity (kWh)"]}
                      </td>
                      <td className="text-center">
                        {item["CO2 Emissions (kg)"]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Col> */}
        <Col xs={12}>
          <div className="bg-white rounded-xl p-6 shadow-md h-[350px]">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="h6 text-gray-700">
                Electricity & CO₂ Impact Summary
              </h2>
              <div className="text-sm text-indigo-600 cursor-pointer hover:text-indigo-800 transition-colors">
                <select
                  onChange={(e) => setFilter(e.target.value)}
                  value={filter}
                >
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart
                data={filteredData}
                margin={{ top: 20, right: 30, left: 10, bottom: 50 }}
              >
                <XAxis
                  dataKey="month"
                  interval={0}
                  tick={{ fontSize: 12 }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Electricity (kWh)" fill="#3b82f6" barSize={20} />
                <Bar dataKey="CO2 Emissions (kg)" fill="#10b981" barSize={20} />
                <Line
                  type="monotone"
                  dataKey="Savings (₹)"
                  stroke="#f59e0b"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Col>
      </Row>

      {/* More Charts */}
      <Row xs={1} md={2} className="g-2">
        <Col xs={12} md={7}>
          <div className="bg-white rounded-xl p-4 shadow-md h-[440px]">
            <h4 className="h6 mb-3">Monthly Consumption</h4>
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart
                data={sampleData1}
                margin={{ top: 20, right: 30, left: 0, bottom: 50 }}
              >
                <CartesianGrid stroke="#555" strokeDasharray="3 3" />
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
                <Bar
                  dataKey="production"
                  name="production"
                  fill="#10b981"
                  barSize={20}
                />
                <Line
                  dataKey="current"
                  name="current"
                  type="monotone"
                  stroke="#fbbf24"
                  strokeWidth={2}
                  dot
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Col>

        <Col xs={12} md={5}>
          <div className="bg-white rounded-xl p-4 shadow-md h-[440px]">
            <h4 className="h6 mb-3 text-black">
              Energy Consumption by Process
            </h4>
            <ResponsiveContainer width="100%" height={360}>
              <BarChart
                data={processData}
                margin={{ top: 30, right: 30, left: 10, bottom: 50 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="name"
                  interval={0}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  tick={{ fontSize: 12 }}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="manual" name="Manual" barSize={30} fill="#6366F1">
                  <LabelList
                    dataKey="manual"
                    content={(props) => <CustomBar {...props} fill="#6366F1" />}
                  />
                </Bar>
                <Bar
                  dataKey="zauvijek"
                  name="Zauvijek"
                  barSize={30}
                  fill="#22C55E"
                >
                  <LabelList
                    dataKey="zauvijek"
                    content={(props) => <CustomBar {...props} fill="#22C55E" />}
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Col>
        <Col xs={12} md={12}>
          <div className="bg-white rounded-xl p-4 shadow-md h-[440px]">
            <h4 className="h6 mb-2">
              Electric Consumption and Rust Value by Vendor
            </h4>
            <p className="text-xs text-muted mb-4">
              Y-axis: Rust Value vs. Electricity Consumption (last 30 vendors)
            </p>
            <ResponsiveContainer width="100%" height={350}>
              <ComposedChart
                data={vendorData}
                margin={{ top: 20, right: 20, left: 0, bottom: 50 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="vendor"
                  interval={0}
                  tick={{ fontSize: 11 }}
                  angle={-45}
                  textAnchor="end"
                  height={90}
                />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="rust_value"
                  name="Rust Value"
                  fill="#f59e0b"
                  barSize={20}
                />
                <Line
                  type="monotone"
                  dataKey="electricity_consume"
                  name="Electricity Consume"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Col>

        <Col xs={12} md={12}>
          <ChartCard title="Energy & Cost Metrics">
            <BarChart
              data={[
                { name: "Energy (kWh)", value: 900 },
                { name: "Cost/Ton", value: 9000 },
                { name: "Monthly Loss", value: 25000 },
                { name: "Carbon Emissions (Tons)", value: 2.8 },
                { name: "Electricity Saved (₹)", value: 18337 },
                { name: "Total Savings (₹)", value: 42000 },
                { name: "Rejection (%)", value: 0.72 },
                { name: "Rejection (MT)", value: 6.6 },
                { name: "Total Production (Tons)", value: 920 },
                { name: "Unpoured Moulds", value: 810 },
                { name: "Total Core Sand (Tons)", value: 55 },
                { name: "No. of Moulds", value: 30717 },
                { name: "Total LMT", value: 1472 },
              ]}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4F46E5" barSize={40} />
            </BarChart>
          </ChartCard>
        </Col>

        <Col xs={12} md={12}>
          <div className="bg-white rounded-xl p-4 shadow-md h-100">
            <h4 className="h6 mb-3">Total Revenue per Process - Timeline</h4>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart
                data={revenueData}
                margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
              >
                <defs>
                  <linearGradient
                    id="colorPatternMaking"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="colorMoldPrep"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#818cf8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#818cf8" stopOpacity={0} />
                  </linearGradient>
                  {/* <linearGradient id="colorAssembly" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#c7d2fe" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#c7d2fe" stopOpacity={0} />
                </linearGradient> */}
                </defs>
                <XAxis dataKey="date" />
                <YAxis tickFormatter={(val) => `₹${val}`} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip formatter={(val) => `₹${val}`} />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="PatternMaking"
                  stroke="#6366f1"
                  fillOpacity={1}
                  fill="url(#colorPatternMaking)"
                />
                <Area
                  type="monotone"
                  dataKey="MoldPrep"
                  stroke="#818cf8"
                  fillOpacity={1}
                  fill="url(#colorMoldPrep)"
                />
                {/* <Area type="monotone" dataKey="Assembly" stroke="#c7d2fe" fillOpacity={1} fill="url(#colorAssembly)" /> */}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Col>

        <Col>
          <ChartCard title="Power vs Load">
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={sampleData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="manual"
                  barSize={30}
                  fill="#3B82F6"
                  name="Manual Load"
                />
                <Bar
                  dataKey="zauvijek"
                  barSize={30}
                  fill="#60A5FA"
                  name="Zauvijek Load"
                />
                <Line
                  type="monotone"
                  dataKey="zauvijek"
                  stroke="#F97316"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  name="Zauvijek Trend"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </ChartCard>
        </Col>

        <Col>
          <ChartCard title="Stacked Metrics">
            <BarChart data={sampleData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" stackId="a" fill="#6366F1" />
              <Bar dataKey="value2" stackId="a" fill="#10B981" />
            </BarChart>
          </ChartCard>
        </Col>
      </Row>
    </div>
  );
};

export default OverviewPage;
