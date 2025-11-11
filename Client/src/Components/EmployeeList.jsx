import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null); // modal ke liye
  const [isModalOpen, setIsModalOpen] = useState(false); // modal toggle

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch(
        "http://localhost:3000/api/employee/getAllEmployees"
      );
      const result = await response.json();
      setEmployees(result);
      setFilteredData(result);
    };

    fetchEmployees();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    const filtered = employees.filter((employee) =>
      employee.FName?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleUpdateClick = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };

  return (
    <>
      <Sidebar />
      <div className="ml-60 mt-20 p-4 bg-white rounded-xl shadow-md w-[85%]">
        <Header />

        <form>
          <div className="flex items-center justify-between mb-6 mt-20 px-4 py-3 bg-white rounded-md shadow">
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
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

          <div className="bg-white">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left">
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
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((employee) => (
                    <tr key={employee._id}>
                      <td className="py-2 px-4 font-semibold">
                        {employee.FName}
                      </td>
                      <td className="py-2 px-4">{employee.DOB}</td>
                      <td className="py-2 px-4">{employee.CNIC}</td>
                      <td className="py-2 px-4">{employee.Gender}</td>
                      <td className="py-2 px-4">{employee.CNICPhoto}</td>
                      <td className="py-2 px-4">{employee.HomeAddress}</td>
                      <td className="py-2 px-4">{employee.City}</td>
                      <td className="py-2 px-4">{employee.Country}</td>
                      <td className="py-2 px-4">{employee.email}</td>
                      <td className="py-2 px-4">{employee.EContact}</td>
                      <td className="py-2 px-4">{employee.JobTitle}</td>
                      <td className="py-2 px-4">{employee.ReportingManager}</td>
                      <td className="py-2 px-4">{employee.DateOfJoining}</td>
                      <td className="py-2 px-4">{employee.Department}</td>
                      <td className="py-2 px-4">{employee.WorkType}</td>
                      <td className="py-2 px-4 flex gap-2">
                        <button
                          type="button"
                          onClick={() => handleUpdateClick(employee)}
                          className="bg-purple-500 text-white px-3 py-1 rounded  opacity-70"
                        >
                          Update
                        </button>
                        <button className="bg-purple-500 text-white px-3 py-1 rounded  opacity-70">
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
        </form>
      </div>

      {isModalOpen && selectedEmployee && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[700px] max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4">Employee Details</h2>
            <div className="space-y-2">
              <p>
                <strong>Full Name:</strong> {selectedEmployee.FName}
              </p>
              <p>
                <strong>Date of Birth:</strong> {selectedEmployee.DOB}
              </p>
              <p>
                <strong>CNIC:</strong> {selectedEmployee.CNIC}
              </p>
              <p>
                <strong>Gender:</strong> {selectedEmployee.Gender}
              </p>
              <p>
                <strong>CNIC Photo:</strong> {selectedEmployee.CNICPhoto}
              </p>
              <p>
                <strong>Home Address:</strong> {selectedEmployee.HomeAddress}
              </p>
              <p>
                <strong>City:</strong> {selectedEmployee.City}
              </p>
              <p>
                <strong>Country:</strong> {selectedEmployee.Country}
              </p>
              <p>
                <strong>Personal Email:</strong> {selectedEmployee.email}
              </p>
              <p>
                <strong>Emergency Contact:</strong> {selectedEmployee.EContact}
              </p>
              <p>
                <strong>Job Title:</strong> {selectedEmployee.JobTitle}
              </p>
              <p>
                <strong>Reporting Manager:</strong>{" "}
                {selectedEmployee.ReportingManager}
              </p>
              <p>
                <strong>Date of Joining:</strong>{" "}
                {selectedEmployee.DateOfJoining}
              </p>
              <p>
                <strong>Department:</strong> {selectedEmployee.Department}
              </p>
              <p>
                <strong>Work Type:</strong> {selectedEmployee.WorkType}
              </p>
            </div>
            <div className="mt-4 text-right">
              <button
                onClick={handleCloseModal}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmployeeList;
