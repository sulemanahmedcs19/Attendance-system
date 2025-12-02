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
  const [isLoading, setIsLoading] = useState(true); // Loader state

  // Fetch Employees
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setIsLoading(true); // start loader
        const response = await fetch(
          "https://attendance-system-backend-n5c2.onrender.com/api/employee/getAllEmployees"
        );
        const result = await response.json();
        setEmployees(result);
        setFilteredData(result);
        setTotalEmployees(result.length);
      } catch (error) {
        console.error("Error fetching employees:", error);
      } finally {
        setIsLoading(false); // stop loader
      }
    };
    fetchEmployees();
  }, []);

  // Live search - update filtered data as user types
  useEffect(() => {
    const filtered = employees.filter((employee) =>
      employee.FName?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, employees]);

  // Update Click
  const handleUpdateClick = (employee) => {
    setSelectedEmployee(employee);
    setFormData(employee);
    setIsModalOpen(true);
  };

  // Form Input Change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Update Submit
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const id = selectedEmployee._id;
      const response = await fetch(
        `https://attendance-system-backend-n5c2.onrender.com/api/employee/updateEmployee/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Employee updated successfully");
        setIsModalOpen(false);

        const updatedList = employees.map((emp) =>
          emp._id === id ? { ...emp, ...formData } : emp
        );

        setEmployees(updatedList);
        setFilteredData(updatedList);
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
        `https://attendance-system-backend-n5c2.onrender.com/api/employee/deleteEmployee/${id}`,
        { method: "DELETE" }
      );

      if (response.ok) {
        alert("Employee deleted successfully");
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

      <div className="ml-80 p-6 bg-white rounded-2xl shadow-xl w-[75%] transition">
        <Header />

        {/* Title and Search Bar Section */}
        <div className="flex justify-between items-center mb-6 mt-10 px-4">
          {/* Employees List Title */}
          <h1 className="text-xl font-semibold text-[#3A3A3A] tracking-wide">
            Employees List
          </h1>

          {/* Search Bar */}
          <div className="flex items-center justify-end bg-purple-50 rounded-lg shadow px-4 py-3">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Employee..."
              className="pl-4 pr-4 py-2 w-64 rounded-lg bg-gray-100 border border-gray-300 text-sm focus:ring-2  focus:bg-white transition"
            />
          </div>
        </div>

        {/* Employee Table */}
        <div className="overflow-x-auto rounded-lg border shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-purple-100 text-gray-700">
              <tr>
                <th className="py-3 px-4 text-left">Full Name</th>
                <th className="py-3 px-4 text-left">DOB</th>
                <th className="py-3 px-4 text-left">CNIC</th>
                <th className="py-3 px-4 text-left">Gender</th>
                <th className="py-3 px-4 text-left">Photo</th>
                <th className="py-3 px-4 text-left">Address</th>
                <th className="py-3 px-4 text-left">City</th>
                <th className="py-3 px-4 text-left">Country</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Emergency</th>
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Manager</th>
                <th className="py-3 px-4 text-left">Joining</th>
                <th className="py-3 px-4 text-left">Department</th>
                <th className="py-3 px-4 text-left">Work Type</th>
                <th className="py-3 px-4 text-center">Password</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="16" className="text-center py-4 text-gray-500">
                    Loading employees...
                  </td>
                </tr>
              ) : filteredData.length ? (
                filteredData.map((emp, index) => (
                  <tr
                    key={emp._id}
                    className={`transition ${
                      index % 2 === 0 ? "bg-white" : "bg-purple-50"
                    } hover:bg-purple-100`}
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
                    <td className="py-2 px-4">{emp.password}</td>

                    <td className="py-2 px-4 text-center flex gap-2 justify-center">
                      <button
                        onClick={() => handleUpdateClick(emp)}
                        className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 text-xs"
                      >
                        Update
                      </button>

                      <button
                        onClick={() => handleDeleteClick(emp._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="16" className="text-center py-4 text-gray-500">
                    No Employee Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <form
            onSubmit={handleUpdateSubmit}
            className="bg-white p-6 rounded-lg shadow-xl w-[750px] max-h-[80vh] overflow-y-auto"
          >
            <h2 className="text-2xl font-semibold mb-6 text-center text-purple-600">
              Edit Employee Details
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {[
                ["FName", "Full Name"],
                ["DOB", "Date of Birth"],
                ["CNIC", "CNIC Number"],
                ["Gender", "Gender"],
                ["CNICPhoto", "CNIC Photo URL"],
                ["HomeAddress", "Home Address"],
                ["City", "City"],
                ["Country", "Country"],
                ["email", "Email"],
                ["EContact", "Emergency Contact"],
                ["JobTitle", "Job Title"],
                ["ReportingManager", "Reporting Manager"],
                ["DateOfJoining", "Date of Joining"],
                ["Department", "Department"],
                ["WorkType", "Work Type"],
                ["password", "Password"],
              ].map(([key, label]) => (
                <div key={key}>
                  <label className="text-sm text-gray-600">{label}</label>
                  <input
                    name={key}
                    value={formData[key] || ""}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={handleCloseModal}
                type="button"
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-5 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
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
