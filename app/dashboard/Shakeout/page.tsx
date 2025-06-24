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
  Hammer,
  PiggyBank,
  Calendar,
  Gauge,
  Target,
  Award,
  Activity,
  BarChart3,
  Settings,
  TrendingDown,
  AlertTriangle,
  Layers,
  Recycle,
  Thermometer,
  Wind,
} from "lucide-react"
import CountUp from "react-countup"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// const VIBRANT_COLORS = [
//   "#FF6B35", // Vibrant Orange
//   "#F7931E", // Golden Orange
//   "#FFD23F", // Bright Yellow
//   "#06FFA5", // Neon Green
//   "#4ECDC4", // Turquoise
//   "#45B7D1", // Sky Blue
//   "#96CEB4", // Mint Green
//   "#FFEAA7", // Light Yellow
//   "#DDA0DD", // Plum
//   "#98D8C8", // Seafoam
//   "#F7DC6F", // Pale Yellow
//   "#BB8FCE", // Light Purple
//   "#85C1E9", // Light Blue
//   "#F8C471", // Peach
//   "#82E0AA", // Light Green
// ]

// const GRADIENT_COLORS = [
//   "from-orange-500 to-red-500",
//   "from-amber-500 to-orange-500",
//   "from-yellow-500 to-amber-500",
//   "from-green-500 to-emerald-500",
//   "from-cyan-500 to-teal-500",
//   "from-blue-500 to-indigo-500",
//   "from-purple-500 to-violet-500",
//   "from-pink-500 to-rose-500",
//   "from-indigo-500 to-purple-500",
//   "from-emerald-500 to-green-500",
// ]

interface ShakeoutData {
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
  sandRecoveryRate: number
  vibrationIntensity: number
  dustEmission: number
  operatorExposure: number
  equipmentWear: number
  throughputRate: number
  sandQuality: number
  noiseLevel: number
}

