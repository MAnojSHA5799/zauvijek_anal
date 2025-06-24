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
  LineChart,
} from "recharts"
import {
  Workflow,
  TrendingUp,
  PiggyBank,
  Calendar,
  Gauge,
  Target,
  Award,
  Activity,
  BarChart3,
  Settings,
  DollarSign,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Layers,
} from "lucide-react"
import CountUp from "react-countup"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// const VIBRANT_COLORS = [
//   "#FF6B6B",
//   "#4ECDC4",
//   "#45B7D1",
//   "#96CEB4",
//   "#FFEAA7",
//   "#DDA0DD",
//   "#98D8C8",
//   "#F7DC6F",
//   "#BB8FCE",
//   "#85C1E9",
//   "#F8C471",
//   "#82E0AA",
//   "#F1948A",
//   "#85C1E9",
//   "#D7BDE2",
// ]

// const GRADIENT_COLORS = [
//   "from-red-500 to-pink-500",
//   "from-cyan-500 to-teal-500",
//   "from-blue-500 to-indigo-500",
//   "from-green-500 to-emerald-500",
//   "from-yellow-500 to-orange-500",
//   "from-purple-500 to-violet-500",
//   "from-teal-500 to-cyan-500",
//   "from-orange-500 to-red-500",
//   "from-indigo-500 to-purple-500",
//   "from-emerald-500 to-green-500",
// ]

interface RisersData {
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
  productionEfficiency: number
  qualityIndex: number
  maintenanceFrequency: number
  operatorSatisfaction: number
  materialWaste: number
  cycleTime: number
}

