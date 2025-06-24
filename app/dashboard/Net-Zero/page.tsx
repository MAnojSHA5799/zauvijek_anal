// "use client"

// import { useState } from "react"
// import {
//   ResponsiveContainer,
//   Bar,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   Line,
//   PieChart,
//   Pie,
//   Cell,
//   ComposedChart,
// } from "recharts"
// import { Leaf, Factory, TrendingDown, Zap, Target, TreePine, Globe, Recycle, Award } from "lucide-react"
// import CountUp from "react-countup"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Separator } from "@/components/ui/separator"
// // import { Progress } from "@/components/ui/progress"

// // const COLORS = ["#22C55E", "#EF4444", "#3B82F6", "#F59E0B"]
// const GREEN_COLORS = ["#065F46", "#047857", "#059669", "#10B981", "#34D399"]

// interface NetZeroData {
//   monthlyProduction: number
//   energyConsumed: number
//   emissionFactor: number
//   automationSavings: number
//   carbonCredits: number
//   netZeroTarget: number
// }

// const NetZero = () => {
//   const [formData, setFormData] = useState<NetZeroData>({
//     monthlyProduction: 1500, // tons
//     energyConsumed: 1350000, // kWh
//     emissionFactor: 0.9, // kg CO₂/kWh
//     automationSavings: 10, // percentage
//     carbonCredits: 50000, // kg CO₂
//     netZeroTarget: 2030, // year
//   })

//   const handleInputChange = (field: keyof NetZeroData, value: string) => {
//     const numValue = Number.parseFloat(value) || 0
//     setFormData((prev) => ({ ...prev, [field]: numValue }))
//   }

//   // Calculations
//   const totalCO2Emissions = formData.energyConsumed * formData.emissionFactor // kg CO₂
//   const energyPerTon = formData.energyConsumed / formData.monthlyProduction // kWh/ton
//   const co2PerTon = totalCO2Emissions / 1000 / formData.monthlyProduction // tons CO₂/ton
//   const energySaved = (formData.energyConsumed * formData.automationSavings) / 100
//   const co2Reduced = energySaved * formData.emissionFactor
//   const netCO2 = totalCO2Emissions - co2Reduced - formData.carbonCredits
//   const annualCO2 = totalCO2Emissions * 12
//   const treesEquivalent = Math.round(annualCO2 / 20) // 1 tree absorbs 20kg CO₂/year
//   const netZeroProgress = Math.min(((co2Reduced + formData.carbonCredits) / totalCO2Emissions) * 100, 100)

//   const kpiData = [
//     {
//       title: "🌍 Net CO₂ Emissions",
//       value: netCO2 / 1000,
//       suffix: " tons/month",
//       colors: "from-red-600 to-red-400",
//       icon: <Globe className="w-6 h-6" />,
//     },
//     {
//       title: "♻️ CO₂ Reduced",
//       value: co2Reduced / 1000,
//       suffix: " tons/month",
//       colors: "from-green-600 to-green-400",
//       icon: <Recycle className="w-6 h-6" />,
//     },
//     {
//       title: "🔋 Energy Saved",
//       value: energySaved / 1000,
//       suffix: " MWh/month",
//       colors: "from-blue-600 to-blue-400",
//       icon: <Zap className="w-6 h-6" />,
//     },
//     {
//       title: "🌳 Trees Equivalent",
//       value: treesEquivalent,
//       suffix: " trees/year",
//       colors: "from-emerald-600 to-emerald-400",
//       icon: <TreePine className="w-6 h-6" />,
//     },
//     {
//       title: "🏭 Production",
//       value: formData.monthlyProduction,
//       suffix: " tons/month",
//       colors: "from-gray-600 to-gray-400",
//       icon: <Factory className="w-6 h-6" />,
//     },
//     {
//       title: "📈 Net Zero Progress",
//       value: netZeroProgress,
//       suffix: "%",
//       colors: "from-teal-600 to-teal-400",
//       icon: <Target className="w-6 h-6" />,
//     },
//   ]

//   const monthlyTrendData = [
//     { month: "Jan", emissions: totalCO2Emissions / 1000, reduced: co2Reduced / 1000, net: netCO2 / 1000 },
//     { month: "Feb", emissions: totalCO2Emissions / 1000, reduced: co2Reduced / 1000, net: netCO2 / 1000 },
//     { month: "Mar", emissions: totalCO2Emissions / 1000, reduced: co2Reduced / 1000, net: netCO2 / 1000 },
//     { month: "Apr", emissions: totalCO2Emissions / 1000, reduced: co2Reduced / 1000, net: netCO2 / 1000 },
//     { month: "May", emissions: totalCO2Emissions / 1000, reduced: co2Reduced / 1000, net: netCO2 / 1000 },
//     { month: "Jun", emissions: totalCO2Emissions / 1000, reduced: co2Reduced / 1000, net: netCO2 / 1000 },
//     { month: "Jul", emissions: totalCO2Emissions / 1000, reduced: co2Reduced / 1000, net: netCO2 / 1000 },
//     { month: "Aug", emissions: totalCO2Emissions / 1000, reduced: co2Reduced / 1000, net: netCO2 / 1000 },
//     { month: "Sep", emissions: totalCO2Emissions / 1000, reduced: co2Reduced / 1000, net: netCO2 / 1000 },
//     { month: "Oct", emissions: totalCO2Emissions / 1000, reduced: co2Reduced / 1000, net: netCO2 / 1000 },
//     { month: "Nov", emissions: totalCO2Emissions / 1000, reduced: co2Reduced / 1000, net: netCO2 / 1000 },
//     { month: "Dec", emissions: totalCO2Emissions / 1000, reduced: co2Reduced / 1000, net: netCO2 / 1000 },
//   ]

//   const emissionBreakdown = [
//     { name: "Metal Melting", value: 45, co2: (totalCO2Emissions * 0.45) / 1000 },
//     { name: "Heat Process", value: 25, co2: (totalCO2Emissions * 0.25) / 1000 },
//     { name: "Pattern Making", value: 15, co2: (totalCO2Emissions * 0.15) / 1000 },
//     { name: "Cooling", value: 10, co2: (totalCO2Emissions * 0.1) / 1000 },
//     { name: "Others", value: 5, co2: (totalCO2Emissions * 0.05) / 1000 },
//   ]

//   // const progressData = [
//   //   { name: "Progress", value: netZeroProgress, fill: "#10B981" },
//   //   { name: "Remaining", value: 100 - netZeroProgress, fill: "#E5E7EB" },
//   // ]

//   return (
//     <div
//       className="min-h-screen text-black dark:text-white p-6 mb-5 transition-colors duration-300"
//       style={{
//         background: `linear-gradient(135deg,
//           rgba(34, 197, 94, 0.1) 0%,
//           rgba(16, 185, 129, 0.05) 25%,
//           rgba(6, 95, 70, 0.1) 50%,
//           rgba(34, 197, 94, 0.05) 75%,
//           rgba(16, 185, 129, 0.1) 100%),
//           `,
//       }}
//     >
//       {/* Floating Leaf Decorations */}
//       <div className="fixed inset-0 pointer-events-none overflow-hidden">
//         <div className="absolute top-10 left-10 text-green-200 opacity-20 animate-pulse">
//           <Leaf className="w-16 h-16 transform rotate-12" />
//         </div>
//         <div className="absolute top-32 right-20 text-emerald-200 opacity-15 animate-bounce">
//           <TreePine className="w-12 h-12 transform -rotate-12" />
//         </div>
//         <div className="absolute bottom-20 left-32 text-green-300 opacity-10 animate-pulse">
//           <Leaf className="w-20 h-20 transform rotate-45" />
//         </div>
//         <div className="absolute bottom-40 right-16 text-emerald-300 opacity-20 animate-bounce">
//           <TreePine className="w-14 h-14 transform rotate-12" />
//         </div>
//       </div>

