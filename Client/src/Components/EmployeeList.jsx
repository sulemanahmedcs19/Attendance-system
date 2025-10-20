import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Link } from 'react-router-dom';


function EmployeeList()
{

  return (
    <>
      <Sidebar />
      <div className="ml-60 mt-20 p-4 bg-white rounded-xl shadow-md w-[85%]">
        <Header />

        <form>
          <div className="flex items-center justify-between mb-6 mt-20 px-4 py-3 bg-white rounded-md shadow">
            <h1 className="text-lg font-semibold text-gray-800">
              Attendance Overview
            </h1>

            <div className="flex items-center gap-3">
              <div>
                <input
                  type="text"
                  placeholder="Quick Search..."
                  className="pl-10 pr-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <input
                type="date"
                className="border border-gray-300 rounded-md text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />

              <button
                type="button"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
              >
                Advanced Filters
              </button>
            </div>
          </div>

          <div className="bg-white">
            <table className="w-full  text-sm ">
              <thead>
                <tr className=" text-left textsize-0.5">
                  <th className="py-3 px-4">Full Name</th>
                  <th className="py-3 px-4">DOB</th>
                  <th className="py-3 px-4">CNIC #</th>
                  <th className="py-3 px-4">Gender</th>
                  <th className="py-3 px-4">CNIC Photo</th>
                  <th className="py-3 px-4">Home Address</th>
                  <th className="py-3 px-4">City</th>
                  <th className="py-3 px-4">Country</th>
                  <th className="py-3 px-4">Personal Email</th>
                  <th className="py-3 px-4">Emergency Contact</th>
                  <th className="py-3 px-4">Job Title</th>
                  <th className="py-3 px-4">Reporting Manager</th>
                  <th className="py-3 px-4">Date of Joining</th>
                  <th className="py-3 px-4">Department</th>
                  <th className="py-3 px-4">Work Type</th>
                </tr>
              </thead>
            </table>
          </div>
        </form>
      </div>
    </>
  );
}
export default EmployeeList;
