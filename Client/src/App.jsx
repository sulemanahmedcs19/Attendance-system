import React, { useState } from "react";
import Dashboard from "./Components/Dashboard";
import Employee from "./Components/Employee";
import Attendance from "./Components/Attendance";
import EmployeeList from "./Components/EmployeeList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Attendancedata from "./Attendancedata";
import Login from "./Components/login"; // Capital L, sahi path

function App() {
  const attendanceData = Attendancedata();

  const [employees, setEmployees] = useState([]);

  function getData(data) {
    setEmployees((prevEmployees) => [...prevEmployees, data]);
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Default route - Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboard */}
        <Route
          path="/Dashboard"
          element={<Dashboard data={employees} attendance={attendanceData} />}
        />

        {/* Employee */}
        <Route path="/Employee" element={<Employee empData={getData} />} />

        {/* Employee List */}
        <Route
          path="/EmployeeList"
          element={<EmployeeList data={employees} />}
        />

        {/* Attendance */}
        <Route
          path="/Attendance"
          element={<Attendance data={attendanceData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
