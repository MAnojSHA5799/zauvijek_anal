"use client";

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
  Line,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
} from "recharts";
import {
  FaIndustry,
  FaRupeeSign,
  FaChartLine,
  FaBolt,
} from "react-icons/fa";
import { MdSavings, MdCalendarToday } from "react-icons/md";
import CountUp from "react-countup";

const summaryData = [
  {
    title: "Processes Name",
    value: "Pattern Making",
    isCurrency: false,
    colors: "from-blue-600 to-blue-500",
    icon: <FaIndustry className="text-2xl" />,
  },
  {
    title: "Without Zauvijek",
    value: 487.5,
    isCurrency: true,
    colors: "from-blue-700 to-blue-500",
    icon: <FaRupeeSign className="text-2xl" />,
  },
  {
    title: "With Zauvijek",
    value: 195.0,
    isCurrency: true,
    colors: "from-sky-700 to-sky-500",
    icon: <FaRupeeSign className="text-2xl" />,
  },
  {
    title: "Avg. Cost Reduction",
    value: 60.0,
    suffix: "%",
    isCurrency: false,
    decimals: 2,
    colors: "from-rose-600 to-red-500",
    icon: <FaChartLine className="text-2xl" />,
  },
  {
    title: "Electricity Saved",
    value: 26.33,
    suffix: " kWh",
    isCurrency: false,
    decimals: 2,
    colors: "from-emerald-600 to-emerald-400",
    icon: <FaBolt className="text-2xl" />,
  },
  {
    title: "Total Saving (Per Day)",
    value: 292.5,
    isCurrency: true,
    decimals: 2,
    colors: "from-yellow-500 to-orange-400",
    icon: <MdSavings className="text-2xl" />,
  },
  {
    title: "Monthly Saving",
    value: 8775.0,
    isCurrency: true,
    colors: "from-indigo-600 to-indigo-400",
    icon: <MdCalendarToday className="text-2xl" />,
  },
  {
    title: "Yearly Saving",
    value: 106762.5,
    isCurrency: true,
    colors: "from-teal-600 to-teal-400",
    icon: <MdCalendarToday className="text-2xl" />,
  },
];

const COLORS = ["#3722f5", "#3B82F6"];

const patternMakingData = {
  processName: "Pattern Making",
  cost: {
    without: 487.5,
    with: 195.0,
    saving: 292.5,
    monthlySaving: 8775.0,
    yearlySaving: 106762.5,
    reductionPercent: 60.0,
  },
  energy: {
    before: 43.88,
    after: 17.55,
    saved: 26.33,
    totalConsumption: 38091,
  },
};

const monthlyTrendData = [
  { name: "Jan", Manual: 487.5, Zauvijek: 195.0, Saving: 292.5 },
  { name: "Feb", Manual: 487.5, Zauvijek: 195.0, Saving: 292.5 },
  { name: "Mar", Manual: 487.5, Zauvijek: 195.0, Saving: 292.5 },
  { name: "Apr", Manual: 487.5, Zauvijek: 195.0, Saving: 292.5 },
  { name: "May", Manual: 487.5, Zauvijek: 195.0, Saving: 292.5 },
  { name: "Jun", Manual: 487.5, Zauvijek: 195.0, Saving: 292.5 },
  { name: "Jul", Manual: 487.5, Zauvijek: 195.0, Saving: 292.5 },
  { name: "Aug", Manual: 487.5, Zauvijek: 195.0, Saving: 292.5 },
  { name: "Sep", Manual: 487.5, Zauvijek: 195.0, Saving: 292.5 },
  { name: "Oct", Manual: 487.5, Zauvijek: 195.0, Saving: 292.5 },
  { name: "Nov", Manual: 487.5, Zauvijek: 195.0, Saving: 292.5 },
  { name: "Dec", Manual: 487.5, Zauvijek: 195.0, Saving: 292.5 },
];

const pieChartData = [
  { name: "Before Zauvijek", value: patternMakingData.energy.before },
  { name: "With Zauvijek", value: patternMakingData.energy.after },
];

const electricityPerMonth = [
  { name: "Jan", kWh: 3400 },
  { name: "Feb", kWh: 2900 },
  { name: "Mar", kWh: 3100 },
  { name: "Apr", kWh: 3300 },
  { name: "May", kWh: 3500 },
  { name: "Jun", kWh: 3700 },
  { name: "Jul", kWh: 3600 },
  { name: "Aug", kWh: 3900 },
  { name: "Sep", kWh: 4100 },
  { name: "Oct", kWh: 4000 },
  { name: "Nov", kWh: 3800 },
  { name: "Dec", kWh: 3900 },
];

const data = [
  { date: "Dec 31", production: 420, current: 300 },
  { date: "Jan 12", production: 380, current: 290 },
  { date: "Feb 1", production: 460, current: 320 },
  { date: "Feb 13", production: 510, current: 350 },
  { date: "Feb 25", production: 430, current: 310 },
  { date: "Mar 10", production: 470, current: 330 },
  { date: "Mar 22", production: 480, current: 340 },
  { date: "Apr 7", production: 500, current: 360 },
];

const averageKWh =
  electricityPerMonth.reduce((sum, d) => sum + d.kWh, 0) /
  electricityPerMonth.length;

