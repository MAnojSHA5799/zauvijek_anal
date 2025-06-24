// "use client";

// import React, { useState } from "react";

// const DataManagementviewpage = () => {
//   const [formData, setFormData] = useState({
//     date: "2023-05-10",
//     time: "23:34",
//     shift: "C",
//     heatNo: "",
//     componentId: "",
//     activeClay: "",
//     gcs: "",
//     moisture: "",
//     loi: "",
//     totalClay: "",
//     wts: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = (type: "addNew" | "close") => {
//     console.log("Saving Data: ", formData);

//     if (type === "addNew") {
//       alert("✅ Data saved. You can add new entry now.");
//       setFormData((prev) => ({
//         ...prev,
//         heatNo: "",
//         componentId: "",
//         activeClay: "",
//         gcs: "",
//         moisture: "",
//         loi: "",
//         totalClay: "",
//         wts: "",
//       }));
//     } else {
//       alert("✅ Data saved and form closed.");
//       // Optionally redirect or close modal
//     }
//   };

//   return (
//     <div className="p-2">
//       {/* <h1 className="text-2xl font-bold mb-4">📋 Data Management</h1> */}

//       <div className="flex justify-between items-center mb-4">
//         <button className="bg-blue-500 text-white px-3 py-1 rounded">Modify Filters</button>
//         <div className="text-right">
//           <p>Line Name : <strong>NLO</strong></p>
//           <p>Category : <strong>Prepared Sand</strong></p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <InputField type="date" label="Date" name="date" value={formData.date} onChange={handleChange} />
//         <InputField type="time" label="Time" name="time" value={formData.time} onChange={handleChange} />

//         <div>
//           <label className="block text-sm font-medium mb-1">Shift</label>
//           <select name="shift" value={formData.shift} onChange={handleChange} className="w-full border px-2 py-1 rounded">
//             <option value="A">A</option>
//             <option value="B">B</option>
//             <option value="C">C</option>
//           </select>
//         </div>

//         <InputField label="Heat No." name="heatNo" value={formData.heatNo} onChange={handleChange} />
//         <div>
//           <label className="block text-sm font-medium mb-1">Component I.D.</label>
//           <select name="componentId" value={formData.componentId} onChange={handleChange} className="w-full border px-2 py-1 rounded">
//             <option value="">Select</option>
//             <option value="Comp1">Comp1</option>
//             <option value="Comp2">Comp2</option>
//             <option value="Comp3">Comp3</option>
//           </select>
//         </div>

//         <InputField type="number" label="Active Clay (%)" name="activeClay" value={formData.activeClay} onChange={handleChange} />
//         <InputField type="number" label="GCS (gm/cm²)" name="gcs" value={formData.gcs} onChange={handleChange} />
//         <InputField type="number" label="Moisture (%)" name="moisture" value={formData.moisture} onChange={handleChange} />
//         <InputField type="number" label="LOI (%)" name="loi" value={formData.loi} onChange={handleChange} />
//         <InputField type="number" label="Total Clay (%)" name="totalClay" value={formData.totalClay} onChange={handleChange} />
//         <InputField type="number" label="WTS (N/cm²)" name="wts" value={formData.wts} onChange={handleChange} />
//       </div>

//       <div className="mt-6 flex gap-4">
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={() => handleSave("addNew")}
//         >
//           Save & Add New
//         </button>
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={() => handleSave("close")}
//         >
//           Save & Close
//         </button>
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={() => alert("🚫 Cancelled")}
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// };

// // 📦 Reusable InputField Component
// const InputField = ({
//   label,
//   name,
//   value,
//   onChange,
//   type = "text",
// }: {
//   label: string;
//   name: string;
//   value: string;
//   type?: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }) => (
//   <div>
//     <label className="block text-sm font-medium mb-1">{label}</label>
//     <input
//       type={type}
//       name={name}
//       value={value}
//       onChange={onChange}
//       className="w-full border px-2 py-1 rounded"
//       placeholder={`Enter ${label}`}
//     />
//   </div>
// );

// export default DataManagementviewpage;

// "use client";

// import React, { useState } from "react";

// const DataManagementviewpage = () => {
//   const [formData, setFormData] = useState({
//     date: "2023-05-10",
//     time: "23:34",
//     shift: "C",
//     heatNo: "",
//     componentId: "",
//     activeClay: "",
//     gcs: "",
//     moisture: "",
//     loi: "",
//     totalClay: "",
//     wts: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = (type: "addNew" | "close") => {
//     console.log("Saving Data: ", formData);

//     if (type === "addNew") {
//       alert("✅ Data saved. You can add new entry now.");
//       setFormData((prev) => ({
//         ...prev,
//         heatNo: "",
//         componentId: "",
//         activeClay: "",
//         gcs: "",
//         moisture: "",
//         loi: "",
//         totalClay: "",
//         wts: "",
//       }));
//     } else {
//       alert("✅ Data saved and form closed.");
//       // Optionally redirect or close modal
//     }
//   };

//   return (
//     <div className="p-2">
//       {/* <h1 className="text-2xl font-bold mb-4">📋 Data Management</h1> */}

//       <div className="flex justify-between items-center mb-4">
//         <button className="bg-blue-500 text-white px-3 py-1 rounded">Modify Filters</button>
//         <div className="text-right">
//           <p>Line Name : <strong>NLO</strong></p>
//           <p>Category : <strong>Prepared Sand</strong></p>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <InputField type="date" label="Date" name="date" value={formData.date} onChange={handleChange} />
//         <InputField type="time" label="Time" name="time" value={formData.time} onChange={handleChange} />

//         <div>
//           <label className="block text-sm font-medium mb-1">Shift</label>
//           <select name="shift" value={formData.shift} onChange={handleChange} className="w-full border px-2 py-1 rounded">
//             <option value="A">A</option>
//             <option value="B">B</option>
//             <option value="C">C</option>
//           </select>
//         </div>

//         <InputField label="Heat No." name="heatNo" value={formData.heatNo} onChange={handleChange} />
//         <div>
//           <label className="block text-sm font-medium mb-1">Component I.D.</label>
//           <select name="componentId" value={formData.componentId} onChange={handleChange} className="w-full border px-2 py-1 rounded">
//             <option value="">Select</option>
//             <option value="Comp1">Comp1</option>
//             <option value="Comp2">Comp2</option>
//             <option value="Comp3">Comp3</option>
//           </select>
//         </div>

