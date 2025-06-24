"use client"

import { useMemo } from "react"
import { BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Zap, DollarSign, Factory, Leaf } from "lucide-react"

const ParetoAnalyticsviewpage = () => {
  const rawData = useMemo(() => [
    {
      id: 1,
      process: "Pattern Making",
      withoutZauvijek: 487.5,
      withZauvijek: 195.0,
      saving: 292.5,
      monthlySaving: 8775.0,
      yearlySaving: 106762.5,
      reduction: 60.0,
      totalKwh: 43.88,
      kwhAfter: 17.55,
      kwhSaving: 26.33,
      monthlyKwh: 38091,
    },
    {
      id: 2,
      process: "Mold Preparation",
      withoutZauvijek: 731.25,
      withZauvijek: 325.0,
      saving: 406.25,
      monthlySaving: 12187.5,
      yearlySaving: 148281.25,
      reduction: 55.56,
      totalKwh: 65.81,
      kwhAfter: 29.25,
      kwhSaving: 36.56,
      monthlyKwh: 57113,
    },
    {
      id: 3,
      process: "Assembly of Mold & Gating",
      withoutZauvijek: 487.5,
      withZauvijek: 195.0,
      saving: 292.5,
      monthlySaving: 8775.0,
      yearlySaving: 106762.5,
      reduction: 60.0,
      totalKwh: 43.88,
      kwhAfter: 17.55,
      kwhSaving: 26.33,
      monthlyKwh: 38091,
    },
    {
      id: 4,
      process: "Metal Melting",
      withoutZauvijek: 10968.75,
      withZauvijek: 9587.5,
      saving: 1381.25,
      monthlySaving: 41437.5,
      yearlySaving: 503156.25,
      reduction: 12.6,
      totalKwh: 987.19,
      kwhAfter: 862.88,
      kwhSaving: 124.31,
      monthlyKwh: 855722,
    },
    {
      id: 5,
      process: "Tapping",
      withoutZauvijek: 1000.0,
      withZauvijek: 562.5,
      saving: 437.5,
      monthlySaving: 13125.0,
      yearlySaving: 159687.5,
      reduction: 43.75,
      totalKwh: 90,
      kwhAfter: 50.63,
      kwhSaving: 39.38,
      monthlyKwh: 77986,
    },
    {
      id: 6,
      process: "Purification",
      withoutZauvijek: 975.0,
      withZauvijek: 568.75,
      saving: 406.25,
      monthlySaving: 12187.5,
      yearlySaving: 148281.25,
      reduction: 41.67,
      totalKwh: 87.75,
      kwhAfter: 51.19,
      kwhSaving: 36.56,
      monthlyKwh: 76036,
    },
    {
      id: 7,
      process: "Pouring",
      withoutZauvijek: 1137.5,
      withZauvijek: 731.25,
      saving: 406.25,
      monthlySaving: 12187.5,
      yearlySaving: 148281.25,
      reduction: 35.71,
      totalKwh: 102.38,
      kwhAfter: 65.81,
      kwhSaving: 36.56,
      monthlyKwh: 88724,
    },
    {
      id: 8,
      process: "Rough Casting",
      withoutZauvijek: 528.13,
      withZauvijek: 284.38,
      saving: 243.75,
      monthlySaving: 7312.5,
      yearlySaving: 89018.75,
      reduction: 46.16,
      totalKwh: 47.53,
      kwhAfter: 25.59,
      kwhSaving: 21.94,
      monthlyKwh: 41251,
    },
    {
      id: 9,
      process: "Cooling",
      withoutZauvijek: 365.63,
      withZauvijek: 219.38,
      saving: 146.25,
      monthlySaving: 4387.5,
      yearlySaving: 53381.25,
      reduction: 40.0,
      totalKwh: 32.91,
      kwhAfter: 19.74,
      kwhSaving: 13.17,
      monthlyKwh: 28552,
    },
    {
      id: 10,
      process: "Solidification",
      withoutZauvijek: 146.25,
      withZauvijek: 73.13,
      saving: 73.13,
      monthlySaving: 2193.75,
      yearlySaving: 26681.25,
      reduction: 50.0,
      totalKwh: 13.16,
      kwhAfter: 6.58,
      kwhSaving: 6.58,
      monthlyKwh: 11429,
    },
    {
      id: 11,
      process: "Risers",
      withoutZauvijek: 113.75,
      withZauvijek: 56.88,
      saving: 56.88,
      monthlySaving: 1706.25,
      yearlySaving: 20756.25,
      reduction: 50.0,
      totalKwh: 10.24,
      kwhAfter: 5.12,
      kwhSaving: 5.12,
      monthlyKwh: 8889,
    },
    {
      id: 12,
      process: "Shakeout",
      withoutZauvijek: 73.13,
      withZauvijek: 40.63,
      saving: 32.5,
      monthlySaving: 975.0,
      yearlySaving: 11862.5,
      reduction: 44.4,
      totalKwh: 6.58,
      kwhAfter: 3.66,
      kwhSaving: 2.92,
      monthlyKwh: 5712,
    },
    {
      id: 13,
      process: "Mold Breaking (Shot Blasting)",
      withoutZauvijek: 105.63,
      withZauvijek: 56.88,
      saving: 48.75,
      monthlySaving: 1462.5,
      yearlySaving: 17793.75,
      reduction: 46.1,
      totalKwh: 9.51,
      kwhAfter: 5.12,
      kwhSaving: 4.39,
      monthlyKwh: 8341,
    },
    {
      id: 14,
      process: "Fettling & Finishing",
      withoutZauvijek: 178.75,
      withZauvijek: 105.63,
      saving: 73.13,
      monthlySaving: 2193.75,
      yearlySaving: 26681.25,
      reduction: 40.9,
      totalKwh: 16.09,
      kwhAfter: 9.51,
      kwhSaving: 6.58,
      monthlyKwh: 13973,
    },
    {
      id: 15,
      process: "♻ Scrap Optimization (2%)",
      withoutZauvijek: 2000000.0,
      withZauvijek: 1960000.0,
      saving: 40000.0,
      monthlySaving: 1200000.0,
      yearlySaving: 14600000.0,
      reduction: 2.0,
      totalKwh: 54000.0,
      kwhAfter: 0,
      kwhSaving: 54000.0,
      monthlyKwh: 1350000,
    },
    {
      id: 16,
      process: "🔥 Heat Process",
      withoutZauvijek: 12500.0,
      withZauvijek: 7500.0,
      saving: 5000.0,
      monthlySaving: 150000.0,
      yearlySaving: 1800000.0,
      reduction: 40.0,
      totalKwh: 1125.11,
      kwhAfter: 675.07,
      kwhSaving: 450.05,
      monthlyKwh: 13501,
    },
    {
      id: 17,
      process: "Vibration",
      withoutZauvijek: 625.0,
      withZauvijek: 387.5,
      saving: 237.5,
      monthlySaving: 7125.0,
      yearlySaving: 85312.5,
      reduction: 38.0,
      totalKwh: 56.25,
      kwhAfter: 34.88,
      kwhSaving: 21.37,
      monthlyKwh: 16875,
   },
], []);

  const totalProduction = 1500 // tons

  // Calculate Pareto data
  const paretoData = useMemo(() => {
    const sorted = [...rawData].sort((a, b) => b.yearlySaving - a.yearlySaving)
    let cumulativeSaving = 0
    const totalSaving = sorted.reduce((sum, item) => sum + item.yearlySaving, 0)

    return sorted.map((item, index) => {
      cumulativeSaving += item.yearlySaving
      const cumulativePercentage = (cumulativeSaving / totalSaving) * 100
      return {
        ...item,
        rank: index + 1,
        cumulativePercentage,
        shortName: item.process.length > 15 ? item.process.substring(0, 15) + "..." : item.process,
      }
    })
  }, [rawData])

  // Calculate summary metrics
  const summaryMetrics = useMemo(() => {
    const totalYearlySaving = rawData.reduce((sum, item) => sum + item.yearlySaving, 0)
    const totalMonthlySaving = rawData.reduce((sum, item) => sum + item.monthlySaving, 0)
    const totalDailySaving = rawData.reduce((sum, item) => sum + item.saving, 0)
    const totalKwhSaving = rawData.reduce((sum, item) => sum + item.kwhSaving, 0)
    const totalWithoutZauvijek = rawData.reduce((sum, item) => sum + item.withoutZauvijek, 0)
    const totalWithZauvijek = rawData.reduce((sum, item) => sum + item.withZauvijek, 0)
    const overallReduction = ((totalWithoutZauvijek - totalWithZauvijek) / totalWithoutZauvijek) * 100

    return {
      totalYearlySaving,
      totalMonthlySaving,
      totalDailySaving,
      totalKwhSaving,
      overallReduction,
      savingPerTon: totalYearlySaving / totalProduction,
    }
  }, [rawData])

  // Top 5 processes for pie chart
  const topProcesses = paretoData.slice(0, 5)
  const otherProcesses = paretoData.slice(5)
  const otherTotal = otherProcesses.reduce((sum, item) => sum + item.yearlySaving, 0)

  const pieData = [
    ...topProcesses.map((item) => ({ name: item.process, value: item.yearlySaving })),
    { name: "Others", value: otherTotal },
  ]

  const colors = ["#8b5cf6", "#06b6d4", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#06b6d4"]

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f1422] text-black dark:text-white p-6 mb-5 transition-colors duration-300">
  <div className="max-w-7xl mx-auto space-y-6">
    {/* Header */}
    <div className="text-center space-y-2">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-500 dark:to-cyan-500 bg-clip-text text-transparent">
        Pareto Analytics Dashboard
      </h1>
      <p className="text-slate-600 dark:text-slate-400 text-lg">Manufacturing Process Optimization Analysis</p>
      <Badge variant="outline" className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700">
        Total Production: {totalProduction.toLocaleString()} Tons
      </Badge>
    </div>

    {/* Summary Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 text-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            Yearly Savings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">₹{(summaryMetrics.totalYearlySaving / 10000000).toFixed(1)}Cr</div>
          <p className="text-purple-100 dark:text-purple-200 text-xs">₹{summaryMetrics.savingPerTon.toLocaleString()} per ton</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-cyan-500 to-cyan-600 dark:from-cyan-600 dark:to-cyan-700 text-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <TrendingDown className="h-4 w-4" />
            Cost Reduction
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{summaryMetrics.overallReduction.toFixed(1)}%</div>
          <p className="text-cyan-100 dark:text-cyan-200 text-xs">Overall efficiency gain</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 text-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Zap className="h-4 w-4" />
            Energy Saved
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{(summaryMetrics.totalKwhSaving / 1000).toFixed(0)}k kWh</div>
          <p className="text-green-100 dark:text-green-200 text-xs">Daily energy savings</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700 text-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center gap-2">
            <Factory className="h-4 w-4" />
            Monthly Impact
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">₹{(summaryMetrics.totalMonthlySaving / 100000).toFixed(1)}L</div>
          <p className="text-amber-100 dark:text-amber-200 text-xs">Monthly cost savings</p>
        </CardContent>
      </Card>
    </div>

    {/* All Charts Section */}
    <div className="space-y-6">
      {/* Main Pareto Chart */}
      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
            <TrendingUp className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            Pareto Chart - Yearly Savings by Process
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            80/20 analysis showing which processes contribute most to cost savings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              yearlySaving: { label: "Yearly Saving (₹)", color: "hsl(var(--chart-1))" },
              cumulativePercentage: { label: "Cumulative %", color: "hsl(var(--chart-2))" },
            }}
            className="h-[400px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={paretoData.slice(0, 10)} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" strokeOpacity={0.2} />
                <XAxis 
                  dataKey="shortName" 
                  angle={-45} 
                  textAnchor="end" 
                  height={80} 
                  fontSize={10}
                  stroke="#888"
                  strokeOpacity={0.8}
                />
                <YAxis yAxisId="left" stroke="#888" strokeOpacity={0.8} />
                <YAxis yAxisId="right" orientation="right" domain={[0, 100]} stroke="#888" strokeOpacity={0.8} />
                <ChartTooltip 
                  content={<ChartTooltipContent />}
                  contentStyle={{
                    background: 'hsl(var(--background))',
                    borderColor: 'hsl(var(--border))',
                    borderRadius: 'var(--radius)',
                  }}
                />
                <Bar
                  yAxisId="left"
                  dataKey="yearlySaving"
                  fill="#8b5cf6"
                  name="Yearly Saving (₹)"
                  radius={[4, 4, 0, 0]}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="cumulativePercentage"
                  stroke="#06b6d4"
                  strokeWidth={3}
                  dot={{ fill: "#06b6d4", strokeWidth: 2, r: 4 }}
                  name="Cumulative %"
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* Secondary Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Process Distribution Pie Chart */}
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Top Savings Contributors</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Distribution of yearly savings by process
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                value: { label: "Savings", color: "hsl(var(--chart-1))" },
              }}
              className="h-[350px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, percent }) =>
                      `${name.length > 15 ? name.substring(0, 15) + "..." : name}: ${(percent * 100).toFixed(0)}%`
                    }
                    fontSize={10}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                  </Pie>
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                    contentStyle={{
                      background: 'hsl(var(--background))',
                      borderColor: 'hsl(var(--border))',
                      borderRadius: 'var(--radius)',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Top 5 Process Rankings */}
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Top 5 Process Rankings</CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Highest impact processes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topProcesses.map((process, index) => (
                <div 
                  key={process.id} 
                  className="flex items-center justify-between p-3 bg-slate-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <Badge
                      variant="outline"
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ 
                        backgroundColor: colors[index], 
                        color: "white", 
                        border: "none",
                        opacity: 0.9
                      }}
                    >
                      {index + 1}
                    </Badge>
                    <div>
                      <p className="font-medium text-sm text-gray-900 dark:text-white">{process.process}</p>
                      <p className="text-xs text-slate-500 dark:text-gray-400">
                        {process.reduction.toFixed(1)}% reduction
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600 dark:text-green-400">
                      ₹{(process.yearlySaving / 100000).toFixed(1)}L
                    </p>
                    <p className="text-xs text-slate-500 dark:text-gray-400">yearly</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Energy Efficiency and Cost Comparison Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Energy Efficiency Chart */}
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
              <Leaf className="h-5 w-5 text-green-600 dark:text-green-400" />
              Energy Efficiency Analysis
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              kWh savings across top 10 processes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                kwhSaving: { label: "kWh Saved", color: "hsl(var(--chart-3))" },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={paretoData.slice(0, 10)} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" strokeOpacity={0.2} />
                  <XAxis 
                    dataKey="shortName" 
                    angle={-45} 
                    textAnchor="end" 
                    height={80} 
                    fontSize={10}
                    stroke="#888"
                    strokeOpacity={0.8}
                  />
                  <YAxis stroke="#888" strokeOpacity={0.8} />
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                    contentStyle={{
                      background: 'hsl(var(--background))',
                      borderColor: 'hsl(var(--border))',
                      borderRadius: 'var(--radius)',
                    }}
                  />
                  <Bar 
                    dataKey="kwhSaving" 
                    fill="#10b981" 
                    name="kWh Saved" 
                    radius={[4, 4, 0, 0]} 
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Cost Reduction Percentage Chart */}
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
              <TrendingDown className="h-5 w-5 text-red-500 dark:text-red-400" />
              Cost Reduction by Process
            </CardTitle>
            <CardDescription className="text-gray-600 dark:text-gray-400">
              Percentage reduction achieved per process
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                reduction: { label: "Reduction %", color: "hsl(var(--chart-4))" },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={paretoData.slice(0, 10)} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" strokeOpacity={0.2} />
                  <XAxis 
                    dataKey="shortName" 
                    angle={-45} 
                    textAnchor="end" 
                    height={80} 
                    fontSize={10}
                    stroke="#888"
                    strokeOpacity={0.8}
                  />
                  <YAxis domain={[0, 100]} stroke="#888" strokeOpacity={0.8} />
                  <ChartTooltip 
                    content={<ChartTooltipContent />}
                    contentStyle={{
                      background: 'hsl(var(--background))',
                      borderColor: 'hsl(var(--border))',
                      borderRadius: 'var(--radius)',
                    }}
                  />
                  <Bar 
                    dataKey="reduction" 
                    fill="#ef4444" 
                    name="Reduction %" 
                    radius={[4, 4, 0, 0]} 
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Daily vs Monthly Savings Comparison */}
      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-900 dark:text-white">
            <DollarSign className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            Daily vs Monthly Savings Comparison
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Cost savings breakdown across top processes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer
            config={{
              saving: { label: "Daily Saving (₹)", color: "hsl(var(--chart-1))" },
              monthlySaving: { label: "Monthly Saving (₹)", color: "hsl(var(--chart-2))" },
            }}
            className="h-[350px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={paretoData.slice(0, 8)} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" strokeOpacity={0.2} />
                <XAxis 
                  dataKey="shortName" 
                  angle={-45} 
                  textAnchor="end" 
                  height={80} 
                  fontSize={10}
                  stroke="#888"
                  strokeOpacity={0.8}
                />
                <YAxis yAxisId="left" stroke="#888" strokeOpacity={0.8} />
                <YAxis yAxisId="right" orientation="right" stroke="#888" strokeOpacity={0.8} />
                <ChartTooltip 
                  content={<ChartTooltipContent />}
                  contentStyle={{
                    background: 'hsl(var(--background))',
                    borderColor: 'hsl(var(--border))',
                    borderRadius: 'var(--radius)',
                  }}
                />
                <Bar 
                  yAxisId="left" 
                  dataKey="saving" 
                  fill="#8b5cf6" 
                  name="Daily Saving (₹)" 
                  radius={[4, 4, 0, 0]} 
                />
                <Bar
                  yAxisId="right"
                  dataKey="monthlySaving"
                  fill="#06b6d4"
                  name="Monthly Saving (₹)"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>

    {/* 80/20 Insight */}
    <Card className="bg-gradient-to-r from-purple-50 to-cyan-50 dark:from-purple-900/30 dark:to-cyan-900/30 border-purple-200 dark:border-purple-800">
      <CardHeader>
        <CardTitle className="text-purple-800 dark:text-purple-200">🎯 Pareto Insight (80/20 Rule)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {paretoData.findIndex((item) => item.cumulativePercentage >= 80) + 1}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">processes contribute to 80% of savings</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">
              ₹{(paretoData.slice(0, 3).reduce((sum, item) => sum + item.yearlySaving, 0) / 10000000).toFixed(1)}Cr
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">saved by top 3 processes alone</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {(
                (paretoData.slice(0, 3).reduce((sum, item) => sum + item.yearlySaving, 0) /
                  summaryMetrics.totalYearlySaving) *
                100
              ).toFixed(0)}
              %
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">of total savings from top 3</p>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</div>
  )
}

export default ParetoAnalyticsviewpage
