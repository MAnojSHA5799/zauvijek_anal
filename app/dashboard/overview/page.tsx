"use client";
import { useEffect } from "react";
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
  Area,
  AreaChart,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ScatterChart,
  Scatter,
  ComposedChart,
} from "recharts";
import CountUp from "react-countup";
import {
  FaRupeeSign,
  FaChartLine,
  FaIndustry,
  FaLeaf,
  FaCog,
  FaShieldAlt,
  FaRocket,
  FaTrophy,
  FaFire,
  FaGem,
  FaStar,
  FaUsers,
  FaBoxes,
  FaClock,
  FaThermometerHalf,
  FaBolt,
  FaRecycle,
} from "react-icons/fa";
import {
  MdTrendingUp,
  MdSpeed,
  MdTimeline,
  MdAssessment,
} from "react-icons/md";
import { Doughnut, Pie } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend as ChartLegend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
ChartJS.register(
  ArcElement,
  ChartTooltip,
  ChartLegend,
  CategoryScale,
  LinearScale,
  BarElement
);

// Real Manufacturing Process Data
const realProcessData = [
  {
    id: 1,
    name: "Pattern Making",
    without: 487.5,
    with: 195.0,
    saving: 292.5,
    monthlySaving: 8775.0,
    yearlySaving: 106762.5,
    reduction: 60.0,
    totalKwh: 43.88,
    kwhAfter: 17.55,
    kwhSaving: 26.33,
    monthlyKwh: 38091,
    yearlyKwh: 457095,
  },
  {
    id: 2,
    name: "Mold Preparation",
    without: 731.25,
    with: 325.0,
    saving: 406.25,
    monthlySaving: 12187.5,
    yearlySaving: 148281.25,
    reduction: 55.56,
    totalKwh: 65.81,
    kwhAfter: 29.25,
    kwhSaving: 36.56,
    monthlyKwh: 57113,
    yearlyKwh: 685350,
  },
  {
    id: 3,
    name: "Assembly of Mold & Gating",
    without: 487.5,
    with: 195.0,
    saving: 292.5,
    monthlySaving: 8775.0,
    yearlySaving: 106762.5,
    reduction: 60.0,
    totalKwh: 43.88,
    kwhAfter: 17.55,
    kwhSaving: 26.33,
    monthlyKwh: 38091,
    yearlyKwh: 457095,
  },
  {
    id: 4,
    name: "Metal Melting",
    without: 10968.75,
    with: 9587.5,
    saving: 1381.25,
    monthlySaving: 41437.5,
    yearlySaving: 503156.25,
    reduction: 12.6,
    totalKwh: 987.19,
    kwhAfter: 862.88,
    kwhSaving: 124.31,
    monthlyKwh: 855722,
    yearlyKwh: 10268662,
  },
  {
    id: 5,
    name: "Tapping",
    without: 1000.0,
    with: 562.5,
    saving: 437.5,
    monthlySaving: 13125.0,
    yearlySaving: 159687.5,
    reduction: 43.75,
    totalKwh: 90,
    kwhAfter: 50.63,
    kwhSaving: 39.38,
    monthlyKwh: 77986,
    yearlyKwh: 935833,
  },
  {
    id: 6,
    name: "Purification",
    without: 975.0,
    with: 568.75,
    saving: 406.25,
    monthlySaving: 12187.5,
    yearlySaving: 148281.25,
    reduction: 41.67,
    totalKwh: 87.75,
    kwhAfter: 51.19,
    kwhSaving: 36.56,
    monthlyKwh: 76036,
    yearlyKwh: 912427,
  },
  {
    id: 7,
    name: "Pouring",
    without: 1137.5,
    with: 731.25,
    saving: 406.25,
    monthlySaving: 12187.5,
    yearlySaving: 148281.25,
    reduction: 35.71,
    totalKwh: 102.38,
    kwhAfter: 65.81,
    kwhSaving: 36.56,
    monthlyKwh: 88724,
    yearlyKwh: 1064688,
  },
  {
    id: 8,
    name: "Rough Casting",
    without: 528.13,
    with: 284.38,
    saving: 243.75,
    monthlySaving: 7312.5,
    yearlySaving: 89018.75,
    reduction: 46.16,
    totalKwh: 47.53,
    kwhAfter: 25.59,
    kwhSaving: 21.94,
    monthlyKwh: 41251,
    yearlyKwh: 495011,
  },
  {
    id: 9,
    name: "Cooling",
    without: 365.63,
    with: 219.38,
    saving: 146.25,
    monthlySaving: 4387.5,
    yearlySaving: 53381.25,
    reduction: 40.0,
    totalKwh: 32.91,
    kwhAfter: 19.74,
    kwhSaving: 13.17,
    monthlyKwh: 28552,
    yearlyKwh: 342625,
  },
  {
    id: 10,
    name: "Solidification",
    without: 146.25,
    with: 73.13,
    saving: 73.13,
    monthlySaving: 2193.75,
    yearlySaving: 26681.25,
    reduction: 50.0,
    totalKwh: 13.16,
    kwhAfter: 6.58,
    kwhSaving: 6.58,
    monthlyKwh: 11429,
    yearlyKwh: 137143,
  },
  {
    id: 11,
    name: "Risers",
    without: 113.75,
    with: 56.88,
    saving: 56.88,
    monthlySaving: 1706.25,
    yearlySaving: 20756.25,
    reduction: 50.0,
    totalKwh: 10.24,
    kwhAfter: 5.12,
    kwhSaving: 5.12,
    monthlyKwh: 8889,
    yearlyKwh: 106667,
  },
  {
    id: 12,
    name: "Shakeout",
    without: 73.13,
    with: 40.63,
    saving: 32.5,
    monthlySaving: 975.0,
    yearlySaving: 11862.5,
    reduction: 44.4,
    totalKwh: 6.58,
    kwhAfter: 3.66,
    kwhSaving: 2.92,
    monthlyKwh: 5712,
    yearlyKwh: 68540,
  },
  {
    id: 13,
    name: "Mold Breaking",
    without: 105.63,
    with: 56.88,
    saving: 48.75,
    monthlySaving: 1462.5,
    yearlySaving: 17793.75,
    reduction: 46.1,
    totalKwh: 9.51,
    kwhAfter: 5.12,
    kwhSaving: 4.39,
    monthlyKwh: 8341,
    yearlyKwh: 100091,
  },
  {
    id: 14,
    name: "Fettling & Finishing",
    without: 178.75,
    with: 105.63,
    saving: 73.13,
    monthlySaving: 2193.75,
    yearlySaving: 26681.25,
    reduction: 40.9,
    totalKwh: 16.09,
    kwhAfter: 9.51,
    kwhSaving: 6.58,
    monthlyKwh: 13973,
    yearlyKwh: 167681,
  },
  {
    id: 15,
    name: "Scrap Optimization",
    without: 2000000.0,
    with: 1960000.0,
    saving: 40000.0,
    monthlySaving: 1200000.0,
    yearlySaving: 14600000.0,
    reduction: 2.0,
    totalKwh: 54000.0,
    kwhAfter: 0,
    kwhSaving: 54000.0,
    monthlyKwh: 1350000,
    yearlyKwh: 16200000,
  },
  {
    id: 16,
    name: "Heat Process",
    without: 12500.0,
    with: 7500.0,
    saving: 5000.0,
    monthlySaving: 150000.0,
    yearlySaving: 1800000.0,
    reduction: 40.0,
    totalKwh: 1125.11,
    kwhAfter: 675.07,
    kwhSaving: 450.05,
    monthlyKwh: 13501,
    yearlyKwh: 164266,
  },
  {
    id: 17,
    name: "Vibration",
    without: 625.0,
    with: 387.5,
    saving: 237.5,
    monthlySaving: 7125.0,
    yearlySaving: 85312.5,
    reduction: 38.0,
    totalKwh: 56.25,
    kwhAfter: 34.88,
    kwhSaving: 21.37,
    monthlyKwh: 16875,
    yearlyKwh: 202813,
  },
];