//         <InputField type="number" label="Active Clay (%)" name="activeClay" value={formData.activeClay} onChange={handleChange} />
//         <InputField type="number" label="GCS (gm/cm²)" name="gcs" value={formData.gcs} onChange={handleChange} />
//         <InputField type="number" label="Moisture (%)" name="moisture" value={formData.moisture} onChange={handleChange} />
//         <InputField type="number" label="LOI (%)" name="loi" value={formData.loi} onChange={handleChange} />
//         <InputField type="number" label="Total Clay (%)" name="totalClay" value={formData.totalClay} onChange={handleChange} />
//         <InputField type="number" label="WTS (N/cm²)" name="wts" value={formData.wts} onChange={handleChange} />
//       </div>

//       <div className="mt-6 flex gap-4">
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={() => handleSave("addNew")}
//         >
//           Save & Add New
//         </button>
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={() => handleSave("close")}
//         >
//           Save & Close
//         </button>
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//           onClick={() => alert("🚫 Cancelled")}
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// };

// // 📦 Reusable InputField Component
// const InputField = ({
//   label,
//   name,
//   value,
//   onChange,
//   type = "text",
// }: {
//   label: string;
//   name: string;
//   value: string;
//   type?: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }) => (
//   <div>
//     <label className="block text-sm font-medium mb-1">{label}</label>
//     <input
//       type={type}
//       name={name}
//       value={value}
//       onChange={onChange}
//       className="w-full border px-2 py-1 rounded"
//       placeholder={`Enter ${label}`}
//     />
//   </div>
// );

// export default DataManagementviewpage;


"use client"
import { useEffect } from "react"
import {
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  Area,
  AreaChart,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ScatterChart,
  Scatter,
  ComposedChart,
} from "recharts"
import CountUp from "react-countup"
import {
  FaChartLine,
  FaIndustry,
  FaLeaf,
  FaCog,
  FaRocket,
  FaTrophy,
  FaFire,
  FaGem,
  FaStar,
  FaThermometerHalf,
  FaBolt,
  FaRecycle,
  FaWind,
  FaTint,
  FaHammer,
} from "react-icons/fa"
import { MdTrendingUp, MdSpeed } from "react-icons/md"
import { Doughnut } from "react-chartjs-2"
import type { ChartOptions } from "chart.js"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend as ChartLegend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js"

ChartJS.register(ArcElement, ChartTooltip, ChartLegend, CategoryScale, LinearScale, BarElement)