export default function EnhancedRisersCharts() {
  const [formData, setFormData] = useState<RisersData>({
    processName: "Advanced Risers System",
    withoutZauvijek: 113.75,
    withZauvijek: 56.88,
    dailySaving: 56.88,
    monthlySaving: 1706.25,
    yearlySaving: 20756.25,
    costReduction: 50.0,
    energyBefore: 10.24,
    energyWithZauvijek: 5.12,
    energySaved: 5.12,
    productionEfficiency: 88.5,
    qualityIndex: 94.2,
    maintenanceFrequency: 15, // days between maintenance
    operatorSatisfaction: 91.8,
    materialWaste: 3.2, // percentage
    cycleTime: 45, // minutes
  })

  const handleInputChange = (field: keyof RisersData, value: string) => {
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

  // Advanced calculations
  const carbonFootprintReduction = (formData.energySaved * 0.82 * 365).toFixed(2)
  const paybackPeriod = (30000 / formData.yearlySaving).toFixed(1)
  const roi = ((formData.yearlySaving / 30000) * 100).toFixed(1)
  const overallEfficiency = (
    (formData.productionEfficiency +
      formData.qualityIndex +
      formData.operatorSatisfaction +
      (100 - formData.materialWaste)) /
    4
  ).toFixed(1)
  const productivityGain = (((formData.productionEfficiency - 75) / 75) * 100).toFixed(1)
  const wasteReduction = (((8 - formData.materialWaste) / 8) * 100).toFixed(1)

  const summaryData = [
    {
      title: "Process Name",
      value: formData.processName,
      isCurrency: false,
      colors: "from-red-500 to-pink-500",
      icon: <Workflow className="w-6 h-6" />,
    },
    {
      title: "Production Efficiency",
      value: formData.productionEfficiency,
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-emerald-500 to-green-500",
      icon: <Gauge className="w-6 h-6" />,
    },
    {
      title: "Quality Index",
      value: formData.qualityIndex,
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-blue-500 to-cyan-500",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Overall Efficiency",
      value: Number(overallEfficiency),
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-purple-500 to-violet-500",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Cost Reduction",
      value: formData.costReduction,
      suffix: "%",
      isCurrency: false,
      decimals: 2,
      colors: "from-orange-500 to-red-500",
      icon: <TrendingDown className="w-6 h-6" />,
    },
    {
      title: "Daily Saving",
      value: formData.dailySaving,
      isCurrency: true,
      decimals: 2,
      colors: "from-yellow-500 to-orange-500",
      icon: <PiggyBank className="w-6 h-6" />,
    },
    {
      title: "ROI",
      value: Number(roi),
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-teal-500 to-cyan-500",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Yearly Saving",
      value: formData.yearlySaving,
      isCurrency: true,
      colors: "from-indigo-500 to-purple-500",
      icon: <Calendar className="w-6 h-6" />,
    },
  ]

  // Enhanced data sets for comprehensive analytics
  const quarterlyPerformanceData = [
    { quarter: "Q1", revenue: 95000, costs: 65000, profit: 30000, efficiency: 82, quality: 89 },
    { quarter: "Q2", revenue: 108000, costs: 58000, profit: 50000, efficiency: 86, quality: 92 },
    { quarter: "Q3", revenue: 125000, costs: 52000, profit: 73000, efficiency: 89, quality: 94 },
    { quarter: "Q4", revenue: 142000, costs: 48000, profit: 94000, efficiency: 91, quality: 96 },
  ]

  const performanceRadarData = [
    { subject: "Cost Efficiency", A: formData.costReduction, fullMark: 100 },
    { subject: "Energy Savings", A: (formData.energySaved / formData.energyBefore) * 100, fullMark: 100 },
    { subject: "Production Rate", A: formData.productionEfficiency, fullMark: 100 },
    { subject: "Quality Index", A: formData.qualityIndex, fullMark: 100 },
    { subject: "Operator Satisfaction", A: formData.operatorSatisfaction, fullMark: 100 },
    { subject: "Waste Reduction", A: 100 - formData.materialWaste, fullMark: 100 },
  ]

  const weeklyProductionData = Array.from({ length: 7 }, (_, i) => ({
    day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
    production: Math.floor(Math.random() * 15) + 85,
    quality: Math.floor(Math.random() * 8) + 92,
    energy: Math.floor(Math.random() * 2) + 5,
    efficiency: Math.floor(Math.random() * 12) + 88,
    downtime: Math.floor(Math.random() * 3) + 1,
  }))

  const processOptimizationData = [
    { name: "Material Usage", before: 100, after: 96.8, improvement: 3.2 },
    { name: "Energy Consumption", before: 100, after: 50, improvement: 50 },
    { name: "Cycle Time", before: 60, after: 45, improvement: 25 },
    { name: "Defect Rate", before: 8, after: 2.5, improvement: 68.75 },
    { name: "Maintenance Cost", before: 100, after: 65, improvement: 35 },
  ]

  const costBreakdownData = [
    { name: "Energy", value: 32, color: "#FF6B6B" },
    { name: "Labor", value: 28, color: "#4ECDC4" },
    { name: "Materials", value: 25, color: "#45B7D1" },
    { name: "Maintenance", value: 15, color: "#96CEB4" },
  ]

  const riserPerformanceMetrics = [
    { metric: "Temperature Control", current: 96, target: 98, industry: 88 },
    { metric: "Flow Rate", current: 94, target: 95, industry: 85 },
    { metric: "Pressure Stability", current: 92, target: 95, industry: 82 },
    { metric: "Material Quality", current: formData.qualityIndex, target: 98, industry: 87 },
  ]

  const predictiveMaintenanceData = [
    { component: "Heating Elements", health: 85, nextMaintenance: 12, criticality: "Medium" },
    { component: "Flow Sensors", health: 92, nextMaintenance: 25, criticality: "Low" },
    { component: "Control Valves", health: 78, nextMaintenance: 8, criticality: "High" },
    { component: "Insulation", health: 88, nextMaintenance: 18, criticality: "Low" },
  ]

  const hourlyProductionData = Array.from({ length: 24 }, (_, i) => ({
    hour: `${i.toString().padStart(2, "0")}:00`,
    production: Math.floor(Math.random() * 20) + 80 + (i >= 8 && i <= 17 ? 10 : 0),
    temperature: Math.floor(Math.random() * 10) + 180,
    pressure: Math.floor(Math.random() * 5) + 25,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 text-black dark:text-white p-6 transition-colors duration-300">
      {/* Enhanced Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-4">
          🔧 Advanced Risers Analytics Hub
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-6">
          Comprehensive real-time analytics, predictive insights, and performance optimization for next-generation riser
          systems
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 px-4 py-2">
            🚀 Real-time Monitoring
          </Badge>
          <Badge
            variant="secondary"
            className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-4 py-2"
          >
            🤖 AI-Powered Analytics
          </Badge>
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-4 py-2"
          >
            💰 Cost Optimization
          </Badge>
          <Badge
            variant="secondary"
            className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-4 py-2"
          >
            🎯 Predictive Maintenance
          </Badge>
        </div>
      </div>

      {/* Enhanced Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summaryData.map((item, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${item.colors} p-6 rounded-3xl text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 flex gap-4 items-center relative overflow-hidden group`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-10 -translate-x-10"></div>
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300">
              {item.icon}
            </div>
            <div className="flex-1 z-10">
              <div className="text-sm font-medium opacity-90 mb-2">{item.title}</div>
              <div className="text-1xl font-bold">
                {typeof item.value === "number" ? (
                  <>
                    {item.isCurrency && "₹"}
                    <CountUp
                      end={item.value}
                      duration={3}
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
      <Card className="mb-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg border-0 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-red-500/10 via-purple-500/10 to-blue-500/10 rounded-t-lg">
          <CardTitle className="text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-4">
            <Settings className="w-8 h-8 text-red-600" />
            Risers System Configuration & Parameters
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <Label htmlFor="processName" className="text-sm font-bold flex items-center gap-2">
                <Layers className="w-4 h-4" />
                Process Name
              </Label>
              <Input
                id="processName"
                value={formData.processName}
                onChange={(e) => handleInputChange("processName", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-red-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="withoutZauvijek" className="text-sm font-bold flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Cost Without Zauvijek (₹)
              </Label>
              <Input
                id="withoutZauvijek"
                type="number"
                step="0.01"
                value={formData.withoutZauvijek}
                onChange={(e) => handleInputChange("withoutZauvijek", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-red-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="withZauvijek" className="text-sm font-bold flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Cost With Zauvijek (₹)
              </Label>
              <Input
                id="withZauvijek"
                type="number"
                step="0.01"
                value={formData.withZauvijek}
                onChange={(e) => handleInputChange("withZauvijek", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-red-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="productionEfficiency" className="text-sm font-bold flex items-center gap-2">
                <Gauge className="w-4 h-4" />
                Production Efficiency (%)
              </Label>
              <Input
                id="productionEfficiency"
                type="number"
                step="0.1"
                value={formData.productionEfficiency}
                onChange={(e) => handleInputChange("productionEfficiency", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-red-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="qualityIndex" className="text-sm font-bold flex items-center gap-2">
                <Award className="w-4 h-4" />
                Quality Index (%)
              </Label>
              <Input
                id="qualityIndex"
                type="number"
                step="0.1"
                value={formData.qualityIndex}
                onChange={(e) => handleInputChange("qualityIndex", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-red-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="materialWaste" className="text-sm font-bold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Material Waste (%)
              </Label>
              <Input
                id="materialWaste"
                type="number"
                step="0.1"
                value={formData.materialWaste}
                onChange={(e) => handleInputChange("materialWaste", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-red-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="cycleTime" className="text-sm font-bold flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Cycle Time (minutes)
              </Label>
              <Input
                id="cycleTime"
                type="number"
                step="0.1"
                value={formData.cycleTime}
                onChange={(e) => handleInputChange("cycleTime", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-red-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="operatorSatisfaction" className="text-sm font-bold flex items-center gap-2">
                <Target className="w-4 h-4" />
                Operator Satisfaction (%)
              </Label>
              <Input
                id="operatorSatisfaction"
                type="number"
                step="0.1"
                value={formData.operatorSatisfaction}
                onChange={(e) => handleInputChange("operatorSatisfaction", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-red-500 rounded-xl h-12"
              />
            </div>
          </div>

          <Separator className="my-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl border-2 border-green-200 dark:border-green-800">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Carbon Reduction</div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {carbonFootprintReduction} kg CO₂/year
              </div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl border-2 border-blue-200 dark:border-blue-800">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Payback Period</div>
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{paybackPeriod} months</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-2xl border-2 border-purple-200 dark:border-purple-800">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Productivity Gain</div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{productivityGain}%</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-2xl border-2 border-amber-200 dark:border-amber-800">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Waste Reduction</div>
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">{wasteReduction}%</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-2xl border-2 border-red-200 dark:border-red-800">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Overall Efficiency</div>
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">{overallEfficiency}%</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mb-8">
        {/* Quarterly Financial Performance */}
        <div className="xl:col-span-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-4">
            <BarChart3 className="w-8 h-8 text-red-600" />
            Quarterly Financial Performance & Trends
          </h2>
          <ResponsiveContainer width="100%" height={450}>
            <ComposedChart data={quarterlyPerformanceData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF6B6B" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FF6B6B" stopOpacity={0.2} />
                </linearGradient>
                <linearGradient id="profitGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4ECDC4" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4ECDC4" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis dataKey="quarter" stroke="#6B7280" fontSize={14} />
              <YAxis stroke="#6B7280" fontSize={14} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(30, 41, 59, 0.95)",
                  border: "none",
                  borderRadius: "16px",
                  color: "#F8FAFC",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
              />
              <Legend />
              <Area dataKey="revenue" fill="url(#revenueGradient)" stroke="#FF6B6B" strokeWidth={3} name="Revenue" />
              <Bar dataKey="costs" fill="#45B7D1" name="Costs" radius={[6, 6, 0, 0]} />
              <Line
                type="monotone"
                dataKey="profit"
                stroke="#4ECDC4"
                strokeWidth={4}
                name="Profit"
                dot={{ fill: "#4ECDC4", strokeWidth: 3, r: 8 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Radar */}
        <div className="xl:col-span-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Target className="w-6 h-6 text-purple-600" />
            Performance Radar
          </h2>
          <ResponsiveContainer width="100%" height={380}>
            <RadarChart data={performanceRadarData}>
              <PolarGrid stroke="#374151" />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: "#6B7280" }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 9, fill: "#6B7280" }} />
              <Radar
                name="Performance"
                dataKey="A"
                stroke="#FF6B6B"
                fill="#FF6B6B"
                fillOpacity={0.4}
                strokeWidth={3}
                dot={{ fill: "#FF6B6B", strokeWidth: 2, r: 5 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(30, 41, 59, 0.95)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#F8FAFC",
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Process Optimization & Hourly Production */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Process Optimization */}
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-green-600" />
            Process Optimization Impact
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={processOptimizationData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis type="number" stroke="#6B7280" fontSize={12} />
              <YAxis dataKey="name" type="category" stroke="#6B7280" fontSize={11} width={100} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(30, 41, 59, 0.95)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#F8FAFC",
                }}
              />
              <Bar dataKey="before" fill="#EF4444" name="Before" radius={[0, 4, 4, 0]} />
              <Bar dataKey="after" fill="#10B981" name="After" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Hourly Production Monitoring */}
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Activity className="w-6 h-6 text-blue-600" />
            24-Hour Production Monitoring
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={hourlyProductionData.slice(0, 12)}>
              <defs>
                <linearGradient id="productionGradient24" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#45B7D1" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#45B7D1" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis dataKey="hour" stroke="#6B7280" fontSize={11} />
              <YAxis stroke="#6B7280" fontSize={11} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(30, 41, 59, 0.95)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#F8FAFC",
                }}
              />
              <Area
                type="monotone"
                dataKey="production"
                stroke="#45B7D1"
                fill="url(#productionGradient24)"
                strokeWidth={3}
                name="Production %"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Predictive Maintenance & Riser Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Predictive Maintenance */}
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
            Predictive Maintenance Dashboard
          </h2>
          <div className="space-y-4">
            {predictiveMaintenanceData.map((item, index) => (
              <div key={index} className="p-4 bg-gray-50 dark:bg-slate-700 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800 dark:text-white">{item.component}</span>
                  <Badge
                    variant={
                      item.criticality === "High"
                        ? "destructive"
                        : item.criticality === "Medium"
                          ? "secondary"
                          : "default"
                    }
                    className="text-xs"
                  >
                    {item.criticality}
                  </Badge>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Health: {item.health}%</span>
                      <span>Next: {item.nextMaintenance} days</span>
                    </div>
                    <Progress value={item.health} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Riser Performance Metrics */}
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Gauge className="w-6 h-6 text-purple-600" />
            Riser Performance Benchmarks
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={riserPerformanceMetrics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis dataKey="metric" stroke="#6B7280" fontSize={11} />
              <YAxis stroke="#6B7280" fontSize={11} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(30, 41, 59, 0.95)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#F8FAFC",
                }}
              />
              <Legend />
              <Bar dataKey="current" fill="#FF6B6B" name="Current" radius={[4, 4, 0, 0]} />
              <Bar dataKey="target" fill="#4ECDC4" name="Target" radius={[4, 4, 0, 0]} />
              <Bar dataKey="industry" fill="#45B7D1" name="Industry Avg" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Cost Analysis & Weekly Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Enhanced Cost Breakdown */}
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <PiggyBank className="w-6 h-6 text-green-600" />
            Advanced Cost Breakdown
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
                innerRadius={50}
                paddingAngle={8}
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
                  borderRadius: "12px",
                  color: "#F8FAFC",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-3 mt-6">
            {costBreakdownData.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-slate-700 rounded-xl">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {item.name}: {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Production Trends */}
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Calendar className="w-6 h-6 text-indigo-600" />
            Weekly Production Trends
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyProductionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis dataKey="day" stroke="#6B7280" fontSize={12} />
              <YAxis stroke="#6B7280" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(30, 41, 59, 0.95)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#F8FAFC",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="production"
                stroke="#FF6B6B"
                strokeWidth={3}
                name="Production %"
                dot={{ fill: "#FF6B6B", strokeWidth: 2, r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="quality"
                stroke="#4ECDC4"
                strokeWidth={3}
                name="Quality %"
                dot={{ fill: "#4ECDC4", strokeWidth: 2, r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="efficiency"
                stroke="#45B7D1"
                strokeWidth={3}
                name="Efficiency %"
                dot={{ fill: "#45B7D1", strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Ultimate Summary Dashboard */}
      <div className="bg-gradient-to-br from-red-500/10 via-purple-500/10 via-blue-500/10 to-cyan-500/10 dark:from-red-900/20 dark:via-purple-900/20 dark:via-blue-900/20 dark:to-cyan-900/20 p-10 rounded-3xl shadow-2xl border-2 border-red-200/50 dark:border-red-800/50">
        <h3 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          🔧 Ultimate Risers Performance Dashboard
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="text-center p-8 bg-white/60 dark:bg-slate-800/60 rounded-3xl backdrop-blur-lg border border-white/20">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-3">
              ₹{formData.yearlySaving.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Annual Savings</div>
            <div className="text-xs text-green-600 dark:text-green-400">
              +{formData.costReduction.toFixed(1)}% vs baseline
            </div>
          </div>
          <div className="text-center p-8 bg-white/60 dark:bg-slate-800/60 rounded-3xl backdrop-blur-lg border border-white/20">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">{roi}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Return on Investment</div>
            <div className="text-xs text-blue-600 dark:text-blue-400">Payback: {paybackPeriod} months</div>
          </div>
          <div className="text-center p-8 bg-white/60 dark:bg-slate-800/60 rounded-3xl backdrop-blur-lg border border-white/20">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-3">
              {carbonFootprintReduction}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">kg CO₂ Reduced/Year</div>
            <div className="text-xs text-purple-600 dark:text-purple-400">Environmental Impact</div>
          </div>
          <div className="text-center p-8 bg-white/60 dark:bg-slate-800/60 rounded-3xl backdrop-blur-lg border border-white/20">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-3">{overallEfficiency}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Overall Efficiency</div>
            <div className="text-xs text-orange-600 dark:text-orange-400">Industry Leading</div>
          </div>
          <div className="text-center p-8 bg-white/60 dark:bg-slate-800/60 rounded-3xl backdrop-blur-lg border border-white/20">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-3">{productivityGain}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Productivity Gain</div>
            <div className="text-xs text-red-600 dark:text-red-400">Above Target</div>
          </div>
        </div>
      </div>
    </div>
  )
}
