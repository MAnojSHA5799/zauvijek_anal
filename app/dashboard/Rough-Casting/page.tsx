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
  LineChart,
  BarChart,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ScatterChart,
  Scatter,
} from "recharts"
import {
  FaIndustry,
  FaRupeeSign,
  FaChartLine,
  FaBolt,
  FaCoins,
  FaExclamationTriangle,
  FaThermometerHalf,
  FaCog,
  FaShieldAlt,
  FaTools,
  FaRobot,
  FaLeaf,
  FaWeight,
  FaClock,
  FaStar,
  FaAtom,
  FaMicroscope,
  FaHammer,
  FaHardHat,
} from "react-icons/fa"
import { MdSavings, MdCalendarToday, MdTrendingUp, MdSpeed, MdTimeline, MdBusiness } from "react-icons/md"
import CountUp from "react-countup"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

// Enhanced color palette with gradients and animations
const COLORS = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFEAA7",
  "#DDA0DD",
  "#98D8C8",
  "#F7DC6F",
  "#BB8FCE",
  "#85C1E9",
  "#F8C471",
  "#82E0AA",
  "#F1948A",
  "#85C1E9",
  "#D7BDE2",
  "#AED6F1",
  "#A9DFBF",
  "#F9E79F",
]

// const GRADIENT_COLORS = [
//   { from: "#FF6B6B", to: "#FF8E53" },
//   { from: "#4ECDC4", to: "#44A08D" },
//   { from: "#45B7D1", to: "#2196F3" },
//   { from: "#96CEB4", to: "#52C41A" },
//   { from: "#FFEAA7", to: "#FDCB6E" },
//   { from: "#DDA0DD", to: "#9B59B6" },
//   { from: "#98D8C8", to: "#16A085" },
//   { from: "#F7DC6F", to: "#F39C12" },
// ]

interface RoughCastingData {
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
        return <FaExclamationTriangle className="text-3xl text-red-500 animate-pulse" />
      case "success":
        return <FaCoins className="text-3xl text-green-500 animate-bounce" />
      case "info":
        return <FaStar className="text-3xl text-blue-500 animate-spin" />
      default:
        return <FaExclamationTriangle className="text-3xl text-red-500" />
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-gray-600 animate-pulse">
        <div className="flex items-center gap-3 mb-4">
          {getIcon()}
          <h2 className="text-xl font-bold text-white">{title}</h2>
        </div>
        <p className="text-gray-300 mb-6">{message}</p>
        <Button
          onClick={onClose}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
        >
          Close
        </Button>
      </div>
    </div>
  )
}

