"use client";

import React from "react";
import {
  ResponsiveContainer,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
} from "recharts";
import { FaIndustry, FaRupeeSign, FaChartLine, FaBolt } from "react-icons/fa";
import { MdSavings, MdCalendarToday } from "react-icons/md";
import CountUp from "react-countup";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const summaryData = [
  {
    title: "Processes Name",
    value: "Mold Preparation",
    isCurrency: false,
    colors: "from-blue-600 to-blue-500",
    icon: <FaIndustry className="text-2xl" />,
  },
  {
    title: "Without Zauvijek",
    value: 731.25,
    isCurrency: true,
    colors: "from-blue-700 to-blue-500",
    icon: <FaRupeeSign className="text-2xl" />,
  },
  {
    title: "With Zauvijek",
    value: 325.0,
    isCurrency: true,
    colors: "from-sky-700 to-sky-500",
    icon: <FaRupeeSign className="text-2xl" />,
  },
  {
    title: "Avg. Cost Reduction",
    value: 55.56,
    suffix: "%",
    isCurrency: false,
    decimals: 2,
    colors: "from-rose-600 to-red-500",
    icon: <FaChartLine className="text-2xl" />,
  },
  {
    title: "Electricity Saved",
    value: 36.56,
    suffix: " kWh",
    isCurrency: false,
    decimals: 2,
    colors: "from-emerald-600 to-emerald-400",
    icon: <FaBolt className="text-2xl" />,
  },
  {
    title: "Total Saving (Per Day)",
    value: 406.25,
    isCurrency: true,
    decimals: 2,
    colors: "from-yellow-500 to-orange-400",
    icon: <MdSavings className="text-2xl" />,
  },
  {
    title: "Monthly Saving",
    value: 12187.5,
    isCurrency: true,
    colors: "from-indigo-600 to-indigo-400",
    icon: <MdCalendarToday className="text-2xl" />,
  },
  {
    title: "Yearly Saving",
    value: 148281.25,
    isCurrency: true,
    colors: "from-teal-600 to-teal-400",
    icon: <MdCalendarToday className="text-2xl" />,
  },
];

const moldPreparationData = {
  processName: "Mold Preparation",
  cost: {
    without: 731.25,
    with: 325.0,
    saving: 406.25,
    monthlySaving: 12187.5,
    yearlySaving: 148281.25,
    reductionPercent: 55.56,
  },
  energy: {
    before: 65.81,
    after: 29.25,
    saved: 36.56,
    totalConsumption: 57113,
  },
};

const monthlyTrendData = [
  { name: "Jan", Manual: 731.25, Zauvijek: 325.0, Saving: 406.25 },
  { name: "Feb", Manual: 731.25, Zauvijek: 325.0, Saving: 406.25 },
  { name: "Mar", Manual: 731.25, Zauvijek: 325.0, Saving: 406.25 },
  { name: "Apr", Manual: 731.25, Zauvijek: 325.0, Saving: 406.25 },
  { name: "May", Manual: 731.25, Zauvijek: 325.0, Saving: 406.25 },
  { name: "Jun", Manual: 731.25, Zauvijek: 325.0, Saving: 406.25 },
  { name: "Jul", Manual: 731.25, Zauvijek: 325.0, Saving: 406.25 },
  { name: "Aug", Manual: 731.25, Zauvijek: 325.0, Saving: 406.25 },
  { name: "Sep", Manual: 731.25, Zauvijek: 325.0, Saving: 406.25 },
  { name: "Oct", Manual: 731.25, Zauvijek: 325.0, Saving: 406.25 },
  { name: "Nov", Manual: 731.25, Zauvijek: 325.0, Saving: 406.25 },
  { name: "Dec", Manual: 731.25, Zauvijek: 325.0, Saving: 406.25 },
];

