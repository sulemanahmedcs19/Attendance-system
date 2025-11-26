import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Attendance() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  useEffect(() => {
    fetch(
      "https://attendance-system-backend-n5c2.onrender.com/api/attendance/getAllAttendance",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.attendance) {
          setData(result.attendance);
        } else {
          setData([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching attendance:", error);
      });
  }, []);

  const filteredData = data.filter((item, index) => {
    const serialId = (index + 1).toString();
    const itemDate = new Date(item.CheckIn).toISOString().split("T")[0];

    const matchSearch =
      serialId.includes(search) ||
      (item.name && item.name.toLowerCase().includes(search.toLowerCase())) ||
      (item.email && item.email.toLowerCase().includes(search.toLowerCase()));

    const matchDate = dateFilter ? itemDate === dateFilter : true;

    return matchSearch && matchDate;
  });

  return (
    <>
      <Sidebar />
      <div className="ml-80 mt-10 p-6 bg-white rounded-xl shadow-md w-[75%]">
        <Header />

        <form>
          <div className="flex items-center justify-between mb-6 mt-20 px-4 py-3 bg-white rounded-md shadow">
            <h1 className="text-lg font-semibold text-gray-800">
              Attendance Overview
            </h1>

            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Search by Name / ID / Email"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 pr-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <input
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="border border-gray-300 rounded-md text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xl">
                  <th className="py-3 px-4">ID</th>
                  <th className="py-3 px-4">Employee</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Remarks</th>
                  <th className="py-3 px-4">Check-in</th>
                  <th className="py-3 px-4">Check-out</th>
                </tr>
              </thead>

              <tbody className="bg-white text-xl">
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <tr key={item._id} className="hover:bg-gray-50">
                      {/* SERIAL NUMBER */}
                      <td className="py-3 px-4 text-[#252C58] font-bold">
                        {index + 1}
                      </td>

                      {/* EMPLOYEE NAME */}
                      <td className="py-3 px-4 text-[#252C58] font-bold">
                        {item.name}
                      </td>

                      <td className="py-3 px-4 text-[#252C58]">
                        {new Date(item.CheckIn).toLocaleDateString()}
                      </td>

                      <td className="py-3 px-4 text-[#252C58]">
                        {item.Status}
                      </td>

                      <td className="py-3 px-4 text-[#252C58]">
                        {item.Remarks}
                      </td>

                      <td className="py-3 px-4 text-[#252C58]">
                        {new Date(item.CheckIn).toLocaleTimeString()}
                      </td>

                      <td className="py-3 px-4 text-[#252C58]">
                        {item.CheckOut
                          ? new Date(item.CheckOut).toLocaleTimeString()
                          : "-"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-4">
                      No attendance records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </>
  );
}

export default Attendance;
