"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, AlertTriangle, CheckCircle, XCircle } from "lucide-react"

const fmeaStages = [
  {
    stage: "Setup Stage",
    color: "bg-green-500",
    textColor: "text-white",
    steps: ["Define the System", "Define the Scope", "Perform the Analysis"],
  },
  {
    stage: "Configuration Stage",
    color: "bg-blue-500",
    textColor: "text-white",
    steps: ["Define the Approach", "Define All Possible Failure Modes", "Define Each Function"],
  },
  {
    stage: "Risk Assessment Stage",
    color: "bg-pink-500",
    textColor: "text-white",
    steps: ["Identify All Risk Components", "Define the Occurrence", "Define the Severity", "Define the Detection"],
  },
  {
    stage: "Implementation Stage",
    color: "bg-orange-500",
    textColor: "text-white",
    steps: ["Define the Risk Priority Number", "Define the Recommended Actions", "Define the Action Plan"],
  },
]

const riskMatrix = [
  { factor: "Severity (S)", ratings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { factor: "Occurrence (O)", ratings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
  { factor: "Detectability (D)", ratings: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
]

const sampleFailureModes = [
  {
    id: 1,
    process: "Pattern Making",
    failureMode: "Manual Errors & Material Waste",
    effect: "Poor casting quality, dimensional inaccuracy",
    cause: "Manual processes, time consumption",
    currentCost: 1950,
    optimizedCost: 780,
    electricityBefore: 3,
    electricityAfter: 1.2,
    severity: 7,
    occurrence: 6,
    detection: 5,
    rpn: 210,
    status: "Critical",
    // technology: "High-End CAD Software with AI Integration",
    // instruments: "3D Scanners/High-Resolution Cameras",
    savings: 1170,
    reductionPercent: 60,
  },
  {
    id: 2,
    process: "Mold Preparation",
    failureMode: "Sand Moisture/Packing Issues",
    effect: "Inconsistent mold quality, material overuse",
    cause: "Manual moisture control, improper packing",
    currentCost: 2925,
    optimizedCost: 1300,
    electricityBefore: 4.5,
    electricityAfter: 2,
    severity: 6,
    occurrence: 5,
    detection: 4,
    rpn: 120,
    status: "High",
    // technology: "Digital Moisture Meters, IoT Sensors",
    // instruments: "Grain size/moisture sensors",
    savings: 1625,
    reductionPercent: 55.56,
  },
  {
    id: 3,
    process: "Assembly of Mold and Gating System",
    failureMode: "Misalignment & Gating Defects",
    effect: "Assembly defects, increased cycle time",
    cause: "Manual alignment, gating dimension errors",
    currentCost: 1950,
    optimizedCost: 780,
    electricityBefore: 3,
    electricityAfter: 1.2,
    severity: 6,
    occurrence: 4,
    detection: 5,
    rpn: 120,
    status: "High",
    // technology: "AI-Based Gating Simulation",
    // instruments: "Digital Calipers, Laser Tools",
    savings: 1170,
    reductionPercent: 60,
  },
  {
    id: 4,
    process: "Metal Melting",
    failureMode: "High Energy Consumption & Impurities",
    effect: "Furnace inefficiencies, material defects",
    cause: "Unoptimized heat cycles, contamination",
    currentCost: 43875,
    optimizedCost: 38350,
    electricityBefore: 700,
    electricityAfter: 600,
    severity: 8,
    occurrence: 4,
    detection: 6,
    rpn: 192,
    status: "Critical",
    // technology: "AI Heat Cycle Optimization, Spectrometers",
    // instruments: "IoT Temperature Sensors, Energy Monitors",
    savings: 5525,
    reductionPercent: 12.6,
  },
  {
    id: 5,
    process: "Tapping",
    failureMode: "Timing Issues & Material Spillage",
    effect: "Metal loss, contamination",
    cause: "Poor timing control, manual operation",
    currentCost: 4000,
    optimizedCost: 2250,
    electricityBefore: 65,
    electricityAfter: 36,
    severity: 7,
    occurrence: 5,
    detection: 4,
    rpn: 140,
    status: "Critical",
    // technology: "AI-Based Tapping Prediction",
    // instruments: "Flow and Temperature Sensors, High-Speed Cameras",
    savings: 1750,
    reductionPercent: 43.75,
  },
  {
    id: 6,
    process: "Purification",
    failureMode: "Entrapped Gases & Porosity",
    effect: "Metal quality degradation, porosity defects",
    cause: "Inadequate degassing, impurity control",
    currentCost: 3900,
    optimizedCost: 2275,
    electricityBefore: 70,
    electricityAfter: 40,
    severity: 8,
    occurrence: 4,
    detection: 5,
    rpn: 160,
    status: "Critical",
    // technology: "AI Monitoring, Spectrometers, IoT Degassing",
    // instruments: "Spectrometers, Gas Monitors",
    savings: 1625,
    reductionPercent: 41.67,
  },
  {
    id: 7,
    process: "Pouring",
    failureMode: "Inconsistent Flow Rates & Temperature Drops",
    effect: "Turbulence, casting defects",
    cause: "Manual pouring control, temperature variation",
    currentCost: 4550,
    optimizedCost: 2925,
    electricityBefore: 80,
    electricityAfter: 50,
    severity: 7,
    occurrence: 5,
    detection: 5,
    rpn: 175,
    status: "Critical",
    // technology: "AI-Controlled Pouring Systems",
    // instruments: "Digital Flow Meters, Thermal Cameras",
    savings: 1625,
    reductionPercent: 35.71,
  },
  {
    id: 8,
    process: "Rough Casting",
    failureMode: "Poor Fill & Surface Quality Issues",
    effect: "Surface defects, inconsistent quality",
    cause: "Inadequate fill monitoring, surface flaws",
    currentCost: 2112.5,
    optimizedCost: 1137.5,
    electricityBefore: 35,
    electricityAfter: 20,
    severity: 6,
    occurrence: 4,
    detection: 4,
    rpn: 96,
    status: "High",
    // technology: "AI-Based Image Recognition",
    // instruments: "High-Resolution Cameras/Scanners",
    savings: 975,
    reductionPercent: 46.16,
  },
  {
    id: 9,
    process: "Cooling",
    failureMode: "Uncontrolled Cooling & Structural Defects",
    effect: "Internal stress, microstructure issues",
    cause: "Uneven cooling rates, temperature control",
    currentCost: 1462.5,
    optimizedCost: 877.5,
    electricityBefore: 25,
    electricityAfter: 15,
    severity: 6,
    occurrence: 4,
    detection: 5,
    rpn: 120,
    status: "High",
    // technology: "IoT-Connected Cooling Controllers",
    // instruments: "Temperature Sensors",
    savings: 585,
    reductionPercent: 40,
  },
  {
    id: 10,
    process: "Solidification",
    failureMode: "Shrinkage Voids & Defective Solidification",
    effect: "Porosity, structural weakness",
    cause: "Uncontrolled solidification, shrinkage",
    currentCost: 585,
    optimizedCost: 292.5,
    electricityBefore: 10,
    electricityAfter: 5,
    severity: 7,
    occurrence: 3,
    detection: 4,
    rpn: 84,
    status: "High",
    // technology: "AI-Based Simulation",
    // instruments: "Thermocouples for temperature gradient mapping",
    savings: 292.5,
    reductionPercent: 50,
  },
  {
    id: 11,
    process: "Risers",
    failureMode: "Improper Riser Design & Oversizing",
    effect: "Metal waste, shrinkage defects",
    cause: "Manual design, inadequate thermal analysis",
    currentCost: 455,
    optimizedCost: 227.5,
    electricityBefore: 8,
    electricityAfter: 4,
    severity: 5,
    occurrence: 3,
    detection: 4,
    rpn: 60,
    status: "Medium",
    // technology: "AI Thermal Mapping and Simulation",
    // instruments: "High-speed thermal imaging",
    savings: 227.5,
    reductionPercent: 50,
  },
  {
    id: 12,
    process: "Shakeout",
    failureMode: "Casting Damage & Residual Sand",
    effect: "Surface damage, cleanup costs",
    cause: "Excessive vibration, improper timing",
    currentCost: 292.5,
    optimizedCost: 162.5,
    electricityBefore: 5,
    electricityAfter: 3,
    severity: 4,
    occurrence: 4,
    detection: 3,
    rpn: 48,
    status: "Medium",
    // technology: "Vibration Sensors and High-Speed Cameras",
    // instruments: "Mold break monitoring",
    savings: 130,
    reductionPercent: 44.4,
  },
  {
    id: 13,
    process: "Shot Blasting",
    failureMode: "Over/Under Blasting & Abrasive Overuse",
    effect: "Surface damage, material waste",
    cause: "Manual control, inconsistent parameters",
    currentCost: 422.5,
    optimizedCost: 227.5,
    electricityBefore: 7,
    electricityAfter: 4,
    severity: 5,
    occurrence: 4,
    detection: 4,
    rpn: 80,
    status: "High",
    // technology: "AI Surface Inspection",
    // instruments: "Roughness testers, Imaging systems",
    savings: 195,
    reductionPercent: 46.1,
  },
  {
    id: 14,
    process: "Fettling",
    failureMode: "Excess Removal & Inconsistent Finish",
    effect: "Material loss, quality variation",
    cause: "Manual finishing, tool wear",
    currentCost: 715,
    optimizedCost: 422.5,
    electricityBefore: 12,
    electricityAfter: 7,
    severity: 6,
    occurrence: 5,
    detection: 4,
    rpn: 120,
    status: "High",
    // technology: "AI Image Processing, IoT CNC Monitoring",
    // instruments: "3D scanners, Tool wear monitoring",
    savings: 292.5,
    reductionPercent: 40.9,
  },
]

const getRiskColor = (rating: number) => {
  if (rating <= 3) return "bg-green-500"
  if (rating <= 6) return "bg-yellow-500"
  if (rating <= 8) return "bg-orange-500"
  return "bg-red-500"
}

const getRPNStatus = (rpn: number) => {
  if (rpn >= 125) return { status: "Critical", color: "text-red-600", icon: XCircle }
  if (rpn >= 75) return { status: "High", color: "text-orange-600", icon: AlertTriangle }
  if (rpn >= 25) return { status: "Medium", color: "text-yellow-600", icon: AlertTriangle }
  return { status: "Low", color: "text-green-600", icon: CheckCircle }
}

const FMEAAnalysis = () => {
  const [, setActiveStage] = useState(0);
  const [selectedProcess, setSelectedProcess] = useState("All");

  const processes = ["All", ...new Set(sampleFailureModes.map(item => item.process))];
  const filteredData = selectedProcess === "All" 
    ? sampleFailureModes 
    : sampleFailureModes.filter(item => item.process === selectedProcess);

  return (
    <div className="p-6 md:p-10 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            FAILURE MODE AND EFFECTS ANALYSIS (FMEA)
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Systematic approach to identify and prevent potential failures
          </p>
        </div>

        {/* Process Flow */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            FMEA Process Flow
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-2">
            {fmeaStages.map((stage, index) => (
              <React.Fragment key={index}>
                <motion.div
                  className={`${stage.color} ${stage.textColor} p-4 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 flex-1 min-w-0`}
                  onClick={() => setActiveStage(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="font-bold text-sm lg:text-base mb-2 text-center">
                    {stage.stage}
                  </h3>
                  <div className="space-y-1">
                    {stage.steps.map((step, stepIndex) => (
                      <p key={stepIndex} className="text-xs lg:text-sm text-center opacity-90">
                        {step}
                      </p>
                    ))}
                  </div>
                </motion.div>
                
                {index < fmeaStages.length - 1 && (
                  <ChevronRight className="text-gray-400 hidden lg:block flex-shrink-0" size={24} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Risk Assessment Matrix */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Risk Assessment Matrix
          </h2>
          
          <div className="space-y-4">
            {riskMatrix.map((row, rowIndex) => (
              <div key={rowIndex} className="flex items-center space-x-4">
                <div className="w-32 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {row.factor}
                </div>
                <div className="flex space-x-1 flex-1">
                  {row.ratings.map((rating) => (
                    <div
                      key={rating}
                      className={`${getRiskColor(rating)} text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded`}
                    >
                      {rating}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-gray-700 dark:text-gray-300">Low Risk (1-3)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-500 rounded"></div>
              <span className="text-gray-700 dark:text-gray-300">Medium Risk (4-6)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-orange-500 rounded"></div>
              <span className="text-gray-700 dark:text-gray-300">High Risk (7-8)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded"></div>
              <span className="text-gray-700 dark:text-gray-300">Critical Risk (9-10)</span>
            </div>
          </div>
        </div>

        {/* Process Filter */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Failure Mode Analysis
            </h2>
            <div className="flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Filter by Process:
              </label>
              <select
                value={selectedProcess}
                onChange={(e) => setSelectedProcess(e.target.value)}
                className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {processes.map((proc) => (
                  <option key={proc} value={proc}>
                    {proc}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Failure Modes Table */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Process</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Failure Mode</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 dark:text-gray-300">Effect</th>
                  
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-700 dark:text-gray-300">S</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-700 dark:text-gray-300">O</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-700 dark:text-gray-300">D</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-700 dark:text-gray-300">RPN</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-700 dark:text-gray-300">Cost Savings</th>
                  <th className="px-6 py-4 text-center text-sm font-medium text-gray-700 dark:text-gray-300">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                {filteredData.map((item) => {
                  const rpnStatus = getRPNStatus(item.rpn);
                  const StatusIcon = rpnStatus.icon;
                  
                  return (
                    <motion.tr
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-white font-medium">
                        {item.process}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        {item.failureMode}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                        {item.effect}
                      </td>
                      
                      <td className="px-6 py-4 text-center">
                        <span className={`${getRiskColor(item.severity)} text-white px-2 py-1 rounded text-sm font-bold`}>
                          {item.severity}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`${getRiskColor(item.occurrence)} text-white px-2 py-1 rounded text-sm font-bold`}>
                          {item.occurrence}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`${getRiskColor(item.detection)} text-white px-2 py-1 rounded text-sm font-bold`}>
                          {item.detection}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-lg font-bold text-gray-900 dark:text-white">
                          {item.rpn}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="text-sm">
                          <p className="font-bold text-green-600 dark:text-green-400">₹{item.savings?.toLocaleString()}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">{item.reductionPercent}% reduction</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className={`flex items-center justify-center space-x-1 ${rpnStatus.color}`}>
                          <StatusIcon size={16} />
                          <span className="text-sm font-medium">{rpnStatus.status}</span>
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* RPN Priority Actions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Risk Priority Number (RPN) Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-red-50 dark:bg-red-900 bg-opacity-20 border border-red-200 dark:border-red-800 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <XCircle className="text-red-600" size={20} />
                <h3 className="font-bold text-red-600">Critical</h3>
              </div>
              <p className="text-sm text-red-700 dark:text-red-300">RPN ≥ 125</p>
              <p className="text-xs text-red-600 dark:text-red-400 mt-1">Immediate action required</p>
            </div>
            
            <div className="bg-orange-50 dark:bg-orange-900 bg-opacity-20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <AlertTriangle className="text-orange-600" size={20} />
                <h3 className="font-bold text-orange-600">High</h3>
              </div>
              <p className="text-sm text-orange-700 dark:text-orange-300">RPN 75-124</p>
              <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">Action plan needed</p>
            </div>
            
            <div className="bg-yellow-50 dark:bg-yellow-900 bg-opacity-20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <AlertTriangle className="text-yellow-600" size={20} />
                <h3 className="font-bold text-yellow-600">Medium</h3>
              </div>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">RPN 25-74</p>
              <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">Monitor closely</p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900 bg-opacity-20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <CheckCircle className="text-green-600" size={20} />
                <h3 className="font-bold text-green-600">Low</h3>
              </div>
              <p className="text-sm text-green-700 dark:text-green-300\">RPN  25</p>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">Acceptable risk</p>
            </div>
          </div>
        </div>

        {/* Cost Savings Summary */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Overall Impact Summary
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-50 dark:bg-green-900 bg-opacity-20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-green-600 mb-2">Total Cost Savings</h3>
              <p className="text-3xl font-bold text-green-700 dark:text-green-400">
                ₹{filteredData.reduce((sum, item) => sum + (item.savings || 0), 0).toLocaleString()}
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">Per production cycle</p>
            </div>
            
            <div className="bg-blue-50 dark:bg-blue-900 bg-opacity-20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-blue-600 mb-2">Energy Reduction</h3>
              <p className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                {Math.round(filteredData.reduce((sum, item) => sum + (item.electricityBefore - item.electricityAfter), 0))} kWh
              </p>
              <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">Electricity saved</p>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900 bg-opacity-20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-purple-600 mb-2">Processes Optimized</h3>
              <p className="text-3xl font-bold text-purple-700 dark:text-purple-400">
                {filteredData.length}
              </p>
              <p className="text-sm text-purple-600 dark:text-purple-400 mt-1">Manufacturing processes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FMEAAnalysis;
