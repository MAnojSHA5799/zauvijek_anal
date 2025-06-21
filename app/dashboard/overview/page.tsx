"use client";

import React from "react";
import {
  Line,
  BarChart,
  LabelList,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Cell,
} from "recharts";
import CountUp from "react-countup";
import {
  FaRupeeSign,
  FaChartLine,
  FaIndustry,
  FaLeaf,
  FaCalendarAlt,
} from "react-icons/fa";
import { MdSavings } from "react-icons/md";
import { Doughnut } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend as ChartLegend,
} from "chart.js";
ChartJS.register(ArcElement, ChartTooltip, ChartLegend);

const summaryData = [
  {
    title: "Total Processes",
    value: 17,
    isCurrency: false,
    colors: "from-blue-600 to-blue-500",
    icon: <FaIndustry className="text-2xl" />,
  },
  {
    title: "Without Zauvijek",
    value: 2028423.77,
    isCurrency: true,
    colors: "from-blue-700 to-blue-500",
    icon: <FaRupeeSign className="text-2xl" />,
  },
  {
    title: "With Zauvijek",
    value: 1980849.41,
    isCurrency: true,
    colors: "from-sky-700 to-sky-500",
    icon: <FaRupeeSign className="text-2xl" />,
  },
  {
    title: "Avg. Cost Reduction",
    value: 41.58,
    suffix: "%",
    isCurrency: false,
    decimals: 2,
    colors: "from-rose-600 to-red-500",
    icon: <FaChartLine className="text-2xl" />,
  },
  {
    title: "CO₂ Reduced",
    value: 54858.75,
    suffix: " kWh",
    isCurrency: false,
    decimals: 2,
    colors: "from-emerald-600 to-emerald-400",
    icon: <FaLeaf className="text-2xl" />,
  },
  {
    title: "Total Savings",
    value: 49536.38,
    isCurrency: true,
    decimals: 2,
    colors: "from-yellow-500 to-orange-400",
    icon: <MdSavings className="text-2xl" />,
  },
  {
    title: "Monthly Saving",
    value: 1484140.0,
    isCurrency: true,
    colors: "from-indigo-600 to-indigo-400",
    icon: <FaCalendarAlt className="text-2xl" />,
  },
  {
    title: "Yearly Saving",
    value: 18052701.25,
    isCurrency: true,
    colors: "from-teal-600 to-teal-400",
    icon: <FaCalendarAlt className="text-2xl" />,
  },
];
const componentChart = {
  labels: [
    "Pattern Making : 60.00%",
    "Mold Preparation : 55.56%",
    "Assembly of Mold & Gating : 60.00%",
    "Metal Melting : 12.60%",
    "Tapping : 43.75%",
    // "Purification : 41.67%",
    // "Pouring : 35.71%",
    // "Rough Casting : 46.16%",
    // "Cooling : 40.00%",
    // "Solidification : 50.00%",
    // "Risers : 50.00%",
    // "Shakeout : 44.40%",
    // "Mold Breaking : 46.10%",
    // "Fettling : 40.90%",
    // "Scrap Opt. : 2.00%",
    // "Heat Process : 40.00%",
    // "Vibration : 38.00%",
  ],
  datasets: [
    {
      data: [60, 55.56, 60, 12.6, 43.75],
      backgroundColor: [
       "#4C7073", // ✅ Refined Teal Blue
  "#D3823C", // ✅ Burnt Orange
  "#C9B693", // Updated Warm Beige (richer tone)
  "#3B4C54", // Darker Slate Blue for contrast
  "#F0EDE5", // Softer Light Sand for better readability
      ],
      borderWidth: 1,
      cutout: "50%",
    },
  ],
};





const savingsData = [
  { name: "Pattern Making", saving: 292.5 },
  { name: "Mold Prep", saving: 406.25 },
  { name: "Assembly", saving: 292.5 },
  // { name: "Metal Melting", saving: 1381.25 },
  { name: "Tapping", saving: 437.5 },
  { name: "Purification", saving: 406.25 },
  { name: "Pouring", saving: 406.25 },
  { name: "Rough Casting", saving: 243.75 },
  // { name: "Cooling", saving: 146.25 },
  // { name: "Solidification", saving: 73.13 },
  // { name: "Risers", saving: 56.88 },
  // { name: "Shakeout", saving: 32.5 },
  // { name: "Shot Blasting", saving: 48.75 },
  // { name: "Finishing", saving: 73.13 },
  // { name: "Scrap Opt.", saving: 40000 },
  // { name: "Heat Process", saving: 5000 },
  // { name: "Vibration", saving: 237.5 },
];