// Enhanced Real Manufacturing Process Data with New Topics
// const realProcessData = [
//   {
//     id: 1,
//     name: "Pattern Making",
//     without: 487.5,
//     with: 195.0,
//     saving: 292.5,
//     monthlySaving: 8775.0,
//     yearlySaving: 106762.5,
//     reduction: 60.0,
//     totalKwh: 43.88,
//     kwhAfter: 17.55,
//     kwhSaving: 26.33,
//     monthlyKwh: 38091,
//     yearlyKwh: 457095,
//     category: "Production",
//   },
//   {
//     id: 2,
//     name: "Mold Preparation",
//     without: 731.25,
//     with: 325.0,
//     saving: 406.25,
//     monthlySaving: 12187.5,
//     yearlySaving: 148281.25,
//     reduction: 55.56,
//     totalKwh: 65.81,
//     kwhAfter: 29.25,
//     kwhSaving: 36.56,
//     monthlyKwh: 57113,
//     yearlyKwh: 685350,
//     category: "Production",
//   },
//   {
//     id: 3,
//     name: "Assembly of Mold & Gating",
//     without: 487.5,
//     with: 195.0,
//     saving: 292.5,
//     monthlySaving: 8775.0,
//     yearlySaving: 106762.5,
//     reduction: 60.0,
//     totalKwh: 43.88,
//     kwhAfter: 17.55,
//     kwhSaving: 26.33,
//     monthlyKwh: 38091,
//     yearlyKwh: 457095,
//     category: "Production",
//   },
//   {
//     id: 4,
//     name: "Metal Melting",
//     without: 10968.75,
//     with: 9587.5,
//     saving: 1381.25,
//     monthlySaving: 41437.5,
//     yearlySaving: 503156.25,
//     reduction: 12.6,
//     totalKwh: 987.19,
//     kwhAfter: 862.88,
//     kwhSaving: 124.31,
//     monthlyKwh: 855722,
//     yearlyKwh: 10268662,
//     category: "Production",
//   },
//   {
//     id: 5,
//     name: "Tapping",
//     without: 1000.0,
//     with: 562.5,
//     saving: 437.5,
//     monthlySaving: 13125.0,
//     yearlySaving: 159687.5,
//     reduction: 43.75,
//     totalKwh: 90,
//     kwhAfter: 50.63,
//     kwhSaving: 39.38,
//     monthlyKwh: 77986,
//     yearlyKwh: 935833,
//     category: "Production",
//   },
//   {
//     id: 6,
//     name: "Purification",
//     without: 975.0,
//     with: 568.75,
//     saving: 406.25,
//     monthlySaving: 12187.5,
//     yearlySaving: 148281.25,
//     reduction: 41.67,
//     totalKwh: 87.75,
//     kwhAfter: 51.19,
//     kwhSaving: 36.56,
//     monthlyKwh: 76036,
//     yearlyKwh: 912427,
//     category: "Production",
//   },
//   {
//     id: 7,
//     name: "Pouring",
//     without: 1137.5,
//     with: 731.25,
//     saving: 406.25,
//     monthlySaving: 12187.5,
//     yearlySaving: 148281.25,
//     reduction: 35.71,
//     totalKwh: 102.38,
//     kwhAfter: 65.81,
//     kwhSaving: 36.56,
//     monthlyKwh: 88724,
//     yearlyKwh: 1064688,
//     category: "Production",
//   },
//   {
//     id: 8,
//     name: "Rough Casting",
//     without: 528.13,
//     with: 284.38,
//     saving: 243.75,
//     monthlySaving: 7312.5,
//     yearlySaving: 89018.75,
//     reduction: 46.16,
//     totalKwh: 47.53,
//     kwhAfter: 25.59,
//     kwhSaving: 21.94,
//     monthlyKwh: 41251,
//     yearlyKwh: 495011,
//     category: "Production",
//   },
//   {
//     id: 9,
//     name: "Cooling",
//     without: 365.63,
//     with: 219.38,
//     saving: 146.25,
//     monthlySaving: 4387.5,
//     yearlySaving: 53381.25,
//     reduction: 40.0,
//     totalKwh: 32.91,
//     kwhAfter: 19.74,
//     kwhSaving: 13.17,
//     monthlyKwh: 28552,
//     yearlyKwh: 342625,
//     category: "Production",
//   },
//   {
//     id: 10,
//     name: "Solidification",
//     without: 146.25,
//     with: 73.13,
//     saving: 73.13,
//     monthlySaving: 2193.75,
//     yearlySaving: 26681.25,
//     reduction: 50.0,
//     totalKwh: 13.16,
//     kwhAfter: 6.58,
//     kwhSaving: 6.58,
//     monthlyKwh: 11429,
//     yearlyKwh: 137143,
//     category: "Production",
//   },
//   {
//     id: 11,
//     name: "Risers",
//     without: 113.75,
//     with: 56.88,
//     saving: 56.88,
//     monthlySaving: 1706.25,
//     yearlySaving: 20756.25,
//     reduction: 50.0,
//     totalKwh: 10.24,
//     kwhAfter: 5.12,
//     kwhSaving: 5.12,
//     monthlyKwh: 8889,
//     yearlyKwh: 106667,
//     category: "Production",
//   },
//   {
//     id: 12,
//     name: "Shakeout",
//     without: 73.13,
//     with: 40.63,
//     saving: 32.5,
//     monthlySaving: 975.0,
//     yearlySaving: 11862.5,
//     reduction: 44.4,
//     totalKwh: 6.58,
//     kwhAfter: 3.66,
//     kwhSaving: 2.92,
//     monthlyKwh: 5712,
//     yearlyKwh: 68540,
//     category: "Production",
//   },
//   {
//     id: 13,
//     name: "Mold Breaking",
//     without: 105.63,
//     with: 56.88,
//     saving: 48.75,
//     monthlySaving: 1462.5,
//     yearlySaving: 17793.75,
//     reduction: 46.1,
//     totalKwh: 9.51,
//     kwhAfter: 5.12,
//     kwhSaving: 4.39,
//     monthlyKwh: 8341,
//     yearlyKwh: 100091,
//     category: "Production",
//   },
//   {
//     id: 14,
//     name: "Fettling & Finishing",
//     without: 178.75,
//     with: 105.63,
//     saving: 73.13,
//     monthlySaving: 2193.75,
//     yearlySaving: 26681.25,
//     reduction: 40.9,
//     totalKwh: 16.09,
//     kwhAfter: 9.51,
//     kwhSaving: 6.58,
//     monthlyKwh: 13973,
//     yearlyKwh: 167681,
//     category: "Production",
//   },
//   {
//     id: 15,
//     name: "Scrap Optimization",
//     without: 2000000.0,
//     with: 1960000.0,
//     saving: 40000.0,
//     monthlySaving: 1200000.0,
//     yearlySaving: 14600000.0,
//     reduction: 2.0,
//     totalKwh: 54000.0,
//     kwhAfter: 0,
//     kwhSaving: 54000.0,
//     category: "Production",
//   },
//   {
//     id: 16,
//     name: "Heat Process",
//     without: 12500.0,
//     with: 7500.0,
//     saving: 5000.0,
//     monthlySaving: 150000.0,
//     yearlySaving: 1800000.0,
//     reduction: 40.0,
//     totalKwh: 1125.11,
//     kwhAfter: 675.07,
//     kwhSaving: 450.05,
//     monthlyKwh: 13501,
//     yearlyKwh: 164266,
//     category: "Production",
//   },
//   {
//     id: 17,
//     name: "Vibration",
//     without: 625.0,
//     with: 387.5,
//     saving: 237.5,
//     monthlySaving: 7125.0,
//     yearlySaving: 85312.5,
//     reduction: 38.0,
//     totalKwh: 56.25,
//     kwhAfter: 34.88,
//     kwhSaving: 21.37,
//     monthlyKwh: 16875,
//     yearlyKwh: 202813,
//     category: "Production",
//   },
//   {
//     id: 18,
//     name: "Furnaces - Melting",
//     without: 15000.0,
//     with: 8500.0,
//     saving: 6500.0,
//     monthlySaving: 195000.0,
//     yearlySaving: 2370000.0,
//     reduction: 43.33,
//     totalKwh: 1350.0,
//     kwhAfter: 765.0,
//     kwhSaving: 585.0,
//     monthlyKwh: 175500,
//     yearlyKwh: 2106000,
//     category: "Furnaces",
//   },
//   {
//     id: 19,
//     name: "Furnaces - Heat Treatment",
//     without: 12500.0,
//     with: 7800.0,
//     saving: 4700.0,
//     monthlySaving: 141000.0,
//     yearlySaving: 1715500.0,
//     reduction: 37.6,
//     totalKwh: 1125.0,
//     kwhAfter: 702.0,
//     kwhSaving: 423.0,
//     monthlyKwh: 126900,
//     yearlyKwh: 1522800,
//     category: "Furnaces",
//   },
//   {
//     id: 20,
//     name: "Compressed Air - Main System",
//     without: 8750.0,
//     with: 5250.0,
//     saving: 3500.0,
//     monthlySaving: 105000.0,
//     yearlySaving: 1277500.0,
//     reduction: 40.0,
//     totalKwh: 787.5,
//     kwhAfter: 472.5,
//     kwhSaving: 315.0,
//     monthlyKwh: 94500,
//     yearlyKwh: 1134000,
//     category: "Compressed Air",
//   },
//   {
//     id: 21,
//     name: "Compressed Air - Distribution",
//     without: 6250.0,
//     with: 4375.0,
//     saving: 1875.0,
//     monthlySaving: 56250.0,
//     yearlySaving: 683750.0,
//     reduction: 30.0,
//     totalKwh: 562.5,
//     kwhAfter: 393.75,
//     kwhSaving: 168.75,
//     monthlyKwh: 50625,
//     yearlyKwh: 607500,
//     category: "Compressed Air",
//   },
//   {
//     id: 22,
//     name: "Pump House - Water Circulation",
//     without: 5500.0,
//     with: 3300.0,
//     saving: 2200.0,
//     monthlySaving: 66000.0,
//     yearlySaving: 803000.0,
//     reduction: 40.0,
//     totalKwh: 495.0,
//     kwhAfter: 297.0,
//     kwhSaving: 198.0,
//     monthlyKwh: 59400,
//     yearlyKwh: 712800,
//     category: "Pump House",
//   },
//   {
//     id: 23,
//     name: "Pump House - Hydraulic Systems",
//     without: 4200.0,
//     with: 2940.0,
//     saving: 1260.0,
//     monthlySaving: 37800.0,
//     yearlySaving: 459900.0,
//     reduction: 30.0,
//     totalKwh: 378.0,
//     kwhAfter: 264.6,
//     kwhSaving: 113.4,
//     monthlyKwh: 34020,
//     yearlyKwh: 408240,
//     category: "Pump House",
//   },
//   {
//     id: 24,
//     name: "Shot Blasting - Surface Prep",
//     without: 7800.0,
//     with: 4680.0,
//     saving: 3120.0,
//     monthlySaving: 93600.0,
//     yearlySaving: 1138800.0,
//     reduction: 40.0,
//     totalKwh: 702.0,
//     kwhAfter: 421.2,
//     kwhSaving: 280.8,
//     monthlyKwh: 84240,
//     yearlyKwh: 1010880,
//     category: "Shot Blasting",
//   },
//   {
//     id: 25,
//     name: "Shot Blasting - Finishing",
//     without: 6500.0,
//     with: 4550.0,
//     saving: 1950.0,
//     monthlySaving: 58500.0,
//     yearlySaving: 712500.0,
//     reduction: 30.0,
//     totalKwh: 585.0,
//     kwhAfter: 409.5,
//     kwhSaving: 175.5,
//     monthlyKwh: 52650,
//     yearlyKwh: 631800,
//     category: "Shot Blasting",
//   },
// ]