// Update summary data with real totals
const summaryData = [
  {
    title: "Total Processes",
    value: 17,
    isCurrency: false,
    colors: "from-purple-600 via-purple-500 to-pink-500",
    icon: <FaIndustry className="text-2xl" />,
    bgPattern:
      "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
  },
  {
    title: "Without Zauvijek",
    value: 2028423.77,
    isCurrency: true,
    colors: "from-blue-600 via-blue-500 to-cyan-500",
    icon: <FaRupeeSign className="text-2xl" />,
    bgPattern:
      "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
  },
  {
    title: "With Zauvijek",
    value: 1980849.41,
    isCurrency: true,
    colors: "from-emerald-600 via-emerald-500 to-teal-500",
    icon: <FaRocket className="text-2xl" />,
    bgPattern:
      "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
  },
  {
    title: "Daily Savings",
    value: 49536.38,
    isCurrency: true,
    decimals: 2,
    colors: "from-orange-600 via-orange-500 to-red-500",
    icon: <FaTrophy className="text-2xl" />,
    bgPattern:
      "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
  },
  {
    title: "Energy Saved Daily",
    value: 54858.75,
    suffix: " kWh",
    isCurrency: false,
    decimals: 2,
    colors: "from-green-600 via-green-500 to-lime-500",
    icon: <FaLeaf className="text-2xl" />,
    bgPattern:
      "bg-gradient-to-br from-green-50 to-lime-50 dark:from-green-900/20 dark:to-lime-900/20",
  },
  {
    title: "Avg. Reduction",
    value: 41.58,
    suffix: "%",
    isCurrency: false,
    decimals: 2,
    colors: "from-yellow-600 via-yellow-500 to-amber-500",
    icon: <FaGem className="text-2xl" />,
    bgPattern:
      "bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20",
  },
  {
    title: "Monthly Saving",
    value: 1484140.0,
    isCurrency: true,
    colors: "from-indigo-600 via-indigo-500 to-purple-500",
    icon: <MdTrendingUp className="text-2xl" />,
    bgPattern:
      "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20",
  },
  {
    title: "Yearly Saving",
    value: 18052701.25,
    isCurrency: true,
    colors: "from-teal-600 via-teal-500 to-cyan-500",
    icon: <FaStar className="text-2xl" />,
    bgPattern:
      "bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20",
  },
];

// Update component chart with real process reduction data
const componentChart = {
  labels: [
    "Pattern Making: 60.00%",
    "Mold Preparation: 55.56%",
    "Assembly: 60.00%",
    "Metal Melting: 12.60%",
    "Tapping: 43.75%",
    "Heat Process: 40.00%",
    "Scrap Optimization: 2.00%",
  ],
  datasets: [
    {
      data: [60.0, 55.56, 60.0, 12.6, 43.75, 40.0, 2.0],
      backgroundColor: [
        "#A78BFA", // Light Purple
        "#FB7185", // Light Pink
        "#60A5FA", // Light Blue
        "#34D399", // Light Emerald
        "#FBBF24", // Light Amber
        "#F87171", // Light Red
        "#84CC16", // Light Lime
      ],
      borderWidth: 3,
      borderColor: "#ffffff",
      cutout: "60%",
      hoverOffset: 15,
    },
  ],
};

// Update savings data with real daily savings
const savingsData = realProcessData.slice(0, 10).map((process) => ({
  name: process.name,
  saving: process.saving,
  icon: process.name.includes("Pattern")
    ? "🔧"
    : process.name.includes("Mold")
    ? "⚙️"
    : process.name.includes("Assembly")
    ? "🔩"
    : process.name.includes("Metal")
    ? "🔥"
    : process.name.includes("Tapping")
    ? "🔨"
    : process.name.includes("Purification")
    ? "💧"
    : process.name.includes("Pouring")
    ? "🌊"
    : process.name.includes("Rough")
    ? "🏗️"
    : process.name.includes("Cooling")
    ? "❄️"
    : "⚡",
}));

// Replace allProcessData with realProcessData
const allProcessData = realProcessData;

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

