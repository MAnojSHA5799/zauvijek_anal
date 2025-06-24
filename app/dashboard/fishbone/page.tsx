"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Factory,
  User,
  Settings,
  FileText,
  Package,
  Ruler,
  Thermometer,
  TrendingDown,
  Zap,
  IndianRupee,
  AlertTriangle,
  ChevronRight,
  Target,
} from "lucide-react";

// Enhanced category configuration with modern colors and gradients
const CATEGORY_CONFIG = {
  Man: {
    gradient: "from-orange-400 to-red-500",
    lightBg: "from-orange-50 to-red-50",
    darkBg: "from-orange-900/20 to-red-900/20",
    textColor: "text-orange-700",
    icon: User,
    description: "Human factors and training issues",
    accentColor: "#f97316",
  },
  Machine: {
    gradient: "from-blue-400 to-indigo-600",
    lightBg: "from-blue-50 to-indigo-50",
    darkBg: "from-blue-900/20 to-indigo-900/20",
    textColor: "text-blue-700",
    icon: Settings,
    description: "Equipment and machinery problems",
    accentColor: "#3b82f6",
  },
  Method: {
    gradient: "from-green-400 to-emerald-600",
    lightBg: "from-green-50 to-emerald-50",
    darkBg: "from-green-900/20 to-emerald-900/20",
    textColor: "text-green-700",
    icon: FileText,
    description: "Process and procedure issues",
    accentColor: "#10b981",
  },
  Material: {
    gradient: "from-purple-400 to-violet-600",
    lightBg: "from-purple-50 to-violet-50",
    darkBg: "from-purple-900/20 to-violet-900/20",
    textColor: "text-purple-700",
    icon: Package,
    description: "Raw material and quality problems",
    accentColor: "#8b5cf6",
  },
  Measurement: {
    gradient: "from-yellow-400 to-amber-500",
    lightBg: "from-yellow-50 to-amber-50",
    darkBg: "from-yellow-900/20 to-amber-900/20",
    textColor: "text-yellow-700",
    icon: Ruler,
    description: "Measurement and calibration issues",
    accentColor: "#f59e0b",
  },
  Environment: {
    gradient: "from-pink-400 to-rose-500",
    lightBg: "from-pink-50 to-rose-50",
    darkBg: "from-pink-900/20 to-rose-900/20",
    textColor: "text-pink-700",
    icon: Thermometer,
    description: "Environmental and workplace conditions",
    accentColor: "#ec4899",
  },
};

// Enhanced process data with ROI information
const enhancedProcessData: Record<
  string,
  {
    fishbone: { label: string; causes: string[] }[];
    roi: {
      currentCost: string;
      withoutZauvijek: string;
      withZauvijek: string;
      saving: string;
      reduction: string;
      kwhBefore: string;
      kwhAfter: string;
    };
    technology: string;
    impact: string;
  }