// Enhanced Summary Data with New Categories
const summaryData = [
  {
    title: "Total Processes",
    value: 25,
    isCurrency: false,
    colors: "from-purple-600 via-purple-500 to-pink-500",
    icon: <FaIndustry className="text-2xl" />,
    bgPattern: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
  },
  {
    title: "Total Daily Savings",
    value: 75000,
    isCurrency: true,
    colors: "from-emerald-600 via-emerald-500 to-teal-500",
    icon: <FaTrophy className="text-2xl" />,
    bgPattern: "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
  },
  {
    title: "Energy Saved Daily",
    value: 85000,
    suffix: " kWh",
    isCurrency: false,
    decimals: 0,
    colors: "from-green-600 via-green-500 to-lime-500",
    icon: <FaLeaf className="text-2xl" />,
    bgPattern: "bg-gradient-to-br from-green-50 to-lime-50 dark:from-green-900/20 dark:to-lime-900/20",
  },
  {
    title: "Monthly Savings",
    value: 2250000,
    isCurrency: true,
    colors: "from-indigo-600 via-indigo-500 to-purple-500",
    icon: <MdTrendingUp className="text-2xl" />,
    bgPattern: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20",
  },
  {
    title: "Yearly Savings",
    value: 27000000,
    isCurrency: true,
    colors: "from-teal-600 via-teal-500 to-cyan-500",
    icon: <FaStar className="text-2xl" />,
    bgPattern: "bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20",
  },
  {
    title: "Avg. Reduction",
    value: 38.5,
    suffix: "%",
    isCurrency: false,
    decimals: 1,
    colors: "from-yellow-600 via-yellow-500 to-amber-500",
    icon: <FaGem className="text-2xl" />,
    bgPattern: "bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20",
  },
]

// New Data for Enhanced Topics
const furnaceData = [
  { name: "Melting Furnace 1", efficiency: 92, temperature: 1650, energyUsage: 450, status: "🟢" },
  { name: "Melting Furnace 2", efficiency: 88, temperature: 1620, energyUsage: 420, status: "🟢" },
  { name: "Heat Treatment 1", efficiency: 85, temperature: 850, energyUsage: 280, status: "🟡" },
  { name: "Heat Treatment 2", efficiency: 90, temperature: 900, energyUsage: 310, status: "🟢" },
]

const compressedAirData = [
  { system: "Main Compressor 1", pressure: 8.5, flow: 120, efficiency: 88, power: 75 },
  { system: "Main Compressor 2", pressure: 8.2, flow: 115, efficiency: 85, power: 72 },
  { system: "Backup Compressor", pressure: 8.0, flow: 80, efficiency: 82, power: 55 },
  { system: "Distribution Network", pressure: 7.8, flow: 300, efficiency: 90, power: 25 },
]

const pumpHouseData = [
  { pump: "Water Pump 1", flow: 250, pressure: 4.5, efficiency: 92, power: 45 },
  { pump: "Water Pump 2", flow: 230, pressure: 4.2, efficiency: 88, power: 42 },
  { pump: "Hydraulic Pump 1", flow: 180, pressure: 12.0, efficiency: 85, power: 65 },
  { pump: "Hydraulic Pump 2", flow: 175, pressure: 11.8, efficiency: 87, power: 63 },
]

const shotBlastingData = [
  { machine: "Shot Blast 1", throughput: 85, abrasive: 92, dust: 15, power: 120 },
  { machine: "Shot Blast 2", throughput: 78, abrasive: 88, dust: 18, power: 115 },
  { machine: "Finishing Blast 1", throughput: 95, abrasive: 95, dust: 12, power: 95 },
  { machine: "Finishing Blast 2", throughput: 90, abrasive: 90, dust: 14, power: 90 },
]

// Electricity Loss and Savings Analysis
const electricityLossData = [
  { category: "Transmission Loss", before: 8.5, after: 3.2, saving: 5.3, cost: 15900 },
  { category: "Motor Inefficiency", before: 12.3, after: 6.8, saving: 5.5, cost: 16500 },
  { category: "Power Factor", before: 6.2, after: 2.1, saving: 4.1, cost: 12300 },
  { category: "Idle Running", before: 15.8, after: 4.5, saving: 11.3, cost: 33900 },
  { category: "Heat Loss", before: 9.7, after: 3.9, saving: 5.8, cost: 17400 },
]

