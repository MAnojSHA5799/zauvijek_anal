"use client"
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Area,
  AreaChart,
  Pie,
  PieChart,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  ComposedChart,
  ScatterChart,
  Scatter,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { FaIndustry, FaRupeeSign, FaChartLine, FaBolt } from "react-icons/fa"
import CountUp from "react-countup"

// Mold Preparation Data
// const moldPreparationData = {
//   processName: "Mold Preparation",
//   withoutZauvijek: 731.25,
//   withZauvijek: 325.0,
//   saving: 406.25,
//   monthlySaving: 12187.5,
//   yearlySaving: 148281.25,
//   reductionPercent: 55.56,
//   energyBefore: 65.81,
//   energyAfter: 29.25,
//   energySaved: 36.56,
//   totalConsumption: 57113,
// }

// Chart configurations
const chartConfig = {
  withoutZauvijek: { label: "Without Zauvijek", color: "hsl(var(--chart-1))" },
  withZauvijek: { label: "With Zauvijek", color: "hsl(var(--chart-2))" },
  saving: { label: "Savings", color: "hsl(var(--chart-3))" },
  energyBefore: { label: "Energy Before", color: "hsl(var(--chart-4))" },
  energyAfter: { label: "Energy After", color: "hsl(var(--chart-5))" },
}

// Data for different chart types
const costComparisonData = [
  { category: "Without Zauvijek", value: 731.25, fill: "hsl(var(--chart-1))" },
  { category: "With Zauvijek", value: 325.0, fill: "hsl(var(--chart-2))" },
  { category: "Savings", value: 406.25, fill: "hsl(var(--chart-3))" },
]

const monthlyTrendData = Array.from({ length: 12 }, (_, i) => ({
  month: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i],
  savings: 406.25,
  withoutZauvijek: 731.25,
  withZauvijek: 325.0,
}))

const energyData = [
  { type: "Before Zauvijek", value: 65.81, fill: "hsl(var(--chart-4))" },
  { type: "After Zauvijek", value: 29.25, fill: "hsl(var(--chart-5))" },
]

const savingsBreakdownData = [
  { period: "Daily", amount: 406.25, fill: "hsl(var(--chart-1))" },
  { period: "Monthly", amount: 12187.5, fill: "hsl(var(--chart-2))" },
  { period: "Yearly", amount: 148281.25, fill: "hsl(var(--chart-3))" },
]

const radialData = [{ name: "Cost Reduction", value: 55.56, fill: "hsl(var(--chart-1))" }]

const scatterData = Array.from({ length: 12 }, (_, i) => ({
  month: i + 1,
  cost: 731.25 - i * 10, // Simulated cost reduction over time
  efficiency: 55.56 + i * 2, // Simulated efficiency improvement
}))

// const funnelData = [
//   { name: "Original Cost", value: 731.25, fill: "hsl(var(--chart-1))" },
//   { name: "After Optimization", value: 500, fill: "hsl(var(--chart-2))" },
//   { name: "With Zauvijek", value: 325.0, fill: "hsl(var(--chart-3))" },
// ]

// const treemapData = [
//   { name: "Energy Cost", size: 200, fill: "hsl(var(--chart-1))" },
//   { name: "Material Cost", size: 300, fill: "hsl(var(--chart-2))" },
//   { name: "Labor Cost", size: 231.25, fill: "hsl(var(--chart-3))" },
// ]

const radarData = [
  { metric: "Cost Efficiency", value: 55.56, fullMark: 100 },
  { metric: "Energy Savings", value: 55.5, fullMark: 100 },
  { metric: "Time Reduction", value: 45, fullMark: 100 },
  { metric: "Quality", value: 85, fullMark: 100 },
  { metric: "Productivity", value: 70, fullMark: 100 },
  { metric: "ROI", value: 80, fullMark: 100 },
]

const quarterlyData = [
  { quarter: "Q1", savings: 36562.5, target: 40000 },
  { quarter: "Q2", savings: 36562.5, target: 40000 },
  { quarter: "Q3", savings: 36562.5, target: 40000 },
  { quarter: "Q4", savings: 36562.5, target: 40000 },
]