// Enhanced data with more visual appeal
const energyData = [
  {
    month: "Jan",
    consumption: 56738,
    target: 50000,
    efficiency: 88,
    renewable: 15000,
    saved: 54859,
  },
  {
    month: "Feb",
    consumption: 52000,
    target: 50000,
    efficiency: 92,
    renewable: 16000,
    saved: 58000,
  },
  {
    month: "Mar",
    consumption: 48000,
    target: 50000,
    efficiency: 96,
    renewable: 17000,
    saved: 62000,
  },
  {
    month: "Apr",
    consumption: 45000,
    target: 50000,
    efficiency: 100,
    renewable: 18000,
    saved: 65000,
  },
  {
    month: "May",
    consumption: 42000,
    target: 50000,
    efficiency: 105,
    renewable: 19000,
    saved: 68000,
  },
];

const efficiencyData = [
  { week: "W1", efficiency: 85, target: 90, improvement: 5, oee: 78 },
  { week: "W2", efficiency: 88, target: 90, improvement: 3, oee: 82 },
  { week: "W3", efficiency: 92, target: 90, improvement: -2, oee: 87 },
  { week: "W4", efficiency: 95, target: 90, improvement: -5, oee: 91 },
];

const qualityRadarData = [
  { subject: "Accuracy", A: 90, B: 85, fullMark: 100 },
  { subject: "Speed", A: 85, B: 80, fullMark: 100 },
  { subject: "Reliability", A: 88, B: 82, fullMark: 100 },
  { subject: "Cost Efficiency", A: 92, B: 88, fullMark: 100 },
  { subject: "Safety", A: 95, B: 90, fullMark: 100 },
  { subject: "Innovation", A: 87, B: 75, fullMark: 100 },
];

// const productionData = [
//   { month: "Jan", heavy: 120, light: 80, total: 200, target: 180 },
//   { month: "Feb", heavy: 140, light: 90, total: 230, target: 200 },
//   { month: "Mar", heavy: 160, light: 100, total: 260, target: 220 },
//   { month: "Apr", heavy: 180, light: 110, total: 290, target: 250 },
// ];

// NEW DATA SETS FOR ADDITIONAL CHARTS

// 1. Workforce Analytics
const workforceData = [
  {
    department: "Production",
    employees: 45,
    productivity: 92,
    satisfaction: 85,
  },
  { department: "Quality", employees: 12, productivity: 88, satisfaction: 90 },
  {
    department: "Maintenance",
    employees: 8,
    productivity: 85,
    satisfaction: 82,
  },
  {
    department: "Logistics",
    employees: 15,
    productivity: 90,
    satisfaction: 88,
  },
  { department: "Admin", employees: 6, productivity: 78, satisfaction: 85 },
];

// 2. Equipment Performance Scatter
const equipmentScatterData = [
  { age: 2, efficiency: 95, maintenance: 5, name: "Machine A" },
  { age: 5, efficiency: 88, maintenance: 12, name: "Machine B" },
  { age: 8, efficiency: 82, maintenance: 18, name: "Machine C" },
  { age: 3, efficiency: 92, maintenance: 8, name: "Machine D" },
  { age: 10, efficiency: 75, maintenance: 25, name: "Machine E" },
  { age: 1, efficiency: 98, maintenance: 3, name: "Machine F" },
  { age: 6, efficiency: 85, maintenance: 15, name: "Machine G" },
];

// 3. Supply Chain Timeline
const supplyChainData = [
  { week: "W1", orders: 45, delivered: 42, delayed: 3, cancelled: 0 },
  { week: "W2", orders: 52, delivered: 48, delayed: 3, cancelled: 1 },
  { week: "W3", orders: 48, delivered: 46, delayed: 2, cancelled: 0 },
  { week: "W4", orders: 55, delivered: 52, delayed: 2, cancelled: 1 },
];

// 4. Cost Analysis Waterfall Data
// const costWaterfallData = [
//   { category: "Raw Materials", value: 45000, cumulative: 45000 },
//   { category: "Labor", value: 25000, cumulative: 70000 },
//   { category: "Energy", value: 15000, cumulative: 85000 },
//   { category: "Maintenance", value: 8000, cumulative: 93000 },
//   { category: "Overhead", value: 12000, cumulative: 105000 },
//   { category: "Savings", value: -8000, cumulative: 97000 },
// ];

// 5. Quality Metrics Timeline
const qualityTimelineData = [
  { date: "Jan", defectRate: 2.5, reworkRate: 1.2, customerComplaints: 3 },
  { date: "Feb", defectRate: 2.1, reworkRate: 1.0, customerComplaints: 2 },
  { date: "Mar", defectRate: 1.8, reworkRate: 0.8, customerComplaints: 1 },
  { date: "Apr", defectRate: 1.5, reworkRate: 0.6, customerComplaints: 1 },
  { date: "May", defectRate: 1.2, reworkRate: 0.5, customerComplaints: 0 },
];

// 6. Inventory Turnover
const inventoryData = [
  {
    item: "Steel Sheets",
    current: 450,
    minimum: 200,
    maximum: 600,
    turnover: 8.5,
  },
  {
    item: "Aluminum Rods",
    current: 320,
    minimum: 150,
    maximum: 500,
    turnover: 12.3,
  },
  {
    item: "Copper Wire",
    current: 180,
    minimum: 100,
    maximum: 300,
    turnover: 15.2,
  },
  {
    item: "Plastic Pellets",
    current: 280,
    minimum: 200,
    maximum: 400,
    turnover: 6.8,
  },
];

// 7. Environmental Impact
const environmentalData = [
  { month: "Jan", co2: 1200, water: 850, waste: 45, recycled: 38 },
  { month: "Feb", co2: 1100, water: 800, waste: 42, recycled: 36 },
  { month: "Mar", co2: 950, water: 750, waste: 38, recycled: 34 },
  { month: "Apr", co2: 800, water: 700, waste: 35, recycled: 32 },
  { month: "May", co2: 750, water: 650, waste: 32, recycled: 30 },
];

// 8. Shift Performance Comparison
const shiftComparisonData = [
  { shift: "Morning", output: 95, quality: 92, efficiency: 90, safety: 98 },
  { shift: "Afternoon", output: 88, quality: 90, efficiency: 85, safety: 95 },
  { shift: "Night", output: 82, quality: 85, efficiency: 80, safety: 92 },
];

