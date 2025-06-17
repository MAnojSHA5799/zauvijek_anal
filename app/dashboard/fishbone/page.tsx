"use client";

import React, { useState } from "react";

// Category colors and icons
const CATEGORY_COLORS: Record<string, string> = {
  Man: "#f97316",         // Orange
  Machine: "#3b82f6",     // Blue
  Method: "#10b981",      // Green
  Material: "#8b5cf6",    // Violet
  Measurement: "#facc15", // Yellow
  Environment: "#ec4899", // Pink
};

const CATEGORY_ICONS: Record<string, string> = {
  Man: "👷",
  Machine: "🛠️",
  Method: "📋",
  Material: "📦",
  Measurement: "📏",
  Environment: "🌡️",
};

// Fishbone Data (same as before)
const processFishboneData: Record<string, { label: string; causes: string[] }[]> = {
  "Pattern Making": [
    { label: "Man", causes: ["Untrained workers", "Manual errors"] },
    { label: "Machine", causes: ["Old CNC tools", "Poor calibration"] },
    { label: "Method", causes: ["Lack of SOPs", "Improper dimensioning"] },
    { label: "Material", causes: ["Substandard wax", "Low-quality sand"] },
    { label: "Measurement", causes: ["Uncalibrated gauges", "Improper readings"] },
    { label: "Environment", causes: ["Humidity issues", "Dust in workspace"] },
  ],
  "Mold Preparation": [
    { label: "Man", causes: ["Improper ramming"] },
    { label: "Machine", causes: ["Worn-out molding machines"] },
    { label: "Method", causes: ["Incorrect venting"] },
    { label: "Material", causes: ["Inconsistent sand mix"] },
    { label: "Measurement", causes: ["Wrong mold dimensions"] },
    { label: "Environment", causes: ["Humidity affecting sand"] },
  ],
  "Assembly of Mold and Gating System Negligible": [
    { label: "Man", causes: ["Improper alignment"] },
    { label: "Machine", causes: ["Damaged tools"] },
    { label: "Method", causes: ["No verification steps"] },
    { label: "Material", causes: ["Bent runners/gates"] },
    { label: "Measurement", causes: ["Visual errors"] },
    { label: "Environment", causes: ["Vibration during setup"] },
  ],
  "Metal Melting": [
    { label: "Man", causes: ["Lack of training"] },
    { label: "Machine", causes: ["Crucible damage", "Sensor errors"] },
    { label: "Method", causes: ["Incorrect melt timing"] },
    { label: "Material", causes: ["Low quality alloy"] },
    { label: "Measurement", causes: ["Incorrect temp readings"] },
    { label: "Environment", causes: ["Heat loss in surroundings"] },
  ],
  "Tapping": [
    { label: "Man", causes: ["Delayed response"] },
    { label: "Machine", causes: ["Tapping equipment leakage"] },
    { label: "Method", causes: ["Poor ladle control"] },
    { label: "Material", causes: ["Excess slag"] },
    { label: "Measurement", causes: ["Miscalibrated timers"] },
    { label: "Environment", causes: ["Unsafe tapping area"] },
  ],
  "Purification": [
    { label: "Man", causes: ["Incomplete skimming"] },
    { label: "Machine", causes: ["Improper degassing tool"] },
    { label: "Method", causes: ["Lack of filtering steps"] },
    { label: "Material", causes: ["Dirty flux"] },
    { label: "Measurement", causes: ["No impurity tracking"] },
    { label: "Environment", causes: ["Contaminated workspace"] },
  ],
  "Pouring": [
    { label: "Man", causes: ["Incorrect pouring speed"] },
    { label: "Machine", causes: ["Leaky ladles", "Misaligned tools"] },
    { label: "Method", causes: ["Wrong preheat sequence"] },
    { label: "Material", causes: ["Slag in melt"] },
    { label: "Measurement", causes: ["Temp mismatch"] },
    { label: "Environment", causes: ["Wind draft"] },
  ],
  "Rough Casting": [
    { label: "Man", causes: ["Negligent handling"] },
    { label: "Machine", causes: ["Impact vibration"] },
    { label: "Method", causes: ["No padding process"] },
    { label: "Material", causes: ["Surface defects"] },
    { label: "Measurement", causes: ["Dimension error"] },
    { label: "Environment", causes: ["Improper stacking"] },
  ],
  "Cooling": [
    { label: "Man", causes: ["No cooling time observation"] },
    { label: "Machine", causes: ["Ineffective chillers"] },
    { label: "Method", causes: ["Overcooling or undercooling"] },
    { label: "Material", causes: ["Wrong alloy cooling rate"] },
    { label: "Measurement", causes: ["No time logs"] },
    { label: "Environment", causes: ["Ambient temperature variation"] },
  ],
  "Solidification": [
    { label: "Man", causes: ["Disturbance during phase change"] },
    { label: "Machine", causes: ["Uncontrolled mold vibration"] },
    { label: "Method", causes: ["Poor riser placement"] },
    { label: "Material", causes: ["Uneven solidification"] },
    { label: "Measurement", causes: ["Unrecorded shrinkage rate"] },
    { label: "Environment", causes: ["Uneven mold cooling"] },
  ],
  "Risers": [
    { label: "Man", causes: ["Improper riser cutting"] },
    { label: "Machine", causes: ["Incorrect riser feeding"] },
    { label: "Method", causes: ["Wrong riser shape"] },
    { label: "Material", causes: ["Cold shut formation"] },
    { label: "Measurement", causes: ["Riser volume miscalculated"] },
    { label: "Environment", causes: ["Heat loss in riser zone"] },
  ],
  "Shakeout": [
    { label: "Man", causes: ["Improper hammering"] },
    { label: "Machine", causes: ["Inefficient vibratory table"] },
    { label: "Method", causes: ["No shakeout SOP"] },
    { label: "Material", causes: ["Weak mold bond"] },
    { label: "Measurement", causes: ["Improper mold break time"] },
    { label: "Environment", causes: ["Dust generation"] },
  ],
  "Mold Breaking": [
    { label: "Man", causes: ["Excessive force applied"] },
    { label: "Machine", causes: ["Rough machine settings"] },
    { label: "Method", causes: ["No proper cleaning sequence"] },
    { label: "Material", causes: ["Crumbly mold"] },
    { label: "Measurement", causes: ["No mold strength tracking"] },
    { label: "Environment", causes: ["Mold dryness"] },
  ],
  "Fettling, Trimming, Finishing": [
    { label: "Man", causes: ["Missed burrs and sharp edges"] },
    { label: "Machine", causes: ["Worn out grinders"] },
    { label: "Method", causes: ["Improper trimming pattern"] },
    { label: "Material", causes: ["Excess metal flash"] },
    { label: "Measurement", causes: ["No surface roughness check"] },
    { label: "Environment", causes: ["Inadequate lighting"] },
  ],
};

