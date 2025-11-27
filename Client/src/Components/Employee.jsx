import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Employee({ empData }) {
  const [employeeData, setEmployeeData] = useState({
    FName: "",
    DOB: "",
    CNIC: "",
    Gender: "",
    CNICPhoto: "",
    HomeAddress: "",
    City: "",
    Country: "",
    email: "",
    EContact: "",
    JobTitle: "",
    ReportingManager: "",
    DateOfJoining: "",
    Department: "",
    WorkType: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployeeData((oldData) => ({ ...oldData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedEmployeeData = { ...employeeData };
    console.log(updatedEmployeeData);

    const allFieldsFilled = Object.values(updatedEmployeeData).every(Boolean);

    if (allFieldsFilled) {
      try {
        const response = await fetch(
          "https://attendance-system-backend-n5c2.onrender.com/api/employee/addEmployee",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedEmployeeData),
          }
        );

        if (response.ok) {
          const data = await response.json();
          alert("Form submitted successfully!");
          empData(employeeData);
          setEmployeeData({
            FName: "",
            DOB: "",
            CNIC: "",
            Gender: "",
            CNICPhoto: "",
            HomeAddress: "",
            City: "",
            Country: "",
            email: "",
            EContact: "",
            JobTitle: "",
            ReportingManager: "",
            DateOfJoining: "",
            Department: "",
            WorkType: "",
          });
        } else {
          alert("Failed to submit the form. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("There was an error submitting the form. Please try again.");
      }
    } else {
      alert("Please fill in all required fields before submitting");
    }
  };

  return (
    <>
      <Sidebar />
      <div className="ml-80  p-6 bg-white rounded-2xl shadow-xl w-[75%] transition">
        <Header />
        <form onSubmit={handleSubmit}>
          <div className="w-10% ml-8 mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
              Basic Information
            </h1>
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="w-85">
                <label className="text-gray-700">Full Name</label>
                <input
                  type="text"
                  value={employeeData.FName}
                  onChange={handleChange}
                  name="FName"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>

              <div className="w-85">
                <label className="text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  value={employeeData.DOB}
                  onChange={handleChange}
                  name="DOB"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>

              <div className="w-85">
                <label className="text-gray-700">CNIC Number</label>
                <input
                  type="number"
                  value={employeeData.CNIC}
                  onChange={handleChange}
                  name="CNIC"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>

              <div className="w-85">
                <label className="text-gray-700">Gender</label>
                <select
                  value={employeeData.Gender}
                  onChange={handleChange}
                  name="Gender"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                >
                  <option value="Select The Option">
                    --Select The Option--
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="w-85">
                <label className="text-gray-700">Upload CNIC Photo</label>
                <select
                  value={employeeData.CNICPhoto}
                  onChange={handleChange}
                  name="CNICPhoto"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                >
                  <option value="Select The Option">
                    --Select The Option--
                  </option>
                  <option value="Front">Front</option>
                  <option value="Back">Back</option>
                  <option value="None">None</option>
                </select>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Details
            </h2>
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="w-85">
                <label className="text-gray-700">Home Address</label>
                <input
                  type="text"
                  value={employeeData.HomeAddress}
                  onChange={handleChange}
                  name="HomeAddress"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-85">
                <label className="text-gray-700">City</label>
                <input
                  type="text"
                  value={employeeData.City}
                  onChange={handleChange}
                  name="City"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-85">
                <label className="text-gray-700">Country</label>
                <input
                  type="text"
                  value={employeeData.Country}
                  onChange={handleChange}
                  name="Country"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-85">
                <label className="text-gray-700">Personal Email</label>
                <input
                  type="email"
                  value={employeeData.email}
                  onChange={handleChange}
                  name="email"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-85">
                <label className="text-gray-700">Emergency Contact</label>
                <input
                  type="text"
                  value={employeeData.EContact}
                  onChange={handleChange}
                  name="EContact"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Roles & Work Details
            </h2>
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="w-85">
                <label className="text-gray-700">Job Title</label>
                <input
                  type="text"
                  value={employeeData.JobTitle}
                  onChange={handleChange}
                  name="JobTitle"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-85">
                <label className="text-gray-700">Reporting Manager</label>
                <input
                  type="text"
                  value={employeeData.ReportingManager}
                  onChange={handleChange}
                  name="ReportingManager"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-85">
                <label className="text-gray-700">Date of Joining</label>
                <input
                  type="date"
                  value={employeeData.DateOfJoining}
                  onChange={handleChange}
                  name="DateOfJoining"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-85">
                <label className="text-gray-700">Department</label>
                <input
                  type="text"
                  value={employeeData.Department}
                  onChange={handleChange}
                  name="Department"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-85">
                <label className="text-gray-700">Work Type</label>
                <input
                  type="text"
                  value={employeeData.WorkType}
                  onChange={handleChange}
                  name="WorkType"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md mt-4"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Employee;
