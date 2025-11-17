import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [totalEmployees, setTotalEmployees] = useState(0);

  // Data Fetch
  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch(
        "http://localhost:3000/api/employee/getAllEmployees"
      );
      const result = await response.json();
      setEmployees(result);
      setFilteredData(result);
      setTotalEmployees(result.length);
    };
    fetchEmployees();
  }, []);

  // Search
  const handleSearchClick = () => {
    const filtered = employees.filter((employee) =>
      employee.FName?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  //  Update Click
  const handleUpdateClick = (employee) => {
    setSelectedEmployee(employee);
    setFormData(employee);
    setIsModalOpen(true);
  };

  //  Input Change
  function handleInputChange(e) {
    setFormData({ name: e.target.value });
  }

  //Update Employee
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    try {
      const id = selectedEmployee._id;

      const response = await fetch(
        "http://localhost:3000/api/employee/updateEmployee/" + id,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Employee updated successfully");
        setIsModalOpen(false);

        const updatedList = employees.map((emp) => {
          if (emp._id == id) {
            return { ...emp, ...formData };
          }
          return emp;
        });

        setEmployees(updatedList);
        setFilteredData(updatedList);
        setTotalEmployees(result.length);
      } else {
        alert("Update failed");
      }
    } catch (err) {
      console.error(err);
      alert("Error");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };
  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/employee/deleteEmployee/` + id,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Delete employee data successfully");

        const updatedData = employees.filter((emp) => emp._id !== id);
        setEmployees(updatedData);
        setFilteredData(updatedData);
      }
    } catch (error) {
      alert("Unable to delete employee.");
    }
  };
  return (
    <>
      <Sidebar />
      <div className="ml-60 mt-20 p-4 bg-white rounded-xl shadow-md w-[85%]">
        <Header />

        {/*  Search Bar */}
        <div className="flex items-center justify-between mb-6 mt-20 px-4 py-3 bg-white rounded-md shadow">
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by Employee Name..."
              className="pl-10 pr-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="button"
              onClick={handleSearchClick}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
            >
              Search
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-purple-50 text-gray-700">
              <tr>
                <th className="py-3 px-4 text-left">Full Name</th>
                <th className="py-3 px-4 text-left">DOB</th>
                <th className="py-3 px-4 text-left">CNIC</th>
                <th className="py-3 px-4 text-left">Gender</th>
                <th className="py-3 px-4 text-left">CNIC Photo</th>
                <th className="py-3 px-4 text-left">Home Address</th>
                <th className="py-3 px-4 text-left">City</th>
                <th className="py-3 px-4 text-left">Country</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Emergency Contact</th>
                <th className="py-3 px-4 text-left">Job Title</th>
                <th className="py-3 px-4 text-left">Reporting Manager</th>
                <th className="py-3 px-4 text-left">Date of Joining</th>
                <th className="py-3 px-4 text-left">Department</th>
                <th className="py-3 px-4 text-left">Work Type</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((emp) => (
                  <tr
                    key={emp._id}
                    className="hover:bg-purple-50 transition border-b border-gray-100"
                  >
                    <td className="py-2 px-4">{emp.FName}</td>
                    <td className="py-2 px-4">{emp.DOB}</td>
                    <td className="py-2 px-4">{emp.CNIC}</td>
                    <td className="py-2 px-4">{emp.Gender}</td>

                    <td className="py-2 px-4">{emp.CNICPhoto}</td>
                    <td className="py-2 px-4">{emp.HomeAddress}</td>
                    <td className="py-2 px-4">{emp.City}</td>
                    <td className="py-2 px-4">{emp.Country}</td>
                    <td className="py-2 px-4">{emp.email}</td>
                    <td className="py-2 px-4">{emp.EContact}</td>
                    <td className="py-2 px-4">{emp.JobTitle}</td>
                    <td className="py-2 px-4">{emp.ReportingManager}</td>
                    <td className="py-2 px-4">{emp.DateOfJoining}</td>
                    <td className="py-2 px-4">{emp.Department}</td>
                    <td className="py-2 px-4">{emp.WorkType}</td>
                    <td className="py-2 px-4 text-center">
                      <button
                        onClick={() => handleUpdateClick(emp)}
                        className="bg-purple-500 text-white px-3 py-1 rounded text-xs hover:bg-purple-600 mr-2"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDeleteClick(emp._id)}
                        className="bg-purple-500 text-white px-3 py-1 rounded text-xs hover:bg-purple-500"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="16" className="text-center py-4 text-gray-500">
                    No employee found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form
            onSubmit={handleUpdateSubmit}
            className="bg-white p-6  shadow-lg w-[750px] max-h-[80vh] "
          >
            <h2 className="text-2xl font-semibold mb-6 text-center text-purple-600">
              Edit Employee Detail
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {[
                ["FName", "Full Name"],
                ["DOB", "Date of Birth"],
                ["CNIC", "CNIC #"],
                ["Gender", "Gender"],
                ["CNICPhoto", "CNIC Photo URL"],
                ["HomeAddress", "Home Address"],
                ["City", "City"],
                ["Country", "Country"],
                ["email", "Personal Email"],
                ["EContact", "Emergency Contact"],
                ["JobTitle", "Job Title"],
                ["ReportingManager", "Reporting Manager"],
                ["DateOfJoining", "Date of Joining"],
                ["Department", "Department"],
                ["WorkType", "Work Type"],
              ].map(([key, label]) => (
                <div key={key} className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-1">
                    {label}
                  </label>
                  <input
                    name={key}
                    value={formData[key]}
                    onChange={handleInputChange}
                    placeholder={label}
                    className="p-2 border rounded focus:ring-2 focus:ring-purple-400"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-6 gap-3">
              <button
                type="button"
                onClick={handleCloseModal}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default EmployeeList;
