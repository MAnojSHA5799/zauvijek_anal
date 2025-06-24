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
} from "recharts"
import {
  FaIndustry,
  FaRupeeSign,
  FaChartLine,
  FaBolt,
  FaThermometerHalf,
  FaFire,
  FaWater,
  FaCog,
  FaShieldAlt,
  FaTools,
  FaRobot,
  FaLeaf,
  FaTachometerAlt,
  FaFlask,
  FaWeight,
  FaClock,
  FaExclamationTriangle,
} from "react-icons/fa"
import {
  MdSavings,
  MdCalendarToday,
  MdTrendingUp,
  MdSpeed,
  MdAnalytics,
  MdPrecisionManufacturing,
  MdSecurity,
} from "react-icons/md"
import CountUp from "react-countup"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

// Enhanced color palette with gradients
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

interface PouringData {
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

export default function EnhancedPouringCharts() {
  const [formData, setFormData] = useState<PouringData>({
    processName: "Pouring",
    withoutZauvijek: 1137.5,
    withZauvijek: 731.25,
    dailySaving: 406.25,
    monthlySaving: 12187.5,
    yearlySaving: 148281.25,
    costReduction: 35.71,
    energyBefore: 102.38,
    energyWithZauvijek: 65.81,
    energySaved: 36.56,
  })

  // Force dark mode
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  const handleInputChange = (field: keyof PouringData, value: string) => {
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

  // NEW ENHANCED DATA SETS FOR ADDITIONAL CHARTS

  // 1. Temperature Control Analytics
  const temperatureData = [
    { time: "00:00", pouringTemp: 1650, ambientTemp: 25, optimalTemp: 1600, efficiency: 92, heatLoss: 50 },
    { time: "04:00", pouringTemp: 1680, ambientTemp: 28, optimalTemp: 1600, efficiency: 89, heatLoss: 80 },
    { time: "08:00", pouringTemp: 1720, ambientTemp: 32, optimalTemp: 1600, efficiency: 85, heatLoss: 120 },
    { time: "12:00", pouringTemp: 1750, ambientTemp: 35, optimalTemp: 1600, efficiency: 82, heatLoss: 150 },
    { time: "16:00", pouringTemp: 1700, ambientTemp: 33, optimalTemp: 1600, efficiency: 87, heatLoss: 100 },
    { time: "20:00", pouringTemp: 1670, ambientTemp: 29, optimalTemp: 1600, efficiency: 90, heatLoss: 70 },
  ]

  // 2. Metal Flow Rate Analysis
  const flowRateData = [
    { batch: "Batch 1", flowRate: 45.2, pressure: 2.8, viscosity: 1.2, quality: 98, defects: 2 },
    { batch: "Batch 2", flowRate: 48.5, pressure: 3.1, viscosity: 1.1, quality: 96, defects: 4 },
    { batch: "Batch 3", flowRate: 42.8, pressure: 2.6, viscosity: 1.3, quality: 99, defects: 1 },
    { batch: "Batch 4", flowRate: 46.9, pressure: 2.9, viscosity: 1.15, quality: 97, defects: 3 },
    { batch: "Batch 5", flowRate: 44.1, pressure: 2.7, viscosity: 1.25, quality: 98, defects: 2 },
    { batch: "Batch 6", flowRate: 47.3, pressure: 3.0, viscosity: 1.08, quality: 95, defects: 5 },
  ]

  // 3. Mold Performance Metrics
  const moldPerformanceData = [
    { moldId: "Mold A", cycles: 150, efficiency: 94, temperature: 200, lifespan: 85, maintenance: 15 },
    { moldId: "Mold B", cycles: 180, efficiency: 91, temperature: 220, lifespan: 78, maintenance: 22 },
    { moldId: "Mold C", cycles: 165, efficiency: 96, temperature: 190, lifespan: 92, maintenance: 8 },
    { moldId: "Mold D", cycles: 140, efficiency: 89, temperature: 230, lifespan: 75, maintenance: 25 },
    { moldId: "Mold E", cycles: 175, efficiency: 93, temperature: 210, lifespan: 88, maintenance: 12 },
  ]

  // 4. Quality Control Radar Data
  const qualityRadarData = [
    { metric: "Surface Finish", current: 92, target: 95, previous: 88 },
    { metric: "Dimensional Accuracy", current: 96, target: 98, previous: 94 },
    { metric: "Material Density", current: 89, target: 90, previous: 85 },
    { metric: "Porosity Control", current: 94, target: 96, previous: 91 },
    { metric: "Cooling Rate", current: 87, target: 90, previous: 83 },
    { metric: "Shrinkage Control", current: 91, target: 93, previous: 89 },
  ]

  // 5. Energy Consumption Breakdown
  const energyBreakdownData = [
    { component: "Furnace Heating", consumption: 45.2, percentage: 44.1, efficiency: 88, cost: 2250 },
    { component: "Ladle Systems", consumption: 18.5, percentage: 18.1, efficiency: 92, cost: 925 },
    { component: "Pouring Equipment", consumption: 15.8, percentage: 15.4, efficiency: 85, cost: 790 },
    { component: "Cooling Systems", consumption: 12.3, percentage: 12.0, efficiency: 78, cost: 615 },
    { component: "Control Systems", consumption: 6.8, percentage: 6.6, efficiency: 95, cost: 340 },
    { component: "Ventilation", consumption: 3.8, percentage: 3.7, efficiency: 82, cost: 190 },
  ]

  // 6. Defect Analysis Data
  const defectAnalysisData = [
    { defectType: "Cold Shuts", count: 12, severity: "High", cost: 1200, prevention: 85 },
    { defectType: "Porosity", count: 8, severity: "Medium", cost: 600, prevention: 78 },
    { defectType: "Inclusions", count: 15, severity: "Medium", cost: 900, prevention: 82 },
    { defectType: "Misruns", count: 6, severity: "High", cost: 800, prevention: 90 },
    { defectType: "Hot Tears", count: 4, severity: "High", cost: 500, prevention: 88 },
    { defectType: "Surface Defects", count: 20, severity: "Low", cost: 300, prevention: 75 },
  ]

  // 7. Process Automation Levels
  const automationData = [
    { process: "Temperature Control", manual: 15, automated: 85, reliability: 96, savings: 25000 },
    { process: "Flow Rate Control", manual: 25, automated: 75, reliability: 92, savings: 18000 },
    { process: "Quality Inspection", manual: 40, automated: 60, reliability: 88, savings: 15000 },
    { process: "Mold Handling", manual: 35, automated: 65, reliability: 90, savings: 20000 },
    { process: "Material Feeding", manual: 20, automated: 80, reliability: 94, savings: 22000 },
  ]

  // 8. Predictive Maintenance Data
  const maintenanceData = [
    { equipment: "Furnace", health: 88, nextMaintenance: 12, riskLevel: "Low", vibration: 2.1, cost: 15000 },
    { equipment: "Ladle", health: 75, nextMaintenance: 5, riskLevel: "Medium", vibration: 3.8, cost: 8000 },
    { equipment: "Pouring System", health: 92, nextMaintenance: 18, riskLevel: "Low", vibration: 1.9, cost: 12000 },
    { equipment: "Cooling Unit", health: 82, nextMaintenance: 8, riskLevel: "Medium", vibration: 2.9, cost: 6000 },
    { equipment: "Conveyor", health: 95, nextMaintenance: 25, riskLevel: "Low", vibration: 1.5, cost: 4000 },
  ]

  // 9. Environmental Impact Data
  const environmentalData = [
    { month: "Jan", co2Emissions: 850, energyUsed: 102.38, wasteGenerated: 45, recycled: 38 },
    { month: "Feb", co2Emissions: 780, energyUsed: 95.2, wasteGenerated: 42, recycled: 36 },
    { month: "Mar", co2Emissions: 720, energyUsed: 88.5, wasteGenerated: 38, recycled: 34 },
    { month: "Apr", co2Emissions: 680, energyUsed: 82.1, wasteGenerated: 35, recycled: 32 },
    { month: "May", co2Emissions: 650, energyUsed: 78.9, wasteGenerated: 32, recycled: 30 },
    { month: "Jun", co2Emissions: 620, energyUsed: 65.81, wasteGenerated: 28, recycled: 26 },
  ]

  // 10. Real-time Process Monitoring
  const realTimeData = [
    { hour: "08:00", throughput: 85, efficiency: 92, temperature: 1650, pressure: 2.8, quality: 98 },
    { hour: "10:00", throughput: 88, efficiency: 94, temperature: 1680, pressure: 2.9, quality: 97 },
    { hour: "12:00", throughput: 82, efficiency: 89, temperature: 1720, pressure: 3.1, quality: 96 },
    { hour: "14:00", throughput: 90, efficiency: 96, temperature: 1700, pressure: 3.0, quality: 98 },
    { hour: "16:00", throughput: 87, efficiency: 93, temperature: 1670, pressure: 2.8, quality: 97 },
    { hour: "18:00", throughput: 85, efficiency: 91, temperature: 1650, pressure: 2.7, quality: 98 },
  ]

  // 11. Cost-Benefit Analysis Over Time
  const costBenefitData = [
    { period: "Month 1", investment: 50000, savings: 12187, roi: -75.6, cumulative: -37813 },
    { period: "Month 2", investment: 0, savings: 12187, roi: 24.4, cumulative: -25626 },
    { period: "Month 3", investment: 0, savings: 12187, roi: 24.4, cumulative: -13439 },
    { period: "Month 4", investment: 0, savings: 12187, roi: 24.4, cumulative: -1252 },
    { period: "Month 5", investment: 0, savings: 12187, roi: 24.4, cumulative: 10935 },
    { period: "Month 6", investment: 0, savings: 12187, roi: 24.4, cumulative: 23122 },
  ]

  // 12. Safety Metrics
  const safetyData = [
    { category: "Temperature Hazards", incidents: 2, severity: "Medium", prevention: 88, training: 95 },
    { category: "Chemical Exposure", incidents: 1, severity: "Low", prevention: 92, training: 98 },
    { category: "Equipment Safety", incidents: 0, severity: "None", prevention: 96, training: 94 },
    { category: "Fire Hazards", incidents: 1, severity: "High", prevention: 85, training: 90 },
    { category: "Ergonomic Issues", incidents: 3, severity: "Low", prevention: 78, training: 85 },
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
    { name: "Jan", Manual: formData.withoutZauvijek, Zauvijek: formData.withZauvijek, Saving: formData.dailySaving },
    { name: "Feb", Manual: formData.withoutZauvijek, Zauvijek: formData.withZauvijek, Saving: formData.dailySaving },
    { name: "Mar", Manual: formData.withoutZauvijek, Zauvijek: formData.withZauvijek, Saving: formData.dailySaving },
    { name: "Apr", Manual: formData.withoutZauvijek, Zauvijek: formData.withZauvijek, Saving: formData.dailySaving },
    { name: "May", Manual: formData.withoutZauvijek, Zauvijek: formData.withZauvijek, Saving: formData.dailySaving },
    { name: "Jun", Manual: formData.withoutZauvijek, Zauvijek: formData.withZauvijek, Saving: formData.dailySaving },
    { name: "Jul", Manual: formData.withoutZauvijek, Zauvijek: formData.withZauvijek, Saving: formData.dailySaving },
    { name: "Aug", Manual: formData.withoutZauvijek, Zauvijek: formData.withZauvijek, Saving: formData.dailySaving },
    { name: "Sep", Manual: formData.withoutZauvijek, Zauvijek: formData.withZauvijek, Saving: formData.dailySaving },
    { name: "Oct", Manual: formData.withoutZauvijek, Zauvijek: formData.withZauvijek, Saving: formData.dailySaving },
    { name: "Nov", Manual: formData.withoutZauvijek, Zauvijek: formData.withZauvijek, Saving: formData.dailySaving },
    { name: "Dec", Manual: formData.withoutZauvijek, Zauvijek: formData.withZauvijek, Saving: formData.dailySaving },
  ]

  const pieChartData = [
    { name: "Before Zauvijek", value: formData.energyBefore },
    { name: "With Zauvijek", value: formData.energyWithZauvijek },
  ]

  // Box plot data - simulating cost distribution across different scenarios
  const costBoxPlotData = [
    {
      category: "Manual Process",
      min: formData.withoutZauvijek * 0.85,
      q1: formData.withoutZauvijek * 0.92,
      median: formData.withoutZauvijek,
      q3: formData.withoutZauvijek * 1.08,
      max: formData.withoutZauvijek * 1.15,
      outliers: [formData.withoutZauvijek * 1.25, formData.withoutZauvijek * 0.75],
    },
    {
      category: "With Zauvijek",
      min: formData.withZauvijek * 0.88,
      q1: formData.withZauvijek * 0.94,
      median: formData.withZauvijek,
      q3: formData.withZauvijek * 1.06,
      max: formData.withZauvijek * 1.12,
      outliers: [formData.withZauvijek * 1.2, formData.withZauvijek * 0.8],
    },
  ]

  // Energy consumption box plot data
  const energyBoxPlotData = [
    {
      category: "Before Zauvijek",
      min: formData.energyBefore * 0.9,
      q1: formData.energyBefore * 0.95,
      median: formData.energyBefore,
      q3: formData.energyBefore * 1.05,
      max: formData.energyBefore * 1.1,
      outliers: [formData.energyBefore * 1.18, formData.energyBefore * 0.82],
    },
    {
      category: "After Zauvijek",
      min: formData.energyWithZauvijek * 0.92,
      q1: formData.energyWithZauvijek * 0.96,
      median: formData.energyWithZauvijek,
      q3: formData.energyWithZauvijek * 1.04,
      max: formData.energyWithZauvijek * 1.08,
      outliers: [formData.energyWithZauvijek * 1.15, formData.energyWithZauvijek * 0.85],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6 mb-5 transition-all duration-500">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-600/10 to-teal-600/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Enhanced Header */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl shadow-lg">
                <FaFire className="text-2xl text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Enhanced Pouring Process Analytics
                </h1>
                <p className="text-gray-300 mt-1">
                  Comprehensive performance metrics and cost analysis with 20+ advanced visualizations
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
              Pouring Process Configuration
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
                <Label className="text-gray-300">Daily Saving (Auto-calculated)</Label>
                <Input
                  value={`₹${formData.dailySaving.toFixed(2)}`}
                  disabled
                  className="bg-gray-700/50 border-gray-600 text-gray-300"
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
                <div className="text-sm text-purple-300">Cost Reduction</div>
                <div className="text-lg font-bold text-purple-400">{formData.costReduction.toFixed(2)}%</div>
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
                  🔥 Monthly Performance Trends - Pouring Process
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

          {/* Row 2: Temperature Control and Flow Rate Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart 3: Temperature Control Analytics */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg">
                  <FaThermometerHalf className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  🌡️ Temperature Control Analytics
                </h2>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={temperatureData}>
                  <defs>
                    <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF6B6B" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#FF8E53" stopOpacity={0.3} />
                    </linearGradient>
                    <linearGradient id="ambientGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4ECDC4" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#44A08D" stopOpacity={0.3} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.5} />
                  <XAxis dataKey="time" stroke="#D1D5DB" fontSize={12} />
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
                    dataKey="pouringTemp"
                    stroke="#FF6B6B"
                    fill="url(#tempGradient)"
                    strokeWidth={3}
                    name="🔥 Pouring Temp (°C)"
                  />
                  <Area
                    type="monotone"
                    dataKey="ambientTemp"
                    stroke="#4ECDC4"
                    fill="url(#ambientGradient)"
                    strokeWidth={2}
                    name="🌡️ Ambient Temp (°C)"
                  />
                  <Line
                    type="monotone"
                    dataKey="optimalTemp"
                    stroke="#FFEAA7"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    name="🎯 Optimal Temp"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Chart 4: Metal Flow Rate Analysis */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                  <FaWater className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  🌊 Metal Flow Rate Analysis
                </h2>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <ComposedChart data={flowRateData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.5} />
                  <XAxis dataKey="batch" stroke="#D1D5DB" fontSize={11} />
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
                  <Bar dataKey="flowRate" fill="#45B7D1" name="🌊 Flow Rate (L/min)" radius={[4, 4, 0, 0]} />
                  <Line type="monotone" dataKey="pressure" stroke="#96CEB4" strokeWidth={3} name="📊 Pressure (bar)" />
                  <Line type="monotone" dataKey="quality" stroke="#FFEAA7" strokeWidth={2} name="✅ Quality %" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Row 3: Mold Performance and Quality Radar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart 5: Mold Performance Metrics */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg">
                  <FaWeight className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  🏗️ Mold Performance Metrics
                </h2>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={moldPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.5} />
                  <XAxis dataKey="moldId" stroke="#D1D5DB" fontSize={11} />
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
                  <Bar dataKey="cycles" fill="#DDA0DD" name="🔄 Cycles" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="efficiency" fill="#98D8C8" name="⚡ Efficiency %" radius={[4, 4, 0, 0]} />
                  <Line type="monotone" dataKey="lifespan" stroke="#F7DC6F" strokeWidth={3} name="📅 Lifespan %" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Chart 6: Quality Control Radar */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                  <FaShieldAlt className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
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

          {/* Row 4: Energy Breakdown and Defect Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart 7: Energy Consumption Breakdown */}
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

            {/* Chart 8: Defect Analysis */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg">
                  <FaExclamationTriangle className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  ⚠️ Defect Analysis
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
                  <Bar dataKey="count" fill="#FF6B6B" name="🔢 Defect Count" radius={[4, 4, 0, 0]} />
                  <Line type="monotone" dataKey="prevention" stroke="#4ECDC4" strokeWidth={3} name="🛡️ Prevention %" />
                  <Line type="monotone" dataKey="cost" stroke="#FFEAA7" strokeWidth={2} name="💰 Cost Impact" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Row 5: Automation and Maintenance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart 9: Process Automation Levels */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                  <FaRobot className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  🤖 Process Automation Levels
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

            {/* Chart 10: Predictive Maintenance */}
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

          {/* Row 6: Environmental Impact and Real-time Monitoring */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart 11: Environmental Impact */}
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
                    <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#45B7D1" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#2196F3" stopOpacity={0.3} />
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
                    dataKey="energyUsed"
                    stroke="#45B7D1"
                    fill="url(#energyGradient)"
                    name="⚡ Energy Used (kWh)"
                  />
                  <Line type="monotone" dataKey="recycled" stroke="#96CEB4" strokeWidth={3} name="♻️ Recycled %" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Chart 12: Real-time Process Monitoring */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                  <MdPrecisionManufacturing className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  📊 Real-time Process Monitoring
                </h2>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={realTimeData}>
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
                  <Line type="monotone" dataKey="throughput" stroke="#4ECDC4" strokeWidth={3} name="📈 Throughput %" />
                  <Line type="monotone" dataKey="efficiency" stroke="#FFEAA7" strokeWidth={3} name="⚡ Efficiency %" />
                  <Line type="monotone" dataKey="quality" stroke="#96CEB4" strokeWidth={2} name="✅ Quality %" />
                  <Line type="monotone" dataKey="pressure" stroke="#DDA0DD" strokeWidth={2} name="📊 Pressure (bar)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Row 7: Cost-Benefit Analysis and Safety Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart 13: Cost-Benefit Analysis Over Time */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg">
                  <MdAnalytics className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  💹 Cost-Benefit Analysis Over Time
                </h2>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <ComposedChart data={costBenefitData}>
                  <defs>
                    <linearGradient id="roiGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4ECDC4" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#44A08D" stopOpacity={0.3} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.5} />
                  <XAxis dataKey="period" stroke="#D1D5DB" fontSize={12} />
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
                  <Bar dataKey="savings" fill="#96CEB4" name="💰 Monthly Savings" radius={[4, 4, 0, 0]} />
                  <Area
                    type="monotone"
                    dataKey="cumulative"
                    stroke="#4ECDC4"
                    fill="url(#roiGradient)"
                    name="📈 Cumulative Savings"
                  />
                  <Line type="monotone" dataKey="roi" stroke="#FFEAA7" strokeWidth={3} name="📊 ROI %" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* Chart 14: Safety Metrics Dashboard */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg">
                  <MdSecurity className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  🛡️ Safety Metrics Dashboard
                </h2>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <RadarChart data={safetyData}>
                  <PolarGrid stroke="#374151" />
                  <PolarAngleAxis dataKey="category" tick={{ fontSize: 10, fill: "#D1D5DB" }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10, fill: "#D1D5DB" }} />
                  <Radar
                    name="Prevention Score"
                    dataKey="prevention"
                    stroke="#4ECDC4"
                    fill="#4ECDC4"
                    fillOpacity={0.3}
                    strokeWidth={3}
                  />
                  <Radar
                    name="Training Score"
                    dataKey="training"
                    stroke="#FFEAA7"
                    fill="#FFEAA7"
                    fillOpacity={0.2}
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

          {/* Row 8: Box Plot Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Chart 15: Cost Distribution Analysis */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg">
                  <FaTachometerAlt className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                  📊 Cost Distribution Analysis
                </h2>
              </div>
              <div className="space-y-4">
                {costBoxPlotData.map((item, index) => (
                  <div key={index} className="p-4 bg-gray-700/50 rounded-lg border border-gray-600/50">
                    <h3 className="font-semibold text-gray-300 mb-2 flex items-center gap-2">
                      {index === 0 ? "🔧" : "🚀"} {item.category}
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Min:</span>
                        <span className="font-medium text-blue-400">₹{item.min.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Max:</span>
                        <span className="font-medium text-red-400">₹{item.max.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Q1:</span>
                        <span className="font-medium text-cyan-400">₹{item.q1.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Q3:</span>
                        <span className="font-medium text-purple-400">₹{item.q3.toFixed(2)}</span>
                      </div>
                      <div className="col-span-2 flex justify-between">
                        <span className="text-gray-400">Median:</span>
                        <span className="font-bold text-green-400">₹{item.median.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart 16: Energy Distribution Analysis */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
                  <FaFlask className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  ⚡ Energy Distribution Analysis
                </h2>
              </div>
              <div className="space-y-4">
                {energyBoxPlotData.map((item, index) => (
                  <div key={index} className="p-4 bg-gray-700/50 rounded-lg border border-gray-600/50">
                    <h3 className="font-semibold text-gray-300 mb-2 flex items-center gap-2">
                      {index === 0 ? "⚡" : "🔋"} {item.category}
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Min:</span>
                        <span className="font-medium text-blue-400">{item.min.toFixed(2)} kWh</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Max:</span>
                        <span className="font-medium text-red-400">{item.max.toFixed(2)} kWh</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Q1:</span>
                        <span className="font-medium text-cyan-400">{item.q1.toFixed(2)} kWh</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Q3:</span>
                        <span className="font-medium text-purple-400">{item.q3.toFixed(2)} kWh</span>
                      </div>
                      <div className="col-span-2 flex justify-between">
                        <span className="text-gray-400">Median:</span>
                        <span className="font-bold text-green-400">{item.median.toFixed(2)} kWh</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 9: Performance Gauges */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Gauge Charts */}
            {[
              { title: "Overall Efficiency", value: 92, color: "#4ECDC4", icon: "⚡" },
              { title: "Quality Score", value: 96, color: "#96CEB4", icon: "✅" },
              { title: "Safety Rating", value: 88, color: "#FFEAA7", icon: "🛡️" },
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

          {/* Row 10: Summary Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cost Savings Breakdown */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                  <MdSavings className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  💰 Cost Savings Breakdown
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

            {/* Process Efficiency Metrics */}
            <div className="bg-gray-800/80 border-gray-700/50 backdrop-blur-xl p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <MdSpeed className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  📈 Process Efficiency Metrics
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
                    <FaFire className="text-sm" />
                    ROI Impact
                  </span>
                  <span className="font-bold text-yellow-400">High Performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
