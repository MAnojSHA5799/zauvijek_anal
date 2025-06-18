"use client";

import React, { useState } from "react";

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


const processCostData = {
  monthly: [
    { name: "Pattern Making", past: 487.5, current: 195 },
    { name: "Mold Preparation", past: 731.25, current: 325 },
    { name: "Assembly of Mold & Gating", past: 487.5, current: 195 },
    { name: "Metal Melting", past: 10968.75, current: 9587.5 },
    { name: "Tapping", past: 1000, current: 562.5 },
    { name: "Purification", past: 975, current: 568.75 },
    { name: "Pouring", past: 1137.5, current: 731.25 },
    { name: "Rough Casting", past: 528.13, current: 284.38 },
    { name: "Cooling", past: 365.63, current: 219.38 },
    { name: "Solidification", past: 146.25, current: 73.13 },
    { name: "Risers", past: 113.75, current: 56.88 },
    { name: "Shakeout", past: 73.13, current: 40.63 },
    { name: "Mold Breaking", past: 105.63, current: 56.88 },
    { name: "Fettling & Finishing", past: 178.75, current: 105.63 },
  ],
  yearly: [
    { name: "Pattern Making", past: 5850, current: 2340 },
    { name: "Mold Preparation", past: 8775, current: 3900 },
    { name: "Assembly of Mold & Gating", past: 5850, current: 2340 },
    { name: "Metal Melting", past: 131625, current: 115050 },
    { name: "Tapping", past: 12000, current: 6750 },
    { name: "Purification", past: 11700, current: 6825 },
    { name: "Pouring", past: 13650, current: 8775 },
    { name: "Rough Casting", past: 6337.5, current: 3412.5 },
    { name: "Cooling", past: 4387.5, current: 2632.5 },
    { name: "Solidification", past: 1755, current: 877.5 },
    { name: "Risers", past: 1365, current: 682.5 },
    { name: "Shakeout", past: 877.5, current: 487.5 },
    { name: "Mold Breaking", past: 1267.5, current: 682.5 },
    { name: "Fettling & Finishing", past: 2145, current: 1267.5 },
  ],
};

const pieData = [
  { name: 'Manual Process', value: 17308.75 },
  { name: 'Zauvijek Automated', value: 12457.88 }
];

const COLORS = [ "#10B981","#6366F1"];

// Comparison of electricity cost before and after Zauvijek (Bar/Line chart)
const sampleData = [
  { name: 'Jan', manual: 300, zauvijek: 200 },
  { name: 'Feb', manual: 280, zauvijek: 210 },
  { name: 'Mar', manual: 320, zauvijek: 230 },
  { name: 'Apr', manual: 340, zauvijek: 250 },
  { name: 'May', manual: 360, zauvijek: 270 },
  { name: 'Jun', manual: 380, zauvijek: 290 },
  { name: 'Jul', manual: 400, zauvijek: 310 }
];

const processData = [
  { name: 'Pattern Making', manual: 43.88, zauvijek: 17.55 },
  { name: 'Mold Preparation', manual: 65.81, zauvijek: 29.25 },
  { name: 'Assembly of Mold & Gating', manual: 43.88, zauvijek: 17.55 },
  { name: 'Metal Melting', manual: 987.19, zauvijek: 862.88 },
  { name: 'Tapping', manual: 90.00, zauvijek: 50.63 },
  { name: 'Purification', manual: 87.75, zauvijek: 51.19 },
  { name: 'Pouring', manual: 102.38, zauvijek: 65.81 },
  { name: 'Rough Casting', manual: 47.53, zauvijek: 25.59 },
  { name: 'Cooling', manual: 32.91, zauvijek: 19.74 },
  { name: 'Solidification', manual: 13.16, zauvijek: 6.58 },
  { name: 'Risers', manual: 10.24, zauvijek: 5.12 },
  { name: 'Shakeout', manual: 6.58, zauvijek: 3.66 },
  { name: 'Shot Blasting', manual: 9.51, zauvijek: 5.12 },
  { name: 'Fettling & Finishing', manual: 16.09, zauvijek: 9.51 }
];