// Category-wise Performance Data
const categoryPerformance = [
  { category: "Furnaces", processes: 2, totalSaving: 11200, energySaved: 1008, efficiency: 90.5 },
  { category: "Compressed Air", processes: 2, totalSaving: 5375, energySaved: 483.75, efficiency: 85.0 },
  { category: "Pump House", processes: 2, totalSaving: 3460, energySaved: 311.4, efficiency: 88.5 },
  { category: "Shot Blasting", processes: 2, totalSaving: 5070, energySaved: 456.3, efficiency: 87.0 },
  { category: "Production", processes: 17, totalSaving: 49536, energySaved: 4458.75, efficiency: 92.0 },
]

// Enhanced Color Palettes
const vibrantColors = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFEAA7",
  "#DDA0DD",
  "#98D8C8",
  "#F7DC6F",
  "#BB8FCE",
  "#85C1E9",
  "#F8C471",
  "#82E0AA",
  "#F1948A",
  "#85C1E9",
  "#D7BDE2",
]

// const gradientColors = [
//   "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//   "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
//   "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
//   "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
//   "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
// ]

// Replace allProcessData with realProcessData
// const allProcessData = realProcessData

// type ProcessData = {
//   name: string
//   without: number
//   with: number
//   saving: number
// }

// const chunkData = (data: ProcessData[], chunkSize: number): ProcessData[][] => {
//   const chunks: ProcessData[][] = []
//   for (let i = 0; i < data.length; i += chunkSize) {
//     chunks.push(data.slice(i, i + chunkSize))
//   }
//   return chunks
// }

// Enhanced data with more visual appeal
// const energyData = [
//   {
//     month: "Jan",
//     consumption: 56738,
//     target: 50000,
//     efficiency: 88,
//     renewable: 15000,
//     saved: 54859,
//   },
//   {
//     month: "Feb",
//     consumption: 52000,
//     target: 50000,
//     efficiency: 92,
//     renewable: 16000,
//     saved: 58000,
//   },
//   {
//     month: "Mar",
//     consumption: 48000,
//     target: 50000,
//     efficiency: 96,
//     renewable: 17000,
//     saved: 62000,
//   },
//   {
//     month: "Apr",
//     consumption: 45000,
//     target: 50000,
//     efficiency: 100,
//     renewable: 18000,
//     saved: 65000,
//   },
//   {
//     month: "May",
//     consumption: 42000,
//     target: 50000,
//     efficiency: 105,
//     renewable: 19000,
//     saved: 68000,
//   },
// ]

// const efficiencyData = [
//   { week: "W1", efficiency: 85, target: 90, improvement: 5, oee: 78 },
//   { week: "W2", efficiency: 88, target: 90, improvement: 3, oee: 82 },
//   { week: "W3", efficiency: 92, target: 90, improvement: -2, oee: 87 },
//   { week: "W4", efficiency: 95, target: 90, improvement: -5, oee: 91 },
// ]

// const qualityRadarData = [
//   { subject: "Accuracy", A: 90, B: 85, fullMark: 100 },
//   { subject: "Speed", A: 85, B: 80, fullMark: 100 },
//   { subject: "Reliability", A: 88, B: 82, fullMark: 100 },
//   { subject: "Cost Efficiency", A: 92, B: 88, fullMark: 100 },
//   { subject: "Safety", A: 95, B: 90, fullMark: 100 },
//   { subject: "Innovation", A: 87, B: 75, fullMark: 100 },
// ]

// const productionData = [
//   { month: "Jan", heavy: 120, light: 80, total: 200, target: 180 },
//   { month: "Feb", heavy: 140, light: 90, total: 230, target: 200 },
//   { month: "Mar", heavy: 160, light: 100, total: 260, target: 220 },
//   { month: "Apr", heavy: 180, light: 110, total: 290, target: 250 },
// ];

// NEW DATA SETS FOR ADDITIONAL CHARTS

// 1. Workforce Analytics
// const workforceData = [
//   {
//     department: "Production",
//     employees: 45,
//     productivity: 92,
//     satisfaction: 85,
//   },
//   { department: "Quality", employees: 12, productivity: 88, satisfaction: 90 },
//   {
//     department: "Maintenance",
//     employees: 8,
//     productivity: 85,
//     satisfaction: 82,
//   },
//   {
//     department: "Logistics",
//     employees: 15,
//     productivity: 90,
//     satisfaction: 88,
//   },
//   { department: "Admin", employees: 6, productivity: 78, satisfaction: 85 },
// ]

// 2. Equipment Performance Scatter
// const equipmentScatterData = [
//   { age: 2, efficiency: 95, maintenance: 5, name: "Machine A" },
//   { age: 5, efficiency: 88, maintenance: 12, name: "Machine B" },
//   { age: 8, efficiency: 82, maintenance: 18, name: "Machine C" },
//   { age: 3, efficiency: 92, maintenance: 8, name: "Machine D" },
//   { age: 10, efficiency: 75, maintenance: 25, name: "Machine E" },
//   { age: 1, efficiency: 98, maintenance: 3, name: "Machine F" },
//   { age: 6, efficiency: 85, maintenance: 15, name: "Machine G" },
// ]

// 3. Supply Chain Timeline
// const supplyChainData = [
//   { week: "W1", orders: 45, delivered: 42, delayed: 3, cancelled: 0 },
//   { week: "W2", orders: 52, delivered: 48, delayed: 3, cancelled: 1 },
//   { week: "W3", orders: 48, delivered: 46, delayed: 2, cancelled: 0 },
//   { week: "W4", orders: 55, delivered: 52, delayed: 2, cancelled: 1 },
// ]

// 4. Cost Analysis Waterfall Data
// const costWaterfallData = [
//   { category: "Raw Materials", value: 45000, cumulative: 45000 },
//   { category: "Labor", value: 25000, cumulative: 70000 },
//   { category: "Energy", value: 15000, cumulative: 85000 },
//   { category: "Maintenance", value: 8000, cumulative: 93000 },
//   { category: "Overhead", value: 12000, cumulative: 105000 },
//   { category: "Savings", value: -8000, cumulative: 97000 },
// ];

// 5. Quality Metrics Timeline
// const qualityTimelineData = [
//   { date: "Jan", defectRate: 2.5, reworkRate: 1.2, customerComplaints: 3 },
//   { date: "Feb", defectRate: 2.1, reworkRate: 1.0, customerComplaints: 2 },
//   { date: "Mar", defectRate: 1.8, reworkRate: 0.8, customerComplaints: 1 },
//   { date: "Apr", defectRate: 1.5, reworkRate: 0.6, customerComplaints: 1 },
//   { date: "May", defectRate: 1.2, reworkRate: 0.5, customerComplaints: 0 },
// ]

