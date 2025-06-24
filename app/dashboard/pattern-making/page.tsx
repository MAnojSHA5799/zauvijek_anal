"use client";

import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ScatterChart,
  Scatter,
  FunnelChart,
  Funnel,
  LabelList,
} from "recharts";
import {
  FaIndustry,
  FaRupeeSign,
  FaChartLine,
  FaBolt,
  FaLeaf,
  FaClock,
  FaCalendarAlt,
  FaPercent,
} from "react-icons/fa";
import {
  MdSavings,
  MdCalendarToday,
  MdTrendingUp,
  MdSpeed,
} from "react-icons/md";
import CountUp from "react-countup";

const summaryData = [
  {
    title: "Process Name",
    value: "Pattern Making",
    isCurrency: false,
    colors: "from-purple-600 via-purple-500 to-indigo-500",
    icon: <FaIndustry className="text-2xl" />,
  },
  {
    title: "Manual Cost",
    value: 487.5,
    isCurrency: true,
    colors: "from-red-600 via-red-500 to-pink-500",
    icon: <FaRupeeSign className="text-2xl" />,
  },
  {
    title: "Automated Cost",
    value: 195.0,
    isCurrency: true,
    colors: "from-green-600 via-green-500 to-emerald-500",
    icon: <FaRupeeSign className="text-2xl" />,
  },
  {
    title: "Daily Savings",
    value: 292.5,
    isCurrency: true,
    decimals: 2,
    colors: "from-blue-600 via-blue-500 to-cyan-500",
    icon: <MdSavings className="text-2xl" />,
  },
  {
    title: "Monthly Savings",
    value: 8775.0,
    isCurrency: true,
    colors: "from-orange-600 via-orange-500 to-yellow-500",
    icon: <MdCalendarToday className="text-2xl" />,
  },
  {
    title: "Yearly Savings",
    value: 106762.5,
    isCurrency: true,
    colors: "from-teal-600 via-teal-500 to-cyan-500",
    icon: <FaCalendarAlt className="text-2xl" />,
  },
  {
    title: "Cost Reduction",
    value: 60.0,
    suffix: "%",
    isCurrency: false,
    decimals: 1,
    colors: "from-rose-600 via-rose-500 to-pink-500",
    icon: <FaPercent className="text-2xl" />,
  },
  {
    title: "Energy Before",
    value: 43.88,
    suffix: " kWh",
    isCurrency: false,
    decimals: 2,
    colors: "from-amber-600 via-amber-500 to-yellow-500",
    icon: <FaBolt className="text-2xl" />,
  },
  {
    title: "Energy After",
    value: 17.55,
    suffix: " kWh",
    isCurrency: false,
    decimals: 2,
    colors: "from-lime-600 via-lime-500 to-green-500",
    icon: <FaLeaf className="text-2xl" />,
  },
  {
    title: "Energy Saved",
    value: 26.33,
    suffix: " kWh",
    isCurrency: false,
    decimals: 2,
    colors: "from-emerald-600 via-emerald-500 to-teal-500",
    icon: <MdTrendingUp className="text-2xl" />,
  },
  {
    title: "Total Consumption",
    value: 38091,
    suffix: " kWh",
    isCurrency: false,
    colors: "from-violet-600 via-violet-500 to-purple-500",
    icon: <MdSpeed className="text-2xl" />,
  },
  {
    title: "Efficiency Gain",
    value: 39.9,
    suffix: "%",
    isCurrency: false,
    decimals: 1,
    colors: "from-indigo-600 via-indigo-500 to-blue-500",
    icon: <FaClock className="text-2xl" />,
  },
];

