"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Zap, DollarSign, Recycle, Flame, Activity } from "lucide-react"
import '../../dashboard/fishbone-override.css'
const FishboneChart = dynamic(() => import("fishbone-chart"), { ssr: false })

// Complete foundry processes data structure
const foundryProcesses = {
  "Pattern Making": {
    currentExpense: 13,
    costFactors: ["Manual Errors", "Material Waste", "Time Consumption"],
    technology: "High-End CAD Software with AI Integration",
    instruments: ["3D Scanners", "High-Resolution Cameras"],
    analytics: "Dimensional deviation alerts",
    monitoring: "Tolerance tracking",
    impact: "Reduced rework and waste",
    withoutZauvijek: { kwh: 3, cost: 1950 },
    withZauvijek: { kwh: 1.2, cost: 780 },
    savings: 1170,
    reductionPercent: 60,
    icon: "🎨",
    fishboneData: {
      "Pattern Making Issues": {
        "Manual Process": ["Hand sketching errors", "Inconsistent measurements"],
        Material: ["Wood degradation", "Metal corrosion"],
        Tools: ["Outdated equipment", "Worn instruments"],
        Skills: ["Inexperienced workers", "Lack of training"],
        Environment: ["Poor lighting", "Temperature variations"],
      },
    },
  },
  "Mold Preparation": {
    currentExpense: 32.5,
    costFactors: ["Sand moisture/packing issues", "Material overuse"],
    technology: "Digital Moisture Meters, IoT Sensors",
    instruments: ["Grain size sensors", "Moisture sensors"],
    analytics: "Sand quality analytics",
    monitoring: "Real-time correction alerts",
    impact: "Consistent mold quality",
    withoutZauvijek: { kwh: 4.5, cost: 2925 },
    withZauvijek: { kwh: 2, cost: 1300 },
    savings: 1625,
    reductionPercent: 55.56,
    icon: "🏗️",
    fishboneData: {
      "Mold Quality Issues": {
        "Sand Properties": ["Moisture content", "Grain size variation"],
        Mixing: ["Uneven distribution", "Insufficient binding"],
        Equipment: ["Worn mixers", "Faulty sensors"],
        Process: ["Incorrect ratios", "Poor compaction"],
        Environment: ["Humidity changes", "Temperature fluctuations"],
      },
    },
  },
  "Assembly of Mold & Gating": {
    currentExpense: 0,
    costFactors: ["Misalignment issues", "Gating defects", "Manual cycle time increase"],
    technology: "AI-Based Gating Simulation",
    instruments: ["Digital Calipers", "Laser Tools"],
    analytics: "Gating dimension analytics",
    monitoring: "Tolerance alert system",
    impact: "Correct assembly verification",
    withoutZauvijek: { kwh: 3, cost: 1950 },
    withZauvijek: { kwh: 1.2, cost: 780 },
    savings: 1170,
    reductionPercent: 60,
    icon: "🔧",
    fishboneData: {
      "Assembly & Gating Issues": {
        Alignment: ["Mold misalignment", "Core displacement"],
        "Gating System": ["Wrong gate size", "Poor runner design"],
        Tools: ["Worn clamps", "Faulty fixtures"],
        Process: ["Incorrect sequence", "Poor handling"],
        Quality: ["Surface defects", "Dimensional errors"],
      },
    },
  },
  "Metal Melting": {
    currentExpense: 4225,
    costFactors: ["High energy consumption", "Impurities", "Furnace inefficiencies"],
    technology: "AI Heat Cycle Optimization, Spectrometers",
    instruments: ["IoT Temperature Sensors", "Energy Monitors"],
    analytics: "AI monitoring of furnace cycles",
    monitoring: "Alerts on energy spikes",
    impact: "Reduced impurity and energy costs",
    withoutZauvijek: { kwh: 700, cost: 43875 },
    withZauvijek: { kwh: 600, cost: 38350 },
    savings: 5525,
    reductionPercent: 12.6,
    icon: "🔥",
    fishboneData: {
      "Metal Quality Issues": {
        Temperature: ["Overheating", "Uneven heating"],
        Furnace: ["Old equipment", "Poor insulation"],
        "Raw Material": ["Contaminated metal", "Wrong composition"],
        Process: ["Incorrect timing", "Poor stirring"],
        Maintenance: ["Dirty furnace", "Worn components"],
      },
    },
  },
  Tapping: {
    currentExpense: 13,
    costFactors: ["Timing issues", "Material spillage"],
    technology: "AI-Based Tapping Prediction",
    instruments: ["Flow Sensors", "Temperature Sensors", "High-Speed Cameras"],
    analytics: "Tapping analytics",
    monitoring: "Visual confirmation alerts",
    impact: "Reduced impurity and losses",
    withoutZauvijek: { kwh: 3.2, cost: 4000 },
    withZauvijek: { kwh: 1.8, cost: 2250 },
    savings: 1750,
    reductionPercent: 43.75,
    icon: "🚰",
    fishboneData: {
      "Tapping Problems": {
        Timing: ["Too early tapping", "Delayed tapping"],
        Flow: ["Irregular flow", "Spillage"],
        Equipment: ["Worn tap holes", "Faulty valves"],
        Temperature: ["Metal too hot", "Inconsistent temp"],
        Operator: ["Poor technique", "Inexperience"],
      },
    },
  },
  Purification: {
    currentExpense: 65,
    costFactors: ["Entrapped gases", "Porosity"],
    technology: "AI Monitoring, Spectrometers, IoT Degassing",
    instruments: ["Spectrometers", "Gas Monitors"],
    analytics: "Composition/impurity analytics",
    monitoring: "Degassing control alerts",
    impact: "Cleaner metal production",
    withoutZauvijek: { kwh: 70, cost: 3900 },
    withZauvijek: { kwh: 40, cost: 2275 },
    savings: 1625,
    reductionPercent: 41.67,
    icon: "🧪",
    fishboneData: {
      "Purification Issues": {
        "Gas Content": ["Hydrogen porosity", "Nitrogen inclusions"],
        Degassing: ["Insufficient time", "Wrong flux"],
        Equipment: ["Faulty degassing unit", "Poor stirring"],
        Process: ["Wrong temperature", "Inadequate mixing"],
        Materials: ["Contaminated flux", "Wet additives"],
      },
    },
  },
  Pouring: {
    currentExpense: 13,
    costFactors: ["Inconsistent flow rates", "Temperature drops"],
    technology: "AI-Controlled Pouring Systems",
    instruments: ["Digital Flow Meters", "Thermal Cameras"],
    analytics: "Pour speed analytics",
    monitoring: "Real-time adjustment triggers",
    impact: "Reduced turbulence and defects",
    withoutZauvijek: { kwh: 80, cost: 4550 },
    withZauvijek: { kwh: 50, cost: 2925 },
    savings: 1625,
    reductionPercent: 35.71,
    icon: "🌊",
    fishboneData: {
      "Pouring Defects": {
        "Flow Control": ["Irregular speed", "Turbulent flow"],
        Temperature: ["Heat loss", "Inconsistent temp"],
        Equipment: ["Worn ladles", "Faulty valves"],
        Technique: ["Poor positioning", "Wrong angle"],
        Timing: ["Too fast", "Too slow"],
      },
    },
  },
  "Rough Casting": {
    currentExpense: 0,
    costFactors: ["Defects from poor fill", "Inconsistent surface quality"],
    technology: "AI-Based Image Recognition",
    instruments: ["High-Resolution Cameras", "Scanners"],
    analytics: "Defect analytics",
    monitoring: "Instant alerts on surface flaws",
    impact: "Reduced rework and improved quality",
    withoutZauvijek: { kwh: 35, cost: 2112.5 },
    withZauvijek: { kwh: 20, cost: 1137.5 },
    savings: 975,
    reductionPercent: 46.16,
    icon: "🏭",
    fishboneData: {
      "Rough Casting Issues": {
        "Surface Quality": ["Rough surface", "Cold shuts"],
        Filling: ["Incomplete fill", "Air entrapment"],
        "Mold Design": ["Poor gating", "Inadequate venting"],
        Process: ["Wrong pour rate", "Temperature issues"],
        Material: ["Metal composition", "Inclusion defects"],
      },
    },
  },
  Cooling: {
    currentExpense: 130,
    costFactors: ["Uncontrolled cooling", "Structural defects"],
    technology: "IoT-Connected Cooling Controllers",
    instruments: ["Temperature Sensors"],
    analytics: "Cooling rate analysis",
    monitoring: "Alerts for deviations",
    impact: "Stable cooling and improved microstructure",
    withoutZauvijek: { kwh: 25, cost: 1462.5 },
    withZauvijek: { kwh: 15, cost: 877.5 },
    savings: 585,
    reductionPercent: 40,
    icon: "❄️",
    fishboneData: {
      "Cooling Problems": {
        "Rate Control": ["Too fast cooling", "Uneven cooling"],
        Environment: ["Ambient temperature", "Air circulation"],
        Equipment: ["Faulty fans", "Poor ventilation"],
        Process: ["Wrong timing", "Inadequate monitoring"],
        Material: ["Thermal mass", "Heat retention"],
      },
    },
  },
  Solidification: {
    currentExpense: 130,
    costFactors: ["Shrinkage voids", "Defective solidification"],
    technology: "AI-Based Simulation",
    instruments: ["Thermocouples for temperature gradient mapping"],
    analytics: "Predictive analytics for shrinkage",
    monitoring: "Alerts to ensure uniform solidification",
    impact: "Reduced porosity and defect rates",
    withoutZauvijek: { kwh: 10, cost: 585 },
    withZauvijek: { kwh: 5, cost: 292.5 },
    savings: 292.5,
    reductionPercent: 50,
    icon: "🧊",
    fishboneData: {
      "Solidification Issues": {
        "Cooling Rate": ["Uneven solidification", "Hot spots"],
        Shrinkage: ["Porosity", "Voids"],
        Design: ["Poor riser design", "Inadequate feeding"],
        Process: ["Wrong cooling sequence", "Temperature gradients"],
        Material: ["Alloy composition", "Grain structure"],
      },
    },
  },
  Risers: {
    currentExpense: 0,
    costFactors: ["Improper riser design", "Oversizing"],
    technology: "AI Thermal Mapping and Simulation",
    instruments: ["High-speed thermal imaging"],
    analytics: "Performance feedback to design",
    monitoring: "Alerts for correction",
    impact: "Reduced shrinkage and metal waste",
    withoutZauvijek: { kwh: 8, cost: 455 },
    withZauvijek: { kwh: 4, cost: 227.5 },
    savings: 227.5,
    reductionPercent: 50,
    icon: "📏",
    fishboneData: {
      "Riser Issues": {
        Design: ["Wrong size", "Poor placement"],
        "Feed Path": ["Blocked feeding", "Insufficient volume"],
        "Thermal Management": ["Heat loss", "Cooling sequence"],
        Process: ["Early solidification", "Poor connection"],
        Material: ["Metal flow", "Solidification pattern"],
      },
    },
  },
  Shakeout: {
    currentExpense: 65,
    costFactors: ["Casting damage", "Residual sand"],
    technology: "Vibration Sensors and High-Speed Cameras",
    instruments: ["Mold break monitoring"],
    analytics: "Performance analytics",
    monitoring: "Alerts for shakeout calibration",
    impact: "Lower cleanup and defect cost",
    withoutZauvijek: { kwh: 5, cost: 292.5 },
    withZauvijek: { kwh: 3, cost: 162.5 },
    savings: 130,
    reductionPercent: 44.4,
    icon: "🏗️",
    fishboneData: {
      "Shakeout Problems": {
        Vibration: ["Excessive force", "Insufficient vibration"],
        Timing: ["Too early", "Too late"],
        Equipment: ["Worn shakeout unit", "Poor maintenance"],
        Process: ["Wrong sequence", "Inadequate cooling"],
        "Sand Removal": ["Residual sand", "Core removal issues"],
      },
    },
  },
  "Mold Breaking (Shot Blasting)": {
    currentExpense: 33,
    costFactors: ["Over/under blasting", "Abrasive overuse"],
    technology: "AI Surface Inspection",
    instruments: ["Roughness testers", "Imaging systems"],
    analytics: "Surface analytics",
    monitoring: "Alerts for adjustment",
    impact: "Improved finish, reduced damage",
    withoutZauvijek: { kwh: 7, cost: 422.5 },
    withZauvijek: { kwh: 4, cost: 227.5 },
    savings: 195,
    reductionPercent: 46.1,
    icon: "💥",
    fishboneData: {
      "Shot Blasting Issues": {
        "Blast Pressure": ["Too high pressure", "Insufficient pressure"],
        Abrasive: ["Wrong grit size", "Contaminated media"],
        Equipment: ["Worn nozzles", "Poor maintenance"],
        Process: ["Wrong angle", "Inadequate coverage"],
        "Surface Quality": ["Over blasting", "Uneven finish"],
      },
    },
  },
  "Fettling & Finishing": {
    currentExpense: 1950,
    costFactors: ["Excess removal", "Inconsistent finish"],
    technology: "AI Image Processing, IoT CNC Monitoring",
    instruments: ["3D scanners", "Tool wear monitoring"],
    analytics: "Analytics for machining consistency",
    monitoring: "Maintenance alert systems",
    impact: "Reduced tool downtime and scrap",
    withoutZauvijek: { kwh: 12, cost: 715 },
    withZauvijek: { kwh: 7, cost: 422.5 },
    savings: 292.5,
    reductionPercent: 40.9,
    icon: "✨",
    fishboneData: {
      "Finishing Issues": {
        "Surface Quality": ["Rough finish", "Inconsistent texture"],
        Tools: ["Worn cutting tools", "Wrong tool selection"],
        Machine: ["Vibration", "Poor calibration"],
        Process: ["Wrong parameters", "Inadequate coolant"],
        Operator: ["Skill level", "Experience"],
      },
    },
  },
  "♻ Scrap Optimization (2%)": {
    currentExpense: 850,
    costFactors: ["High scrap rate", "Material waste", "Recycling inefficiency"],
    technology: "AI Waste Analytics & Recycling Optimization",
    instruments: ["Material analyzers", "Sorting systems"],
    analytics: "Scrap composition analytics",
    monitoring: "Waste tracking alerts",
    impact: "Reduced material waste and improved recycling",
    withoutZauvijek: { kwh: 45, cost: 2700 },
    withZauvijek: { kwh: 25, cost: 1500 },
    savings: 1200,
    reductionPercent: 44.4,
    icon: "♻️",
    fishboneData: {
      "Scrap & Waste Issues": {
        "Material Loss": ["Excessive trimming", "Defective castings"],
        Recycling: ["Poor sorting", "Contamination"],
        Process: ["Inefficient methods", "Poor planning"],
        Quality: ["Reject rate", "Rework requirements"],
        Management: ["Poor tracking", "Inadequate controls"],
      },
    },
  },
  "🔥 Heat Process": {
    currentExpense: 2800,
    costFactors: ["Energy inefficiency", "Heat loss", "Temperature control issues"],
    technology: "Advanced Heat Management & AI Control",
    instruments: ["Thermal imaging", "Heat recovery systems"],
    analytics: "Heat distribution analytics",
    monitoring: "Energy consumption alerts",
    impact: "Optimized heat utilization and energy savings",
    withoutZauvijek: { kwh: 180, cost: 10800 },
    withZauvijek: { kwh: 120, cost: 7200 },
    savings: 3600,
    reductionPercent: 33.3,
    icon: "🔥",
    fishboneData: {
      "Heat Process Issues": {
        "Energy Loss": ["Poor insulation", "Heat leakage"],
        Control: ["Temperature variations", "Poor regulation"],
        Equipment: ["Inefficient burners", "Old heating systems"],
        Process: ["Wrong heating cycles", "Excessive heating"],
        Recovery: ["No heat recovery", "Waste heat loss"],
      },
    },
  },
  Vibration: {
    currentExpense: 420,
    costFactors: ["Equipment vibration", "Structural damage", "Quality issues"],
    technology: "IoT Vibration Monitoring & AI Analysis",
    instruments: ["Vibration sensors", "Accelerometers"],
    analytics: "Vibration pattern analysis",
    monitoring: "Real-time vibration alerts",
    impact: "Reduced equipment wear and improved quality",
    withoutZauvijek: { kwh: 15, cost: 900 },
    withZauvijek: { kwh: 8, cost: 480 },
    savings: 420,
    reductionPercent: 46.7,
    icon: "📳",
    fishboneData: {
      "Vibration Issues": {
        Equipment: ["Unbalanced machinery", "Worn bearings"],
        Foundation: ["Poor mounting", "Structural issues"],
        Process: ["Excessive speeds", "Resonance"],
        Maintenance: ["Poor lubrication", "Misalignment"],
        Environment: ["External vibrations", "Ground conditions"],
      },
    },
  },
}

