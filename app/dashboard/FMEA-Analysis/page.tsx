"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const fmeaData = [
  {
    process: "Pattern Making",
    currentCost: 1950,
    optimizedCost: 780,
    electricityBefore: 3,
    electricityAfter: 1.2,
    saving: 1170,
    reductionPercent: 60,
  },
  {
    process: "Mold Preparation",
    currentCost: 2925,
    optimizedCost: 1300,
    electricityBefore: 4.5,
    electricityAfter: 2,
    saving: 1625,
    reductionPercent: 55.56,
  },
  {
    process: "Metal Melting",
    currentCost: 43875,
    optimizedCost: 38350,
    electricityBefore: 700,
    electricityAfter: 600,
    saving: 5525,
    reductionPercent: 12.6,
  },
  {
    process: "Tapping",
    currentCost: 4000,
    optimizedCost: 2250,
    electricityBefore: 4000, // Rs
    electricityAfter: 2250, // Rs
    saving: 1750,
    reductionPercent: 43.75,
  },
  {
    process: "Pouring",
    currentCost: 4550,
    optimizedCost: 2925,
    electricityBefore: 80,
    electricityAfter: 50,
    saving: 1625,
    reductionPercent: 35.71,
  },
  {
    process: "Cooling",
    currentCost: 1462.5,
    optimizedCost: 877.5,
    electricityBefore: 25,
    electricityAfter: 15,
    saving: 585,
    reductionPercent: 40,
  },
  {
    process: "Fettling",
    currentCost: 715,
    optimizedCost: 422.5,
    electricityBefore: 12,
    electricityAfter: 7,
    saving: 292.5,
    reductionPercent: 40.9,
  },
];

const FMEAAnalysis = () => {
  const [selected, setSelected] = useState("All");

  const filteredData =
    selected === "All"
      ? fmeaData
      : fmeaData.filter((item) => item.process === selected);

  const processes = ["All", ...new Set(fmeaData.map((item) => item.process))];

  return (
    <div className="p-6 md:p-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl shadow-xl space-y-8">
      <h1 className="text-3xl font-bold text-center text-teal-600 dark:text-teal-400">
        ⚙️ FMEA ROI & Energy Impact
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
          Select Process:
        </label>
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 rounded-lg border border-teal-500 focus:outline-none"
        >
          {processes.map((proc) => (
            <option key={proc} value={proc}>
              {proc}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredData.map((item) => (
          <div
            key={item.process}
            className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-gray-300 dark:border-gray-600 shadow-md hover:shadow-lg transition duration-300 space-y-4"
          >
            <h2 className="text-xl font-bold text-orange-500">
              {item.process}
            </h2>

            <div className="space-y-1 text-sm">
              <p>
                💰 <span className="font-medium">Cost Saving:</span>{" "}
                <span className="text-green-600 dark:text-green-400 font-semibold">
                  ₹{item.saving.toLocaleString()}
                </span>
              </p>
              <p>
                ⚡ <span className="font-medium">Electricity:</span>{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  {item.electricityBefore} → {item.electricityAfter} kWh
                </span>
              </p>
              <p>
                📉 <span className="font-medium">Reduction:</span>{" "}
                <span
                  className={`font-bold ${
                    item.reductionPercent >= 50
                      ? "text-green-600 dark:text-green-400"
                      : "text-yellow-600 dark:text-yellow-400"
                  }`}
                >
                  {item.reductionPercent}%
                </span>
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-gray-700 dark:text-gray-300 font-medium">ROI Bar</p>
              <div className="w-full bg-gray-300 dark:bg-gray-600 h-4 rounded-lg overflow-hidden">
                <motion.div
                  className="h-4 bg-emerald-500"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${(item.optimizedCost / item.currentCost) * 100}%`,
                  }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                Electricity Usage Bar
              </p>
              <div className="w-full bg-gray-300 dark:bg-gray-600 h-4 rounded-lg overflow-hidden">
                <motion.div
                  className="h-4 bg-blue-500"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${
                      (item.electricityAfter / item.electricityBefore) * 100
                    }%`,
                  }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FMEAAnalysis;