const colors = [
   "#34B58A", // Teal Blue
        "#34B58A", // Burnt Orange
        "#34B58A", // Warm Beige
        "#34B58A", // Slate Blue
        "#34B58A", // Light Sand (Optional)
  "#34B58A", "#34B58A", "#f97316", "#ef4444", "#f43f5e",
  "#e11d48", "#a855f7", "#6366f1", "#0f172a", "#14b8a6",
  "#8b5cf6", "#ec4899",
];

const chartOptions: ChartOptions<"doughnut"> = {
  plugins: {
    legend: {
      position: "right", // ✅ This is now correct, matching allowed values
      labels: {
        color: "#fff",
        font: {
          size: 12,
        },
      },
    },
    tooltip: {
      callbacks: {
        label: (ctx) => `${ctx.label}`,
      },
    },
  },
  maintainAspectRatio: false,
};

const allProcessData = [
  { name: "Pattern Making", without: 487.5, with: 195, saving: 292.5 },
  { name: "Mold Preparation", without: 731.25, with: 325, saving: 406.25 },
  { name: "Assembly", without: 487.5, with: 195, saving: 292.5 },
  { name: "Metal Melting", without: 10968.75, with: 9587.5, saving: 1381.25 },
  { name: "Tapping", without: 1000, with: 562.5, saving: 437.5 },
  { name: "Purification", without: 975, with: 568.75, saving: 406.25 },
  { name: "Pouring", without: 1137.5, with: 731.25, saving: 406.25 },
  { name: "Rough Casting", without: 528.13, with: 284.38, saving: 243.75 },
  { name: "Cooling", without: 365.63, with: 219.38, saving: 146.25 },
  { name: "Solidification", without: 146.25, with: 73.13, saving: 73.13 },
  { name: "Risers", without: 113.75, with: 56.88, saving: 56.88 },
  { name: "Shakeout", without: 73.13, with: 40.63, saving: 32.5 },
  { name: "Mold Breaking", without: 105.63, with: 56.88, saving: 48.75 },
  { name: "Fettling", without: 178.75, with: 105.63, saving: 73.13 },
  { name: "Scrap Opt.", without: 2000000, with: 1960000, saving: 40000 },
  { name: "Heat Process", without: 12500, with: 7500, saving: 5000 },
  // { name: "Vibration", without: 625, with: 387.5, saving: 237.5 },
];

type ProcessData = {
  name: string;
  without: number;
  with: number;
  saving: number;
};

const chunkData = (data: ProcessData[], chunkSize: number): ProcessData[][] => {
  const chunks: ProcessData[][] = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    chunks.push(data.slice(i, i + chunkSize));
  }
  return chunks;
};

