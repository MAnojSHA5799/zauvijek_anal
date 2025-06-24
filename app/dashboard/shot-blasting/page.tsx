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
  ScatterChart,
  Scatter,
} from "recharts"
import {
  Sparkles,
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
  Shield,
  Zap,
  Wind,
  Thermometer,
  Timer,
} from "lucide-react"
import CountUp from "react-countup"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// const VIBRANT_COLORS = [
//   "#00D4FF", // Electric Blue
//   "#FF3366", // Hot Pink
//   "#00FF88", // Neon Green
//   "#FF6B00", // Vibrant Orange
//   "#8B5CF6", // Purple
//   "#F59E0B", // Amber
//   "#EF4444", // Red
//   "#10B981", // Emerald
//   "#3B82F6", // Blue
//   "#F97316", // Orange
//   "#EC4899", // Pink
//   "#06B6D4", // Cyan
//   "#84CC16", // Lime
//   "#6366F1", // Indigo
//   "#F472B6", // Rose
// ]

// const GRADIENT_COLORS = [
//   "from-cyan-500 to-blue-500",
//   "from-pink-500 to-red-500",
//   "from-green-500 to-emerald-500",
//   "from-orange-500 to-red-500",
//   "from-purple-500 to-violet-500",
//   "from-amber-500 to-orange-500",
//   "from-red-500 to-pink-500",
//   "from-emerald-500 to-green-500",
//   "from-blue-500 to-indigo-500",
//   "from-indigo-500 to-purple-500",
// ]

interface ShotBlastingData {
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
  blastPressure: number
  surfaceRoughness: number
  abrasiveConsumption: number
  cleaningEfficiency: number
  dustGeneration: number
  noiseLevel: number
  equipmentWear: number
  cycleTime: number
  surfaceQuality: number
  operatorSafety: number
}

