"use client";

import React from "react";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";
import { FaIndustry, FaRupeeSign, FaChartLine, FaBolt } from "react-icons/fa";
import { MdSavings, MdCalendarToday } from "react-icons/md";
import CountUp from "react-countup";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const summaryData = [
  {
    title: "Processes Name",
    value: "Assembly of Mold & Gating",
    isCurrency: false,
    colors: "from-blue-600 to-blue-500",
    icon: <FaIndustry className="text-2xl" />,
  },
  {
    title: "Without Zauvijek",
    value: 487.5,
    isCurrency: true,
    colors: "from-blue-700 to-blue-500",
    icon: <FaRupeeSign className="text-2xl" />,
  },
  {
    title: "With Zauvijek",
    value: 195.0,
    isCurrency: true,
    colors: "from-sky-700 to-sky-500",
    icon: <FaRupeeSign className="text-2xl" />,
  },
  {
    title: "Avg. Cost Reduction",
    value: 60.0,
    suffix: "%",
    isCurrency: false,
    decimals: 2,
    colors: "from-rose-600 to-red-500",
    icon: <FaChartLine className="text-2xl" />,
  },
  {
    title: "Electricity Saved",
    value: 26.33,
    suffix: " kWh",
    isCurrency: false,
    decimals: 2,
    colors: "from-emerald-600 to-emerald-400",
    icon: <FaBolt className="text-2xl" />,
  },
  {
    title: "Total Saving (Per Day)",
    value: 292.5,
    isCurrency: true,
    decimals: 2,
    colors: "from-yellow-500 to-orange-400",
    icon: <MdSavings className="text-2xl" />,
  },
  {
    title: "Monthly Saving",
    value: 8775.0,
    isCurrency: true,
    colors: "from-indigo-600 to-indigo-400",
    icon: <MdCalendarToday className="text-2xl" />,
  },
  {
    title: "Yearly Saving",
    value: 106762.5,
    isCurrency: true,
    colors: "from-teal-600 to-teal-400",
    icon: <MdCalendarToday className="text-2xl" />,
  },
];

const monthlyTrendData = [
  { name: "Jan", Manual: 487.5, Zauvijek: 195.0, Saving: 292.5 },
  { name: "Feb", Manual: 487.5, Zauvijek: 195.0, Saving: 292.5 },
  { name: "Mar", Manual: 487.5, Zauvijek: 195.0, Saving: 292.5 },
  { name: "Apr", Manual: 487.5, Zauvijek: 195.0, Saving: 292.5 },
  { name: "May", Manual: 487.5, Zauvijek: 195.0, Saving: 292.5 },
  { name: "Jun", Manual: 487.5, Zauvijek: 195.0, Saving: 292.5 },
  { name: "Jul", Manual: 487.5, Zauvijek: 195.0, Saving: 292.5 },
  { name: "Aug", Manual: 487.5, Zauvijek: 195.0, Saving: 292.5 },
  { name: "Sep", Manual: 487.5, Zauvijek: 195.0, Saving: 292.5 },
  { name: "Oct", Manual: 487.5, Zauvijek: 195.0, Saving: 292.5 },
  { name: "Nov", Manual: 487.5, Zauvijek: 195.0, Saving: 292.5 },
  { name: "Dec", Manual: 487.5, Zauvijek: 195.0, Saving: 292.5 },
];

const pieChartData = [
  { name: "Before Zauvijek", value: 43.88 },
  { name: "With Zauvijek", value: 17.55 },
];

const options: ApexOptions = {
  series: [
    {
      name: "Cost Comparison",
      data: [487.5, 195.0, 292.5, 8775.0, 106762.5, 60.0, 43.88, 17.55, 26.33, 38091, 457095],
    },
  ],
  chart: {
    height: 350,
    type: "bar",
    foreColor: "#ffffff",
    toolbar: {
      show: false
    },
    animations: {
      enabled: true
    }
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      dataLabels: {
        position: "top",
      },
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + "";
    },
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#ffffff"],
    },
  },
  tooltip: {
    enabled: true,
    theme: "dark"
  },
  xaxis: {
    categories: [
      "₹ Without Zauvijek",
      "₹ With Zauvijek",
      "₹ Saving",
      "Monthly Saving",
      "Yearly Saving",
      "Reduction (%)",
      "Total kWh",
      "kWh After",
      "kWh Saving",
      "Monthly kWh",
      "Yearly kWh",
    ],
    position: "bottom",
    axisBorder: { show: false },
    axisTicks: { show: false },
    tooltip: { enabled: true },
    labels: {
      style: {
        fontSize: "12px",
        colors: Array(11).fill("#ffffff"),
      },
    },
  },
  yaxis: {
    axisBorder: { show: false },
    axisTicks: { show: false },
    labels: {
      show: true,
      formatter: function (val) {
        return val + "";
      },
      style: {
        colors: ["#ffffff"],
      },
    },
  },
  title: {
    text: "Assembly of Mold & Gating - KPI Overview",
    floating: true,
    offsetY: 330,
    align: "center",
    style: {
      color: "#ffffff",
    },
  },
};

