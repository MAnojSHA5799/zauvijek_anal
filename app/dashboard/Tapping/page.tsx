"use client"
import { useState } from "react"
import {
  ResponsiveContainer,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  FunnelChart,
  Funnel,
  LabelList,
} from "recharts"
import { FaIndustry, FaRupeeSign, FaChartLine, FaBolt, FaCog, FaLeaf, FaRocket, FaShieldAlt } from "react-icons/fa"
import { MdSavings, MdCalendarToday, MdTrendingUp, MdSpeed, MdEco, MdSecurity } from "react-icons/md"
import { TbReportAnalytics, TbTargetArrow } from "react-icons/tb"
import CountUp from "react-countup"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const COLORS = ["#1e7348", "#10B981", "#3B82F6", "#8B5CF6", "#F59E0B", "#EF4444", "#06B6D4", "#84CC16"]
// const GRADIENT_COLORS = [
//   "from-emerald-600 to-emerald-400",
//   "from-blue-600 to-blue-400",
//   "from-purple-600 to-purple-400",
//   "from-amber-600 to-amber-400",
//   "from-red-600 to-red-400",
//   "from-cyan-600 to-cyan-400",
//   "from-lime-600 to-lime-400",
//   "from-pink-600 to-pink-400",
// ]

interface TappingData {
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

export default function EnhancedTappingCharts() {
  const [formData, setFormData] = useState<TappingData>({
    processName: "Tapping",
    withoutZauvijek: 1000.0,
    withZauvijek: 562.5,
    dailySaving: 437.5,
    monthlySaving: 13125.0,
    yearlySaving: 159687.5,
    costReduction: 43.75,
    energyBefore: 90.0,
    energyWithZauvijek: 50.63,
    energySaved: 39.38,
  })

  const handleInputChange = (field: keyof TappingData, value: string) => {
    const numValue = Number.parseFloat(value) || 0
    setFormData((prev) => {
      const updated = { ...prev, [field]: numValue }

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

  // Enhanced data for multiple chart types
  const monthlyTrendData = [
    {
      name: "Jan",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Efficiency: 85,
    },
    {
      name: "Feb",
      Manual: formData.withoutZauvijek * 1.1,
      Zauvijek: formData.withZauvijek * 0.95,
      Saving: formData.dailySaving * 1.2,
      Efficiency: 88,
    },
    {
      name: "Mar",
      Manual: formData.withoutZauvijek * 1.05,
      Zauvijek: formData.withZauvijek * 0.9,
      Saving: formData.dailySaving * 1.15,
      Efficiency: 90,
    },
    {
      name: "Apr",
      Manual: formData.withoutZauvijek * 0.95,
      Zauvijek: formData.withZauvijek * 0.85,
      Saving: formData.dailySaving * 1.1,
      Efficiency: 92,
    },
    {
      name: "May",
      Manual: formData.withoutZauvijek * 1.2,
      Zauvijek: formData.withZauvijek * 0.8,
      Saving: formData.dailySaving * 1.4,
      Efficiency: 94,
    },
    {
      name: "Jun",
      Manual: formData.withoutZauvijek * 1.15,
      Zauvijek: formData.withZauvijek * 0.75,
      Saving: formData.dailySaving * 1.35,
      Efficiency: 96,
    },
    {
      name: "Jul",
      Manual: formData.withoutZauvijek * 1.3,
      Zauvijek: formData.withZauvijek * 0.7,
      Saving: formData.dailySaving * 1.5,
      Efficiency: 97,
    },
    {
      name: "Aug",
      Manual: formData.withoutZauvijek * 1.25,
      Zauvijek: formData.withZauvijek * 0.65,
      Saving: formData.dailySaving * 1.45,
      Efficiency: 98,
    },
    {
      name: "Sep",
      Manual: formData.withoutZauvijek * 1.1,
      Zauvijek: formData.withZauvijek * 0.6,
      Saving: formData.dailySaving * 1.3,
      Efficiency: 95,
    },
    {
      name: "Oct",
      Manual: formData.withoutZauvijek * 1.35,
      Zauvijek: formData.withZauvijek * 0.55,
      Saving: formData.dailySaving * 1.6,
      Efficiency: 99,
    },
    {
      name: "Nov",
      Manual: formData.withoutZauvijek * 1.4,
      Zauvijek: formData.withZauvijek * 0.5,
      Saving: formData.dailySaving * 1.7,
      Efficiency: 100,
    },
    {
      name: "Dec",
      Manual: formData.withoutZauvijek * 1.45,
      Zauvijek: formData.withZauvijek * 0.45,
      Saving: formData.dailySaving * 1.8,
      Efficiency: 100,
    },
  ]

  const pieChartData = [
    { name: "Before Zauvijek", value: formData.energyBefore },
    { name: "With Zauvijek", value: formData.energyWithZauvijek },
  ]

  // New data for additional charts
  const performanceRadarData = [
    { subject: "Cost Efficiency", A: formData.costReduction, fullMark: 100 },
    { subject: "Energy Savings", A: (formData.energySaved / formData.energyBefore) * 100, fullMark: 100 },
    { subject: "Process Speed", A: 85, fullMark: 100 },
    { subject: "Quality", A: 92, fullMark: 100 },
    { subject: "Reliability", A: 88, fullMark: 100 },
    { subject: "Sustainability", A: 95, fullMark: 100 },
  ]

  const weeklyProductionData = [
    { day: "Mon", production: 120, target: 100, efficiency: 95 },
    { day: "Tue", production: 135, target: 100, efficiency: 98 },
    { day: "Wed", production: 110, target: 100, efficiency: 92 },
    { day: "Thu", production: 145, target: 100, efficiency: 100 },
    { day: "Fri", production: 155, target: 100, efficiency: 105 },
    { day: "Sat", production: 140, target: 100, efficiency: 97 },
    { day: "Sun", production: 125, target: 100, efficiency: 94 },
  ]

  const costBreakdownData = [
    { name: "Material", value: 35, color: "#1e7348" },
    { name: "Labor", value: 25, color: "#10B981" },
    { name: "Energy", value: 20, color: "#3B82F6" },
    { name: "Maintenance", value: 12, color: "#8B5CF6" },
    { name: "Other", value: 8, color: "#F59E0B" },
  ]

  const savingsProjectionData = [
    { year: "2024", savings: formData.yearlySaving, cumulative: formData.yearlySaving },
    { year: "2025", savings: formData.yearlySaving * 1.1, cumulative: formData.yearlySaving * 2.1 },
    { year: "2026", savings: formData.yearlySaving * 1.2, cumulative: formData.yearlySaving * 3.3 },
    { year: "2027", savings: formData.yearlySaving * 1.3, cumulative: formData.yearlySaving * 4.6 },
    { year: "2028", savings: formData.yearlySaving * 1.4, cumulative: formData.yearlySaving * 6.0 },
  ]

  const processOptimizationData = [
    { name: "Initial Setup", value: 100, fill: "#EF4444" },
    { name: "Process Analysis", value: 85, fill: "#F59E0B" },
    { name: "Implementation", value: 70, fill: "#10B981" },
    { name: "Optimization", value: 55, fill: "#3B82F6" },
    { name: "Final Result", value: 40, fill: "#8B5CF6" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-[#0f1422] dark:to-[#1a1f2e] text-black dark:text-white p-6 mb-5 transition-all duration-500">
      {/* Enhanced Header with Animated Background */}
      <div className="mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-emerald-600/10 rounded-2xl"></div>
        <div className="relative p-8 bg-white/80 dark:bg-[#1c2331]/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl">
              <TbReportAnalytics className="text-2xl text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Advanced Tapping Process Analytics
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Comprehensive performance metrics and intelligent cost analysis dashboard
              </p>
            </div>
          </div>

          {/* Status Badges */}
          <div className="flex flex-wrap gap-2 mt-4">
            <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
              <FaLeaf className="mr-1" /> Eco-Friendly
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
              <FaRocket className="mr-1" /> High Performance
            </Badge>
            <Badge
              variant="secondary"
              className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
            >
              <FaShieldAlt className="mr-1" /> Reliable
            </Badge>
          </div>
        </div>
      </div>

      {/* Enhanced Summary Cards with Animations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summaryData.map((item, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${item.colors} p-6 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 transform flex gap-4 items-center group relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 p-3 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors duration-300">
              {item.icon}
            </div>
            <div className="relative z-10">
              <div className="text-sm font-medium opacity-90 mb-1">{item.title}</div>
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
        ))}
      </div>

      {/* Configuration Form */}
      <Card className="mb-8 bg-white/90 dark:bg-[#1c2331]/90 backdrop-blur-sm border-0 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-t-xl">
          <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
            <FaCog className="text-blue-600" />
            Tapping Process Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="processName" className="text-sm font-semibold">
                Process Name
              </Label>
              <Input
                id="processName"
                value={formData.processName}
                onChange={(e) => handleInputChange("processName", e.target.value)}
                className="bg-white dark:bg-[#0f1422] border-2 focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="withoutZauvijek" className="text-sm font-semibold">
                Cost Without Zauvijek (₹)
              </Label>
              <Input
                id="withoutZauvijek"
                type="number"
                step="0.01"
                value={formData.withoutZauvijek}
                onChange={(e) => handleInputChange("withoutZauvijek", e.target.value)}
                className="bg-white dark:bg-[#0f1422] border-2 focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="withZauvijek" className="text-sm font-semibold">
                Cost With Zauvijek (₹)
              </Label>
              <Input
                id="withZauvijek"
                type="number"
                step="0.01"
                value={formData.withZauvijek}
                onChange={(e) => handleInputChange("withZauvijek", e.target.value)}
                className="bg-white dark:bg-[#0f1422] border-2 focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="energyBefore" className="text-sm font-semibold">
                Energy Before Zauvijek (kWh)
              </Label>
              <Input
                id="energyBefore"
                type="number"
                step="0.01"
                value={formData.energyBefore}
                onChange={(e) => handleInputChange("energyBefore", e.target.value)}
                className="bg-white dark:bg-[#0f1422] border-2 focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="energyWithZauvijek" className="text-sm font-semibold">
                Energy With Zauvijek (kWh)
              </Label>
              <Input
                id="energyWithZauvijek"
                type="number"
                step="0.01"
                value={formData.energyWithZauvijek}
                onChange={(e) => handleInputChange("energyWithZauvijek", e.target.value)}
                className="bg-white dark:bg-[#0f1422] border-2 focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-semibold">Daily Saving (Auto-calculated)</Label>
              <Input
                value={`₹${formData.dailySaving.toFixed(2)}`}
                disabled
                className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-700"
              />
            </div>
          </div>

          <Separator className="my-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-700">
              <MdSavings className="text-3xl text-green-600 dark:text-green-400 mx-auto mb-2" />
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Monthly Saving</div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                ₹{formData.monthlySaving.toLocaleString()}
              </div>
              <Progress value={75} className="mt-2" />
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <MdCalendarToday className="text-3xl text-blue-600 dark:text-blue-400 mx-auto mb-2" />
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Yearly Saving</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                ₹{formData.yearlySaving.toLocaleString()}
              </div>
              <Progress value={90} className="mt-2" />
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-700">
              <TbTargetArrow className="text-3xl text-purple-600 dark:text-purple-400 mx-auto mb-2" />
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Cost Reduction</div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                {formData.costReduction.toFixed(2)}%
              </div>
              <Progress value={formData.costReduction} className="mt-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Charts Grid - Enhanced Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-8">
        {/* Monthly Performance Trends - Enhanced */}
        <div className="xl:col-span-8 bg-white/90 dark:bg-[#1c2331]/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
              <MdTrendingUp className="text-xl text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Monthly Performance Trends</h2>
          </div>
          <ResponsiveContainer width="100%" height={450}>
            <ComposedChart data={monthlyTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="colorManual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3722f5" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3722f5" stopOpacity={0.3} />
                </linearGradient>
                <linearGradient id="colorZauvijek" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.3} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.2} />
              <XAxis dataKey="name" stroke="#6B7280" fontSize={12} />
              <YAxis stroke="#6B7280" fontSize={12} tickFormatter={(value) => `₹${value}`} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.95)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#F9FAFB",
                  backdropFilter: "blur(10px)",
                }}
                formatter={(value, name) => [`₹${Number(value).toLocaleString()}`, name]}
              />
              <Legend />
              <Bar dataKey="Manual" fill="url(#colorManual)" name="Manual Process" radius={[6, 6, 0, 0]} />
              <Bar dataKey="Zauvijek" fill="url(#colorZauvijek)" name="With Zauvijek" radius={[6, 6, 0, 0]} />
              <Line
                type="monotone"
                dataKey="Saving"
                stroke="#10B981"
                strokeWidth={3}
                name="Daily Savings"
                dot={{ fill: "#10B981", strokeWidth: 2, r: 6 }}
                activeDot={{ r: 10, stroke: "#10B981", strokeWidth: 3 }}
              />
              <Line
                type="monotone"
                dataKey="Efficiency"
                stroke="#F59E0B"
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Efficiency %"
                dot={{ fill: "#F59E0B", strokeWidth: 2, r: 4 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Radar Chart - New */}
        <div className="xl:col-span-4 bg-white/90 dark:bg-[#1c2331]/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg">
              <MdSpeed className="text-xl text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Performance Radar</h2>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={performanceRadarData}>
              <PolarGrid stroke="#374151" opacity={0.3} />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: "#6B7280" }} />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tick={{ fontSize: 10, fill: "#6B7280" }}
                tickFormatter={(value) => `${value}%`}
              />
              <Radar
                name="Performance"
                dataKey="A"
                stroke="#10B981"
                fill="#10B981"
                fillOpacity={0.3}
                strokeWidth={2}
                dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.95)",
                  border: "none",
                  borderRadius: "8px",
                  color: "#F9FAFB",
                }}
                formatter={(value) => [`${value}%`, "Performance"]}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Second Row of Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        {/* Energy Consumption Pie Chart - Enhanced */}
        <div className="bg-white/90 dark:bg-[#1c2331]/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-0">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-lg">
              <FaBolt className="text-xl text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Energy Consumption</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={40}
                label={({ value }) => `${value} kWh`}
                labelLine={false}
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.95)",
                  border: "none",
                  borderRadius: "8px",
                  color: "#F9FAFB",
                }}
                formatter={(value) => [`${value} kWh`, "Energy Consumption"]}
              />
            </PieChart>
          </ResponsiveContainer>

          <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl">
            <div className="text-center">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Energy Saved Daily</div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {formData.energySaved.toFixed(2)} kWh
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                {formData.costReduction.toFixed(2)}% reduction in energy consumption
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Production Chart - New */}
        <div className="bg-white/90 dark:bg-[#1c2331]/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-0">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
              <FaCog className="text-xl text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Weekly Production</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={weeklyProductionData}>
              <defs>
                <linearGradient id="colorProduction" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.2} />
              <XAxis dataKey="day" stroke="#6B7280" fontSize={12} />
              <YAxis stroke="#6B7280" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.95)",
                  border: "none",
                  borderRadius: "8px",
                  color: "#F9FAFB",
                }}
              />
              <Area
                type="monotone"
                dataKey="production"
                stroke="#8B5CF6"
                fillOpacity={1}
                fill="url(#colorProduction)"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke="#EF4444"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Cost Breakdown Donut Chart - New */}
        <div className="bg-white/90 dark:bg-[#1c2331]/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-0">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg">
              <FaRupeeSign className="text-xl text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Cost Breakdown</h2>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={costBreakdownData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={60}
                label={({ name, value }) => `${name}: ${value}%`}
                labelLine={false}
              >
                {costBreakdownData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.95)",
                  border: "none",
                  borderRadius: "8px",
                  color: "#F9FAFB",
                }}
                formatter={(value) => [`${value}%`, "Cost Share"]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Third Row - Advanced Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
        {/* Savings Projection Chart - New */}
        <div className="bg-white/90 dark:bg-[#1c2331]/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg">
              <MdTrendingUp className="text-xl text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">5-Year Savings Projection</h2>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart data={savingsProjectionData}>
              <defs>
                <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.3} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.2} />
              <XAxis dataKey="year" stroke="#6B7280" fontSize={12} />
              <YAxis stroke="#6B7280" fontSize={12} tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}K`} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.95)",
                  border: "none",
                  borderRadius: "8px",
                  color: "#F9FAFB",
                }}
                formatter={(value, name) => [`₹${Number(value).toLocaleString()}`, name]}
              />
              <Legend />
              <Bar dataKey="savings" fill="url(#colorSavings)" name="Annual Savings" radius={[4, 4, 0, 0]} />
              <Line
                type="monotone"
                dataKey="cumulative"
                stroke="#10B981"
                strokeWidth={3}
                name="Cumulative Savings"
                dot={{ fill: "#10B981", strokeWidth: 2, r: 6 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Process Optimization Funnel - New */}
        <div className="bg-white/90 dark:bg-[#1c2331]/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-r from-lime-600 to-green-600 rounded-lg">
              <TbTargetArrow className="text-xl text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Process Optimization Flow</h2>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <FunnelChart>
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.95)",
                  border: "none",
                  borderRadius: "8px",
                  color: "#F9FAFB",
                }}
              />
              <Funnel dataKey="value" data={processOptimizationData} isAnimationActive>
                <LabelList position="center" fill="#fff" stroke="none" />
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Enhanced Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Cost Savings Breakdown - Enhanced */}
        <div className="bg-white/90 dark:bg-[#1c2331]/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg">
              <MdSavings className="text-xl text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Cost Savings Breakdown</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <MdCalendarToday className="text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Daily Savings</span>
              </div>
              <span className="font-bold text-blue-600 dark:text-blue-400 text-lg">
                ₹{formData.dailySaving.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border border-indigo-200 dark:border-indigo-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-600 rounded-lg">
                  <MdCalendarToday className="text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Monthly Savings</span>
              </div>
              <span className="font-bold text-indigo-600 dark:text-indigo-400 text-lg">
                ₹{formData.monthlySaving.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-xl border border-teal-200 dark:border-teal-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-teal-600 rounded-lg">
                  <MdCalendarToday className="text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Yearly Savings</span>
              </div>
              <span className="font-bold text-teal-600 dark:text-teal-400 text-lg">
                ₹{formData.yearlySaving.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Process Efficiency Metrics - Enhanced */}
        <div className="bg-white/90 dark:bg-[#1c2331]/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-0">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
              <MdSpeed className="text-xl text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Process Efficiency Metrics</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-rose-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/20 rounded-xl border border-rose-200 dark:border-rose-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-rose-600 rounded-lg">
                  <FaChartLine className="text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Cost Reduction</span>
              </div>
              <div className="text-right">
                <span className="font-bold text-rose-600 dark:text-rose-400 text-lg">
                  {formData.costReduction.toFixed(2)}%
                </span>
                <Progress value={formData.costReduction} className="w-20 mt-1" />
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-xl border border-emerald-200 dark:border-emerald-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-600 rounded-lg">
                  <MdEco className="text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Energy Efficiency</span>
              </div>
              <div className="text-right">
                <span className="font-bold text-emerald-600 dark:text-emerald-400 text-lg">
                  {((formData.energySaved / formData.energyBefore) * 100).toFixed(2)}%
                </span>
                <Progress value={(formData.energySaved / formData.energyBefore) * 100} className="w-20 mt-1" />
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl border border-yellow-200 dark:border-yellow-700">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-600 rounded-lg">
                  <MdSecurity className="text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">ROI Impact</span>
              </div>
              <div className="text-right">
                <Badge
                  variant="secondary"
                  className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                >
                  Excellent
                </Badge>
                <Progress value={95} className="w-20 mt-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
