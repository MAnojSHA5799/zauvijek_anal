// "use client"
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
//   BarChart,
//   Bar,
//   AreaChart,
//   Area,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts"

// const COLORS = ["#22c55e", "#3b82f6", "#f97316", "#ef4444"]

// const scrapData = [
//   { label: "Total Energy Used (kWh)", value: 1350000 },
//   { label: "Monthly CO₂ Emission (tons)", value: 1215 },
//   { label: "Yearly CO₂ Emission (tons)", value: 14580 },
//   { label: "Energy Saved (kWh)", value: 54000 },
//   { label: "CO₂ Saved (tons/year)", value: 486 },
// ]

// const savingsData = [
//   { label: "Monthly Cost Without Zauvijek (₹)", value: 2000000 },
//   { label: "Monthly Cost With Zauvijek (₹)", value: 1960000 },
//   { label: "Monthly Saving (₹)", value: 1200000 },
//   { label: "Annual Saving (₹)", value: 14600000 },
// ]

// const carbonCreditData = [
//   { rate: "₹800/ton", income: 388800 },
//   { rate: "₹1200/ton", income: 583200 },
// ]

// const scrapTrendData = [
//   { month: "Jan", withoutZauvijek: 2000000, withZauvijek: 1960000, saving: 40000 },
//   { month: "Feb", withoutZauvijek: 2000000, withZauvijek: 1960000, saving: 40000 },
//   { month: "Mar", withoutZauvijek: 2000000, withZauvijek: 1960000, saving: 40000 },
//   { month: "Apr", withoutZauvijek: 2000000, withZauvijek: 1960000, saving: 40000 },
//   { month: "May", withoutZauvijek: 2000000, withZauvijek: 1960000, saving: 40000 },
//   { month: "Jun", withoutZauvijek: 2000000, withZauvijek: 1960000, saving: 40000 },
// ]

// const energyTrendData = [
//   { month: "Jan", beforeOptimization: 54000, afterOptimization: 0 },
//   { month: "Feb", beforeOptimization: 54000, afterOptimization: 0 },
//   { month: "Mar", beforeOptimization: 54000, afterOptimization: 0 },
//   { month: "Apr", beforeOptimization: 54000, afterOptimization: 0 },
//   { month: "May", beforeOptimization: 54000, afterOptimization: 0 },
//   { month: "Jun", beforeOptimization: 54000, afterOptimization: 0 },
// ]

// const productionStats = [
//   { label: "Process Name", value: "Scrap Optimization", color: "#3B82F6" },
//   { label: "Cost Reduction", value: "2.00%", color: "#F59E0B" },
//   { label: "Daily Saving", value: "₹40,000", color: "#10B981" },
//   { label: "Monthly Saving", value: "₹12,00,000", color: "#22C55E" },
//   { label: "Yearly Saving", value: "₹1.46 Cr", color: "#EF4444" },
//   { label: "Energy Saved", value: "54,000 kWh", color: "#8B5CF6" },
// ]

// export default function ScrapOptimizationDashboard() {
//   return (
//     <div className="space-y-8 p-6 bg-white text-gray-900 min-h-screen">
//       <h2 className="text-2xl font-bold mb-6 text-center text-teal-600">♻️ Scrap Optimization Process Dashboard</h2>

//       {/* KPI Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
//         {productionStats.map((stat) => (
//           <div
//             key={stat.label}
//             className="bg-white shadow rounded-lg p-4"
//             style={{ borderTop: `4px solid ${stat.color}` }}
//           >
//             <h4 className="text-sm font-semibold text-gray-500">{stat.label}</h4>
//             <p className="text-lg font-bold text-gray-900">{stat.value}</p>
//           </div>
//         ))}
//       </div>