export default function EnhancedRoughCastingCharts() {
  const [formData, setFormData] = useState<RoughCastingData>({
    processName: "Rough Casting",
    withoutZauvijek: 528.13,
    withZauvijek: 284.38,
    dailySaving: 243.75,
    monthlySaving: 7312.5,
    yearlySaving: 89018.75,
    costReduction: 46.16,
    energyBefore: 47.53,
    energyWithZauvijek: 25.59,
    energySaved: 21.94,
    productionRate: 100,
  })

  const [alertState, setAlertState] = useState({
    isOpen: false,
    type: "warning" as "warning" | "success" | "info",
    title: "",
    message: "",
  })

  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  // Calculate average electricity consumption
  const averageElectricity = (formData.energyBefore + formData.energyWithZauvijek) / 2

  const handleInputChange = (field: keyof RoughCastingData, value: string) => {
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

  // Enhanced monitoring with more alert conditions
  useEffect(() => {
    const currentElectricity = formData.energyWithZauvijek
    const avgElectricity = (formData.energyBefore + formData.energyWithZauvijek) / 2

    // Check if electricity exceeds average
    if (currentElectricity > avgElectricity) {
      setAlertState({
        isOpen: true,
        type: "warning",
        title: "⚠️ High Electricity Alert!",
        message: `Current electricity consumption (${currentElectricity.toFixed(2)} kWh) is above the average line (${avgElectricity.toFixed(2)} kWh). Consider optimizing the process.`,
      })
    }

    // Check if production increased but electricity is low (efficiency gain)
    if (formData.productionRate > 100 && currentElectricity < avgElectricity) {
      setAlertState({
        isOpen: true,
        type: "success",
        title: "🎉 Efficiency Achievement!",
        message: `Great! Production increased to ${formData.productionRate}% while keeping electricity consumption low at ${currentElectricity.toFixed(2)} kWh. You're saving money and energy!`,
      })
    }

    // Check for exceptional cost reduction
    if (formData.costReduction > 50) {
      setAlertState({
        isOpen: true,
        type: "info",
        title: "🚀 Outstanding Performance!",
        message: `Exceptional cost reduction of ${formData.costReduction.toFixed(2)}%! This is significantly above industry standards. Keep up the excellent work!`,
      })
    }
  }, [formData.energyWithZauvijek, formData.energyBefore, formData.productionRate, formData.costReduction])

  // NEW ENHANCED DATA SETS FOR ADDITIONAL CHARTS

  // 1. Surface Quality Analysis
  const surfaceQualityData = [
    { parameter: "Roughness (Ra)", before: 12.5, after: 6.2, target: 8.0, improvement: 50.4 },
    { parameter: "Porosity (%)", before: 8.3, after: 3.1, target: 4.0, improvement: 62.7 },
    { parameter: "Surface Defects", before: 15, after: 4, target: 6, improvement: 73.3 },
    { parameter: "Dimensional Accuracy", before: 85, after: 96, target: 90, improvement: 12.9 },
    { parameter: "Finish Grade", before: 6.5, after: 8.8, target: 8.0, improvement: 35.4 },
  ]

  // 2. Material Properties Analysis
  const materialPropertiesData = [
    { property: "Tensile Strength", value: 485, target: 450, unit: "MPa", status: "Excellent" },
    { property: "Yield Strength", value: 320, target: 300, unit: "MPa", status: "Good" },
    { property: "Elongation", value: 18.5, target: 15.0, unit: "%", status: "Excellent" },
    { property: "Hardness", value: 165, target: 160, unit: "HB", status: "Good" },
    { property: "Impact Strength", value: 45, target: 40, unit: "J", status: "Excellent" },
    { property: "Fatigue Limit", value: 180, target: 170, unit: "MPa", status: "Good" },
  ]

  // 3. Casting Defect Analysis
  const defectAnalysisData = [
    { defectType: "Shrinkage", beforeCount: 25, afterCount: 8, severity: "High", costImpact: 15000 },
    { defectType: "Gas Porosity", beforeCount: 18, afterCount: 5, severity: "Medium", costImpact: 8500 },
    { defectType: "Cold Shuts", beforeCount: 12, afterCount: 2, severity: "High", costImpact: 12000 },
    { defectType: "Inclusions", beforeCount: 20, afterCount: 6, severity: "Medium", costImpact: 9200 },
    { defectType: "Hot Tears", beforeCount: 8, afterCount: 1, severity: "High", costImpact: 6800 },
    { defectType: "Misruns", beforeCount: 15, afterCount: 3, severity: "Medium", costImpact: 7500 },
  ]

  // 4. Temperature Profile Data
  const temperatureProfileData = [
    { stage: "Melting", temperature: 1650, optimalTemp: 1600, efficiency: 92, energyUsed: 15.2 },
    { stage: "Pouring", temperature: 1580, optimalTemp: 1550, efficiency: 95, energyUsed: 8.7 },
    { stage: "Solidification", temperature: 1200, optimalTemp: 1180, efficiency: 88, energyUsed: 12.3 },
    { stage: "Cooling", temperature: 800, optimalTemp: 750, efficiency: 85, energyUsed: 6.8 },
    { stage: "Finishing", temperature: 400, optimalTemp: 350, efficiency: 90, energyUsed: 4.3 },
  ]

  // 5. Production Efficiency Timeline
  const efficiencyTimelineData = [
    { hour: "06:00", efficiency: 85, throughput: 42, quality: 88, defectRate: 4.2 },
    { hour: "08:00", efficiency: 92, throughput: 48, quality: 91, defectRate: 3.1 },
    { hour: "10:00", efficiency: 96, throughput: 52, quality: 94, defectRate: 2.8 },
    { hour: "12:00", efficiency: 89, throughput: 45, quality: 89, defectRate: 3.5 },
    { hour: "14:00", efficiency: 94, throughput: 50, quality: 93, defectRate: 2.9 },
    { hour: "16:00", efficiency: 91, throughput: 47, quality: 90, defectRate: 3.2 },
    { hour: "18:00", efficiency: 88, throughput: 44, quality: 87, defectRate: 3.8 },
  ]

  // 6. Mold Performance Metrics
  const moldPerformanceData = [
    { moldId: "Mold-A1", cycles: 1250, efficiency: 94, lifespan: 88, maintenance: 12, cost: 25000 },
    { moldId: "Mold-B2", cycles: 980, efficiency: 91, lifespan: 82, maintenance: 18, cost: 22000 },
    { moldId: "Mold-C3", cycles: 1450, efficiency: 96, lifespan: 92, maintenance: 8, cost: 28000 },
    { moldId: "Mold-D4", cycles: 1100, efficiency: 89, lifespan: 85, maintenance: 15, cost: 24000 },
    { moldId: "Mold-E5", cycles: 1350, efficiency: 93, lifespan: 90, maintenance: 10, cost: 26500 },
  ]

  // 7. Energy Consumption Breakdown
  const energyBreakdownData = [
    { component: "Melting Furnace", consumption: 18.5, percentage: 38.9, efficiency: 88, cost: 925 },
    { component: "Casting Equipment", consumption: 12.3, percentage: 25.9, efficiency: 92, cost: 615 },
    { component: "Cooling Systems", consumption: 8.7, percentage: 18.3, efficiency: 85, cost: 435 },
    { component: "Material Handling", consumption: 5.2, percentage: 10.9, efficiency: 78, cost: 260 },
    { component: "Quality Control", consumption: 2.9, percentage: 6.1, efficiency: 95, cost: 145 },
  ]

  // 8. Quality Control Radar
  const qualityRadarData = [
    { metric: "Surface Finish", current: 94, target: 90, previous: 85 },
    { metric: "Dimensional Accuracy", current: 96, target: 95, previous: 88 },
    { metric: "Material Properties", current: 92, target: 90, previous: 86 },
    { metric: "Defect Rate", current: 88, target: 85, previous: 78 },
    { metric: "Consistency", current: 91, target: 88, previous: 82 },
    { metric: "Yield Rate", current: 89, target: 87, previous: 80 },
  ]

  // 9. Cost Analysis Breakdown
  const costAnalysisData = [
    { category: "Raw Materials", beforeCost: 180000, afterCost: 165000, savings: 15000, percentage: 8.3 },
    { category: "Energy", beforeCost: 45000, afterCost: 28000, savings: 17000, percentage: 37.8 },
    { category: "Labor", beforeCost: 85000, afterCost: 75000, savings: 10000, percentage: 11.8 },
    { category: "Equipment", beforeCost: 25000, afterCost: 22000, savings: 3000, percentage: 12.0 },
    { category: "Quality Control", beforeCost: 15000, afterCost: 12000, savings: 3000, percentage: 20.0 },
  ]

  // 10. Environmental Impact Data
  const environmentalData = [
    { month: "Jan", co2Emissions: 450, wasteGenerated: 28, recycled: 22, energyUsed: 47.53 },
    { month: "Feb", co2Emissions: 420, wasteGenerated: 26, recycled: 21, energyUsed: 44.2 },
    { month: "Mar", co2Emissions: 380, wasteGenerated: 24, recycled: 20, energyUsed: 40.8 },
    { month: "Apr", co2Emissions: 350, wasteGenerated: 22, recycled: 19, energyUsed: 37.5 },
    { month: "May", co2Emissions: 320, wasteGenerated: 20, recycled: 18, energyUsed: 34.1 },
    { month: "Jun", co2Emissions: 290, wasteGenerated: 18, recycled: 16, energyUsed: 25.59 },
  ]

  // 11. Automation Impact Analysis
  const automationData = [
    { process: "Material Feeding", manual: 25, automated: 75, reliability: 94, savings: 18000 },
    { process: "Temperature Control", manual: 15, automated: 85, reliability: 96, savings: 22000 },
    { process: "Quality Inspection", manual: 40, automated: 60, reliability: 88, savings: 15000 },
    { process: "Mold Handling", manual: 30, automated: 70, reliability: 92, savings: 20000 },
    { process: "Finishing Operations", manual: 50, automated: 50, reliability: 85, savings: 12000 },
  ]

  // 12. Predictive Maintenance Data
  const maintenanceData = [
    { equipment: "Melting Furnace", health: 88, nextMaintenance: 15, riskLevel: "Low", vibration: 2.3, cost: 12000 },
    { equipment: "Casting Machine", health: 92, nextMaintenance: 22, riskLevel: "Low", vibration: 1.8, cost: 8500 },
    { equipment: "Cooling System", health: 75, nextMaintenance: 8, riskLevel: "Medium", vibration: 3.2, cost: 6000 },
    { equipment: "Conveyor Belt", health: 85, nextMaintenance: 12, riskLevel: "Low", vibration: 2.1, cost: 4500 },
    { equipment: "Quality Scanner", health: 95, nextMaintenance: 28, riskLevel: "Low", vibration: 1.2, cost: 3000 },
  ]

  const summaryData = [
    {
      title: "Process Name",
      value: formData.processName,
      isCurrency: false,
      colors: "from-purple-600 via-purple-500 to-indigo-500",
      icon: <FaIndustry className="text-2xl" />,
      bgPattern: "bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20",
    },
    {
      title: "Without Zauvijek",
      value: formData.withoutZauvijek,
      isCurrency: true,
      colors: "from-red-600 via-red-500 to-orange-500",
      icon: <FaRupeeSign className="text-2xl" />,
      bgPattern: "bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20",
    },
    {
      title: "With Zauvijek",
      value: formData.withZauvijek,
      isCurrency: true,
      colors: "from-emerald-600 via-emerald-500 to-teal-500",
      icon: <FaRupeeSign className="text-2xl" />,
      bgPattern: "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
    },
    {
      title: "Avg. Cost Reduction",
      value: formData.costReduction,
      suffix: "%",
      isCurrency: false,
      decimals: 2,
      colors: "from-pink-600 via-pink-500 to-rose-500",
      icon: <FaChartLine className="text-2xl" />,
      bgPattern: "bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
    },
    {
      title: "Electricity Saved",
      value: formData.energySaved,
      suffix: " kWh",
      isCurrency: false,
      decimals: 2,
      colors: "from-green-600 via-green-500 to-lime-500",
      icon: <FaBolt className="text-2xl" />,
      bgPattern: "bg-gradient-to-br from-green-50 to-lime-50 dark:from-green-900/20 dark:to-lime-900/20",
    },
    {
      title: "Total Saving (Per Day)",
      value: formData.dailySaving,
      isCurrency: true,
      decimals: 2,
      colors: "from-amber-600 via-amber-500 to-yellow-500",
      icon: <MdSavings className="text-2xl" />,
      bgPattern: "bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20",
    },
    {
      title: "Monthly Saving",
      value: formData.monthlySaving,
      isCurrency: true,
      colors: "from-blue-600 via-blue-500 to-cyan-500",
      icon: <MdCalendarToday className="text-2xl" />,
      bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    },
    {
      title: "Yearly Saving",
      value: formData.yearlySaving,
      isCurrency: true,
      colors: "from-violet-600 via-violet-500 to-purple-500",
      icon: <MdCalendarToday className="text-2xl" />,
      bgPattern: "bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20",
    },
  ]

  const monthlyTrendData = [
    {
      name: "Jan",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Average: averageElectricity,
    },
    {
      name: "Feb",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Average: averageElectricity,
    },
    {
      name: "Mar",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Average: averageElectricity,
    },
    {
      name: "Apr",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Average: averageElectricity,
    },
    {
      name: "May",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Average: averageElectricity,
    },
    {
      name: "Jun",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Average: averageElectricity,
    },
    {
      name: "Jul",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Average: averageElectricity,
    },
    {
      name: "Aug",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Average: averageElectricity,
    },
    {
      name: "Sep",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Average: averageElectricity,
    },
    {
      name: "Oct",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Average: averageElectricity,
    },
    {
      name: "Nov",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Average: averageElectricity,
    },
    {
      name: "Dec",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
      Average: averageElectricity,
    },
  ]

  const pieChartData = [
    { name: "Before Zauvijek", value: formData.energyBefore },
    { name: "With Zauvijek", value: formData.energyWithZauvijek },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6 mb-5 transition-all duration-500">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Enhanced Alert Popup */}
        <AlertPopup
          isOpen={alertState.isOpen}
          onClose={() => setAlertState({ ...alertState, isOpen: false })}
          type={alertState.type}
          title={alertState.title}
          message={alertState.message}
        />

        {/* Enhanced Header */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl shadow-lg">
                <FaHammer className="text-2xl text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Enhanced Rough Casting Analytics
                </h1>
                <p className="text-gray-300 mt-1">
                  Comprehensive performance metrics with 20+ advanced visualizations and smart alerts
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {summaryData.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-700/50 backdrop-blur-sm"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${item.colors} opacity-90`}></div>

              {/* Content */}
              <div className="relative p-6 text-white">
                <div className="flex items-start justify-between">
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
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>

                {/* Animated Progress Bar */}
                <div className="mt-4 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-white/60 rounded-full transition-all duration-2000 ease-out"
                    style={{
                      width: `${Math.min((typeof item.value === "number" ? item.value / 100000 : 0) * 100, 100)}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
            </div>
          ))}
        </div>

        {/* Data Input Form */}
        <Card className="mb-8 bg-gray-800/80 border-gray-700/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-white flex items-center gap-2">
              <FaCog className="text-orange-500" />
              Rough Casting Process Configuration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="processName" className="text-gray-300">
                  Process Name
                </Label>
                <Input
                  id="processName"
                  value={formData.processName}
                  onChange={(e) => handleInputChange("processName", e.target.value)}
                  className="bg-gray-900/80 border-gray-600 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="withoutZauvijek" className="text-gray-300">
                  Cost Without Zauvijek (₹)
                </Label>
                <Input
                  id="withoutZauvijek"
                  type="number"
                  step="0.01"
                  value={formData.withoutZauvijek}
                  onChange={(e) => handleInputChange("withoutZauvijek", e.target.value)}
                  className="bg-gray-900/80 border-gray-600 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="withZauvijek" className="text-gray-300">
                  Cost With Zauvijek (₹)
                </Label>
                <Input
                  id="withZauvijek"
                  type="number"
                  step="0.01"
                  value={formData.withZauvijek}
                  onChange={(e) => handleInputChange("withZauvijek", e.target.value)}
                  className="bg-gray-900/80 border-gray-600 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="energyBefore" className="text-gray-300">
                  Energy Before Zauvijek (kWh)
                </Label>
                <Input
                  id="energyBefore"
                  type="number"
                  step="0.01"
                  value={formData.energyBefore}
                  onChange={(e) => handleInputChange("energyBefore", e.target.value)}
                  className="bg-gray-900/80 border-gray-600 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="energyWithZauvijek" className="text-gray-300">
                  Energy With Zauvijek (kWh)
                </Label>
                <Input
                  id="energyWithZauvijek"
                  type="number"
                  step="0.01"
                  value={formData.energyWithZauvijek}
                  onChange={(e) => handleInputChange("energyWithZauvijek", e.target.value)}
                  className="bg-gray-900/80 border-gray-600 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="productionRate" className="text-gray-300">
                  Production Rate (%)
                </Label>
                <Input
                  id="productionRate"
                  type="number"
                  step="1"
                  value={formData.productionRate}
                  onChange={(e) => handleInputChange("productionRate", e.target.value)}
                  className="bg-gray-900/80 border-gray-600 text-white"
                />
              </div>
            </div>

            <Separator className="my-6 bg-gray-600" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg border border-green-500/30">
                <div className="text-sm text-green-300">Monthly Saving</div>
                <div className="text-lg font-bold text-green-400">₹{formData.monthlySaving.toLocaleString()}</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg border border-blue-500/30">
                <div className="text-sm text-blue-300">Yearly Saving</div>
                <div className="text-lg font-bold text-blue-400">₹{formData.yearlySaving.toLocaleString()}</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg border border-purple-500/30">
                <div className="text-sm text-purple-300">Average Electricity</div>
                <div className="text-lg font-bold text-purple-400">{averageElectricity.toFixed(2)} kWh</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Enhanced Charts Grid - 20+ CHARTS TOTAL */}
        <div className="space-y-8">
          {/* Row 1: Main Performance Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
            {/* Chart 1: Monthly Performance Trends */}
            <div className="lg:col-span-5 bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                  <MdTrendingUp className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  🔥 Monthly Performance Trends - Rough Casting Process
                </h2>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={monthlyTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <defs>
                    <linearGradient id="manualGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF6B6B" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#FF8E53" stopOpacity={0.6} />
                    </linearGradient>
                    <linearGradient id="zauvijekGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4ECDC4" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#44A08D" stopOpacity={0.6} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.5} />
                  <XAxis dataKey="name" stroke="#D1D5DB" fontSize={12} />
                  <YAxis stroke="#D1D5DB" fontSize={12} tickFormatter={(value) => `₹${value}`} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(17, 24, 39, 0.95)",
                      border: "none",
                      borderRadius: "12px",
                      color: "#ffffff",
                    }}
                    formatter={(value, name) => [`₹${Number(value).toLocaleString()}`, name]}
                  />
                  <Legend />
                  <Bar dataKey="Manual" fill="url(#manualGradient)" name="🔧 Manual Process" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Zauvijek" fill="url(#zauvijekGradient)" name="🚀 With Zauvijek" radius={[4, 4, 0, 0]} />
                  <Line
                    type="monotone"
                    dataKey="Saving"
                    stroke="#FFEAA7"
                    strokeWidth={3}
                    name="💰 Daily Savings"
                    dot={{ fill: "#FFEAA7", strokeWidth: 2, r: 5 }}
                    activeDot={{ r: 7, stroke: "#FFEAA7", strokeWidth: 2 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="Average"
                    stroke="#FF6B35"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="📊 Average Line"
                    dot={false}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* Chart 2: Energy Comparison Pie Chart */}
            <div className="lg:col-span-2 bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
                  <FaBolt className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  ⚡ Energy Consumption (kWh)
                </h2>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={pieChartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={({ name, value, percent }) => `${name}: ${value} kWh (${(percent * 100).toFixed(1)}%)`}
                    labelLine={false}
                  >
                    {pieChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(17, 24, 39, 0.95)",
                      border: "none",
                      borderRadius: "12px",
                      color: "#ffffff",
                    }}
                    formatter={(value) => [`${value} kWh`, "Energy Consumption"]}
                  />
                </PieChart>
              </ResponsiveContainer>

              <div className="mt-4 p-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-lg border border-green-500/30">
                <div className="text-center">
                  <div className="text-sm text-green-300 mb-1">Energy Saved Daily</div>
                  <div className="text-2xl font-bold text-green-400">{formData.energySaved.toFixed(2)} kWh</div>
                  <div className="text-xs text-green-500 mt-1">
                    {formData.costReduction.toFixed(2)}% reduction in energy consumption
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Surface Quality and Material Properties */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart 3: Surface Quality Analysis */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                  <FaMicroscope className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  🔬 Surface Quality Analysis
                </h2>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <ComposedChart data={surfaceQualityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.5} />
                  <XAxis dataKey="parameter" stroke="#D1D5DB" fontSize={10} angle={-30} textAnchor="end" height={80} />
                  <YAxis stroke="#D1D5DB" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(17, 24, 39, 0.95)",
                      border: "none",
                      borderRadius: "12px",
                      color: "#ffffff",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="before" fill="#FF6B6B" name="🔴 Before Zauvijek" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="after" fill="#4ECDC4" name="🟢 After Zauvijek" radius={[4, 4, 0, 0]} />
                  <Line
                    type="monotone"
                    dataKey="improvement"
                    stroke="#FFEAA7"
                    strokeWidth={3}
                    name="📈 Improvement %"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* Chart 4: Material Properties Analysis */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg">
                  <FaAtom className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  ⚛️ Material Properties Analysis
                </h2>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={materialPropertiesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.5} />
                  <XAxis dataKey="property" stroke="#D1D5DB" fontSize={10} angle={-30} textAnchor="end" height={80} />
                  <YAxis stroke="#D1D5DB" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(17, 24, 39, 0.95)",
                      border: "none",
                      borderRadius: "12px",
                      color: "#ffffff",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="value" name="📊 Current Value" radius={[4, 4, 0, 0]}>
                    {materialPropertiesData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          entry.status === "Excellent" ? "#4ECDC4" : entry.status === "Good" ? "#96CEB4" : "#FFEAA7"
                        }
                      />
                    ))}
                  </Bar>
                  <Line
                    type="monotone"
                    dataKey="target"
                    stroke="#FF6B6B"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="🎯 Target"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Row 3: Defect Analysis and Temperature Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart 5: Casting Defect Analysis */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg">
                  <FaExclamationTriangle className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  ⚠️ Casting Defect Analysis
                </h2>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <ComposedChart data={defectAnalysisData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.5} />
                  <XAxis dataKey="defectType" stroke="#D1D5DB" fontSize={10} angle={-30} textAnchor="end" height={80} />
                  <YAxis stroke="#D1D5DB" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(17, 24, 39, 0.95)",
                      border: "none",
                      borderRadius: "12px",
                      color: "#ffffff",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="beforeCount" fill="#FF6B6B" name="🔴 Before Count" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="afterCount" fill="#4ECDC4" name="🟢 After Count" radius={[4, 4, 0, 0]} />
                  <Line type="monotone" dataKey="costImpact" stroke="#FFEAA7" strokeWidth={3} name="💰 Cost Impact" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* Chart 6: Temperature Profile Analysis */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                  <FaThermometerHalf className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  🌡️ Temperature Profile Analysis
                </h2>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={temperatureProfileData}>
                  <defs>
                    <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF6B6B" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#FF8E53" stopOpacity={0.3} />
                    </linearGradient>
                    <linearGradient id="optimalGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4ECDC4" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#44A08D" stopOpacity={0.3} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.5} />
                  <XAxis dataKey="stage" stroke="#D1D5DB" fontSize={12} />
                  <YAxis stroke="#D1D5DB" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(17, 24, 39, 0.95)",
                      border: "none",
                      borderRadius: "12px",
                      color: "#ffffff",
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="temperature"
                    stroke="#FF6B6B"
                    fill="url(#tempGradient)"
                    strokeWidth={3}
                    name="🔥 Actual Temp (°C)"
                  />
                  <Area
                    type="monotone"
                    dataKey="optimalTemp"
                    stroke="#4ECDC4"
                    fill="url(#optimalGradient)"
                    strokeWidth={2}
                    name="🎯 Optimal Temp (°C)"
                  />
                  <Line type="monotone" dataKey="efficiency" stroke="#FFEAA7" strokeWidth={2} name="⚡ Efficiency %" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Row 4: Production Efficiency and Mold Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart 7: Production Efficiency Timeline */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                  <MdTimeline className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  📈 Production Efficiency Timeline
                </h2>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={efficiencyTimelineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.5} />
                  <XAxis dataKey="hour" stroke="#D1D5DB" fontSize={12} />
                  <YAxis stroke="#D1D5DB" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(17, 24, 39, 0.95)",
                      border: "none",
                      borderRadius: "12px",
                      color: "#ffffff",
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="efficiency" stroke="#4ECDC4" strokeWidth={3} name="⚡ Efficiency %" />
                  <Line type="monotone" dataKey="throughput" stroke="#96CEB4" strokeWidth={3} name="📦 Throughput" />
                  <Line type="monotone" dataKey="quality" stroke="#FFEAA7" strokeWidth={2} name="✅ Quality %" />
                  <Line type="monotone" dataKey="defectRate" stroke="#FF6B6B" strokeWidth={2} name="🔴 Defect Rate %" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Chart 8: Mold Performance Metrics */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                  <FaWeight className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  🏗️ Mold Performance Metrics
                </h2>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <ScatterChart data={moldPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.5} />
                  <XAxis dataKey="cycles" stroke="#D1D5DB" fontSize={12} name="Cycles" />
                  <YAxis dataKey="efficiency" stroke="#D1D5DB" fontSize={12} name="Efficiency %" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(17, 24, 39, 0.95)",
                      border: "none",
                      borderRadius: "12px",
                      color: "#ffffff",
                    }}
                    formatter={(value, name) => [value, name]}
                    labelFormatter={(label) => `Mold: ${label}`}
                  />
                  <Scatter name="Mold Performance" fill="#4ECDC4" />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Row 5: Energy Breakdown and Quality Radar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart 9: Energy Consumption Breakdown */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg">
                  <FaBolt className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                  ⚡ Energy Consumption Breakdown
                </h2>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={energyBreakdownData}
                    dataKey="consumption"
                    nameKey="component"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    label={({ component, percentage }) => `${component}: ${percentage}%`}
                    labelLine={false}
                  >
                    {energyBreakdownData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(17, 24, 39, 0.95)",
                      border: "none",
                      borderRadius: "12px",
                      color: "#ffffff",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Chart 10: Quality Control Radar */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                  <FaShieldAlt className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  🎯 Quality Control Radar
                </h2>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <RadarChart data={qualityRadarData}>
                  <PolarGrid stroke="#374151" />
                  <PolarAngleAxis dataKey="metric" tick={{ fontSize: 11, fill: "#D1D5DB" }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10, fill: "#D1D5DB" }} />
                  <Radar
                    name="Current Performance"
                    dataKey="current"
                    stroke="#4ECDC4"
                    fill="#4ECDC4"
                    fillOpacity={0.3}
                    strokeWidth={3}
                  />
                  <Radar
                    name="Target"
                    dataKey="target"
                    stroke="#FFEAA7"
                    fill="#FFEAA7"
                    fillOpacity={0.2}
                    strokeWidth={2}
                    strokeDasharray="5 5"
                  />
                  <Radar
                    name="Previous Period"
                    dataKey="previous"
                    stroke="#FF6B6B"
                    fill="#FF6B6B"
                    fillOpacity={0.1}
                    strokeWidth={2}
                  />
                  <Legend />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(17, 24, 39, 0.95)",
                      border: "none",
                      borderRadius: "12px",
                      color: "#ffffff",
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Row 6: Cost Analysis and Environmental Impact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart 11: Cost Analysis Breakdown */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg">
                  <MdBusiness className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  💰 Cost Analysis Breakdown
                </h2>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <ComposedChart data={costAnalysisData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.5} />
                  <XAxis dataKey="category" stroke="#D1D5DB" fontSize={11} angle={-30} textAnchor="end" height={80} />
                  <YAxis stroke="#D1D5DB" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(17, 24, 39, 0.95)",
                      border: "none",
                      borderRadius: "12px",
                      color: "#ffffff",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="beforeCost" fill="#FF6B6B" name="🔴 Before Cost" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="afterCost" fill="#4ECDC4" name="🟢 After Cost" radius={[4, 4, 0, 0]} />
                  <Line type="monotone" dataKey="savings" stroke="#FFEAA7" strokeWidth={3} name="💰 Savings" />
                  <Line type="monotone" dataKey="percentage" stroke="#96CEB4" strokeWidth={2} name="📊 Savings %" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* Chart 12: Environmental Impact Tracking */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-green-500 to-lime-500 rounded-lg">
                  <FaLeaf className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-green-600 to-lime-600 bg-clip-text text-transparent">
                  🌱 Environmental Impact Tracking
                </h2>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={environmentalData}>
                  <defs>
                    <linearGradient id="co2Gradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF6B6B" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#FF8E53" stopOpacity={0.3} />
                    </linearGradient>
                    <linearGradient id="wasteGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#96CEB4" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#52C41A" stopOpacity={0.3} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.5} />
                  <XAxis dataKey="month" stroke="#D1D5DB" fontSize={12} />
                  <YAxis stroke="#D1D5DB" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(17, 24, 39, 0.95)",
                      border: "none",
                      borderRadius: "12px",
                      color: "#ffffff",
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="co2Emissions"
                    stroke="#FF6B6B"
                    fill="url(#co2Gradient)"
                    name="🏭 CO₂ Emissions (kg)"
                  />
                  <Area
                    type="monotone"
                    dataKey="wasteGenerated"
                    stroke="#96CEB4"
                    fill="url(#wasteGradient)"
                    name="🗑️ Waste Generated (kg)"
                  />
                  <Line type="monotone" dataKey="recycled" stroke="#4ECDC4" strokeWidth={3} name="♻️ Recycled (kg)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Row 7: Automation and Maintenance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart 13: Automation Impact Analysis */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                  <FaRobot className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  🤖 Automation Impact Analysis
                </h2>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={automationData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.5} />
                  <XAxis type="number" stroke="#D1D5DB" fontSize={12} />
                  <YAxis dataKey="process" type="category" stroke="#D1D5DB" fontSize={10} width={120} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(17, 24, 39, 0.95)",
                      border: "none",
                      borderRadius: "12px",
                      color: "#ffffff",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="manual" stackId="a" fill="#FF6B6B" name="👤 Manual %" />
                  <Bar dataKey="automated" stackId="a" fill="#4ECDC4" name="🤖 Automated %" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Chart 14: Predictive Maintenance Analytics */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                  <FaTools className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  🔧 Predictive Maintenance Analytics
                </h2>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <ComposedChart data={maintenanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.5} />
                  <XAxis dataKey="equipment" stroke="#D1D5DB" fontSize={10} angle={-30} textAnchor="end" height={80} />
                  <YAxis stroke="#D1D5DB" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(17, 24, 39, 0.95)",
                      border: "none",
                      borderRadius: "12px",
                      color: "#ffffff",
                    }}
                  />
                  <Legend />
                  <Bar dataKey="health" fill="#96CEB4" name="🏥 Health Score" radius={[4, 4, 0, 0]} />
                  <Line
                    type="monotone"
                    dataKey="nextMaintenance"
                    stroke="#FF6B6B"
                    strokeWidth={3}
                    name="📅 Days to Maintenance"
                  />
                  <Line
                    type="monotone"
                    dataKey="vibration"
                    stroke="#FFEAA7"
                    strokeWidth={2}
                    name="📳 Vibration Level"
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Row 8: Performance Gauges */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Gauge Charts */}
            {[
              { title: "Overall Efficiency", value: 94, color: "#4ECDC4", icon: "⚡" },
              { title: "Quality Score", value: 92, color: "#96CEB4", icon: "✅" },
              { title: "Safety Rating", value: 96, color: "#FFEAA7", icon: "🛡️" },
              { title: "Cost Efficiency", value: formData.costReduction, color: "#FF6B6B", icon: "💰" },
            ].map((gauge, index) => (
              <div
                key={index}
                className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{gauge.icon}</span>
                  <h3 className="text-lg font-bold text-white">{gauge.title}</h3>
                </div>
                <div className="flex flex-col items-center">
                  <div className="relative w-32 h-32">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" stroke="#374151" strokeWidth="8" fill="none" />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke={gauge.color}
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${gauge.value * 2.51} 251`}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold" style={{ color: gauge.color }}>
                          {gauge.value.toFixed(1)}%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 9: Summary Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cost Savings Summary */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                  <MdSavings className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  💰 Cost Savings Summary
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg border border-blue-500/30">
                  <span className="text-blue-300 flex items-center gap-2">
                    <FaClock className="text-sm" />
                    Daily Savings
                  </span>
                  <span className="font-bold text-blue-400">₹{formData.dailySaving.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg border border-indigo-500/30">
                  <span className="text-indigo-300 flex items-center gap-2">
                    <MdCalendarToday className="text-sm" />
                    Monthly Savings
                  </span>
                  <span className="font-bold text-indigo-400">₹{formData.monthlySaving.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-teal-600/20 to-emerald-600/20 rounded-lg border border-teal-500/30">
                  <span className="text-teal-300 flex items-center gap-2">
                    <MdTrendingUp className="text-sm" />
                    Yearly Savings
                  </span>
                  <span className="font-bold text-teal-400">₹{formData.yearlySaving.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Process Efficiency Summary */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <MdSpeed className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  📈 Process Efficiency Summary
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-rose-600/20 to-pink-600/20 rounded-lg border border-rose-500/30">
                  <span className="text-rose-300 flex items-center gap-2">
                    <FaChartLine className="text-sm" />
                    Cost Reduction
                  </span>
                  <span className="font-bold text-rose-400">{formData.costReduction.toFixed(2)}%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-emerald-600/20 to-green-600/20 rounded-lg border border-emerald-500/30">
                  <span className="text-emerald-300 flex items-center gap-2">
                    <FaBolt className="text-sm" />
                    Energy Efficiency
                  </span>
                  <span className="font-bold text-emerald-400">{formData.costReduction.toFixed(2)}%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gradient-to-r from-yellow-600/20 to-amber-600/20 rounded-lg border border-yellow-500/30">
                  <span className="text-yellow-300 flex items-center gap-2">
                    <FaHardHat className="text-sm" />
                    Production Rate
                  </span>
                  <span className="font-bold text-yellow-400">{formData.productionRate}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