// Enhanced data sets for different chart types
const monthlyTrendData = [
  {
    name: "Jan",
    Manual: 487.5,
    Automated: 195.0,
    Saving: 292.5,
    Efficiency: 60,
  },
  {
    name: "Feb",
    Manual: 485.0,
    Automated: 192.0,
    Saving: 293.0,
    Efficiency: 60.4,
  },
  {
    name: "Mar",
    Manual: 490.0,
    Automated: 198.0,
    Saving: 292.0,
    Efficiency: 59.6,
  },
  {
    name: "Apr",
    Manual: 488.0,
    Automated: 196.0,
    Saving: 292.0,
    Efficiency: 59.8,
  },
  {
    name: "May",
    Manual: 492.0,
    Automated: 200.0,
    Saving: 292.0,
    Efficiency: 59.3,
  },
  {
    name: "Jun",
    Manual: 486.0,
    Automated: 194.0,
    Saving: 292.0,
    Efficiency: 60.1,
  },
  {
    name: "Jul",
    Manual: 489.0,
    Automated: 197.0,
    Saving: 292.0,
    Efficiency: 59.7,
  },
  {
    name: "Aug",
    Manual: 491.0,
    Automated: 199.0,
    Saving: 292.0,
    Efficiency: 59.5,
  },
  {
    name: "Sep",
    Manual: 487.0,
    Automated: 195.0,
    Saving: 292.0,
    Efficiency: 60.0,
  },
  {
    name: "Oct",
    Manual: 488.5,
    Automated: 196.5,
    Saving: 292.0,
    Efficiency: 59.8,
  },
  {
    name: "Nov",
    Manual: 486.5,
    Automated: 194.5,
    Saving: 292.0,
    Efficiency: 60.0,
  },
  {
    name: "Dec",
    Manual: 487.5,
    Automated: 195.0,
    Saving: 292.5,
    Efficiency: 60.0,
  },
];

const energyComparisonData = [
  { name: "Before Automation", value: 43.88, color: "#0ABAB5" },
  { name: "After Automation", value: 17.55, color: "#56DFCF" },
];

const weeklyProductionData = [
  { week: "Week 1", production: 420, target: 400, efficiency: 105 },
  { week: "Week 2", production: 380, target: 400, efficiency: 95 },
  { week: "Week 3", production: 460, target: 400, efficiency: 115 },
  { week: "Week 4", production: 510, target: 400, efficiency: 127.5 },
];

const hourlyEnergyData = [
  { hour: "00:00", energy: 15.2 },
  { hour: "01:00", energy: 14.8 },
  { hour: "02:00", energy: 14.5 },
  { hour: "03:00", energy: 14.2 },
  { hour: "04:00", energy: 14.0 },
  { hour: "05:00", energy: 14.3 },
  { hour: "06:00", energy: 16.8 },
  { hour: "07:00", energy: 18.5 },
  { hour: "08:00", energy: 19.2 },
  { hour: "09:00", energy: 18.8 },
  { hour: "10:00", energy: 17.9 },
  { hour: "11:00", energy: 17.5 },
  { hour: "12:00", energy: 16.2 },
  { hour: "13:00", energy: 17.8 },
  { hour: "14:00", energy: 18.5 },
  { hour: "15:00", energy: 19.1 },
  { hour: "16:00", energy: 18.7 },
  { hour: "17:00", energy: 17.3 },
  { hour: "18:00", energy: 16.8 },
  { hour: "19:00", energy: 16.2 },
  { hour: "20:00", energy: 15.8 },
  { hour: "21:00", energy: 15.5 },
  { hour: "22:00", energy: 15.2 },
  { hour: "23:00", energy: 15.0 },
];

const processStagesData = [
  { stage: "Design", manual: 120, automated: 45 },
  { stage: "Cutting", manual: 150, automated: 60 },
  { stage: "Assembly", manual: 100, automated: 40 },
  { stage: "Quality Check", manual: 80, automated: 30 },
  { stage: "Finishing", manual: 37.5, automated: 20 },
];

const radarData = [
  { subject: "Cost Efficiency", A: 60, B: 40, fullMark: 100 },
  { subject: "Energy Savings", A: 85, B: 30, fullMark: 100 },
  { subject: "Time Reduction", A: 70, B: 25, fullMark: 100 },
  { subject: "Quality", A: 90, B: 60, fullMark: 100 },
  { subject: "Productivity", A: 80, B: 45, fullMark: 100 },
  { subject: "Sustainability", A: 75, B: 35, fullMark: 100 },
];

