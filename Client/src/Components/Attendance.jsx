import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Attendance() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const formatTo12Hour = (isoTime) => {
    if (!isoTime) return "-";
    const timePart = isoTime.split("T")[1].split(".")[0];
    let [hour, minute] = timePart.split(":");
    hour = parseInt(hour);
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${ampm}`;
  };

  const getDBDate = (isoString) => {
    return isoString ? isoString.split("T")[0] : "-";
  };

  useEffect(() => {
    fetch(
      "https://attendance-system-backend-n5c2.onrender.com/api/attendance/getAllAttendance",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.attendance) setData(result.attendance);
        else setData([]);
      })
      .catch((err) => console.error("Attendance error:", err));
  }, []);

  const filteredData = data.filter((item, index) => {
    const serialId = (index + 1).toString();
    const itemDate = getDBDate(item.CheckIn);

    const matchSearch =
      serialId.includes(search) ||
      item.employeeName?.toLowerCase().includes(search.toLowerCase()) ||
      item.email?.toLowerCase().includes(search.toLowerCase());

    const matchDate = dateFilter ? itemDate === dateFilter : true;
    return matchSearch && matchDate;
  });

  return (
    <>
      <Sidebar />

      <div className="ml-80  p-6 bg-white rounded-2xl shadow-xl w-[75%] transition">
        <Header />

        {/* Filter Section */}
        <div className="w-full mt-16 bg-white p-4 rounded-xl shadow flex items-center justify-between">
          <h1 className="text-xl font-semibold text-[#3A3A3A] tracking-wide">
            Attendance Overview
          </h1>

          <div className="flex items-center gap-4">
            {/* Search input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search Name / ID / Email"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 rounded-lg bg-gray-100 border border-gray-300 text-sm
                 focus:ring-2 focus:ring-purple-500 focus:bg-white transition"
              />
              <span className="absolute left-3 top-2.5 text-gray-500">🔍</span>
            </div>

            {/* Date Filter */}
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 text-sm
              focus:ring-2 focus:ring-purple-500 focus:bg-white transition"
            />
          </div>
        </div>

        {/* Table */}
        <div className="mt-6 rounded-xl border shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-purple-100 text-gray-900">
              <tr>
                <th className="py-3 px-4 text-left font-semibold">ID</th>
                <th className="py-3 px-4 text-left font-semibold">Employee</th>
                <th className="py-3 px-4 text-left font-semibold">Date</th>
                <th className="py-3 px-4 text-left font-semibold">Status</th>
                <th className="py-3 px-4 text-left font-semibold">Remarks</th>
                <th className="py-3 px-4 text-left font-semibold">Check-in</th>
                <th className="py-3 px-4 text-left font-semibold">Check-out</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr
                    key={item._id}
                    className={`transition ${
                      index % 2 === 0 ? "bg-white" : "bg-purple-50"
                    } hover:bg-purple-100`}
                  >
                    <td className="py-3 px-4 font-semibold text-[#252C58]">
                      {index + 1}
                    </td>

                    <td className="py-3 px-4 font-semibold text-[#252C58]">
                      {item.employeeName}
                    </td>

                    <td className="py-3 px-4 text-[#252C58]">
                      {getDBDate(item.CheckIn)}
                    </td>

                    <td
                      className={`py-3 px-4 font-semibold ${
                        item.Status === "Present"
                          ? "text-green-600"
                          : item.Status === "Absent"
                          ? "text-red-500"
                          : "text-yellow-500"
                      }`}
                    >
                      {item.Status}
                    </td>

                    <td className="py-3 px-4 text-[#252C58]">{item.Remarks}</td>

                    <td className="py-3 px-4 text-[#252C58]">
                      {formatTo12Hour(item.CheckIn)}
                    </td>

                    <td className="py-3 px-4 text-[#252C58]">
                      {formatTo12Hour(item.CheckOut)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="text-center py-5 text-gray-500 font-medium"
                  >
                    No attendance records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Attendance;
