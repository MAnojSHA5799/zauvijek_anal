"use client"
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
  ComposedChart,
  ScatterChart,
  Scatter,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts"
import { FaIndustry, FaRupeeSign, FaChartLine, FaBolt } from "react-icons/fa"
import { MdSavings, MdCalendarToday } from "react-icons/md"
import CountUp from "react-countup"
import ReactApexChart from "react-apexcharts"
import type { ApexOptions } from "apexcharts"

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
]

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
]

const pieChartData = [
  { name: "Before Zauvijek", value: 43.88, fill: "#ef4444" },
  { name: "With Zauvijek", value: 17.55, fill: "#3B82F6" },
]

const costComparisonData = [
  { category: "Without Zauvijek", value: 487.5, fill: "#ef4444" },
  { category: "With Zauvijek", value: 195.0, fill: "#3B82F6" },
  { category: "Savings", value: 292.5, fill: "#10B981" },
]

const quarterlyData = [
  { quarter: "Q1", savings: 26325, target: 30000, efficiency: 87.75 },
  { quarter: "Q2", savings: 26325, target: 30000, efficiency: 87.75 },
  { quarter: "Q3", savings: 26325, target: 30000, efficiency: 87.75 },
  { quarter: "Q4", savings: 26325, target: 30000, efficiency: 87.75 },
]

const radarData = [
  { metric: "Cost Efficiency", value: 60, fullMark: 100 },
  { metric: "Energy Savings", value: 60, fullMark: 100 },
  { metric: "Time Reduction", value: 45, fullMark: 100 },
  { metric: "Quality", value: 85, fullMark: 100 },
  { metric: "Productivity", value: 70, fullMark: 100 },
  { metric: "ROI", value: 80, fullMark: 100 },
]

const scatterData = Array.from({ length: 12 }, (_, i) => ({
  month: i + 1,
  cost: 487.5 - i * 15,
  efficiency: 60 + i * 2,
}))

// const savingsBreakdownData = [
//   { period: "Daily", amount: 292.5, fill: "#3B82F6" },
//   { period: "Monthly", amount: 8775, fill: "#10B981" },
//   { period: "Yearly", amount: 106762.5, fill: "#f59e0b" },
// ]

const radialData = [{ name: "Cost Reduction", value: 60, fill: "#3B82F6" }]

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
      show: true,
    },
    animations: {
      enabled: true,
    },
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
    formatter: (val) => val + "",
    offsetY: -20,
    style: {
      fontSize: "12px",
      colors: ["#ffffff"],
    },
  },
  tooltip: {
    enabled: true,
    theme: "dark",
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
      formatter: (val) => val + "",
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
}

// ApexCharts Donut Chart Options
const donutOptions: ApexOptions = {
  series: [487.5, 195.0, 292.5],
  chart: {
    type: "donut",
    height: 350,
    foreColor: "#ffffff",
  },
  labels: ["Without Zauvijek", "With Zauvijek", "Savings"],
  colors: ["#ef4444", "#3B82F6", "#10B981"],
  legend: {
    position: "bottom",
    labels: {
      colors: "#ffffff",
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ["#ffffff"],
    },
  },
  plotOptions: {
    pie: {
      donut: {
        size: "70%",
      },
    },
  },
}

// ApexCharts Area Chart Options
const areaOptions: ApexOptions = {
  series: [
    {
      name: "Manual Process",
      data: monthlyTrendData.map((d) => d.Manual),
    },
    {
      name: "With Zauvijek",
      data: monthlyTrendData.map((d) => d.Zauvijek),
    },
  ],
  chart: {
    height: 350,
    type: "area",
    foreColor: "#ffffff",
    toolbar: { show: false },
  },
  colors: ["#ef4444", "#3B82F6"],
  xaxis: {
    categories: monthlyTrendData.map((d) => d.name),
    labels: {
      style: {
        colors: Array(12).fill("#ffffff"),
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: ["#ffffff"],
      },
    },
  },
  legend: {
    labels: {
      colors: "#ffffff",
    },
  },
}

