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
} from "recharts"
import { FaIndustry, FaRupeeSign, FaChartLine, FaBolt, FaCoins, FaExclamationTriangle } from "react-icons/fa"
import { MdSavings, MdCalendarToday } from "react-icons/md"
import CountUp from "react-countup"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

const COLORS = ["#F97316", "#10B981"]

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
  type: "warning" | "success"
  title: string
  message: string
}

const AlertPopup = ({ isOpen, onClose, type, title, message }: AlertPopupProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow-2xl max-w-md w-full mx-4 animate-bounce">
        <div className="flex items-center gap-3 mb-4">
          {type === "warning" ? (
            <FaExclamationTriangle className="text-3xl text-red-500" />
          ) : (
            <FaCoins className="text-3xl text-yellow-500 animate-spin" />
          )}
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{message}</p>
        <Button onClick={onClose} className="w-full">
          Close
        </Button>
      </div>
    </div>
  )
}

export default function RoughCastingCharts() {
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
    type: "warning" as "warning" | "success",
    title: "",
    message: "",
  })

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

  // Monitor electricity and production changes
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
  }, [formData.energyWithZauvijek, formData.energyBefore, formData.productionRate])

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
    <div className="min-h-screen bg-white dark:bg-[#0f1422] text-black dark:text-white p-6 mb-5 transition-colors duration-300">
      {/* Alert Popup */}
      <AlertPopup
        isOpen={alertState.isOpen}
        onClose={() => setAlertState({ ...alertState, isOpen: false })}
        type={alertState.type}
        title={alertState.title}
        message={alertState.message}
      />

      {/* Data Input Form */}
     

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
            Rough Casting Process Configuration
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
              <Label htmlFor="productionRate">Production Rate (%)</Label>
              <Input
                id="productionRate"
                type="number"
                step="1"
                value={formData.productionRate}
                onChange={(e) => handleInputChange("productionRate", e.target.value)}
                className="bg-white dark:bg-[#0f1422]"
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
              <div className="text-sm text-gray-600 dark:text-gray-400">Average Electricity</div>
              <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                {averageElectricity.toFixed(2)} kWh
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 mb-8">
        {/* Monthly Performance Trends */}
        <div className="lg:col-span-5 bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Monthly Performance Trends - Rough Casting Process
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
              <Line
                type="monotone"
                dataKey="Average"
                stroke="#FF6B35"
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Average Line"
                dot={false}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Energy Comparison Pie Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Energy Consumption (kWh)</h2>
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

          {/* Energy Savings Summary */}
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
    </div>
  )
}
