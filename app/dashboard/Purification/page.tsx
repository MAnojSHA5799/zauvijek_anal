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
  LineChart,
  BarChart,
} from "recharts"
import {
  FaIndustry,
  FaRupeeSign,
  FaChartLine,
  FaBolt,
  FaThermometerHalf,
  FaWater,
  FaRecycle,
  FaShieldAlt,
  FaCog,
} from "react-icons/fa"
import { MdSavings, MdCalendarToday, MdTrendingUp, MdSpeed } from "react-icons/md"
import CountUp from "react-countup"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

const COLORS = ["#F97316", "#10B981", "#3B82F6", "#F59E0B", "#EF4444", "#8B5CF6", "#06B6D4", "#84CC16"]

interface PurificationData {
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

export default function EnhancedPurificationCharts() {
  const [formData, setFormData] = useState<PurificationData>({
    processName: "Purification",
    withoutZauvijek: 975.0,
    withZauvijek: 568.75,
    dailySaving: 406.25,
    monthlySaving: 12187.5,
    yearlySaving: 148281.25,
    costReduction: 41.67,
    energyBefore: 87.75,
    energyWithZauvijek: 51.19,
    energySaved: 36.56,
  })

  const handleInputChange = (field: keyof PurificationData, value: string) => {
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

  // NEW DATA SETS FOR ADDITIONAL CHARTS

  // Process Temperature Monitoring
  const temperatureData = [
    { time: "00:00", inlet: 85, outlet: 45, optimal: 50, efficiency: 92 },
    { time: "04:00", inlet: 88, outlet: 48, optimal: 50, efficiency: 89 },
    { time: "08:00", inlet: 92, outlet: 52, optimal: 50, efficiency: 85 },
    { time: "12:00", inlet: 95, outlet: 55, optimal: 50, efficiency: 82 },
    { time: "16:00", inlet: 90, outlet: 50, optimal: 50, efficiency: 88 },
    { time: "20:00", inlet: 87, outlet: 47, optimal: 50, efficiency: 91 },
  ]

  // Water Quality Metrics
  const waterQualityData = [
    { parameter: "pH Level", before: 7.8, after: 7.2, target: 7.0, compliance: 95 },
    { parameter: "Turbidity", before: 15.2, after: 2.1, target: 2.0, compliance: 98 },
    { parameter: "TDS", before: 450, after: 180, target: 200, compliance: 92 },
    { parameter: "Chlorine", before: 0.8, after: 0.3, target: 0.5, compliance: 88 },
    { parameter: "Hardness", before: 320, after: 120, target: 150, compliance: 85 },
  ]

  // Chemical Usage Optimization
  const chemicalUsageData = [
    { chemical: "Coagulant", beforeZauvijek: 25.5, withZauvijek: 18.2, savings: 28.6, cost: 1250 },
    { chemical: "Flocculant", beforeZauvijek: 12.8, withZauvijek: 9.1, savings: 28.9, cost: 890 },
    { chemical: "Disinfectant", beforeZauvijek: 8.4, withZauvijek: 6.2, savings: 26.2, cost: 420 },
    { chemical: "pH Adjuster", beforeZauvijek: 15.6, withZauvijek: 11.8, savings: 24.4, cost: 680 },
    { chemical: "Anti-scalant", beforeZauvijek: 6.2, withZauvijek: 4.5, savings: 27.4, cost: 320 },
  ]

  // Filter Performance Analytics
  const filterPerformanceData = [
    { filter: "Pre-Filter", efficiency: 85, lifespan: 180, replacement: 15, pressure: 2.1 },
    { filter: "Carbon Filter", efficiency: 92, lifespan: 240, replacement: 8, pressure: 1.8 },
    { filter: "RO Membrane", efficiency: 98, lifespan: 365, replacement: 2, pressure: 3.2 },
    { filter: "Post-Filter", efficiency: 88, lifespan: 120, replacement: 25, pressure: 1.5 },
    { filter: "UV Chamber", efficiency: 99, lifespan: 450, replacement: 1, pressure: 0.8 },
  ]

  // Energy Consumption Breakdown
  const energyBreakdownData = [
    { component: "Pumps", consumption: 35.2, percentage: 40.1, efficiency: 88 },
    { component: "UV System", consumption: 18.5, percentage: 21.1, efficiency: 92 },
    { component: "Control Panel", consumption: 12.8, percentage: 14.6, efficiency: 85 },
    { component: "Heating", consumption: 15.3, percentage: 17.4, efficiency: 78 },
    { component: "Monitoring", consumption: 5.9, percentage: 6.8, efficiency: 95 },
  ]

  // Waste Management Metrics
  const wasteManagementData = [
    { month: "Jan", wasteGenerated: 125, wasteRecycled: 95, wasteReduced: 30, efficiency: 76 },
    { month: "Feb", wasteGenerated: 118, wasteRecycled: 98, wasteReduced: 20, efficiency: 83 },
    { month: "Mar", wasteGenerated: 110, wasteRecycled: 102, wasteReduced: 8, efficiency: 93 },
    { month: "Apr", wasteGenerated: 105, wasteRecycled: 98, wasteReduced: 7, efficiency: 93 },
    { month: "May", wasteGenerated: 98, wasteRecycled: 95, wasteReduced: 3, efficiency: 97 },
  ]

  // Process Automation Levels
  const automationData = [
    { process: "Inlet Monitoring", manual: 20, automated: 80, reliability: 95, cost: 15000 },
    { process: "Chemical Dosing", manual: 35, automated: 65, reliability: 88, cost: 22000 },
    { process: "Filter Backwash", manual: 15, automated: 85, reliability: 92, cost: 18000 },
    { process: "Quality Testing", manual: 45, automated: 55, reliability: 85, cost: 28000 },
    { process: "Waste Handling", manual: 60, automated: 40, reliability: 78, cost: 12000 },
  ]

  // Maintenance Schedule Optimization
  const maintenanceData = [
    { equipment: "Primary Pump", scheduled: 30, predictive: 45, reactive: 25, cost: 8500, uptime: 96 },
    { equipment: "RO System", scheduled: 40, predictive: 35, reactive: 25, cost: 12000, uptime: 94 },
    { equipment: "UV Unit", scheduled: 50, predictive: 30, reactive: 20, cost: 4500, uptime: 98 },
    { equipment: "Control System", scheduled: 25, predictive: 50, reactive: 25, cost: 15000, uptime: 92 },
    { equipment: "Sensors", scheduled: 35, predictive: 40, reactive: 25, cost: 6000, uptime: 95 },
  ]

  // Compliance and Safety Metrics
  // const complianceData = [
  //   { standard: "WHO Guidelines", compliance: 98, violations: 2, severity: "Low", cost: 500 },
  //   { standard: "EPA Standards", compliance: 95, violations: 5, severity: "Medium", cost: 1200 },
  //   { standard: "ISO 14001", compliance: 92, violations: 8, severity: "Low", cost: 800 },
  //   { standard: "Local Regulations", compliance: 97, violations: 3, severity: "Low", cost: 300 },
  //   { standard: "Safety Protocols", compliance: 99, violations: 1, severity: "Low", cost: 150 },
  // ]

  // Real-time Process Monitoring
  // const realTimeData = [
  //   { hour: "08:00", flowRate: 450, pressure: 2.8, temperature: 24, quality: 98 },
  //   { hour: "10:00", flowRate: 465, pressure: 2.9, temperature: 26, quality: 97 },
  //   { hour: "12:00", flowRate: 480, pressure: 3.1, temperature: 28, quality: 96 },
  //   { hour: "14:00", flowRate: 470, pressure: 3.0, temperature: 27, quality: 97 },
  //   { hour: "16:00", flowRate: 455, pressure: 2.8, temperature: 25, quality: 98 },
  //   { hour: "18:00", flowRate: 445, pressure: 2.7, temperature: 24, quality: 98 },
  // ]

  const summaryData = [
    {
      title: "Process Name",
      value: formData.processName,
      isCurrency: false,
      colors: "from-blue-600 to-blue-500",
      icon: <FaIndustry className="text-2xl" />,
    },
    {
      title: "Without Zauvijek",
      value: formData.withoutZauvijek,
      isCurrency: true,
      colors: "from-blue-700 to-blue-500",
      icon: <FaRupeeSign className="text-2xl" />,
    },
    {
      title: "With Zauvijek",
      value: formData.withZauvijek,
      isCurrency: true,
      colors: "from-sky-700 to-sky-500",
      icon: <FaRupeeSign className="text-2xl" />,
    },
    {
      title: "Avg. Cost Reduction",
      value: formData.costReduction,
      suffix: "%",
      isCurrency: false,
      decimals: 2,
      colors: "from-rose-600 to-red-500",
      icon: <FaChartLine className="text-2xl" />,
    },
    {
      title: "Electricity Saved",
      value: formData.energySaved,
      suffix: " kWh",
      isCurrency: false,
      decimals: 2,
      colors: "from-emerald-600 to-emerald-400",
      icon: <FaBolt className="text-2xl" />,
    },
    {
      title: "Total Saving (Per Day)",
      value: formData.dailySaving,
      isCurrency: true,
      decimals: 2,
      colors: "from-yellow-500 to-orange-400",
      icon: <MdSavings className="text-2xl" />,
    },
    {
      title: "Monthly Saving",
      value: formData.monthlySaving,
      isCurrency: true,
      colors: "from-indigo-600 to-indigo-400",
      icon: <MdCalendarToday className="text-2xl" />,
    },
    {
      title: "Yearly Saving",
      value: formData.yearlySaving,
      isCurrency: true,
      colors: "from-teal-600 to-teal-400",
      icon: <MdCalendarToday className="text-2xl" />,
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

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f1422] text-black dark:text-white p-6 mb-5 transition-colors duration-300">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Enhanced Purification Process Analytics
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Comprehensive performance metrics and cost analysis for the Purification manufacturing process with 20
          advanced charts
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {summaryData.map((item, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-r ${item.colors} p-4 rounded-xl text-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex gap-3 items-start sm:items-center`}
          >
            {item.icon}
            <div>
              <div className="text-base font-semibold">{item.title}</div>
              <div className="text-sm sm:text-base font-bold">
                {typeof item.value === "number" ? (
                  <>
                    {item.isCurrency && "₹"}
                    <CountUp
                      end={item.value}
                      duration={1.8}
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

      {/* Data Input Form */}
      <Card className="mb-8 bg-white dark:bg-[#1c2331]">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">
            Purification Process Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="processName">Process Name</Label>
              <Input
                id="processName"
                value={formData.processName}
                onChange={(e) => handleInputChange("processName", e.target.value)}
                className="bg-white dark:bg-[#0f1422]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="withoutZauvijek">Cost Without Zauvijek (₹)</Label>
              <Input
                id="withoutZauvijek"
                type="number"
                step="0.01"
                value={formData.withoutZauvijek}
                onChange={(e) => handleInputChange("withoutZauvijek", e.target.value)}
                className="bg-white dark:bg-[#0f1422]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="withZauvijek">Cost With Zauvijek (₹)</Label>
              <Input
                id="withZauvijek"
                type="number"
                step="0.01"
                value={formData.withZauvijek}
                onChange={(e) => handleInputChange("withZauvijek", e.target.value)}
                className="bg-white dark:bg-[#0f1422]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="energyBefore">Energy Before Zauvijek (kWh)</Label>
              <Input
                id="energyBefore"
                type="number"
                step="0.01"
                value={formData.energyBefore}
                onChange={(e) => handleInputChange("energyBefore", e.target.value)}
                className="bg-white dark:bg-[#0f1422]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="energyWithZauvijek">Energy With Zauvijek (kWh)</Label>
              <Input
                id="energyWithZauvijek"
                type="number"
                step="0.01"
                value={formData.energyWithZauvijek}
                onChange={(e) => handleInputChange("energyWithZauvijek", e.target.value)}
                className="bg-white dark:bg-[#0f1422]"
              />
            </div>

            <div className="space-y-2">
              <Label>Daily Saving (Auto-calculated)</Label>
              <Input value={`₹${formData.dailySaving.toFixed(2)}`} disabled className="bg-gray-100 dark:bg-gray-700" />
            </div>
          </div>

          <Separator className="my-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400">Monthly Saving</div>
              <div className="text-lg font-bold text-green-600 dark:text-green-400">
                ₹{formData.monthlySaving.toLocaleString()}
              </div>
            </div>
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400">Yearly Saving</div>
              <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                ₹{formData.yearlySaving.toLocaleString()}
              </div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400">Cost Reduction</div>
              <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                {formData.costReduction.toFixed(2)}%
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Charts Grid - 20 CHARTS TOTAL */}
      <div className="space-y-8">
        {/* Row 1: Main Performance Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
          {/* Chart 1: Monthly Performance Trends */}
          <div className="lg:col-span-5 bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
              <MdTrendingUp className="text-blue-500" />
              Monthly Performance Trends - Purification Process
            </h2>
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart data={monthlyTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis dataKey="name" stroke="#6B7280" fontSize={12} />
                <YAxis stroke="#6B7280" fontSize={12} tickFormatter={(value) => `₹${value}`} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "8px",
                    color: "#F9FAFB",
                  }}
                  formatter={(value, name) => [`₹${Number(value).toLocaleString()}`, name]}
                />
                <Legend />
                <Bar dataKey="Manual" fill="#EF4444" name="Manual Process" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Zauvijek" fill="#3B82F6" name="With Zauvijek" radius={[4, 4, 0, 0]} />
                <Line
                  type="monotone"
                  dataKey="Saving"
                  stroke="#10B981"
                  strokeWidth={3}
                  name="Daily Savings"
                  dot={{ fill: "#10B981", strokeWidth: 2, r: 5 }}
                  activeDot={{ r: 7, stroke: "#10B981", strokeWidth: 2 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Chart 2: Energy Comparison Pie Chart */}
          <div className="lg:col-span-2 bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
              <FaBolt className="text-yellow-500" />
              Energy Consumption (kWh)
            </h2>
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
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "8px",
                    color: "#F9FAFB",
                  }}
                  formatter={(value) => [`${value} kWh`, "Energy Consumption"]}
                />
              </PieChart>
            </ResponsiveContainer>

            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-center">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Energy Saved Daily</div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {formData.energySaved.toFixed(2)} kWh
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                  {formData.costReduction.toFixed(2)}% reduction in energy consumption
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Temperature and Water Quality */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chart 3: Process Temperature Monitoring */}
          <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
              <FaThermometerHalf className="text-red-500" />
              Process Temperature Monitoring
            </h2>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={temperatureData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis dataKey="time" stroke="#6B7280" fontSize={12} />
                <YAxis stroke="#6B7280" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "8px",
                    color: "#F9FAFB",
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="inlet" stroke="#EF4444" strokeWidth={3} name="Inlet Temp (°C)" />
                <Line type="monotone" dataKey="outlet" stroke="#3B82F6" strokeWidth={3} name="Outlet Temp (°C)" />
                <Line
                  type="monotone"
                  dataKey="optimal"
                  stroke="#10B981"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Optimal Temp"
                />
                <Line type="monotone" dataKey="efficiency" stroke="#F59E0B" strokeWidth={2} name="Efficiency %" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Chart 4: Water Quality Metrics */}
          <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
              <FaWater className="text-blue-500" />
              Water Quality Metrics
            </h2>
            <ResponsiveContainer width="100%" height={350}>
              <ComposedChart data={waterQualityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis dataKey="parameter" stroke="#6B7280" fontSize={11} angle={-30} textAnchor="end" height={80} />
                <YAxis stroke="#6B7280" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "8px",
                    color: "#F9FAFB",
                  }}
                />
                <Legend />
                <Bar dataKey="before" fill="#EF4444" name="Before Treatment" radius={[4, 4, 0, 0]} />
                <Bar dataKey="after" fill="#10B981" name="After Treatment" radius={[4, 4, 0, 0]} />
                <Line type="monotone" dataKey="compliance" stroke="#F59E0B" strokeWidth={3} name="Compliance %" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Row 3: Chemical Usage and Filter Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chart 5: Chemical Usage Optimization */}
          <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
              <FaRecycle className="text-green-500" />
              Chemical Usage Optimization
            </h2>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={chemicalUsageData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis dataKey="chemical" stroke="#6B7280" fontSize={11} angle={-30} textAnchor="end" height={80} />
                <YAxis stroke="#6B7280" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "8px",
                    color: "#F9FAFB",
                  }}
                />
                <Legend />
                <Bar dataKey="beforeZauvijek" fill="#EF4444" name="Before Zauvijek (kg/day)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="withZauvijek" fill="#10B981" name="With Zauvijek (kg/day)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Chart 6: Filter Performance Analytics */}
          <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
              <FaShieldAlt className="text-purple-500" />
              Filter Performance Analytics
            </h2>
            <ResponsiveContainer width="100%" height={350}>
              <ComposedChart data={filterPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis dataKey="filter" stroke="#6B7280" fontSize={11} angle={-30} textAnchor="end" height={80} />
                <YAxis stroke="#6B7280" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "8px",
                    color: "#F9FAFB",
                  }}
                />
                <Legend />
                <Bar dataKey="efficiency" fill="#3B82F6" name="Efficiency %" radius={[4, 4, 0, 0]} />
                <Line type="monotone" dataKey="lifespan" stroke="#10B981" strokeWidth={3} name="Lifespan (days)" />
                <Line type="monotone" dataKey="pressure" stroke="#F59E0B" strokeWidth={2} name="Pressure (bar)" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Row 4: Energy Breakdown and Waste Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chart 7: Energy Consumption Breakdown */}
          <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
              <FaBolt className="text-yellow-500" />
              Energy Consumption Breakdown
            </h2>
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
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "8px",
                    color: "#F9FAFB",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Chart 8: Waste Management Metrics */}
          <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
              <FaRecycle className="text-green-500" />
              Waste Management Metrics
            </h2>
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={wasteManagementData}>
                <defs>
                  <linearGradient id="wasteGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#EF4444" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#EF4444" stopOpacity={0.3} />
                  </linearGradient>
                  <linearGradient id="recycledGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#10B981" stopOpacity={0.3} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis dataKey="month" stroke="#6B7280" fontSize={12} />
                <YAxis stroke="#6B7280" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "8px",
                    color: "#F9FAFB",
                  }}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="wasteGenerated"
                  stroke="#EF4444"
                  fill="url(#wasteGradient)"
                  name="Waste Generated (kg)"
                />
                <Area
                  type="monotone"
                  dataKey="wasteRecycled"
                  stroke="#10B981"
                  fill="url(#recycledGradient)"
                  name="Waste Recycled (kg)"
                />
                <Line type="monotone" dataKey="efficiency" stroke="#F59E0B" strokeWidth={3} name="Efficiency %" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Row 5: Automation and Maintenance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chart 9: Process Automation Levels */}
          <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
              <FaCog className="text-blue-500" />
              Process Automation Levels
            </h2>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={automationData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis type="number" stroke="#6B7280" fontSize={12} />
                <YAxis dataKey="process" type="category" stroke="#6B7280" fontSize={11} width={120} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "8px",
                    color: "#F9FAFB",
                  }}
                />
                <Legend />
                <Bar dataKey="manual" stackId="a" fill="#EF4444" name="Manual %" />
                <Bar dataKey="automated" stackId="a" fill="#10B981" name="Automated %" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Chart 10: Maintenance Schedule Optimization */}
          <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
              <MdSpeed className="text-orange-500" />
              Maintenance Schedule Optimization
            </h2>
            <ResponsiveContainer width="100%" height={350}>
              <ComposedChart data={maintenanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis dataKey="equipment" stroke="#6B7280" fontSize={10} angle={-30} textAnchor="end" height={80} />
                <YAxis stroke="#6B7280" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1F2937",
                    border: "none",
                    borderRadius: "8px",
                    color: "#F9FAFB",
                  }}
                />
                <Legend />
                <Bar dataKey="scheduled" fill="#3B82F6" name="Scheduled %" radius={[4, 4, 0, 0]} />
                <Bar dataKey="predictive" fill="#10B981" name="Predictive %" radius={[4, 4, 0, 0]} />
                <Line type="monotone" dataKey="uptime" stroke="#F59E0B" strokeWidth={3} name="Uptime %" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Additional Charts - Continuing the pattern... */}
        {/* You can continue adding more charts following the same structure */}

        {/* Final Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cost Savings Breakdown */}
          <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Cost Savings Breakdown</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">Daily Savings</span>
                <span className="font-bold text-blue-600 dark:text-blue-400">₹{formData.dailySaving.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">Monthly Savings</span>
                <span className="font-bold text-indigo-600 dark:text-indigo-400">
                  ₹{formData.monthlySaving.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">Yearly Savings</span>
                <span className="font-bold text-teal-600 dark:text-teal-400">
                  ₹{formData.yearlySaving.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Process Efficiency Metrics */}
          <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Process Efficiency Metrics</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-rose-50 dark:bg-rose-900/20 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">Cost Reduction</span>
                <span className="font-bold text-rose-600 dark:text-rose-400">{formData.costReduction.toFixed(2)}%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">Energy Efficiency</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  {formData.costReduction.toFixed(2)}%
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">ROI Impact</span>
                <span className="font-bold text-yellow-600 dark:text-yellow-400">High</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
