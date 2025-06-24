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
  ScatterChart,
  Scatter,
  LineChart,
  Treemap,
  BarChart,
} from "recharts"
import {
  Activity,
  IndianRupee,
  TrendingUp,
  Zap,
  PiggyBank,
  Calendar,
  Waves,
  Settings,
  AlertTriangle,
  Shield,
  Target,
  Gauge,
  Radio,
  Volume2,
  Timer,
  Wrench,
  BarChart3,
  CheckCircle,
} from "lucide-react"
import CountUp from "react-countup"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

// Vibrant purple-violet-indigo color palette for vibration analysis
const VIBRATION_COLORS = [
  "#8B5CF6",
  "#A855F7",
  "#9333EA",
  "#7C3AED",
  "#6D28D9",
  "#5B21B6",
  "#4C1D95",
  "#3730A3",
  "#312E81",
  "#1E1B4B",
  "#6366F1",
  "#4F46E5",
  "#4338CA",
  "#3730A3",
  "#EC4899",
  "#DB2777",
  "#BE185D",
  "#9D174D",
]

// const COLORS = ["#8B5CF6", "#10B981", "#F59E0B", "#EF4444", "#06B6D4", "#84CC16"]

interface VibrationData {
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

const Vibration = () => {
  const [formData, setFormData] = useState<VibrationData>({
    processName: "Vibration",
    withoutZauvijek: 625.0,
    withZauvijek: 387.5,
    dailySaving: 237.5,
    monthlySaving: 7125.0,
    yearlySaving: 85312.5,
    costReduction: 38.0,
    energyBefore: 56.25,
    energyWithZauvijek: 34.88,
    energySaved: 21.37,
  })

  const handleInputChange = (field: keyof VibrationData, value: string) => {
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

  // Advanced calculations for vibration analysis
  const vibrationEfficiencyScore = Math.min(95, 60 + formData.costReduction * 0.8)
  const processOptimizationScore = Math.min(98, 65 + formData.costReduction * 0.9)
  const equipmentHealthScore = Math.min(92, 70 + formData.costReduction * 0.6)
  const frequencyControlScore = Math.min(96, 75 + formData.costReduction * 0.7)
  const amplitudeStabilityScore = Math.min(94, 68 + formData.costReduction * 0.8)
  const noiseReductionScore = Math.min(90, 55 + formData.costReduction * 1.1)

  const summaryData = [
    {
      title: "Process Name",
      value: formData.processName,
      isCurrency: false,
      colors: "from-purple-600 via-violet-600 to-indigo-600",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Without Zauvijek",
      value: formData.withoutZauvijek,
      isCurrency: true,
      colors: "from-purple-700 via-purple-600 to-purple-500",
      icon: <IndianRupee className="w-6 h-6" />,
    },
    {
      title: "With Zauvijek",
      value: formData.withZauvijek,
      isCurrency: true,
      colors: "from-violet-700 via-violet-600 to-violet-500",
      icon: <IndianRupee className="w-6 h-6" />,
    },
    {
      title: "Avg. Cost Reduction",
      value: formData.costReduction,
      suffix: "%",
      isCurrency: false,
      decimals: 2,
      colors: "from-rose-600 via-pink-600 to-purple-500",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Electricity Saved",
      value: formData.energySaved,
      suffix: " kWh",
      isCurrency: false,
      decimals: 2,
      colors: "from-emerald-600 via-teal-600 to-cyan-500",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Total Saving (Per Day)",
      value: formData.dailySaving,
      isCurrency: true,
      decimals: 2,
      colors: "from-yellow-500 via-amber-500 to-orange-400",
      icon: <PiggyBank className="w-6 h-6" />,
    },
    {
      title: "Monthly Saving",
      value: formData.monthlySaving,
      isCurrency: true,
      colors: "from-indigo-600 via-blue-600 to-purple-500",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: "Yearly Saving",
      value: formData.yearlySaving,
      isCurrency: true,
      colors: "from-teal-600 via-cyan-600 to-blue-500",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: "Vibration Efficiency",
      value: vibrationEfficiencyScore,
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-purple-600 via-violet-500 to-fuchsia-500",
      icon: <Waves className="w-6 h-6" />,
    },
    {
      title: "Equipment Health",
      value: equipmentHealthScore,
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-green-600 via-emerald-500 to-teal-500",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Frequency Control",
      value: frequencyControlScore,
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-blue-600 via-indigo-500 to-purple-500",
      icon: <Radio className="w-6 h-6" />,
    },
    {
      title: "Noise Reduction",
      value: noiseReductionScore,
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-orange-600 via-red-500 to-pink-500",
      icon: <Volume2 className="w-6 h-6" />,
    },
  ]

  const monthlyTrendData = [
    {
      name: "Jan",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Efficiency: vibrationEfficiencyScore - 5,
    },
    {
      name: "Feb",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Efficiency: vibrationEfficiencyScore - 3,
    },
    {
      name: "Mar",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Efficiency: vibrationEfficiencyScore - 2,
    },
    {
      name: "Apr",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Efficiency: vibrationEfficiencyScore,
    },
    {
      name: "May",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Efficiency: vibrationEfficiencyScore + 1,
    },
    {
      name: "Jun",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Efficiency: vibrationEfficiencyScore + 2,
    },
    {
      name: "Jul",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Efficiency: vibrationEfficiencyScore + 1,
    },
    {
      name: "Aug",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Efficiency: vibrationEfficiencyScore,
    },
    {
      name: "Sep",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Efficiency: vibrationEfficiencyScore + 3,
    },
    {
      name: "Oct",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Efficiency: vibrationEfficiencyScore + 2,
    },
    {
      name: "Nov",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Efficiency: vibrationEfficiencyScore + 4,
    },
    {
      name: "Dec",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Efficiency: vibrationEfficiencyScore + 5,
    },
  ]

  // Quarterly vibration performance data
  const quarterlyVibrationData = [
    {
      quarter: "Q1 2024",
      frequency: 85,
      amplitude: 78,
      stability: 82,
      efficiency: 80,
      cost: formData.withoutZauvijek * 90,
    },
    {
      quarter: "Q2 2024",
      frequency: 88,
      amplitude: 85,
      stability: 87,
      efficiency: 86,
      cost: formData.withoutZauvijek * 85,
    },
    {
      quarter: "Q3 2024",
      frequency: 92,
      amplitude: 89,
      stability: 91,
      efficiency: 90,
      cost: formData.withoutZauvijek * 80,
    },
    { quarter: "Q4 2024", frequency: 95, amplitude: 93, stability: 94, efficiency: 94, cost: formData.withZauvijek },
  ]

  // Vibration performance radar data
  const vibrationRadarData = [
    { subject: "Frequency Control", A: frequencyControlScore, B: 75, fullMark: 100 },
    { subject: "Amplitude Stability", A: amplitudeStabilityScore, B: 70, fullMark: 100 },
    { subject: "Noise Reduction", A: noiseReductionScore, B: 65, fullMark: 100 },
    { subject: "Energy Efficiency", A: vibrationEfficiencyScore, B: 68, fullMark: 100 },
    { subject: "Equipment Health", A: equipmentHealthScore, B: 72, fullMark: 100 },
    { subject: "Process Stability", A: processOptimizationScore, B: 78, fullMark: 100 },
  ]

  // 24-hour vibration monitoring data
  const hourlyVibrationData = Array.from({ length: 24 }, (_, i) => ({
    hour: `${i.toString().padStart(2, "0")}:00`,
    frequency: 45 + Math.sin(i * 0.5) * 8 + Math.random() * 5,
    amplitude: 2.5 + Math.cos(i * 0.3) * 0.8 + Math.random() * 0.3,
    vibrationLevel: 65 + Math.sin(i * 0.4) * 15 + Math.random() * 8,
    efficiency: vibrationEfficiencyScore + Math.sin(i * 0.2) * 5 + Math.random() * 3,
  }))

  // Vibration equipment analysis
  const equipmentVibrationData = [
    { equipment: "Motor A", frequency: 92, amplitude: 88, health: 95, maintenance: "Good" },
    { equipment: "Motor B", frequency: 89, amplitude: 85, health: 91, maintenance: "Good" },
    { equipment: "Conveyor 1", frequency: 87, amplitude: 82, health: 88, maintenance: "Fair" },
    { equipment: "Conveyor 2", frequency: 94, amplitude: 91, health: 96, maintenance: "Excellent" },
    { equipment: "Compressor", frequency: 85, amplitude: 79, health: 85, maintenance: "Fair" },
    { equipment: "Pump System", frequency: 91, amplitude: 87, health: 93, maintenance: "Good" },
  ]

  // Frequency vs amplitude scatter plot
  const frequencyAmplitudeData = equipmentVibrationData.map((item) => ({
    frequency: item.frequency,
    amplitude: item.amplitude,
    health: item.health,
    equipment: item.equipment,
  }))

  // Vibration zones performance
  const vibrationZonesData = [
    { zone: "Zone A", performance: 94, vibrationLevel: 45, efficiency: 92 },
    { zone: "Zone B", performance: 89, vibrationLevel: 52, efficiency: 87 },
    { zone: "Zone C", performance: 91, vibrationLevel: 48, efficiency: 89 },
    { zone: "Zone D", performance: 96, vibrationLevel: 42, efficiency: 95 },
    { zone: "Zone E", performance: 87, vibrationLevel: 55, efficiency: 85 },
  ]

  // Equipment maintenance schedule
  const maintenanceData = [
    { equipment: "Motor A", nextMaintenance: 15, lastMaintenance: 45, status: "Scheduled" },
    { equipment: "Motor B", nextMaintenance: 8, lastMaintenance: 52, status: "Due Soon" },
    { equipment: "Conveyor 1", nextMaintenance: 25, lastMaintenance: 35, status: "Scheduled" },
    { equipment: "Conveyor 2", nextMaintenance: 30, lastMaintenance: 30, status: "Scheduled" },
    { equipment: "Compressor", nextMaintenance: 5, lastMaintenance: 55, status: "Urgent" },
    { equipment: "Pump System", nextMaintenance: 18, lastMaintenance: 42, status: "Scheduled" },
  ]

  // Daily vibration operations
  const dailyOperationsData = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    operations: 85 + Math.random() * 15,
    efficiency: vibrationEfficiencyScore + (Math.random() - 0.5) * 10,
    downtime: Math.random() * 3,
    quality: 88 + Math.random() * 10,
  }))

  // Vibration energy consumption treemap
  const energyTreemapData = [
    { name: "Motors", size: formData.energyBefore * 0.4, efficiency: 92 },
    { name: "Conveyors", size: formData.energyBefore * 0.25, efficiency: 88 },
    { name: "Compressors", size: formData.energyBefore * 0.15, efficiency: 85 },
    { name: "Pumps", size: formData.energyBefore * 0.12, efficiency: 90 },
    { name: "Controls", size: formData.energyBefore * 0.08, efficiency: 95 },
  ]

  const pieChartData = [
    { name: "Before Zauvijek", value: formData.energyBefore },
    { name: "With Zauvijek", value: formData.energyWithZauvijek },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-indigo-900/20 text-black dark:text-white p-6 mb-5 transition-all duration-500">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent mb-1 flex items-center gap-3">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl shadow-lg">
            <Waves className="w-8 h-8 text-white" />
          </div>
          Advanced Vibration Analytics Dashboard
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 ml-16">
          Comprehensive vibration analysis, frequency control, and equipment optimization platform
        </p>
      </div>

      {/* Enhanced Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {summaryData.map((item, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${item.colors} p-6 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 backdrop-blur-sm border border-white/20`}
            style={{
              background: `linear-gradient(135deg, ${VIBRATION_COLORS[idx % VIBRATION_COLORS.length]}15, ${VIBRATION_COLORS[(idx + 1) % VIBRATION_COLORS.length]}25)`,
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">{item.icon}</div>
              <div className="flex-1">
                <div className="text-sm font-medium opacity-90 mb-1">{item.title}</div>
                <div className="text-1xl font-bold">
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
          </div>
        ))}
      </div>

      {/* Configuration Form */}
      <Card className="mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-purple-200 dark:border-purple-700 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold flex items-center gap-3">
            <Settings className="w-7 h-7" />
            Vibration Process Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="processName" className="text-purple-700 dark:text-purple-300 font-semibold">
                Process Name
              </Label>
              <Input
                id="processName"
                value={formData.processName}
                onChange={(e) => handleInputChange("processName", e.target.value)}
                className="border-purple-300 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="withoutZauvijek" className="text-purple-700 dark:text-purple-300 font-semibold">
                Cost Without Zauvijek (₹)
              </Label>
              <Input
                id="withoutZauvijek"
                type="number"
                step="0.01"
                value={formData.withoutZauvijek}
                onChange={(e) => handleInputChange("withoutZauvijek", e.target.value)}
                className="border-purple-300 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="withZauvijek" className="text-purple-700 dark:text-purple-300 font-semibold">
                Cost With Zauvijek (₹)
              </Label>
              <Input
                id="withZauvijek"
                type="number"
                step="0.01"
                value={formData.withZauvijek}
                onChange={(e) => handleInputChange("withZauvijek", e.target.value)}
                className="border-purple-300 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="energyBefore" className="text-purple-700 dark:text-purple-300 font-semibold">
                Energy Before Zauvijek (kWh)
              </Label>
              <Input
                id="energyBefore"
                type="number"
                step="0.01"
                value={formData.energyBefore}
                onChange={(e) => handleInputChange("energyBefore", e.target.value)}
                className="border-purple-300 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="energyWithZauvijek" className="text-purple-700 dark:text-purple-300 font-semibold">
                Energy With Zauvijek (kWh)
              </Label>
              <Input
                id="energyWithZauvijek"
                type="number"
                step="0.01"
                value={formData.energyWithZauvijek}
                onChange={(e) => handleInputChange("energyWithZauvijek", e.target.value)}
                className="border-purple-300 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-purple-700 dark:text-purple-300 font-semibold">
                Daily Saving (Auto-calculated)
              </Label>
              <Input
                value={`₹${formData.dailySaving.toFixed(2)}`}
                disabled
                className="bg-purple-50 dark:bg-purple-900/20 border-purple-200"
              />
            </div>
          </div>

          <Separator className="my-6 bg-purple-200" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200">
              <div className="text-sm text-green-600 dark:text-green-400 font-medium">Monthly Saving</div>
              <div className="text-xl font-bold text-green-700 dark:text-green-300">
                ₹{formData.monthlySaving.toLocaleString()}
              </div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200">
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Yearly Saving</div>
              <div className="text-xl font-bold text-blue-700 dark:text-blue-300">
                ₹{formData.yearlySaving.toLocaleString()}
              </div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl border border-purple-200">
              <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Cost Reduction</div>
              <div className="text-xl font-bold text-purple-700 dark:text-purple-300">
                {formData.costReduction.toFixed(2)}%
              </div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl border border-orange-200">
              <div className="text-sm text-orange-600 dark:text-orange-400 font-medium">Efficiency Score</div>
              <div className="text-xl font-bold text-orange-700 dark:text-orange-300">
                {vibrationEfficiencyScore.toFixed(1)}%
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 mb-8">
        {/* Monthly Performance Trends */}
        <div className="lg:col-span-5 bg-white/90 dark:bg-gray-800/90 p-6 rounded-2xl shadow-xl backdrop-blur-sm border border-purple-200">
          <h2 className="text-2xl font-bold mb-6 text-purple-800 dark:text-purple-300 flex items-center gap-3">
            <BarChart3 className="w-6 h-6" />
            Monthly Vibration Performance Trends
          </h2>
          <ResponsiveContainer width="100%" height={450}>
            <ComposedChart data={monthlyTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="colorManual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0.3} />
                </linearGradient>
                <linearGradient id="colorZauvijek" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.3} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" opacity={0.6} />
              <XAxis dataKey="name" stroke="#6B7280" fontSize={12} />
              <YAxis stroke="#6B7280" fontSize={12} tickFormatter={(value) => `₹${value}`} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(17, 24, 39, 0.95)",
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
                strokeWidth={4}
                name="Daily Savings"
                dot={{ fill: "#10B981", strokeWidth: 3, r: 6 }}
                activeDot={{ r: 8, stroke: "#10B981", strokeWidth: 3 }}
              />
              <Line
                type="monotone"
                dataKey="Efficiency"
                stroke="#F59E0B"
                strokeWidth={3}
                name="Efficiency %"
                dot={{ fill: "#F59E0B", strokeWidth: 2, r: 5 }}
                activeDot={{ r: 7, stroke: "#F59E0B", strokeWidth: 2 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Energy Comparison Pie Chart */}
        <div className="lg:col-span-2 bg-white/90 dark:bg-gray-800/90 p-6 rounded-2xl shadow-xl backdrop-blur-sm border border-purple-200">
          <h2 className="text-xl font-bold mb-4 text-purple-800 dark:text-purple-300 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Energy Consumption
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <defs>
                <linearGradient id="pieGradient1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#A855F7" />
                </linearGradient>
                <linearGradient id="pieGradient2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
              </defs>
              <Pie
                data={pieChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={90}
                innerRadius={40}
                label={({ name, value, percent }) => `${name}: ${value} kWh (${(percent * 100).toFixed(1)}%)`}
                labelLine={false}
              >
                <Cell fill="url(#pieGradient1)" />
                <Cell fill="url(#pieGradient2)" />
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(17, 24, 39, 0.95)",
                  border: "none",
                  borderRadius: "8px",
                  color: "#F9FAFB",
                }}
                formatter={(value) => [`${value} kWh`, "Energy Consumption"]}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Energy Savings Summary */}
          <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200">
            <div className="text-center">
              <div className="text-sm text-green-600 dark:text-green-400 mb-1 font-medium">Energy Saved Daily</div>
              <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                {formData.energySaved.toFixed(2)} kWh
              </div>
              <div className="text-xs text-green-600 dark:text-green-500 mt-1">
                {formData.costReduction.toFixed(2)}% reduction in energy consumption
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quarterly Vibration Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-purple-200 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Quarterly Vibration Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={quarterlyVibrationData}>
                <defs>
                  <linearGradient id="colorFrequency" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="colorAmplitude" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="colorStability" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="quarter" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(17, 24, 39, 0.95)",
                    border: "none",
                    borderRadius: "8px",
                    color: "#F9FAFB",
                  }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="frequency"
                  stackId="1"
                  stroke="#8B5CF6"
                  fill="url(#colorFrequency)"
                  name="Frequency Control"
                />
                <Area
                  type="monotone"
                  dataKey="amplitude"
                  stackId="2"
                  stroke="#06B6D4"
                  fill="url(#colorAmplitude)"
                  name="Amplitude Control"
                />
                <Area
                  type="monotone"
                  dataKey="stability"
                  stackId="3"
                  stroke="#10B981"
                  fill="url(#colorStability)"
                  name="Process Stability"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Vibration Performance Radar */}
        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-purple-200 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Gauge className="w-5 h-5" />
              Vibration Performance Radar
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart data={vibrationRadarData}>
                <PolarGrid stroke="#E5E7EB" />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12, fill: "#6B7280" }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10, fill: "#6B7280" }} />
                <Radar
                  name="With Zauvijek"
                  dataKey="A"
                  stroke="#8B5CF6"
                  fill="#8B5CF6"
                  fillOpacity={0.3}
                  strokeWidth={3}
                />
                <Radar
                  name="Without Zauvijek"
                  dataKey="B"
                  stroke="#EF4444"
                  fill="#EF4444"
                  fillOpacity={0.2}
                  strokeWidth={2}
                />
                <Legend />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(17, 24, 39, 0.95)",
                    border: "none",
                    borderRadius: "8px",
                    color: "#F9FAFB",
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* 24-Hour Vibration Monitoring */}
      <Card className="mb-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-purple-200 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            <Timer className="w-5 h-5" />
            24-Hour Vibration Monitoring
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={hourlyVibrationData}>
              <defs>
                <linearGradient id="colorFreq" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorAmp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="hour" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(17, 24, 39, 0.95)",
                  border: "none",
                  borderRadius: "8px",
                  color: "#F9FAFB",
                }}
              />
              <Legend />
              <Area type="monotone" dataKey="frequency" stroke="#8B5CF6" fill="url(#colorFreq)" name="Frequency (Hz)" />
              <Area
                type="monotone"
                dataKey="amplitude"
                stroke="#06B6D4"
                fill="url(#colorAmp)"
                name="Amplitude (mm/s)"
              />
              <Line
                type="monotone"
                dataKey="vibrationLevel"
                stroke="#F59E0B"
                strokeWidth={3}
                name="Vibration Level (dB)"
              />
              <Line type="monotone" dataKey="efficiency" stroke="#10B981" strokeWidth={2} name="Efficiency %" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Equipment Analysis Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Frequency vs Amplitude Analysis */}
        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-purple-200 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Radio className="w-5 h-5" />
              Frequency vs Amplitude Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ResponsiveContainer width="100%" height={350}>
              <ScatterChart data={frequencyAmplitudeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="frequency" name="Frequency" unit="Hz" stroke="#6B7280" />
                <YAxis dataKey="amplitude" name="Amplitude" unit="mm/s" stroke="#6B7280" />
                <Tooltip
                  cursor={{ strokeDasharray: "3 3" }}
                  contentStyle={{
                    backgroundColor: "rgba(17, 24, 39, 0.95)",
                    border: "none",
                    borderRadius: "8px",
                    color: "#F9FAFB",
                  }}
                  formatter={(value, name) => [value, name]}
                  labelFormatter={(label) => `Equipment: ${label}`}
                />
                <Scatter name="Equipment Performance" dataKey="health" fill="#8B5CF6">
                  {frequencyAmplitudeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={VIBRATION_COLORS[index % VIBRATION_COLORS.length]} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Vibration Zones Performance */}
        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-purple-200 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              Vibration Zones Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={vibrationZonesData}>
                <defs>
                  <linearGradient id="colorPerformance" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0.3} />
                  </linearGradient>
                  <linearGradient id="colorEfficiency" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.3} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="zone" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(17, 24, 39, 0.95)",
                    border: "none",
                    borderRadius: "8px",
                    color: "#F9FAFB",
                  }}
                />
                <Legend />
                <Bar dataKey="performance" fill="url(#colorPerformance)" name="Performance %" radius={[4, 4, 0, 0]} />
                <Bar dataKey="efficiency" fill="url(#colorEfficiency)" name="Efficiency %" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Equipment Health Monitoring */}
      <Card className="mb-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-purple-200 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Equipment Health Monitoring
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentVibrationData.map((equipment) => (
              <div
                key={equipment.equipment}
                className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-gray-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">{equipment.equipment}</h3>
                  <Badge
                    variant={
                      equipment.maintenance === "Excellent"
                        ? "default"
                        : equipment.maintenance === "Good"
                          ? "secondary"
                          : "destructive"
                    }
                    className="text-xs"
                  >
                    {equipment.maintenance}
                  </Badge>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 dark:text-gray-400">Frequency Control</span>
                      <span className="font-medium">{equipment.frequency}%</span>
                    </div>
                    <Progress value={equipment.frequency} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 dark:text-gray-400">Amplitude Stability</span>
                      <span className="font-medium">{equipment.amplitude}%</span>
                    </div>
                    <Progress value={equipment.amplitude} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 dark:text-gray-400">Overall Health</span>
                      <span className="font-medium">{equipment.health}%</span>
                    </div>
                    <Progress value={equipment.health} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Daily Operations & Energy Treemap */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Daily Vibration Operations */}
        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-purple-200 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Daily Vibration Operations
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ResponsiveContainer width="100%" height={350}>
              <ComposedChart data={dailyOperationsData.slice(-15)}>
                <defs>
                  <linearGradient id="colorOps" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.3} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="day" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(17, 24, 39, 0.95)",
                    border: "none",
                    borderRadius: "8px",
                    color: "#F9FAFB",
                  }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="operations"
                  stroke="#3B82F6"
                  fill="url(#colorOps)"
                  name="Operations Count"
                />
                <Line type="monotone" dataKey="efficiency" stroke="#10B981" strokeWidth={3} name="Efficiency %" />
                <Line type="monotone" dataKey="quality" stroke="#F59E0B" strokeWidth={2} name="Quality Score" />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Energy Consumption Treemap */}
        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-purple-200 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Energy Consumption Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ResponsiveContainer width="100%" height={350}>
              <Treemap data={energyTreemapData} dataKey="size" aspectRatio={4 / 3} stroke="#fff" fill="#8B5CF6">
                {energyTreemapData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={VIBRATION_COLORS[index % VIBRATION_COLORS.length]} />
                ))}
              </Treemap>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {energyTreemapData.map((item, index) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: VIBRATION_COLORS[index % VIBRATION_COLORS.length] }}
                  />
                  <span className="text-gray-600 dark:text-gray-400">
                    {item.name}: {item.size.toFixed(1)} kWh
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Maintenance Schedule */}
      <Card className="mb-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-purple-200 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-t-lg">
          <CardTitle className="flex items-center gap-2">
            <Wrench className="w-5 h-5" />
            Equipment Maintenance Schedule
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {maintenanceData.map((item) => (
              <div
                key={item.equipment}
                className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-gray-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200">{item.equipment}</h3>
                  <Badge
                    variant={
                      item.status === "Urgent" ? "destructive" : item.status === "Due Soon" ? "secondary" : "default"
                    }
                    className="text-xs"
                  >
                    {item.status}
                  </Badge>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Next Maintenance:</span>
                    <span className="font-medium">{item.nextMaintenance} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Last Maintenance:</span>
                    <span className="font-medium">{item.lastMaintenance} days ago</span>
                  </div>
                  <Progress value={Math.max(0, 100 - (item.nextMaintenance / 30) * 100)} className="h-2 mt-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Vibration Analysis Section */}
      <Card className="mb-8 bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 dark:from-purple-900/20 dark:via-violet-900/20 dark:to-indigo-900/20 border-purple-200 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold flex items-center gap-3">
            <Waves className="w-7 h-7" />
            Advanced Vibration Analysis & Optimization
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-purple-200">
              <div className="text-sm text-purple-600 dark:text-purple-400 mb-2 font-medium">
                Frequency Optimization
              </div>
              <div className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-2">
                {frequencyControlScore.toFixed(1)}%
              </div>
              <div className="text-xs text-gray-500">Better Control</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-violet-200">
              <div className="text-sm text-violet-600 dark:text-violet-400 mb-2 font-medium">Amplitude Control</div>
              <div className="text-3xl font-bold text-violet-700 dark:text-violet-300 mb-2">
                {amplitudeStabilityScore.toFixed(1)}%
              </div>
              <div className="text-xs text-gray-500">Enhanced Stability</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-indigo-200">
              <div className="text-sm text-indigo-600 dark:text-indigo-400 mb-2 font-medium">Equipment Life</div>
              <div className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-2">
                +{Math.round(equipmentHealthScore - 70)}%
              </div>
              <div className="text-xs text-gray-500">Extended Lifespan</div>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-blue-200">
              <div className="text-sm text-blue-600 dark:text-blue-400 mb-2 font-medium">Process Stability</div>
              <div className="text-3xl font-bold text-blue-700 dark:text-blue-300 mb-2">
                {processOptimizationScore.toFixed(1)}%
              </div>
              <div className="text-xs text-gray-500">Improved Consistency</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Vibration Benefits
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Reduced equipment wear and tear</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Improved product quality consistency</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Lower maintenance costs</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Enhanced operational efficiency</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Key Metrics
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Noise Reduction:</span>
                  <span className="font-semibold text-green-600">{noiseReductionScore.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Energy Efficiency:</span>
                  <span className="font-semibold text-blue-600">{vibrationEfficiencyScore.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Process Optimization:</span>
                  <span className="font-semibold text-purple-600">{processOptimizationScore.toFixed(1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Equipment Health:</span>
                  <span className="font-semibold text-emerald-600">{equipmentHealthScore.toFixed(1)}%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Cost Savings Breakdown */}
        <div className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-2xl shadow-xl backdrop-blur-sm border border-purple-200">
          <h2 className="text-2xl font-bold mb-6 text-purple-800 dark:text-purple-300 flex items-center gap-3">
            <PiggyBank className="w-6 h-6" />
            Cost Savings Breakdown
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl border border-purple-200">
              <span className="text-gray-700 dark:text-gray-300 font-medium">Daily Savings</span>
              <span className="font-bold text-purple-600 dark:text-purple-400 text-lg">
                ₹{formData.dailySaving.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 rounded-xl border border-violet-200">
              <span className="text-gray-700 dark:text-gray-300 font-medium">Monthly Savings</span>
              <span className="font-bold text-violet-600 dark:text-violet-400 text-lg">
                ₹{formData.monthlySaving.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl border border-indigo-200">
              <span className="text-gray-700 dark:text-gray-300 font-medium">Yearly Savings</span>
              <span className="font-bold text-indigo-600 dark:text-indigo-400 text-lg">
                ₹{formData.yearlySaving.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Process Efficiency Metrics */}
        <div className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-2xl shadow-xl backdrop-blur-sm border border-purple-200">
          <h2 className="text-2xl font-bold mb-6 text-purple-800 dark:text-purple-300 flex items-center gap-3">
            <TrendingUp className="w-6 h-6" />
            Process Efficiency Metrics
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-xl border border-rose-200">
              <span className="text-gray-700 dark:text-gray-300 font-medium">Cost Reduction</span>
              <span className="font-bold text-rose-600 dark:text-rose-400 text-lg">
                {formData.costReduction.toFixed(2)}%
              </span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl border border-emerald-200">
              <span className="text-gray-700 dark:text-gray-300 font-medium">Energy Efficiency</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400 text-lg">
                {vibrationEfficiencyScore.toFixed(1)}%
              </span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl border border-yellow-200">
              <span className="text-gray-700 dark:text-gray-300 font-medium">ROI Impact</span>
              <span className="font-bold text-yellow-600 dark:text-yellow-400 text-lg">Excellent</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl border border-cyan-200">
              <span className="text-gray-700 dark:text-gray-300 font-medium">Process Priority</span>
              <span className="font-bold text-cyan-600 dark:text-cyan-400 text-lg">High</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vibration