//       {/* Configuration Form */}

//       {/* Header */}
//       <div className="mb-6 text-center">
//         <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2 flex items-center justify-center gap-3">
//           <Globe className="w-10 h-10 text-green-600" />
//           Net Zero Dashboard - Manufacturing Excellence
//         </h1>
//         <p className="text-gray-600 dark:text-gray-400 text-lg">
//           Comprehensive carbon footprint analysis and sustainability metrics for Zauvijek Tech
//         </p>
//       </div>

//       {/* KPI Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//         {kpiData.map((item, idx) => (
//           <div
//             key={idx}
//             className={`bg-gradient-to-r ${item.colors} p-6 rounded-xl text-white shadow-lg hover:shadow-xl transition-all duration-300 flex gap-4 items-center backdrop-blur-sm`}
//           >
//             {item.icon}
//             <div>
//               <div className="text-base font-semibold mb-1">{item.title}</div>
//               <div className="text-2xl font-bold">
//                 <CountUp
//                   end={item.value}
//                   duration={2}
//                   decimals={item.suffix.includes("tons") ? 1 : 0}
//                   separator=","
//                   suffix={item.suffix}
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//  <Card className="mb-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-green-200 dark:border-green-800">
//         <CardHeader>
//           <CardTitle className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
//             <Globe className="w-6 h-6 text-green-600" />
//             Net Zero Configuration - Zauvijek Tech
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="space-y-2">
//               <Label htmlFor="monthlyProduction">Monthly Production (tons)</Label>
//               <Input
//                 id="monthlyProduction"
//                 type="number"
//                 value={formData.monthlyProduction}
//                 onChange={(e) => handleInputChange("monthlyProduction", e.target.value)}
//                 className="bg-white/80 dark:bg-gray-800/80"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="energyConsumed">Energy Consumed (kWh/month)</Label>
//               <Input
//                 id="energyConsumed"
//                 type="number"
//                 value={formData.energyConsumed}
//                 onChange={(e) => handleInputChange("energyConsumed", e.target.value)}
//                 className="bg-white/80 dark:bg-gray-800/80"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="emissionFactor">Emission Factor (kg CO₂/kWh)</Label>
//               <Input
//                 id="emissionFactor"
//                 type="number"
//                 step="0.1"
//                 value={formData.emissionFactor}
//                 onChange={(e) => handleInputChange("emissionFactor", e.target.value)}
//                 className="bg-white/80 dark:bg-gray-800/80"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="automationSavings">Automation Savings (%)</Label>
//               <Input
//                 id="automationSavings"
//                 type="number"
//                 value={formData.automationSavings}
//                 onChange={(e) => handleInputChange("automationSavings", e.target.value)}
//                 className="bg-white/80 dark:bg-gray-800/80"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="carbonCredits">Carbon Credits (kg CO₂)</Label>
//               <Input
//                 id="carbonCredits"
//                 type="number"
//                 value={formData.carbonCredits}
//                 onChange={(e) => handleInputChange("carbonCredits", e.target.value)}
//                 className="bg-white/80 dark:bg-gray-800/80"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="netZeroTarget">Net Zero Target Year</Label>
//               <Input
//                 id="netZeroTarget"
//                 type="number"
//                 value={formData.netZeroTarget}
//                 onChange={(e) => handleInputChange("netZeroTarget", e.target.value)}
//                 className="bg-white/80 dark:bg-gray-800/80"
//               />
//             </div>
//           </div>