const scatterData = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const funnelData = [
  { name: "Initial Cost", value: 487.5, fill: "#8884d8" },
  { name: "Process Optimization", value: 350, fill: "#83a6ed" },
  { name: "Automation Implementation", value: 250, fill: "#8dd1e1" },
  { name: "Final Cost", value: 195, fill: "#82ca9d" },
];

const PatternMakingPage = () => {
  const [alert, setAlert] = useState<string | null>(null);

  useEffect(() => {
    setAlert(
      "🎉 Pattern Making Process Optimized! 60% cost reduction achieved!"
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100  dark:from-slate-900 dark:to-slate-800 text-black dark:text-white p-6 mb-8 transition-colors duration-300">
      {alert && (
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900 dark:to-emerald-900 text-green-800 dark:text-green-100 px-6 py-4 mb-6 rounded-xl shadow-lg border border-green-200 dark:border-green-700">
          <div className="flex items-center gap-2">
            <FaLeaf className="text-xl" />
            <span className="font-semibold">{alert}</span>
          </div>
        </div>
      )}

      {/* Enhanced Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {summaryData.map((item, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${item.colors} p-6 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                {item.icon}
              </div>
              <div className="text-right">
                <div className="text-sm font-medium opacity-90">
                  {item.title}
                </div>
                <div className="text-xl font-bold">
                  {typeof item.value === "number" ? (
                    <>
                      {item.isCurrency && "₹"}
                      <CountUp
                        end={item.value}
                        duration={2.5}
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
          </div>
        ))}
      </div>

      {/* Chart Grid - Consistently 2 Charts Per Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 1. Composed Chart - Monthly Trends */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
            <FaChartLine className="text-blue-500" />
            Monthly Performance Trends
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart data={monthlyTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" tick={{ fill: "#6B7280" }} />
              <YAxis tick={{ fill: "#6B7280" }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "none",
                  borderRadius: "12px",
                  color: "#fff",
                }}
              />
              <Legend />
              <Bar dataKey="Manual" fill="#0ABAB5" name="Manual Cost" />
              <Bar dataKey="Automated" fill="#56DFCF" name="Automated Cost" />
              <Line
                type="monotone"
                dataKey="Saving"
                stroke="#F59E0B"
                strokeWidth={3}
                name="Savings"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* 2. Pie Chart - Energy Comparison */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
            Energy Usage Distribution
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={energyComparisonData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label={({ name, value }) => `${name}: ${value} kWh`}
              >
                {energyComparisonData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* 3. Area Chart - Hourly Energy Consumption */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
            Hourly Energy Consumption
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={hourlyEnergyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="hour" tick={{ fill: "#6B7280", fontSize: 10 }} />
              <YAxis tick={{ fill: "#6B7280" }} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="energy"
                stroke="#8B5CF6"
                fill="#8B5CF6"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* 4. Bar Chart - Process Stages Comparison */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
            Process Stages Cost
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={processStagesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="stage" tick={{ fill: "#6B7280" }} />
              <YAxis tick={{ fill: "#6B7280" }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="manual" fill="#0ABAB5" name="Manual" />
              <Bar dataKey="automated" fill="#56DFCF" name="Automated" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 5. Line Chart - Weekly Production */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
            Weekly Production Trend
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={weeklyProductionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="week" tick={{ fill: "#6B7280" }} />
              <YAxis tick={{ fill: "#6B7280" }} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="production"
                stroke="#06B6D4"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke="#F59E0B"
                strokeWidth={2}
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 6. Radar Chart - Performance Metrics */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
            Performance Comparison
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#374151" />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fill: "#6B7280", fontSize: 10 }}
              />
              <PolarRadiusAxis tick={{ fill: "#6B7280", fontSize: 10 }} />
              <Radar
                name="Automated"
                dataKey="A"
                stroke="#10B981"
                fill="#10B981"
                fillOpacity={0.3}
              />
              <Radar
                name="Manual"
                dataKey="B"
                stroke="#EF4444"
                fill="#EF4444"
                fillOpacity={0.3}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* 7. Scatter Chart - Cost vs Efficiency */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
            Cost vs Efficiency Analysis
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <ScatterChart data={scatterData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="x" name="Cost" tick={{ fill: "#6B7280" }} />
              <YAxis dataKey="y" name="Efficiency" tick={{ fill: "#6B7280" }} />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter name="Data Points" data={scatterData} fill="#8B5CF6" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* 8. Funnel Chart - Cost Reduction Process */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
            Cost Reduction Funnel
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <FunnelChart>
              <Tooltip />
              <Funnel dataKey="value" data={funnelData} isAnimationActive>
                <LabelList position="center" fill="#fff" stroke="none" />
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
        </div>

        {/* 9. ApexCharts - Donut Chart */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
            Cost Breakdown Distribution
          </h2>
          <Chart
            options={{
              chart: {
                type: "donut",
                background: "transparent",
              },
              labels: ["Energy", "Labor", "Materials", "Maintenance"],
              colors: ["#8B5CF6", "#06B6D4", "#10B981", "#F59E0B"],
              legend: {
                position: "bottom",
                labels: {
                  colors: "#6B7280",
                },
              },
              plotOptions: {
                pie: {
                  donut: {
                    size: "70%",
                  },
                },
              },
            }}
            series={[195, 150, 100, 50]}
            type="donut"
            height={350}
          />
        </div>

        {/* 10. ApexCharts - Radial Bar */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
            Efficiency Metrics Overview
          </h2>
          <Chart
            options={{
              chart: {
                type: "radialBar",
                background: "transparent",
              },
              plotOptions: {
                radialBar: {
                  dataLabels: {
                    name: {
                      fontSize: "16px",
                      color: "#6B7280",
                    },
                    value: {
                      fontSize: "14px",
                      color: "#6B7280",
                    },
                    total: {
                      show: true,
                      label: "Total",
                      formatter: () => "60%",
                      color: "#6B7280",
                    },
                  },
                },
              },
              labels: ["Cost Reduction", "Energy Savings", "Time Savings"],
              colors: ["#10B981", "#06B6D4", "#8B5CF6"],
            }}
            series={[60, 40, 70]}
            type="radialBar"
            height={350}
          />
        </div>

        {/* 11. ApexCharts - Heatmap */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
            Daily Performance Heatmap
          </h2>
          <Chart
            options={{
              chart: {
                type: "heatmap",
                background: "transparent",
              },
              dataLabels: {
                enabled: true,
                style: {
                  colors: ["#FFFFFF"],
                  fontSize: "12px",
                },
              },
              colors: ["#10B981"],
              xaxis: {
                categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                labels: {
                  style: {
                    colors: "#6B7280",
                    fontSize: "12px",
                  },
                },
              },
              yaxis: {
                labels: {
                  style: {
                    colors: "#6B7280",
                    fontSize: "12px",
                  },
                },
              },
              plotOptions: {
                heatmap: {
                  colorScale: {
                    ranges: [
                      {
                        from: 0,
                        to: 50,
                        color: "#10B981",
                        name: "Low",
                      },
                      {
                        from: 51,
                        to: 100,
                        color: "#059669",
                        name: "High",
                      },
                    ],
                  },
                },
              },
              tooltip: {
                style: {
                  fontSize: "13px",
                  fontFamily: "inherit",
                  // colors: "#000000",
                },
                theme: "dark",
              },
            }}
            series={[
              { name: "Week 1", data: [30, 40, 35, 50, 49, 60, 70] },
              { name: "Week 2", data: [23, 42, 35, 27, 43, 22, 17] },
              { name: "Week 3", data: [35, 41, 36, 26, 45, 48, 52] },
              { name: "Week 4", data: [31, 40, 28, 51, 42, 109, 100] },
            ]}
            type="heatmap"
            height={350}
          />
        </div>

        {/* 12. ApexCharts - Candlestick */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
            Cost Fluctuation Analysis
          </h2>
          <Chart
            options={{
              chart: {
                type: "candlestick",
                background: "transparent",
              },
              plotOptions: {
                candlestick: {
                  colors: {
                    upward: "#22C55E", // ✅ Green for price increase
                    downward: "#EF4444", // 🔻 Red for price decrease
                  },
                  wick: {
                    useFillColor: true, // makes wick color match the candle body
                  },
                },
              },
              xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                labels: {
                  style: {
                    colors: "#6B7280",
                    fontSize: "12px",
                  },
                },
              },
              yaxis: {
                labels: {
                  style: {
                    colors: "#6B7280",
                    fontSize: "12px",
                  },
                },
              },
              tooltip: {
                style: {
                  fontSize: "13px",
                  fontFamily: "inherit",
                  // colors: "#000000",
                },
                theme: "dark",
              },
            }}
            series={[
              {
                data: [
                  { x: "Jan", y: [480, 490, 475, 487] },
                  { x: "Feb", y: [485, 495, 480, 485] },
                  { x: "Mar", y: [488, 500, 485, 490] },
                  { x: "Apr", y: [486, 492, 483, 488] },
                  { x: "May", y: [490, 498, 488, 492] },
                  { x: "Jun", y: [484, 489, 481, 486] },
                ],
              },
            ]}
            type="candlestick"
            height={350}
          />
        </div>

        {/* 13. ApexCharts - Polar Area */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
            Resource Distribution Analysis
          </h2>
          <Chart
            series={[195, 150, 100, 75, 50]}
            type="polarArea"
            height={350}
            options={{
              chart: {
                type: "polarArea",
                background: "transparent",
              },
              labels: ["Energy", "Labor", "Materials", "Equipment", "Overhead"],
              colors: ["#8B5CF6", "#06B6D4", "#10B981", "#F59E0B", "#EF4444"],
              fill: {
                opacity: 0.8,
              },
              dataLabels: {
                // enabled: true,
                style: {
                  // Make sure there are enough white entries for each label
                  colors: [
                    "#FFFFFF",
                    "#FFFFFF",
                    "#FFFFFF",
                    "#FFFFFF",
                    "#FFFFFF",
                  ],
                },
              },
              stroke: {
                colors: ["#1F2937"], // Optional: border color
              },
              legend: {
                position: "bottom",
                labels: {
                  colors: "#FFFFFF",
                },
              },
              yaxis: {
                labels: {
                  style: {
                    colors: "#FFFFFF",
                  },
                },
              },
              xaxis: {
                labels: {
                  style: {
                    colors: "#FFFFFF",
                  },
                },
              },
              tooltip: {
                theme: "dark",
                style: {
                  fontSize: "13px",
                  fontFamily: "inherit",
                },
              },
            }}
          />
        </div>

        {/* 14. ApexCharts - Treemap */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl">
          <h2 className="text-lg font-bold mb-4 text-gray-800 dark:text-white">
            Cost Structure Treemap
          </h2>
          <Chart
            options={{
              chart: {
                type: "treemap",
                background: "transparent",
              },
              colors: ["#8B5CF6", "#06B6D4", "#10B981", "#F59E0B"],
              legend: {
                position: "bottom",
                labels: {
                  colors: "#6B7280",
                },
              },
              tooltip: {
                style: {
                  fontSize: "13px",
                  fontFamily: "inherit",
                  // colors: "#000000",
                },
                theme: "dark",
              },
            }}
            series={[
              {
                data: [
                  { x: "Energy", y: 195 },
                  { x: "Labor", y: 150 },
                  { x: "Materials", y: 100 },
                  { x: "Maintenance", y: 50 },
                ],
              },
            ]}
            type="treemap"
            height={350}
          />
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl shadow-xl text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Pattern Making Process Summary
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold">₹292.50</div>
            <div className="text-sm opacity-90">Daily Savings</div>
          </div>
          <div>
            <div className="text-3xl font-bold">60%</div>
            <div className="text-sm opacity-90">Cost Reduction</div>
          </div>
          <div>
            <div className="text-3xl font-bold">26.33 kWh</div>
            <div className="text-sm opacity-90">Energy Saved Daily</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatternMakingPage;