const OverviewPage = () => {
  const chartChunks = chunkData(allProcessData, 8);
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f1422] text-black dark:text-white p-6 mb-5 transition-colors duration-300">
      <div className="flex flex-wrap gap-3 items-center mb-3">
        {" "}
        <label className="flex items-center space-x-2 text-md">
          {" "}
          <span className="font-semibold">Filter By</span>{" "}
        </label>{" "}
        <select className="px-3 py-2 rounded border text-sm w-32 dark:bg-[#0f1422] dark:border-gray-700">
          {" "}
          <option>Line 1</option> <option>Line 2</option>{" "}
        </select>
        <select className="px-3 py-2 rounded border text-sm w-32 dark:bg-[#0f1422] dark:border-gray-700">
          <option>Date</option>
        </select>
        <select className="px-3 py-2 rounded border text-sm w-32 dark:bg-[#0f1422] dark:border-gray-700">
          <option>All</option>
          <option>Heavy</option>
          <option>Light</option>
        </select>
        <input
          type="date"
          className="px-3 py-2 rounded border text-sm w-32 dark:bg-[#0f1422] dark:border-gray-700"
          defaultValue="2023-04-28"
        />
        <label className="flex items-center space-x-2 text-md">
          <span className="font-semibold">From</span>
        </label>
        <input
          type="date"
          className="px-3 py-2 rounded border text-sm w-32 dark:bg-[#0f1422] dark:border-gray-700"
          defaultValue="2023-05-11"
        />
        <label className="flex items-center space-x-2 text-sm w-20">
          <input type="checkbox" />
          <span>Prod Qty</span>
        </label>
        <button className="bg-[#2C5282] hover:bg-[#2B6CB0] text-white text-sm px-4 py-2 rounded flex items-center gap-1">
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

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
        {summaryData.map((item, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-r ${item.colors} p-4 rounded-xl text-white shadow flex gap-3 items-start sm:items-center`}
          >
            {item.icon}
            <div>
              <div className="text-base font-semibold">{item.title}</div>
              <div className="text-sm sm:text-base">
                {item.isCurrency && "₹"}
                <CountUp
                  end={item.value}
                  duration={1.8}
                  decimals={item.decimals || 0}
                  separator=","
                  suffix={item.suffix || ""}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 mb-4">
        <div className="flex flex-col gap-3">
          {chartChunks.map((chunk, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-1 gap-3">
              {/* Bar Chart */}
              <div className="h-[400px] bg-white dark:bg-[#0f1422] p-4 rounded shadow hover:shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium mb-2">Cost Comparison ₹</h3>
                <ResponsiveContainer width="100%" height="95%">
                  <BarChart data={chunk}>
                    <CartesianGrid stroke="#444" strokeDasharray="0" />
                    <XAxis
                      dataKey="name"
                      tick={{ fill: "#fff", fontSize: 10 }}
                      angle={-30}
                      textAnchor="end"
                      height={60}
                      axisLine={true}  
                    />
                    <YAxis
                      tick={{ fill: "#fff", fontSize: 12 }}
                      axisLine={true}   // ✅ hides Y axis line
                      tickLine={false} // ✅ hides tick lines on Y axis
                    />
                    {/* <Tooltip formatter={(value) => [`₹${value}`, "Cost"]} /> */}
                    <Legend />
                    <Bar dataKey="without" fill="#34B58A" name="Manual">
  <LabelList
    dataKey="without"
    position="top"
    fill="#F9FAFB" // Light text on dark bg
    fontSize={11}
  />
</Bar>

<Bar dataKey="with" fill="#2C5282" name="Zauvijek">
  <LabelList
    dataKey="with"
    position="top"
    fill="#F9FAFB"
    fontSize={11}
  />
</Bar>

                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Line Chart */}
              <div className="h-[400px] bg-white dark:bg-[#0f1422] p-4 rounded shadow hover:shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium mb-2">Savings</h3>
                <ResponsiveContainer width="100%" height="95%">
                  <LineChart
                    data={chunk}
                    margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
                  >
                    <CartesianGrid stroke="#444" strokeDasharray="0" />
                    <XAxis
                      dataKey="name"
                      tick={{ fill: "#fff", fontSize: 10 }}
                      angle={-30}
                      textAnchor="end"
                      height={60}
                      axisLine={true}  
                    />
                    <YAxis tick={{ fill: "#fff", fontSize: 12 }} axisLine={true}   />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1f2937",
                        borderColor: "#374151",
                      }}
                      labelStyle={{ color: "#fff" }}
                      itemStyle={{ color: "#fff" }}
                      formatter={(value) => [`₹${value}`, "Cost"]}
                    />
                    <Legend wrapperStyle={{ color: "#fff" }} />
                    <Line
                      type="monotone"
                      dataKey="without"
                      stroke="#0f172a"
                      name="Manual"
                    />
                    <Line
                      type="monotone"
                      dataKey="with"
                      stroke="#22c55e"
                      name="Zauvijek"
                    />
                    <Line
                      type="monotone"
                      dataKey="saving"
                      stroke="#f59e0b"
                      name="Saving"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white dark:bg-[#0f1422] p-4 rounded shadow border h-[450px]">
          <h3 className="text-md font-semibold mb-2">
            Rejection Distribution By Component
          </h3>
          <Doughnut data={componentChart} options={chartOptions} />
        </div>

        <div className="bg-white dark:bg-[#0f1422] p-4 rounded shadow border h-[450px]">
          <h3 className="text-md font-semibold mb-2">
            Cost Savings Distribution
          </h3>
 <ResponsiveContainer width="100%" height="90%">
  <BarChart data={savingsData}>
    {/* CartesianGrid removed to hide inner lines */}
    
    <XAxis
      dataKey="name"
      tick={{ fontSize: 10 }}
      angle={-30}
      textAnchor="end"
      height={70}
      axisLine={true}     // Show X-axis line
      tickLine={true}     // Show X-axis tick marks
    />
    
    <YAxis
      tick={{ fontSize: 12 }}
      axisLine={true}     // Show Y-axis line
      tickLine={true}     // Show Y-axis tick marks
    />
    
    <Tooltip formatter={(value: number) => `₹${value.toLocaleString()}`} />
    <Legend />
    
    <Bar dataKey="saving" name="₹ Saving (Per Day)">
      <LabelList
  dataKey="saving"
  position="top"
  formatter={(value: number) => `₹${value}`}
  fontSize={10}
/>

      {savingsData.map((_, index) => (
        <Cell key={index} fill={colors[index % colors.length]} />
      ))}
    </Bar>
  </BarChart>
</ResponsiveContainer>


        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