//           <Separator className="my-6" />

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//             <div className="text-center p-4 bg-green-50/80 dark:bg-green-900/20 rounded-lg backdrop-blur-sm">
//               <div className="text-sm text-gray-600 dark:text-gray-400">Energy per Ton</div>
//               <div className="text-lg font-bold text-green-600 dark:text-green-400">
//                 {energyPerTon.toFixed(0)} kWh/ton
//               </div>
//             </div>
//             <div className="text-center p-4 bg-blue-50/80 dark:bg-blue-900/20 rounded-lg backdrop-blur-sm">
//               <div className="text-sm text-gray-600 dark:text-gray-400">CO₂ per Ton</div>
//               <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
//                 {co2PerTon.toFixed(2)} tons CO₂/ton
//               </div>
//             </div>
//             <div className="text-center p-4 bg-red-50/80 dark:bg-red-900/20 rounded-lg backdrop-blur-sm">
//               <div className="text-sm text-gray-600 dark:text-gray-400">Total CO₂ Emissions</div>
//               <div className="text-lg font-bold text-red-600 dark:text-red-400">
//                 {(totalCO2Emissions / 1000).toFixed(0)} tons/month
//               </div>
//             </div>
//             <div className="text-center p-4 bg-emerald-50/80 dark:bg-emerald-900/20 rounded-lg backdrop-blur-sm">
//               <div className="text-sm text-gray-600 dark:text-gray-400">Annual Tree Equivalent</div>
//               <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
//                 {treesEquivalent.toLocaleString()} trees
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//       {/* Net Zero Progress */}
//       <Card className="mb-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-green-200 dark:border-green-800">
//         <CardHeader>
//           <CardTitle className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
//             <Target className="w-6 h-6 text-green-600" />
//             Net Zero Progress Tracker - Target {formData.netZeroTarget}
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             <div className="flex justify-between items-center">
//               <span className="text-lg font-medium">Progress toward Net Zero</span>
//               <span className="text-2xl font-bold text-green-600">{netZeroProgress.toFixed(1)}%</span>
//             </div>
//             {/* <Progress value={netZeroProgress} className="h-4" /> */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
//               <div className="text-center p-4 bg-green-50/80 dark:bg-green-900/20 rounded-lg">
//                 <div className="text-sm text-gray-600 dark:text-gray-400">CO₂ Reduced via Automation</div>
//                 <div className="text-xl font-bold text-green-600">{(co2Reduced / 1000).toFixed(1)} tons</div>
//               </div>
//               <div className="text-center p-4 bg-blue-50/80 dark:bg-blue-900/20 rounded-lg">
//                 <div className="text-sm text-gray-600 dark:text-gray-400">Carbon Credits</div>
//                 <div className="text-xl font-bold text-blue-600">{(formData.carbonCredits / 1000).toFixed(1)} tons</div>
//               </div>
//               <div className="text-center p-4 bg-purple-50/80 dark:bg-purple-900/20 rounded-lg">
//                 <div className="text-sm text-gray-600 dark:text-gray-400">Remaining to Net Zero</div>
//                 <div className="text-xl font-bold text-purple-600">{(netCO2 / 1000).toFixed(1)} tons</div>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Charts Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 mb-8">
//         {/* Monthly Emissions Trend */}
//         <div className="lg:col-span-4 bg-white/90 dark:bg-gray-900/90 p-6 rounded-xl shadow-lg backdrop-blur-sm">
//           <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center gap-2">
//             <TrendingDown className="w-6 h-6 text-green-600" />
//             Monthly CO₂ Emissions Trend
//           </h2>
//           <ResponsiveContainer width="100%" height={350}>
//             <ComposedChart data={monthlyTrendData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
//               <XAxis dataKey="month" stroke="#6B7280" fontSize={12} />
//               <YAxis stroke="#6B7280" fontSize={12} tickFormatter={(value) => `${value}t`} />
//               <Tooltip
//                 contentStyle={{
//                   backgroundColor: "#1F2937",
//                   border: "none",
//                   borderRadius: "8px",
//                   color: "#F9FAFB",
//                 }}
//                 formatter={(value, name) => [`${Number(value).toFixed(1)} tons`, name]}
//               />
//               <Legend />
//               <Bar dataKey="emissions" fill="#EF4444" name="Total Emissions" radius={[4, 4, 0, 0]} />
//               <Bar dataKey="reduced" fill="#10B981" name="CO₂ Reduced" radius={[4, 4, 0, 0]} />
//               <Line
//                 type="monotone"
//                 dataKey="net"
//                 stroke="#3B82F6"
//                 strokeWidth={3}
//                 name="Net Emissions"
//                 dot={{ fill: "#3B82F6", strokeWidth: 2, r: 5 }}
//               />
//             </ComposedChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Emissions Breakdown */}
//         <div className="lg:col-span-3 bg-white/90 dark:bg-gray-900/90 p-6 rounded-xl shadow-lg backdrop-blur-sm">
//           <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">CO₂ Emissions by Process</h2>
//           <ResponsiveContainer width="100%" height={350}>
//             <PieChart>
//               <Pie
//                 data={emissionBreakdown}
//                 dataKey="co2"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={120}
//                 label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
//                 labelLine={false}
//               >
//                 {emissionBreakdown.map((entry, index) => (
//                   <Cell key={`cell-${index}`} fill={GREEN_COLORS[index % GREEN_COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip
//                 contentStyle={{
//                   backgroundColor: "#1F2937",
//                   border: "none",
//                   borderRadius: "8px",
//                   color: "#F9FAFB",
//                 }}
//                 formatter={(value) => [`${Number(value).toFixed(1)} tons`, "CO₂ Emissions"]}
//               />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Bottom Insights */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Automation Impact */}
//         <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-green-200 dark:border-green-800">
//           <CardHeader>
//             <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
//               <Award className="w-6 h-6 text-green-600" />
//               Automation Impact
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               <div className="flex justify-between items-center p-3 bg-green-50/80 dark:bg-green-900/20 rounded-lg">
//                 <span className="text-gray-700 dark:text-gray-300">Energy Efficiency Gain</span>
//                 <span className="font-bold text-green-600">{formData.automationSavings}%</span>
//               </div>
//               <div className="flex justify-between items-center p-3 bg-blue-50/80 dark:bg-blue-900/20 rounded-lg">
//                 <span className="text-gray-700 dark:text-gray-300">Monthly Energy Saved</span>
//                 <span className="font-bold text-blue-600">{(energySaved / 1000).toFixed(0)} MWh</span>
//               </div>
//               <div className="flex justify-between items-center p-3 bg-emerald-50/80 dark:bg-emerald-900/20 rounded-lg">
//                 <span className="text-gray-700 dark:text-gray-300">CO₂ Reduction</span>
//                 <span className="font-bold text-emerald-600">{(co2Reduced / 1000).toFixed(1)} tons</span>
//               </div>
//               <div className="flex justify-between items-center p-3 bg-teal-50/80 dark:bg-teal-900/20 rounded-lg">
//                 <span className="text-gray-700 dark:text-gray-300">Sustainability Score</span>
//                 <span className="font-bold text-teal-600">A+</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Environmental Impact */}
//         <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-green-200 dark:border-green-800">
//           <CardHeader>
//             <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2">
//               <TreePine className="w-6 h-6 text-green-600" />
//               Environmental Impact
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-4">
//               <div className="flex justify-between items-center p-3 bg-green-50/80 dark:bg-green-900/20 rounded-lg">
//                 <span className="text-gray-700 dark:text-gray-300">Trees Planted Equivalent</span>
//                 <span className="font-bold text-green-600">{Math.round(co2Reduced / 20).toLocaleString()}/month</span>
//               </div>
//               <div className="flex justify-between items-center p-3 bg-emerald-50/80 dark:bg-emerald-900/20 rounded-lg">
//                 <span className="text-gray-700 dark:text-gray-300">Annual Tree Impact</span>
//                 <span className="font-bold text-emerald-600">{treesEquivalent.toLocaleString()} trees</span>
//               </div>
//               <div className="flex justify-between items-center p-3 bg-teal-50/80 dark:bg-teal-900/20 rounded-lg">
//                 <span className="text-gray-700 dark:text-gray-300">Carbon Footprint</span>
//                 <span className="font-bold text-teal-600">Reducing</span>
//               </div>
//               <div className="flex justify-between items-center p-3 bg-cyan-50/80 dark:bg-cyan-900/20 rounded-lg">
//                 <span className="text-gray-700 dark:text-gray-300">Net Zero Timeline</span>
//                 <span className="font-bold text-cyan-600">{formData.netZeroTarget}</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }

// export default NetZero

"use client";
import React from "react";
import { useState } from "react";
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
  Treemap,
  LineChart,
  BarChart,
} from "recharts";
import {
  Leaf,
  TrendingDown,
  Zap,
  Target,
  TreePine,
  Globe,
  Recycle,
  Award,
  Droplets,
  Sun,
  Battery,
  Shield,
  Activity,
  TrendingUp,
  BarChart3,
  PieChartIcon,
  Calendar,
  Clock,
  Settings,
} from "lucide-react";
import CountUp from "react-countup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import CustomTreemapNode from "@/components/CustomTreemapNode";
// Enhanced color palettes for sustainability theme
// const ECO_COLORS = ["#065F46", "#047857", "#059669", "#10B981", "#34D399", "#6EE7B7", "#9DECF9", "#67E8F9"]
// const CARBON_COLORS = ["#1F2937", "#374151", "#4B5563", "#6B7280", "#9CA3AF"]
// const ENERGY_COLORS = ["#F59E0B", "#FBBF24", "#FCD34D", "#FDE68A", "#FEF3C7"]
// const NATURE_COLORS = ["#166534", "#15803D", "#16A34A", "#22C55E", "#4ADE80", "#86EFAC", "#BBF7D0"]

interface NetZeroData {
  monthlyProduction: number;
  energyConsumed: number;
  emissionFactor: number;
  automationSavings: number;
  carbonCredits: number;
  netZeroTarget: number;
  renewableEnergy: number;
  wasteReduction: number;
  waterUsage: number;
  recyclingRate: number;
}

