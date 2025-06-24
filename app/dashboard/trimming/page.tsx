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
  FunnelChart,
  Funnel,
  LabelList,
} from "recharts"
import {
  Wrench,
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
  Scissors,
  Wind,
  Thermometer,
  Timer,
  Sparkles,
} from "lucide-react"
import CountUp from "react-countup"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// const VIBRANT_COLORS = [
//   "#FF1744", // Vivid Red
//   "#E91E63", // Pink
//   "#9C27B0", // Purple
//   "#673AB7", // Deep Purple
//   "#3F51B5", // Indigo
//   "#2196F3", // Blue
//   "#03A9F4", // Light Blue
//   "#00BCD4", // Cyan
//   "#009688", // Teal
//   "#4CAF50", // Green
//   "#8BC34A", // Light Green
//   "#CDDC39", // Lime
//   "#FFEB3B", // Yellow
//   "#FFC107", // Amber
//   "#FF9800", // Orange
// ]

// const GRADIENT_COLORS = [
//   "from-red-500 to-pink-500",
//   "from-pink-500 to-purple-500",
//   "from-purple-500 to-indigo-500",
//   "from-indigo-500 to-blue-500",
//   "from-blue-500 to-cyan-500",
//   "from-cyan-500 to-teal-500",
//   "from-teal-500 to-green-500",
//   "from-green-500 to-lime-500",
//   "from-lime-500 to-yellow-500",
//   "from-yellow-500 to-amber-500",
// ]

interface FettlingFinishingData {
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
  surfaceFinishQuality: number
  grindingEfficiency: number
  toolWear: number
  materialRemovalRate: number
  surfaceRoughness: number
  dimensionalAccuracy: number
  operatorFatigue: number
  dustGeneration: number
  noiseLevel: number
  vibrationLevel: number
  cycleTime: number
  defectRate: number
}