const processList = [
  { name: 'Pattern Making', cost: '₹487.5', percent: '60%', color: 'text-success' },
  { name: 'Mold Preparation', cost: '₹731.25', percent: '55.56%', color: 'text-success' },
  { name: 'Assembly of Mold & Gating', cost: '₹487.5', percent: '60%', color: 'text-success' },
  { name: 'Metal Melting', cost: '₹10,968.75', percent: '12.6%', color: 'text-warning' },
  { name: 'Tapping', cost: '₹1,000', percent: '43.75%', color: 'text-success' },
  { name: 'Purification', cost: '₹975', percent: '41.67%', color: 'text-success' },
  { name: 'Pouring', cost: '₹1,137.5', percent: '35.71%', color: 'text-success' },
  { name: 'Rough Casting', cost: '₹528.13', percent: '46.16%', color: 'text-success' },
  { name: 'Cooling', cost: '₹365.63', percent: '40%', color: 'text-warning' },
  { name: 'Solidification', cost: '₹146.25', percent: '50%', color: 'text-warning' },
  { name: 'Risers', cost: '₹113.75', percent: '50%', color: 'text-success' },
  { name: 'Shakeout', cost: '₹73.13', percent: '44.4%', color: 'text-success' },
  { name: 'Mold Breaking (Shot Blasting)', cost: '₹105.63', percent: '46.1%', color: 'text-success' },
  { name: 'Fettling & Finishing', cost: '₹178.75', percent: '40.9%', color: 'text-success' }
];




const energyCostData = [
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
  { name: "Total LMT", value: 1472 }
];

const electricityData = [
  { name: 'Pattern Making', before: 3, after: 1.2 },
  { name: 'Mold Prep', before: 4.5, after: 2 },
  { name: 'Assembly', before: 3, after: 1.2 },
  { name: 'Metal Melting', before: 700, after: 600 },
  { name: 'Purification', before: 70, after: 40 },
  { name: 'Pouring', before: 80, after: 50 },
  { name: 'Rough Casting', before: 35, after: 20 },
  { name: 'Cooling', before: 25, after: 15 },
  { name: 'Solidification', before: 10, after: 5 },
  { name: 'Risers', before: 8, after: 4 },
  { name: 'Shakeout', before: 5, after: 3 },
  { name: 'Mold Breaking', before: 7, after: 4 },
  { name: 'Fettling', before: 12, after: 7 }
];


// Dashboard Summary Cards

// Detailed bar chart of processes (Before/After)
const chartData = [
  {
    name: 'Pattern Making',
    electricity: 487.5,
    co2: 43.88,
    savings: 292.5
  },
  {
    name: 'Mold Preparation',
    electricity: 731.25,
    co2: 65.81,
    savings: 406.25
  },
  {
    name: 'Assembly of Mold & Gating',
    electricity: 487.5,
    co2: 43.88,
    savings: 292.5
  },
  {
    name: 'Metal Melting',
    electricity: 10968.75,
    co2: 987.19,
    savings: 1381.25
  },
  {
    name: 'Tapping',
    electricity: 1000,
    co2: 90.0,
    savings: 437.5
  },
  {
    name: 'Purification',
    electricity: 975,
    co2: 87.75,
    savings: 406.25
  },
  {
    name: 'Pouring',
    electricity: 1137.5,
    co2: 102.38,
    savings: 406.25
  },
  {
    name: 'Rough Casting',
    electricity: 528.13,
    co2: 47.53,
    savings: 243.75
  },
  {
    name: 'Cooling',
    electricity: 365.63,
    co2: 32.91,
    savings: 146.25
  },
  {
    name: 'Solidification',
    electricity: 146.25,
    co2: 13.16,
    savings: 73.13
  },
  {
    name: 'Risers',
    electricity: 113.75,
    co2: 10.24,
    savings: 56.88
  },
  {
    name: 'Shakeout',
    electricity: 73.13,
    co2: 6.58,
    savings: 32.5
  },
  {
    name: 'Mold Breaking (Shot Blasting)',
    electricity: 105.63,
    co2: 9.51,
    savings: 48.75
  },
  {
    name: 'Fettling & Finishing',
    electricity: 178.75,
    co2: 16.09,
    savings: 73.13
  }
];

const sampleData1 = [
  { name: 'Jan', production: 2400, current: 400 },
  { name: 'Feb', production: 2210, current: 450 },
  { name: 'Mar', production: 2290, current: 470 },
  { name: 'Apr', production: 2000, current: 410 },
  { name: 'May', production: 2181, current: 420 },
  { name: 'Jun', production: 2500, current: 460 },
  { name: 'Jul', production: 2100, current: 430 },
  { name: 'Aug', production: 2400, current: 440 },
  { name: 'Sep', production: 2450, current: 470 },
  { name: 'Oct', production: 2600, current: 480 },
  { name: 'Nov', production: 2550, current: 460 },
  { name: 'Dec', production: 2700, current: 490 }
];

