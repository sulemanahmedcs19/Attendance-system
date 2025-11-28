import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  HashRouter as Router,
} from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Employee from "./Components/Employee";
import EmployeeList from "./Components/EmployeeList";
import Attendance from "./Components/Attendance";
import Login from "./Components/login";

function App() {
  const [employees, setEmployees] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);

  // Fetch attendance data once
  useEffect(() => {
    fetch(
      "https://attendance-system-backend-n5c2.onrender.com/api/attendance/getAllAttendance"
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.attendance) setAttendanceData(result.attendance);
      })
      .catch((err) => console.error("Attendance fetch error:", err));
  }, []);

  // Callback from Employee.jsx to add new employee
  function addEmployee(data) {
    setEmployees((prev) => [...prev, data]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/Dashboard"
          element={
            <Dashboard employees={employees} attendance={attendanceData} />
          }
        />
        <Route path="/Employee" element={<Employee empData={addEmployee} />} />
        <Route
          path="/EmployeeList"
          element={<EmployeeList data={employees} />}
        />
        <Route
          path="/Attendance"
          element={<Attendance data={attendanceData} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