export default function InteractiveFishboneDashboard() {
  const [selectedProcess, setSelectedProcess] = useState("Pattern Making")
  const currentData = foundryProcesses[selectedProcess as keyof typeof foundryProcesses]

  const formatCurrency = (amount: number) => `₹${amount.toLocaleString()}`

  // Calculate total savings across all processes
  const totalSavings = Object.values(foundryProcesses).reduce((sum, process) => sum + process.savings, 0)
  const averageReduction =
    Object.values(foundryProcesses).reduce((sum, process) => sum + process.reductionPercent, 0) /
    Object.keys(foundryProcesses).length

  const getProcessIcon = (processName: string) => {
    const process = foundryProcesses[processName as keyof typeof foundryProcesses]
    return process?.icon || "⚙️"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Complete Foundry Process Analysis Dashboard
          </h1>
          <p className="text-slate-300 text-lg">
            Interactive Fishbone Diagram with ROI Impact Analysis - All 17 Processes
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-green-400" />
              <span>Total Savings: {formatCurrency(totalSavings)}</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-blue-400" />
              <span>Avg. Reduction: {averageReduction.toFixed(1)}%</span>
            </div>
          </div>
        </div>

        {/* Process Selector */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-cyan-400 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Select Process ({Object.keys(foundryProcesses).length} Available)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={selectedProcess} onValueChange={setSelectedProcess}>
              <SelectTrigger className="w-full bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="Choose a foundry process" />
              </SelectTrigger>
              <SelectContent className="bg-slate-700 border-slate-600 max-h-60">
                {Object.keys(foundryProcesses).map((process) => (
                  <SelectItem key={process} value={process} className="text-white hover:bg-slate-600">
                    <span className="flex items-center gap-2">
                      <span>{getProcessIcon(process)}</span>
                      <span>{process}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Current Process Header */}
        <Card className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border-cyan-700">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="text-6xl mb-2">{currentData.icon}</div>
              <h2 className="text-3xl font-bold text-cyan-400">{selectedProcess}</h2>
              <p className="text-slate-300 mt-2">Current Expense: ₹{currentData.currentExpense} per unit</p>
            </div>
          </CardContent>
        </Card>

        {/* ROI Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-red-900/50 to-red-800/50 border-red-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-200 text-sm">Current Cost</p>
                  <p className="text-2xl font-bold text-white">{formatCurrency(currentData.withoutZauvijek.cost)}</p>
                  <p className="text-xs text-red-300">{currentData.withoutZauvijek.kwh} kWh</p>
                </div>
                <TrendingUp className="w-8 h-8 text-red-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-900/50 to-green-800/50 border-green-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-200 text-sm">With Zauvijek</p>
                  <p className="text-2xl font-bold text-white">{formatCurrency(currentData.withZauvijek.cost)}</p>
                  <p className="text-xs text-green-300">{currentData.withZauvijek.kwh} kWh</p>
                </div>
                <TrendingDown className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 border-blue-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-200 text-sm">Total Savings</p>
                  <p className="text-2xl font-bold text-white">{formatCurrency(currentData.savings)}</p>
                  <p className="text-xs text-blue-300">Per Process</p>
                </div>
                <DollarSign className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 border-purple-700">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-200 text-sm">Reduction</p>
                  <p className="text-2xl font-bold text-white">{currentData.reductionPercent}%</p>
                  <p className="text-xs text-purple-300">Energy Saved</p>
                </div>
                <Badge className="bg-purple-600 text-white">
                  {currentData.reductionPercent > 50 ? "High" : currentData.reductionPercent > 30 ? "Medium" : "Low"}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Process Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-cyan-400">Process Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">Cost/Loss Factors:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentData.costFactors.map((factor, index) => (
                    <Badge key={index} variant="destructive" className="bg-red-900/50 text-red-200">
                      {factor}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-green-400 mb-2">Zauvijek Technology:</h4>
                <p className="text-slate-300">{currentData.technology}</p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Recommended Instruments:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentData.instruments.map((instrument, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-900/50 text-blue-200">
                      {instrument}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardHeader>
              <CardTitle className="text-cyan-400">Impact Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">Data Analytics:</h4>
                <p className="text-slate-300">{currentData.analytics}</p>
              </div>

              <div>
                <h4 className="font-semibold text-orange-400 mb-2">Monitoring:</h4>
                <p className="text-slate-300">{currentData.monitoring}</p>
              </div>

              <div>
                <h4 className="font-semibold text-green-400 mb-2">Expected Impact:</h4>
                <p className="text-slate-300">{currentData.impact}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                  <p className="text-sm text-slate-400">Energy Before</p>
                  <p className="text-lg font-bold text-red-400">{currentData.withoutZauvijek.kwh} kWh</p>
                </div>
                <div className="text-center p-3 bg-slate-700/50 rounded-lg">
                  <p className="text-sm text-slate-400">Energy After</p>
                  <p className="text-lg font-bold text-green-400">{currentData.withZauvijek.kwh} kWh</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fishbone Diagram */}
      <Card
  className="border border-slate-700"
  style={{ backgroundColor: "black", opacity: 0.5 }}
>
          <CardHeader>
            <CardTitle className="text-cyan-400 text-center  flex items-center justify-center gap-2">
              <span className="text-2xl">{currentData.icon}</span>
              Fishbone Analysis: {selectedProcess}
            </CardTitle>
          </CardHeader>
          <CardContent>
           <div className="fishbone-chart">
  <FishboneChart data={currentData.fishboneData} cols="12" />
</div>
          </CardContent>
        </Card>

        {/* Process Overview Grid */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-cyan-400">All Processes Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
              {Object.entries(foundryProcesses).map(([processName, data]) => (
                <div
                  key={processName}
                  className={`p-3 rounded-lg border cursor-pointer transition-all hover:scale-105 ${
                    selectedProcess === processName
                      ? "bg-cyan-900/50 border-cyan-500"
                      : "bg-slate-700/50 border-slate-600 hover:border-slate-500"
                  }`}
                  onClick={() => setSelectedProcess(processName)}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-1">{data.icon}</div>
                    <p className="text-xs font-medium text-slate-300 mb-1">{processName}</p>
                    <p className="text-xs text-green-400">-{data.reductionPercent}%</p>
                    <p className="text-xs text-blue-400">{formatCurrency(data.savings)}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Summary */}
        <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-slate-600">
          <CardContent className="p-6">
            <div className="text-center space-y-2">
              <h3 className="text-xl font-bold text-cyan-400">ROI Summary for {selectedProcess}</h3>
              <p className="text-lg text-slate-300">
                Implementing Zauvijek automation will save{" "}
                <span className="font-bold text-green-400">{formatCurrency(currentData.savings)}</span> with a{" "}
                <span className="font-bold text-blue-400">{currentData.reductionPercent}%</span> reduction in
                electricity costs
              </p>
              <div className="flex justify-center gap-8 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <Recycle className="w-4 h-4 text-green-400" />
                  <span>Sustainable Process</span>
                </div>
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <span>Energy Optimized</span>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-purple-400" />
                  <span>AI Monitored</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