// ApexCharts Radial Bar Options
const radialOptions: ApexOptions = {
  series: [60],
  chart: {
    height: 350,
    type: "radialBar",
    foreColor: "#ffffff",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "70%",
      },
      dataLabels: {
        name: {
          fontSize: "22px",
          color: "#ffffff",
        },
        value: {
          fontSize: "16px",
          color: "#ffffff",
        },
      },
    },
  },
  labels: ["Cost Reduction %"],
  colors: ["#3B82F6"],
}

const series = options.series

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
            1. Monthly Performance Trends - Line Chart
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={monthlyTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
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
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Energy Comparison (kWh)</h2>
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
                defaultValue={26.33}
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
                defaultValue={38091}
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

      {/* Charts Grid - 2 per row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* 2. Bar Chart */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Cost Comparison</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={costComparisonData}>
              <CartesianGrid strokeDasharray="0" />
              <XAxis dataKey="category" tick={{ fill: "#ffffff", fontSize: 12 }} axisLine={{ stroke: "#ffffff" }} />
              <YAxis tick={{ fill: "#ffffff", fontSize: 12 }} axisLine={{ stroke: "#ffffff" }} />
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: 8 }}
                labelStyle={{ color: "#ffffff" }}
                itemStyle={{ color: "#ffffff" }}
              />
              <Bar dataKey="value" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 3. Area Chart */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Monthly Trends</h2>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={monthlyTrendData}>
              <CartesianGrid strokeDasharray="0" />
              <XAxis dataKey="name" tick={{ fill: "#ffffff", fontSize: 12 }} axisLine={{ stroke: "#ffffff" }} />
              <YAxis tick={{ fill: "#ffffff", fontSize: 12 }} axisLine={{ stroke: "#ffffff" }} />
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: 8 }}
                labelStyle={{ color: "#ffffff" }}
                itemStyle={{ color: "#ffffff" }}
              />
              <Area type="monotone" dataKey="Manual" stackId="1" stroke="#ef4444" fill="#ef4444" />
              <Area type="monotone" dataKey="Zauvijek" stackId="1" stroke="#3B82F6" fill="#3B82F6" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* 4. Pie Chart */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Energy Distribution
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: 8 }}
                labelStyle={{ color: "#ffffff" }}
                itemStyle={{ color: "#ffffff" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* 5. Composed Chart */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Multi-Metric</h2>
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart data={monthlyTrendData}>
              <CartesianGrid strokeDasharray="0" />
              <XAxis dataKey="name" tick={{ fill: "#ffffff", fontSize: 12 }} axisLine={{ stroke: "#ffffff" }} />
              <YAxis tick={{ fill: "#ffffff", fontSize: 12 }} axisLine={{ stroke: "#ffffff" }} />
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: 8 }}
                labelStyle={{ color: "#ffffff" }}
                itemStyle={{ color: "#ffffff" }}
              />
              <Legend wrapperStyle={{ color: "#ffffff" }} />
              <Bar dataKey="Zauvijek" fill="#3B82F6" name="With Zauvijek" />
              <Line type="monotone" dataKey="Saving" stroke="#10B981" strokeWidth={2} name="Savings" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* 6. Radial Bar Chart */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Efficiency</h2>
          <ResponsiveContainer width="100%" height={350}>
            <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" data={radialData}>
              <RadialBar dataKey="value" cornerRadius={10} fill="#3B82F6" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: 8 }}
                labelStyle={{ color: "#ffffff" }}
                itemStyle={{ color: "#ffffff" }}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>

        {/* 7. Scatter Plot */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Cost vs Efficiency
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <ScatterChart data={scatterData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                name="Month"
                tick={{ fill: "#ffffff", fontSize: 12 }}
                axisLine={{ stroke: "#ffffff" }}
              />
              <YAxis
                dataKey="cost"
                name="Cost"
                tick={{ fill: "#ffffff", fontSize: 12 }}
                axisLine={{ stroke: "#ffffff" }}
              />
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: 8 }}
                labelStyle={{ color: "#ffffff" }}
                itemStyle={{ color: "#ffffff" }}
              />
              <Scatter dataKey="efficiency" fill="#3B82F6" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* 8. Radar Chart */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Performance Metrics
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="metric" tick={{ fill: "#ffffff", fontSize: 10 }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "#ffffff", fontSize: 10 }} />
              <Radar name="Performance" dataKey="value" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: 8 }}
                labelStyle={{ color: "#ffffff" }}
                itemStyle={{ color: "#ffffff" }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* 9. Stacked Bar Chart */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Quarterly Performance
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={quarterlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="quarter" tick={{ fill: "#ffffff", fontSize: 12 }} axisLine={{ stroke: "#ffffff" }} />
              <YAxis tick={{ fill: "#ffffff", fontSize: 12 }} axisLine={{ stroke: "#ffffff" }} />
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: 8 }}
                labelStyle={{ color: "#ffffff" }}
                itemStyle={{ color: "#ffffff" }}
              />
              <Legend wrapperStyle={{ color: "#ffffff" }} />
              <Bar dataKey="savings" stackId="a" fill="#10B981" name="Savings" />
              <Bar dataKey="target" stackId="a" fill="#3B82F6" name="Target" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 10. ApexCharts Donut */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Savings Breakdown
          </h2>
          <ReactApexChart options={donutOptions} series={donutOptions.series} type="donut" height={350} />
        </div>

        {/* 11. ApexCharts Area */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Cost Trends
          </h2>
          <ReactApexChart options={areaOptions} series={areaOptions.series} type="area" height={350} />
        </div>

        {/* 12. ApexCharts Radial Bar */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Cost Reduction
          </h2>
          <ReactApexChart options={radialOptions} series={radialOptions.series} type="radialBar" height={350} />
        </div>

        {/* 13. Horizontal Bar Chart */}
        {/* <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Cost Comparison
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={costComparisonData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" tick={{ fill: "#ffffff", fontSize: 12 }} axisLine={{ stroke: "#ffffff" }} />
              <YAxis
                dataKey="category"
                type="category"
                width={100}
                tick={{ fill: "#ffffff", fontSize: 12 }}
                axisLine={{ stroke: "#ffffff" }}
              />
              <Tooltip
                contentStyle={{ backgroundColor: "#1f2937", border: "none", borderRadius: 8 }}
                labelStyle={{ color: "#ffffff" }}
                itemStyle={{ color: "#ffffff" }}
              />
              <Bar dataKey="value" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div> */}

        {/* 14. Progress Indicators */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">KPI Progress Indicators</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Cost Reduction</span>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">60%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Energy Savings</span>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">60%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">ROI Achievement</span>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">80%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">₹292.5</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Daily Savings</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <div className="text-2xl font-bold text-green-600">26.33</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">kWh Saved</div>
              </div>
            </div>
          </div>
        </div>

        {/* 15. Summary Statistics */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Summary Statistics & Comparison
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                <div className="text-2xl font-bold text-red-600">₹487.5</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Without Zauvijek</div>
                <div className="text-xs text-red-500 mt-1">43.88 kWh</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <div className="text-2xl font-bold text-green-600">₹195.0</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">With Zauvijek</div>
                <div className="text-xs text-green-500 mt-1">17.55 kWh</div>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Process Efficiency</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">
                  Excellent
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Cost Reduction</span>
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                  60%
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Energy Savings</span>
                <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded text-xs">
                  26.33 kWh
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">ROI Status</span>
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-xs">
                  Positive
                </span>
              </div>
            </div>
            <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">₹106,762</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Yearly Savings</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Original ApexCharts Bar Chart */}
      <div className="bg-white dark:bg-[#1c2331] p-6 mb-4 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          KPI Breakdown
        </h2>
        <ReactApexChart options={options} series={series} type="bar" height={350} />
      </div>
    </div>
  )
}