const vendorData = [
  { vendor: 'Vendor A', rust_value: 120, electricity_consume: 80 },
  { vendor: 'Vendor B', rust_value: 95, electricity_consume: 65 },
  { vendor: 'Vendor C', rust_value: 140, electricity_consume: 90 },
  { vendor: 'Vendor D', rust_value: 110, electricity_consume: 70 },
  { vendor: 'Vendor E', rust_value: 130, electricity_consume: 85 },
  { vendor: 'Vendor F', rust_value: 105, electricity_consume: 75 },
  { vendor: 'Vendor G', rust_value: 150, electricity_consume: 95 },
  { vendor: 'Vendor H', rust_value: 90, electricity_consume: 60 },
  { vendor: 'Vendor I', rust_value: 135, electricity_consume: 88 },
  { vendor: 'Vendor J', rust_value: 100, electricity_consume: 68 }
];

const revenueData = [
  { date: 'Jan', PatternMaking: 50000, MoldPrep: 30000 },
  { date: 'Feb', PatternMaking: 52000, MoldPrep: 31000 },
  { date: 'Mar', PatternMaking: 51000, MoldPrep: 32000 },
  { date: 'Apr', PatternMaking: 53000, MoldPrep: 34000 },
  { date: 'May', PatternMaking: 55000, MoldPrep: 36000 },
  { date: 'Jun', PatternMaking: 56000, MoldPrep: 37000 },
  { date: 'Jul', PatternMaking: 57000, MoldPrep: 38000 },
  { date: 'Aug', PatternMaking: 59000, MoldPrep: 39000 },
  { date: 'Sep', PatternMaking: 60000, MoldPrep: 40000 },
  { date: 'Oct', PatternMaking: 61000, MoldPrep: 41000 },
  { date: 'Nov', PatternMaking: 62000, MoldPrep: 42000 },
  { date: 'Dec', PatternMaking: 63000, MoldPrep: 43000 }
];