export default function EnhancedShotBlastingCharts() {
  const [formData, setFormData] = useState<ShotBlastingData>({
    processName: "Advanced Shot Blasting System",
    withoutZauvijek: 105.63,
    withZauvijek: 56.88,
    dailySaving: 48.75,
    monthlySaving: 1462.5,
    yearlySaving: 17793.75,
    costReduction: 46.1,
    energyBefore: 9.51,
    energyWithZauvijek: 5.12,
    energySaved: 4.39,
    blastPressure: 85.5,
    surfaceRoughness: 2.8,
    abrasiveConsumption: 12.5,
    cleaningEfficiency: 96.8,
    dustGeneration: 8.2,
    noiseLevel: 72.5,
    equipmentWear: 18.3,
    cycleTime: 35.2,
    surfaceQuality: 94.7,
    operatorSafety: 92.1,
  })

  const handleInputChange = (field: keyof ShotBlastingData, value: string) => {
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
  const paybackPeriod = (28000 / formData.yearlySaving).toFixed(1)
  // const roi = ((formData.yearlySaving / 28000) * 100).toFixed(1)
  const overallEfficiency = (
    (formData.cleaningEfficiency +
      formData.surfaceQuality +
      formData.operatorSafety +
      (100 - formData.dustGeneration) +
      (100 - formData.noiseLevel / 2)) /
    5
  ).toFixed(1)
  const environmentalScore = (
    (100 - formData.dustGeneration + (100 - formData.noiseLevel / 2) + formData.operatorSafety) /
    3
  ).toFixed(1)
  const productivityGain = (((formData.cleaningEfficiency - 85) / 85) * 100).toFixed(1)
  const abrasiveEfficiency = (((20 - formData.abrasiveConsumption) / 20) * 100).toFixed(1)
  const surfaceFinishScore = ((formData.surfaceQuality + (100 - formData.surfaceRoughness * 10)) / 2).toFixed(1)

  const summaryData = [
    {
      title: "Process Name",
      value: formData.processName,
      isCurrency: false,
      colors: "from-cyan-500 to-blue-500",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: "Cleaning Efficiency",
      value: formData.cleaningEfficiency,
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-green-500 to-emerald-500",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Surface Quality",
      value: formData.surfaceQuality,
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-blue-500 to-cyan-500",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Surface Finish Score",
      value: Number(surfaceFinishScore),
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
      colors: "from-amber-500 to-orange-500",
      icon: <PiggyBank className="w-6 h-6" />,
    },
    {
      title: "Environmental Score",
      value: Number(environmentalScore),
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-emerald-500 to-green-500",
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
  const quarterlyBlastingData = [
    { quarter: "Q1", partsProcessed: 850, efficiency: 92, quality: 93, costs: 52000, savings: 12000 },
    { quarter: "Q2", partsProcessed: 920, efficiency: 94, quality: 95, costs: 48000, savings: 16000 },
    { quarter: "Q3", partsProcessed: 1050, efficiency: 96, quality: 96, costs: 44000, savings: 20000 },
    { quarter: "Q4", partsProcessed: 1180, efficiency: 97, quality: 97, costs: 40000, savings: 24000 },
  ]

  const blastingRadarData = [
    { subject: "Cleaning Efficiency", A: formData.cleaningEfficiency, fullMark: 100 },
    { subject: "Surface Quality", A: formData.surfaceQuality, fullMark: 100 },
    { subject: "Energy Efficiency", A: (formData.energySaved / formData.energyBefore) * 100, fullMark: 100 },
    { subject: "Cost Efficiency", A: formData.costReduction, fullMark: 100 },
    { subject: "Operator Safety", A: formData.operatorSafety, fullMark: 100 },
    { subject: "Environmental", A: Number(environmentalScore), fullMark: 100 },
  ]

  // const dailyBlastingData = Array.from({ length: 7 }, (_, i) => ({
  //   day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
  //   partsProcessed: Math.floor(Math.random() * 30) + 120,
  //   efficiency: Math.floor(Math.random() * 5) + 94,
  //   quality: Math.floor(Math.random() * 4) + 93,
  //   pressure: Math.floor(Math.random() * 10) + 80,
  //   dust: Math.floor(Math.random() * 3) + 7,
  //   noise: Math.floor(Math.random() * 8) + 70,
  // }))

  const blastingProcessData = [
    { stage: "Pre-cleaning", efficiency: 88, quality: 85, time: 45 },
    { stage: "Primary Blast", efficiency: 94, quality: 92, time: 120 },
    { stage: "Secondary Blast", efficiency: 96, quality: 95, time: 90 },
    { stage: "Final Inspection", efficiency: 98, quality: 97, time: 30 },
    { stage: "Post-treatment", efficiency: 95, quality: 96, time: 60 },
  ]

  const abrasiveAnalysisData = [
    { type: "Steel Shot", consumption: 15, efficiency: 92, cost: 45, lifespan: 2500 },
    { type: "Steel Grit", consumption: 18, efficiency: 95, cost: 52, lifespan: 2200 },
    { type: "Aluminum Oxide", consumption: 12, efficiency: 88, cost: 68, lifespan: 1800 },
    { type: "Glass Beads", consumption: 10, efficiency: 85, cost: 75, lifespan: 1500 },
  ]

  const equipmentPerformanceData = [
    { component: "Blast Wheel", health: 89, efficiency: 94, maintenance: 22, criticality: "Medium" },
    { component: "Dust Collector", health: 92, efficiency: 96, maintenance: 28, criticality: "Low" },
    { component: "Abrasive Separator", health: 85, efficiency: 88, maintenance: 15, criticality: "High" },
    { component: "Conveyor System", health: 91, efficiency: 93, maintenance: 25, criticality: "Low" },
    { component: "Control System", health: 95, efficiency: 98, maintenance: 35, criticality: "Low" },
  ]

  const surfaceQualityData = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    roughness: Math.random() * 1.5 + 2,
    cleanliness: Math.random() * 5 + 95,
    coverage: Math.random() * 3 + 97,
    uniformity: Math.random() * 4 + 94,
  }))

  const environmentalImpactData = [
    { metric: "Dust Emission", before: 25, after: formData.dustGeneration, unit: "mg/m³" },
    { metric: "Noise Level", before: 90, after: formData.noiseLevel, unit: "dB" },
    { metric: "Abrasive Waste", before: 25, after: formData.abrasiveConsumption, unit: "kg/hr" },
    { metric: "Energy Usage", before: formData.energyBefore, after: formData.energyWithZauvijek, unit: "kWh" },
  ]

  const costBreakdownData = [
    { name: "Energy", value: 32, color: "#00D4FF" },
    { name: "Abrasives", value: 28, color: "#FF3366" },
    { name: "Labor", value: 22, color: "#00FF88" },
    { name: "Maintenance", value: 12, color: "#FF6B00" },
    { name: "Equipment", value: 6, color: "#8B5CF6" },
  ]

  // const hourlyProductionData = Array.from({ length: 24 }, (_, i) => ({
  //   hour: `${i.toString().padStart(2, "0")}:00`,
  //   partsProcessed: Math.floor(Math.random() * 20) + 40 + (i >= 8 && i <= 17 ? 15 : 0),
  //   efficiency: Math.floor(Math.random() * 5) + 93,
  //   pressure: Math.floor(Math.random() * 15) + 80,
  //   dustLevel: Math.floor(Math.random() * 5) + 6,
  // }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-cyan-900/20 dark:via-blue-900/20 dark:to-indigo-900/20 text-black dark:text-white p-6 transition-colors duration-300">
      {/* Enhanced Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
          ✨ Advanced Shot Blasting Analytics Hub
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-6">
          Comprehensive surface treatment analytics, quality monitoring, and performance optimization for
          next-generation shot blasting and mold breaking systems
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <Badge
            variant="secondary"
            className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 px-4 py-2"
          >
            🎯 Surface Quality Control
          </Badge>
          <Badge
            variant="secondary"
            className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-4 py-2"
          >
            🛡️ Advanced Cleaning
          </Badge>
          <Badge
            variant="secondary"
            className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-4 py-2"
          >
            📊 Real-time Monitoring
          </Badge>
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-4 py-2"
          >
            🌱 Environmental Safety
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
        <CardHeader className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-t-lg">
          <CardTitle className="text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-4">
            <Settings className="w-8 h-8 text-cyan-600" />
            Shot Blasting System Configuration & Parameters
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
                className="bg-white dark:bg-slate-700 border-2 focus:border-cyan-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="cleaningEfficiency" className="text-sm font-bold flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Cleaning Efficiency (%)
              </Label>
              <Input
                id="cleaningEfficiency"
                type="number"
                step="0.1"
                value={formData.cleaningEfficiency}
                onChange={(e) => handleInputChange("cleaningEfficiency", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-cyan-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="surfaceQuality" className="text-sm font-bold flex items-center gap-2">
                <Award className="w-4 h-4" />
                Surface Quality (%)
              </Label>
              <Input
                id="surfaceQuality"
                type="number"
                step="0.1"
                value={formData.surfaceQuality}
                onChange={(e) => handleInputChange("surfaceQuality", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-cyan-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="blastPressure" className="text-sm font-bold flex items-center gap-2">
                <Gauge className="w-4 h-4" />
                Blast Pressure (PSI)
              </Label>
              <Input
                id="blastPressure"
                type="number"
                step="0.1"
                value={formData.blastPressure}
                onChange={(e) => handleInputChange("blastPressure", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-cyan-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="surfaceRoughness" className="text-sm font-bold flex items-center gap-2">
                <Thermometer className="w-4 h-4" />
                Surface Roughness (Ra)
              </Label>
              <Input
                id="surfaceRoughness"
                type="number"
                step="0.1"
                value={formData.surfaceRoughness}
                onChange={(e) => handleInputChange("surfaceRoughness", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-cyan-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="abrasiveConsumption" className="text-sm font-bold flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Abrasive Consumption (kg/hr)
              </Label>
              <Input
                id="abrasiveConsumption"
                type="number"
                step="0.1"
                value={formData.abrasiveConsumption}
                onChange={(e) => handleInputChange("abrasiveConsumption", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-cyan-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="dustGeneration" className="text-sm font-bold flex items-center gap-2">
                <Wind className="w-4 h-4" />
                Dust Generation (mg/m³)
              </Label>
              <Input
                id="dustGeneration"
                type="number"
                step="0.1"
                value={formData.dustGeneration}
                onChange={(e) => handleInputChange("dustGeneration", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-cyan-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="cycleTime" className="text-sm font-bold flex items-center gap-2">
                <Timer className="w-4 h-4" />
                Cycle Time (minutes)
              </Label>
              <Input
                id="cycleTime"
                type="number"
                step="0.1"
                value={formData.cycleTime}
                onChange={(e) => handleInputChange("cycleTime", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-cyan-500 rounded-xl h-12"
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
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Abrasive Efficiency</div>
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">{abrasiveEfficiency}%</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-2xl border-2 border-cyan-200 dark:border-cyan-800">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Overall Efficiency</div>
              <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">{overallEfficiency}%</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mb-8">
        {/* Quarterly Blasting Performance */}
        <div className="xl:col-span-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-4">
            <BarChart3 className="w-8 h-8 text-cyan-600" />
            Quarterly Shot Blasting Performance
          </h2>
          <ResponsiveContainer width="100%" height={450}>
            <ComposedChart data={quarterlyBlastingData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="partsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00D4FF" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#00D4FF" stopOpacity={0.2} />
                </linearGradient>
                <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00FF88" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#00FF88" stopOpacity={0.2} />
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
                dataKey="partsProcessed"
                fill="url(#partsGradient)"
                stroke="#00D4FF"
                strokeWidth={3}
                name="Parts Processed"
              />
              <Bar dataKey="costs" fill="#FF3366" name="Costs (₹)" radius={[6, 6, 0, 0]} />
              <Line
                type="monotone"
                dataKey="savings"
                stroke="#00FF88"
                strokeWidth={4}
                name="Savings (₹)"
                dot={{ fill: "#00FF88", strokeWidth: 3, r: 8 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Blasting Performance Radar */}
        <div className="xl:col-span-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Target className="w-6 h-6 text-purple-600" />
            Blasting Performance Radar
          </h2>
          <ResponsiveContainer width="100%" height={380}>
            <RadarChart data={blastingRadarData}>
              <PolarGrid stroke="#374151" />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: "#6B7280" }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 9, fill: "#6B7280" }} />
              <Radar
                name="Performance"
                dataKey="A"
                stroke="#00D4FF"
                fill="#00D4FF"
                fillOpacity={0.4}
                strokeWidth={3}
                dot={{ fill: "#00D4FF", strokeWidth: 2, r: 5 }}
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

      {/* Blasting Process Analysis & Abrasive Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Blasting Process Analysis */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Activity className="w-6 h-6 text-green-600" />
            Blasting Process Stage Analysis
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={blastingProcessData}>
              <defs>
                <linearGradient id="efficiencyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00FF88" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#00FF88" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="qualityGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1} />
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
                dataKey="efficiency"
                stroke="#00FF88"
                fill="url(#efficiencyGradient)"
                strokeWidth={3}
                name="Efficiency %"
              />
              <Area
                type="monotone"
                dataKey="quality"
                stroke="#8B5CF6"
                fill="url(#qualityGradient)"
                strokeWidth={3}
                name="Quality %"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Abrasive Analysis */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Zap className="w-6 h-6 text-blue-600" />
            Abrasive Performance Analysis
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <ScatterChart data={abrasiveAnalysisData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis dataKey="consumption" stroke="#6B7280" fontSize={11} name="Consumption" />
              <YAxis dataKey="efficiency" stroke="#6B7280" fontSize={11} name="Efficiency" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(30, 41, 59, 0.95)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#F8FAFC",
                }}
                formatter={(value, name) => [value, name]}
                labelFormatter={(label) => `Type: ${label}`}
              />
              <Scatter dataKey="efficiency" fill="#00D4FF" name="Efficiency vs Consumption" />
            </ScatterChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {abrasiveAnalysisData.map((item, index) => (
              <div key={index} className="p-3 bg-gray-50 dark:bg-slate-700 rounded-xl">
                <div className="text-sm font-semibold text-gray-800 dark:text-white">{item.type}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Efficiency: {item.efficiency}% | Cost: ₹{item.cost}/kg
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Equipment Health & Surface Quality Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Equipment Health Monitoring */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
            Equipment Health Monitoring
          </h2>
          <div className="space-y-4">
            {equipmentPerformanceData.map((item, index) => (
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

        {/* Surface Quality Trends */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Award className="w-6 h-6 text-purple-600" />
            Surface Quality Trends (30 Days)
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={surfaceQualityData.slice(0, 15)}>
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
                dataKey="roughness"
                stroke="#00D4FF"
                strokeWidth={3}
                name="Roughness (Ra)"
                dot={{ fill: "#00D4FF", strokeWidth: 2, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="cleanliness"
                stroke="#00FF88"
                strokeWidth={3}
                name="Cleanliness %"
                dot={{ fill: "#00FF88", strokeWidth: 2, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="coverage"
                stroke="#FF3366"
                strokeWidth={3}
                name="Coverage %"
                dot={{ fill: "#FF3366", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Environmental Impact & Cost Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Environmental Impact */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Wind className="w-6 h-6 text-green-600" />
            Environmental Impact Comparison
          </h2>
          <ResponsiveContainer width="100%" height={300}>
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
              <Bar dataKey="before" fill="#FF3366" name="Before" radius={[0, 4, 4, 0]} />
              <Bar dataKey="after" fill="#00FF88" name="After" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Enhanced Cost Breakdown */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <PiggyBank className="w-6 h-6 text-green-600" />
            Shot Blasting Cost Breakdown
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
      </div>

      {/* Ultimate Shot Blasting Summary Dashboard */}
      <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 via-purple-500/10 to-indigo-500/10 dark:from-cyan-900/20 dark:via-blue-900/20 dark:via-purple-900/20 dark:to-indigo-900/20 p-10 rounded-3xl shadow-2xl border-2 border-cyan-200/50 dark:border-cyan-800/50">
        <h3 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          ✨ Ultimate Shot Blasting Performance Dashboard
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
              {formData.cleaningEfficiency.toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Cleaning Efficiency</div>
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
            <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 mb-3">{surfaceFinishScore}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Surface Finish Score</div>
            <div className="text-xs text-cyan-600 dark:text-cyan-400">Premium Quality</div>
          </div>
        </div>
      </div>
    </div>
  )
}