> = {
  "Pattern Making": {
    fishbone: [
      {
        label: "Man",
        causes: [
          "Untrained workers",
          "Manual errors",
          "Lack of skill development",
          "Poor supervision",
        ],
      },
      {
        label: "Machine",
        causes: [
          "Old CNC tools",
          "Poor calibration",
          "Equipment downtime",
          "Maintenance issues",
        ],
      },
      {
        label: "Method",
        causes: [
          "Lack of SOPs",
          "Improper dimensioning",
          "No standardization",
          "Poor workflow",
        ],
      },
      {
        label: "Material",
        causes: [
          "Substandard wax",
          "Low-quality sand",
          "Material inconsistency",
          "Storage issues",
        ],
      },
      {
        label: "Measurement",
        causes: [
          "Uncalibrated gauges",
          "Improper readings",
          "Tolerance issues",
          "No verification",
        ],
      },
      {
        label: "Environment",
        causes: [
          "Humidity issues",
          "Dust in workspace",
          "Temperature variation",
          "Poor lighting",
        ],
      },
    ],
    roi: {
      currentCost: "₹13 per pattern",
      withoutZauvijek: "₹1,950",
      withZauvijek: "₹780",
      saving: "₹1,170",
      reduction: "60%",
      kwhBefore: "3 kWh",
      kwhAfter: "1.2 kWh",
    },
    technology: "High-End CAD Software with AI Integration",
    impact: "Reduced rework and waste through dimensional deviation alerts",
  },
  "Metal Melting": {
    fishbone: [
      {
        label: "Man",
        causes: [
          "Lack of training",
          "Operator errors",
          "Safety violations",
          "Inexperience",
        ],
      },
      {
        label: "Machine",
        causes: [
          "Crucible damage",
          "Sensor errors",
          "Furnace inefficiency",
          "Power fluctuations",
        ],
      },
      {
        label: "Method",
        causes: [
          "Incorrect melt timing",
          "Poor temperature control",
          "No optimization",
          "Wrong sequence",
        ],
      },
      {
        label: "Material",
        causes: [
          "Low quality alloy",
          "Contamination",
          "Composition variation",
          "Impurities",
        ],
      },
      {
        label: "Measurement",
        causes: [
          "Incorrect temp readings",
          "Calibration issues",
          "Sensor drift",
          "No monitoring",
        ],
      },
      {
        label: "Environment",
        causes: [
          "Heat loss",
          "Ambient conditions",
          "Ventilation problems",
          "Humidity",
        ],
      },
    ],
    roi: {
      currentCost: "₹4,225 per ton",
      withoutZauvijek: "₹43,875",
      withZauvijek: "₹38,350",
      saving: "₹5,525",
      reduction: "12.6%",
      kwhBefore: "700 kWh",
      kwhAfter: "600 kWh",
    },
    technology: "AI Heat Cycle Optimization, Spectrometers",
    impact: "Reduced impurity and energy costs through AI monitoring",
  },
  Cooling: {
    fishbone: [
      {
        label: "Man",
        causes: [
          "No cooling time observation",
          "Improper handling",
          "Lack of monitoring",
          "Poor timing",
        ],
      },
      {
        label: "Machine",
        causes: [
          "Ineffective chillers",
          "Poor heat exchange",
          "Equipment failure",
          "Pump issues",
        ],
      },
      {
        label: "Method",
        causes: [
          "Overcooling or undercooling",
          "No control strategy",
          "Poor timing",
          "Wrong parameters",
        ],
      },
      {
        label: "Material",
        causes: [
          "Wrong alloy cooling rate",
          "Thermal properties",
          "Composition effects",
          "Size variation",
        ],
      },
      {
        label: "Measurement",
        causes: [
          "No time logs",
          "Temperature errors",
          "Poor tracking",
          "Sensor failure",
        ],
      },
      {
        label: "Environment",
        causes: [
          "Ambient temperature variation",
          "Air flow issues",
          "Heat sources",
          "Seasonal changes",
        ],
      },
    ],
    roi: {
      currentCost: "₹130 per batch",
      withoutZauvijek: "₹1,462.50",
      withZauvijek: "₹877.50",
      saving: "₹585",
      reduction: "40%",
      kwhBefore: "25 kWh",
      kwhAfter: "15 kWh",
    },
    technology: "IoT-Connected Cooling Controllers",
    impact: "Stable cooling and improved microstructure",
  },
  "Fettling & Finishing": {
    fishbone: [
      {
        label: "Man",
        causes: [
          "Missed burrs and sharp edges",
          "Inconsistent technique",
          "Quality oversight",
          "Fatigue",
        ],
      },
      {
        label: "Machine",
        causes: [
          "Worn out grinders",
          "Tool degradation",
          "Poor maintenance",
          "Vibration",
        ],
      },
      {
        label: "Method",
        causes: [
          "Improper trimming pattern",
          "No standardization",
          "Poor sequence",
          "Wrong tools",
        ],
      },
      {
        label: "Material",
        causes: [
          "Excess metal flash",
          "Hard spots",
          "Material variation",
          "Surface defects",
        ],
      },
      {
        label: "Measurement",
        causes: [
          "No surface roughness check",
          "Dimension errors",
          "Poor inspection",
          "Missing tools",
        ],
      },
      {
        label: "Environment",
        causes: ["Inadequate lighting", "Dust", "Vibration", "Noise levels"],
      },
    ],
    roi: {
      currentCost: "₹1,950 per shift",
      withoutZauvijek: "₹715",
      withZauvijek: "₹422.50",
      saving: "₹292.50",
      reduction: "40.9%",
      kwhBefore: "12 kWh",
      kwhAfter: "7 kWh",
    },
    technology: "AI Image Processing, IoT CNC Monitoring",
    impact: "Reduced tool downtime and scrap through analytics",
  },
};

