"use client"
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
  ComposedChart,
} from "recharts"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown, DollarSign, Zap, Factory, Target, Activity } from "lucide-react"

// Exchange rate: 1 USD = 83 INR (approximate current rate)
const USD_TO_INR = 83

// Enhanced data sets with Indian Rupee calculations
const compositionData = [
  { name: "Silica Sand", value: 85, color: "#00ff88" },
  { name: "Bentonite Clay", value: 10, color: "#00d4ff" },
  { name: "Water", value: 4, color: "#8b5cf6" },
  { name: "Additives", value: 1, color: "#fbbf24" },
]

const automationImpactData = [
  { metric: "Scrap Rate", before: 8.5, after: 2.0, unit: "%" },
  { metric: "Energy/Ton", before: 1000, after: 750, unit: "kWh" },
  { metric: "Productivity", before: 80, after: 96, unit: "%" },
  { metric: "Cycle Time", before: 45, after: 38, unit: "min" },
  { metric: "Defect Rate", before: 12, after: 3, unit: "%" },
]

const monthlyTrendsData = [
  { month: "Jan", scrapRate: 8.5, energyEfficiency: 75, productivity: 80, costSavings: 0 },
  { month: "Feb", scrapRate: 7.2, energyEfficiency: 78, productivity: 83, costSavings: 12000 * USD_TO_INR },
  { month: "Mar", scrapRate: 5.8, energyEfficiency: 82, productivity: 87, costSavings: 28000 * USD_TO_INR },
  { month: "Apr", scrapRate: 4.1, energyEfficiency: 85, productivity: 91, costSavings: 45000 * USD_TO_INR },
  { month: "May", scrapRate: 2.9, energyEfficiency: 88, productivity: 94, costSavings: 62000 * USD_TO_INR },
  { month: "Jun", scrapRate: 2.0, energyEfficiency: 92, productivity: 96, costSavings: 78000 * USD_TO_INR },
]

// const parameterMonitoringData = [
//   { parameter: "Moisture", optimal: 4.0, current: 3.8, tolerance: 0.5, status: "Good" },
//   { parameter: "Compactability", optimal: 45, current: 44, tolerance: 3, status: "Good" },
//   { parameter: "Green Strength", optimal: 0.8, current: 0.75, tolerance: 0.1, status: "Warning" },
//   { parameter: "Permeability", optimal: 120, current: 118, tolerance: 10, status: "Good" },
//   { parameter: "AFS Fineness", optimal: 55, current: 57, tolerance: 5, status: "Good" },
// ]

const roiAnalysisData = [
  { year: "Year 1", investment: -250000 * USD_TO_INR, savings: 180000 * USD_TO_INR, cumulative: -70000 * USD_TO_INR },
  { year: "Year 2", investment: -50000 * USD_TO_INR, savings: 220000 * USD_TO_INR, cumulative: 100000 * USD_TO_INR },
  { year: "Year 3", investment: -30000 * USD_TO_INR, savings: 240000 * USD_TO_INR, cumulative: 310000 * USD_TO_INR },
  { year: "Year 4", investment: -20000 * USD_TO_INR, savings: 250000 * USD_TO_INR, cumulative: 540000 * USD_TO_INR },
  { year: "Year 5", investment: -20000 * USD_TO_INR, savings: 260000 * USD_TO_INR, cumulative: 780000 * USD_TO_INR },
]

// const defectAnalysisData = [
//   { defectType: "Blowholes", beforeAuto: 35, afterAuto: 8, reduction: 77 },
//   { defectType: "Mold Collapse", beforeAuto: 25, afterAuto: 3, reduction: 88 },
//   { defectType: "Surface Defects", beforeAuto: 20, afterAuto: 5, reduction: 75 },
//   { defectType: "Incomplete Casting", beforeAuto: 15, afterAuto: 2, reduction: 87 },
//   { defectType: "Gas Porosity", beforeAuto: 5, afterAuto: 1, reduction: 80 },
// ]

// const realTimeData = [
//   { time: "00:00", moisture: 3.8, temperature: 22, pressure: 1.2 },
//   { time: "04:00", moisture: 3.9, temperature: 23, pressure: 1.1 },
//   { time: "08:00", moisture: 4.1, temperature: 24, pressure: 1.3 },
//   { time: "12:00", moisture: 3.7, temperature: 25, pressure: 1.0 },
//   { time: "16:00", moisture: 3.8, temperature: 24, pressure: 1.2 },
//   { time: "20:00", moisture: 4.0, temperature: 23, pressure: 1.1 },
// ]

