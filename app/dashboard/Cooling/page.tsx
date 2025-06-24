"use client"
import { useState, useEffect } from "react"
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
import {
  Factory,
  IndianRupee,
  TrendingUp,
  Zap,
  PiggyBank,
  Calendar,
  Thermometer,
  Snowflake,
  Wind,
  Gauge,
  AlertTriangle,
  CheckCircle,
  Info,
  Activity,
  Settings,
  Leaf,
  Target,
  Award,
  TrendingDown,
} from "lucide-react"
import CountUp from "react-countup"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

// Enhanced color palettes for attractive charts
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
//   "#F4D03F",
//   "#A569BD",
//   "#5DADE2",
//   "#58D68D",
// ]

// const GRADIENT_COLORS = [
//   "from-purple-600 to-blue-600",
//   "from-green-400 to-blue-500",
//   "from-pink-500 to-rose-500",
//   "from-yellow-400 to-orange-500",
//   "from-indigo-500 to-purple-600",
//   "from-teal-400 to-cyan-500",
//   "from-red-400 to-pink-500",
//   "from-emerald-400 to-teal-500",
//   "from-blue-400 to-indigo-500",
//   "from-orange-400 to-red-500",
//   "from-cyan-400 to-blue-500",
//   "from-lime-400 to-green-500",
// ]

interface CoolingData {
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
  coolingRate: number
  temperatureReduction: number
  productionRate: number
  qualityScore: number
}

interface AlertPopupProps {
  isOpen: boolean
  onClose: () => void
  type: "warning" | "success" | "info"
  title: string
  message: string
}