const series = options.series;
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
        <div className="md:col-span-5 bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Monthly Performance Trends (Jan - Dec)
          </h2>
         <ResponsiveContainer width="100%" height={350}>
  <LineChart
    data={monthlyTrendData}
    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
  >
    <CartesianGrid vertical={false} horizontal={false} />

    <XAxis
      dataKey="name"
      axisLine={{ stroke: "#ffffff" }}
      tickLine={{ stroke: "#ffffff" }}
      tick={{ fill: "#ffffff", fontSize: 12 }}
    />
    <YAxis
      axisLine={{ stroke: "#ffffff" }}
      tickLine={{ stroke: "#ffffff" }}
      tick={{ fill: "#ffffff", fontSize: 12 }}
    />

    <Tooltip
      contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: 8 }}
      labelStyle={{ color: "#ffffff" }}
      itemStyle={{ color: "#ffffff" }}
    />
    <Legend wrapperStyle={{ color: "#ffffff" }} />

    <Line
      type="monotone"
      dataKey="Manual"
      stroke="#ef4444"
      strokeWidth={3}
      dot={{ stroke: "#ef4444", strokeWidth: 2 }}
      activeDot={{ r: 6 }}
      name="Manual Process"
    />
    <Line
      type="monotone"
      dataKey="Zauvijek"
      stroke="#3B82F6"
      strokeWidth={3}
      dot={{ stroke: "#3B82F6", strokeWidth: 2 }}
      activeDot={{ r: 6 }}
      name="With Zauvijek"
    />
    <Line
      type="monotone"
      dataKey="Saving"
      stroke="#10B981"
      strokeWidth={3}
      dot={{ stroke: "#10B981", strokeWidth: 2 }}
      activeDot={{ r: 6 }}
      name="Savings"
    />
  </LineChart>
</ResponsiveContainer>

        </div>

        <div className="md:col-span-2 bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Energy Comparison (kWh)
          </h2>
           <form className="mt-6 space-y-4">
  {/* Before Zauvijek */}
  <div className="flex flex-col">
    <label htmlFor="before" className="text-sm font-medium text-gray-800 dark:text-gray-200">
      ⚡ Before Zauvijek (kWh)
    </label>
    <input
      id="before"
      type="number"
      defaultValue={pieChartData[0].value}
      className="mt-1 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* With Zauvijek */}
  <div className="flex flex-col">
    <label htmlFor="with" className="text-sm font-medium text-gray-800 dark:text-gray-200">
      ⚡ With Zauvijek (kWh)
    </label>
    <input
      id="with"
      type="number"
      defaultValue={pieChartData[1].value}
      className="mt-1 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Energy Saved */}
  <div className="flex flex-col">
    <label htmlFor="saved" className="text-sm font-medium text-gray-800 dark:text-gray-200">
      ✅ Energy Saved (kWh)
    </label>
    <input
      id="saved"
      type="number"
      defaultValue={pieChartData[1].value}
      className="mt-1 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  </div>

  {/* Monthly Consumption */}
  <div className="flex flex-col">
    <label htmlFor="monthly" className="text-sm font-medium text-gray-800 dark:text-gray-200">
      📆 Monthly Consumption (kWh)
    </label>
    <input
      id="monthly"
      type="number"
     defaultValue={pieChartData[1].value}
      className="mt-1 px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
  >
    Update Values
  </button>
</form>

        </div>
      </div>
      <div className="bg-white dark:bg-[#1c2331] p-6 mb-4 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          KPI Breakdown Bar Chart
        </h2>
        <ReactApexChart options={options} series={series} type="bar" height={350} />
      </div>
    </div>
  );
}
