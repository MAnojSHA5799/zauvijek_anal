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
} from "recharts"
import { Recycle, IndianRupee, TrendingUp, Zap, PiggyBank, Calendar } from "lucide-react"
import CountUp from "react-countup"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

const COLORS = ["#F97316", "#10B981"]

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
}

export default function ScrapOptimizationCharts() {
  const [formData, setFormData] = useState<ScrapOptimizationData>({
    processName: "Scrap Optimization",
    withoutZauvijek: 2000000.0,
    withZauvijek: 1960000.0,
    dailySaving: 40000.0,
    monthlySaving: 1200000.0,
    yearlySaving: 14600000.0,
    costReduction: 2.0,
    energyBefore: 54000.0,
    energyWithZauvijek: 0,
    energySaved: 54000.0,
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

  const summaryData = [
    {
      title: "Process Name",
      value: formData.processName,
      isCurrency: false,
      colors: "from-blue-600 to-blue-500",
      icon: <Recycle className="w-6 h-6" />,
    },
    {
      title: "Without Zauvijek",
      value: formData.withoutZauvijek,
      isCurrency: true,
      colors: "from-blue-700 to-blue-500",
      icon: <IndianRupee className="w-6 h-6" />,
    },
    {
      title: "With Zauvijek",
      value: formData.withZauvijek,
      isCurrency: true,
      colors: "from-sky-700 to-sky-500",
      icon: <IndianRupee className="w-6 h-6" />,
    },
    {
      title: "Avg. Cost Reduction",
      value: formData.costReduction,
      suffix: "%",
      isCurrency: false,
      decimals: 2,
      colors: "from-rose-600 to-red-500",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Energy Saved",
      value: formData.energySaved,
      suffix: " kWh",
      isCurrency: false,
      decimals: 0,
      colors: "from-emerald-600 to-emerald-400",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Total Saving (Per Day)",
      value: formData.dailySaving,
      isCurrency: true,
      decimals: 0,
      colors: "from-yellow-500 to-orange-400",
      icon: <PiggyBank className="w-6 h-6" />,
    },
    {
      title: "Monthly Saving",
      value: formData.monthlySaving,
      isCurrency: true,
      colors: "from-indigo-600 to-indigo-400",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: "Yearly Saving",
      value: formData.yearlySaving,
      isCurrency: true,
      colors: "from-teal-600 to-teal-400",
      icon: <Calendar className="w-6 h-6" />,
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
    { name: "Before Optimization", value: formData.energyBefore },
    { name: "After Optimization", value: formData.energyWithZauvijek },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f1422] text-black dark:text-white p-6 mb-5 transition-colors duration-300">
      {/* Data Input Form */}
      

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Scrap Optimization Analytics</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Performance metrics and cost analysis for the Scrap Optimization manufacturing process
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
<Card className="mb-8 bg-white dark:bg-[#1c2331]">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">
            Scrap Optimization Process Configuration
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
              <Label htmlFor="withoutZauvijek">Monthly Cost Without Zauvijek (₹)</Label>
              <Input
                id="withoutZauvijek"
                type="number"
                step="1000"
                value={formData.withoutZauvijek}
                onChange={(e) => handleInputChange("withoutZauvijek", e.target.value)}
                className="bg-white dark:bg-[#0f1422]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="withZauvijek">Monthly Cost With Zauvijek (₹)</Label>
              <Input
                id="withZauvijek"
                type="number"
                step="1000"
                value={formData.withZauvijek}
                onChange={(e) => handleInputChange("withZauvijek", e.target.value)}
                className="bg-white dark:bg-[#0f1422]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="energyBefore">Energy Before Optimization (kWh)</Label>
              <Input
                id="energyBefore"
                type="number"
                step="1000"
                value={formData.energyBefore}
                onChange={(e) => handleInputChange("energyBefore", e.target.value)}
                className="bg-white dark:bg-[#0f1422]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="energyWithZauvijek">Energy After Optimization (kWh)</Label>
              <Input
                id="energyWithZauvijek"
                type="number"
                step="1000"
                value={formData.energyWithZauvijek}
                onChange={(e) => handleInputChange("energyWithZauvijek", e.target.value)}
                className="bg-white dark:bg-[#0f1422]"
              />
            </div>

            <div className="space-y-2">
              <Label>Daily Saving (Auto-calculated)</Label>
              <Input
                value={`₹${formData.dailySaving.toLocaleString()}`}
                disabled
                className="bg-gray-100 dark:bg-gray-700"
              />
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
      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 mb-8">
        {/* Monthly Performance Trends */}
        <div className="lg:col-span-5 bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Monthly Performance Trends - Scrap Optimization Process
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={monthlyTrendData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis dataKey="name" stroke="#6B7280" fontSize={12} />
              <YAxis stroke="#6B7280" fontSize={12} tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`} />
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

        {/* Energy Comparison Pie Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Energy Usage (kWh)</h2>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={pieChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ name, value, percent }) =>
                  `${name}: ${value.toLocaleString()} kWh (${(percent * 100).toFixed(1)}%)`
                }
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
                formatter={(value) => [`${Number(value).toLocaleString()} kWh`, "Energy Usage"]}
              />
            </PieChart>
          </ResponsiveContainer>

          {/* Energy Savings Summary */}
          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="text-center">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Energy Saved</div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {formData.energySaved.toLocaleString()} kWh
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                100% reduction in scrap processing energy
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Cost Savings Breakdown */}
        <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Cost Savings Breakdown</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <span className="text-gray-700 dark:text-gray-300">Daily Savings</span>
              <span className="font-bold text-blue-600 dark:text-blue-400">
                ₹{formData.dailySaving.toLocaleString()}
              </span>
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
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Scrap Optimization Metrics</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-rose-50 dark:bg-rose-900/20 rounded-lg">
              <span className="text-gray-700 dark:text-gray-300">Cost Reduction</span>
              <span className="font-bold text-rose-600 dark:text-rose-400">{formData.costReduction.toFixed(2)}%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
              <span className="text-gray-700 dark:text-gray-300">Scrap Efficiency</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">98% Optimized</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <span className="text-gray-700 dark:text-gray-300">ROI Impact</span>
              <span className="font-bold text-yellow-600 dark:text-yellow-400">Very High</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scrap Optimization Summary */}
      <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">♻️ Scrap Optimization Impact Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">₹1.46 Cr</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Annual Savings</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">2.00%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Cost Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">54,000 kWh</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Energy Saved</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Scrap Optimized</div>
          </div>
        </div>
      </div>
    </div>
  )
}