//       {/* Two-column Graph Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Scrap Cost Comparison */}
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h6 className="font-semibold text-gray-700 mb-3">💰 Monthly Scrap Cost Comparison</h6>
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={[{ month: "Current", withoutZauvijek: 2000000, withZauvijek: 1960000 }]}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="month" />
//               <YAxis tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`} />
//               <Tooltip formatter={(value) => [`₹${Number(value).toLocaleString()}`, ""]} />
//               <Legend />
//               <Bar dataKey="withoutZauvijek" fill="#f97316" name="Without Zauvijek" />
//               <Bar dataKey="withZauvijek" fill="#3b82f6" name="With Zauvijek" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Scrap Metrics Overview */}
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h6 className="font-semibold text-gray-700 mb-3">📊 Scrap Optimization Metrics</h6>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={scrapData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="label" tick={{ fontSize: 10 }} />
//               <YAxis />
//               <Tooltip formatter={(value) => [Number(value).toLocaleString(), ""]} />
//               <Legend />
//               <Line type="monotone" dataKey="value" stroke="#3b82f6" name="Optimization Metrics" />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Annual Savings */}
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h6 className="font-semibold text-gray-700 mb-3">💸 Scrap Optimization Savings</h6>
//           <ResponsiveContainer width="100%" height={260}>
//             <AreaChart data={savingsData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="label" tick={{ fontSize: 10 }} />
//               <YAxis tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`} />
//               <Tooltip formatter={(value) => [`₹${Number(value).toLocaleString()}`, ""]} />
//               <Area type="monotone" dataKey="value" stroke="#0ea5e9" fill="#bae6fd" name="₹ Saved" />
//             </AreaChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Carbon Credit Potential */}
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h6 className="font-semibold text-gray-700 mb-3">🌱 Carbon Credit Revenue Potential</h6>
//           <ResponsiveContainer width="100%" height={260}>
//             <PieChart>
//               <Pie data={carbonCreditData} dataKey="income" nameKey="rate" outerRadius={90} label>
//                 {carbonCreditData.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Legend />
//               <Tooltip formatter={(val) => `₹${(+val).toLocaleString()}`} />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Monthly Scrap Cost Trend */}
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h6 className="font-semibold text-gray-700 mb-3">📈 Monthly Scrap Cost Trend</h6>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={scrapTrendData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="month" />
//               <YAxis tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`} />
//               <Tooltip formatter={(value) => [`₹${Number(value).toLocaleString()}`, ""]} />
//               <Legend />
//               <Line type="monotone" dataKey="withoutZauvijek" stroke="#ef4444" name="Without Zauvijek" />
//               <Line type="monotone" dataKey="withZauvijek" stroke="#10b981" name="With Zauvijek" />
//               <Line type="monotone" dataKey="saving" stroke="#3b82f6" name="Daily Saving" />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Energy Consumption for Scrap Processing */}
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h6 className="font-semibold text-gray-700 mb-3">⚡ Energy Usage in Scrap Processing</h6>
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={energyTrendData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="month" />
//               <YAxis tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`} />
//               <Tooltip formatter={(value) => [`${Number(value).toLocaleString()} kWh`, ""]} />
//               <Legend />
//               <Bar dataKey="beforeOptimization" fill="#6366f1" name="Before Optimization" />
//               <Bar dataKey="afterOptimization" fill="#34d399" name="After Optimization" />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Summary Section */}
//       <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg shadow">
//         <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 Scrap Optimization Summary</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           <div className="text-center">
//             <div className="text-2xl font-bold text-teal-600">2.00%</div>
//             <div className="text-sm text-gray-600">Cost Reduction</div>
//           </div>
//           <div className="text-center">
//             <div className="text-2xl font-bold text-green-600">₹40,000</div>
//             <div className="text-sm text-gray-600">Daily Savings</div>
//           </div>
//           <div className="text-center">
//             <div className="text-2xl font-bold text-blue-600">₹1.46 Cr</div>
//             <div className="text-sm text-gray-600">Annual Savings</div>
//           </div>
//           <div className="text-center">
//             <div className="text-2xl font-bold text-purple-600">54,000 kWh</div>
//             <div className="text-sm text-gray-600">Energy Saved</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

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
  RadialBarChart,
  RadialBar,
  BarChart,
} from "recharts"
import {
  IndianRupee,
  TrendingUp,
  Zap,
  PiggyBank,
  Calendar,
  Factory,
  Target,
  Award,
  Gauge,
  Leaf,
  DollarSign,
} from "lucide-react"
import CountUp from "react-countup"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"

// const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7", "#DDA0DD", "#98D8C8", "#F7DC6F"]
// const GRADIENT_COLORS = [
//   "from-pink-500 to-rose-500",
//   "from-purple-500 to-indigo-500",
//   "from-blue-500 to-cyan-500",
//   "from-green-500 to-emerald-500",
//   "from-yellow-500 to-orange-500",
//   "from-red-500 to-pink-500",
//   "from-indigo-500 to-purple-500",
//   "from-teal-500 to-green-500",
// ]

interface ScrapOptimizationData {
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
  scrapReductionRate: number
  productionEfficiency: number
  qualityImprovement: number
  maintenanceCostReduction: number
}

export default function EnhancedScrapOptimizationDashboard() {
  const [formData, setFormData] = useState<ScrapOptimizationData>({
    processName: "Advanced Scrap Optimization",
    withoutZauvijek: 2000000.0,
    withZauvijek: 1960000.0,
    dailySaving: 40000.0,
    monthlySaving: 1200000.0,
    yearlySaving: 14600000.0,
    costReduction: 2.0,
    energyBefore: 54000.0,
    energyWithZauvijek: 0,
    energySaved: 54000.0,
    scrapReductionRate: 85.5,
    productionEfficiency: 92.3,
    qualityImprovement: 78.9,
    maintenanceCostReduction: 45.2,
  })

  const handleInputChange = (field: keyof ScrapOptimizationData, value: string) => {
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

  // Enhanced calculations
  const roiPercentage = (formData.yearlySaving / formData.withoutZauvijek) * 100
  const paybackPeriod = formData.withoutZauvijek / formData.yearlySaving
  const carbonFootprintReduction = (formData.energySaved * 0.82) / 1000 // tons CO2
  const wasteReduction = formData.scrapReductionRate * 1000 // kg per month

  const summaryData = [
    {
      title: "Process Name",
      value: formData.processName,
      isCurrency: false,
      colors: "from-violet-600 to-purple-600",
      icon: <Factory className="w-6 h-6" />,
    },
    {
      title: "Monthly Cost (Before)",
      value: formData.withoutZauvijek,
      isCurrency: true,
      colors: "from-red-600 to-rose-600",
      icon: <IndianRupee className="w-6 h-6" />,
    },
    {
      title: "Monthly Cost (After)",
      value: formData.withZauvijek,
      isCurrency: true,
      colors: "from-green-600 to-emerald-600",
      icon: <IndianRupee className="w-6 h-6" />,
    },
    {
      title: "Cost Reduction",
      value: formData.costReduction,
      suffix: "%",
      isCurrency: false,
      decimals: 2,
      colors: "from-orange-600 to-red-600",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Energy Saved",
      value: formData.energySaved,
      suffix: " kWh",
      isCurrency: false,
      decimals: 0,
      colors: "from-yellow-500 to-orange-500",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Daily Savings",
      value: formData.dailySaving,
      isCurrency: true,
      decimals: 0,
      colors: "from-blue-600 to-cyan-600",
      icon: <PiggyBank className="w-6 h-6" />,
    },
    {
      title: "Annual ROI",
      value: roiPercentage,
      suffix: "%",
      isCurrency: false,
      decimals: 1,
      colors: "from-indigo-600 to-blue-600",
      icon: <Target className="w-6 h-6" />,
    },
    {
      title: "Carbon Saved",
      value: carbonFootprintReduction,
      suffix: " tons CO₂",
      isCurrency: false,
      decimals: 1,
      colors: "from-green-500 to-teal-500",
      icon: <Leaf className="w-6 h-6" />,
    },
  ]

  // Enhanced data for multiple charts
  const monthlyTrendData = [
    { name: "Jan", Manual: 2100000, Zauvijek: 1950000, Saving: 150000, Efficiency: 88 },
    { name: "Feb", Manual: 2050000, Zauvijek: 1940000, Saving: 110000, Efficiency: 89 },
    { name: "Mar", Manual: 2200000, Zauvijek: 1980000, Saving: 220000, Efficiency: 91 },
    { name: "Apr", Manual: 1950000, Zauvijek: 1920000, Saving: 30000, Efficiency: 92 },
    { name: "May", Manual: 2150000, Zauvijek: 1960000, Saving: 190000, Efficiency: 93 },
    { name: "Jun", Manual: 2000000, Zauvijek: 1940000, Saving: 60000, Efficiency: 94 },
    { name: "Jul", Manual: 2300000, Zauvijek: 2000000, Saving: 300000, Efficiency: 95 },
    { name: "Aug", Manual: 2100000, Zauvijek: 1970000, Saving: 130000, Efficiency: 94 },
    { name: "Sep", Manual: 1980000, Zauvijek: 1930000, Saving: 50000, Efficiency: 96 },
    { name: "Oct", Manual: 2250000, Zauvijek: 1990000, Saving: 260000, Efficiency: 97 },
    { name: "Nov", Manual: 2050000, Zauvijek: 1950000, Saving: 100000, Efficiency: 98 },
    { name: "Dec", Manual: 2180000, Zauvijek: 1980000, Saving: 200000, Efficiency: 98 },
  ]

  const performanceMetrics = [
    { name: "Scrap Reduction", value: formData.scrapReductionRate, color: "#FF6B6B" },
    { name: "Production Efficiency", value: formData.productionEfficiency, color: "#4ECDC4" },
    { name: "Quality Improvement", value: formData.qualityImprovement, color: "#45B7D1" },
    { name: "Maintenance Cost Reduction", value: formData.maintenanceCostReduction, color: "#96CEB4" },
  ]

  const quarterlyData = [
    { quarter: "Q1", savings: 4800000, target: 4500000, efficiency: 89 },
    { quarter: "Q2", savings: 5200000, target: 5000000, efficiency: 93 },
    { quarter: "Q3", savings: 5800000, target: 5500000, efficiency: 96 },
    { quarter: "Q4", savings: 6200000, target: 6000000, efficiency: 98 },
  ]

  const costBreakdownData = [
    { name: "Material Waste", value: 35, color: "#FF6B6B" },
    { name: "Energy Consumption", value: 25, color: "#4ECDC4" },
    { name: "Labor Inefficiency", value: 20, color: "#45B7D1" },
    { name: "Equipment Downtime", value: 15, color: "#96CEB4" },
    { name: "Quality Issues", value: 5, color: "#FFEAA7" },
  ]

  const weeklyTrendData = [
    { week: "Week 1", before: 500000, after: 480000, improvement: 4 },
    { week: "Week 2", before: 520000, after: 485000, improvement: 6.7 },
    { week: "Week 3", before: 480000, after: 470000, improvement: 2.1 },
    { week: "Week 4", before: 510000, after: 490000, improvement: 3.9 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 text-black dark:text-white p-6 transition-colors duration-300">
      {/* Enhanced Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          🏭 Advanced Scrap Optimization Analytics
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Comprehensive performance metrics, cost analysis, and sustainability insights for intelligent manufacturing
          optimization
        </p>
      </div>

      {/* Enhanced Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {summaryData.map((item, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${item.colors} p-6 rounded-2xl text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex gap-4 items-center`}
          >
            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">{item.icon}</div>
            <div>
              <div className="text-sm font-medium opacity-90">{item.title}</div>
              <div className="text-xl font-bold">
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
      <Card className="mb-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold flex items-center gap-3">
            <Gauge className="w-8 h-8" />
            Process Configuration Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-3">
              <Label htmlFor="processName" className="text-lg font-semibold">
                Process Name
              </Label>
              <Input
                id="processName"
                value={formData.processName}
                onChange={(e) => handleInputChange("processName", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 border-blue-200 focus:border-blue-500 rounded-xl p-3"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="withoutZauvijek" className="text-lg font-semibold">
                Monthly Cost Without Optimization (₹)
              </Label>
              <Input
                id="withoutZauvijek"
                type="number"
                step="10000"
                value={formData.withoutZauvijek}
                onChange={(e) => handleInputChange("withoutZauvijek", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 border-red-200 focus:border-red-500 rounded-xl p-3"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="withZauvijek" className="text-lg font-semibold">
                Monthly Cost With Optimization (₹)
              </Label>
              <Input
                id="withZauvijek"
                type="number"
                step="10000"
                value={formData.withZauvijek}
                onChange={(e) => handleInputChange("withZauvijek", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 border-green-200 focus:border-green-500 rounded-xl p-3"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="energyBefore" className="text-lg font-semibold">
                Energy Before (kWh)
              </Label>
              <Input
                id="energyBefore"
                type="number"
                step="1000"
                value={formData.energyBefore}
                onChange={(e) => handleInputChange("energyBefore", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 border-yellow-200 focus:border-yellow-500 rounded-xl p-3"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="scrapReductionRate" className="text-lg font-semibold">
                Scrap Reduction Rate (%)
              </Label>
              <Input
                id="scrapReductionRate"
                type="number"
                step="0.1"
                value={formData.scrapReductionRate}
                onChange={(e) => handleInputChange("scrapReductionRate", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 border-purple-200 focus:border-purple-500 rounded-xl p-3"
              />
            </div>

            <div className="space-y-3">
              <Label htmlFor="productionEfficiency" className="text-lg font-semibold">
                Production Efficiency (%)
              </Label>
              <Input
                id="productionEfficiency"
                type="number"
                step="0.1"
                value={formData.productionEfficiency}
                onChange={(e) => handleInputChange("productionEfficiency", e.target.value)}
                className="bg-white dark:bg-slate-700 border-2 border-teal-200 focus:border-teal-500 rounded-xl p-3"
              />
            </div>
          </div>

          <Separator className="my-8" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">ROI Percentage</div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">{roiPercentage.toFixed(1)}%</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-2xl">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Payback Period</div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {paybackPeriod.toFixed(1)} years
              </div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-2xl">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Carbon Footprint Reduction</div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {carbonFootprintReduction.toFixed(1)} tons
              </div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-2xl">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Waste Reduction</div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                {wasteReduction.toFixed(0)} kg/month
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
        {/* Monthly Performance Trends */}
        <div className="xl:col-span-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-blue-500" />
            Monthly Performance & Efficiency Trends
          </h2>
          <ResponsiveContainer width="100%" height={450}>
            <ComposedChart data={monthlyTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="colorManual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF6B6B" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FF6B6B" stopOpacity={0.3} />
                </linearGradient>
                <linearGradient id="colorZauvijek" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4ECDC4" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4ECDC4" stopOpacity={0.3} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" opacity={0.5} />
              <XAxis dataKey="name" stroke="#6B7280" fontSize={14} fontWeight="600" />
              <YAxis
                yAxisId="cost"
                stroke="#6B7280"
                fontSize={12}
                tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`}
              />
              <YAxis
                yAxisId="efficiency"
                orientation="right"
                stroke="#6B7280"
                fontSize={12}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "none",
                  borderRadius: "12px",
                  color: "#F9FAFB",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                formatter={(value, name) => {
                  if (name === "Efficiency") return [`${value}%`, name]
                  return [`₹${Number(value).toLocaleString()}`, name]
                }}
              />
              <Legend />
              <Bar
                yAxisId="cost"
                dataKey="Manual"
                fill="url(#colorManual)"
                name="Manual Process"
                radius={[6, 6, 0, 0]}
              />
              <Bar
                yAxisId="cost"
                dataKey="Zauvijek"
                fill="url(#colorZauvijek)"
                name="With Optimization"
                radius={[6, 6, 0, 0]}
              />
              <Line
                yAxisId="efficiency"
                type="monotone"
                dataKey="Efficiency"
                stroke="#45B7D1"
                strokeWidth={4}
                name="Efficiency %"
                dot={{ fill: "#45B7D1", strokeWidth: 3, r: 6 }}
                activeDot={{ r: 8, stroke: "#45B7D1", strokeWidth: 3 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Metrics Radial Chart */}
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Award className="w-8 h-8 text-purple-500" />
            Performance Metrics
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" data={performanceMetrics}>
               <RadialBar
    dataKey="value"
    cornerRadius={10}
    label={{ position: "insideStart", fill: "#fff", fontSize: 12, fontWeight: "bold" }}
    fill="#F59E0B" // ✅ use a static color string
  />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "none",
                  borderRadius: "12px",
                  color: "#F9FAFB",
                }}
                formatter={(value) => [`${value}%`, "Performance"]}
              />
            </RadialBarChart>
          </ResponsiveContainer>

          <div className="mt-6 space-y-4">
            {performanceMetrics.map((metric, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{metric.name}</span>
                  <span className="text-sm font-bold" style={{ color: metric.color }}>
                    {metric.value}%
                  </span>
                </div>
                <Progress value={metric.value} className="h-2" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Quarterly Performance */}
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Calendar className="w-8 h-8 text-green-500" />
            Quarterly Savings vs Targets
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={quarterlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="savingsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.4} />
                </linearGradient>
                <linearGradient id="targetGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.4} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="quarter" stroke="#6B7280" fontSize={14} fontWeight="600" />
              <YAxis stroke="#6B7280" fontSize={12} tickFormatter={(value) => `₹${(value / 1000000).toFixed(1)}M`} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "none",
                  borderRadius: "12px",
                  color: "#F9FAFB",
                }}
                formatter={(value) => [`₹${Number(value).toLocaleString()}`, "Amount"]}
              />
              <Legend />
              <Bar dataKey="savings" fill="url(#savingsGradient)" name="Actual Savings" radius={[6, 6, 0, 0]} />
              <Bar dataKey="target" fill="url(#targetGradient)" name="Target" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Cost Breakdown Pie Chart */}
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <DollarSign className="w-8 h-8 text-yellow-500" />
            Cost Optimization Breakdown
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={costBreakdownData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                innerRadius={60}
                paddingAngle={5}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                labelLine={false}
              >
                {costBreakdownData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "none",
                  borderRadius: "12px",
                  color: "#F9FAFB",
                }}
                formatter={(value) => [`${value}%`, "Cost Impact"]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Weekly Trend Analysis */}
      <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-indigo-500" />
          Weekly Cost Improvement Analysis
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={weeklyTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id="beforeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#EF4444" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="afterGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22C55E" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#22C55E" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="week" stroke="#6B7280" fontSize={14} fontWeight="600" />
            <YAxis stroke="#6B7280" fontSize={12} tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}K`} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "none",
                borderRadius: "12px",
                color: "#F9FAFB",
              }}
              formatter={(value, name) => [`₹${Number(value).toLocaleString()}`, name]}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="before"
              stackId="1"
              stroke="#EF4444"
              fill="url(#beforeGradient)"
              name="Before Optimization"
              strokeWidth={3}
            />
            <Area
              type="monotone"
              dataKey="after"
              stackId="2"
              stroke="#22C55E"
              fill="url(#afterGradient)"
              name="After Optimization"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Enhanced Summary Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 p-8 rounded-2xl shadow-2xl text-white">
        <h3 className="text-3xl font-bold mb-8 text-center">🎯 Optimization Impact Dashboard</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="text-center p-6 bg-white/20 backdrop-blur-sm rounded-xl">
            <div className="text-4xl font-bold mb-2">₹{(formData.yearlySaving / 10000000).toFixed(1)}Cr</div>
            <div className="text-sm opacity-90">Annual Savings</div>
          </div>
          <div className="text-center p-6 bg-white/20 backdrop-blur-sm rounded-xl">
            <div className="text-4xl font-bold mb-2">{formData.costReduction.toFixed(1)}%</div>
            <div className="text-sm opacity-90">Cost Reduction</div>
          </div>
          <div className="text-center p-6 bg-white/20 backdrop-blur-sm rounded-xl">
            <div className="text-4xl font-bold mb-2">{(formData.energySaved / 1000).toFixed(0)}K</div>
            <div className="text-sm opacity-90">kWh Energy Saved</div>
          </div>
          <div className="text-center p-6 bg-white/20 backdrop-blur-sm rounded-xl">
            <div className="text-4xl font-bold mb-2">{carbonFootprintReduction.toFixed(1)}</div>
            <div className="text-sm opacity-90">Tons CO₂ Reduced</div>
          </div>
          <div className="text-center p-6 bg-white/20 backdrop-blur-sm rounded-xl">
            <div className="text-4xl font-bold mb-2">{roiPercentage.toFixed(0)}%</div>
            <div className="text-sm opacity-90">Annual ROI</div>
          </div>
        </div>
      </div>
    </div>
  )
}
