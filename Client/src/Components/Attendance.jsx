import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Attendance() {
  const [data, setData] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");
  // const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  });
  // const handleSearch = (e) => {
  //   const query = e.target.value;
  //   setSearchTerm(query);
  // };

  // const handleFilter = () => {
  //   const filtered = data.filter((item) => {
  //     return (
  //       item.id.includes(searchTerm) ||
  //       item.employee.toLowerCase().includes(searchTerm.toLowerCase())
  //     );
  //   });
  //   setFilteredData(filtered);
  // };

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
                // value={searchTerm}
                // onChange={handleSearch}
                placeholder="Search by ID or Employee"
                className="pl-10 pr-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <input
                type="date"
                className="border border-gray-300 rounded-md text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <button
                type="button"
                // onClick={handleFilter}
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
                {data.map((item) => (
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-[#252C58] font-bold">
                      {item.id}
                    </td>
                    <td className="py-3 px-4 text-[#252C58] font-bold">
                      {item.title}
                    </td>
                    {/* <td className="py-3 px-4 text-[#252C58]">{row.role}</td>
                    <td className="py-3 px-4 text-[#252C58]">
                      {row.department}
                    </td>
                    <td className="py-3 px-4 text-[#252C58]">{row.date}</td>
                    <td className="py-3 px-4 text-[#252C58]">{row.status}</td>
                    <td className="py-3 px-4 text-[#252C58]">{row.checkIn}</td>
                    <td className="py-3 px-4 text-[#252C58]">{row.checkOut}</td> */}
                    {/* <td className="py-3 px-4 text-[#252C58]">
                      {row.workHours} 
                    </td> */}
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
