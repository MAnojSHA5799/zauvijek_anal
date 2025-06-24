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
  Treemap,
} from "recharts"
import {
  Flame,
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
  Thermometer,
  Wind,
  Timer,
  Zap,
  Factory,
} from "lucide-react"
import CountUp from "react-countup"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// const VIBRANT_COLORS = [
//   "#FF4500", // Orange Red
//   "#FF6347", // Tomato
//   "#FF7F50", // Coral
//   "#FF8C00", // Dark Orange
//   "#FFA500", // Orange
//   "#FFB347", // Peach
//   "#FFC0CB", // Pink
//   "#FF69B4", // Hot Pink
//   "#FF1493", // Deep Pink
//   "#DC143C", // Crimson
//   "#B22222", // Fire Brick
//   "#CD5C5C", // Indian Red
//   "#F08080", // Light Coral
//   "#FA8072", // Salmon
//   "#E9967A", // Dark Salmon
// ]

// const GRADIENT_COLORS = [
//   "from-orange-500 to-red-500",
//   "from-red-500 to-pink-500",
//   "from-pink-500 to-rose-500",
//   "from-rose-500 to-red-500",
//   "from-amber-500 to-orange-500",
//   "from-yellow-500 to-orange-500",
//   "from-orange-500 to-amber-500",
//   "from-red-500 to-orange-500",
//   "from-pink-500 to-orange-500",
//   "from-rose-500 to-pink-500",
// ]

interface HeatProcessData {
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
  temperatureControl: number
  heatingEfficiency: number
  coolingRate: number
  thermalUniformity: number
  energyIntensity: number
  processTime: number
  qualityIndex: number
  equipmentUtilization: number
  maintenanceFrequency: number
  operatorSafety: number
  emissionLevel: number
  fuelConsumption: number
}