const OverviewPage = () => {
  const [filter, setFilter] = useState("monthly");
  const [showModal, setShowModal] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const visibleProcesses = processList.slice(0, 7); // show only first 8 in card
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
    <div className="min-h-screen bg-gray-100 p-6 mb-5">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-3">
        {/* Total Processes */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">Total Processes</div>
          <div className="text-sm">14</div>
        </div>

        {/* Total Expense Without Zauvijek */}
        <div className="bg-gradient-to-r from-gray-700 to-gray-500 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">Without Zauvijek</div>
          <div className="text-sm">₹17,298.77</div>
        </div>

        {/* Total Expense With Zauvijek */}
        <div className="bg-gradient-to-r from-sky-700 to-sky-500 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">With Zauvijek</div>
          <div className="text-sm">₹13,001.91</div>
        </div>

        {/* Electricity Saved */}
        {/* <div className="bg-gradient-to-r from-green-600 to-green-500 p-3 rounded-xl text-white shadow">
    <div className="text-xl font-semibold">Electricity Saved</div>
    <div className="text-sm">₹4,850.88</div>
  </div> */}

        {/* Avg. Cost Reduction */}
        <div className="bg-gradient-to-r from-rose-600 to-red-500 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">Avg. Cost Reduction</div>
          <div className="text-sm">~28%</div>
        </div>

        {/* Carbon Reduced */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">CO₂ Reduced</div>
          <div className="text-sm">524.34 kg</div>
        </div>

        {/* Total Savings */}
        <div className="bg-gradient-to-r from-yellow-500 to-orange-400 p-3 rounded-xl text-white shadow">
          <div className="text-xl font-semibold">Total Savings</div>
          <div className="text-sm">₹4,296.89</div>
        </div>
      </div>

      {/* Users Overview + Device Pie */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-3">
        <div className="bg-white rounded-xl p-4 shadow-md col-span-2 h-[400px]">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-semibold text-gray-700">
          Process Cost Comparison
        </h3>
        <div className="flex gap-3 items-center">
          <select
            className="text-sm border rounded-md px-2 py-1 focus:outline-none focus:ring focus:border-blue-300"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
          <div className="text-sm text-indigo-600 cursor-pointer hover:text-indigo-800">
            View Full Report →
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={processCostData[filter as 'monthly' | 'yearly']}>

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

          <XAxis dataKey="name" tick={{ fontSize: 11 }} interval={0} angle={-30} textAnchor="end" height={60} />
          <YAxis tick={{ fontSize: 11 }} />
          <Tooltip formatter={(value) => [`₹${value}`, 'Cost']} />
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

        <div className="bg-white rounded-2xl p-6 shadow-lg h-[400px] ">
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
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [`₹${value}`, name]}
              contentStyle={{ borderRadius: "10px", fontSize: "13px" }}
            />
          </PieChart>
        </ResponsiveContainer>

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
      <div className="md:col-span-2">
        <div className="bg-white rounded-xl p-6 shadow-md h-[350px]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold text-gray-700">
              Process-Wise Electricity Cost
            </h2>
            <div className="text-sm text-indigo-600 cursor-pointer hover:text-indigo-800">
              View report →
            </div>
          </div>

          <div className="flex gap-2 mb-4">
            <input
              type="date"
              className="form-control form-control-sm border px-2 py-1 rounded-md"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              type="date"
              className="form-control form-control-sm border px-2 py-1 rounded-md"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <select
              className="text-sm border rounded-md px-2 py-1 focus:outline-none focus:ring focus:border-blue-300"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>

          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={processCostData[filter as 'monthly' | 'yearly']}>
              <XAxis dataKey="name" tick={{ fontSize: 11 }} interval={0} angle={-30} textAnchor="end" height={60} />
              <YAxis tickFormatter={(v) => `₹${v}`} tick={{ fontSize: 11 }} />
              <Tooltip formatter={(value) => `₹${value}`} labelFormatter={(label) => `Process: ${label}`} />
              <Legend verticalAlign="top" height={20} />

              <Bar dataKey="past" fill="#ef4444" name="Manual Cost" />
            </BarChart>
          </ResponsiveContainer>
        </div>
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
                    {/* <span className={`small ${process.color}`}>
                      {process.percent} Saved
                    </span> */}
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
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm font-semibold text-gray-700">
          Electricity & CO₂ Impact Summary
        </h2>
        {/* <div className="text-sm text-indigo-600 cursor-pointer hover:text-indigo-800 transition-colors">
          <select
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            className="border rounded px-2 py-1 text-sm"
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div> */}
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 10, bottom: 50 }}
        >
          <XAxis
            dataKey="name"
            interval={0}
            tick={{ fontSize: 10 }}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis />
          <Tooltip formatter={(value) => `₹${value}`} />
          <Legend />
          <Bar dataKey="electricity" fill="#3b82f6" name="Electricity (₹)" barSize={18} />
          <Bar dataKey="co2" fill="#10b981" name="CO₂ Emissions (kg)" barSize={18} />
          <Line
            type="monotone"
            dataKey="savings"
            stroke="#f59e0b"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Savings (₹)"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
        </Col>
      </Row>

      {/* More Charts */}
      <Row xs={1} md={2} className="g-2">
        <Col xs={12} md={12}>
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
          <Bar
            dataKey="production"
            name="Production"
            fill="#10b981"
            barSize={20}
          />
          <Line
            dataKey="current"
            name="Current"
            type="monotone"
            stroke="#fbbf24"
            strokeWidth={2}
            dot
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
        </Col>

        <Col xs={12} md={6}>
          <div className="bg-white rounded-xl p-4 shadow-md h-[420px]">
      <h4 className="h6 mb-3 text-black">Energy Consumption by Process</h4>
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
          <Bar dataKey="zauvijek" name="Zauvijek" barSize={30} fill="#22C55E">
            <LabelList
              dataKey="zauvijek"
              content={(props) => <CustomBar {...props} fill="#22C55E" />}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="bg-white rounded-xl p-4 shadow-md h-[420px]">
      <h4 className="h6 mb-2">Electric Consumption and Rust Value by Vendor</h4>
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

        <Col xs={12} md={6}>
          <div className="bg-white rounded-xl p-4 shadow-md h-[420px]">
      <h4 className="h6 mb-2">Energy & Cost Metrics</h4>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={energyCostData} margin={{ top: 20, right: 30, left: 0, bottom: 80 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            interval={0}
            angle={-45}
            textAnchor="end"
            height={100}
            tick={{ fontSize: 11 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#4F46E5" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
        </Col>

        <Col xs={12} md={6}>
         <div className="bg-white rounded-xl p-4 shadow-md h-[420px]">
      <h4 className="h6 mb-3">Total Revenue per Process - Timeline</h4>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={revenueData}
          margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
        >
          <defs>
            <linearGradient id="colorPatternMaking" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorMoldPrep" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#818cf8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#818cf8" stopOpacity={0} />
            </linearGradient>
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
        </AreaChart>
      </ResponsiveContainer>
    </div>
        </Col>

        <Col>
          <div className="bg-white rounded-xl p-4 shadow-md h-[420px]">
      <h4 className="h6 mb-3">Power vs Load</h4>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={sampleData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
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
    </div>
        </Col>

        <Col>
          <div className="bg-white rounded-xl p-4 shadow-md h-[420px]">
      <h4 className="h6 mb-3">Electricity Consumption: Before vs After Zauvijek</h4>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={electricityData} margin={{ top: 20, right: 30, left: 0, bottom: 80 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={100}
          />
          <YAxis
            label={{
              value: 'kWh or ₹ (approx)',
              angle: -90,
              position: 'insideLeft'
            }}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="before" name="Before Zauvijek" fill="#F97316" />
          <Bar dataKey="after" name="With Zauvijek" fill="#10B981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
        </Col>
      </Row>
    </div>
  );
};

export default OverviewPage;