interface CustomTreemapNode {
  depth: number;
  x: number;
  y: number;
  width: number;
  height: number;
  name: string;
  payload: {
    color?: string;
    value?: number;
  };
}
const EnhancedNetZero = () => {
  const [formData, setFormData] = useState<NetZeroData>({
    monthlyProduction: 1500,
    energyConsumed: 1350000,
    emissionFactor: 0.9,
    automationSavings: 10,
    carbonCredits: 50000,
    netZeroTarget: 2030,
    renewableEnergy: 25,
    wasteReduction: 15,
    waterUsage: 45000,
    recyclingRate: 78,
  });

  const handleInputChange = (field: keyof NetZeroData, value: string) => {
    const numValue = Number.parseFloat(value) || 0;
    setFormData((prev) => ({ ...prev, [field]: numValue }));
  };

  // Enhanced calculations
  const totalCO2Emissions = formData.energyConsumed * formData.emissionFactor;
  const energyPerTon = formData.energyConsumed / formData.monthlyProduction;
  // const co2PerTon = totalCO2Emissions / 1000 / formData.monthlyProduction
  const energySaved =
    (formData.energyConsumed * formData.automationSavings) / 100;
  const co2Reduced = energySaved * formData.emissionFactor;
  const renewableEnergySaved =
    (formData.energyConsumed * formData.renewableEnergy) / 100;
  const renewableCO2Saved = renewableEnergySaved * formData.emissionFactor;
  const totalCO2Saved = co2Reduced + renewableCO2Saved;
  const netCO2 = totalCO2Emissions - totalCO2Saved - formData.carbonCredits;
  const annualCO2 = totalCO2Emissions * 12;
  const treesEquivalent = Math.round(annualCO2 / 20);
  const netZeroProgress = Math.min(
    ((totalCO2Saved + formData.carbonCredits) / totalCO2Emissions) * 100,
    100
  );

  // New sustainability scores
  const sustainabilityScore = Math.round(
    (netZeroProgress + formData.recyclingRate + formData.renewableEnergy) / 3
  );
  const carbonIntensity = totalCO2Emissions / 1000 / formData.monthlyProduction;
  const energyEfficiencyScore = Math.round(100 - (energyPerTon / 1000) * 10);
  const environmentalImpactScore = Math.round(
    (formData.wasteReduction +
      formData.recyclingRate +
      formData.renewableEnergy) /
      3
  );
  const waterEfficiency = Math.round(
    100 - formData.waterUsage / formData.monthlyProduction / 50
  );

  const enhancedKpiData = [
    {
      title: "🌍 Net CO₂ Emissions",
      value: netCO2 / 1000,
      suffix: " tons/month",
      colors: "from-red-600 via-red-500 to-orange-400",
      icon: <Globe className="w-6 h-6" />,
      trend: -12.5,
    },
    {
      title: "♻️ Total CO₂ Reduced",
      value: totalCO2Saved / 1000,
      suffix: " tons/month",
      colors: "from-green-600 via-emerald-500 to-teal-400",
      icon: <Recycle className="w-6 h-6" />,
      trend: 18.3,
    },
    {
      title: "🔋 Energy Efficiency",
      value: energyEfficiencyScore,
      suffix: "%",
      colors: "from-blue-600 via-cyan-500 to-sky-400",
      icon: <Zap className="w-6 h-6" />,
      trend: 8.7,
    },
    {
      title: "🌱 Sustainability Score",
      value: sustainabilityScore,
      suffix: "/100",
      colors: "from-emerald-600 via-green-500 to-lime-400",
      icon: <Leaf className="w-6 h-6" />,
      trend: 15.2,
    },
    {
      title: "🌳 Trees Equivalent",
      value: treesEquivalent,
      suffix: " trees/year",
      colors: "from-green-700 via-emerald-600 to-teal-500",
      icon: <TreePine className="w-6 h-6" />,
      trend: 22.1,
    },
    {
      title: "☀️ Renewable Energy",
      value: formData.renewableEnergy,
      suffix: "%",
      colors: "from-yellow-500 via-orange-400 to-amber-300",
      icon: <Sun className="w-6 h-6" />,
      trend: 5.8,
    },
    {
      title: "💧 Water Efficiency",
      value: waterEfficiency,
      suffix: "%",
      colors: "from-blue-500 via-cyan-400 to-teal-300",
      icon: <Droplets className="w-6 h-6" />,
      trend: 11.4,
    },
    {
      title: "📈 Net Zero Progress",
      value: netZeroProgress,
      suffix: "%",
      colors: "from-purple-600 via-violet-500 to-indigo-400",
      icon: <Target className="w-6 h-6" />,
      trend: 9.6,
    },
  ];

  // Enhanced quarterly data
  const quarterlyData = [
    {
      quarter: "Q1 2024",
      emissions: 1215,
      reduced: 135,
      renewable: 337,
      net: 743,
      target: 800,
    },
    {
      quarter: "Q2 2024",
      emissions: 1180,
      reduced: 142,
      renewable: 295,
      net: 743,
      target: 750,
    },
    {
      quarter: "Q3 2024",
      emissions: 1165,
      reduced: 148,
      renewable: 291,
      net: 726,
      target: 700,
    },
    {
      quarter: "Q4 2024",
      emissions: 1150,
      reduced: 155,
      renewable: 287,
      net: 708,
      target: 650,
    },
  ];

  // Sustainability radar data
  const sustainabilityRadar = [
    {
      subject: "Energy Efficiency",
      A: energyEfficiencyScore,
      B: 85,
      fullMark: 100,
    },
    { subject: "Carbon Reduction", A: netZeroProgress, B: 75, fullMark: 100 },
    {
      subject: "Renewable Energy",
      A: formData.renewableEnergy,
      B: 60,
      fullMark: 100,
    },
    {
      subject: "Waste Reduction",
      A: formData.wasteReduction,
      B: 70,
      fullMark: 100,
    },
    { subject: "Water Efficiency", A: waterEfficiency, B: 65, fullMark: 100 },
    {
      subject: "Recycling Rate",
      A: formData.recyclingRate,
      B: 80,
      fullMark: 100,
    },
  ];

  // 24-hour environmental monitoring
  const hourlyEnvironmentalData = Array.from({ length: 24 }, (_, i) => ({
    hour: `${i.toString().padStart(2, "0")}:00`,
    co2: 45 + Math.sin(i * 0.5) * 8 + Math.random() * 5,
    energy: 850 + Math.cos(i * 0.3) * 150 + Math.random() * 50,
    renewable: 20 + Math.sin(i * 0.4) * 15 + Math.random() * 10,
    efficiency: 75 + Math.cos(i * 0.6) * 10 + Math.random() * 8,
  }));

  // Carbon footprint by source
  const carbonFootprintData = [
    {
      name: "Metal Melting",
      value: 45,
      co2: (totalCO2Emissions * 0.45) / 1000,
      color: "#DC2626",
    },
    {
      name: "Heat Process",
      value: 25,
      co2: (totalCO2Emissions * 0.25) / 1000,
      color: "#EA580C",
    },
    {
      name: "Pattern Making",
      value: 15,
      co2: (totalCO2Emissions * 0.15) / 1000,
      color: "#D97706",
    },
    {
      name: "Cooling Systems",
      value: 10,
      co2: (totalCO2Emissions * 0.1) / 1000,
      color: "#CA8A04",
    },
    {
      name: "Transportation",
      value: 5,
      co2: (totalCO2Emissions * 0.05) / 1000,
      color: "#65A30D",
    },
  ];

  // Energy consumption treemap
  const energyTreemapData = [
    { name: "Production", size: 450, value: 450000, color: "#DC2626" },
    { name: "Heating", size: 280, value: 280000, color: "#EA580C" },
    { name: "Cooling", size: 180, value: 180000, color: "#2563EB" },
    { name: "Lighting", size: 120, value: 120000, color: "#7C3AED" },
    { name: "Automation", size: 95, value: 95000, color: "#059669" },
    { name: "Ventilation", size: 75, value: 75000, color: "#0891B2" },
    { name: "Others", size: 50, value: 50000, color: "#6B7280" },
  ];

  // Daily sustainability operations
  const dailyOperationsData = Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    sustainability: 70 + Math.sin(i * 0.2) * 15 + Math.random() * 10,
    carbon: 40 + Math.cos(i * 0.3) * 12 + Math.random() * 8,
    energy: 65 + Math.sin(i * 0.4) * 18 + Math.random() * 12,
    waste: 55 + Math.cos(i * 0.5) * 20 + Math.random() * 15,
  }));

  // Environmental impact scatter
  const environmentalScatterData = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    carbonIntensity: 0.5 + Math.random() * 1.5,
    energyEfficiency: 60 + Math.random() * 40,
    sustainabilityScore: 50 + Math.random() * 50,
    size: 20 + Math.random() * 30,
  }));

  // Net zero timeline projection
  const netZeroTimelineData = [
    { year: 2024, current: netCO2 / 1000, target: 800, renewable: 25 },
    { year: 2025, current: (netCO2 / 1000) * 0.85, target: 680, renewable: 35 },
    { year: 2026, current: (netCO2 / 1000) * 0.7, target: 560, renewable: 45 },
    { year: 2027, current: (netCO2 / 1000) * 0.55, target: 440, renewable: 55 },
    { year: 2028, current: (netCO2 / 1000) * 0.4, target: 320, renewable: 65 },
    { year: 2029, current: (netCO2 / 1000) * 0.25, target: 200, renewable: 75 },
    { year: 2030, current: 0, target: 0, renewable: 85 },
  ];

  return (
    <div
      className="min-h-screen text-black dark:text-white p-6 mb-5 transition-colors duration-300"
      style={{
        background: `linear-gradient(135deg, 
          rgba(34, 197, 94, 0.15) 0%, 
          rgba(16, 185, 129, 0.10) 15%, 
          rgba(6, 95, 70, 0.12) 30%, 
          rgba(34, 197, 94, 0.08) 45%, 
          rgba(16, 185, 129, 0.15) 60%,
          rgba(52, 211, 153, 0.10) 75%,
          rgba(110, 231, 183, 0.08) 90%,
          rgba(187, 247, 208, 0.05) 100%)`,
      }}
    >
      {/* Enhanced floating decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-green-200 opacity-20 animate-pulse">
          <Leaf className="w-16 h-16 transform rotate-12" />
        </div>
        <div className="absolute top-32 right-20 text-emerald-200 opacity-15 animate-bounce">
          <TreePine className="w-12 h-12 transform -rotate-12" />
        </div>
        <div className="absolute top-64 left-1/4 text-teal-200 opacity-10 animate-pulse">
          <Sun className="w-14 h-14 transform rotate-45" />
        </div>
        <div className="absolute bottom-20 left-32 text-green-300 opacity-10 animate-pulse">
          <Leaf className="w-20 h-20 transform rotate-45" />
        </div>
        <div className="absolute bottom-40 right-16 text-emerald-300 opacity-20 animate-bounce">
          <TreePine className="w-14 h-14 transform rotate-12" />
        </div>
        <div className="absolute bottom-64 right-1/3 text-cyan-200 opacity-15 animate-pulse">
          <Droplets className="w-12 h-12 transform -rotate-12" />
        </div>
      </div>

      {/* Enhanced Header */}
      <div className="mb-8 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/5 to-teal-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent mb-3 flex items-center justify-center gap-4">
            <Globe className="w-12 h-12 text-green-600 animate-pulse" />
            Net Zero Excellence Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-xl max-w-4xl mx-auto">
            Advanced sustainability analytics, carbon footprint optimization,
            and comprehensive environmental impact tracking for next-generation
            manufacturing
          </p>
        </div>
      </div>

      {/* Enhanced KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {enhancedKpiData.map((item, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${item.colors} p-6 rounded-2xl text-white shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 flex flex-col gap-3 backdrop-blur-sm border border-white/20`}
            style={{
              background: `linear-gradient(135deg, ${
                item.colors.split(" ")[1]
              }, ${item.colors.split(" ")[3]}, ${item.colors.split(" ")[5]})`,
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                {item.icon}
              </div>
              <div
                className={`text-xs px-2 py-1 rounded-full ${
                  item.trend > 0 ? "bg-green-500/30" : "bg-red-500/30"
                } flex items-center gap-1`}
              >
                {item.trend > 0 ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                {Math.abs(item.trend)}%
              </div>
            </div>
            <div>
              <div className="text-sm font-medium mb-1 opacity-90">
                {item.title}
              </div>
              <div className="text-2xl font-bold">
                <CountUp
                  end={item.value}
                  duration={2.5}
                  decimals={
                    item.suffix.includes("tons") || item.suffix.includes("/100")
                      ? 1
                      : 0
                  }
                  separator=","
                  suffix={item.suffix}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Configuration Form */}
      <Card className="mb-8 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-green-200 dark:border-green-800 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
          <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
            <Settings className="w-8 h-8 text-green-600" />
            Advanced Net Zero Configuration - Zauvijek Tech
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label
                htmlFor="monthlyProduction"
                className="text-sm font-semibold"
              >
                Monthly Production (tons)
              </Label>
              <Input
                id="monthlyProduction"
                type="number"
                value={formData.monthlyProduction}
                onChange={(e) =>
                  handleInputChange("monthlyProduction", e.target.value)
                }
                className="bg-white/80 dark:bg-gray-800/80 border-green-200 focus:border-green-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="energyConsumed" className="text-sm font-semibold">
                Energy Consumed (kWh/month)
              </Label>
              <Input
                id="energyConsumed"
                type="number"
                value={formData.energyConsumed}
                onChange={(e) =>
                  handleInputChange("energyConsumed", e.target.value)
                }
                className="bg-white/80 dark:bg-gray-800/80 border-green-200 focus:border-green-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="emissionFactor" className="text-sm font-semibold">
                Emission Factor (kg CO₂/kWh)
              </Label>
              <Input
                id="emissionFactor"
                type="number"
                step="0.1"
                value={formData.emissionFactor}
                onChange={(e) =>
                  handleInputChange("emissionFactor", e.target.value)
                }
                className="bg-white/80 dark:bg-gray-800/80 border-green-200 focus:border-green-400"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="automationSavings"
                className="text-sm font-semibold"
              >
                Automation Savings (%)
              </Label>
              <Input
                id="automationSavings"
                type="number"
                value={formData.automationSavings}
                onChange={(e) =>
                  handleInputChange("automationSavings", e.target.value)
                }
                className="bg-white/80 dark:bg-gray-800/80 border-green-200 focus:border-green-400"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="renewableEnergy"
                className="text-sm font-semibold"
              >
                Renewable Energy (%)
              </Label>
              <Input
                id="renewableEnergy"
                type="number"
                value={formData.renewableEnergy}
                onChange={(e) =>
                  handleInputChange("renewableEnergy", e.target.value)
                }
                className="bg-white/80 dark:bg-gray-800/80 border-green-200 focus:border-green-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="recyclingRate" className="text-sm font-semibold">
                Recycling Rate (%)
              </Label>
              <Input
                id="recyclingRate"
                type="number"
                value={formData.recyclingRate}
                onChange={(e) =>
                  handleInputChange("recyclingRate", e.target.value)
                }
                className="bg-white/80 dark:bg-gray-800/80 border-green-200 focus:border-green-400"
              />
            </div>
          </div>

          <Separator className="my-8" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl backdrop-blur-sm border border-green-200/50">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Carbon Intensity
              </div>
              <div className="text-xl font-bold text-green-600 dark:text-green-400">
                {carbonIntensity.toFixed(2)} tons/ton
              </div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl backdrop-blur-sm border border-blue-200/50">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Energy Efficiency
              </div>
              <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                {energyEfficiencyScore}%
              </div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl backdrop-blur-sm border border-purple-200/50">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Sustainability Score
              </div>
              <div className="text-xl font-bold text-purple-600 dark:text-purple-400">
                {sustainabilityScore}/100
              </div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl backdrop-blur-sm border border-orange-200/50">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Environmental Impact
              </div>
              <div className="text-xl font-bold text-orange-600 dark:text-orange-400">
                {environmentalImpactScore}/100
              </div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl backdrop-blur-sm border border-teal-200/50">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                Water Efficiency
              </div>
              <div className="text-xl font-bold text-teal-600 dark:text-teal-400">
                {waterEfficiency}%
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Net Zero Progress Tracker */}
      <Card className="mb-8 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-green-200 dark:border-green-800 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
          <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
            <Target className="w-8 h-8 text-green-600" />
            Net Zero Progress Tracker - Target {formData.netZeroTarget}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold">
                Progress toward Net Zero
              </span>
              <span className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                {netZeroProgress.toFixed(1)}%
              </span>
            </div>
            <Progress
              value={netZeroProgress}
              className="h-6 bg-gray-200 dark:bg-gray-700"
            >
              <div
                className="h-full bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${netZeroProgress}%` }}
              />
            </Progress>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200/50">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Automation CO₂ Reduction
                </div>
                <div className="text-2xl font-bold text-green-600">
                  {(co2Reduced / 1000).toFixed(1)} tons
                </div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl border border-yellow-200/50">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Renewable Energy Savings
                </div>
                <div className="text-2xl font-bold text-orange-600">
                  {(renewableCO2Saved / 1000).toFixed(1)} tons
                </div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200/50">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Carbon Credits
                </div>
                <div className="text-2xl font-bold text-blue-600">
                  {(formData.carbonCredits / 1000).toFixed(1)} tons
                </div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl border border-purple-200/50">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Remaining to Net Zero
                </div>
                <div className="text-2xl font-bold text-purple-600">
                  {Math.max(0, netCO2 / 1000).toFixed(1)} tons
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Charts Grid - Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 mb-8">
        {/* Quarterly Net Zero Performance */}
        <div className="lg:col-span-4 bg-white/95 dark:bg-gray-900/95 p-8 rounded-2xl shadow-2xl backdrop-blur-lg border border-green-200/50">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <BarChart3 className="w-7 h-7 text-green-600" />
            Quarterly Net Zero Performance
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
              data={quarterlyData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <defs>
                <linearGradient
                  id="emissionsGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#DC2626" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#DC2626" stopOpacity={0.3} />
                </linearGradient>
                <linearGradient
                  id="reducedGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.3} />
                </linearGradient>
                <linearGradient
                  id="renewableGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.3} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#374151"
                opacity={0.3}
              />
              <XAxis dataKey="quarter" stroke="#6B7280" fontSize={12} />
              <YAxis
                stroke="#6B7280"
                fontSize={12}
                tickFormatter={(value) => `${value}t`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.95)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#F9FAFB",
                  backdropFilter: "blur(10px)",
                }}
                formatter={(value, name) => [
                  `${Number(value).toFixed(1)} tons`,
                  name,
                ]}
              />
              <Legend />
              <Bar
                dataKey="emissions"
                fill="url(#emissionsGradient)"
                name="Total Emissions"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="reduced"
                fill="url(#reducedGradient)"
                name="CO₂ Reduced"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="renewable"
                fill="url(#renewableGradient)"
                name="Renewable Savings"
                radius={[4, 4, 0, 0]}
              />
              <Line
                type="monotone"
                dataKey="net"
                stroke="#3B82F6"
                strokeWidth={4}
                name="Net Emissions"
                dot={{ fill: "#3B82F6", strokeWidth: 3, r: 6 }}
                activeDot={{ r: 8, stroke: "#3B82F6", strokeWidth: 3 }}
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke="#8B5CF6"
                strokeWidth={3}
                strokeDasharray="5 5"
                name="Target"
                dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 5 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Sustainability Performance Radar */}
        <div className="lg:col-span-3 bg-white/95 dark:bg-gray-900/95 p-8 rounded-2xl shadow-2xl backdrop-blur-lg border border-green-200/50">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Activity className="w-7 h-7 text-green-600" />
            Sustainability Performance Radar
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart
              data={sustainabilityRadar}
              margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
            >
              <PolarGrid stroke="#374151" opacity={0.3} />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fontSize: 11, fill: "#6B7280" }}
              />
              <PolarRadiusAxis
                angle={90}
                domain={[0, 100]}
                tick={{ fontSize: 10, fill: "#6B7280" }}
                tickFormatter={(value) => `${value}%`}
              />
              <Radar
                name="Current Performance"
                dataKey="A"
                stroke="#10B981"
                fill="#10B981"
                fillOpacity={0.3}
                strokeWidth={3}
                dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
              />
              <Radar
                name="Industry Average"
                dataKey="B"
                stroke="#6B7280"
                fill="#6B7280"
                fillOpacity={0.1}
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: "#6B7280", strokeWidth: 1, r: 3 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.95)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#F9FAFB",
                  backdropFilter: "blur(10px)",
                }}
                formatter={(value, name) => [
                  `${Number(value).toFixed(1)}%`,
                  name,
                ]}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Main Charts Grid - Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
        {/* 24-Hour Environmental Monitoring */}
        <div className="lg:col-span-3 bg-white/95 dark:bg-gray-900/95 p-8 rounded-2xl shadow-2xl backdrop-blur-lg border border-green-200/50">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Clock className="w-7 h-7 text-green-600" />
            24-Hour Environmental Monitoring
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart
              data={hourlyEnvironmentalData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <defs>
                <linearGradient id="co2Gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#DC2626" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#DC2626" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient
                  id="renewableGradient2"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#374151"
                opacity={0.3}
              />
              <XAxis dataKey="hour" stroke="#6B7280" fontSize={10} />
              <YAxis stroke="#6B7280" fontSize={10} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.95)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#F9FAFB",
                  backdropFilter: "blur(10px)",
                }}
                formatter={(value, name) => [
                  `${Number(value).toFixed(1)}`,
                  name,
                ]}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="co2"
                stackId="1"
                stroke="#DC2626"
                fill="url(#co2Gradient)"
                name="CO₂ Emissions (kg/h)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="renewable"
                stackId="2"
                stroke="#10B981"
                fill="url(#renewableGradient2)"
                name="Renewable Energy (%)"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="efficiency"
                stroke="#8B5CF6"
                strokeWidth={3}
                name="Efficiency (%)"
                dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 3 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Carbon Footprint Breakdown */}
        <div className="lg:col-span-2 bg-white/95 dark:bg-gray-900/95 p-8 rounded-2xl shadow-2xl backdrop-blur-lg border border-green-200/50">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <PieChartIcon className="w-7 h-7 text-green-600" />
            Carbon Footprint by Source
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={carbonFootprintData}
                dataKey="co2"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(1)}%`
                }
                labelLine={false}
                stroke="#fff"
                strokeWidth={2}
              >
                {carbonFootprintData.map((entry, index) => (
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
                formatter={(value) => [
                  `${Number(value).toFixed(1)} tons`,
                  "CO₂ Emissions",
                ]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Main Charts Grid - Row 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 mb-8">
        {/* Energy Consumption Treemap */}
        <div className="lg:col-span-4 bg-white/95 dark:bg-gray-900/95 p-8 rounded-2xl shadow-2xl backdrop-blur-lg border border-green-200/50">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Battery className="w-7 h-7 text-green-600" />
            Energy Consumption Breakdown
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <Treemap
              data={energyTreemapData}
              dataKey="size"
              aspectRatio={4 / 3}
              stroke="#fff"
              content={React.createElement(CustomTreemapNode)}
            />
          </ResponsiveContainer>
        </div>

        {/* Net Zero Timeline Projection */}
        <div className="lg:col-span-3 bg-white/95 dark:bg-gray-900/95 p-8 rounded-2xl shadow-2xl backdrop-blur-lg border border-green-200/50">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Calendar className="w-7 h-7 text-green-600" />
            Net Zero Timeline Projection
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart
              data={netZeroTimelineData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <defs>
                <linearGradient
                  id="currentGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#DC2626" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#DC2626" stopOpacity={0.3} />
                </linearGradient>
                <linearGradient id="targetGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.3} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#374151"
                opacity={0.3}
              />
              <XAxis dataKey="year" stroke="#6B7280" fontSize={12} />
              <YAxis
                stroke="#6B7280"
                fontSize={12}
                tickFormatter={(value) => `${value}t`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.95)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#F9FAFB",
                  backdropFilter: "blur(10px)",
                }}
                formatter={(value, name) => [
                  `${Number(value).toFixed(1)} tons`,
                  name,
                ]}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="current"
                stroke="#DC2626"
                fill="url(#currentGradient)"
                name="Current Emissions"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke="#10B981"
                strokeWidth={3}
                strokeDasharray="5 5"
                name="Target Emissions"
                dot={{ fill: "#10B981", strokeWidth: 2, r: 5 }}
              />
              <Line
                type="monotone"
                dataKey="renewable"
                stroke="#F59E0B"
                strokeWidth={2}
                name="Renewable Energy %"
                dot={{ fill: "#F59E0B", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Main Charts Grid - Row 4 */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
        {/* Daily Sustainability Operations */}
        <div className="lg:col-span-3 bg-white/95 dark:bg-gray-900/95 p-8 rounded-2xl shadow-2xl backdrop-blur-lg border border-green-200/50">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Activity className="w-7 h-7 text-green-600" />
            Daily Sustainability Operations (30 Days)
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={dailyOperationsData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <defs>
                <linearGradient
                  id="sustainabilityGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.4} />
                </linearGradient>
                <linearGradient id="carbonGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.4} />
                </linearGradient>
                <linearGradient
                  id="energyGradient2"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.4} />
                </linearGradient>
                <linearGradient id="wasteGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.4} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#374151"
                opacity={0.3}
              />
              <XAxis dataKey="day" stroke="#6B7280" fontSize={12} />
              <YAxis
                stroke="#6B7280"
                fontSize={12}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.95)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#F9FAFB",
                  backdropFilter: "blur(10px)",
                }}
                formatter={(value, name) => [
                  `${Number(value).toFixed(1)}%`,
                  name,
                ]}
              />
              <Legend />
              <Bar
                dataKey="sustainability"
                fill="url(#sustainabilityGradient)"
                name="Sustainability Score"
                radius={[2, 2, 0, 0]}
              />
              <Bar
                dataKey="carbon"
                fill="url(#carbonGradient)"
                name="Carbon Efficiency"
                radius={[2, 2, 0, 0]}
              />
              <Bar
                dataKey="energy"
                fill="url(#energyGradient2)"
                name="Energy Efficiency"
                radius={[2, 2, 0, 0]}
              />
              <Bar
                dataKey="waste"
                fill="url(#wasteGradient)"
                name="Waste Reduction"
                radius={[2, 2, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Environmental Impact Scatter */}
        <div className="lg:col-span-2 bg-white/95 dark:bg-gray-900/95 p-8 rounded-2xl shadow-2xl backdrop-blur-lg border border-green-200/50">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
            <Globe className="w-7 h-7 text-green-600" />
            Environmental Impact Analysis
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <ScatterChart
              data={environmentalScatterData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#374151"
                opacity={0.3}
              />
              <XAxis
                dataKey="carbonIntensity"
                stroke="#6B7280"
                fontSize={12}
                name="Carbon Intensity"
                tickFormatter={(value) => `${value.toFixed(1)}`}
              />
              <YAxis
                dataKey="energyEfficiency"
                stroke="#6B7280"
                fontSize={12}
                name="Energy Efficiency"
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(31, 41, 55, 0.95)",
                  border: "none",
                  borderRadius: "12px",
                  color: "#F9FAFB",
                  backdropFilter: "blur(10px)",
                }}
                formatter={(value, name) => [
                  name === "carbonIntensity"
                    ? `${Number(value).toFixed(2)} tons/ton`
                    : name === "energyEfficiency"
                    ? `${Number(value).toFixed(1)}%`
                    : `${Number(value).toFixed(1)}`,
                  name === "carbonIntensity"
                    ? "Carbon Intensity"
                    : name === "energyEfficiency"
                    ? "Energy Efficiency"
                    : "Sustainability Score",
                ]}
              />
              <Scatter
                dataKey="sustainabilityScore"
                fill="#10B981"
                fillOpacity={0.7}
                stroke="#059669"
                strokeWidth={2}
              />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Enhanced Bottom Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Automation & Technology Impact */}
        <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-green-200 dark:border-green-800 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
            <CardTitle className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
              <Award className="w-6 h-6 text-green-600" />
              Automation & Technology Impact
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200/50">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Energy Efficiency Gain
                </span>
                <span className="font-bold text-green-600 text-lg">
                  {formData.automationSavings}%
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200/50">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Monthly Energy Saved
                </span>
                <span className="font-bold text-blue-600 text-lg">
                  {(energySaved / 1000).toFixed(0)} MWh
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl border border-emerald-200/50">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  CO₂ Reduction
                </span>
                <span className="font-bold text-emerald-600 text-lg">
                  {(co2Reduced / 1000).toFixed(1)} tons
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl border border-teal-200/50">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Technology Score
                </span>
                <span className="font-bold text-teal-600 text-lg">A+</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl border border-purple-200/50">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Innovation Index
                </span>
                <span className="font-bold text-purple-600 text-lg">
                  95/100
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Environmental Impact & Conservation */}
        <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-green-200 dark:border-green-800 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
            <CardTitle className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
              <TreePine className="w-6 h-6 text-green-600" />
              Environmental Impact & Conservation
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200/50">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Trees Planted Equivalent
                </span>
                <span className="font-bold text-green-600 text-lg">
                  {Math.round(totalCO2Saved / 20).toLocaleString()}/month
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl border border-emerald-200/50">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Annual Tree Impact
                </span>
                <span className="font-bold text-emerald-600 text-lg">
                  {treesEquivalent.toLocaleString()} trees
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-xl border border-teal-200/50">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Carbon Footprint
                </span>
                <span className="font-bold text-teal-600 text-lg">
                  Reducing
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-xl border border-cyan-200/50">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Water Conservation
                </span>
                <span className="font-bold text-cyan-600 text-lg">
                  {waterEfficiency}% Efficient
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-200/50">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Biodiversity Impact
                </span>
                <span className="font-bold text-blue-600 text-lg">
                  Positive
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Renewable Energy & Future Goals */}
        <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-green-200 dark:border-green-800 shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
            <CardTitle className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
              <Sun className="w-6 h-6 text-green-600" />
              Renewable Energy & Future Goals
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl border border-yellow-200/50">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Renewable Energy Usage
                </span>
                <span className="font-bold text-orange-600 text-lg">
                  {formData.renewableEnergy}%
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200/50">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Renewable CO₂ Savings
                </span>
                <span className="font-bold text-green-600 text-lg">
                  {(renewableCO2Saved / 1000).toFixed(1)} tons
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl border border-blue-200/50">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Net Zero Timeline
                </span>
                <span className="font-bold text-blue-600 text-lg">
                  {formData.netZeroTarget}
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-xl border border-purple-200/50">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Sustainability Rating
                </span>
                <span className="font-bold text-purple-600 text-lg">
                  Excellent
                </span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border border-indigo-200/50">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Future Readiness
                </span>
                <span className="font-bold text-indigo-600 text-lg">
                  92/100
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Equipment Health Progress Bars */}
      <Card className="mt-8 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-green-200 dark:border-green-800 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
          <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
            <Shield className="w-8 h-8 text-green-600" />
            Equipment Health & Sustainability Monitoring
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Melting Furnace",
                health: sustainabilityScore,
                efficiency: energyEfficiencyScore,
                color: "from-red-500 to-orange-400",
              },
              {
                name: "Cooling Systems",
                health: waterEfficiency,
                efficiency: 88,
                color: "from-blue-500 to-cyan-400",
              },
              {
                name: "Ventilation",
                health: 92,
                efficiency: 85,
                color: "from-green-500 to-emerald-400",
              },
              {
                name: "Power Systems",
                health: energyEfficiencyScore,
                efficiency: formData.renewableEnergy + 60,
                color: "from-yellow-500 to-orange-400",
              },
              {
                name: "Automation",
                health: 96,
                efficiency: 94,
                color: "from-purple-500 to-violet-400",
              },
              {
                name: "Waste Management",
                health: formData.recyclingRate,
                efficiency: formData.wasteReduction + 70,
                color: "from-emerald-500 to-teal-400",
              },
            ].map((equipment, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/50 rounded-xl border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-800 dark:text-white">
                    {equipment.name}
                  </h3>
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${equipment.color}`}
                  ></div>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 dark:text-gray-400">
                        Sustainability Health
                      </span>
                      <span className="font-medium">{equipment.health}%</span>
                    </div>
                    <Progress value={equipment.health} className="h-2">
                      <div
                        className={`h-full bg-gradient-to-r ${equipment.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${equipment.health}%` }}
                      />
                    </Progress>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 dark:text-gray-400">
                        Efficiency Score
                      </span>
                      <span className="font-medium">
                        {equipment.efficiency}%
                      </span>
                    </div>
                    <Progress value={equipment.efficiency} className="h-2">
                      <div
                        className={`h-full bg-gradient-to-r ${equipment.color} rounded-full transition-all duration-1000 ease-out opacity-70`}
                        style={{ width: `${equipment.efficiency}%` }}
                      />
                    </Progress>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Real-time Sustainability Status */}
      <Card className="mt-8 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-green-200 dark:border-green-800 shadow-2xl">
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
          <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
            <Activity className="w-8 h-8 text-green-600" />
            Real-time Sustainability Status
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Carbon Emissions",
                value: `${(netCO2 / 1000).toFixed(1)} tons`,
                status:
                  netCO2 < 0
                    ? "Excellent"
                    : netCO2 < 500000
                    ? "Good"
                    : "Needs Improvement",
                color:
                  netCO2 < 0
                    ? "text-green-600"
                    : netCO2 < 500000
                    ? "text-yellow-600"
                    : "text-red-600",
                bgColor:
                  netCO2 < 0
                    ? "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
                    : netCO2 < 500000
                    ? "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"
                    : "from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20",
                icon: <Globe className="w-6 h-6" />,
              },
              {
                title: "Energy Efficiency",
                value: `${energyEfficiencyScore}%`,
                status:
                  energyEfficiencyScore > 80
                    ? "Excellent"
                    : energyEfficiencyScore > 60
                    ? "Good"
                    : "Needs Improvement",
                color:
                  energyEfficiencyScore > 80
                    ? "text-green-600"
                    : energyEfficiencyScore > 60
                    ? "text-yellow-600"
                    : "text-red-600",
                bgColor:
                  energyEfficiencyScore > 80
                    ? "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
                    : energyEfficiencyScore > 60
                    ? "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"
                    : "from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20",
                icon: <Zap className="w-6 h-6" />,
              },
              {
                title: "Renewable Energy",
                value: `${formData.renewableEnergy}%`,
                status:
                  formData.renewableEnergy > 50
                    ? "Excellent"
                    : formData.renewableEnergy > 25
                    ? "Good"
                    : "Needs Improvement",
                color:
                  formData.renewableEnergy > 50
                    ? "text-green-600"
                    : formData.renewableEnergy > 25
                    ? "text-yellow-600"
                    : "text-red-600",
                bgColor:
                  formData.renewableEnergy > 50
                    ? "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
                    : formData.renewableEnergy > 25
                    ? "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"
                    : "from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20",
                icon: <Sun className="w-6 h-6" />,
              },
              {
                title: "Waste Management",
                value: `${formData.recyclingRate}%`,
                status:
                  formData.recyclingRate > 75
                    ? "Excellent"
                    : formData.recyclingRate > 50
                    ? "Good"
                    : "Needs Improvement",
                color:
                  formData.recyclingRate > 75
                    ? "text-green-600"
                    : formData.recyclingRate > 50
                    ? "text-yellow-600"
                    : "text-red-600",
                bgColor:
                  formData.recyclingRate > 75
                    ? "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20"
                    : formData.recyclingRate > 50
                    ? "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20"
                    : "from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20",
                icon: <Recycle className="w-6 h-6" />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`p-6 bg-gradient-to-br ${item.bgColor} rounded-xl border border-gray-200/50 dark:border-gray-700/50`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`p-2 rounded-lg ${item.color
                      .replace("text-", "bg-")
                      .replace("-600", "-100")} dark:bg-opacity-20`}
                  >
                    {item.icon}
                  </div>
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${item.color} bg-white/50 dark:bg-gray-800/50`}
                  >
                    {item.status}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {item.title}
                  </div>
                  <div className={`text-2xl font-bold ${item.color}`}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnhancedNetZero;
