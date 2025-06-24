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
  BarChart,
} from "recharts"
import { TrendingUp, PiggyBank, Calendar, Factory, Gauge, Target, Award, Activity, BarChart3 } from "lucide-react"
import CountUp from "react-countup"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

// const COLORS = ["#8B5CF6", "#06B6D4", "#10B981", "#F59E0B", "#EF4444", "#EC4899", "#6366F1", "#84CC16"]
// const GRADIENT_COLORS = [
//   "from-violet-600 to-purple-500",
//   "from-cyan-600 to-blue-500",
//   "from-emerald-600 to-green-500",
//   "from-amber-600 to-yellow-500",
//   "from-rose-600 to-pink-500",
//   "from-indigo-600 to-blue-500",
//   "from-teal-600 to-cyan-500",
//   "from-orange-600 to-red-500",
// ]

interface SolidificationData {
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
  productionRate: number
  qualityScore: number
  maintenanceCost: number
  downtime: number
}

export default function EnhancedSolidificationCharts() {
  const [formData, setFormData] = useState<SolidificationData>({
    processName: "Advanced Solidification",
    withoutZauvijek: 146.25,
    withZauvijek: 73.13,
    dailySaving: 73.13,
    monthlySaving: 2193.75,
    yearlySaving: 26681.25,
    costReduction: 50.0,
    energyBefore: 13.16,
    energyWithZauvijek: 6.58,
    energySaved: 6.58,
    productionRate: 85.5,
    qualityScore: 92.3,
    maintenanceCost: 1250,
    downtime: 2.5,
  })

  const handleInputChange = (field: keyof SolidificationData, value: string) => {
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

  // Enhanced calculations
  const carbonFootprintReduction = (formData.energySaved * 0.82 * 365).toFixed(2) // kg CO2 per year
  const paybackPeriod = (25000 / formData.yearlySaving).toFixed(1) // months
  const roi = ((formData.yearlySaving / 25000) * 100).toFixed(1)
  const efficiencyScore = ((formData.productionRate + formData.qualityScore + (100 - formData.downtime)) / 3).toFixed(1)

  const summaryData = [
    {
      title: "Process Name",
      value: formData.processName,
      isCurrency: false,
      colors: "from-violet-600 to-purple-500",
      icon: <Factory className="w-6 h-6" />,
    },
    {
      title: "Production Rate",
      value: formData.productionRate,
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-emerald-600 to-green-500",
      icon: <Gauge className="w-6 h-6" />,
    },
    {
      title: "Quality Score",
      value: formData.qualityScore,
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-blue-600 to-cyan-500",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Efficiency Score",
      value: Number(efficiencyScore),
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-indigo-600 to-purple-500",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Cost Reduction",
      value: formData.costReduction,
      suffix: "%",
      isCurrency: false,
      decimals: 2,
      colors: "from-rose-600 to-pink-500",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Daily Saving",
      value: formData.dailySaving,
      isCurrency: true,
      decimals: 2,
      colors: "from-amber-600 to-yellow-500",
      icon: <PiggyBank className="w-6 h-6" />,
    },
    {
      title: "ROI",
      value: Number(roi),
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-teal-600 to-cyan-500",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Yearly Saving",
      value: formData.yearlySaving,
      isCurrency: true,
      colors: "from-orange-600 to-red-500",
      icon: <Calendar className="w-6 h-6" />,
    },
  ]

  // Enhanced data sets for new charts
  const quarterlyData = [
    { quarter: "Q1", revenue: 125000, costs: 85000, profit: 40000, efficiency: 78 },
    { quarter: "Q2", revenue: 142000, costs: 78000, profit: 64000, efficiency: 85 },
    { quarter: "Q3", revenue: 158000, costs: 72000, profit: 86000, efficiency: 89 },
    { quarter: "Q4", revenue: 175000, costs: 68000, profit: 107000, efficiency: 92 },
  ]

  const performanceRadarData = [
    { subject: "Cost Efficiency", A: formData.costReduction, fullMark: 100 },
    { subject: "Energy Savings", A: (formData.energySaved / formData.energyBefore) * 100, fullMark: 100 },
    { subject: "Production Rate", A: formData.productionRate, fullMark: 100 },
    { subject: "Quality Score", A: formData.qualityScore, fullMark: 100 },
    { subject: "Uptime", A: 100 - formData.downtime, fullMark: 100 },
    { subject: "ROI", A: Number(roi), fullMark: 100 },
  ]

  const weeklyTrendData = Array.from({ length: 7 }, (_, i) => ({
    day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
    production: Math.floor(Math.random() * 20) + 80,
    energy: Math.floor(Math.random() * 3) + 6,
    cost: Math.floor(Math.random() * 20) + 70,
    quality: Math.floor(Math.random() * 10) + 90,
  }))

  const costBreakdownData = [
    { name: "Energy", value: 35, color: "#8B5CF6" },
    { name: "Labor", value: 25, color: "#06B6D4" },
    { name: "Materials", value: 30, color: "#10B981" },
    { name: "Maintenance", value: 10, color: "#F59E0B" },
  ]

  const benchmarkData = [
    { metric: "Energy Efficiency", current: 85, industry: 72, target: 90 },
    { metric: "Cost per Unit", current: 92, industry: 78, target: 95 },
    { metric: "Quality Score", current: formData.qualityScore, industry: 85, target: 95 },
    { metric: "Production Rate", current: formData.productionRate, industry: 80, target: 90 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 text-black dark:text-white p-6 transition-colors duration-300">
      {/* Header with enhanced styling */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent mb-3">
          Advanced Solidification Analytics Dashboard
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive performance metrics, cost analysis, and predictive insights for next-generation solidification
          processes
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <Badge variant="secondary" className="bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200">
            Real-time Analytics
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            AI-Powered Insights
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            Cost Optimization
          </Badge>
        </div>
      </div>

      {/* Enhanced Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summaryData.map((item, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${item.colors} p-6 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex gap-4 items-center relative overflow-hidden`}
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">{item.icon}</div>
            <div className="flex-1">
              <div className="text-sm font-medium opacity-90 mb-1">{item.title}</div>
              <div className="text-2xl font-bold">
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
      <Card className="mb-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-violet-500/10 to-blue-500/10 rounded-t-lg">
          <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
            <Activity className="w-6 h-6 text-violet-600" />
            Process Configuration & Parameters
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-2">
              <Label htmlFor="processName" className="text-sm font-semibold">
                Process Name
              </Label>
              <Input
                id="processName"
                value={formData.processName}
                onChange={(e) => handleInputChange("processName", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-violet-500"
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
                className="bg-white dark:bg-slate-700 border-2 focus:border-violet-500"
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
                className="bg-white dark:bg-slate-700 border-2 focus:border-violet-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="productionRate" className="text-sm font-semibold">
                Production Rate (%)
              </Label>
              <Input
                id="productionRate"
                type="number"
                step="0.1"
                value={formData.productionRate}
                onChange={(e) => handleInputChange("productionRate", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-violet-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="qualityScore" className="text-sm font-semibold">
                Quality Score (%)
              </Label>
              <Input
                id="qualityScore"
                type="number"
                step="0.1"
                value={formData.qualityScore}
                onChange={(e) => handleInputChange("qualityScore", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-violet-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="downtime" className="text-sm font-semibold">
                Downtime (%)
              </Label>
              <Input
                id="downtime"
                type="number"
                step="0.1"
                value={formData.downtime}
                onChange={(e) => handleInputChange("downtime", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-violet-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="energyBefore" className="text-sm font-semibold">
                Energy Before (kWh)
              </Label>
              <Input
                id="energyBefore"
                type="number"
                step="0.01"
                value={formData.energyBefore}
                onChange={(e) => handleInputChange("energyBefore", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-violet-500"
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
                className="bg-white dark:bg-slate-700 border-2 focus:border-violet-500"
              />
            </div>
          </div>

          <Separator className="my-6" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Carbon Reduction</div>
              <div className="text-xl font-bold text-green-600 dark:text-green-400">
                {carbonFootprintReduction} kg CO₂/year
              </div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Payback Period</div>
              <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{paybackPeriod} months</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Return on Investment</div>
              <div className="text-xl font-bold text-purple-600 dark:text-purple-400">{roi}%</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-xl border border-amber-200 dark:border-amber-800">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Efficiency Score</div>
              <div className="text-xl font-bold text-amber-600 dark:text-amber-400">{efficiencyScore}%</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Charts Grid - Enhanced */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mb-8">
        {/* Quarterly Performance */}
        <div className="xl:col-span-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <BarChart3 className="w-6 h-6 text-violet-600" />
            Quarterly Financial Performance
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={quarterlyData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.2} />
                </linearGradient>
                <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis dataKey="quarter" stroke="#6B7280" fontSize={12} />
              <YAxis stroke="#6B7280" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(30, 41, 59, 0.95)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#F8FAFC",
                  backdropFilter: "blur(10px)",
                }}
              />
              <Legend />
              <Area dataKey="revenue" fill="url(#revenueGradient)" stroke="#8B5CF6" strokeWidth={2} name="Revenue" />
              <Bar dataKey="costs" fill="#EF4444" name="Costs" radius={[4, 4, 0, 0]} />
              <Line
                type="monotone"
                dataKey="profit"
                stroke="#10B981"
                strokeWidth={3}
                name="Profit"
                dot={{ fill: "#10B981", strokeWidth: 2, r: 6 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Radar */}
        <div className="xl:col-span-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-0">
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
            <Target className="w-5 h-5 text-violet-600" />
            Performance Radar
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart data={performanceRadarData}>
              <PolarGrid stroke="#374151" />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: "#6B7280" }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 8, fill: "#6B7280" }} />
              <Radar
                name="Performance"
                dataKey="A"
                stroke="#8B5CF6"
                fill="#8B5CF6"
                fillOpacity={0.3}
                strokeWidth={2}
                dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(30, 41, 59, 0.95)",
                  border: "none",
                  borderRadius: "8px",
                  color: "#F8FAFC",
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Weekly Trends and Cost Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Weekly Production Trends */}
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-0">
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-600" />
            Weekly Production Trends
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={weeklyTrendData}>
              <defs>
                <linearGradient id="productionGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="qualityGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis dataKey="day" stroke="#6B7280" fontSize={11} />
              <YAxis stroke="#6B7280" fontSize={11} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(30, 41, 59, 0.95)",
                  border: "none",
                  borderRadius: "8px",
                  color: "#F8FAFC",
                }}
              />
              <Area
                type="monotone"
                dataKey="production"
                stroke="#06B6D4"
                fill="url(#productionGradient)"
                name="Production %"
              />
              <Area type="monotone" dataKey="quality" stroke="#10B981" fill="url(#qualityGradient)" name="Quality %" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Cost Breakdown Pie Chart */}
        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-0">
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
            <PiggyBank className="w-5 h-5 text-green-600" />
            Cost Breakdown Analysis
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={costBreakdownData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                innerRadius={40}
                paddingAngle={5}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
              >
                {costBreakdownData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(30, 41, 59, 0.95)",
                  border: "none",
                  borderRadius: "8px",
                  color: "#F8FAFC",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {costBreakdownData.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-gray-600 dark:text-gray-400">
                  {item.name}: {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benchmark Comparison */}
      <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-0 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
          <Award className="w-6 h-6 text-amber-600" />
          Industry Benchmark Comparison
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={benchmarkData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis dataKey="metric" stroke="#6B7280" fontSize={11} />
            <YAxis stroke="#6B7280" fontSize={11} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(30, 41, 59, 0.95)",
                border: "none",
                borderRadius: "8px",
                color: "#F8FAFC",
              }}
            />
            <Legend />
            <Bar dataKey="current" fill="#8B5CF6" name="Current Performance" radius={[4, 4, 0, 0]} />
            <Bar dataKey="industry" fill="#06B6D4" name="Industry Average" radius={[4, 4, 0, 0]} />
            <Bar dataKey="target" fill="#10B981" name="Target" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Enhanced Summary Section */}
      <div className="bg-gradient-to-br from-violet-500/10 via-blue-500/10 to-cyan-500/10 dark:from-violet-900/20 dark:via-blue-900/20 dark:to-cyan-900/20 p-8 rounded-3xl shadow-2xl border border-violet-200/50 dark:border-violet-800/50">
        <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
          🏭 Advanced Solidification Impact Dashboard
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white/50 dark:bg-slate-800/50 rounded-2xl backdrop-blur-sm">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              ₹{formData.yearlySaving.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Annual Savings</div>
            <div className="text-xs text-green-600 dark:text-green-400 mt-1">
              +{formData.costReduction.toFixed(1)}% vs baseline
            </div>
          </div>
          <div className="text-center p-6 bg-white/50 dark:bg-slate-800/50 rounded-2xl backdrop-blur-sm">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{roi}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Return on Investment</div>
            <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">Payback: {paybackPeriod} months</div>
          </div>
          <div className="text-center p-6 bg-white/50 dark:bg-slate-800/50 rounded-2xl backdrop-blur-sm">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {carbonFootprintReduction}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">kg CO₂ Reduced/Year</div>
            <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">Environmental Impact</div>
          </div>
          <div className="text-center p-6 bg-white/50 dark:bg-slate-800/50 rounded-2xl backdrop-blur-sm">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">{efficiencyScore}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Overall Efficiency</div>
            <div className="text-xs text-orange-600 dark:text-orange-400 mt-1">Above industry average</div>
          </div>
        </div>
      </div>
    </div>
  )
}
