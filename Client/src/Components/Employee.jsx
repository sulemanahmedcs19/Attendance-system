import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Employee(empData) {
  console.log(empData);
  const [employeeData, setEmployeeData] = useState({
    FName: "",
    DOB: "",
    CNIC: "",
    Gender: "",
    CNICPhoto: "",
    HomeAddress: "",
    City: "",
    Country: "",
    PersonalEmail: "",
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

  const handleSubmit = (event) => {
    event.preventDefault();

    const allFieldsFilled = Object.values(employeeData).every(Boolean);

    if (allFieldsFilled) {
      alert("Form submitted");
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
        PersonalEmail: "",
        EContact: "",
        JobTitle: "",
        ReportingManager: "",
        DateOfJoining: "",
        Department: "",
        WorkType: "",
      });
    } else {
      alert("Please fill in all required fields before submitting");
    }
  };

  return (
    <>
      <Sidebar />
      <div className="ml-80 p-6 bg-gray-50 min-h-screen">
        <Header />

        <form onSubmit={handleSubmit}>
          <div className="w-10% ml-8 mt-10  p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
              Basic Information
            </h1>
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="w-85 ">
                <label className=" text-gray-700">Full Name</label>
                <input
                  type="text"
                  value={employeeData.FName}
                  onChange={handleChange}
                  name="FName"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>

              <div className="w-85 ">
                <label className=" text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  value={employeeData.DOB}
                  onChange={handleChange}
                  name="DOB"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>

              <div className="w-85">
                <label className=" text-gray-700">CNIC Number</label>
                <input
                  type="number"
                  value={employeeData.CNIC}
                  onChange={handleChange}
                  name="CNIC"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-85">
                <label className=" text-gray-700">Gender</label>
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
                <label className=" text-gray-700">Upload CNIC Photo</label>
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
                <label className=" text-gray-700">Home Address</label>
                <input
                  type="text"
                  value={employeeData.HomeAddress}
                  onChange={handleChange}
                  name="HomeAddress"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-85">
                <label className=" text-gray-700">City</label>
                <input
                  type="text"
                  value={employeeData.City}
                  onChange={handleChange}
                  name="City"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-85">
                <label className=" text-gray-700">Country</label>
                <input
                  type="text"
                  value={employeeData.Country}
                  onChange={handleChange}
                  name="Country"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-85">
                <label className=" text-gray-700">Personal Email</label>
                <input
                  type="email"
                  value={employeeData.PersonalEmail}
                  onChange={handleChange}
                  name="PersonalEmail"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-85">
                <label className=" text-gray-700">Emergency Contact</label>
                <input
                  type="number"
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
                <label className=" text-gray-700">Job Title</label>
                <input
                  type="text"
                  value={employeeData.JobTitle}
                  onChange={handleChange}
                  name="JobTitle"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-85">
                <label className=" text-gray-700">Reporting Manager</label>
                <input
                  type="text"
                  value={employeeData.ReportingManager}
                  onChange={handleChange}
                  name="ReportingManager"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-85">
                <label className=" text-gray-700">Date of Joining</label>
                <input
                  type="date"
                  value={employeeData.DateOfJoining}
                  onChange={handleChange}
                  name="DateOfJoining"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-85">
                <label className=" text-gray-700">Department</label>
                <input
                  type="text"
                  value={employeeData.Department}
                  onChange={handleChange}
                  name="Department"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-85">
                <label className=" text-gray-700">Work Type</label>
                <select
                  value={employeeData.WorkType}
                  onChange={handleChange}
                  name="WorkType"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                >
                  <option value="Select The Option">
                    --Select The Option--
                  </option>
                  <option value="Onsite">Onsite</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              <button
                type="submit"
                className=" w-40 bg-gradient-to-r from-purple-500 to-pink-500 text-white  rounded-md text-sm font-medium hover:opacity-90 transition"
              >
                save
              </button>
            </div>
          </div>
        </form>
      </div>
      <div></div>
    </>
  );
}

export default Employee;