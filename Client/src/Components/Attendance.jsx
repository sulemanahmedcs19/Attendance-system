import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Attendance() {
  const attendanceData = [
    {
      id: "2341421",
      employee: "DilShaad",
      role: "Development",
      department: "Production",
      date: "26 July 2025",
      status: "Work from office",
      checkIn: "08:00",
      checkOut: "05:00",
      workHours: "10h 2m",
    },
    {
      id: "3411421",
      employee: "Ghazali",
      role: "Senior Executive",
      department: "Sales",
      date: "26 July 2025",
      status: "Absent",
      checkIn: "00:00",
      checkOut: "00:00",
      workHours: "0m",
    },
    {
      id: "2341121",
      employee: "Hamza",
      role: "Senior Manager",
      department: "Design",
      date: "26 July 2025",
      status: "Late arrival",
      checkIn: "10:30",
      checkOut: "18:00",
      workHours: "8h 30m",
    },
    {
      id: "2341122",
      employee: "Kinza",
      role: "Senior Manager",
      department: "Marketing",
      date: "26 July 2025",
      status: "Late arrival",
      checkIn: "10:30",
      checkOut: "18:00",
      workHours: "8h 30m",
    },
    {
      id: "2341123",
      employee: "Shahzaib Umrani",
      role: "Senior Manager",
      department: "Design",
      date: "26 July 2025",
      status: "Late arrival",
      checkIn: "10:30",
      checkOut: "18:00",
      workHours: "8h 30m",
    },
    {
      id: "2341124",
      employee: "Asim Khan",
      role: "Senior Manager",
      department: "Design",
      date: "26 July 2025",
      status: "Late arrival",
      checkIn: "10:30",
      checkOut: "18:00",
      workHours: "8h 30m",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(attendanceData);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);

   
  };

  const handleFilter = () => {
    const filtered = attendanceData.filter((item) => {
      const query = searchTerm;
      return (
        item.id.includes(query) ||
        item.employee.toLowerCase().includes(query.toLowerCase())
);    });
    setFilteredData(filtered);
  };

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
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search by ID or Employee"
                className="pl-10 pr-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <input
                type="date"
                className="border border-gray-300 rounded-md text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <button
                type="button"
                onClick={handleFilter}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
              >
                Advanced Filters
              </button>
            </div>
          </div>

          <div className="bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xl">
                  <th className="py-3 px-4">ID</th>
                  <th className="py-3 px-4">Employee</th>
                  <th className="py-3 px-4">Role</th>
                  <th className="py-3 px-4">Department</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Check-in</th>
                  <th className="py-3 px-4">Check-out</th>
                  <th className="py-3 px-4">Work hours</th>
                </tr>
              </thead>

              <tbody className="bg-white text-xl">
                {filteredData.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-[#252C58] font-bold">
                      {row.id}
                    </td>
                    <td className="py-3 px-4 text-[#252C58] font-bold">
                      {row.employee}
                    </td>
                    <td className="py-3 px-4 text-[#252C58]">{row.role}</td>
                    <td className="py-3 px-4 text-[#252C58]">
                      {row.department}
                    </td>
                    <td className="py-3 px-4 text-[#252C58]">{row.date}</td>
                    <td className="py-3 px-4 text-[#252C58]">{row.status}</td>
                    <td className="py-3 px-4 text-[#252C58]">{row.checkIn}</td>
                    <td className="py-3 px-4 text-[#252C58]">{row.checkOut}</td>
                    <td className="py-3 px-4 text-[#252C58]">
                      {row.workHours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </>
  );
}

export default Attendance;