const businessImpactData = [
  { category: "Material Savings", value: 85000 * USD_TO_INR, percentage: 35 },
  { category: "Energy Reduction", value: 65000 * USD_TO_INR, percentage: 27 },
  { category: "Labor Efficiency", value: 45000 * USD_TO_INR, percentage: 19 },
  { category: "Quality Improvement", value: 45000 * USD_TO_INR, percentage: 19 },
]

// const technologyStackData = [
//   { layer: "IoT Sensors", status: "Active", count: 24, efficiency: 98 },
//   { layer: "Edge AI", status: "Running", count: 4, efficiency: 95 },
//   { layer: "Digital Twin", status: "Online", count: 1, efficiency: 92 },
//   { layer: "Cloud Analytics", status: "Connected", count: 1, efficiency: 99 },
// ]

// const competitiveAnalysisData = [
//   { company: "Your Foundry", scrapRate: 2.0, energyEfficiency: 92, automation: 85 },
//   { company: "Industry Average", scrapRate: 8.5, energyEfficiency: 75, automation: 35 },
//   { company: "Best in Class", scrapRate: 1.5, energyEfficiency: 95, automation: 90 },
//   { company: "Traditional Foundry", scrapRate: 12.0, energyEfficiency: 65, automation: 15 },
// ]

// const moistureVsDefectsData = [
//   { level: "Low (2-3%)", defects: 18, color: "#ff6b6b" },
//   { level: "Optimal (3.5-4.5%)", defects: 4, color: "#00ff88" },
//   { level: "High (5-6%)", defects: 12, color: "#ffa726" },
// ]

// const energyConsumptionData = [
//   { process: "Melting", before: 450, after: 380, savings: 70 },
//   { process: "Molding", before: 200, after: 150, savings: 50 },
//   { process: "Finishing", before: 180, after: 120, savings: 60 },
//   { process: "Quality Control", before: 120, after: 80, savings: 40 },
//   { process: "Material Handling", before: 50, after: 20, savings: 30 },
// ]

// const qualityMetricsData = [
//   { metric: "Surface Finish", score: 95, target: 90 },
//   { metric: "Dimensional Accuracy", score: 98, target: 95 },
//   { metric: "Porosity Control", score: 92, target: 85 },
//   { metric: "Strength Properties", score: 96, target: 90 },
//   { metric: "Consistency", score: 94, target: 88 },
// ]

const costBreakdownData = [
  { category: "Raw Materials", cost: 45000 * USD_TO_INR, percentage: 45 },
  { category: "Energy", cost: 25000 * USD_TO_INR, percentage: 25 },
  { category: "Labor", cost: 20000 * USD_TO_INR, percentage: 20 },
  { category: "Maintenance", cost: 10000 * USD_TO_INR, percentage: 10 },
]

// Dark theme color palette with vibrant, attractive colors
const DARK_COLORS = {
  primary: "#00ff88", // Bright green
  secondary: "#00d4ff", // Cyan blue
  accent: "#fbbf24", // Golden yellow
  danger: "#ff6b6b", // Coral red
  warning: "#ffa726", // Orange
  success: "#4ade80", // Light green
  info: "#38bdf8", // Sky blue
  purple: "#a855f7", // Purple
  pink: "#f472b6", // Pink
  indigo: "#6366f1", // Indigo
  emerald: "#10b981", // Emerald
  violet: "#8b5cf6", // Violet
}

// Indian number formatting functions
const formatIndianCurrency = (amount: number): string => {
  if (amount >= 10000000) {
    // 1 Crore
    return `₹${(amount / 10000000).toFixed(1)}Cr`
  } else if (amount >= 100000) {
    // 1 Lakh
    return `₹${(amount / 100000).toFixed(1)}L`
  } else if (amount >= 1000) {
    // 1 Thousand
    return `₹${(amount / 1000).toFixed(0)}K`
  } else {
    return `₹${amount.toFixed(0)}`
  }
}

