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
} from "recharts"
import { Leaf, Factory, TrendingDown, Zap, Target, TreePine, Globe, Recycle, Award } from "lucide-react"
import CountUp from "react-countup"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
// import { Progress } from "@/components/ui/progress"

// const COLORS = ["#22C55E", "#EF4444", "#3B82F6", "#F59E0B"]
const GREEN_COLORS = ["#065F46", "#047857", "#059669", "#10B981", "#34D399"]

interface NetZeroData {
  monthlyProduction: number
  energyConsumed: number
  emissionFactor: number
  automationSavings: number
  carbonCredits: number
  netZeroTarget: number
}

const NetZero = () => {
  const [formData, setFormData] = useState<NetZeroData>({
    monthlyProduction: 1500, // tons
    energyConsumed: 1350000, // kWh
    emissionFactor: 0.9, // kg CO₂/kWh
    automationSavings: 10, // percentage
    carbonCredits: 50000, // kg CO₂
    netZeroTarget: 2030, // year
  })

  const handleInputChange = (field: keyof NetZeroData, value: string) => {
    const numValue = Number.parseFloat(value) || 0
    setFormData((prev) => ({ ...prev, [field]: numValue }))
  }

  // Calculations
  const totalCO2Emissions = formData.energyConsumed * formData.emissionFactor // kg CO₂
  const energyPerTon = formData.energyConsumed / formData.monthlyProduction // kWh/ton
  const co2PerTon = totalCO2Emissions / 1000 / formData.monthlyProduction // tons CO₂/ton
  const energySaved = (formData.energyConsumed * formData.automationSavings) / 100
  const co2Reduced = energySaved * formData.emissionFactor
  const netCO2 = totalCO2Emissions - co2Reduced - formData.carbonCredits
  const annualCO2 = totalCO2Emissions * 12
  const treesEquivalent = Math.round(annualCO2 / 20) // 1 tree absorbs 20kg CO₂/year
  const netZeroProgress = Math.min(((co2Reduced + formData.carbonCredits) / totalCO2Emissions) * 100, 100)

  const kpiData = [
    {
      title: "🌍 Net CO₂ Emissions",
      value: netCO2 / 1000,
      suffix: " tons/month",
      colors: "from-red-600 to-red-400",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "♻️ CO₂ Reduced",
      value: co2Reduced / 1000,
      suffix: " tons/month",
      colors: "from-green-600 to-green-400",
      icon: <Recycle className="w-6 h-6" />,
    },
    {
      title: "🔋 Energy Saved",
      value: energySaved / 1000,
      suffix: " MWh/month",
      colors: "from-blue-600 to-blue-400",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "🌳 Trees Equivalent",
      value: treesEquivalent,
      suffix: " trees/year",
      colors: "from-emerald-600 to-emerald-400",
      icon: <TreePine className="w-6 h-6" />,
    },
    {
      title: "🏭 Production",
      value: formData.monthlyProduction,
      suffix: " tons/month",
      colors: "from-gray-600 to-gray-400",
      icon: <Factory className="w-6 h-6" />,
    },
    {
      title: "📈 Net Zero Progress",
      value: netZeroProgress,
      suffix: "%",
      colors: "from-teal-600 to-teal-400",
      icon: <Target className="w-6 h-6" />,
    },
  ]

  const monthlyTrendData = [
    { month: "Jan", emissions: totalCO2Emissions / 1000, reduced: co2Reduced / 1000, net: netCO2 / 1000 },
    { month: "Feb", emissions: totalCO2Emissions / 1000, reduced: co2Reduced / 1000, net: netCO2 / 1000 },
    { month: "Mar", emissions: totalCO2Emissions / 1000, reduced: co2Reduced / 1000, net: netCO2 / 1000 },
    { month: "Apr", emissions: totalCO2Emissions / 1000, reduced: co2Reduced / 1000, net: netCO2 / 1000 },
    { month: "May", emissions: totalCO2Emissions / 1000, reduced: co2Reduced / 1000, net: netCO2 / 1000 },
    { month: "Jun", emissions: totalCO2Emissions / 1000, reduced: co2Reduced / 1000, net: netCO2 / 1000 },
    { month: "Jul", emissions: totalCO2Emissions / 1000, reduced: co2Reduced / 1000, net: netCO2 / 1000 },
    { month: "Aug", emissions: totalCO2Emissions / 1000, reduced: co2Reduced / 1000, net: netCO2 / 1000 },
    { month: "Sep", emissions: totalCO2Emissions / 1000, reduced: co2Reduced / 1000, net: netCO2 / 1000 },
    { month: "Oct", emissions: totalCO2Emissions / 1000, reduced: co2Reduced / 1000, net: netCO2 / 1000 },
    { month: "Nov", emissions: totalCO2Emissions / 1000, reduced: co2Reduced / 1000, net: netCO2 / 1000 },
    { month: "Dec", emissions: totalCO2Emissions / 1000, reduced: co2Reduced / 1000, net: netCO2 / 1000 },
  ]

  const emissionBreakdown = [
    { name: "Metal Melting", value: 45, co2: (totalCO2Emissions * 0.45) / 1000 },
    { name: "Heat Process", value: 25, co2: (totalCO2Emissions * 0.25) / 1000 },
    { name: "Pattern Making", value: 15, co2: (totalCO2Emissions * 0.15) / 1000 },
    { name: "Cooling", value: 10, co2: (totalCO2Emissions * 0.1) / 1000 },
    { name: "Others", value: 5, co2: (totalCO2Emissions * 0.05) / 1000 },
  ]

  // const progressData = [
  //   { name: "Progress", value: netZeroProgress, fill: "#10B981" },
  //   { name: "Remaining", value: 100 - netZeroProgress, fill: "#E5E7EB" },
  // ]

  return (
    <div
      className="min-h-screen text-black dark:text-white p-6 mb-5 transition-colors duration-300"
      style={{
        background: `linear-gradient(135deg, 
          rgba(34, 197, 94, 0.1) 0%, 
          rgba(16, 185, 129, 0.05) 25%, 
          rgba(6, 95, 70, 0.1) 50%, 
          rgba(34, 197, 94, 0.05) 75%, 
          rgba(16, 185, 129, 0.1) 100%),
          `,
      }}
    >
      {/* Floating Leaf Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-green-200 opacity-20 animate-pulse">
          <Leaf className="w-16 h-16 transform rotate-12" />
        </div>
        <div className="absolute top-32 right-20 text-emerald-200 opacity-15 animate-bounce">
          <TreePine className="w-12 h-12 transform -rotate-12" />
        </div>
        <div className="absolute bottom-20 left-32 text-green-300 opacity-10 animate-pulse">
          <Leaf className="w-20 h-20 transform rotate-45" />
        </div>
        <div className="absolute bottom-40 right-16 text-emerald-300 opacity-20 animate-bounce">
          <TreePine className="w-14 h-14 transform rotate-12" />
        </div>
      </div>

      {/* Configuration Form */}
     

      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2 flex items-center justify-center gap-3">
          <Globe className="w-10 h-10 text-green-600" />
          Net Zero Dashboard - Manufacturing Excellence
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Comprehensive carbon footprint analysis and sustainability metrics for Zauvijek Tech
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {kpiData.map((item, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-r ${item.colors} p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 flex gap-4 items-center backdrop-blur-sm`}
          >
            {item.icon}
            <div>
              <div className="text-base font-semibold mb-1">{item.title}</div>
              <div className="text-2xl font-bold">
                <CountUp
                  end={item.value}
                  duration={2}
                  decimals={item.suffix.includes("tons") ? 1 : 0}
                  separator=","
                  suffix={item.suffix}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
 <Card className="mb-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
            <Globe className="w-6 h-6 text-green-600" />
            Net Zero Configuration - Zauvijek Tech
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="monthlyProduction">Monthly Production (tons)</Label>
              <Input
                id="monthlyProduction"
                type="number"
                value={formData.monthlyProduction}
                onChange={(e) => handleInputChange("monthlyProduction", e.target.value)}
                className="bg-white/80 dark:bg-gray-800/80"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="energyConsumed">Energy Consumed (kWh/month)</Label>
              <Input
                id="energyConsumed"
                type="number"
                value={formData.energyConsumed}
                onChange={(e) => handleInputChange("energyConsumed", e.target.value)}
                className="bg-white/80 dark:bg-gray-800/80"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="emissionFactor">Emission Factor (kg CO₂/kWh)</Label>
              <Input
                id="emissionFactor"
                type="number"
                step="0.1"
                value={formData.emissionFactor}
                onChange={(e) => handleInputChange("emissionFactor", e.target.value)}
                className="bg-white/80 dark:bg-gray-800/80"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="automationSavings">Automation Savings (%)</Label>
              <Input
                id="automationSavings"
                type="number"
                value={formData.automationSavings}
                onChange={(e) => handleInputChange("automationSavings", e.target.value)}
                className="bg-white/80 dark:bg-gray-800/80"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="carbonCredits">Carbon Credits (kg CO₂)</Label>
              <Input
                id="carbonCredits"
                type="number"
                value={formData.carbonCredits}
                onChange={(e) => handleInputChange("carbonCredits", e.target.value)}
                className="bg-white/80 dark:bg-gray-800/80"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="netZeroTarget">Net Zero Target Year</Label>
              <Input
                id="netZeroTarget"
                type="number"
                value={formData.netZeroTarget}
                onChange={(e) => handleInputChange("netZeroTarget", e.target.value)}
                className="bg-white/80 dark:bg-gray-800/80"
              />
            </div>
          </div>

          <Separator className="my-6" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-50/80 dark:bg-green-900/20 rounded-lg backdrop-blur-sm">
              <div className="text-sm text-gray-600 dark:text-gray-400">Energy per Ton</div>
              <div className="text-lg font-bold text-green-600 dark:text-green-400">
                {energyPerTon.toFixed(0)} kWh/ton
              </div>
            </div>
            <div className="text-center p-4 bg-blue-50/80 dark:bg-blue-900/20 rounded-lg backdrop-blur-sm">
              <div className="text-sm text-gray-600 dark:text-gray-400">CO₂ per Ton</div>
              <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                {co2PerTon.toFixed(2)} tons CO₂/ton
              </div>
            </div>
            <div className="text-center p-4 bg-red-50/80 dark:bg-red-900/20 rounded-lg backdrop-blur-sm">
              <div className="text-sm text-gray-600 dark:text-gray-400">Total CO₂ Emissions</div>
              <div className="text-lg font-bold text-red-600 dark:text-red-400">
                {(totalCO2Emissions / 1000).toFixed(0)} tons/month
              </div>
            </div>
            <div className="text-center p-4 bg-emerald-50/80 dark:bg-emerald-900/20 rounded-lg backdrop-blur-sm">
              <div className="text-sm text-gray-600 dark:text-gray-400">Annual Tree Equivalent</div>
              <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                {treesEquivalent.toLocaleString()} trees
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Net Zero Progress */}
      <Card className="mb-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
            <Target className="w-6 h-6 text-green-600" />
            Net Zero Progress Tracker - Target {formData.netZeroTarget}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">Progress toward Net Zero</span>
              <span className="text-2xl font-bold text-green-600">{netZeroProgress.toFixed(1)}%</span>
            </div>
            {/* <Progress value={netZeroProgress} className="h-4" /> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-green-50/80 dark:bg-green-900/20 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400">CO₂ Reduced via Automation</div>
                <div className="text-xl font-bold text-green-600">{(co2Reduced / 1000).toFixed(1)} tons</div>
              </div>
              <div className="text-center p-4 bg-blue-50/80 dark:bg-blue-900/20 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400">Carbon Credits</div>
                <div className="text-xl font-bold text-blue-600">{(formData.carbonCredits / 1000).toFixed(1)} tons</div>
              </div>
              <div className="text-center p-4 bg-purple-50/80 dark:bg-purple-900/20 rounded-lg">
                <div className="text-sm text-gray-600 dark:text-gray-400">Remaining to Net Zero</div>
                <div className="text-xl font-bold text-purple-600">{(netCO2 / 1000).toFixed(1)} tons</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 mb-8">
        {/* Monthly Emissions Trend */}
        <div className="lg:col-span-4 bg-white/90 dark:bg-gray-900/90 p-6 rounded-xl shadow-lg backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
            <TrendingDown className="w-6 h-6 text-green-600" />
            Monthly CO₂ Emissions Trend
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart data={monthlyTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis dataKey="month" stroke="#6B7280" fontSize={12} />
              <YAxis stroke="#6B7280" fontSize={12} tickFormatter={(value) => `${value}t`} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "none",
                  borderRadius: "8px",
                  color: "#F9FAFB",
                }}
                formatter={(value, name) => [`${Number(value).toFixed(1)} tons`, name]}
              />
              <Legend />
              <Bar dataKey="emissions" fill="#EF4444" name="Total Emissions" radius={[4, 4, 0, 0]} />
              <Bar dataKey="reduced" fill="#10B981" name="CO₂ Reduced" radius={[4, 4, 0, 0]} />
              <Line
                type="monotone"
                dataKey="net"
                stroke="#3B82F6"
                strokeWidth={3}
                name="Net Emissions"
                dot={{ fill: "#3B82F6", strokeWidth: 2, r: 5 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Emissions Breakdown */}
        <div className="lg:col-span-3 bg-white/90 dark:bg-gray-900/90 p-6 rounded-xl shadow-lg backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">CO₂ Emissions by Process</h2>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={emissionBreakdown}
                dataKey="co2"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                labelLine={false}
              >
                {emissionBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={GREEN_COLORS[index % GREEN_COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "none",
                  borderRadius: "8px",
                  color: "#F9FAFB",
                }}
                formatter={(value) => [`${Number(value).toFixed(1)} tons`, "CO₂ Emissions"]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Automation Impact */}
        <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
              <Award className="w-6 h-6 text-green-600" />
              Automation Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-green-50/80 dark:bg-green-900/20 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">Energy Efficiency Gain</span>
                <span className="font-bold text-green-600">{formData.automationSavings}%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50/80 dark:bg-blue-900/20 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">Monthly Energy Saved</span>
                <span className="font-bold text-blue-600">{(energySaved / 1000).toFixed(0)} MWh</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-emerald-50/80 dark:bg-emerald-900/20 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">CO₂ Reduction</span>
                <span className="font-bold text-emerald-600">{(co2Reduced / 1000).toFixed(1)} tons</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-teal-50/80 dark:bg-teal-900/20 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">Sustainability Score</span>
                <span className="font-bold text-teal-600">A+</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Environmental Impact */}
        <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
              <TreePine className="w-6 h-6 text-green-600" />
              Environmental Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-green-50/80 dark:bg-green-900/20 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">Trees Planted Equivalent</span>
                <span className="font-bold text-green-600">{Math.round(co2Reduced / 20).toLocaleString()}/month</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-emerald-50/80 dark:bg-emerald-900/20 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">Annual Tree Impact</span>
                <span className="font-bold text-emerald-600">{treesEquivalent.toLocaleString()} trees</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-teal-50/80 dark:bg-teal-900/20 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">Carbon Footprint</span>
                <span className="font-bold text-teal-600">Reducing</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-cyan-50/80 dark:bg-cyan-900/20 rounded-lg">
                <span className="text-gray-700 dark:text-gray-300">Net Zero Timeline</span>
                <span className="font-bold text-cyan-600">{formData.netZeroTarget}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default NetZero