// 6. Inventory Turnover
// const inventoryData = [
//   {
//     item: "Steel Sheets",
//     current: 450,
//     minimum: 200,
//     maximum: 600,
//     turnover: 8.5,
//   },
//   {
//     item: "Aluminum Rods",
//     current: 320,
//     minimum: 150,
//     maximum: 500,
//     turnover: 12.3,
//   },
//   {
//     item: "Copper Wire",
//     current: 180,
//     minimum: 100,
//     maximum: 300,
//     turnover: 15.2,
//   },
//   {
//     item: "Plastic Pellets",
//     current: 280,
//     minimum: 200,
//     maximum: 400,
//     turnover: 6.8,
//   },
// ]

// 7. Environmental Impact
// const environmentalData = [
//   { month: "Jan", co2: 1200, water: 850, waste: 45, recycled: 38 },
//   { month: "Feb", co2: 1100, water: 800, waste: 42, recycled: 36 },
//   { month: "Mar", co2: 950, water: 750, waste: 38, recycled: 34 },
//   { month: "Apr", co2: 800, water: 700, waste: 35, recycled: 32 },
//   { month: "May", co2: 750, water: 650, waste: 32, recycled: 30 },
// ]

// 8. Shift Performance Comparison
// const shiftComparisonData = [
//   { shift: "Morning", output: 95, quality: 92, efficiency: 90, safety: 98 },
//   { shift: "Afternoon", output: 88, quality: 90, efficiency: 85, safety: 95 },
//   { shift: "Night", output: 82, quality: 85, efficiency: 80, safety: 92 },
// ]

// 9. Customer Satisfaction Breakdown
// const customerSatisfactionData = {
//   labels: ["Excellent (9-10)", "Good (7-8)", "Average (5-6)", "Poor (3-4)", "Very Poor (1-2)"],
//   datasets: [
//     {
//       data: [65, 25, 8, 2, 0],
//       backgroundColor: ["#34D399", "#60A5FA", "#FBBF24", "#F87171", "#EF4444"],
//       borderWidth: 2,
//       borderColor: "#ffffff",
//     },
//   ],
// }

// 10. Financial Performance Trends
// const financialTrendsData = [
//   {
//     quarter: "Q1",
//     revenue: 18052,
//     costs: 14500,
//     profit: 3552,
//     margin: 19.7,
//     dailySaving: 49536,
//   },
//   {
//     quarter: "Q2",
//     revenue: 19500,
//     costs: 15200,
//     profit: 4300,
//     margin: 22.1,
//     dailySaving: 52000,
//   },
//   {
//     quarter: "Q3",
//     revenue: 21000,
//     costs: 15800,
//     profit: 5200,
//     margin: 24.8,
//     dailySaving: 55000,
//   },
//   {
//     quarter: "Q4",
//     revenue: 22500,
//     costs: 16200,
//     profit: 6300,
//     margin: 28.0,
//     dailySaving: 58000,
//   },
// ]

// Pyramid Chart Data with enhanced visuals
// const pyramidData = [
//   {
//     stage: "🏭 Raw Materials",
//     value: 100,
//     percentage: 100,
//     color: "#10B981",
//     gradient: "from-emerald-400 to-emerald-600",
//   },
//   {
//     stage: "⚡ Initial Processing",
//     value: 85,
//     percentage: 85,
//     color: "#3B82F6",
//     gradient: "from-blue-400 to-blue-600",
//   },
//   {
//     stage: "🔍 Quality Check 1",
//     value: 75,
//     percentage: 75,
//     color: "#F59E0B",
//     gradient: "from-amber-400 to-amber-600",
//   },
//   {
//     stage: "🔧 Assembly",
//     value: 65,
//     percentage: 65,
//     color: "#EF4444",
//     gradient: "from-red-400 to-red-600",
//   },
//   {
//     stage: "✅ Quality Check 2",
//     value: 58,
//     percentage: 58,
//     color: "#8B5CF6",
//     gradient: "from-purple-400 to-purple-600",
//   },
//   {
//     stage: "🎯 Final Processing",
//     value: 52,
//     percentage: 52,
//     color: "#F97316",
//     gradient: "from-orange-400 to-orange-600",
//   },
//   // { stage: "🔬 Final Inspection", value: 48, percentage: 48, color: "#06B6D4", gradient: "from-cyan-400 to-cyan-600" },
//   // { stage: "📦 Finished Products", value: 45, percentage: 45, color: "#84CC16", gradient: "from-lime-400 to-lime-600" },
// ]

// Enhanced Pyramid Component with animations
// const PyramidChart = ({ data }: { data: any[] }) => {
//   return (
//     <div className="flex flex-col items-center justify-center h-full space-y-2 p-4">
//       {data.map((item, index) => (
//         <div
//           key={index}
//           className="flex flex-col items-center relative group transition-all duration-500 hover:scale-105"
//           style={{
//             width: `${item.percentage}%`,
//             maxWidth: "95%",
//             minWidth: "25%",
//           }}
//         >
//           <div
//             className={`h-12 flex items-center justify-center text-sm font-bold text-white rounded-xl shadow-lg border-2 border-white/20 backdrop-blur-sm transition-all duration-300 group-hover:shadow-2xl group-hover:border-white/60 bg-gradient-to-r ${item.gradient}`}
//             style={{
//               width: "100%",
//               boxShadow: `0 8px 32px ${item.color}40`,
//             }}
//           >
//             <span className="truncate px-3 drop-shadow-sm">
//               {item.stage}: {item.value}%
//             </span>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// Custom Gauge Chart Component
const GaugeChart = ({ value, max, title, color }: { value: number; max: number; title: string; color: string }) => {
  const percentage = (value / max) * 100
  const strokeDasharray = `${percentage * 2.51} 251`

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="relative w-32 h-32">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="#374151" strokeWidth="8" fill="none" />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke={color}
            strokeWidth="8"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold" style={{ color }}>
              {value}%
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 text-sm font-medium text-gray-300">{title}</div>
    </div>
  )
}