// 9. Customer Satisfaction Breakdown
const customerSatisfactionData = {
  labels: [
    "Excellent (9-10)",
    "Good (7-8)",
    "Average (5-6)",
    "Poor (3-4)",
    "Very Poor (1-2)",
  ],
  datasets: [
    {
      data: [65, 25, 8, 2, 0],
      backgroundColor: ["#34D399", "#60A5FA", "#FBBF24", "#F87171", "#EF4444"],
      borderWidth: 2,
      borderColor: "#ffffff",
    },
  ],
};

// 10. Financial Performance Trends
const financialTrendsData = [
  {
    quarter: "Q1",
    revenue: 18052,
    costs: 14500,
    profit: 3552,
    margin: 19.7,
    dailySaving: 49536,
  },
  {
    quarter: "Q2",
    revenue: 19500,
    costs: 15200,
    profit: 4300,
    margin: 22.1,
    dailySaving: 52000,
  },
  {
    quarter: "Q3",
    revenue: 21000,
    costs: 15800,
    profit: 5200,
    margin: 24.8,
    dailySaving: 55000,
  },
  {
    quarter: "Q4",
    revenue: 22500,
    costs: 16200,
    profit: 6300,
    margin: 28.0,
    dailySaving: 58000,
  },
];

// Pyramid Chart Data with enhanced visuals
const pyramidData = [
  {
    stage: "🏭 Raw Materials",
    value: 100,
    percentage: 100,
    color: "#10B981",
    gradient: "from-emerald-400 to-emerald-600",
  },
  {
    stage: "⚡ Initial Processing",
    value: 85,
    percentage: 85,
    color: "#3B82F6",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    stage: "🔍 Quality Check 1",
    value: 75,
    percentage: 75,
    color: "#F59E0B",
    gradient: "from-amber-400 to-amber-600",
  },
  {
    stage: "🔧 Assembly",
    value: 65,
    percentage: 65,
    color: "#EF4444",
    gradient: "from-red-400 to-red-600",
  },
  {
    stage: "✅ Quality Check 2",
    value: 58,
    percentage: 58,
    color: "#8B5CF6",
    gradient: "from-purple-400 to-purple-600",
  },
  {
    stage: "🎯 Final Processing",
    value: 52,
    percentage: 52,
    color: "#F97316",
    gradient: "from-orange-400 to-orange-600",
  },
  // { stage: "🔬 Final Inspection", value: 48, percentage: 48, color: "#06B6D4", gradient: "from-cyan-400 to-cyan-600" },
  // { stage: "📦 Finished Products", value: 45, percentage: 45, color: "#84CC16", gradient: "from-lime-400 to-lime-600" },
];

// Enhanced Pyramid Component with animations
const PyramidChart = ({ data }: { data: typeof pyramidData }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-2 p-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center relative group transition-all duration-500 hover:scale-105"
          style={{
            width: `${item.percentage}%`,
            maxWidth: "95%",
            minWidth: "25%",
          }}
        >
          <div
            className={`h-12 flex items-center justify-center text-sm font-bold text-white rounded-xl shadow-lg border-2 border-white/20 backdrop-blur-sm transition-all duration-300 group-hover:shadow-2xl group-hover:border-white/60 bg-gradient-to-r ${item.gradient}`}
            style={{
              width: "100%",
              boxShadow: `0 8px 32px ${item.color}40`,
            }}
          >
            <span className="truncate px-3 drop-shadow-sm">
              {item.stage}: {item.value}%
            </span>
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-gray-800 text-white rounded-full shadow-md flex items-center justify-center text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
};

// Custom Gauge Chart Component
const GaugeChart = ({
  value,
  max,
  title,
  color,
}: {
  value: number;
  max: number;
  title: string;
  color: string;
}) => {
  const percentage = (value / max) * 100;
  const strokeDasharray = `${percentage * 2.51} 251`;

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="relative w-32 h-32">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#374151"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke={color}
            strokeWidth="8"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold" style={{ color }}>
              {value}%
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 text-sm font-medium text-gray-300">{title}</div>
    </div>
  );
};

// Enhanced data sets
const temperatureData = [
  { time: "00:00", temp: 22, humidity: 45, optimal: 24, pressure: 1013 },
  { time: "04:00", temp: 24, humidity: 48, optimal: 24, pressure: 1015 },
  { time: "08:00", temp: 28, humidity: 52, optimal: 24, pressure: 1012 },
  { time: "12:00", temp: 32, humidity: 55, optimal: 24, pressure: 1010 },
  { time: "16:00", temp: 30, humidity: 50, optimal: 24, pressure: 1011 },
  { time: "20:00", temp: 26, humidity: 47, optimal: 24, pressure: 1014 },
];

const machineUtilizationData = [
  {
    machine: "Machine Alpha",
    utilization: 85,
    downtime: 15,
    status: "🟢",
    efficiency: 88,
  },
  {
    machine: "Machine Beta",
    utilization: 92,
    downtime: 8,
    status: "🟢",
    efficiency: 94,
  },
  {
    machine: "Machine Gamma",
    utilization: 78,
    downtime: 22,
    status: "🟡",
    efficiency: 75,
  },
  {
    machine: "Machine Delta",
    utilization: 88,
    downtime: 12,
    status: "🟢",
    efficiency: 90,
  },
  {
    machine: "Machine Omega",
    utilization: 95,
    downtime: 5,
    status: "🟢",
    efficiency: 96,
  },
];