const PatternMakingPage = () => {
  const [alert, setAlert] = useState<string | null>(null);

  useEffect(() => {
    const highMonth = electricityPerMonth.find((m) => m.kWh > averageKWh);
    const lowMonth = electricityPerMonth.find((m) => m.kWh < averageKWh);

    if (highMonth) {
      setAlert(`⚠️ Alert: High electricity usage in ${highMonth.name}`);
    } else if (lowMonth) {
      setAlert(`🎉 Coins Earned! Efficient month: ${lowMonth.name}`);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f1422] text-black dark:text-white p-6 mb-5 transition-colors duration-300">
      {alert && (
        <div className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 px-4 py-2 mb-4 rounded shadow">
          {alert}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
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
      <div className="grid grid-cols-1 md:grid-cols-7 md:grid-rows-1 gap-4 mb-2">
        {/* Monthly Performance Trends */}
        <div className="md:col-span-5 bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-normal mb-4 text-gray-800 dark:text-white">
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

        {/* Pie Chart for Energy Comparison */}
        <div className="md:col-span-2 bg-white dark:bg-[#1c2331]  p-6 rounded-xl shadow">
          <h2 className="text-lg font-normal mb-4 text-gray-800 dark:text-white">
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
                label
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7 md:grid-rows-1 gap-4 mb-8">
        {/* Monthly Performance Trends */}
        <div className="md:col-span-5 bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
          <h2 className="text-lg font-normal mb-4">
            Electricity Usage per Month
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={electricityPerMonth}>
              <CartesianGrid vertical={false} horizontal={false} />
              <XAxis
                dataKey="name"
                tick={{ fill: "#fff" }}
                axisLine={true}
                tickLine={true}
              />
              <YAxis tick={{ fill: "#fff" }} axisLine={true} tickLine={true} />
              <Tooltip />
              <Legend />
              <ReferenceLine
                y={averageKWh}
                stroke="#facc15"
                strokeDasharray="3 3"
                label="Average"
              />
              <Bar dataKey="kWh" fill="#0ea5e9" name="Electricity (kWh)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart for Energy Comparison */}
        <div className="md:col-span-2 bg-white dark:bg-[#1c2331]  p-6 rounded-xl shadow">
          <h3 className="text-md font-medium mt-4 text-gray-800 dark:text-white">
            ⚠️ High Electricity Usage (Above Avg: {averageKWh.toFixed(0)} kWh)
          </h3>
          <table className="w-full mt-2 text-sm text-left border dark:border-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
              <tr>
                <th className="px-3 py-2 border dark:border-gray-700">Month</th>
                <th className="px-3 py-2 border dark:border-gray-700">
                  kWh Used
                </th>
              </tr>
            </thead>
            <tbody>
              {electricityPerMonth
                .filter((month) => month.kWh > averageKWh)
                .map((month) => (
                  <tr
                    key={month.name}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    <td className="px-3 py-2 border dark:border-gray-700">
                      {month.name}
                    </td>
                    <td className="px-3 py-2 border dark:border-gray-700">
                      {month.kWh}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>


{/* {Third } */}

      <div className="grid grid-cols-1 md:grid md:grid-rows-1 gap-4 mb-8">
        {/* Monthly Performance Trends */}
        <div className="md:col-span-5 bg-white dark:bg-[#1c2331] p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
  Production Chart (Last 6 Months)
</h2>
<ResponsiveContainer width="100%" height={400}>
  <ComposedChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
    <CartesianGrid vertical={false} horizontal={false} />
    <XAxis dataKey="date" tick={{ fill: "#fff", fontSize: 12 }} />
    <YAxis tick={{ fill: "#fff", fontSize: 12 }} />
    <Tooltip formatter={(value) => `${value} Units`} />
    <Legend />
    <Bar dataKey="production" fill="#3B82F6" name="Production" barSize={25} />
    <Line type="monotone" dataKey="current" stroke="#10B981" name="Current" strokeWidth={2} />
  </ComposedChart>
</ResponsiveContainer>

        </div>

        {/* Pie Chart for Energy Comparison */}
        <div className="md:col-span-2 bg-white dark:bg-[#1c2331]  p-6 rounded-xl shadow">
         <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
    Monthly Electricity Usage (Pattern Making)
  </h2>
 <Chart
  options={{
    chart: {
      height: 350,
      type: 'line',
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
        fontWeight: 'bold',
        colors: ['#22c55e'], // Label text color
      },
      background: {
        enabled: true,
        foreColor: '#000000',
        borderRadius: 2,
        padding: 4,
        opacity: 0.7,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 3,
      colors: ['#22c55e'],
    },
    title: {
      text: 'Monthly Electricity Usage (Pattern Making)',
      align: 'left',
      style: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#22c55e',
      },
    },
    grid: {
      borderColor: '#374151',
      strokeDashArray: 4,
    },
   xaxis: {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  labels: {
    style: {
      fontSize: '12px',
      colors: '#ffffff', // Set label color to white
    },
  },
  axisBorder: {
    color: '#6b7280',
  },
  axisTicks: {
    color: '#6b7280',
  },
},

    yaxis: {
      labels: {
        style: {
          colors: '#d1d5db',
          fontSize: '12px',
        },
      },
    },
    tooltip: {
      theme: 'dark',
    },
  }}
  series={[
    {
      name: 'Electricity (kWh)',
      data: [3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800, 3900],
      color: '#22c55e',
    },
  ]}
  type="line"
  height={350}
/>


        </div>
      </div>
    </div>
  );
};

export default PatternMakingPage;