export default function EnhancedShakeoutCharts() {
  const [formData, setFormData] = useState<ShakeoutData>({
    processName: "Advanced Shakeout System",
    withoutZauvijek: 73.13,
    withZauvijek: 40.63,
    dailySaving: 32.5,
    monthlySaving: 975.0,
    yearlySaving: 11862.5,
    costReduction: 44.4,
    energyBefore: 6.58,
    energyWithZauvijek: 3.66,
    energySaved: 2.92,
    sandRecoveryRate: 95.2,
    vibrationIntensity: 75.5,
    dustEmission: 12.3,
    operatorExposure: 8.5,
    equipmentWear: 15.2,
    throughputRate: 92.8,
    sandQuality: 96.5,
    noiseLevel: 68.2,
  })

  const handleInputChange = (field: keyof ShakeoutData, value: string) => {
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
  const paybackPeriod = (22000 / formData.yearlySaving).toFixed(1)
  // const roi = ((formData.yearlySaving / 22000) * 100).toFixed(1)
  const overallEfficiency = (
    (formData.sandRecoveryRate +
      formData.throughputRate +
      formData.sandQuality +
      (100 - formData.dustEmission) +
      (100 - formData.noiseLevel / 2)) /
    5
  ).toFixed(1)
  const environmentalScore = (
    (100 - formData.dustEmission + (100 - formData.operatorExposure) + (100 - formData.noiseLevel / 2)) /
    3
  ).toFixed(1)
  const productivityGain = (((formData.throughputRate - 80) / 80) * 100).toFixed(1)
  const sandWasteReduction = (((formData.sandRecoveryRate - 85) / 85) * 100).toFixed(1)

  const summaryData = [
    {
      title: "Process Name",
      value: formData.processName,
      isCurrency: false,
      colors: "from-orange-500 to-red-500",
      icon: <Hammer className="w-6 h-6" />,
    },
    {
      title: "Sand Recovery Rate",
      value: formData.sandRecoveryRate,
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-green-500 to-emerald-500",
      icon: <Recycle className="w-6 h-6" />,
    },
    {
      title: "Throughput Rate",
      value: formData.throughputRate,
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-blue-500 to-cyan-500",
      icon: <Gauge className="w-6 h-6" />,
    },
    {
      title: "Sand Quality",
      value: formData.sandQuality,
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-purple-500 to-violet-500",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Cost Reduction",
      value: formData.costReduction,
      suffix: "%",
      isCurrency: false,
      decimals: 2,
      colors: "from-amber-500 to-orange-500",
      icon: <TrendingDown className="w-6 h-6" />,
    },
    {
      title: "Daily Saving",
      value: formData.dailySaving,
      isCurrency: true,
      decimals: 2,
      colors: "from-yellow-500 to-amber-500",
      icon: <PiggyBank className="w-6 h-6" />,
    },
    {
      title: "Environmental Score",
      value: Number(environmentalScore),
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-cyan-500 to-teal-500",
      icon: <Wind className="w-6 h-6" />,
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
  const quarterlyShakeoutData = [
    { quarter: "Q1", sandProcessed: 1200, recovery: 92, quality: 94, costs: 45000, savings: 8000 },
    { quarter: "Q2", sandProcessed: 1350, recovery: 94, quality: 95, costs: 42000, savings: 11000 },
    { quarter: "Q3", sandProcessed: 1480, recovery: 95, quality: 96, costs: 38000, savings: 15000 },
    { quarter: "Q4", sandProcessed: 1620, recovery: 96, quality: 97, costs: 35000, savings: 18000 },
  ]

  const shakeoutRadarData = [
    { subject: "Sand Recovery", A: formData.sandRecoveryRate, fullMark: 100 },
    { subject: "Throughput", A: formData.throughputRate, fullMark: 100 },
    { subject: "Sand Quality", A: formData.sandQuality, fullMark: 100 },
    { subject: "Energy Efficiency", A: (formData.energySaved / formData.energyBefore) * 100, fullMark: 100 },
    { subject: "Cost Efficiency", A: formData.costReduction, fullMark: 100 },
    { subject: "Environmental", A: Number(environmentalScore), fullMark: 100 },
  ]

  const dailyOperationData = Array.from({ length: 7 }, (_, i) => ({
    day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
    sandProcessed: Math.floor(Math.random() * 50) + 180,
    recovery: Math.floor(Math.random() * 5) + 93,
    quality: Math.floor(Math.random() * 4) + 95,
    vibration: Math.floor(Math.random() * 10) + 70,
    dust: Math.floor(Math.random() * 5) + 10,
    noise: Math.floor(Math.random() * 8) + 65,
  }))

  const sandFlowAnalysisData = [
    { stage: "Input Sand", amount: 1000, quality: 85, reusable: 850 },
    { stage: "Primary Shakeout", amount: 950, quality: 88, reusable: 836 },
    { stage: "Secondary Cleaning", amount: 920, quality: 92, reusable: 846 },
    { stage: "Quality Screening", amount: 900, quality: 96, reusable: 864 },
    { stage: "Final Recovery", amount: 880, quality: 97, reusable: 854 },
  ]

  const environmentalImpactData = [
    { metric: "Dust Emission", before: 25, after: formData.dustEmission, unit: "mg/m³" },
    { metric: "Noise Level", before: 85, after: formData.noiseLevel, unit: "dB" },
    { metric: "Operator Exposure", before: 20, after: formData.operatorExposure, unit: "%" },
    { metric: "Energy Consumption", before: formData.energyBefore, after: formData.energyWithZauvijek, unit: "kWh" },
  ]

  const equipmentHealthData = [
    { component: "Vibration Motors", health: 88, efficiency: 92, maintenance: 18, criticality: "Medium" },
    { component: "Screening Mesh", health: 94, efficiency: 96, maintenance: 25, criticality: "Low" },
    { component: "Dust Collection", health: 82, efficiency: 85, maintenance: 12, criticality: "High" },
    { component: "Conveyor System", health: 90, efficiency: 93, maintenance: 20, criticality: "Low" },
    { component: "Sand Separators", health: 86, efficiency: 89, maintenance: 15, criticality: "Medium" },
  ]

  // const hourlyProductionData = Array.from({ length: 24 }, (_, i) => ({
  //   hour: `${i.toString().padStart(2, "0")}:00`,
  //   sandProcessed: Math.floor(Math.random() * 30) + 70 + (i >= 8 && i <= 17 ? 20 : 0),
  //   recovery: Math.floor(Math.random() * 5) + 93,
  //   vibrationLevel: Math.floor(Math.random() * 15) + 70,
  //   dustLevel: Math.floor(Math.random() * 8) + 8,
  // }))

  const sandQualityTrendData = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    clayContent: Math.random() * 2 + 1,
    moistureContent: Math.random() * 1.5 + 0.5,
    grainSize: Math.random() * 0.3 + 0.2,
    permeability: Math.random() * 20 + 180,
  }))

  const costBreakdownData = [
    { name: "Energy", value: 35, color: "#FF6B35" },
    { name: "Labor", value: 25, color: "#F7931E" },
    { name: "Maintenance", value: 20, color: "#FFD23F" },
    { name: "Sand Loss", value: 12, color: "#06FFA5" },
    { name: "Equipment", value: 8, color: "#4ECDC4" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-900/20 dark:via-amber-900/20 dark:to-yellow-900/20 text-black dark:text-white p-6 transition-colors duration-300">
      {/* Enhanced Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent mb-4">
          🔨 Advanced Shakeout Analytics Hub
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-6">
          Comprehensive sand recovery analytics, environmental monitoring, and performance optimization for
          next-generation shakeout systems
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <Badge
            variant="secondary"
            className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 px-4 py-2"
          >
            🏭 Sand Recovery Optimization
          </Badge>
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-4 py-2"
          >
            🌱 Environmental Monitoring
          </Badge>
          <Badge
            variant="secondary"
            className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-4 py-2"
          >
            📊 Real-time Analytics
          </Badge>
          <Badge
            variant="secondary"
            className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-4 py-2"
          >
            🎯 Quality Control
          </Badge>
        </div>
      </div>

      {/* Enhanced Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summaryData.map((item, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${item.colors} p-6 rounded-3xl text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 flex gap-4 items-center relative overflow-hidden group`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300 group-hover:scale-110">
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
                      duration={3.5}
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
      <Card className="mb-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg border-0 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-yellow-500/10 rounded-t-lg">
          <CardTitle className="text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-4">
            <Settings className="w-8 h-8 text-orange-600" />
            Shakeout System Configuration & Parameters
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
                className="bg-white dark:bg-slate-700 border-2 focus:border-orange-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="sandRecoveryRate" className="text-sm font-bold flex items-center gap-2">
                <Recycle className="w-4 h-4" />
                Sand Recovery Rate (%)
              </Label>
              <Input
                id="sandRecoveryRate"
                type="number"
                step="0.1"
                value={formData.sandRecoveryRate}
                onChange={(e) => handleInputChange("sandRecoveryRate", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-orange-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="throughputRate" className="text-sm font-bold flex items-center gap-2">
                <Gauge className="w-4 h-4" />
                Throughput Rate (%)
              </Label>
              <Input
                id="throughputRate"
                type="number"
                step="0.1"
                value={formData.throughputRate}
                onChange={(e) => handleInputChange("throughputRate", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-orange-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="sandQuality" className="text-sm font-bold flex items-center gap-2">
                <Award className="w-4 h-4" />
                Sand Quality (%)
              </Label>
              <Input
                id="sandQuality"
                type="number"
                step="0.1"
                value={formData.sandQuality}
                onChange={(e) => handleInputChange("sandQuality", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-orange-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="dustEmission" className="text-sm font-bold flex items-center gap-2">
                <Wind className="w-4 h-4" />
                Dust Emission (mg/m³)
              </Label>
              <Input
                id="dustEmission"
                type="number"
                step="0.1"
                value={formData.dustEmission}
                onChange={(e) => handleInputChange("dustEmission", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-orange-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="noiseLevel" className="text-sm font-bold flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Noise Level (dB)
              </Label>
              <Input
                id="noiseLevel"
                type="number"
                step="0.1"
                value={formData.noiseLevel}
                onChange={(e) => handleInputChange("noiseLevel", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-orange-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="vibrationIntensity" className="text-sm font-bold flex items-center gap-2">
                <Thermometer className="w-4 h-4" />
                Vibration Intensity (%)
              </Label>
              <Input
                id="vibrationIntensity"
                type="number"
                step="0.1"
                value={formData.vibrationIntensity}
                onChange={(e) => handleInputChange("vibrationIntensity", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-orange-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="operatorExposure" className="text-sm font-bold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Operator Exposure (%)
              </Label>
              <Input
                id="operatorExposure"
                type="number"
                step="0.1"
                value={formData.operatorExposure}
                onChange={(e) => handleInputChange("operatorExposure", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-orange-500 rounded-xl h-12"
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
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Sand Waste Reduction</div>
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">{sandWasteReduction}%</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl border-2 border-orange-200 dark:border-orange-800">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Overall Efficiency</div>
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">{overallEfficiency}%</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mb-8">
        {/* Quarterly Sand Processing Performance */}
        <div className="xl:col-span-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-4">
            <BarChart3 className="w-8 h-8 text-orange-600" />
            Quarterly Sand Processing Performance
          </h2>
          <ResponsiveContainer width="100%" height={450}>
            <ComposedChart data={quarterlyShakeoutData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="sandGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF6B35" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FF6B35" stopOpacity={0.2} />
                </linearGradient>
                <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06FFA5" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#06FFA5" stopOpacity={0.2} />
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
              <Area
                dataKey="sandProcessed"
                fill="url(#sandGradient)"
                stroke="#FF6B35"
                strokeWidth={3}
                name="Sand Processed (tons)"
              />
              <Bar dataKey="costs" fill="#F7931E" name="Costs (₹)" radius={[6, 6, 0, 0]} />
              <Line
                type="monotone"
                dataKey="savings"
                stroke="#06FFA5"
                strokeWidth={4}
                name="Savings (₹)"
                dot={{ fill: "#06FFA5", strokeWidth: 3, r: 8 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Shakeout Performance Radar */}
        <div className="xl:col-span-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Target className="w-6 h-6 text-purple-600" />
            Shakeout Performance Radar
          </h2>
          <ResponsiveContainer width="100%" height={380}>
            <RadarChart data={shakeoutRadarData}>
              <PolarGrid stroke="#374151" />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: "#6B7280" }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 9, fill: "#6B7280" }} />
              <Radar
                name="Performance"
                dataKey="A"
                stroke="#FF6B35"
                fill="#FF6B35"
                fillOpacity={0.4}
                strokeWidth={3}
                dot={{ fill: "#FF6B35", strokeWidth: 2, r: 5 }}
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

      {/* Sand Flow Analysis & Environmental Impact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Sand Flow Analysis */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Activity className="w-6 h-6 text-green-600" />
            Sand Flow Analysis
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={sandFlowAnalysisData}>
              <defs>
                <linearGradient id="flowGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4ECDC4" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4ECDC4" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="qualityGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06FFA5" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#06FFA5" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis dataKey="stage" stroke="#6B7280" fontSize={11} />
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
                dataKey="amount"
                stroke="#4ECDC4"
                fill="url(#flowGradient)"
                strokeWidth={3}
                name="Sand Amount (kg)"
              />
              <Area
                type="monotone"
                dataKey="quality"
                stroke="#06FFA5"
                fill="url(#qualityGradient)"
                strokeWidth={3}
                name="Quality %"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Environmental Impact */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Wind className="w-6 h-6 text-blue-600" />
            Environmental Impact Comparison
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={environmentalImpactData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis type="number" stroke="#6B7280" fontSize={12} />
              <YAxis dataKey="metric" type="category" stroke="#6B7280" fontSize={11} width={120} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(30, 41, 59, 0.95)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#F8FAFC",
                }}
              />
              <Bar dataKey="before" fill="#EF4444" name="Before" radius={[0, 4, 4, 0]} />
              <Bar dataKey="after" fill="#06FFA5" name="After" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Equipment Health & Sand Quality Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Equipment Health Monitoring */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
            Equipment Health Monitoring
          </h2>
          <div className="space-y-4">
            {equipmentHealthData.map((item, index) => (
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
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600 dark:text-gray-400 mb-1">Health: {item.health}%</div>
                    <Progress value={item.health} className="h-2" />
                  </div>
                  <div>
                    <div className="text-gray-600 dark:text-gray-400 mb-1">Efficiency: {item.efficiency}%</div>
                    <Progress value={item.efficiency} className="h-2" />
                  </div>
                  <div>
                    <div className="text-gray-600 dark:text-gray-400 mb-1">Next: {item.maintenance} days</div>
                    <Progress value={(30 - item.maintenance) * 3.33} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sand Quality Trends */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Award className="w-6 h-6 text-purple-600" />
            Sand Quality Trends (30 Days)
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={sandQualityTrendData.slice(0, 15)}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis dataKey="day" stroke="#6B7280" fontSize={11} />
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
              <Line
                type="monotone"
                dataKey="clayContent"
                stroke="#FF6B35"
                strokeWidth={3}
                name="Clay Content %"
                dot={{ fill: "#FF6B35", strokeWidth: 2, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="moistureContent"
                stroke="#4ECDC4"
                strokeWidth={3}
                name="Moisture %"
                dot={{ fill: "#4ECDC4", strokeWidth: 2, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="grainSize"
                stroke="#06FFA5"
                strokeWidth={3}
                name="Grain Size (mm)"
                dot={{ fill: "#06FFA5", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Cost Analysis & Daily Operations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Enhanced Cost Breakdown */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <PiggyBank className="w-6 h-6 text-green-600" />
            Shakeout Cost Breakdown
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

        {/* Daily Operations Monitoring */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Calendar className="w-6 h-6 text-indigo-600" />
            Daily Operations Monitoring
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={dailyOperationData}>
              <defs>
                <linearGradient id="operationsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#45B7D1" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#45B7D1" stopOpacity={0.1} />
                </linearGradient>
              </defs>
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
              <Area
                type="monotone"
                dataKey="sandProcessed"
                stroke="#45B7D1"
                fill="url(#operationsGradient)"
                strokeWidth={3}
                name="Sand Processed (kg)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Ultimate Shakeout Summary Dashboard */}
      <div className="bg-gradient-to-br from-orange-500/10 via-amber-500/10 via-yellow-500/10 to-green-500/10 dark:from-orange-900/20 dark:via-amber-900/20 dark:via-yellow-900/20 dark:to-green-900/20 p-10 rounded-3xl shadow-2xl border-2 border-orange-200/50 dark:border-orange-800/50">
        <h3 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
          🔨 Ultimate Shakeout Performance Dashboard
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="text-center p-8 bg-white/60 dark:bg-slate-800/60 rounded-3xl backdrop-blur-lg border border-white/20">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-3">
              ₹{formData.yearlySaving.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Annual Savings</div>
            <div className="text-xs text-green-600 dark:text-green-400">
              +{formData.costReduction.toFixed(1)}% cost reduction
            </div>
          </div>
          <div className="text-center p-8 bg-white/60 dark:bg-slate-800/60 rounded-3xl backdrop-blur-lg border border-white/20">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-3">
              {formData.sandRecoveryRate.toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Sand Recovery Rate</div>
            <div className="text-xs text-blue-600 dark:text-blue-400">Industry Leading</div>
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
            <div className="text-xs text-orange-600 dark:text-orange-400">Optimized Performance</div>
          </div>
          <div className="text-center p-8 bg-white/60 dark:bg-slate-800/60 rounded-3xl backdrop-blur-lg border border-white/20">
            <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-3">{environmentalScore}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Environmental Score</div>
            <div className="text-xs text-amber-600 dark:text-amber-400">Eco-Friendly Operation</div>
          </div>
        </div>
      </div>
    </div>
  )
}