export default function MoldPreparationDashboard() {
  return (
    <div className="min-h-screen bg-background p-6 mb-8 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-white flex items-center justify-center gap-3">
          <FaIndustry className="text-blue-600" />
          Mold Preparation Analytics Dashboard
        </h1>
        <p className="text-muted-foreground">Comprehensive analysis with 15 different chart visualizations</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-600 to-blue-500 text-white border-0">
          <CardContent className="p-4 flex gap-3 items-center">
            <FaRupeeSign className="text-2xl" />
            <div>
              <div className="text-sm font-medium opacity-90">Without Zauvijek</div>
              <div className="text-lg font-bold">
                ₹<CountUp end={731.25} duration={1.8} />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-green-600 to-green-500 text-white border-0">
          <CardContent className="p-4 flex gap-3 items-center">
            <FaRupeeSign className="text-2xl" />
            <div>
              <div className="text-sm font-medium opacity-90">With Zauvijek</div>
              <div className="text-lg font-bold">
                ₹<CountUp end={325.0} duration={1.8} />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-purple-600 to-purple-500 text-white border-0">
          <CardContent className="p-4 flex gap-3 items-center">
            <FaChartLine className="text-2xl" />
            <div>
              <div className="text-sm font-medium opacity-90">Cost Reduction</div>
              <div className="text-lg font-bold">
                <CountUp end={55.56} duration={1.8} decimals={2} />%
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-r from-emerald-600 to-emerald-400 text-white border-0">
          <CardContent className="p-4 flex gap-3 items-center">
            <FaBolt className="text-2xl" />
            <div>
              <div className="text-sm font-medium opacity-90">Energy Saved</div>
              <div className="text-lg font-bold">
                <CountUp end={36.56} duration={1.8} decimals={2} /> kWh
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 1. Bar Chart - Cost Comparison */}
        <Card>
          <CardHeader>
            <CardTitle>Cost Comparison</CardTitle>
            <CardDescription>Basic cost breakdown comparison</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={costComparisonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="value" fill="var(--color-withoutZauvijek)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* 2. Horizontal Bar Chart */}
      

        {/* 3. Line Chart - Monthly Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Trends</CardTitle>
            <CardDescription>Monthly savings trend analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="savings" stroke="var(--color-saving)" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* 4. Area Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Cost Over Time</CardTitle>
            <CardDescription>Filled area showing cost reduction</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area
                    type="monotone"
                    dataKey="withoutZauvijek"
                    stackId="1"
                    stroke="var(--color-withoutZauvijek)"
                    fill="var(--color-withoutZauvijek)"
                  />
                  <Area
                    type="monotone"
                    dataKey="withZauvijek"
                    stackId="1"
                    stroke="var(--color-withZauvijek)"
                    fill="var(--color-withZauvijek)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* 5. Pie Chart - Energy Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Energy Usage</CardTitle>
            <CardDescription>Energy consumption before vs after</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={energyData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {energyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* 6. Donut Chart - Savings Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Savings Breakdown</CardTitle>
            <CardDescription>Daily, monthly, yearly savings</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={savingsBreakdownData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ period, percent }) => `${period}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    innerRadius={40}
                    fill="#8884d8"
                    dataKey="amount"
                  >
                    {savingsBreakdownData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* 7. Radial Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Efficiency</CardTitle>
            <CardDescription>Cost reduction percentage visualization</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" data={radialData}>
                  <RadialBar dataKey="value" cornerRadius={10} fill="var(--color-withoutZauvijek)" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </RadialBarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* 8. Composed Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Multi-metric</CardTitle>
            <CardDescription>Combined bar and line visualization</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={monthlyTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="withZauvijek" fill="var(--color-withZauvijek)" />
                  <Line type="monotone" dataKey="savings" stroke="var(--color-saving)" strokeWidth={2} />
                </ComposedChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* 9. Scatter Plot */}
        <Card>
          <CardHeader>
            <CardTitle>Cost vs Efficiency</CardTitle>
            <CardDescription>Correlation between cost and efficiency</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart data={scatterData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" name="Month" />
                  <YAxis dataKey="cost" name="Cost" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Scatter dataKey="efficiency" fill="var(--color-withoutZauvijek)" />
                </ScatterChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* 10. Radar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
            <CardDescription>Multi-dimensional performance analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="metric" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar
                    name="Performance"
                    dataKey="value"
                    stroke="var(--color-withoutZauvijek)"
                    fill="var(--color-withoutZauvijek)"
                    fillOpacity={0.6}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </RadarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* 11. Stacked Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Quarterly</CardTitle>
            <CardDescription>Quarterly savings vs targets</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={quarterlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="quarter" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="savings" stackId="a" fill="var(--color-saving)" />
                  <Bar dataKey="target" stackId="a" fill="var(--color-withZauvijek)" />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* 12. Progress Gauge */}
        <Card>
          <CardHeader>
            <CardTitle>Cost Reduction</CardTitle>
            <CardDescription>Visual progress indicator</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">55.56%</div>
              <div className="text-muted-foreground">Cost Reduction Achieved</div>
            </div>
            <Progress value={55.56} className="h-4" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>0%</span>
              <span>Target: 60%</span>
              <span>100%</span>
            </div>
          </CardContent>
        </Card>

        {/* 13. Metric Cards with Mini Charts */}
        <Card>
          <CardHeader>
            <CardTitle>KPI Dashboard</CardTitle>
            <CardDescription>Key performance indicators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground">Daily Savings</div>
                <div className="text-xl font-bold text-green-600">₹406.25</div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground">Energy Saved</div>
                <div className="text-xl font-bold text-blue-600">36.56 kWh</div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground">Monthly</div>
                <div className="text-xl font-bold text-purple-600">₹12,187</div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="text-sm text-muted-foreground">Yearly</div>
                <div className="text-xl font-bold text-orange-600">₹1.48L</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 14. Comparison Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Before vs After Comparison</CardTitle>
            <CardDescription>Side-by-side comparison visualization</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 h-[250px]">
              <div className="flex flex-col items-center justify-center bg-red-50 dark:bg-red-950 rounded-lg p-4">
                <div className="text-3xl font-bold text-red-600">₹731.25</div>
                <div className="text-sm text-muted-foreground">Without Zauvijek</div>
                <div className="text-xs text-red-500 mt-2">65.81 kWh Energy</div>
              </div>
              <div className="flex flex-col items-center justify-center bg-green-50 dark:bg-green-950 rounded-lg p-4">
                <div className="text-3xl font-bold text-green-600">₹325.00</div>
                <div className="text-sm text-muted-foreground">With Zauvijek</div>
                <div className="text-xs text-green-500 mt-2">29.25 kWh Energy</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 15. Summary Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Summary Statistics</CardTitle>
            <CardDescription>Complete overview with badges</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Process Efficiency</span>
              <Badge variant="default">Excellent</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Cost Reduction</span>
              <Badge variant="secondary">55.56%</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>Energy Savings</span>
              <Badge variant="outline">36.56 kWh</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span>ROI Status</span>
              <Badge className="bg-green-600">Positive</Badge>
            </div>
            <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950 dark:to-green-950 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">₹148,281</div>
                <div className="text-sm text-muted-foreground">Total Yearly Savings</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