const formatLargeNumber = (amount: number): string => {
  if (amount >= 10000000) {
    // 1 Crore
    return `${(amount / 10000000).toFixed(1)}Cr`
  } else if (amount >= 100000) {
    // 1 Lakh
    return `${(amount / 100000).toFixed(1)}L`
  } else if (amount >= 1000) {
    // 1 Thousand
    return `${(amount / 1000).toFixed(0)}K`
  } else {
    return `${amount.toFixed(0)}`
  }
}

export default function GreenSandINRDashboard() {
  const calculateSavings = () => {
    const annualSavings = 240000 * USD_TO_INR // ₹1.99 Crores
    const monthlySavings = annualSavings / 12
    const dailySavings = annualSavings / 365
    const hourlyRate = dailySavings / 24
    return { annual: annualSavings, monthly: monthlySavings, daily: dailySavings, hourly: hourlyRate }
  }

  const calculateROI = () => {
    const totalInvestment = 370000 * USD_TO_INR // ₹3.07 Crores
    const totalSavings = 780000 * USD_TO_INR // ₹6.47 Crores
    const roi = ((totalSavings - totalInvestment) / totalInvestment) * 100
    const paybackPeriod = 1.3
    return { roi: roi.toFixed(1), payback: paybackPeriod, totalSavings, totalInvestment }
  }

  const savings = calculateSavings()
  const roiMetrics = calculateROI()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            🟩 Green Sand Automation Analytics Dashboard
          </h1>
          <p className="text-medium text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive real-time monitoring, analysis, and optimization of green sand parameters for modern foundry
            operations in India
          </p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <Activity className="w-4 h-4 text-emerald-400" /> Real-time Monitoring
            </span>
            <span className="flex items-center gap-1">
              <Target className="w-4 h-4 text-cyan-400" /> Predictive Analytics
            </span>
            <span className="flex items-center gap-1">
              <DollarSign className="w-4 h-4 text-yellow-400" /> ROI Tracking (INR)
            </span>
            <span className="flex items-center gap-1">
              <Zap className="w-4 h-4 text-purple-400" /> AI-Powered Insights
            </span>
          </div>
        </div>

        {/* Executive Summary KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-2xl border-emerald-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-sm">Annual Savings</p>
                  <p className="text-3xl font-bold">{formatLargeNumber(savings.annual)}</p>
                  <p className="text-emerald-200 text-xs mt-1">+{roiMetrics.roi}% ROI</p>
                </div>
                <DollarSign className="h-10 w-10 text-emerald-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-600 to-cyan-700 text-white shadow-2xl border-cyan-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-sm">Scrap Reduction</p>
                  <p className="text-3xl font-bold">76%</p>
                  <p className="text-cyan-200 text-xs mt-1">8.5% → 2.0%</p>
                </div>
                <TrendingDown className="h-10 w-10 text-cyan-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-600 to-purple-700 text-white shadow-2xl border-purple-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Energy Efficiency</p>
                  <p className="text-3xl font-bold">92%</p>
                  <p className="text-purple-200 text-xs mt-1">25% improvement</p>
                </div>
                <Zap className="h-10 w-10 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-600 to-orange-700 text-white shadow-2xl border-orange-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Productivity</p>
                  <p className="text-3xl font-bold">96%</p>
                  <p className="text-orange-200 text-xs mt-1">20% boost</p>
                </div>
                <Factory className="h-10 w-10 text-orange-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-600 to-indigo-700 text-white shadow-2xl border-indigo-500/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-indigo-100 text-sm">Payback Period</p>
                  <p className="text-3xl font-bold">{roiMetrics.payback}</p>
                  <p className="text-indigo-200 text-xs mt-1">Years</p>
                </div>
                <TrendingUp className="h-10 w-10 text-indigo-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Row 1: Composition & Monthly Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-2xl bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-gray-800/80 to-gray-700/80">
              <CardTitle className="flex items-center gap-2 text-gray-100">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                Green Sand Composition Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={compositionData}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                    labelLine={false}
                  >
                    {compositionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [`${value}%`, ""]}
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      border: "1px solid #374151",
                      borderRadius: "8px",
                      color: "#f3f4f6",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow-2xl bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-gray-800/80 to-gray-700/80">
              <CardTitle className="flex items-center gap-2 text-gray-100">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                6-Month Performance Evolution
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ResponsiveContainer width="100%" height={350}>
                <ComposedChart data={monthlyTrendsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" tick={{ fill: "#d1d5db" }} />
                  <YAxis yAxisId="left" tick={{ fill: "#d1d5db" }} />
                  <YAxis yAxisId="right" orientation="right" tick={{ fill: "#d1d5db" }} />
                 <Tooltip
  formatter={(value, name) => {
    if (name === "Cost Savings" && typeof value === "number") {
      return [formatIndianCurrency(value), name];
    }
    return [value, name];
  }}
  contentStyle={{
    backgroundColor: "#1f2937",
    border: "1px solid #374151",
    borderRadius: "8px",
    color: "#f3f4f6",
  }}
/>

                  <Legend />
                  <Bar
                    yAxisId="left"
                    dataKey="productivity"
                    fill={DARK_COLORS.primary}
                    name="Productivity %"
                    radius={[4, 4, 0, 0]}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="scrapRate"
                    stroke={DARK_COLORS.danger}
                    strokeWidth={3}
                    name="Scrap Rate %"
                    dot={{ fill: DARK_COLORS.danger, strokeWidth: 2, r: 6 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Row 2: Automation Impact & Business Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-2xl bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-gray-800/80 to-gray-700/80">
              <CardTitle className="text-gray-100">🤖 Before vs After Automation Impact</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={automationImpactData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="metric" tick={{ fill: "#d1d5db" }} />
                  <YAxis tick={{ fill: "#d1d5db" }} />
                  <Tooltip
  formatter={(value, name) => {
    if (typeof name === "string") {
      const key = name.toLowerCase().replace(/\s/g, "");
      const unit = automationImpactData.find((d) => {
        const beforeKey = "before";
        const afterKey = "after";
        return (
          d.metric.toLowerCase().replace(/\s/g, "") === key &&
          (d[beforeKey] === value || d[afterKey] === value)
        );
      })?.unit || "";

      return [`${value}${unit}`, name];
    }

    return [value, name];
  }}
  contentStyle={{
    backgroundColor: "#1f2937",
    border: "1px solid #374151",
    borderRadius: "8px",
    color: "#f3f4f6",
  }}
/>

                  <Legend />
                  <Bar dataKey="before" fill={DARK_COLORS.danger} name="Before Automation" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="after" fill={DARK_COLORS.success} name="After Automation" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow-2xl bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-gray-800/80 to-gray-700/80">
              <CardTitle className="text-gray-100">
                💰 Annual Savings Breakdown ({formatLargeNumber(savings.annual)})
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={businessImpactData}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    dataKey="value"
                    label={({ name, percentage }) => `${name}: ${percentage}%`}
                  >
                    {businessImpactData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={Object.values(DARK_COLORS)[index]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [
    typeof value === "number" ? formatIndianCurrency(value) : value,
    "",
  ]}
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      border: "1px solid #374151",
                      borderRadius: "8px",
                      color: "#f3f4f6",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* ROI Analysis - Full Width */}
        <Card className="shadow-2xl bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-gray-800/80 to-gray-700/80">
            <CardTitle className="text-gray-100">📈 5-Year ROI Analysis (Indian Rupees)</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart data={roiAnalysisData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="year" tick={{ fill: "#d1d5db" }} />
                <YAxis tick={{ fill: "#d1d5db" }} />
                <Tooltip
                 formatter={(value) => [
    typeof value === "number" ? formatIndianCurrency(value) : value,
    "",
  ]}
                  contentStyle={{
                    backgroundColor: "#1f2937",
                    border: "1px solid #374151",
                    borderRadius: "8px",
                    color: "#f3f4f6",
                  }}
                />
                <Legend />
                <Bar dataKey="investment" fill={DARK_COLORS.danger} name="Annual Investment" radius={[4, 4, 0, 0]} />
                <Bar dataKey="savings" fill={DARK_COLORS.success} name="Annual Savings" radius={[4, 4, 0, 0]} />
                <Line
                  type="monotone"
                  dataKey="cumulative"
                  stroke={DARK_COLORS.primary}
                  strokeWidth={4}
                  name="Cumulative ROI"
                  dot={{ fill: DARK_COLORS.primary, strokeWidth: 2, r: 8 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Cost Savings Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white border-emerald-500/20">
            <CardHeader>
              <CardTitle className="text-center text-lg">Hourly Savings</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold">₹{savings.hourly.toFixed(0)}</div>
              <p className="text-emerald-200 text-sm mt-2">Per hour operational savings</p>
            </CardContent>
          </Card>

          <Card className="shadow-2xl bg-gradient-to-br from-cyan-600 to-cyan-700 text-white border-cyan-500/20">
            <CardHeader>
              <CardTitle className="text-center text-lg">Daily Savings</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold">{formatLargeNumber(savings.daily)}</div>
              <p className="text-cyan-200 text-sm mt-2">Per day operational savings</p>
            </CardContent>
          </Card>

          <Card className="shadow-2xl bg-gradient-to-br from-purple-600 to-purple-700 text-white border-purple-500/20">
            <CardHeader>
              <CardTitle className="text-center text-lg">Monthly Savings</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold">{formatLargeNumber(savings.monthly)}</div>
              <p className="text-purple-200 text-sm mt-2">Per month operational savings</p>
            </CardContent>
          </Card>

          <Card className="shadow-2xl bg-gradient-to-br from-orange-600 to-orange-700 text-white border-orange-500/20">
            <CardHeader>
              <CardTitle className="text-center text-lg">Annual Savings</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-4xl font-bold">{formatLargeNumber(savings.annual)}</div>
              <p className="text-orange-200 text-sm mt-2">Total annual savings</p>
            </CardContent>
          </Card>
        </div>

        {/* Financial Metrics Summary */}
        <Card className="shadow-2xl bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-gray-800/80 to-gray-700/80">
            <CardTitle className="text-gray-100">💎 Key Financial Metrics & Business Case (INR)</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-emerald-900/50 to-emerald-800/50 rounded-lg border border-emerald-500/20">
                <div className="text-3xl font-bold text-emerald-400 mb-2">{roiMetrics.roi}%</div>
                <p className="text-sm font-medium text-gray-300">5-Year ROI</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-cyan-900/50 to-cyan-800/50 rounded-lg border border-cyan-500/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{roiMetrics.payback}</div>
                <p className="text-sm font-medium text-gray-300">Payback Period (Years)</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-900/50 to-purple-800/50 rounded-lg border border-purple-500/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {formatLargeNumber(roiMetrics.totalSavings)}
                </div>
                <p className="text-sm font-medium text-gray-300">Total 5-Year Savings</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-900/50 to-orange-800/50 rounded-lg border border-orange-500/20">
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  {formatLargeNumber(roiMetrics.totalInvestment)}
                </div>
                <p className="text-sm font-medium text-gray-300">Total Investment</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Monthly Cost Breakdown */}
        <Card className="shadow-2xl bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-gray-800/80 to-gray-700/80">
            <CardTitle className="text-gray-100">💸 Monthly Cost Breakdown (INR)</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={costBreakdownData}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    dataKey="cost"
                    label={({ category, percentage }) => `${category}: ${percentage}%`}
                  >
                    {costBreakdownData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={Object.values(DARK_COLORS)[index + 4]} />
                    ))}
                  </Pie>
                 <Tooltip
  formatter={(value) => [
    typeof value === "number" ? formatIndianCurrency(value) : value,
    "",
  ]}
  contentStyle={{
    backgroundColor: "#1f2937",
    border: "1px solid #374151",
    borderRadius: "8px",
    color: "#f3f4f6",
  }}
/>

                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-4">
                {costBreakdownData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded-full`}
                        style={{ backgroundColor: Object.values(DARK_COLORS)[index + 4] }}
                      ></div>
                      <span className="font-medium text-gray-200">{item.category}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg text-gray-100">{formatIndianCurrency(item.cost)}</div>
                      <div className="text-sm text-gray-400">{item.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Summary */}
        <Card className="shadow-2xl bg-gradient-to-r from-emerald-600 via-cyan-600 to-purple-600 text-white border-none">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">🚀 Green Sand Automation Success Story</h2>
            <p className="text-xl mb-6 opacity-90">
              Transforming foundry operations with 76% scrap reduction, {formatLargeNumber(savings.annual)} annual
              savings, and industry-leading efficiency
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold">{roiMetrics.payback} Years</div>
                <div className="opacity-80">Payback Period</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{roiMetrics.roi}%</div>
                <div className="opacity-80">5-Year ROI</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{formatLargeNumber(roiMetrics.totalSavings)}</div>
                <div className="opacity-80">Total 5-Year Savings</div>
              </div>
              <div>
                <div className="text-2xl font-bold">92%</div>
                <div className="opacity-80">Energy Efficiency</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