// Modern Fishbone Diagram Component
const ModernFishboneDiagram = ({
  title,
  categories,
  selectedCategory,
  onCategorySelect,
}: {
  title: string;
  categories: { label: string; causes: string[] }[];
  selectedCategory: string | null;
  onCategorySelect: (category: string) => void;
}) => {
  return (
    <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-12 rounded-3xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, #64748b 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-lg mb-4">
          <Target className="w-8 h-8" />
          <h2 className="text-2xl font-bold">Root Cause Analysis</h2>
        </div>
        <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">
          {title} Process
        </p>
      </div>

      <div className="relative min-h-[700px] flex items-center justify-center">
        {/* Main spine with gradient */}
        <div className="absolute top-1/2 left-20 right-40 h-2 bg-gradient-to-r from-slate-400 via-slate-600 to-slate-800 transform -translate-y-1/2 rounded-full shadow-lg z-20"></div>

        {/* Animated problem box */}
        <div className="absolute right-12 top-1/2 transform -translate-y-1/2 z-50">
          <div className="relative">
            <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-10 py-6 rounded-2xl shadow-2xl font-bold text-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
              <div className="relative flex items-center gap-3">
                <AlertTriangle className="w-6 h-6" />
                PROCESS ISSUES
              </div>
              {/* Arrow */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full">
                <div className="w-0 h-0 border-t-[24px] border-b-[24px] border-r-[24px] border-t-transparent border-b-transparent border-r-red-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Top categories */}
        <div className="absolute top-4 left-0 right-0 flex justify-around z-20">
          {categories.slice(0, 3).map((category, index) => {
            const config =
              CATEGORY_CONFIG[category.label as keyof typeof CATEGORY_CONFIG];
            const Icon = config?.icon || Factory;
            const isSelected = selectedCategory === category.label;
            const positions = ["left-[8%]", "left-[35%]", "left-[62%]"];

            return (
              <div
                key={category.label}
                className={`absolute ${positions[index]} w-72`}
              >
                {/* Connecting line */}
                <div
                  className="absolute top-full left-1/2 w-1 h-40 transform rotate-12 origin-top rounded-full shadow-md"
                  style={{
                    background: `linear-gradient(to bottom, ${config?.accentColor}, transparent)`,
                  }}
                ></div>

                {/* Category header */}
                <div
                  className={`bg-gradient-to-r ${
                    config?.gradient
                  } text-white px-6 py-4 rounded-2xl shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    isSelected ? "ring-4 ring-yellow-400 scale-105" : ""
                  } relative overflow-hidden group`}
                  onClick={() => onCategorySelect(category.label)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <Icon className="w-6 h-6" />
                    <span className="font-bold text-lg">
                      {category.label.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Causes container */}
                <div
                  className={`mt-4 bg-gradient-to-br ${config?.lightBg} dark:${config?.darkBg} p-4 rounded-2xl shadow-lg border border-white/50 dark:border-slate-700/50 backdrop-blur-sm`}
                >
                  <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
                    {category.causes
                      .slice(0, isSelected ? category.causes.length : 3)
                      .map((cause, i) => (
                        <div
                          key={i}
                          className="bg-white/80 dark:bg-slate-800/80 px-4 py-3 rounded-xl shadow-sm text-sm text-slate-700 dark:text-slate-300 border-l-4 transform transition-all duration-200 hover:translate-x-1 hover:shadow-md"
                          style={{ borderLeftColor: config?.accentColor }}
                        >
                          <div className="flex items-start gap-2">
                            <div
                              className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: config?.accentColor }}
                            ></div>
                            <span className="leading-relaxed">{cause}</span>
                          </div>
                        </div>
                      ))}
                    {!isSelected && category.causes.length > 3 && (
                      <div className="text-center py-2">
                        <span className="text-xs text-slate-500 bg-white/60 dark:bg-slate-700/60 px-3 py-1 rounded-full">
                          +{category.causes.length - 3} more causes
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom categories */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-around z-20">
          {categories.slice(3).map((category, index) => {
            const config =
              CATEGORY_CONFIG[category.label as keyof typeof CATEGORY_CONFIG];
            const Icon = config?.icon || Factory;
            const isSelected = selectedCategory === category.label;
            const positions = ["left-[8%]", "left-[35%]", "left-[62%]"];

            return (
              <div
                key={category.label}
                className={`absolute ${positions[index]} w-72`}
              >
                {/* Causes container */}
                <div
                  className={`mb-4 bg-gradient-to-br ${config?.lightBg} dark:${config?.darkBg} p-4 rounded-2xl shadow-lg border border-white/50 dark:border-slate-700/50 backdrop-blur-sm`}
                >
                  <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
                    {category.causes
                      .slice(0, isSelected ? category.causes.length : 3)
                      .map((cause, i) => (
                        <div
                          key={i}
                          className="bg-white/80 dark:bg-slate-800/80 px-4 py-3 rounded-xl shadow-sm text-sm text-slate-700 dark:text-slate-300 border-l-4 transform transition-all duration-200 hover:translate-x-1 hover:shadow-md"
                          style={{ borderLeftColor: config?.accentColor }}
                        >
                          <div className="flex items-start gap-2">
                            <div
                              className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: config?.accentColor }}
                            ></div>
                            <span className="leading-relaxed">{cause}</span>
                          </div>
                        </div>
                      ))}
                    {!isSelected && category.causes.length > 3 && (
                      <div className="text-center py-2">
                        <span className="text-xs text-slate-500 bg-white/60 dark:bg-slate-700/60 px-3 py-1 rounded-full">
                          +{category.causes.length - 3} more causes
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Category header */}
                <div
                  className={`bg-gradient-to-r ${
                    config?.gradient
                  } text-white px-6 py-4 rounded-2xl shadow-xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    isSelected ? "ring-4 ring-yellow-400 scale-105" : ""
                  } relative overflow-hidden group`}
                  onClick={() => onCategorySelect(category.label)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <div className="relative flex items-center justify-center gap-3">
                    <Icon className="w-6 h-6" />
                    <span className="font-bold text-lg">
                      {category.label.toUpperCase()}
                    </span>
                  </div>
                </div>

                {/* Connecting line */}
                <div
                  className="absolute bottom-full left-1/2 w-1 h-40 transform -rotate-12 origin-bottom rounded-full shadow-md"
                  style={{
                    background: `linear-gradient(to top, ${config?.accentColor}, transparent)`,
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom summary with animation */}
      <div className="mt-12 text-center relative z-10">
        <div className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white px-12 py-4 rounded-full shadow-2xl font-bold text-lg relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <div className="relative flex items-center gap-3">
            <Target className="w-5 h-5" />
            QUALITY ISSUES IN {title.toUpperCase()} PROCESS
          </div>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

// Enhanced ROI Impact Card Component
const ROIImpactCard = ({
  processData,
}: {
  processData: (typeof enhancedProcessData)[string];
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {/* Cost Analysis */}
      <Card className="bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-green-700 dark:text-green-400">
            <div className="p-2 bg-green-100 dark:bg-green-800/30 rounded-xl">
              <IndianRupee className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold">Cost Analysis</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-between items-center p-3 bg-white/60 dark:bg-slate-800/60 rounded-xl">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Without Zauvijek:
            </span>
            <Badge variant="destructive" className="text-sm px-3 py-1">
              {processData.roi.withoutZauvijek}
            </Badge>
          </div>
          <div className="flex justify-between items-center p-3 bg-white/60 dark:bg-slate-800/60 rounded-xl">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              With Zauvijek:
            </span>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              {processData.roi.withZauvijek}
            </Badge>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-green-200 dark:border-green-700">
            <span className="font-bold text-green-700 dark:text-green-400">
              Total Saving:
            </span>
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-2 text-sm font-bold">
              {processData.roi.saving}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Energy Efficiency */}
      <Card className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-blue-700 dark:text-blue-400">
            <div className="p-2 bg-blue-100 dark:bg-blue-800/30 rounded-xl">
              <Zap className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold">Energy Efficiency</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-between items-center p-3 bg-white/60 dark:bg-slate-800/60 rounded-xl">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Before:
            </span>
            <Badge variant="destructive" className="text-sm px-3 py-1">
              {processData.roi.kwhBefore}
            </Badge>
          </div>
          <div className="flex justify-between items-center p-3 bg-white/60 dark:bg-slate-800/60 rounded-xl">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              After:
            </span>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              {processData.roi.kwhAfter}
            </Badge>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-blue-200 dark:border-blue-700">
            <span className="font-bold text-blue-700 dark:text-blue-400">
              Reduction:
            </span>
            <Badge className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-4 py-2 text-sm font-bold">
              {processData.roi.reduction}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Technology Impact */}
      <Card className="bg-gradient-to-br from-purple-50 via-violet-50 to-purple-100 dark:from-purple-900/20 dark:to-violet-900/20 border-purple-200 dark:border-purple-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-purple-700 dark:text-purple-400">
            <div className="p-2 bg-purple-100 dark:bg-purple-800/30 rounded-xl">
              <TrendingDown className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold">Technology Impact</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 bg-white/60 dark:bg-slate-800/60 rounded-xl">
            <h4 className="font-bold text-sm text-purple-700 dark:text-purple-400 mb-3 flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              Solution:
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {processData.technology}
            </p>
          </div>
          <div className="p-4 bg-white/60 dark:bg-slate-800/60 rounded-xl">
            <h4 className="font-bold text-sm text-purple-700 dark:text-purple-400 mb-3 flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              Impact:
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {processData.impact}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Main Enhanced Fishbone Page
const EnhancedFishbonePage = () => {
  const [selectedProcess, setSelectedProcess] = useState("Pattern Making");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const processList = Object.keys(enhancedProcessData);
  const currentProcessData = enhancedProcessData[selectedProcess];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 p-6">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white px-12 py-6 rounded-3xl shadow-2xl">
            <Factory className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Advanced Fishbone Analytics</h1>
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive root cause analysis with ROI impact assessment for
            foundry processes
          </p>
        </div>

        {/* Process Selection */}
        <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 bg-blue-100 dark:bg-blue-800/30 rounded-xl">
                <Factory className="w-8 h-8 text-blue-600" />
              </div>
              Process Selection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              {processList.map((process) => (
                <Button
                  key={process}
                  variant={selectedProcess === process ? "default" : "outline"}
                  onClick={() => {
                    setSelectedProcess(process);
                    setSelectedCategory(null);
                  }}
                  className={`px-6 py-3 text-lg font-medium transition-all duration-300 ${
                    selectedProcess === process
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg transform scale-105"
                      : "hover:bg-slate-100 dark:hover:bg-slate-700 hover:scale-105"
                  }`}
                >
                  {process}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Fishbone Diagram */}
        <ModernFishboneDiagram
          title={selectedProcess}
          categories={currentProcessData.fishbone}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />

        {/* ROI Impact Analysis */}
        <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 bg-green-100 dark:bg-green-800/30 rounded-xl">
                <TrendingDown className="w-8 h-8 text-green-600" />
              </div>
              ROI Impact Analysis - {selectedProcess}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ROIImpactCard processData={currentProcessData} />
          </CardContent>
        </Card>

        {/* Category Details */}
        {selectedCategory && (
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="p-2 bg-orange-100 dark:bg-orange-800/30 rounded-xl">
                  {React.createElement(
                    CATEGORY_CONFIG[
                      selectedCategory as keyof typeof CATEGORY_CONFIG
                    ]?.icon || Factory,
                    { className: "w-8 h-8 text-orange-600" }
                  )}
                </div>
                {selectedCategory} - Detailed Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl">
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                    {
                      CATEGORY_CONFIG[
                        selectedCategory as keyof typeof CATEGORY_CONFIG
                      ]?.description
                    }
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentProcessData.fishbone
                    .find((cat) => cat.label === selectedCategory)
                    ?.causes.map((cause, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-6 bg-gradient-to-r from-white to-slate-50 dark:from-slate-700 dark:to-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="p-2 bg-orange-100 dark:bg-orange-800/30 rounded-xl">
                          <AlertTriangle className="w-5 h-5 text-orange-500" />
                        </div>
                        <span className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                          {cause}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default EnhancedFishbonePage;