const OverviewPage = () => {
  const chartChunks = chunkData(allProcessData, 4);

  // Always use dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  // Dynamic chart options for dark mode
  const getChartOptions = (): ChartOptions<"doughnut"> => ({
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#E5E7EB",
          font: {
            size: 12,
            weight: 600, // number, not string
          },
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: "rgba(17, 24, 39, 0.95)",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderColor: "#374151",
        borderWidth: 1,
        cornerRadius: 10,
        callbacks: {
          label: (ctx) => `${ctx.label}`,
        },
      },
    },
    maintainAspectRatio: false,
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 2000,
    },
  });

  const getChartOptions1 = (): ChartOptions<"pie"> => ({
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#E5E7EB",
          font: {
            size: 12,
            weight: 600,
          },
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: "rgba(17, 24, 39, 0.95)",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderColor: "#374151",
        borderWidth: 1,
        cornerRadius: 10,
        callbacks: {
          label: (ctx) => `${ctx.label}: ${ctx.formattedValue}`,
        },
      },
    },
    maintainAspectRatio: false,
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 2000,
    },
  });

  return (
    <div className="min-h-screen transition-all duration-500 dark:bg-[#0f1422] text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-600/10 to-teal-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 p-6 ">
        {/* Enhanced Header */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg">
                <FaRocket className="text-2xl text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Manufacturing Analytics Dashboard
                </h1>
                <p className="text-gray-300 mt-1">
                  Real-time insights and performance metrics
                </p>
              </div>
            </div>
          </div>

          {/* Enhanced Filters */}
          <div className="flex flex-wrap gap-4 items-center p-6 bg-gray-800/70 border-gray-700/50 backdrop-blur-xl rounded-2xl shadow-xl border">
            <div className="flex items-center gap-2">
              <FaCog className="text-blue-600" />
              <span className="font-semibold text-gray-300">Filters:</span>
            </div>

            <select className="px-4 py-2 rounded-xl border-2 bg-gray-800/80 text-white border-gray-600 focus:border-blue-400 transition-colors shadow-sm backdrop-blur-sm">
              <option>🏭 Line 1</option>
              <option>🏭 Line 2</option>
            </select>

            <select className="px-4 py-2 rounded-xl border-2 bg-gray-800/80 text-white border-gray-600 focus:border-purple-400 transition-colors shadow-sm backdrop-blur-sm">
              <option>📅 Date Range</option>
            </select>

            <select className="px-4 py-2 rounded-xl border-2 bg-gray-800/80 text-white border-gray-600 focus:border-emerald-400 transition-colors shadow-sm backdrop-blur-sm">
              <option>⚖️ All Products</option>
              <option>🏋️ Heavy</option>
              <option>🪶 Light</option>
            </select>

            <input
              type="date"
              className="px-4 py-2 rounded-xl border-2 bg-gray-800/80 text-white border-gray-600 focus:border-orange-400 transition-colors shadow-sm backdrop-blur-sm"
              defaultValue="2023-04-28"
            />

            <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-semibold">
              <FaFire className="text-sm" />
              Apply Filters
            </button>
          </div>
        </div>

        {/* Enhanced Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {summaryData.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-700/50 backdrop-blur-sm"
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${item.colors} opacity-90`}
              ></div>

              {/* Content */}
              <div className="relative p-6 text-white">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-sm font-medium opacity-90 mb-1">
                      {item.title}
                    </div>
                    <div className="text-2xl font-bold">
                      {item.isCurrency && "₹"}
                      <CountUp
                        end={item.value}
                        duration={2.5}
                        decimals={item.decimals || 0}
                        separator=","
                        suffix={item.suffix || ""}
                      />
                    </div>
                  </div>
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white/60 rounded-full transition-all duration-2000 ease-out"
                    style={{
                      width: `${Math.min((item.value / 100000) * 100, 100)}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Charts Grid - 20 CHARTS TOTAL */}
        <div className="space-y-4 mb-10">
          {/* Row 1: Main Process Charts (2 charts) */}
          {chartChunks.map((chunk, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Chart 1: Enhanced Bar Chart */}
              <div 
              className="h-[420px]"
             
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    <FaChartLine className="text-white text-lg" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    💰 Cost Comparison Analysis
                  </h3>
                </div>

                {/* Graph height increased */}
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={chunk}
                      margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
                    >
                      <defs>
                        <linearGradient
                          id="manualGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#60A5FA"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="100%"
                            stopColor="#3B82F6"
                            stopOpacity={0.6}
                          />
                        </linearGradient>
                        <linearGradient
                          id="zauvijekGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#34D399"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="100%"
                            stopColor="#10B981"
                            stopOpacity={0.6}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#374151"
                        opacity={0.5}
                      />
                      <XAxis
                        dataKey="name"
                        interval={0}
                        height={90}
                        tick={({ x, y, payload }) => (
                          <text
                            x={x}
                            y={y + 10}
                            transform={`rotate(-30, ${x}, ${y})`}
                            textAnchor="end"
                            fill="#D1D5DB"
                            fontSize={12}
                          >
                            {payload.value}
                          </text>
                        )}
                      />

                      <YAxis tick={{ fontSize: 12, fill: "#D1D5DB" }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(17, 24, 39, 0.95)",
                          border: "none",
                          borderRadius: "12px",
                          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                          color: "#ffffff",
                        }}
                      />
                      <Legend />
                      <Bar
                        dataKey="without"
                        fill="url(#manualGradient)"
                        name="🔧 Manual Process"
                        radius={[4, 4, 0, 0]}
                      >
                        <LabelList
                          dataKey="without"
                          position="top"
                          fontSize={10}
                          fill="#D1D5DB"
                        />
                      </Bar>
                      <Bar
                        dataKey="with"
                        fill="url(#zauvijekGradient)"
                        name="🚀 Zauvijek Process"
                        radius={[4, 4, 0, 0]}
                      >
                        <LabelList
                          dataKey="with"
                          position="top"
                          fontSize={10}
                          fill="#D1D5DB"
                        />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Chart 2: Enhanced Line Chart */}
              <div className="h-[420px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg">
                    <MdTrendingUp className="text-white text-lg" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    📈 Savings Trend Analysis
                  </h3>
                </div>

                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={chunk}
                      margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
                    >
                      <defs>
                        <linearGradient
                          id="savingsGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#FBBF24"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="100%"
                            stopColor="#F59E0B"
                            stopOpacity={0.3}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#374151"
                        opacity={0.5}
                      />
                      <XAxis
                        dataKey="name"
                        tick={{ fontSize: 12, fill: "#D1D5DB" }}
                        angle={-30}
                        textAnchor="end"
                        interval={0}
                        height={90}
                      />

                      <YAxis tick={{ fontSize: 12, fill: "#D1D5DB" }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(17, 24, 39, 0.95)",
                          border: "none",
                          borderRadius: "12px",
                          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                          color: "#ffffff",
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="without"
                        stroke="#60A5FA"
                        strokeWidth={3}
                        dot={{ fill: "#60A5FA", strokeWidth: 2, r: 6 }}
                        name="🔧 Manual Cost"
                      />
                      <Line
                        type="monotone"
                        dataKey="with"
                        stroke="#34D399"
                        strokeWidth={3}
                        dot={{ fill: "#34D399", strokeWidth: 2, r: 6 }}
                        name="🚀 Zauvijek Cost"
                      />
                      <Area
                        type="monotone"
                        dataKey="saving"
                        stroke="#FBBF24"
                        fill="url(#savingsGradient)"
                        strokeWidth={3}
                        name="💰 Savings"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          ))}

          {/* Row 2: Doughnut and Bar Charts (2 charts) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Chart 3: Component Rejection Analysis */}
            <div className="">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <FaGem className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  🎯 Component Rejection Analysis
                </h3>
              </div>
              <div className="h-80">
                <Doughnut data={componentChart} options={getChartOptions()} />
              </div>
            </div>

            {/* Chart 4: Daily Savings Distribution */}
            <div >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                  <FaFire className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  💎 Daily Savings Distribution
                </h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={savingsData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#374151"
                      opacity={0.5}
                    />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 10, fill: "#D1D5DB" }}
                      angle={-30}
                      textAnchor="end"
                      height={70}
                    />
                    <YAxis tick={{ fontSize: 12, fill: "#D1D5DB" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                        color: "#ffffff",
                      }}
                      formatter={(value: number) => [
                        `₹${value.toLocaleString()}`,
                        "Daily Savings",
                      ]}
                    />
                    <Bar
                      dataKey="saving"
                      name="💰 Daily Savings"
                      radius={[6, 6, 0, 0]}
                    >
                      <LabelList
                        dataKey="saving"
                        position="top"
                        formatter={(value: number) => `₹${value}`}
                        fontSize={10}
                        fill="#D1D5DB"
                      />
                      {savingsData.map((_, index) => (
                        <Cell
                          key={index}
                          fill={`hsl(${index * 50}, 70%, 60%)`}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Row 3: Pyramid and Radar Charts (2 charts) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Chart 5: Production Process Pyramid */}
            <div >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                  <FaRocket className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  🏭 Production Process Pyramid
                </h3>
              </div>
              <div className="h-80">
                <PyramidChart data={pyramidData} />
              </div>
            </div>

            {/* Chart 6: Quality Performance Radar */}
            <div >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                  <FaShieldAlt className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  🎯 Quality Performance Radar
                </h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={qualityRadarData}>
                    <PolarGrid stroke="#374151" />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{ fontSize: 12, fill: "#D1D5DB" }}
                    />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 100]}
                      tick={{ fontSize: 10, fill: "#D1D5DB" }}
                    />
                    <Radar
                      name="Current Performance"
                      dataKey="A"
                      stroke="#60A5FA"
                      fill="#60A5FA"
                      fillOpacity={0.3}
                      strokeWidth={3}
                      dot={{ fill: "#60A5FA", strokeWidth: 2, r: 4 }}
                    />
                    <Radar
                      name="Previous Period"
                      dataKey="B"
                      stroke="#34D399"
                      fill="#34D399"
                      fillOpacity={0.2}
                      strokeWidth={2}
                      strokeDasharray="5 5"
                    />
                    <Legend />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                        color: "#ffffff",
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Row 4: Environmental and Machine Charts (2 charts) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Chart 7: Environmental Monitoring */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg">
                  <FaThermometerHalf className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  🌡️ Environmental Monitoring
                </h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={temperatureData}>
                    <defs>
                      <linearGradient
                        id="tempGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#F87171"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="100%"
                          stopColor="#EF4444"
                          stopOpacity={0.3}
                        />
                      </linearGradient>
                      <linearGradient
                        id="humidityGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#60A5FA"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="100%"
                          stopColor="#3B82F6"
                          stopOpacity={0.3}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#374151"
                      opacity={0.5}
                    />
                    <XAxis
                      dataKey="time"
                      tick={{ fontSize: 12, fill: "#D1D5DB" }}
                    />
                    <YAxis tick={{ fontSize: 12, fill: "#D1D5DB" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                        color: "#ffffff",
                      }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="temp"
                      stroke="#F87171"
                      fill="url(#tempGradient)"
                      strokeWidth={3}
                      name="🌡️ Temperature (°C)"
                    />
                    <Area
                      type="monotone"
                      dataKey="humidity"
                      stroke="#60A5FA"
                      fill="url(#humidityGradient)"
                      strokeWidth={3}
                      name="💧 Humidity (%)"
                    />
                    <Line
                      type="monotone"
                      dataKey="optimal"
                      stroke="#34D399"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="🎯 Optimal Temp"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 8: Machine Performance Status */}
            <div >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                  <FaCog className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  ⚙️ Machine Performance Status
                </h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={machineUtilizationData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                  >
                    <defs>
                      <linearGradient
                        id="utilizationGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#34D399"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="100%"
                          stopColor="#10B981"
                          stopOpacity={0.6}
                        />
                      </linearGradient>
                      <linearGradient
                        id="downtimeGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#F87171"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="100%"
                          stopColor="#EF4444"
                          stopOpacity={0.6}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#374151"
                      opacity={0.5}
                    />
                    <XAxis
                      dataKey="machine"
                      tick={{ fontSize: 10, fill: "#D1D5DB" }}
                      angle={-30}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis tick={{ fontSize: 12, fill: "#D1D5DB" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                        color: "#ffffff",
                      }}
                    />
                    <Legend />
                    <Bar
                      dataKey="utilization"
                      fill="url(#utilizationGradient)"
                      name="✅ Utilization %"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="downtime"
                      fill="url(#downtimeGradient)"
                      name="⏰ Downtime %"
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Row 5: Workforce and Equipment Scatter (2 charts) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Chart 9: Workforce Analytics */}
            <div >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg">
                  <FaUsers className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  👥 Workforce Analytics
                </h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={workforceData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#374151"
                      opacity={0.5}
                    />
                    <XAxis
                      dataKey="department"
                      tick={{ fontSize: 11, fill: "#D1D5DB" }}
                    />
                    <YAxis tick={{ fontSize: 12, fill: "#D1D5DB" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                        color: "#ffffff",
                      }}
                    />
                    <Legend />
                    <Bar
                      dataKey="employees"
                      fill="#A78BFA"
                      name="👥 Employees"
                      radius={[4, 4, 0, 0]}
                    />
                    <Line
                      type="monotone"
                      dataKey="productivity"
                      stroke="#34D399"
                      strokeWidth={3}
                      name="📈 Productivity %"
                    />
                    <Line
                      type="monotone"
                      dataKey="satisfaction"
                      stroke="#FBBF24"
                      strokeWidth={3}
                      name="😊 Satisfaction %"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 10: Equipment Performance Scatter */}
            <div >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg">
                  <MdAssessment className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  🔧 Equipment Performance Analysis
                </h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart data={equipmentScatterData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#374151"
                      opacity={0.5}
                    />
                    <XAxis
                      dataKey="age"
                      name="Age (Years)"
                      tick={{ fontSize: 12, fill: "#D1D5DB" }}
                    />
                    <YAxis
                      dataKey="efficiency"
                      name="Efficiency %"
                      tick={{ fontSize: 12, fill: "#D1D5DB" }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                        color: "#ffffff",
                      }}
                      formatter={(value, name) => [value, name]}
                      labelFormatter={(label) => `Machine: ${label}`}
                    />
                    <Scatter name="Equipment" fill="#FB7185" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Row 6: Supply Chain and Quality Timeline (2 charts) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Chart 11: Supply Chain Timeline */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg">
                  <FaBoxes className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  📦 Supply Chain Performance
                </h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={supplyChainData}>
                    <defs>
                      <linearGradient
                        id="deliveredGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#34D399"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="100%"
                          stopColor="#10B981"
                          stopOpacity={0.3}
                        />
                      </linearGradient>
                      <linearGradient
                        id="delayedGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#FBBF24"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="100%"
                          stopColor="#F59E0B"
                          stopOpacity={0.3}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#374151"
                      opacity={0.5}
                    />
                    <XAxis
                      dataKey="week"
                      tick={{ fontSize: 12, fill: "#D1D5DB" }}
                    />
                    <YAxis tick={{ fontSize: 12, fill: "#D1D5DB" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                        color: "#ffffff",
                      }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="delivered"
                      stackId="1"
                      stroke="#34D399"
                      fill="url(#deliveredGradient)"
                      name="✅ Delivered"
                    />
                    <Area
                      type="monotone"
                      dataKey="delayed"
                      stackId="2"
                      stroke="#FBBF24"
                      fill="url(#delayedGradient)"
                      name="⏰ Delayed"
                    />
                    <Line
                      type="monotone"
                      dataKey="orders"
                      stroke="#60A5FA"
                      strokeWidth={3}
                      name="📋 Total Orders"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 12: Quality Timeline */}
            <div >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-lg">
                  <MdTimeline className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  📊 Quality Metrics Timeline
                </h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={qualityTimelineData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#374151"
                      opacity={0.5}
                    />
                    <XAxis
                      dataKey="date"
                      tick={{ fontSize: 12, fill: "#D1D5DB" }}
                    />
                    <YAxis tick={{ fontSize: 12, fill: "#D1D5DB" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                        color: "#ffffff",
                      }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="defectRate"
                      stroke="#F87171"
                      strokeWidth={3}
                      dot={{ fill: "#F87171", strokeWidth: 2, r: 6 }}
                      name="🔴 Defect Rate %"
                    />
                    <Line
                      type="monotone"
                      dataKey="reworkRate"
                      stroke="#FBBF24"
                      strokeWidth={3}
                      dot={{ fill: "#FBBF24", strokeWidth: 2, r: 6 }}
                      name="🔄 Rework Rate %"
                    />
                    <Line
                      type="monotone"
                      dataKey="customerComplaints"
                      stroke="#A78BFA"
                      strokeWidth={3}
                      dot={{ fill: "#A78BFA", strokeWidth: 2, r: 6 }}
                      name="📞 Customer Complaints"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Row 7: Inventory and Environmental (2 charts) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Chart 13: Inventory Turnover */}
            <div >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg">
                  <FaBoxes className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  📦 Inventory Management
                </h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={inventoryData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#374151"
                      opacity={0.5}
                    />
                    <XAxis
                      dataKey="item"
                      tick={{ fontSize: 10, fill: "#D1D5DB" }}
                      angle={-30}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis tick={{ fontSize: 12, fill: "#D1D5DB" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                        color: "#ffffff",
                      }}
                    />
                    <Legend />
                    <Bar
                      dataKey="current"
                      fill="#60A5FA"
                      name="📊 Current Stock"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="minimum"
                      fill="#F87171"
                      name="⚠️ Minimum Level"
                      radius={[4, 4, 0, 0]}
                    />
                    <Line
                      type="monotone"
                      dataKey="turnover"
                      stroke="#34D399"
                      strokeWidth={3}
                      name="🔄 Turnover Rate"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 14: Environmental Impact */}
            <div >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-green-500 to-lime-500 rounded-lg">
                  <FaRecycle className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                  🌱 Environmental Impact
                </h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={environmentalData}>
                    <defs>
                      <linearGradient
                        id="co2Gradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#F87171"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="100%"
                          stopColor="#EF4444"
                          stopOpacity={0.3}
                        />
                      </linearGradient>
                      <linearGradient
                        id="waterGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#60A5FA"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="100%"
                          stopColor="#3B82F6"
                          stopOpacity={0.3}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#374151"
                      opacity={0.5}
                    />
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 12, fill: "#D1D5DB" }}
                    />
                    <YAxis tick={{ fontSize: 12, fill: "#D1D5DB" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                        color: "#ffffff",
                      }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="co2"
                      stroke="#F87171"
                      fill="url(#co2Gradient)"
                      name="🏭 CO₂ Emissions"
                    />
                    <Area
                      type="monotone"
                      dataKey="water"
                      stroke="#60A5FA"
                      fill="url(#waterGradient)"
                      name="💧 Water Usage"
                    />
                    <Line
                      type="monotone"
                      dataKey="recycled"
                      stroke="#34D399"
                      strokeWidth={3}
                      name="♻️ Recycled %"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Row 8: Shift Performance and Customer Satisfaction (2 charts) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Chart 15: Shift Performance Comparison */}
            <div >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg">
                  <FaClock className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                  ⏰ Shift Performance Analysis
                </h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={shiftComparisonData}>
                    <PolarGrid stroke="#374151" />
                    <PolarAngleAxis
                      dataKey="shift"
                      tick={{ fontSize: 12, fill: "#D1D5DB" }}
                    />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 100]}
                      tick={{ fontSize: 10, fill: "#D1D5DB" }}
                    />
                    <Radar
                      name="Output"
                      dataKey="output"
                      stroke="#60A5FA"
                      fill="#60A5FA"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                    <Radar
                      name="Quality"
                      dataKey="quality"
                      stroke="#34D399"
                      fill="#34D399"
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                    <Radar
                      name="Efficiency"
                      dataKey="efficiency"
                      stroke="#FBBF24"
                      fill="#FBBF24"
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                    <Legend />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                        color: "#ffffff",
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 16: Customer Satisfaction */}
            <div >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg">
                  <FaStar className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                  ⭐ Customer Satisfaction Breakdown
                </h3>
              </div>
              <div className="h-80">
                <Pie
                  data={customerSatisfactionData}
                  options={getChartOptions1()}
                />
              </div>
            </div>
          </div>

          {/* Row 9: Financial Performance and Energy Consumption (2 charts) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Chart 17: Financial Performance Trends */}
            <div >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg">
                  <FaRupeeSign className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                  💰 Financial Performance Trends
                </h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={financialTrendsData}>
                    <defs>
                      <linearGradient
                        id="revenueGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#60A5FA"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="100%"
                          stopColor="#3B82F6"
                          stopOpacity={0.6}
                        />
                      </linearGradient>
                      <linearGradient
                        id="profitGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#34D399"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="100%"
                          stopColor="#10B981"
                          stopOpacity={0.6}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#374151"
                      opacity={0.5}
                    />
                    <XAxis
                      dataKey="quarter"
                      tick={{ fontSize: 12, fill: "#D1D5DB" }}
                    />
                    <YAxis tick={{ fontSize: 12, fill: "#D1D5DB" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                        color: "#ffffff",
                      }}
                      formatter={(value) => [`₹${value}K`, ""]}
                    />
                    <Legend />
                    <Bar
                      dataKey="revenue"
                      fill="url(#revenueGradient)"
                      name="💵 Revenue (₹K)"
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar
                      dataKey="profit"
                      fill="url(#profitGradient)"
                      name="💎 Profit (₹K)"
                      radius={[4, 4, 0, 0]}
                    />
                    <Line
                      type="monotone"
                      dataKey="margin"
                      stroke="#FBBF24"
                      strokeWidth={3}
                      name="📊 Margin %"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 18: Energy Consumption with Renewables */}
            <div >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-lime-500 to-green-500 rounded-lg">
                  <FaBolt className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent">
                  ⚡ Energy Consumption & Renewables
                </h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={energyData}>
                    <defs>
                      <linearGradient
                        id="consumptionGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#F87171"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="100%"
                          stopColor="#EF4444"
                          stopOpacity={0.3}
                        />
                      </linearGradient>
                      <linearGradient
                        id="renewableGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#34D399"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="100%"
                          stopColor="#10B981"
                          stopOpacity={0.3}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#374151"
                      opacity={0.5}
                    />
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 12, fill: "#D1D5DB" }}
                    />
                    <YAxis tick={{ fontSize: 12, fill: "#D1D5DB" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                        color: "#ffffff",
                      }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="consumption"
                      stackId="1"
                      stroke="#F87171"
                      fill="url(#consumptionGradient)"
                      name="⚡ Total Consumption"
                    />
                    <Area
                      type="monotone"
                      dataKey="renewable"
                      stackId="2"
                      stroke="#34D399"
                      fill="url(#renewableGradient)"
                      name="🌱 Renewable Energy"
                    />
                    <Line
                      type="monotone"
                      dataKey="target"
                      stroke="#60A5FA"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="🎯 Target"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Row 10: Gauge Charts and Production Efficiency (2 charts) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
            {/* Chart 19: Performance Gauges */}
            <div >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg">
                  <MdSpeed className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                  🎯 Performance Gauges
                </h3>
              </div>
              <div className="h-80 grid grid-cols-2 gap-4">
                <GaugeChart
                  value={92}
                  max={100}
                  title="Overall Efficiency"
                  color="#60A5FA"
                />
                <GaugeChart
                  value={88}
                  max={100}
                  title="Quality Score"
                  color="#34D399"
                />
                <GaugeChart
                  value={95}
                  max={100}
                  title="Safety Rating"
                  color="#FBBF24"
                />
                <GaugeChart
                  value={85}
                  max={100}
                  title="Cost Efficiency"
                  color="#F87171"
                />
              </div>
            </div>

            {/* Chart 20: Production Efficiency Trends */}
            <div >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg">
                  <FaIndustry className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                  🏭 Production Efficiency Trends
                </h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={efficiencyData}>
                    <defs>
                      <linearGradient
                        id="efficiencyGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#A78BFA"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="100%"
                          stopColor="#8B5CF6"
                          stopOpacity={0.6}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#374151"
                      opacity={0.5}
                    />
                    <XAxis
                      dataKey="week"
                      tick={{ fontSize: 12, fill: "#D1D5DB" }}
                    />
                    <YAxis tick={{ fontSize: 12, fill: "#D1D5DB" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                        color: "#ffffff",
                      }}
                    />
                    <Legend />
                    <Bar
                      dataKey="efficiency"
                      fill="url(#efficiencyGradient)"
                      name="📈 Efficiency %"
                      radius={[4, 4, 0, 0]}
                    />
                    <Line
                      type="monotone"
                      dataKey="target"
                      stroke="#34D399"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="🎯 Target %"
                    />
                    <Line
                      type="monotone"
                      dataKey="oee"
                      stroke="#FBBF24"
                      strokeWidth={3}
                      name="⚙️ OEE %"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
