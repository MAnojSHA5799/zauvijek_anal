"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TrendingUp, Zap, DollarSign, Percent, Calendar, Search, Download, Filter } from "lucide-react"

const DataAnalyticsViewPage = () => {
   const [searchTerm, setSearchTerm] = useState("")
  // const [sortBy, setSortBy] = useState("savings")

  const processData = [
    {
      id: 1,
      process: "Pattern Making",
      withoutZauvijek: 487.5,
      withZauvijek: 195.0,
      dailySaving: 292.5,
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
      dailySaving: 406.25,
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
      dailySaving: 292.5,
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
      dailySaving: 1381.25,
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
      dailySaving: 437.5,
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
      dailySaving: 406.25,
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
      dailySaving: 406.25,
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
      dailySaving: 243.75,
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
      dailySaving: 146.25,
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
      dailySaving: 73.13,
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
      dailySaving: 56.88,
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
      dailySaving: 32.5,
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
      dailySaving: 48.75,
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
      dailySaving: 73.13,
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
      dailySaving: 40000.0,
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
      dailySaving: 5000.0,
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
      dailySaving: 237.5,
      monthlySaving: 7125.0,
      yearlySaving: 85312.5,
      reduction: 38.0,
      totalKwh: 56.25,
      kwhAfter: 34.88,
      kwhSaving: 21.37,
      monthlyKwh: 16875,
    },
  ]

  // Calculate totals
  const totals = processData.reduce(
    (acc, item) => ({
      dailySaving: acc.dailySaving + item.dailySaving,
      monthlySaving: acc.monthlySaving + item.monthlySaving,
      yearlySaving: acc.yearlySaving + item.yearlySaving,
      kwhSaving: acc.kwhSaving + item.kwhSaving,
      monthlyKwh: acc.monthlyKwh + item.monthlyKwh,
    }),
    { dailySaving: 0, monthlySaving: 0, yearlySaving: 0, kwhSaving: 0, monthlyKwh: 0 },
  )

  const filteredData = processData.filter((item) => item.process.toLowerCase().includes(searchTerm.toLowerCase()))

  const formatCurrency = (amount: number): string => `₹${amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`;

  const formatNumber = (num: number): string => num.toLocaleString("en-IN", { minimumFractionDigits: 2 });


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
  <div className="max-w-7xl mx-auto space-y-6">
    {/* Header */}
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Data Analytics Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">Zauvijek Implementation Impact Analysis</p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" className="bg-white dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700">
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
        <Button variant="outline" className="bg-white dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>
    </div>

    {/* Key Metrics Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card className="bg-gradient-to-r from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 text-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center">
            <DollarSign className="w-4 h-4 mr-2" />
            Total Yearly Savings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatCurrency(totals.yearlySaving)}</div>
          <p className="text-green-100 dark:text-green-200 text-xs mt-1">
            <TrendingUp className="w-3 h-3 inline mr-1" />
            Significant cost reduction achieved
          </p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 text-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            Monthly Savings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatCurrency(totals.monthlySaving)}</div>
          <p className="text-blue-100 dark:text-blue-200 text-xs mt-1">Consistent monthly benefits</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 dark:from-yellow-600 dark:to-yellow-700 text-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center">
            <Zap className="w-4 h-4 mr-2" />
            Energy Saved (kWh)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatNumber(totals.kwhSaving)}</div>
          <p className="text-yellow-100 dark:text-yellow-200 text-xs mt-1">Daily energy conservation</p>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 text-white">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium flex items-center">
            <Percent className="w-4 h-4 mr-2" />
            Processes Optimized
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">17</div>
          <p className="text-purple-100 dark:text-purple-200 text-xs mt-1">Manufacturing processes improved</p>
        </CardContent>
      </Card>
    </div>

    {/* Main Content */}
    {/* Overview Section */}
    <div className="space-y-6">
      {/* Top Performing Processes */}
      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Top Performing Processes by Savings</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300">
            Processes with highest cost reduction impact
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {processData
              .sort((a, b) => b.yearlySaving - a.yearlySaving)
              .slice(0, 5)
              .map((item, index) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-300 font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{item.process}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.reduction}% reduction • {formatNumber(item.kwhSaving)} kWh saved
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-green-600 dark:text-green-400">
                      {formatCurrency(item.yearlySaving)}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">yearly</div>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* Efficiency Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Energy Efficiency Overview</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-900 dark:text-white">Total Energy Reduction</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {formatNumber(totals.kwhSaving)} kWh
              </span>
            </div>
            <Progress value={75} className="h-2 bg-gray-200 dark:bg-gray-700" />
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
                <div className="text-lg font-semibold text-green-600 dark:text-green-400">
                  {formatNumber(totals.monthlyKwh)}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Monthly kWh Saved</div>
              </div>
              <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                  {formatCurrency(totals.dailySaving)}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300">Daily Savings</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Cost Impact Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-900 dark:text-white">Daily Savings</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {formatCurrency(totals.dailySaving)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-900 dark:text-white">Monthly Savings</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {formatCurrency(totals.monthlySaving)}
                </span>
              </div>
              <div className="flex justify-between border-t pt-3 dark:border-gray-700">
                <span className="text-sm font-medium text-gray-900 dark:text-white">Yearly Savings</span>
                <span className="font-bold text-green-600 dark:text-green-400">
                  {formatCurrency(totals.yearlySaving)}
                </span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>ROI Impact:</strong> Significant return on investment with consistent monthly savings across all
                processes.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analysis Section */}
      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Complete Process Analysis</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300">
            Comprehensive breakdown of all manufacturing processes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search processes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
          </div>

          {/* Detailed Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b bg-gray-50 dark:bg-gray-700">
                  <th className="text-left p-3 font-medium text-gray-900 dark:text-white">#</th>
                  <th className="text-left p-3 font-medium text-gray-900 dark:text-white">Process</th>
                  <th className="text-right p-3 font-medium text-gray-900 dark:text-white">Without Zauvijek</th>
                  <th className="text-right p-3 font-medium text-gray-900 dark:text-white">With Zauvijek</th>
                  <th className="text-right p-3 font-medium text-gray-900 dark:text-white">Daily Saving</th>
                  <th className="text-right p-3 font-medium text-gray-900 dark:text-white">Monthly Saving</th>
                  <th className="text-right p-3 font-medium text-gray-900 dark:text-white">Yearly Saving</th>
                  <th className="text-center p-3 font-medium text-gray-900 dark:text-white">Reduction %</th>
                  <th className="text-right p-3 font-medium text-gray-900 dark:text-white">Total kWh</th>
                  <th className="text-right p-3 font-medium text-gray-900 dark:text-white">kWh After</th>
                  <th className="text-right p-3 font-medium text-gray-900 dark:text-white">kWh Saved</th>
                  <th className="text-right p-3 font-medium text-gray-900 dark:text-white">Monthly kWh</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700">
                    <td className="p-3 text-gray-600 dark:text-gray-300">{item.id}</td>
                    <td className="p-3 font-medium text-gray-900 dark:text-white">{item.process}</td>
                    <td className="p-3 text-right text-red-600 dark:text-red-400">
                      {formatCurrency(item.withoutZauvijek)}
                    </td>
                    <td className="p-3 text-right text-green-600 dark:text-green-400">
                      {formatCurrency(item.withZauvijek)}
                    </td>
                    <td className="p-3 text-right font-medium text-green-600 dark:text-green-400">
                      {formatCurrency(item.dailySaving)}
                    </td>
                    <td className="p-3 text-right font-medium text-green-600 dark:text-green-400">
                      {formatCurrency(item.monthlySaving)}
                    </td>
                    <td className="p-3 text-right font-semibold text-green-700 dark:text-green-300">
                      {formatCurrency(item.yearlySaving)}
                    </td>
                    <td className="p-3 text-center">
                      <Badge
                        variant={
                          item.reduction >= 50
                            ? "default"
                            : item.reduction >= 30
                            ? "secondary"
                            : "outline"
                        }
                        className="dark:bg-gray-600 dark:text-white"
                      >
                        {item.reduction}%
                      </Badge>
                    </td>
                    <td className="p-3 text-right text-blue-600 dark:text-blue-400">
                      {formatNumber(item.totalKwh)}
                    </td>
                    <td className="p-3 text-right text-blue-600 dark:text-blue-400">
                      {formatNumber(item.kwhAfter)}
                    </td>
                    <td className="p-3 text-right font-medium text-blue-700 dark:text-blue-300">
                      {formatNumber(item.kwhSaving)}
                    </td>
                    <td className="p-3 text-right text-blue-600 dark:text-blue-400">
                      {formatNumber(item.monthlyKwh)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 bg-gray-100 dark:bg-gray-700 font-semibold">
                  <td className="p-3 dark:text-white" colSpan={4}>
                    TOTAL
                  </td>
                  <td className="p-3 text-right text-green-700 dark:text-green-300">
                    {formatCurrency(totals.dailySaving)}
                  </td>
                  <td className="p-3 text-right text-green-700 dark:text-green-300">
                    {formatCurrency(totals.monthlySaving)}
                  </td>
                  <td className="p-3 text-right text-green-700 dark:text-green-300">
                    {formatCurrency(totals.yearlySaving)}
                  </td>
                  <td className="p-3"></td>
                  <td className="p-3"></td>
                  <td className="p-3"></td>
                  <td className="p-3 text-right text-blue-700 dark:text-blue-300">
                    {formatNumber(totals.kwhSaving)}
                  </td>
                  <td className="p-3 text-right text-blue-700 dark:text-blue-300">
                    {formatNumber(totals.monthlyKwh)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Key Insights Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center text-gray-900 dark:text-white">
              <TrendingUp className="w-5 h-5 mr-2 text-green-600 dark:text-green-400" />
              Key Performance Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500 dark:border-green-400">
              <h4 className="font-semibold text-green-800 dark:text-green-200">Highest Impact Process</h4>
              <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                Scrap Optimization delivers the highest yearly savings of ₹14.6M with 2% reduction rate.
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200">Best Efficiency Gains</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                Pattern Making and Assembly processes show 60% cost reduction - the highest efficiency improvement.
              </p>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-400">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">Energy Conservation</h4>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                Total energy savings of {formatNumber(totals.kwhSaving)} kWh daily across all processes.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-gray-800">
          <CardHeader>
            <CardTitle className="flex items-center text-gray-900 dark:text-white">
              <Percent className="w-5 h-5 mr-2 text-purple-600 dark:text-purple-400" />
              Optimization Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200">Focus Areas</h4>
              <ul className="text-sm text-purple-700 dark:text-purple-300 mt-2 space-y-1">
                <li>• Metal Melting: High volume, moderate efficiency gains</li>
                <li>• Heat Process: Significant absolute savings potential</li>
                <li>• Mold processes: Consistent 55-60% improvements</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200">Implementation Success</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                All 17 processes show positive ROI with average 41% cost reduction across manufacturing operations.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Executive Summary */}
      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Executive Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-b from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {formatCurrency(totals.yearlySaving)}
              </div>
              <div className="text-sm text-green-700 dark:text-green-300 font-medium">Total Annual Savings</div>
              <div className="text-xs text-green-600 dark:text-green-400 mt-1">Across all processes</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {formatNumber(totals.kwhSaving)}
              </div>
              <div className="text-sm text-blue-700 dark:text-blue-300 font-medium">Daily Energy Saved (kWh)</div>
              <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">Environmental impact</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-b from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">41%</div>
              <div className="text-sm text-purple-700 dark:text-purple-300 font-medium">Average Cost Reduction</div>
              <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">Across all processes</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</div>
  )
}

export default DataAnalyticsViewPage
