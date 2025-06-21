"use client";

import { useState } from "react";
import {
  ResponsiveContainer,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
} from "recharts";
import { FaIndustry, FaRupeeSign, FaChartLine, FaBolt } from "react-icons/fa";
import { MdSavings, MdCalendarToday } from "react-icons/md";
import CountUp from "react-countup";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const COLORS = ["#3722f5", "#10B981"];

interface MetalMeltingData {
  processName: string;
  withoutZauvijek: number;
  withZauvijek: number;
  dailySaving: number;
  monthlySaving: number;
  yearlySaving: number;
  costReduction: number;
  energyBefore: number;
  energyWithZauvijek: number;
  energySaved: number;
}

export default function MetalMeltingDashboard() {
  const [formData, setFormData] = useState<MetalMeltingData>({
    processName: "Metal Melting",
    withoutZauvijek: 10968.75,
    withZauvijek: 9587.5,
    dailySaving: 1381.25,
    monthlySaving: 41437.5,
    yearlySaving: 503156.25,
    costReduction: 12.6,
    energyBefore: 987.19,
    energyWithZauvijek: 862.88,
    energySaved: 124.31,
  });

  const handleInputChange = (field: keyof MetalMeltingData, value: string) => {
    const numValue = Number.parseFloat(value) || 0;
    setFormData((prev) => {
      const updated = { ...prev, [field]: numValue };

      // Auto-calculate dependent values
      if (field === "withoutZauvijek" || field === "withZauvijek") {
        updated.dailySaving = updated.withoutZauvijek - updated.withZauvijek;
        updated.monthlySaving = updated.dailySaving * 30;
        updated.yearlySaving = updated.dailySaving * 365;
        updated.costReduction =
          ((updated.withoutZauvijek - updated.withZauvijek) /
            updated.withoutZauvijek) *
          100;
      }

      if (field === "energyBefore" || field === "energyWithZauvijek") {
        updated.energySaved = updated.energyBefore - updated.energyWithZauvijek;
      }

      return updated;
    });
  };

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
  ];

  const monthlyTrendData = [
    {
      name: "Jan",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
    },
    {
      name: "Feb",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
    },
    {
      name: "Mar",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
    },
    {
      name: "Apr",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
    },
    {
      name: "May",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
    },
    {
      name: "Jun",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
    },
    {
      name: "Jul",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
    },
    {
      name: "Aug",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
    },
    {
      name: "Sep",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
    },
    {
      name: "Oct",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
    },
    {
      name: "Nov",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
    },
    {
      name: "Dec",
      Manual: formData.withoutZauvijek,
      Zauvijek: formData.withZauvijek,
      Saving: formData.dailySaving,
    },
  ];

  const pieChartData = [
    { name: "Before Zauvijek", value: formData.energyBefore },
    { name: "With Zauvijek", value: formData.energyWithZauvijek },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f1422] text-black dark:text-white p-6 mb-5 transition-colors duration-300">
      {/* Data Input Form */}

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {summaryData.map((item, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-r ${item.colors} p-4 rounded-xl text-white shadow flex gap-3 items-start sm:items-center`}
          >
            {item.icon}
            <div>
              <div className="text-base font-semibold">{item.title}</div>
              <div className="text-sm sm:text-base">
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
            Metal Melting Process Configuration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="processName">Process Name</Label>
              <Input
                id="processName"
                value={formData.processName}
                onChange={(e) =>
                  handleInputChange("processName", e.target.value)
                }
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
                onChange={(e) =>
                  handleInputChange("withoutZauvijek", e.target.value)
                }
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
                onChange={(e) =>
                  handleInputChange("withZauvijek", e.target.value)
                }
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
                onChange={(e) =>
                  handleInputChange("energyBefore", e.target.value)
                }
                className="bg-white dark:bg-[#0f1422]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="energyWithZauvijek">
                Energy With Zauvijek (kWh)
              </Label>
              <Input
                id="energyWithZauvijek"
                type="number"
                step="0.01"
                value={formData.energyWithZauvijek}
                onChange={(e) =>
                  handleInputChange("energyWithZauvijek", e.target.value)
                }
                className="bg-white dark:bg-[#0f1422]"
              />
            </div>

            <div className="space-y-2">
              <Label>Daily Saving (Auto-calculated)</Label>
              <Input
                value={`₹${formData.dailySaving.toFixed(2)}`}
                disabled
                className="bg-gray-100 dark:bg-gray-700"
              />
            </div>
          </div>

          <Separator className="my-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Monthly Saving
              </div>
              <div className="text-lg font-bold text-green-600 dark:text-green-400">
                ₹{formData.monthlySaving.toLocaleString()}
              </div>
            </div>
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Yearly Saving
              </div>
              <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                ₹{formData.yearlySaving.toLocaleString()}
              </div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Cost Reduction
              </div>
              <div className="text-lg font-bold text-purple-600 dark:text-purple-400">
                {formData.costReduction.toFixed(2)}%
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        {/* Monthly Performance Trends */}
        <div className="lg:col-span-2 bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Monthly Performance Trends (Jan - Dec)
          </h2>
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart
              data={monthlyTrendData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              {/* Remove inner grid lines */}
              <CartesianGrid vertical={false} horizontal={false} />

              {/* Axis lines with white tick text */}
              <XAxis
                dataKey="name"
                axisLine={true}
                tickLine={true}
                tick={{ fill: "#ffffff", fontSize: 12 }}
              />
              <YAxis
                axisLine={true}
                tickLine={true}
                tick={{ fill: "#ffffff", fontSize: 12 }}
              />

              <Tooltip />
              <Legend />

              <Bar dataKey="Manual" fill="#3722f5" name="Manual Process" />
              <Bar dataKey="Zauvijek" fill="#3B82F6" name="With Zauvijek" />
              <Line
                type="monotone"
                dataKey="Saving"
                stroke="#10B981"
                name="Savings"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Energy Comparison Pie Chart */}
        <div className="bg-white dark:bg-[#1c2331] p-6  rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Energy Comparison (kWh)
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ value }) => `${value} kWh`}
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [`${value} kWh`, "Energy Consumption"]}
              />
              <Legend
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Savings Trend Line Chart */}
      <div className="bg-white dark:bg-[#1c2331] p-6 mb-4 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          Monthly Savings Trend
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={monthlyTrendData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            {/* Removed CartesianGrid */}
            <XAxis dataKey="name" tick={{ fill: "#ffffff", fontSize: 12 }} />
            <YAxis tick={{ fill: "#ffffff", fontSize: 12 }} />
            <Tooltip
              formatter={(value) => [
                `₹${Number(value).toLocaleString()}`,
                "Daily Savings",
              ]}
            />
            <Line
              type="monotone"
              dataKey="Saving"
              stroke="#10B981"
              strokeWidth={4}
              dot={{ fill: "#10B981", strokeWidth: 0, r: 0 }}
              activeDot={{ r: 8, stroke: "#10B981", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