// Fishbone Diagram Component
const FishboneDiagram = ({
  title,
  categories,
}: {
  title: string;
  categories: { label: string; causes: string[] }[];
}) => {
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
  <h2 className="text-2xl font-bold mb-6 text-center text-white drop-shadow">
    🐟 Fishbone Diagram – {title}
  </h2>
  <svg width="100%" height="460" viewBox="0 0 1000 460">
    {/* Central Spine */}
    <line x1="100" y1="230" x2="900" y2="230" stroke="#f1f5f9" strokeWidth="3" />

    {/* Category Branches */}
    {categories.map((cat, index) => {
      const isTop = index % 2 === 0;
      const y = isTop ? 140 - index * 7 : 320 + index * 7;
      const x = 150 + index * 120;
      const color = CATEGORY_COLORS[cat.label] || "#cbd5e1";
      const icon = CATEGORY_ICONS[cat.label] || "🔹";

      return (
        <g key={cat.label}>
          {/* Branch line */}
          <line
            x1={x}
            y1={230}
            x2={x - 50}
            y2={y}
            stroke={color}
            strokeWidth="2"
          />
          {/* Category label */}
          <text
            x={x - 65}
            y={y - 10}
            fontSize="13"
            fontWeight="bold"
            fill={color}
            style={{ textShadow: "1px 1px 2px #000" }}
          >
            {icon} {cat.label}
          </text>
          {/* Causes */}
          {cat.causes.map((cause, i) => (
            <text
              key={i}
              x={x - 65}
              y={y + 15 + i * 15}
              fontSize="11"
              fill="#e2e8f0"
              style={{ textShadow: "0.5px 0.5px 1px #000" }}
            >
              • {cause}
            </text>
          ))}
        </g>
      );
    })}

    {/* Final node: Process Defect */}
    <text
      x="910"
      y="235"
      fontSize="16"
      fontWeight="bold"
      fill="#f87171"
      style={{ textShadow: "1px 1px 2px #000" }}
    >
      🎯 Process Defect
    </text>
  </svg>
</div>

  );
};

// Main Page
const FishbonePage = () => {
  const [selectedProcess, setSelectedProcess] = useState("Pattern Making");
  const processList = Object.keys(processFishboneData);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">🧪 Fishbone Analytics Dashboard</h1>

      <div className="flex items-center gap-4">
        <label className="text-lg font-medium">Select Process:</label>
        <select
          className="bg-gray-900 p-4 rounded-lg"
          value={selectedProcess}
          onChange={(e) => setSelectedProcess(e.target.value)}
        >
          {processList.map((proc) => (
            <option key={proc} value={proc}>
              {proc}
            </option>
          ))}
        </select>
      </div>

      <FishboneDiagram
        title={selectedProcess}
        categories={processFishboneData[selectedProcess]}
      />
    </div>
  );
};

export default FishbonePage;