// Enhanced data sets
// const temperatureData = [
//   { time: "00:00", temp: 22, humidity: 45, optimal: 24, pressure: 1013 },
//   { time: "04:00", temp: 24, humidity: 48, optimal: 24, pressure: 1015 },
//   { time: "08:00", temp: 28, humidity: 52, optimal: 24, pressure: 1012 },
//   { time: "12:00", temp: 32, humidity: 55, optimal: 24, pressure: 1010 },
//   { time: "16:00", temp: 30, humidity: 50, optimal: 24, pressure: 1011 },
//   { time: "20:00", temp: 26, humidity: 47, optimal: 24, pressure: 1014 },
// ]

// const machineUtilizationData = [
//   {
//     machine: "Machine Alpha",
//     utilization: 85,
//     downtime: 15,
//     status: "🟢",
//     efficiency: 88,
//   },
//   {
//     machine: "Machine Beta",
//     utilization: 92,
//     downtime: 8,
//     status: "🟢",
//     efficiency: 94,
//   },
//   {
//     machine: "Machine Gamma",
//     utilization: 78,
//     downtime: 22,
//     status: "🟡",
//     efficiency: 75,
//   },
//   {
//     machine: "Machine Delta",
//     utilization: 88,
//     downtime: 12,
//     status: "🟢",
//     efficiency: 90,
//   },
//   {
//     machine: "Machine Omega",
//     utilization: 95,
//     downtime: 5,
//     status: "🟢",
//     efficiency: 96,
//   },
// ]

