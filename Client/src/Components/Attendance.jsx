import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Attendance() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [loading, setLoading] = useState(true); // Loader state

  // Fetch attendance data
  useEffect(() => {
    const fetchAttendance = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://attendance-system-backend-n5c2.onrender.com/api/attendance/getAllAttendance"
        );
        const result = await response.json();
        if (result.attendance) setData(result.attendance);
      } catch (error) {
        console.error("Failed to fetch attendance:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAttendance();
  }, []);

  // Convert ISO time to 12-hour format
  const formatTo12Hour = (isoTime) => {
    if (!isoTime) return "-";
    const timePart = isoTime.split("T")[1].split(".")[0];
    let [hour, minute] = timePart.split(":");
    hour = parseInt(hour);
    const ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour}:${minute} ${ampm}`;
  };

  // Get only date from ISO string
  const getDBDate = (isoString) => (isoString ? isoString.split("T")[0] : "-");

  // Filtered data based on search (name only) and date
  const filteredData = data.filter((item) => {
    const itemDate = getDBDate(item.CheckIn);
    const matchSearch = item.employeeName
      ?.toLowerCase()
      .includes(search.toLowerCase()); // search by name only
    const matchDate = dateFilter ? itemDate === dateFilter : true;
    return matchSearch && matchDate;
  });

  return (
    <>
      <Sidebar />
      <div className="ml-80 p-6 bg-white rounded-2xl shadow-xl w-[75%] transition">
        <Header />

        <div className="w-full mt-16 bg-white p-4 rounded-xl shadow flex items-center justify-between">
          <h1 className="text-xl font-semibold text-[#3A3A3A] tracking-wide">
            Attendance Overview
          </h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search by Employee Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-4 pr-4 py-2 w-64 rounded-lg bg-gray-100 border border-gray-300 text-sm focus:ring-2 focus:ring-purple-500 focus:bg-white transition"
            />
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 text-sm focus:ring-2 focus:ring-purple-500 focus:bg-white transition"
            />
          </div>
        </div>

        <div className="mt-6 rounded-xl border shadow-sm overflow-hidden">
          {loading ? (
            <div className="text-center py-20 text-gray-500 font-medium">
              Loading attendance data...
            </div>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-purple-100 text-gray-900">
                <tr>
                  <th className="py-3 px-4 text-left font-semibold">ID</th>
                  <th className="py-3 px-4 text-left font-semibold">
                    Employee
                  </th>
                  <th className="py-3 px-4 text-left font-semibold">Date</th>
                  <th className="py-3 px-4 text-left font-semibold">Status</th>
                  <th className="py-3 px-4 text-left font-semibold">Remarks</th>
                  <th className="py-3 px-4 text-left font-semibold">
                    Check-in
                  </th>
                  <th className="py-3 px-4 text-left font-semibold">
                    Check-out
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <tr
                      key={item._id}
                      className={`${
                        index % 2 === 0 ? "bg-white" : "bg-purple-50"
                      } hover:bg-purple-100`}
                    >
                      <td className="py-3 px-4 font-semibold">{index + 1}</td>
                      <td className="py-3 px-4 font-semibold">
                        {item.employeeName}
                      </td>
                      <td className="py-3 px-4">{getDBDate(item.CheckIn)}</td>
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
                      <td className="py-3 px-4">{item.Remarks}</td>
                      <td className="py-3 px-4">
                        {formatTo12Hour(item.CheckIn)}
                      </td>
                      <td className="py-3 px-4">
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
          )}
        </div>
      </div>
    </>
  );
}

export default Attendance;