const options: ApexOptions = {
  chart: {
    height: 350,
    type: "line",
    toolbar: { show: false },
    zoom: { enabled: false },
    foreColor: "#ffffff", // Makes all default text white
  },
  dataLabels: { enabled: false },
  stroke: {
    width: [5, 7, 5],
    curve: "straight",
    dashArray: [0, 8, 5],
  },
  title: {
    text: "Mold Preparation Statistics",
    align: "left",
    style: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#22c55e",
    },
  },
  legend: {
    tooltipHoverFormatter: function (
      val: string,
      opts: {
        w: { globals: { series: number[][] } };
        seriesIndex: number;
        dataPointIndex: number;
      }
    ) {
      return (
        val +
        " - <strong>" +
        opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
        "</strong>"
      );
    },
  },
  markers: {
    size: 0,
    hover: {
      sizeOffset: 6,
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    labels: {
      style: {
        fontSize: "12px",
        colors: [
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
          "#ffffff",
        ], // ✅ Correct spelling and format
      },
    },

    axisBorder: {
      color: "#ffffff",
    },
    axisTicks: {
      color: "#ffffff",
    },
  },

  yaxis: {
    labels: {
      style: {
        fontSize: "12px",
        colors: ["#ffffff"],
      },
    },
  },
  tooltip: {
    theme: "dark",
    y: [
      {
        formatter: (val: number) => `${val} ₹`,
      },
      {
        formatter: (val: number) => `${val} ₹`,
      },
      {
        formatter: (val: number) => `${val} ₹`,
      },
    ],
  },

  grid: {
    borderColor: "#374151",
    strokeDashArray: 0,
  },
};

// Using same monthly values repeated (based on your table)
const series = [
  {
    name: "Without Zauvijek",
    data: Array(12).fill(731.25), // ₹ Without Zauvijek
  },
  {
    name: "With Zauvijek",
    data: Array(12).fill(325.0), // ₹ With Zauvijek
  },
  {
    name: "Saving",
    data: Array(12).fill(406.25), // ₹ Saving
  },
];

export default function MoldPreparationCharts() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f1422] text-black dark:text-white p-6 mb-5 transition-colors duration-300">
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
                {typeof item.value === "number" ? (
                  <>
                    {item.isCurrency && "₹"}
                    <CountUp
                      end={item.value}
                      duration={1.8}
                      decimals={item.decimals || 0}
                      separator=","
                      suffix={item.suffix || ""}
                    />
                  </>
                ) : (
                  item.value
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-7 md:grid-rows-1 gap-8 mb-8">
        {/* Monthly Performance Trends */}
        <div className="md:col-span-5 bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Monthly Performance Trends (Jan - Dec)
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart
              data={monthlyTrendData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              {/* Remove inner grid lines */}
              <CartesianGrid vertical={false} horizontal={false} />

              {/* Axis lines with white tick text */}
              <XAxis
                dataKey="name"
                axisLine={true}
                tickLine={true}
                tick={{ fill: "#ffffff", fontSize: 12 }}
              />
              <YAxis
                axisLine={true}
                tickLine={true}
                tick={{ fill: "#ffffff", fontSize: 12 }}
              />

              <Tooltip />
              <Legend />

              <Bar dataKey="Manual" fill="#3722f5" name="Manual Process" />
              <Bar dataKey="Zauvijek" fill="#3B82F6" name="With Zauvijek" />
              <Line
                type="monotone"
                dataKey="Saving"
                stroke="#10B981"
                name="Savings"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart for Energy Comparison */}
        <div className="md:col-span-2 bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Energy Comparison (kWh)
          </h2>
          <form className="space-y-4 mb-6 text-sm text-gray-800 dark:text-gray-200">
            <div className="flex flex-col">
              <label className="mb-1" htmlFor="before">
                ⚡ Before Zauvijek
              </label>
              <input
                id="before"
                type="number"
                defaultValue={moldPreparationData.energy.before}
                className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1" htmlFor="after">
                ⚡ After Zauvijek
              </label>
              <input
                id="after"
                type="number"
                defaultValue={moldPreparationData.energy.after}
                className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1" htmlFor="saved">
                ✅ Energy Saved
              </label>
              <input
                id="saved"
                type="number"
                defaultValue={moldPreparationData.energy.saved}
                className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1" htmlFor="monthly">
                📆 Monthly Consumption
              </label>
              <input
                id="monthly"
                type="number"
                defaultValue={moldPreparationData.energy.totalConsumption}
                className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full dark:bg-[#13124b] text-white py-2 rounded-lg hover:bg-[#1c2331]-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="md:col-span-5 bg-white dark:bg-[#1c2331] p-6 mb-5 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          Monthly Performance Trends (Jan - Dec)
        </h2>
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
}