const AlertPopup = ({ isOpen, onClose, type, title, message }: AlertPopupProps) => {
  if (!isOpen) return null

  const getIcon = () => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="text-3xl text-red-500 animate-pulse" />
      case "success":
        return <CheckCircle className="text-3xl text-green-500 animate-bounce" />
      case "info":
        return <Info className="text-3xl text-blue-500 animate-spin" />
    }
  }

  const getBgColor = () => {
    switch (type) {
      case "warning":
        return "from-red-500 to-orange-500"
      case "success":
        return "from-green-500 to-emerald-500"
      case "info":
        return "from-blue-500 to-cyan-500"
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-[#1c2331] p-6 rounded-2xl shadow-2xl max-w-md w-full mx-4 border-2 border-opacity-20 border-white">
        <div className={`bg-gradient-to-r ${getBgColor()} p-4 rounded-xl mb-4`}>
          <div className="flex items-center gap-3 text-white">
            {getIcon()}
            <h2 className="text-xl font-bold">{title}</h2>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">{message}</p>
        <Button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
        >
          Close
        </Button>
      </div>
    </div>
  )
}

export default function EnhancedCoolingCharts() {
  const [formData, setFormData] = useState<CoolingData>({
    processName: "Advanced Cooling System",
    withoutZauvijek: 365.63,
    withZauvijek: 219.38,
    dailySaving: 146.25,
    monthlySaving: 4387.5,
    yearlySaving: 53381.25,
    costReduction: 40.0,
    energyBefore: 32.91,
    energyWithZauvijek: 19.74,
    energySaved: 13.17,
    coolingRate: 85.5,
    temperatureReduction: 45.2,
    productionRate: 112,
    qualityScore: 94.8,
  })

  const [alertState, setAlertState] = useState({
    isOpen: false,
    type: "warning" as "warning" | "success" | "info",
    title: "",
    message: "",
  })

  // Advanced calculations
  const averageTemperature = (formData.energyBefore + formData.energyWithZauvijek) / 2
  const efficiencyRatio = (formData.energySaved / formData.energyBefore) * 100
  const roiPercentage = (formData.yearlySaving / (formData.withoutZauvijek * 365)) * 100
  const coolingEfficiency = (formData.temperatureReduction / formData.coolingRate) * 100

  const handleInputChange = (field: keyof CoolingData, value: string) => {
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

  // Smart alert system
  useEffect(() => {
    const currentEfficiency = efficiencyRatio
    const currentQuality = formData.qualityScore

    // High efficiency achievement
    if (currentEfficiency > 50 && formData.productionRate > 110) {
      setAlertState({
        isOpen: true,
        type: "success",
        title: "🎉 Outstanding Performance!",
        message: `Excellent! Cooling efficiency reached ${currentEfficiency.toFixed(1)}% with production rate at ${formData.productionRate}%. You're achieving exceptional results!`,
      })
    }
    // Quality warning
    else if (currentQuality < 90) {
      setAlertState({
        isOpen: true,
        type: "warning",
        title: "⚠️ Quality Alert!",
        message: `Quality score dropped to ${currentQuality.toFixed(1)}%. Consider adjusting cooling parameters to maintain optimal quality standards.`,
      })
    }
    // Energy optimization info
    else if (formData.energySaved > 15) {
      setAlertState({
        isOpen: true,
        type: "info",
        title: "💡 Energy Optimization",
        message: `Great energy savings of ${formData.energySaved.toFixed(2)} kWh achieved! This contributes to sustainable manufacturing practices.`,
      })
    }
  }, [formData, efficiencyRatio])

  const summaryData = [
    {
      title: "Process Name",
      value: formData.processName,
      isCurrency: false,
      colors: "from-blue-600 to-blue-500",
      icon: <Factory className="w-6 h-6" />,
    },
    {
      title: "Without Zauvijek",
      value: formData.withoutZauvijek,
      isCurrency: true,
      colors: "from-red-600 to-red-500",
      icon: <IndianRupee className="w-6 h-6" />,
    },
    {
      title: "With Zauvijek",
      value: formData.withZauvijek,
      isCurrency: true,
      colors: "from-green-600 to-green-500",
      icon: <IndianRupee className="w-6 h-6" />,
    },
    {
      title: "Cost Reduction",
      value: formData.costReduction,
      suffix: "%",
      isCurrency: false,
      decimals: 2,
      colors: "from-purple-600 to-pink-500",
      icon: <TrendingDown className="w-6 h-6" />,
    },
    {
      title: "Energy Saved",
      value: formData.energySaved,
      suffix: " kWh",
      isCurrency: false,
      decimals: 2,
      colors: "from-emerald-600 to-teal-400",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Daily Saving",
      value: formData.dailySaving,
      isCurrency: true,
      decimals: 2,
      colors: "from-yellow-500 to-orange-400",
      icon: <PiggyBank className="w-6 h-6" />,
    },
    {
      title: "Monthly Saving",
      value: formData.monthlySaving,
      isCurrency: true,
      colors: "from-indigo-600 to-purple-400",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: "Yearly Saving",
      value: formData.yearlySaving,
      isCurrency: true,
      colors: "from-teal-600 to-cyan-400",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: "Cooling Rate",
      value: formData.coolingRate,
      suffix: "°C/min",
      isCurrency: false,
      decimals: 1,
      colors: "from-cyan-500 to-blue-500",
      icon: <Snowflake className="w-6 h-6" />,
    },
    {
      title: "Temperature Drop",
      value: formData.temperatureReduction,
      suffix: "°C",
      isCurrency: false,
      decimals: 1,
      colors: "from-blue-500 to-indigo-500",
      icon: <Thermometer className="w-6 h-6" />,
    },
    {
      title: "Production Rate",
      value: formData.productionRate,
      suffix: "%",
      isCurrency: false,
      colors: "from-green-500 to-emerald-500",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Quality Score",
      value: formData.qualityScore,
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-rose-500 to-pink-500",
      icon: <Award className="w-6 h-6" />,
    },
  ]

  // Enhanced data for multiple charts
  const monthlyTrendData = Array.from({ length: 12 }, (_, i) => ({
    name: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i],
    Manual: formData.withoutZauvijek + (Math.random() - 0.5) * 20,
    Zauvijek: formData.withZauvijek + (Math.random() - 0.5) * 15,
    Saving: formData.dailySaving + (Math.random() - 0.5) * 10,
    Temperature: 25 + Math.random() * 15,
    Efficiency: 80 + Math.random() * 20,
    Quality: 90 + Math.random() * 10,
  }))

  const temperatureProfileData = Array.from({ length: 24 }, (_, i) => ({
    hour: `${i}:00`,
    inlet: 85 + Math.sin(i * 0.5) * 10,
    outlet: 35 + Math.sin(i * 0.5) * 5,
    ambient: 25 + Math.sin(i * 0.3) * 3,
    efficiency: 85 + Math.cos(i * 0.4) * 10,
  }))

  const coolingSystemData = [
    { name: "Primary Cooling", efficiency: 92, energy: 45, cost: 120 },
    { name: "Secondary Cooling", efficiency: 88, energy: 35, cost: 95 },
    { name: "Heat Exchangers", efficiency: 85, energy: 28, cost: 75 },
    { name: "Circulation Pumps", efficiency: 90, energy: 22, cost: 60 },
    { name: "Control Systems", efficiency: 95, energy: 15, cost: 40 },
  ]

  const qualityMetricsData = [
    { metric: "Surface Finish", current: 94, target: 95, previous: 89 },
    { metric: "Dimensional Accuracy", current: 96, target: 98, previous: 92 },
    { metric: "Material Properties", current: 91, target: 93, previous: 88 },
    { metric: "Cooling Uniformity", current: 89, target: 90, previous: 85 },
    { metric: "Defect Rate", current: 95, target: 97, previous: 91 },
    { metric: "Process Stability", current: 93, target: 95, previous: 90 },
  ]

  const energyBreakdownData = [
    { name: "Cooling Towers", value: 35, color: "#FF6B6B" },
    { name: "Chillers", value: 28, color: "#4ECDC4" },
    { name: "Pumps", value: 20, color: "#45B7D1" },
    { name: "Controls", value: 12, color: "#96CEB4" },
    { name: "Auxiliaries", value: 5, color: "#FFEAA7" },
  ]

  const defectAnalysisData = [
    { type: "Thermal Stress", count: 12, cost: 2400, reduction: 65 },
    { type: "Uneven Cooling", count: 8, cost: 1600, reduction: 70 },
    { type: "Surface Defects", count: 15, cost: 1800, reduction: 55 },
    { type: "Dimensional Issues", count: 6, cost: 1200, reduction: 80 },
    { type: "Material Warping", count: 4, cost: 800, reduction: 85 },
  ]

  const performanceGaugeData = [
    { name: "Overall Efficiency", value: efficiencyRatio, max: 100, color: "#10B981" },
    { name: "Quality Score", value: formData.qualityScore, max: 100, color: "#3B82F6" },
    { name: "Safety Rating", value: 96.5, max: 100, color: "#F59E0B" },
    { name: "Cost Efficiency", value: roiPercentage, max: 100, color: "#EF4444" },
  ]

  const environmentalData = Array.from({ length: 12 }, (_, i) => ({
    month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i],
    co2Emissions: 450 - i * 15 + Math.random() * 20,
    waterUsage: 1200 - i * 40 + Math.random() * 50,
    energyConsumption: 800 - i * 25 + Math.random() * 30,
    wasteReduction: 60 + i * 2 + Math.random() * 5,
  }))

  const maintenanceData = [
    { equipment: "Cooling Tower", health: 92, nextMaintenance: 15, criticality: "Low" },
    { equipment: "Chiller Unit", health: 88, nextMaintenance: 8, criticality: "Medium" },
    { equipment: "Heat Exchanger", health: 95, nextMaintenance: 22, criticality: "Low" },
    { equipment: "Circulation Pump", health: 85, nextMaintenance: 5, criticality: "High" },
    { equipment: "Control Valve", health: 90, nextMaintenance: 12, criticality: "Medium" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-[#0f1422] dark:via-[#1a1f3a] dark:to-[#2d1b69] text-black dark:text-white p-6 transition-all duration-500">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Alert Popup */}
      <AlertPopup
        isOpen={alertState.isOpen}
        onClose={() => setAlertState({ ...alertState, isOpen: false })}
        type={alertState.type}
        title={alertState.title}
        message={alertState.message}
      />

      {/* Header */}
      <div className="relative z-10 mb-8 text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-4">
          🌊 Advanced Cooling Process Analytics
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive performance metrics, cost analysis, and optimization insights for advanced cooling manufacturing
          processes
        </p>
      </div>

      {/* Enhanced Summary Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-8">
        {summaryData.map((item, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${item.colors} p-4 rounded-2xl text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex gap-3 items-center backdrop-blur-sm border border-white/20`}
          >
            <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">{item.icon}</div>
            <div>
              <div className="text-sm font-semibold opacity-90">{item.title}</div>
              <div className="text-lg font-bold">
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
      <Card className="relative z-10 mb-8 bg-white/80 dark:bg-[#1c2331]/80 backdrop-blur-sm border-0 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold flex items-center gap-3">
            <Settings className="w-8 h-8" />
            Advanced Cooling Process Configuration
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
                className="bg-white/50 dark:bg-[#0f1422]/50 backdrop-blur-sm border-2 border-blue-200 dark:border-blue-800 focus:border-blue-500"
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
                className="bg-white/50 dark:bg-[#0f1422]/50 backdrop-blur-sm border-2 border-red-200 dark:border-red-800 focus:border-red-500"
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
                className="bg-white/50 dark:bg-[#0f1422]/50 backdrop-blur-sm border-2 border-green-200 dark:border-green-800 focus:border-green-500"
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
                className="bg-white/50 dark:bg-[#0f1422]/50 backdrop-blur-sm border-2 border-yellow-200 dark:border-yellow-800 focus:border-yellow-500"
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
                className="bg-white/50 dark:bg-[#0f1422]/50 backdrop-blur-sm border-2 border-teal-200 dark:border-teal-800 focus:border-teal-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="coolingRate" className="text-sm font-semibold">
                Cooling Rate (°C/min)
              </Label>
              <Input
                id="coolingRate"
                type="number"
                step="0.1"
                value={formData.coolingRate}
                onChange={(e) => handleInputChange("coolingRate", e.target.value)}
                className="bg-white/50 dark:bg-[#0f1422]/50 backdrop-blur-sm border-2 border-cyan-200 dark:border-cyan-800 focus:border-cyan-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="temperatureReduction" className="text-sm font-semibold">
                Temperature Drop (°C)
              </Label>
              <Input
                id="temperatureReduction"
                type="number"
                step="0.1"
                value={formData.temperatureReduction}
                onChange={(e) => handleInputChange("temperatureReduction", e.target.value)}
                className="bg-white/50 dark:bg-[#0f1422]/50 backdrop-blur-sm border-2 border-indigo-200 dark:border-indigo-800 focus:border-indigo-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="productionRate" className="text-sm font-semibold">
                Production Rate (%)
              </Label>
              <Input
                id="productionRate"
                type="number"
                step="1"
                value={formData.productionRate}
                onChange={(e) => handleInputChange("productionRate", e.target.value)}
                className="bg-white/50 dark:bg-[#0f1422]/50 backdrop-blur-sm border-2 border-purple-200 dark:border-purple-800 focus:border-purple-500"
              />
            </div>
          </div>

          <Separator className="my-6" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl text-white">
              <div className="text-sm opacity-90">Efficiency Ratio</div>
              <div className="text-2xl font-bold">{efficiencyRatio.toFixed(1)}%</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl text-white">
              <div className="text-sm opacity-90">ROI Percentage</div>
              <div className="text-2xl font-bold">{roiPercentage.toFixed(1)}%</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl text-white">
              <div className="text-sm opacity-90">Cooling Efficiency</div>
              <div className="text-2xl font-bold">{coolingEfficiency.toFixed(1)}%</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl text-white">
              <div className="text-sm opacity-90">Avg Temperature</div>
              <div className="text-2xl font-bold">{averageTemperature.toFixed(1)}°C</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Performance Gauge Charts */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {performanceGaugeData.map((gauge, idx) => (
          <Card key={idx} className="bg-white/80 dark:bg-[#1c2331]/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-lg font-bold text-gray-800 dark:text-white">{gauge.name}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={gauge.color}
                    strokeWidth="2"
                    strokeDasharray={`${gauge.value}, 100`}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold" style={{ color: gauge.color }}>
                    {gauge.value.toFixed(1)}%
                  </span>
                </div>
              </div>
              <Progress value={gauge.value} className="h-2" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Charts Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-7 gap-8 mb-8">
        {/* Monthly Performance Trends */}
        <div className="lg:col-span-4 bg-white/80 dark:bg-[#1c2331]/80 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-blue-500" />
            Monthly Performance Trends
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={monthlyTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="colorManual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0.2} />
                </linearGradient>
                <linearGradient id="colorZauvijek" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
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
                strokeDasharray="8 8"
                name="Efficiency %"
                dot={{ fill: "#F59E0B", strokeWidth: 2, r: 4 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Energy Breakdown Pie Chart */}
        <div className="lg:col-span-3 bg-white/80 dark:bg-[#1c2331]/80 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border-0">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Zap className="w-8 h-8 text-yellow-500" />
            Energy Consumption Breakdown
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={energyBreakdownData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                innerRadius={60}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                labelLine={false}
              >
                {energyBreakdownData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.95)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#F9FAFB",
                  backdropFilter: "blur(10px)",
                }}
                formatter={(value) => [`${value}%`, "Energy Usage"]}
              />
            </PieChart>
          </ResponsiveContainer>

          <div className="mt-6 space-y-3">
            {energyBreakdownData.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="font-medium">{item.name}</span>
                </div>
                <span className="font-bold text-lg">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Temperature Profile Analysis */}
      <div className="relative z-10 mb-8">
        <Card className="bg-white/80 dark:bg-[#1c2331]/80 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-t-2xl">
            <CardTitle className="text-2xl font-bold flex items-center gap-3">
              <Thermometer className="w-8 h-8" />
              24-Hour Temperature Profile Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={temperatureProfileData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <defs>
                  <linearGradient id="colorInlet" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="colorOutlet" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1} />
                  </linearGradient>
                  <linearGradient id="colorAmbient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis dataKey="hour" stroke="#6B7280" fontSize={12} />
                <YAxis stroke="#6B7280" fontSize={12} tickFormatter={(value) => `${value}°C`} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(31, 41, 55, 0.95)",
                    border: "none",
                    borderRadius: "12px",
                    color: "#F9FAFB",
                    backdropFilter: "blur(10px)",
                  }}
                  formatter={(value, name) => [`${Number(value).toFixed(1)}°C`, name]}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="inlet"
                  stackId="1"
                  stroke="#EF4444"
                  fill="url(#colorInlet)"
                  name="Inlet Temperature"
                  strokeWidth={3}
                />
                <Area
                  type="monotone"
                  dataKey="outlet"
                  stackId="2"
                  stroke="#3B82F6"
                  fill="url(#colorOutlet)"
                  name="Outlet Temperature"
                  strokeWidth={3}
                />
                <Area
                  type="monotone"
                  dataKey="ambient"
                  stackId="3"
                  stroke="#10B981"
                  fill="url(#colorAmbient)"
                  name="Ambient Temperature"
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="efficiency"
                  stroke="#F59E0B"
                  strokeWidth={3}
                  strokeDasharray="5 5"
                  name="Cooling Efficiency %"
                  dot={{ fill: "#F59E0B", strokeWidth: 2, r: 4 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Cooling System Performance */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="bg-white/80 dark:bg-[#1c2331]/80 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-t-2xl">
            <CardTitle className="text-2xl font-bold flex items-center gap-3">
              <Wind className="w-8 h-8" />
              Cooling System Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={coolingSystemData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis dataKey="name" stroke="#6B7280" fontSize={10} angle={-45} textAnchor="end" height={80} />
                <YAxis stroke="#6B7280" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(31, 41, 55, 0.95)",
                    border: "none",
                    borderRadius: "12px",
                    color: "#F9FAFB",
                    backdropFilter: "blur(10px)",
                  }}
                />
                <Legend />
                <Bar dataKey="efficiency" fill="#8B5CF6" name="Efficiency %" radius={[4, 4, 0, 0]} />
                <Bar dataKey="energy" fill="#06B6D4" name="Energy (kWh)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="cost" fill="#F59E0B" name="Cost (₹)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Quality Control Radar */}
        <Card className="bg-white/80 dark:bg-[#1c2331]/80 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-t-2xl">
            <CardTitle className="text-2xl font-bold flex items-center gap-3">
              <Target className="w-8 h-8" />
              Quality Control Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ResponsiveContainer width="100%" height={350}>
              <RadarChart data={qualityMetricsData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10 }} />
                <Radar
                  name="Current"
                  dataKey="current"
                  stroke="#10B981"
                  fill="#10B981"
                  fillOpacity={0.3}
                  strokeWidth={3}
                />
                <Radar
                  name="Target"
                  dataKey="target"
                  stroke="#3B82F6"
                  fill="#3B82F6"
                  fillOpacity={0.1}
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
                <Radar
                  name="Previous"
                  dataKey="previous"
                  stroke="#F59E0B"
                  fill="#F59E0B"
                  fillOpacity={0.1}
                  strokeWidth={2}
                />
                <Legend />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(31, 41, 55, 0.95)",
                    border: "none",
                    borderRadius: "12px",
                    color: "#F9FAFB",
                    backdropFilter: "blur(10px)",
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Defect Analysis */}
      <div className="relative z-10 mb-8">
        <Card className="bg-white/80 dark:bg-[#1c2331]/80 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-t-2xl">
            <CardTitle className="text-2xl font-bold flex items-center gap-3">
              <AlertTriangle className="w-8 h-8" />
              Cooling Defect Analysis & Cost Impact
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart data={defectAnalysisData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis dataKey="type" stroke="#6B7280" fontSize={12} angle={-45} textAnchor="end" height={80} />
                <YAxis yAxisId="left" stroke="#6B7280" fontSize={12} />
                <YAxis yAxisId="right" orientation="right" stroke="#6B7280" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(31, 41, 55, 0.95)",
                    border: "none",
                    borderRadius: "12px",
                    color: "#F9FAFB",
                    backdropFilter: "blur(10px)",
                  }}
                />
                <Legend />
                <Bar yAxisId="left" dataKey="count" fill="#EF4444" name="Defect Count" radius={[4, 4, 0, 0]} />
                <Bar yAxisId="right" dataKey="cost" fill="#F59E0B" name="Cost Impact (₹)" radius={[4, 4, 0, 0]} />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="reduction"
                  stroke="#10B981"
                  strokeWidth={4}
                  name="Reduction %"
                  dot={{ fill: "#10B981", strokeWidth: 3, r: 6 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Environmental Impact */}
      <div className="relative z-10 mb-8">
        <Card className="bg-white/80 dark:bg-[#1c2331]/80 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-t-2xl">
            <CardTitle className="text-2xl font-bold flex items-center gap-3">
              <Leaf className="w-8 h-8" />
              Environmental Impact & Sustainability Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart data={environmentalData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <defs>
                  <linearGradient id="colorCO2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#EF4444" stopOpacity={0.2} />
                  </linearGradient>
                  <linearGradient id="colorWater" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.2} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis dataKey="month" stroke="#6B7280" fontSize={12} />
                <YAxis stroke="#6B7280" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(31, 41, 55, 0.95)",
                    border: "none",
                    borderRadius: "12px",
                    color: "#F9FAFB",
                    backdropFilter: "blur(10px)",
                  }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="co2Emissions"
                  stackId="1"
                  stroke="#EF4444"
                  fill="url(#colorCO2)"
                  name="CO₂ Emissions (kg)"
                />
                <Area
                  type="monotone"
                  dataKey="waterUsage"
                  stackId="2"
                  stroke="#3B82F6"
                  fill="url(#colorWater)"
                  name="Water Usage (L)"
                />
                <Line
                  type="monotone"
                  dataKey="wasteReduction"
                  stroke="#10B981"
                  strokeWidth={4}
                  name="Waste Reduction %"
                  dot={{ fill: "#10B981", strokeWidth: 3, r: 6 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Predictive Maintenance */}
      <div className="relative z-10 mb-8">
        <Card className="bg-white/80 dark:bg-[#1c2331]/80 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-t-2xl">
            <CardTitle className="text-2xl font-bold flex items-center gap-3">
              <Settings className="w-8 h-8" />
              Predictive Maintenance Analytics
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {maintenanceData.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl"
                >
                  <div className="text-center mb-3">
                    <h3 className="font-bold text-gray-800 dark:text-white">{item.equipment}</h3>
                    <div
                      className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                        item.criticality === "High"
                          ? "bg-red-100 text-red-800"
                          : item.criticality === "Medium"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                      }`}
                    >
                      {item.criticality}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Health</span>
                        <span className="font-bold">{item.health}%</span>
                      </div>
                      <Progress value={item.health} className="h-2" />
                    </div>

                    <div className="text-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="text-xs text-gray-600 dark:text-gray-400">Next Maintenance</div>
                      <div className="font-bold text-blue-600 dark:text-blue-400">{item.nextMaintenance} days</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cost Analysis Summary */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-white/80 dark:bg-[#1c2331]/80 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-2xl">
            <CardTitle className="text-2xl font-bold flex items-center gap-3">
              <PiggyBank className="w-8 h-8" />
              Cost Savings Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl">
                <span className="text-gray-700 dark:text-gray-300 font-semibold">Daily Savings</span>
                <span className="font-bold text-2xl text-blue-600 dark:text-blue-400">
                  ₹{formData.dailySaving.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl">
                <span className="text-gray-700 dark:text-gray-300 font-semibold">Monthly Savings</span>
                <span className="font-bold text-2xl text-indigo-600 dark:text-indigo-400">
                  ₹{formData.monthlySaving.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/20 dark:to-emerald-900/20 rounded-xl">
                <span className="text-gray-700 dark:text-gray-300 font-semibold">Yearly Savings</span>
                <span className="font-bold text-2xl text-teal-600 dark:text-teal-400">
                  ₹{formData.yearlySaving.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-lime-50 dark:from-green-900/20 dark:to-lime-900/20 rounded-xl">
                <span className="text-gray-700 dark:text-gray-300 font-semibold">ROI Percentage</span>
                <span className="font-bold text-2xl text-green-600 dark:text-green-400">
                  {roiPercentage.toFixed(1)}%
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 dark:bg-[#1c2331]/80 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-t-2xl">
            <CardTitle className="text-2xl font-bold flex items-center gap-3">
              <Gauge className="w-8 h-8" />
              Process Efficiency Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-xl">
                <span className="text-gray-700 dark:text-gray-300 font-semibold">Cost Reduction</span>
                <span className="font-bold text-2xl text-rose-600 dark:text-rose-400">
                  {formData.costReduction.toFixed(2)}%
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl">
                <span className="text-gray-700 dark:text-gray-300 font-semibold">Energy Efficiency</span>
                <span className="font-bold text-2xl text-emerald-600 dark:text-emerald-400">
                  {efficiencyRatio.toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl">
                <span className="text-gray-700 dark:text-gray-300 font-semibold">Cooling Efficiency</span>
                <span className="font-bold text-2xl text-yellow-600 dark:text-yellow-400">
                  {coolingEfficiency.toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl">
                <span className="text-gray-700 dark:text-gray-300 font-semibold">Quality Score</span>
                <span className="font-bold text-2xl text-purple-600 dark:text-purple-400">
                  {formData.qualityScore.toFixed(1)}%
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