const OverviewPage = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark")
  }, [])

  const getChartOptions = (): ChartOptions<"doughnut"> => ({
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: "#E5E7EB",
          font: { size: 12, weight: 600 },
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: "rgba(17, 24, 39, 0.95)",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderColor: "#374151",
        borderWidth: 1,
        cornerRadius: 10,
      },
    },
    maintainAspectRatio: false,
    animation: { animateRotate: true, animateScale: true, duration: 2000 },
  })

  return (
    <div className="min-h-screen transition-all duration-500 dark:bg-[#0f1422] text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 p-6">
        {/* Enhanced Header */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg">
                <FaRocket className="text-2xl text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Enhanced Manufacturing Analytics Dashboard
                </h1>
                <p className="text-gray-300 mt-1">
                  Comprehensive insights with Furnaces, Compressed Air, Pump House & Shot Blasting
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {summaryData.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-700/50 backdrop-blur-sm"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${item.colors} opacity-90`}></div>
              <div className="relative p-6 text-white">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-sm font-medium opacity-90 mb-1">{item.title}</div>
                    <div className="text-2xl font-bold">
                      {item.isCurrency && "₹"}
                      <CountUp
                        end={item.value}
                        duration={2.5}
                        decimals={item.decimals || 0}
                        separator=","
                        suffix={item.suffix || ""}
                      />
                    </div>
                  </div>
                  <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Category Performance Table */}
          <div className="bg-gray-800/70 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg">
                <FaChartLine className="text-white text-lg" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                📊 Category Performance Summary
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-3 px-2 text-gray-300">Category</th>
                    <th className="text-right py-3 px-2 text-gray-300">Processes</th>
                    <th className="text-right py-3 px-2 text-gray-300">Daily Savings</th>
                    <th className="text-right py-3 px-2 text-gray-300">Energy Saved</th>
                    <th className="text-right py-3 px-2 text-gray-300">Efficiency</th>
                  </tr>
                </thead>
                <tbody>
                  {categoryPerformance.map((cat, idx) => (
                    <tr key={idx} className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors">
                      <td className="py-3 px-2 font-medium text-white">{cat.category}</td>
                      <td className="py-3 px-2 text-right text-blue-400">{cat.processes}</td>
                      <td className="py-3 px-2 text-right text-green-400">₹{cat.totalSaving.toLocaleString()}</td>
                      <td className="py-3 px-2 text-right text-yellow-400">{cat.energySaved} kWh</td>
                      <td className="py-3 px-2 text-right text-purple-400">{cat.efficiency}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Electricity Loss Analysis Table */}
          <div className="bg-gray-800/70 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg">
                <FaBolt className="text-white text-lg" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                ⚡ Electricity Loss & Savings Analysis
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-600">
                    <th className="text-left py-3 px-2 text-gray-300">Loss Category</th>
                    <th className="text-right py-3 px-2 text-gray-300">Before %</th>
                    <th className="text-right py-3 px-2 text-gray-300">After %</th>
                    <th className="text-right py-3 px-2 text-gray-300">Reduction</th>
                    <th className="text-right py-3 px-2 text-gray-300">Cost Saved</th>
                  </tr>
                </thead>
                <tbody>
                  {electricityLossData.map((loss, idx) => (
                    <tr key={idx} className="border-b border-gray-700/50 hover:bg-gray-700/30 transition-colors">
                      <td className="py-3 px-2 font-medium text-white">{loss.category}</td>
                      <td className="py-3 px-2 text-right text-red-400">{loss.before}%</td>
                      <td className="py-3 px-2 text-right text-green-400">{loss.after}%</td>
                      <td className="py-3 px-2 text-right text-blue-400">{loss.saving}%</td>
                      <td className="py-3 px-2 text-right text-yellow-400">₹{loss.cost.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Enhanced Charts Grid with New Topics */}
        <div className="space-y-6">
          {/* Row 1: Furnaces Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800/70 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg">
                  <FaFire className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  🔥 Furnaces Performance Analysis
                </h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={furnaceData}>
                    <defs>
                      <linearGradient id="furnaceGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FF6B6B" stopOpacity={0.8} />
                        <stop offset="100%" stopColor="#FF8E53" stopOpacity={0.6} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.5} />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 10, fill: "#D1D5DB" }}
                      angle={-30}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis tick={{ fontSize: 12, fill: "#D1D5DB" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        color: "#ffffff",
                      }}
                    />
                    <Legend />
                    <Bar
                      dataKey="efficiency"
                      fill="url(#furnaceGradient)"
                      name="🎯 Efficiency %"
                      radius={[4, 4, 0, 0]}
                    />
                    <Line
                      type="monotone"
                      dataKey="energyUsage"
                      stroke="#4ECDC4"
                      strokeWidth={3}
                      name="⚡ Energy Usage (kW)"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-gray-800/70 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                  <FaThermometerHalf className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  🌡️ Furnace Temperature Monitoring
                </h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={furnaceData}>
                    <defs>
                      <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#4ECDC4" stopOpacity={0.8} />
                        <stop offset="100%" stopColor="#44A08D" stopOpacity={0.3} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.5} />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 10, fill: "#D1D5DB" }}
                      angle={-30}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis tick={{ fontSize: 12, fill: "#D1D5DB" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        color: "#ffffff",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="temperature"
                      stroke="#4ECDC4"
                      fill="url(#tempGradient)"
                      strokeWidth={3}
                      name="🌡️ Temperature (°C)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Row 2: Compressed Air Systems */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800/70 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <FaWind className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  💨 Compressed Air Systems Performance
                </h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={compressedAirData}>
                    <PolarGrid stroke="#374151" />
                    <PolarAngleAxis dataKey="system" tick={{ fontSize: 10, fill: "#D1D5DB" }} />
                    <PolarRadiusAxis angle={90} domain={[0, 150]} tick={{ fontSize: 8, fill: "#D1D5DB" }} />
                    <Radar
                      name="Pressure (bar)"
                      dataKey="pressure"
                      stroke="#45B7D1"
                      fill="#45B7D1"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                    <Radar
                      name="Flow (m³/min)"
                      dataKey="flow"
                      stroke="#96CEB4"
                      fill="#96CEB4"
                      fillOpacity={0.2}
                      strokeWidth={2}
                    />
                    <Legend />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        color: "#ffffff",
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-gray-800/70 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg">
                  <FaBolt className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  ⚡ Air System Power Consumption
                </h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={compressedAirData}>
                    <defs>
                      <linearGradient id="powerGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#96CEB4" stopOpacity={0.8} />
                        <stop offset="100%" stopColor="#FFEAA7" stopOpacity={0.6} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.5} />
                    <XAxis
                      dataKey="system"
                      tick={{ fontSize: 10, fill: "#D1D5DB" }}
                      angle={-30}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis tick={{ fontSize: 12, fill: "#D1D5DB" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        color: "#ffffff",
                      }}
                    />
                    <Bar dataKey="power" fill="url(#powerGradient)" name="⚡ Power (kW)" radius={[4, 4, 0, 0]}>
                      {compressedAirData.map((_, index) => (
                        <Cell key={index} fill={vibrantColors[index % vibrantColors.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Row 3: Pump House Systems */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800/70 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg">
                  <FaTint className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  💧 Pump House Performance
                </h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={pumpHouseData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.5} />
                    <XAxis
                      dataKey="pump"
                      tick={{ fontSize: 10, fill: "#D1D5DB" }}
                      angle={-30}
                      textAnchor="end"
                      height={80}
                    />
                    <YAxis tick={{ fontSize: 12, fill: "#D1D5DB" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        color: "#ffffff",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="flow" fill="#4ECDC4" name="💧 Flow Rate" radius={[4, 4, 0, 0]} />
                    <Line
                      type="monotone"
                      dataKey="efficiency"
                      stroke="#FFEAA7"
                      strokeWidth={3}
                      name="📈 Efficiency %"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-gray-800/70 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <FaCog className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  🔧 Pump Pressure Analysis
                </h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart data={pumpHouseData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.5} />
                    <XAxis dataKey="pressure" name="Pressure (bar)" tick={{ fontSize: 12, fill: "#D1D5DB" }} />
                    <YAxis dataKey="efficiency" name="Efficiency %" tick={{ fontSize: 12, fill: "#D1D5DB" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        color: "#ffffff",
                      }}
                    />
                    <Scatter name="Pumps" fill="#DDA0DD" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Row 4: Shot Blasting Machines */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800/70 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                  <FaHammer className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  🔨 Shot Blasting Performance
                </h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={shotBlastingData}>
                    <defs>
                      <linearGradient id="blastGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FF6B6B" stopOpacity={0.8} />
                        <stop offset="100%" stopColor="#FF8E53" stopOpacity={0.3} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.5} />
                    <XAxis dataKey="machine" tick={{ fontSize: 10, fill: "#D1D5DB" }} />
                    <YAxis tick={{ fontSize: 12, fill: "#D1D5DB" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        color: "#ffffff",
                      }}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="throughput"
                      stroke="#FF6B6B"
                      fill="url(#blastGradient)"
                      name="🎯 Throughput %"
                    />
                    <Line
                      type="monotone"
                      dataKey="abrasive"
                      stroke="#4ECDC4"
                      strokeWidth={3}
                      name="⚙️ Abrasive Efficiency %"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-gray-800/70 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg">
                  <FaRecycle className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  ♻️ Shot Blasting Environmental Impact
                </h3>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={shotBlastingData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.5} />
                    <XAxis dataKey="machine" tick={{ fontSize: 10, fill: "#D1D5DB" }} />
                    <YAxis tick={{ fontSize: 12, fill: "#D1D5DB" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(17, 24, 39, 0.95)",
                        border: "none",
                        borderRadius: "12px",
                        color: "#ffffff",
                      }}
                    />
                    <Legend />
                    <Bar dataKey="dust" fill="#F7DC6F" name="💨 Dust Level" radius={[4, 4, 0, 0]} />
                    <Line type="monotone" dataKey="power" stroke="#BB8FCE" strokeWidth={3} name="⚡ Power Usage (kW)" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Row 5: Overall Performance Gauges */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800/70 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg">
                  <MdSpeed className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  🎯 System Performance Gauges
                </h3>
              </div>
              <div className="h-80 grid grid-cols-2 gap-4">
                <GaugeChart value={90} max={100} title="Furnaces" color="#FF6B6B" />
                <GaugeChart value={85} max={100} title="Compressed Air" color="#4ECDC4" />
                <GaugeChart value={88} max={100} title="Pump House" color="#96CEB4" />
                <GaugeChart value={87} max={100} title="Shot Blasting" color="#FFEAA7" />
              </div>
            </div>

            <div className="bg-gray-800/70 border border-gray-700/50 rounded-2xl p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg">
                  <FaLeaf className="text-white text-lg" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                  🌱 Energy Savings by Category
                </h3>
              </div>
              <div className="h-80">
               <Doughnut
  data={{
    labels: categoryPerformance.map((cat) => cat.category),
    datasets: [
      {
        data: categoryPerformance.map((cat) => cat.energySaved),
        backgroundColor: vibrantColors.slice(0, categoryPerformance.length),
        borderWidth: 3,
        borderColor: "#ffffff",
        hoverOffset: 15,
      },
    ],
  }}
  options={{
    ...getChartOptions(),
    cutout: "60%",  // Correct placement
  }}
/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewPage

