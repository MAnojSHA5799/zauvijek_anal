// components/scrap/Scrapviewpage.tsx
"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from "recharts";

type ScrapItem = {
  dust: string;
  extraEnergy: string;
  energyKWh: number;
  costPerTon: number;
  monthlyLoss: number;
  extra?: number;
};

type ComparisonItem = {
  label: string;
  without: number;
  with: number;
};

const scrapData: ScrapItem[] = [
  { dust: "0%", extraEnergy: "0%", energyKWh: 900, costPerTon: 9000, monthlyLoss: 0 },
  { dust: "1%", extraEnergy: "+2%", energyKWh: 918, costPerTon: 9180, monthlyLoss: 270000 },
  { dust: "3%", extraEnergy: "+6%", energyKWh: 954, costPerTon: 9540, monthlyLoss: 810000 },
  { dust: "5%", extraEnergy: "+10%", energyKWh: 990, costPerTon: 9900, monthlyLoss: 1350000 },
];

const comparisonData: ComparisonItem[] = [
  { label: "Electricity (kWh/unit)", without: 3, with: 1.2 },
  { label: "Electricity Cost (₹/unit)", without: 19.5, with: 7.8 },
];

const COLORS = ["#22c55e", "#3b82f6", "#f97316", "#ef4444"];
export type GraphProps = {
  title: string;
  dataKey: string;
  color: string;
  unit?: string;
  isCurrency?: boolean;
  transform?: (data: ScrapItem) => ScrapItem;
};
const Graph = ({ title, dataKey, color, unit, isCurrency, transform }: GraphProps
) => {
  const data = scrapData.map((item) => (transform ? transform(item) : item));
  return (
    <div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dust" />
          <YAxis unit={unit} />
          <Tooltip formatter={(val: number) => (isCurrency ? `₹${(val / 100000).toFixed(2)} Lakh` : val)} />
          <Legend />
          <Line type="monotone" dataKey={dataKey} stroke={color} name={title} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export type PieSectionProps = {
  pieData: { name: string; value: number }[];}
const PieSection = ({ pieData }: PieSectionProps) => (
  <div>
    <h4 className="text-lg font-semibold mb-2">Loss Contribution by Scrap Dust %</h4>
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80} label>
          {pieData.map((_entry, index: number) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(val: number) => `₹${(val / 100000).toFixed(2)} Lakh`} />
      </PieChart>
    </ResponsiveContainer>
  </div>
);
export type CombinedChartProps = {
  data: ScrapItem[];
};
const CombinedChart = ({ data }: CombinedChartProps) => (
  <div>
    <h4 className="text-lg font-semibold mb-2">Combined Cost and Energy Chart</h4>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dust" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="costPerTon" stroke="#3b82f6" name="Cost per Ton" />
        <Line type="monotone" dataKey="energyKWh" stroke="#22c55e" name="Energy (kWh)" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);
export type BarChartItemProp = {
  title: string;
  bar1: string;
  bar2: string;
  transformData?: (data: ScrapItem) => ScrapItem;
};
const BarChartItem = ({ title, bar1, bar2, transformData }: BarChartItemProp) => {
  const data = scrapData.map((item) => (transformData ? transformData(item) : item));
  return (
    <div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dust" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={bar1} fill="#3b82f6" name={bar1} />
          <Bar dataKey={bar2} fill="#22c55e" name={bar2} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const ElectricityComparisonChart = () => (
  <div>
    <h4 className="text-lg font-semibold mb-2">With vs Without Zauvijek</h4>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={comparisonData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="without" fill="#ef4444" name="Without Zauvijek" />
        <Bar dataKey="with" fill="#22c55e" name="With Zauvijek" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const NegligiblemMoldviewpage = () => {
  const pieData = scrapData
    .filter((item) => item.monthlyLoss > 0)
    .map((item) => ({
      name: item.dust,
      value: item.monthlyLoss,
    }));

  return (
    <div className="p-4 space-y-10">
      <h2 className="text-2xl font-bold mb-6">🧪 Negligible Mold Impact Analysis</h2>

     

     

      <section>
        <h3 className="text-xl font-semibold mb-4">📊 Graphical Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Graph title="Cost per Ton" dataKey="costPerTon" color="#3b82f6" unit="₹/Ton" />
          <Graph title="Energy Consumption" dataKey="energyKWh" color="#22c55e" unit="kWh/Ton" />
          <Graph title="Monthly Loss" dataKey="monthlyLoss" color="#ef4444" unit="₹" isCurrency />
          <Graph
            title="Extra Energy %"
            dataKey="extra"
            color="#34d399"
            unit="%"
            transform={(d: ScrapItem) => ({ ...d, extra: parseFloat(d.extraEnergy.replace("+", "").replace("%", "")) })}
          />
          <PieSection pieData={pieData} />
          <CombinedChart data={scrapData} />
          <BarChartItem title="Cost vs Energy" bar1="costPerTon" bar2="energyKWh" />
          <BarChartItem
            title="Loss vs Extra Energy"
            bar1="monthlyLoss"
            bar2="extra"
            transformData={(d: ScrapItem) => ({ ...d, extra: parseFloat(d.extraEnergy.replace("+", "").replace("%", "")) })}
          />
          <ElectricityComparisonChart />
        </div>
      </section>
    </div>
  );
};

export default NegligiblemMoldviewpage;
