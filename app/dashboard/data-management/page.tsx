"use client";

import React, { useState } from "react";

const DataManagementviewpage = () => {
  const [formData, setFormData] = useState({
    date: "2023-05-10",
    time: "23:34",
    shift: "C",
    heatNo: "",
    componentId: "",
    activeClay: "",
    gcs: "",
    moisture: "",
    loi: "",
    totalClay: "",
    wts: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (type: "addNew" | "close") => {
    console.log("Saving Data: ", formData);

    if (type === "addNew") {
      alert("✅ Data saved. You can add new entry now.");
      setFormData((prev) => ({
        ...prev,
        heatNo: "",
        componentId: "",
        activeClay: "",
        gcs: "",
        moisture: "",
        loi: "",
        totalClay: "",
        wts: "",
      }));
    } else {
      alert("✅ Data saved and form closed.");
      // Optionally redirect or close modal
    }
  };

  return (
    <div className="p-2">
      {/* <h1 className="text-2xl font-bold mb-4">📋 Data Management</h1> */}

      <div className="flex justify-between items-center mb-4">
        <button className="bg-blue-500 text-white px-3 py-1 rounded">Modify Filters</button>
        <div className="text-right">
          <p>Line Name : <strong>NLO</strong></p>
          <p>Category : <strong>Prepared Sand</strong></p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputField type="date" label="Date" name="date" value={formData.date} onChange={handleChange} />
        <InputField type="time" label="Time" name="time" value={formData.time} onChange={handleChange} />

        <div>
          <label className="block text-sm font-medium mb-1">Shift</label>
          <select name="shift" value={formData.shift} onChange={handleChange} className="w-full border px-2 py-1 rounded">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>

        <InputField label="Heat No." name="heatNo" value={formData.heatNo} onChange={handleChange} />
        <div>
          <label className="block text-sm font-medium mb-1">Component I.D.</label>
          <select name="componentId" value={formData.componentId} onChange={handleChange} className="w-full border px-2 py-1 rounded">
            <option value="">Select</option>
            <option value="Comp1">Comp1</option>
            <option value="Comp2">Comp2</option>
            <option value="Comp3">Comp3</option>
          </select>
        </div>

        <InputField type="number" label="Active Clay (%)" name="activeClay" value={formData.activeClay} onChange={handleChange} />
        <InputField type="number" label="GCS (gm/cm²)" name="gcs" value={formData.gcs} onChange={handleChange} />
        <InputField type="number" label="Moisture (%)" name="moisture" value={formData.moisture} onChange={handleChange} />
        <InputField type="number" label="LOI (%)" name="loi" value={formData.loi} onChange={handleChange} />
        <InputField type="number" label="Total Clay (%)" name="totalClay" value={formData.totalClay} onChange={handleChange} />
        <InputField type="number" label="WTS (N/cm²)" name="wts" value={formData.wts} onChange={handleChange} />
      </div>

      <div className="mt-6 flex gap-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => handleSave("addNew")}
        >
          Save & Add New
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => handleSave("close")}
        >
          Save & Close
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => alert("🚫 Cancelled")}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

// 📦 Reusable InputField Component
const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border px-2 py-1 rounded"
      placeholder={`Enter ${label}`}
    />
  </div>
);

export default DataManagementviewpage;