export default function EnhancedFettlingFinishingCharts() {
  const [formData, setFormData] = useState<FettlingFinishingData>({
    processName: "Advanced Fettling & Finishing System",
    withoutZauvijek: 178.75,
    withZauvijek: 105.63,
    dailySaving: 73.13,
    monthlySaving: 2193.75,
    yearlySaving: 26681.25,
    costReduction: 40.9,
    energyBefore: 16.09,
    energyWithZauvijek: 9.51,
    energySaved: 6.58,
    surfaceFinishQuality: 96.8,
    grindingEfficiency: 94.2,
    toolWear: 12.5,
    materialRemovalRate: 85.7,
    surfaceRoughness: 1.8,
    dimensionalAccuracy: 98.5,
    operatorFatigue: 15.2,
    dustGeneration: 8.5,
    noiseLevel: 68.3,
    vibrationLevel: 22.1,
    cycleTime: 28.5,
    defectRate: 2.1,
  })

  const handleInputChange = (field: keyof FettlingFinishingData, value: string) => {
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
  const paybackPeriod = (32000 / formData.yearlySaving).toFixed(1)
  // const roi = ((formData.yearlySaving / 32000) * 100).toFixed(1)
  const overallEfficiency = (
    (formData.surfaceFinishQuality +
      formData.grindingEfficiency +
      formData.dimensionalAccuracy +
      (100 - formData.defectRate * 10) +
      (100 - formData.operatorFatigue)) /
    5
  ).toFixed(1)
  const environmentalScore = (
    (100 - formData.dustGeneration + (100 - formData.noiseLevel / 2) + (100 - formData.vibrationLevel)) /
    3
  ).toFixed(1)
  const productivityGain = (((formData.grindingEfficiency - 80) / 80) * 100).toFixed(1)
  const qualityScore = (
    (formData.surfaceFinishQuality + formData.dimensionalAccuracy + (100 - formData.defectRate * 10)) /
    3
  ).toFixed(1)
  const toolLifeExtension = (((20 - formData.toolWear) / 20) * 100).toFixed(1)
  // const operatorWellness = (
  //   (100 - formData.operatorFatigue + (100 - formData.noiseLevel / 2) + (100 - formData.vibrationLevel)) /
  //   3
  // ).toFixed(1)

  const summaryData = [
    {
      title: "Process Name",
      value: formData.processName,
      isCurrency: false,
      colors: "from-red-500 to-pink-500",
      icon: <Wrench className="w-6 h-6" />,
    },
    {
      title: "Surface Finish Quality",
      value: formData.surfaceFinishQuality,
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-purple-500 to-indigo-500",
      icon: <Sparkles className="w-6 h-6" />,
    },
    {
      title: "Grinding Efficiency",
      value: formData.grindingEfficiency,
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-blue-500 to-cyan-500",
      icon: <Gauge className="w-6 h-6" />,
    },
    {
      title: "Quality Score",
      value: Number(qualityScore),
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-cyan-500 to-teal-500",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Cost Reduction",
      value: formData.costReduction,
      suffix: "%",
      isCurrency: false,
      decimals: 2,
      colors: "from-teal-500 to-green-500",
      icon: <TrendingDown className="w-6 h-6" />,
    },
    {
      title: "Daily Saving",
      value: formData.dailySaving,
      isCurrency: true,
      decimals: 2,
      colors: "from-green-500 to-lime-500",
      icon: <PiggyBank className="w-6 h-6" />,
    },
    {
      title: "Tool Life Extension",
      value: Number(toolLifeExtension),
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-lime-500 to-yellow-500",
      icon: <Scissors className="w-6 h-6" />,
    },
    {
      title: "Yearly Saving",
      value: formData.yearlySaving,
      isCurrency: true,
      colors: "from-yellow-500 to-amber-500",
      icon: <Calendar className="w-6 h-6" />,
    },
  ]

  // Enhanced data sets for comprehensive analytics
  const quarterlyFettlingData = [
    { quarter: "Q1", partsFinished: 1250, quality: 94, efficiency: 91, costs: 58000, savings: 15000 },
    { quarter: "Q2", partsFinished: 1380, quality: 95, efficiency: 93, costs: 54000, savings: 19000 },
    { quarter: "Q3", partsFinished: 1520, quality: 96, efficiency: 95, costs: 50000, savings: 23000 },
    { quarter: "Q4", partsFinished: 1680, quality: 97, efficiency: 96, costs: 46000, savings: 27000 },
  ]

  const fettlingRadarData = [
    { subject: "Surface Quality", A: formData.surfaceFinishQuality, fullMark: 100 },
    { subject: "Grinding Efficiency", A: formData.grindingEfficiency, fullMark: 100 },
    { subject: "Dimensional Accuracy", A: formData.dimensionalAccuracy, fullMark: 100 },
    { subject: "Energy Efficiency", A: (formData.energySaved / formData.energyBefore) * 100, fullMark: 100 },
    { subject: "Cost Efficiency", A: formData.costReduction, fullMark: 100 },
    { subject: "Environmental", A: Number(environmentalScore), fullMark: 100 },
  ]

  const dailyFettlingData = Array.from({ length: 7 }, (_, i) => ({
    day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
    partsFinished: Math.floor(Math.random() * 40) + 180,
    quality: Math.floor(Math.random() * 5) + 94,
    efficiency: Math.floor(Math.random() * 6) + 92,
    roughness: Math.random() * 0.5 + 1.5,
    defects: Math.random() * 2 + 1,
    toolWear: Math.random() * 3 + 10,
  }))

  const fettlingProcessData = [
    { stage: "Rough Grinding", efficiency: 88, quality: 85, time: 180, toolWear: 15 },
    { stage: "Fine Grinding", efficiency: 92, quality: 92, time: 120, toolWear: 12 },
    { stage: "Polishing", efficiency: 95, quality: 96, time: 90, toolWear: 8 },
    { stage: "Final Inspection", efficiency: 98, quality: 98, time: 30, toolWear: 2 },
    { stage: "Quality Control", efficiency: 96, quality: 97, time: 45, toolWear: 3 },
  ]

  const toolPerformanceData = [
    { tool: "Grinding Wheels", efficiency: 94, wear: 12, cost: 85, lifespan: 450 },
    { tool: "Cutting Tools", efficiency: 91, wear: 15, cost: 120, lifespan: 380 },
    { tool: "Polishing Discs", efficiency: 96, wear: 8, cost: 65, lifespan: 520 },
    { tool: "Abrasive Belts", efficiency: 89, wear: 18, cost: 45, lifespan: 280 },
  ]

  const equipmentHealthData = [
    { component: "Grinding Machine", health: 91, efficiency: 95, maintenance: 20, criticality: "Medium" },
    { component: "Polishing Unit", health: 94, efficiency: 97, maintenance: 28, criticality: "Low" },
    { component: "Dust Collector", health: 87, efficiency: 89, maintenance: 12, criticality: "High" },
    { component: "Conveyor System", health: 92, efficiency: 94, maintenance: 25, criticality: "Low" },
    { component: "Quality Scanner", health: 96, efficiency: 98, maintenance: 35, criticality: "Low" },
  ]

  const surfaceQualityData = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    roughness: Math.random() * 1.2 + 1.2,
    finish: Math.random() * 4 + 96,
    accuracy: Math.random() * 2 + 98,
    defects: Math.random() * 3 + 1,
  }))

  const operatorWellnessData = [
    { metric: "Fatigue Level", before: 35, after: formData.operatorFatigue, unit: "%" },
    { metric: "Noise Exposure", before: 85, after: formData.noiseLevel, unit: "dB" },
    { metric: "Vibration Exposure", before: 45, after: formData.vibrationLevel, unit: "m/s²" },
    { metric: "Dust Exposure", before: 20, after: formData.dustGeneration, unit: "mg/m³" },
  ]

  const costBreakdownData = [
    { name: "Energy", value: 28, color: "#FF1744" },
    { name: "Tools & Abrasives", value: 32, color: "#E91E63" },
    { name: "Labor", value: 25, color: "#9C27B0" },
    { name: "Maintenance", value: 10, color: "#3F51B5" },
    { name: "Quality Control", value: 5, color: "#2196F3" },
  ]

  const qualityFunnelData = [
    { name: "Raw Parts", value: 1000, fill: "#FF1744" },
    { name: "Rough Grinding", value: 980, fill: "#E91E63" },
    { name: "Fine Grinding", value: 970, fill: "#9C27B0" },
    { name: "Polishing", value: 965, fill: "#3F51B5" },
    { name: "Quality Passed", value: 958, fill: "#2196F3" },
  ]

  // const hourlyProductionData = Array.from({ length: 24 }, (_, i) => ({
  //   hour: `${i.toString().padStart(2, "0")}:00`,
  //   partsFinished: Math.floor(Math.random() * 25) + 60 + (i >= 8 && i <= 17 ? 20 : 0),
  //   quality: Math.floor(Math.random() * 4) + 95,
  //   efficiency: Math.floor(Math.random() * 8) + 90,
  //   toolWear: Math.floor(Math.random() * 5) + 10,
  // }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-purple-50 dark:from-red-900/20 dark:via-pink-900/20 dark:to-purple-900/20 text-black dark:text-white p-6 transition-colors duration-300">
      {/* Enhanced Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
          🔧 Advanced Fettling & Finishing Analytics Hub
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-6">
          Comprehensive surface finishing analytics, quality control, and performance optimization for next-generation
          fettling and finishing operations
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 px-4 py-2">
            ✨ Surface Quality Excellence
          </Badge>
          <Badge
            variant="secondary"
            className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 px-4 py-2"
          >
            🎯 Precision Finishing
          </Badge>
          <Badge
            variant="secondary"
            className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-4 py-2"
          >
            📊 Real-time Analytics
          </Badge>
          <Badge
            variant="secondary"
            className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-4 py-2"
          >
            🛠️ Tool Optimization
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
        <CardHeader className="bg-gradient-to-r from-red-500/10 via-pink-500/10 to-purple-500/10 rounded-t-lg">
          <CardTitle className="text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-4">
            <Settings className="w-8 h-8 text-red-600" />
            Fettling & Finishing System Configuration & Parameters
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
              <Label htmlFor="surfaceFinishQuality" className="text-sm font-bold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Surface Finish Quality (%)
              </Label>
              <Input
                id="surfaceFinishQuality"
                type="number"
                step="0.1"
                value={formData.surfaceFinishQuality}
                onChange={(e) => handleInputChange("surfaceFinishQuality", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-red-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="grindingEfficiency" className="text-sm font-bold flex items-center gap-2">
                <Gauge className="w-4 h-4" />
                Grinding Efficiency (%)
              </Label>
              <Input
                id="grindingEfficiency"
                type="number"
                step="0.1"
                value={formData.grindingEfficiency}
                onChange={(e) => handleInputChange("grindingEfficiency", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-red-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="dimensionalAccuracy" className="text-sm font-bold flex items-center gap-2">
                <Target className="w-4 h-4" />
                Dimensional Accuracy (%)
              </Label>
              <Input
                id="dimensionalAccuracy"
                type="number"
                step="0.1"
                value={formData.dimensionalAccuracy}
                onChange={(e) => handleInputChange("dimensionalAccuracy", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-red-500 rounded-xl h-12"
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
                className="bg-white dark:bg-slate-700 border-2 focus:border-red-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="toolWear" className="text-sm font-bold flex items-center gap-2">
                <Scissors className="w-4 h-4" />
                Tool Wear (%)
              </Label>
              <Input
                id="toolWear"
                type="number"
                step="0.1"
                value={formData.toolWear}
                onChange={(e) => handleInputChange("toolWear", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-red-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="defectRate" className="text-sm font-bold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Defect Rate (%)
              </Label>
              <Input
                id="defectRate"
                type="number"
                step="0.1"
                value={formData.defectRate}
                onChange={(e) => handleInputChange("defectRate", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-red-500 rounded-xl h-12"
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
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Tool Life Extension</div>
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">{toolLifeExtension}%</div>
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
        {/* Quarterly Fettling Performance */}
        <div className="xl:col-span-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-4">
            <BarChart3 className="w-8 h-8 text-red-600" />
            Quarterly Fettling & Finishing Performance
          </h2>
          <ResponsiveContainer width="100%" height={450}>
            <ComposedChart data={quarterlyFettlingData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="partsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF1744" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FF1744" stopOpacity={0.2} />
                </linearGradient>
                <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4CAF50" stopOpacity={0.2} />
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
                dataKey="partsFinished"
                fill="url(#partsGradient)"
                stroke="#FF1744"
                strokeWidth={3}
                name="Parts Finished"
              />
              <Bar dataKey="costs" fill="#E91E63" name="Costs (₹)" radius={[6, 6, 0, 0]} />
              <Line
                type="monotone"
                dataKey="savings"
                stroke="#4CAF50"
                strokeWidth={4}
                name="Savings (₹)"
                dot={{ fill: "#4CAF50", strokeWidth: 3, r: 8 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Fettling Performance Radar */}
        <div className="xl:col-span-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Target className="w-6 h-6 text-purple-600" />
            Fettling Performance Radar
          </h2>
          <ResponsiveContainer width="100%" height={380}>
            <RadarChart data={fettlingRadarData}>
              <PolarGrid stroke="#374151" />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: "#6B7280" }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 9, fill: "#6B7280" }} />
              <Radar
                name="Performance"
                dataKey="A"
                stroke="#FF1744"
                fill="#FF1744"
                fillOpacity={0.4}
                strokeWidth={3}
                dot={{ fill: "#FF1744", strokeWidth: 2, r: 5 }}
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

      {/* Fettling Process Analysis & Quality Funnel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Fettling Process Analysis */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Activity className="w-6 h-6 text-green-600" />
            Fettling Process Stage Analysis
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={fettlingProcessData}>
              <defs>
                <linearGradient id="efficiencyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4CAF50" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4CAF50" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="qualityGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#9C27B0" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#9C27B0" stopOpacity={0.1} />
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
                stroke="#4CAF50"
                fill="url(#efficiencyGradient)"
                strokeWidth={3}
                name="Efficiency %"
              />
              <Area
                type="monotone"
                dataKey="quality"
                stroke="#9C27B0"
                fill="url(#qualityGradient)"
                strokeWidth={3}
                name="Quality %"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Quality Funnel Chart */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Award className="w-6 h-6 text-blue-600" />
            Quality Process Funnel
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <FunnelChart>
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(30, 41, 59, 0.95)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#F8FAFC",
                }}
              />
              <Funnel dataKey="value" data={qualityFunnelData} isAnimationActive>
                <LabelList position="center" fill="#fff" stroke="none" />
              </Funnel>
            </FunnelChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-1 gap-2 mt-4">
            {qualityFunnelData.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-slate-700 rounded-lg">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.fill }}></div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {item.name}: {item.value} parts
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tool Performance & Equipment Health */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Tool Performance Analysis */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Scissors className="w-6 h-6 text-orange-600" />
            Tool Performance Analysis
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <ScatterChart data={toolPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis dataKey="wear" stroke="#6B7280" fontSize={11} name="Wear %" />
              <YAxis dataKey="efficiency" stroke="#6B7280" fontSize={11} name="Efficiency %" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(30, 41, 59, 0.95)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#F8FAFC",
                }}
                formatter={(value, name) => [value, name]}
                labelFormatter={(label) => `Tool: ${label}`}
              />
              <Scatter dataKey="efficiency" fill="#FF9800" name="Efficiency vs Wear" />
            </ScatterChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {toolPerformanceData.map((item, index) => (
              <div key={index} className="p-3 bg-gray-50 dark:bg-slate-700 rounded-xl">
                <div className="text-sm font-semibold text-gray-800 dark:text-white">{item.tool}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Efficiency: {item.efficiency}% | Lifespan: {item.lifespan}h
                </div>
              </div>
            ))}
          </div>
        </div>

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
      </div>

      {/* Surface Quality Trends & Operator Wellness */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Surface Quality Trends */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-purple-600" />
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
                stroke="#FF1744"
                strokeWidth={3}
                name="Roughness (Ra)"
                dot={{ fill: "#FF1744", strokeWidth: 2, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="finish"
                stroke="#4CAF50"
                strokeWidth={3}
                name="Finish Quality %"
                dot={{ fill: "#4CAF50", strokeWidth: 2, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="accuracy"
                stroke="#2196F3"
                strokeWidth={3}
                name="Accuracy %"
                dot={{ fill: "#2196F3", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Operator Wellness */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Wind className="w-6 h-6 text-green-600" />
            Operator Wellness Comparison
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={operatorWellnessData} layout="horizontal">
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
              <Bar dataKey="before" fill="#E91E63" name="Before" radius={[0, 4, 4, 0]} />
              <Bar dataKey="after" fill="#4CAF50" name="After" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Cost Analysis & Daily Operations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Enhanced Cost Breakdown */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <PiggyBank className="w-6 h-6 text-green-600" />
            Fettling & Finishing Cost Breakdown
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
            <AreaChart data={dailyFettlingData}>
              <defs>
                <linearGradient id="operationsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3F51B5" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3F51B5" stopOpacity={0.1} />
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
                dataKey="partsFinished"
                stroke="#3F51B5"
                fill="url(#operationsGradient)"
                strokeWidth={3}
                name="Parts Finished"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Ultimate Fettling & Finishing Summary Dashboard */}
      <div className="bg-gradient-to-br from-red-500/10 via-pink-500/10 via-purple-500/10 to-indigo-500/10 dark:from-red-900/20 dark:via-pink-900/20 dark:via-purple-900/20 dark:to-indigo-900/20 p-10 rounded-3xl shadow-2xl border-2 border-red-200/50 dark:border-red-800/50">
        <h3 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          🔧 Ultimate Fettling & Finishing Performance Dashboard
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
              {formData.surfaceFinishQuality.toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Surface Finish Quality</div>
            <div className="text-xs text-blue-600 dark:text-blue-400">Premium Grade</div>
          </div>
          <div className="text-center p-8 bg-white/60 dark:bg-slate-800/60 rounded-3xl backdrop-blur-lg border border-white/20">
            <div className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-3">
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
            <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-3">{qualityScore}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Quality Score</div>
            <div className="text-xs text-red-600 dark:text-red-400">Excellence Standard</div>
          </div>
        </div>
      </div>
    </div>
  )
}