export default function EnhancedHeatProcessCharts() {
  const [formData, setFormData] = useState<HeatProcessData>({
    processName: "Advanced Heat Treatment System",
    withoutZauvijek: 12500.0,
    withZauvijek: 7500.0,
    dailySaving: 5000.0,
    monthlySaving: 150000.0,
    yearlySaving: 1800000.0,
    costReduction: 40.0,
    energyBefore: 1125.11,
    energyWithZauvijek: 675.07,
    energySaved: 450.05,
    temperatureControl: 96.8,
    heatingEfficiency: 92.5,
    coolingRate: 88.3,
    thermalUniformity: 94.7,
    energyIntensity: 15.2,
    processTime: 180.5,
    qualityIndex: 95.8,
    equipmentUtilization: 89.4,
    maintenanceFrequency: 25,
    operatorSafety: 97.2,
    emissionLevel: 8.5,
    fuelConsumption: 125.8,
  })

  const handleInputChange = (field: keyof HeatProcessData, value: string) => {
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
  const paybackPeriod = (45000 / formData.yearlySaving).toFixed(1)
  // const roi = ((formData.yearlySaving / 45000) * 100).toFixed(1)
  const overallEfficiency = (
    (formData.heatingEfficiency +
      formData.temperatureControl +
      formData.thermalUniformity +
      formData.qualityIndex +
      formData.equipmentUtilization) /
    5
  ).toFixed(1)
  // const environmentalScore = (
  //   (100 - formData.emissionLevel + formData.operatorSafety + (100 - formData.energyIntensity)) /
  //   3
  // ).toFixed(1)
  const thermalEfficiency = (
    (formData.heatingEfficiency + formData.thermalUniformity + (100 - formData.energyIntensity)) /
    3
  ).toFixed(1)
  const processOptimization = (
    (formData.equipmentUtilization + formData.qualityIndex + (100 - formData.processTime / 5)) /
    3
  ).toFixed(1)
  const safetyScore = (
    (formData.operatorSafety + (100 - formData.emissionLevel) + formData.temperatureControl) /
    3
  ).toFixed(1)
  const energyEfficiencyGain = ((formData.energySaved / formData.energyBefore) * 100).toFixed(1)

  const summaryData = [
    {
      title: "Process Name",
      value: formData.processName,
      isCurrency: false,
      colors: "from-orange-500 to-red-500",
      icon: <Flame className="w-6 h-6" />,
    },
    {
      title: "Temperature Control",
      value: formData.temperatureControl,
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-red-500 to-pink-500",
      icon: <Thermometer className="w-6 h-6" />,
    },
    {
      title: "Heating Efficiency",
      value: formData.heatingEfficiency,
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-pink-500 to-rose-500",
      icon: <Gauge className="w-6 h-6" />,
    },
    {
      title: "Thermal Efficiency",
      value: Number(thermalEfficiency),
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-rose-500 to-red-500",
      icon: <Target className="w-6 h-6" />,
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
      colors: "from-yellow-500 to-orange-500",
      icon: <PiggyBank className="w-6 h-6" />,
    },
    {
      title: "Safety Score",
      value: Number(safetyScore),
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-orange-500 to-amber-500",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "Yearly Saving",
      value: formData.yearlySaving,
      isCurrency: true,
      colors: "from-red-500 to-orange-500",
      icon: <Calendar className="w-6 h-6" />,
    },
  ]

  // Enhanced data sets for comprehensive analytics
  const quarterlyHeatData = [
    { quarter: "Q1", processed: 2500, efficiency: 89, quality: 93, costs: 125000, savings: 45000 },
    { quarter: "Q2", processed: 2750, efficiency: 91, quality: 94, costs: 115000, savings: 52000 },
    { quarter: "Q3", processed: 3000, efficiency: 93, quality: 95, costs: 105000, savings: 60000 },
    { quarter: "Q4", processed: 3250, efficiency: 95, quality: 96, costs: 95000, savings: 68000 },
  ]

  const heatRadarData = [
    { subject: "Temperature Control", A: formData.temperatureControl, fullMark: 100 },
    { subject: "Heating Efficiency", A: formData.heatingEfficiency, fullMark: 100 },
    { subject: "Thermal Uniformity", A: formData.thermalUniformity, fullMark: 100 },
    { subject: "Quality Index", A: formData.qualityIndex, fullMark: 100 },
    { subject: "Energy Efficiency", A: Number(energyEfficiencyGain), fullMark: 100 },
    { subject: "Safety Score", A: Number(safetyScore), fullMark: 100 },
  ]

  const dailyHeatData = Array.from({ length: 7 }, (_, i) => ({
    day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
    processed: Math.floor(Math.random() * 50) + 400,
    temperature: Math.floor(Math.random() * 50) + 850,
    efficiency: Math.floor(Math.random() * 8) + 90,
    energy: Math.floor(Math.random() * 100) + 600,
    quality: Math.floor(Math.random() * 5) + 94,
    emissions: Math.floor(Math.random() * 5) + 6,
  }))

  const heatProcessStagesData = [
    { stage: "Preheating", temperature: 250, time: 45, efficiency: 88, energy: 120 },
    { stage: "Heating", temperature: 850, time: 120, efficiency: 92, energy: 380 },
    { stage: "Soaking", temperature: 850, time: 90, efficiency: 95, energy: 280 },
    { stage: "Cooling", temperature: 400, time: 180, efficiency: 89, energy: 150 },
    { stage: "Finishing", temperature: 150, time: 30, efficiency: 94, energy: 80 },
  ]

  const temperatureProfileData = Array.from({ length: 24 }, (_, i) => ({
    hour: i,
    setpoint: 850 + Math.sin(i * 0.5) * 20,
    actual: 850 + Math.sin(i * 0.5) * 20 + (Math.random() - 0.5) * 10,
    efficiency: 90 + Math.sin(i * 0.3) * 5 + Math.random() * 3,
  }))

  const fuelAnalysisData = [
    { fuel: "Natural Gas", consumption: 45, efficiency: 94, cost: 2.8, emissions: 6.2 },
    { fuel: "Propane", consumption: 38, efficiency: 91, cost: 3.2, emissions: 7.1 },
    { fuel: "Electricity", consumption: 52, efficiency: 96, cost: 4.1, emissions: 4.8 },
    { fuel: "Hydrogen", consumption: 28, efficiency: 98, cost: 5.5, emissions: 0.5 },
  ]

  const equipmentHealthData = [
    { component: "Heating Elements", health: 92, efficiency: 94, maintenance: 18, criticality: "Medium" },
    { component: "Temperature Sensors", health: 96, efficiency: 98, maintenance: 30, criticality: "Low" },
    { component: "Insulation System", health: 88, efficiency: 91, maintenance: 12, criticality: "High" },
    { component: "Control System", health: 94, efficiency: 96, maintenance: 25, criticality: "Low" },
    { component: "Cooling System", health: 90, efficiency: 93, maintenance: 20, criticality: "Medium" },
  ]

  const thermalZoneData = [
    { zone: "Zone 1", temperature: 845, uniformity: 96, efficiency: 94 },
    { zone: "Zone 2", temperature: 852, uniformity: 94, efficiency: 92 },
    { zone: "Zone 3", temperature: 848, uniformity: 95, efficiency: 93 },
    { zone: "Zone 4", temperature: 851, uniformity: 97, efficiency: 95 },
    { zone: "Zone 5", temperature: 849, uniformity: 93, efficiency: 91 },
  ]

  const energyBreakdownData = [
    { name: "Heating", value: 45, color: "#FF4500" },
    { name: "Cooling", value: 20, color: "#FF6347" },
    { name: "Controls", value: 15, color: "#FF7F50" },
    { name: "Auxiliaries", value: 12, color: "#FFA500" },
    { name: "Losses", value: 8, color: "#FFB347" },
  ]

  const processTreemapData = [
    { name: "Heating", size: 450, fill: "#FF4500" },
    { name: "Cooling", size: 180, fill: "#FF6347" },
    { name: "Controls", size: 135, fill: "#FF7F50" },
    { name: "Auxiliaries", size: 108, fill: "#FFA500" },
    { name: "Losses", size: 72, fill: "#FFB347" },
  ]

  // const hourlyProductionData = Array.from({ length: 24 }, (_, i) => ({
  //   hour: `${i.toString().padStart(2, "0")}:00`,
  //   processed: Math.floor(Math.random() * 30) + 150 + (i >= 8 && i <= 17 ? 50 : 0),
  //   temperature: Math.floor(Math.random() * 20) + 840,
  //   efficiency: Math.floor(Math.random() * 8) + 90,
  //   energy: Math.floor(Math.random() * 50) + 600,
  // }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-orange-900/20 dark:via-red-900/20 dark:to-pink-900/20 text-black dark:text-white p-6 transition-colors duration-300">
      {/* Enhanced Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent mb-4">
          🔥 Advanced Heat Process Analytics Hub
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-6">
          Comprehensive thermal analytics, temperature control, and energy optimization for next-generation heat
          treatment and thermal processing systems
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <Badge
            variant="secondary"
            className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 px-4 py-2"
          >
            🌡️ Temperature Control
          </Badge>
          <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 px-4 py-2">
            🔥 Thermal Efficiency
          </Badge>
          <Badge
            variant="secondary"
            className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 px-4 py-2"
          >
            📊 Energy Analytics
          </Badge>
          <Badge
            variant="secondary"
            className="bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200 px-4 py-2"
          >
            🛡️ Safety Monitoring
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
              <div className="text-1.5xl font-bold">
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
        <CardHeader className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 rounded-t-lg">
          <CardTitle className="text-3xl font-bold text-gray-800 dark:text-white flex items-center gap-4">
            <Settings className="w-8 h-8 text-orange-600" />
            Heat Process System Configuration & Parameters
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
              <Label htmlFor="temperatureControl" className="text-sm font-bold flex items-center gap-2">
                <Thermometer className="w-4 h-4" />
                Temperature Control (%)
              </Label>
              <Input
                id="temperatureControl"
                type="number"
                step="0.1"
                value={formData.temperatureControl}
                onChange={(e) => handleInputChange("temperatureControl", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-orange-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="heatingEfficiency" className="text-sm font-bold flex items-center gap-2">
                <Gauge className="w-4 h-4" />
                Heating Efficiency (%)
              </Label>
              <Input
                id="heatingEfficiency"
                type="number"
                step="0.1"
                value={formData.heatingEfficiency}
                onChange={(e) => handleInputChange("heatingEfficiency", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-orange-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="thermalUniformity" className="text-sm font-bold flex items-center gap-2">
                <Target className="w-4 h-4" />
                Thermal Uniformity (%)
              </Label>
              <Input
                id="thermalUniformity"
                type="number"
                step="0.1"
                value={formData.thermalUniformity}
                onChange={(e) => handleInputChange("thermalUniformity", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-orange-500 rounded-xl h-12"
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
                className="bg-white dark:bg-slate-700 border-2 focus:border-orange-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="processTime" className="text-sm font-bold flex items-center gap-2">
                <Timer className="w-4 h-4" />
                Process Time (minutes)
              </Label>
              <Input
                id="processTime"
                type="number"
                step="0.1"
                value={formData.processTime}
                onChange={(e) => handleInputChange("processTime", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-orange-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="emissionLevel" className="text-sm font-bold flex items-center gap-2">
                <Wind className="w-4 h-4" />
                Emission Level (%)
              </Label>
              <Input
                id="emissionLevel"
                type="number"
                step="0.1"
                value={formData.emissionLevel}
                onChange={(e) => handleInputChange("emissionLevel", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 focus:border-orange-500 rounded-xl h-12"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="operatorSafety" className="text-sm font-bold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Operator Safety (%)
              </Label>
              <Input
                id="operatorSafety"
                type="number"
                step="0.1"
                value={formData.operatorSafety}
                onChange={(e) => handleInputChange("operatorSafety", e.target.value)}
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
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Energy Efficiency Gain</div>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{energyEfficiencyGain}%</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-2xl border-2 border-amber-200 dark:border-amber-800">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Process Optimization</div>
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">{processOptimization}%</div>
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
        {/* Quarterly Heat Process Performance */}
        <div className="xl:col-span-8 bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-4">
            <BarChart3 className="w-8 h-8 text-orange-600" />
            Quarterly Heat Process Performance
          </h2>
          <ResponsiveContainer width="100%" height={450}>
            <ComposedChart data={quarterlyHeatData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="processedGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF4500" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FF4500" stopOpacity={0.2} />
                </linearGradient>
                <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#32CD32" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#32CD32" stopOpacity={0.2} />
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
                dataKey="processed"
                fill="url(#processedGradient)"
                stroke="#FF4500"
                strokeWidth={3}
                name="Parts Processed"
              />
              <Bar dataKey="costs" fill="#FF6347" name="Costs (₹)" radius={[6, 6, 0, 0]} />
              <Line
                type="monotone"
                dataKey="savings"
                stroke="#32CD32"
                strokeWidth={4}
                name="Savings (₹)"
                dot={{ fill: "#32CD32", strokeWidth: 3, r: 8 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Heat Process Performance Radar */}
        <div className="xl:col-span-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Target className="w-6 h-6 text-red-600" />
            Heat Process Performance Radar
          </h2>
          <ResponsiveContainer width="100%" height={380}>
            <RadarChart data={heatRadarData}>
              <PolarGrid stroke="#374151" />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: "#6B7280" }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 9, fill: "#6B7280" }} />
              <Radar
                name="Performance"
                dataKey="A"
                stroke="#FF4500"
                fill="#FF4500"
                fillOpacity={0.4}
                strokeWidth={3}
                dot={{ fill: "#FF4500", strokeWidth: 2, r: 5 }}
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

      {/* Temperature Profile & Process Stages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* 24-Hour Temperature Profile */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Thermometer className="w-6 h-6 text-red-600" />
            24-Hour Temperature Profile
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={temperatureProfileData}>
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
              <Legend />
              <Line
                type="monotone"
                dataKey="setpoint"
                stroke="#FF4500"
                strokeWidth={3}
                name="Setpoint (°C)"
                dot={{ fill: "#FF4500", strokeWidth: 2, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#FF6347"
                strokeWidth={3}
                name="Actual (°C)"
                dot={{ fill: "#FF6347", strokeWidth: 2, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="efficiency"
                stroke="#32CD32"
                strokeWidth={3}
                name="Efficiency %"
                dot={{ fill: "#32CD32", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Heat Process Stages */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Activity className="w-6 h-6 text-orange-600" />
            Heat Process Stages Analysis
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={heatProcessStagesData}>
              <defs>
                <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF7F50" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FF7F50" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="efficiencyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FFA500" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FFA500" stopOpacity={0.1} />
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
                dataKey="temperature"
                stroke="#FF7F50"
                fill="url(#tempGradient)"
                strokeWidth={3}
                name="Temperature (°C)"
              />
              <Area
                type="monotone"
                dataKey="efficiency"
                stroke="#FFA500"
                fill="url(#efficiencyGradient)"
                strokeWidth={3}
                name="Efficiency %"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Fuel Analysis & Thermal Zones */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Fuel Analysis */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Zap className="w-6 h-6 text-yellow-600" />
            Fuel Performance Analysis
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <ScatterChart data={fuelAnalysisData}>
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
                labelFormatter={(label) => `Fuel: ${label}`}
              />
              <Scatter dataKey="efficiency" fill="#FF8C00" name="Efficiency vs Consumption" />
            </ScatterChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {fuelAnalysisData.map((item, index) => (
              <div key={index} className="p-3 bg-gray-50 dark:bg-slate-700 rounded-xl">
                <div className="text-sm font-semibold text-gray-800 dark:text-white">{item.fuel}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  Efficiency: {item.efficiency}% | Cost: ₹{item.cost}/unit
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Thermal Zones */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Factory className="w-6 h-6 text-purple-600" />
            Thermal Zone Performance
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={thermalZoneData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis dataKey="zone" stroke="#6B7280" fontSize={11} />
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
              <Bar dataKey="temperature" fill="#FF4500" name="Temperature (°C)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="uniformity" fill="#FF6347" name="Uniformity %" radius={[4, 4, 0, 0]} />
              <Bar dataKey="efficiency" fill="#FFA500" name="Efficiency %" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Equipment Health & Energy Breakdown */}
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

        {/* Energy Breakdown Treemap */}
        <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <PiggyBank className="w-6 h-6 text-green-600" />
            Energy Consumption Breakdown
          </h2>
          <ResponsiveContainer width="100%" height={300}>
           <Treemap data={processTreemapData} dataKey="size" stroke="#fff" fill="#8884d8">

              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(30, 41, 59, 0.95)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#F8FAFC",
                }}
              />
            </Treemap>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-3 mt-6">
            {energyBreakdownData.map((item, index) => (
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

      {/* Daily Operations Monitoring */}
      <div className="bg-white/95 dark:bg-slate-800/95 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border-0 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
          <Calendar className="w-6 h-6 text-indigo-600" />
          Daily Heat Process Operations
        </h2>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={dailyHeatData}>
            <defs>
              <linearGradient id="operationsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF4500" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FF4500" stopOpacity={0.1} />
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
              dataKey="processed"
              stroke="#FF4500"
              fill="url(#operationsGradient)"
              strokeWidth={3}
              name="Parts Processed"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Ultimate Heat Process Summary Dashboard */}
      <div className="bg-gradient-to-br from-orange-500/10 via-red-500/10 via-pink-500/10 to-rose-500/10 dark:from-orange-900/20 dark:via-red-900/20 dark:via-pink-900/20 dark:to-rose-900/20 p-10 rounded-3xl shadow-2xl border-2 border-orange-200/50 dark:border-orange-800/50">
        <h3 className="text-2xl font-bold text-center mb-10 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
          🔥 Ultimate Heat Process Performance Dashboard
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
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-3">
              {formData.temperatureControl.toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Temperature Control</div>
            <div className="text-xs text-orange-600 dark:text-orange-400">Precision Control</div>
          </div>
          <div className="text-center p-8 bg-white/60 dark:bg-slate-800/60 rounded-3xl backdrop-blur-lg border border-white/20">
            <div className="text-2xl font-bold text-red-600 dark:text-red-400 mb-3">{carbonFootprintReduction}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">kg CO₂ Reduced/Year</div>
            <div className="text-xs text-red-600 dark:text-red-400">Environmental Impact</div>
          </div>
          <div className="text-center p-8 bg-white/60 dark:bg-slate-800/60 rounded-3xl backdrop-blur-lg border border-white/20">
            <div className="text-2xl font-bold text-pink-600 dark:text-pink-400 mb-3">{overallEfficiency}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Overall Efficiency</div>
            <div className="text-xs text-pink-600 dark:text-pink-400">Optimized Performance</div>
          </div>
          <div className="text-center p-8 bg-white/60 dark:bg-slate-800/60 rounded-3xl backdrop-blur-lg border border-white/20">
            <div className="text-2xl font-bold text-rose-600 dark:text-rose-400 mb-3">{thermalEfficiency}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Thermal Efficiency</div>
            <div className="text-xs text-rose-600 dark:text-rose-400">Heat Excellence</div>
          </div>
        </div>
      </div>
    </div>
  )
}
