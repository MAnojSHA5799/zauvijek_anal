"use client"

import { useState } from "react"
import {
  ResponsiveContainer,
  Bar,
  BarChart,
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
  RadialBarChart,
  RadialBar,
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import ReactApexChart from "react-apexcharts"
import type { ApexOptions } from "apexcharts"

const COLORS = ["#3722f5", "#10B981", "#ef4444", "#f59e0b", "#8b5cf6"]

interface MetalMeltingData {
  processName: string
  withoutZauvijek: number
  withZauvijek: number
  dailySaving: number
  monthlySaving: number
  yearlySaving: number
  costReduction: number
  energyBefore: number
  energyWithZauvijek: number
  energySaved: number
}

export default function MetalMeltingDashboard() {
  const [formData, setFormData] = useState<MetalMeltingData>({
    processName: "Metal Melting",
    withoutZauvijek: 10968.75,
    withZauvijek: 9587.5,
    dailySaving: 1381.25,
    monthlySaving: 41437.5,
    yearlySaving: 503156.25,
    costReduction: 12.6,
    energyBefore: 987.19,
    energyWithZauvijek: 862.88,
    energySaved: 124.31,
  })

  const handleInputChange = (field: keyof MetalMeltingData, value: string) => {
    const numValue = Number.parseFloat(value) || 0
    setFormData((prev) => {
      const updated = { ...prev, [field]: numValue }

      // Auto-calculate dependent values
      if (field === "withoutZauvijek" || field === "withZauvijek") {
        updated.dailySaving = updated.withoutZauvijek - updated.withZauvijek
        updated.monthlySaving = updated.dailySaving * 30
        updated.yearlySaving = updated.dailySaving * 365
        updated.costReduction = ((updated.withoutZauvijek - updated.withZauvijek) / updated.withoutZauvijek) * 100
      }

      if (field === "energyBefore" || field === "energyWithZauvijek") {
        updated.energySaved = updated.energyBefore - updated.energyWithZauvijek
      }

      return updated
    })
  }

  const summaryData = [
    {
      title: "Process Name",
      value: formData.processName,
      isCurrency: false,
      colors: "from-blue-600 to-blue-500",
      icon: <FaIndustry className="text-2xl" />,
    },
    {
      title: "Without Zauvijek",
      value: formData.withoutZauvijek,
      isCurrency: true,
      colors: "from-blue-700 to-blue-500",
      icon: <FaRupeeSign className="text-2xl" />,
    },
    {
      title: "With Zauvijek",
      value: formData.withZauvijek,
      isCurrency: true,
      colors: "from-sky-700 to-sky-500",
      icon: <FaRupeeSign className="text-2xl" />,
    },
    {
      title: "Avg. Cost Reduction",
      value: formData.costReduction,
      suffix: "%",
      isCurrency: false,
      decimals: 2,
      colors: "from-rose-600 to-red-500",
      icon: <FaChartLine className="text-2xl" />,
    },
    {
      title: "Electricity Saved",
      value: formData.energySaved,
      suffix: " kWh",
      isCurrency: false,
      decimals: 2,
      colors: "from-emerald-600 to-emerald-400",
      icon: <FaBolt className="text-2xl" />,
    },
    {
      title: "Total Saving (Per Day)",
      value: formData.dailySaving,
      isCurrency: true,
      decimals: 2,
      colors: "from-yellow-500 to-orange-400",
      icon: <MdSavings className="text-2xl" />,
    },
    {
      title: "Monthly Saving",
      value: formData.monthlySaving,
      isCurrency: true,
      colors: "from-indigo-600 to-indigo-400",
      icon: <MdCalendarToday className="text-2xl" />,
    },
    {
      title: "Yearly Saving",
      value: formData.yearlySaving,
      isCurrency: true,
      colors: "from-teal-600 to-teal-400",
      icon: <MdCalendarToday className="text-2xl" />,
    },
  ]

  const monthlyTrendData = [
    { name: "Jan", Manual: formData.withoutZauvijek, Zauvijek: formData.withZauvijek, Saving: formData.dailySaving },
    { name: "Feb", Manual: formData.withoutZauvijek, Zauvijek: formData.withZauvijek, Saving: formData.dailySaving },
    { name: "Mar", Manual: formData.withoutZauvijek, Zauvijek: formData.withZauvijek, Saving: formData.dailySaving },
    { name: "Apr", Manual: formData.withoutZauvijek, Zauvijek: formData.withZauvijek, Saving: formData.dailySaving },
    { name: "May", Manual: formData.withoutZauvijek, Zauvijek: formData.withZauvijek, Saving: formData.dailySaving },
    { name: "Jun", Manual: formData.withoutZauvijek, Zauvijek: formData.withZauvijek, Saving: formData.dailySaving },
    { name: "Jul", Manual: formData.withoutZauvijek, Zauvijek: formData.withZauvijek, Saving: formData.dailySaving },
    // { name: "Aug", Manual: formData.withoutZauvijek, Zauvijek: formData.withZauvijek, Saving: formData.dailySaving },
    // { name: "Sep", Manual: formData.withoutZauvijek, Zauvijek: formData.withZauvijek, Saving: formData.dailySaving },
    // { name: "Oct", Manual: formData.withoutZauvijek, Zauvijek: formData.withZauvijek, Saving: formData.dailySaving },
    // { name: "Nov", Manual: formData.withoutZauvijek, Zauvijek: formData.withZauvijek, Saving: formData.dailySaving },
    // { name: "Dec", Manual: formData.withoutZauvijek, Zauvijek: formData.withZauvijek, Saving: formData.dailySaving },
  ]

  const pieChartData = [
    { name: "Before Zauvijek", value: formData.energyBefore, fill: "#3722f5" },
    { name: "With Zauvijek", value: formData.energyWithZauvijek, fill: "#10B981" },
  ]

  const costComparisonData = [
    { category: "Without Zauvijek", value: formData.withoutZauvijek, fill: "#ef4444" },
    { category: "With Zauvijek", value: formData.withZauvijek, fill: "#10B981" },
    { category: "Daily Savings", value: formData.dailySaving, fill: "#3B82F6" },
  ]

  const quarterlyData = [
    { quarter: "Q1", savings: formData.monthlySaving * 3, target: formData.monthlySaving * 3.2, efficiency: 93.75 },
    { quarter: "Q2", savings: formData.monthlySaving * 3, target: formData.monthlySaving * 3.2, efficiency: 93.75 },
    { quarter: "Q3", savings: formData.monthlySaving * 3, target: formData.monthlySaving * 3.2, efficiency: 93.75 },
    { quarter: "Q4", savings: formData.monthlySaving * 3, target: formData.monthlySaving * 3.2, efficiency: 93.75 },
  ]

  const radarData = [
    { metric: "Cost Efficiency", value: formData.costReduction, fullMark: 100 },
    { metric: "Energy Savings", value: (formData.energySaved / formData.energyBefore) * 100, fullMark: 100 },
    { metric: "Time Reduction", value: 45, fullMark: 100 },
    { metric: "Quality", value: 85, fullMark: 100 },
    { metric: "Productivity", value: 70, fullMark: 100 },
    { metric: "ROI", value: 80, fullMark: 100 },
  ]

  const scatterData = Array.from({ length: 12 }, (_, i) => ({
    month: i + 1,
    cost: formData.withoutZauvijek - i * 50,
    efficiency: formData.costReduction + i * 1.5,
  }))

  const savingsBreakdownData = [
    { period: "Daily", amount: formData.dailySaving, fill: "#3B82F6" },
    { period: "Monthly", amount: formData.monthlySaving, fill: "#10B981" },
    { period: "Yearly", amount: formData.yearlySaving, fill: "#f59e0b" },
  ]

  const radialData = [{ name: "Cost Reduction", value: formData.costReduction, fill: "#3B82F6" }]

  // ApexCharts Options
  const donutOptions: ApexOptions = {
    series: [formData.withoutZauvijek, formData.withZauvijek, formData.dailySaving],
    chart: { type: "donut", height: 350, foreColor: "#ffffff" },
    labels: ["Without Zauvijek", "With Zauvijek", "Daily Savings"],
    colors: ["#ef4444", "#10B981", "#3B82F6"],
    legend: { position: "bottom", labels: { colors: "#ffffff" } },
    dataLabels: { enabled: true, style: { colors: ["#ffffff"] } },
    plotOptions: { pie: { donut: { size: "70%" } } },
  }

  const areaOptions: ApexOptions = {
    series: [
      { name: "Manual Process", data: monthlyTrendData.map((d) => d.Manual) },
      { name: "With Zauvijek", data: monthlyTrendData.map((d) => d.Zauvijek) },
    ],
    chart: { height: 350, type: "area", foreColor: "#ffffff", toolbar: { show: false } },
    colors: ["#ef4444", "#10B981"],
    xaxis: {
      categories: monthlyTrendData.map((d) => d.name),
      labels: { style: { colors: Array(12).fill("#ffffff") } },
    },
    yaxis: { labels: { style: { colors: ["#ffffff"] } } },
    legend: { labels: { colors: "#ffffff" } },
  }

  const radialOptions: ApexOptions = {
    series: [formData.costReduction],
    chart: { height: 350, type: "radialBar", foreColor: "#ffffff" },
    plotOptions: {
      radialBar: {
        hollow: { size: "70%" },
        dataLabels: { name: { fontSize: "22px", color: "#ffffff" }, value: { fontSize: "16px", color: "#ffffff" } },
      },
    },
    labels: ["Cost Reduction %"],
    colors: ["#10B981"],
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f1422] text-black dark:text-white p-6 mb-5 transition-colors duration-300">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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

      {/* Data Input Form */}
      <Card className="mb-8 bg-white dark:bg-[#1c2331]">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">
            Metal Melting Process Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="processName">Process Name</Label>
              <Input
                id="processName"
                value={formData.processName}
                onChange={(e) => handleInputChange("processName", e.target.value)}
                className="bg-white dark:bg-[#0f1422]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="withoutZauvijek">Cost Without Zauvijek (₹)</Label>
              <Input
                id="withoutZauvijek"
                type="number"
                step="0.01"
                value={formData.withoutZauvijek}
                onChange={(e) => handleInputChange("withoutZauvijek", e.target.value)}
                className="bg-white dark:bg-[#0f1422]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="withZauvijek">Cost With Zauvijek (₹)</Label>
              <Input
                id="withZauvijek"
                type="number"
                step="0.01"
                value={formData.withZauvijek}
                onChange={(e) => handleInputChange("withZauvijek", e.target.value)}
                className="bg-white dark:bg-[#0f1422]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="energyBefore">Energy Before Zauvijek (kWh)</Label>
              <Input
                id="energyBefore"
                type="number"
                step="0.01"
                value={formData.energyBefore}
                onChange={(e) => handleInputChange("energyBefore", e.target.value)}
                className="bg-white dark:bg-[#0f1422]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="energyWithZauvijek">Energy With Zauvijek (kWh)</Label>
              <Input
                id="energyWithZauvijek"
                type="number"
                step="0.01"
                value={formData.energyWithZauvijek}
                onChange={(e) => handleInputChange("energyWithZauvijek", e.target.value)}
                className="bg-white dark:bg-[#0f1422]"
              />
            </div>

            <div className="space-y-2">
              <Label>Daily Saving (Auto-calculated)</Label>
              <Input value={`₹${formData.dailySaving.toFixed(2)}`} disabled className="bg-gray-100 dark:bg-gray-700" />
            </div>
          </div>

          <Separator className="my-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400">Monthly Saving</div>
              <div className="text-lg font-bold text-green-600 dark:text-green-400">
                ₹{formData.monthlySaving.toLocaleString()}
              </div>
            </div>
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400">Yearly Saving</div>
              <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                ₹{formData.yearlySaving.toLocaleString()}
              </div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400">Cost Reduction</div>
              <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                {formData.costReduction.toFixed(2)}%
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Original Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {/* 1. Monthly Performance Trends - Composed Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            1. Monthly Performance Trends - Composed Chart
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart data={monthlyTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid vertical={false} horizontal={false} />
              <XAxis dataKey="name" axisLine={true} tickLine={true} tick={{ fill: "#ffffff", fontSize: 12 }} />
              <YAxis axisLine={true} tickLine={true} tick={{ fill: "#ffffff", fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="Manual" fill="#3722f5" name="Manual Process" />
              <Bar dataKey="Zauvijek" fill="#3B82F6" name="With Zauvijek" />
              <Line type="monotone" dataKey="Saving" stroke="#10B981" name="Savings" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* 2. Energy Comparison Pie Chart */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">2. Energy Comparison - Pie Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ value }) => `${value} kWh`}
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value} kWh`, "Energy Consumption"]} />
              <Legend layout="horizontal" verticalAlign="bottom" align="center" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 3. Savings Trend Line Chart */}
      <div className="bg-white dark:bg-[#1c2331] p-6 mb-4 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          3. Monthly Savings Trend - Line Chart
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <XAxis dataKey="name" tick={{ fill: "#ffffff", fontSize: 12 }} />
            <YAxis tick={{ fill: "#ffffff", fontSize: 12 }} />
            <Tooltip formatter={(value) => [`₹${Number(value).toLocaleString()}`, "Daily Savings"]} />
            <Line
              type="monotone"
              dataKey="Saving"
              stroke="#10B981"
              strokeWidth={4}
              dot={{ fill: "#10B981", strokeWidth: 0, r: 0 }}
              activeDot={{ r: 8, stroke: "#10B981", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Additional Charts Grid - 2 per row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* 4. Bar Chart - Cost Comparison */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">4. Cost Comparison - Bar Chart</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={costComparisonData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" tick={{ fill: "#ffffff", fontSize: 12 }} axisLine={{ stroke: "#ffffff" }} />
              <YAxis tick={{ fill: "#ffffff", fontSize: 12 }} axisLine={{ stroke: "#ffffff" }} />
              <Tooltip />
              <Bar dataKey="value" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 5. Area Chart */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">5. Monthly Trends - Area Chart</h2>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={monthlyTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fill: "#ffffff", fontSize: 12 }} axisLine={{ stroke: "#ffffff" }} />
              <YAxis tick={{ fill: "#ffffff", fontSize: 12 }} axisLine={{ stroke: "#ffffff" }} />
              <Tooltip />
              <Area type="monotone" dataKey="Manual" stackId="1" stroke="#ef4444" fill="#ef4444" />
              <Area type="monotone" dataKey="Zauvijek" stackId="1" stroke="#10B981" fill="#10B981" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* 6. Radial Bar Chart */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">6. Efficiency - Radial Bar Chart</h2>
          <ResponsiveContainer width="100%" height={350}>
            <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" data={radialData}>
              <RadialBar dataKey="value" cornerRadius={10} fill="#10B981" />
              <Tooltip />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>

        {/* 7. Scatter Plot */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            7. Cost vs Efficiency - Scatter Plot
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
              <Tooltip />
              <Scatter dataKey="efficiency" fill="#3B82F6" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* 8. Radar Chart */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            8. Performance Metrics - Radar Chart
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="metric" tick={{ fill: "#ffffff", fontSize: 10 }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "#ffffff", fontSize: 10 }} />
              <Radar name="Performance" dataKey="value" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        {/* 9. Stacked Bar Chart */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            9. Quarterly Performance - Stacked Bar
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={quarterlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="quarter" tick={{ fill: "#ffffff", fontSize: 12 }} axisLine={{ stroke: "#ffffff" }} />
              <YAxis tick={{ fill: "#ffffff", fontSize: 12 }} axisLine={{ stroke: "#ffffff" }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="savings" stackId="a" fill="#10B981" name="Savings" />
              <Bar dataKey="target" stackId="a" fill="#3B82F6" name="Target" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 10. Horizontal Bar Chart */}
       
        {/* 11. ApexCharts Donut */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            11. Savings Breakdown - Donut Chart
          </h2>
          <ReactApexChart options={donutOptions} series={donutOptions.series} type="donut" height={350} />
        </div>

        {/* 12. ApexCharts Area */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            12. Cost Trends - ApexCharts Area
          </h2>
          <ReactApexChart options={areaOptions} series={areaOptions.series} type="area" height={350} />
        </div>

        {/* 13. ApexCharts Radial Bar */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            13. Cost Reduction - Radial Progress
          </h2>
          <ReactApexChart options={radialOptions} series={radialOptions.series} type="radialBar" height={350} />
        </div>

        {/* 14. Progress Indicators */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">14. KPI Progress Indicators</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Cost Reduction</span>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {formData.costReduction.toFixed(1)}%
                </span>
              </div>
              <Progress value={formData.costReduction} className="h-3" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Energy Savings</span>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {((formData.energySaved / formData.energyBefore) * 100).toFixed(1)}%
                </span>
              </div>
              <Progress value={(formData.energySaved / formData.energyBefore) * 100} className="h-3" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">ROI Achievement</span>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">80%</span>
              </div>
              <Progress value={80} className="h-3" />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">₹{formData.dailySaving.toFixed(0)}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Daily Savings</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{formData.energySaved.toFixed(1)}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">kWh Saved</div>
              </div>
            </div>
          </div>
        </div>

        {/* 15. Summary Statistics */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            15. Summary Statistics & Comparison
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                <div className="text-2xl font-bold text-red-600">₹{formData.withoutZauvijek.toFixed(0)}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Without Zauvijek</div>
                <div className="text-xs text-red-500 mt-1">{formData.energyBefore.toFixed(1)} kWh</div>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                <div className="text-2xl font-bold text-green-600">₹{formData.withZauvijek.toFixed(0)}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">With Zauvijek</div>
                <div className="text-xs text-green-500 mt-1">{formData.energyWithZauvijek.toFixed(1)} kWh</div>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Process Efficiency</span>
                <Badge variant="default">Excellent</Badge>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Cost Reduction</span>
                <Badge variant="secondary">{formData.costReduction.toFixed(1)}%</Badge>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">Energy Savings</span>
                <Badge variant="outline">{formData.energySaved.toFixed(1)} kWh</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">ROI Status</span>
                <Badge className="bg-green-600">Positive</Badge>
              </div>
            </div>
            <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">₹{formData.yearlySaving.toLocaleString()}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Yearly Savings</div>
              </div>
            </div>
          </div>
        </div>

        {/* 16. Donut Chart - Savings Breakdown */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            16. Savings Breakdown - Donut Chart
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={savingsBreakdownData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ period, percent }) => `${period}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                innerRadius={40}
                fill="#8884d8"
                dataKey="amount"
              >
                {savingsBreakdownData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* 17. Multi-Line Chart */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            17. Multi-Metric Trends - Multi-Line Chart
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={monthlyTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fill: "#ffffff", fontSize: 12 }} axisLine={{ stroke: "#ffffff" }} />
              <YAxis tick={{ fill: "#ffffff", fontSize: 12 }} axisLine={{ stroke: "#ffffff" }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Manual" stroke="#ef4444" strokeWidth={2} name="Manual Process" />
              <Line type="monotone" dataKey="Zauvijek" stroke="#10B981" strokeWidth={2} name="With Zauvijek" />
              <Line type="monotone" dataKey="Saving" stroke="#3B82F6" strokeWidth={2} name="Savings" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* 18. Comparison Cards */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">18. Before vs After Comparison</h2>
          <div className="grid grid-cols-2 gap-4 h-[300px]">
            <div className="flex flex-col items-center justify-center bg-red-50 dark:bg-red-950 rounded-lg p-4">
              <div className="text-3xl font-bold text-red-600">₹{formData.withoutZauvijek.toFixed(0)}</div>
              <div className="text-sm text-muted-foreground">Without Zauvijek</div>
              <div className="text-xs text-red-500 mt-2">{formData.energyBefore.toFixed(1)} kWh Energy</div>
              <div className="text-xs text-red-500">Higher Costs</div>
            </div>
            <div className="flex flex-col items-center justify-center bg-green-50 dark:bg-green-950 rounded-lg p-4">
              <div className="text-3xl font-bold text-green-600">₹{formData.withZauvijek.toFixed(0)}</div>
              <div className="text-sm text-muted-foreground">With Zauvijek</div>
              <div className="text-xs text-green-500 mt-2">{formData.energyWithZauvijek.toFixed(1)} kWh Energy</div>
              <div className="text-xs text-green-500">Optimized Costs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
