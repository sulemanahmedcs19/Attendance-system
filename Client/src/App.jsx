import React, { useState } from "react";
import Dashboard from "./Components/Dashboard";
import Employee from "./Components/Employee";
import Attendance from "./Components/Attendance";
import EmployeeList from "./Components/EmployeeList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Attendancedata from "./Attendancedata";

function App() {
  const attendanceData = Attendancedata(); 
  

  const [employees, setEmployees] = useState([]);

  const getData = (data) => {
    setEmployees((prevEmployees) => [...prevEmployees, data]);
  };

  return (
    <BrowserRouter>
      <Routes>

        
        <Route
          path="/"element={<Dashboard data={employees} attendance={attendanceData} />}
        />

        <Route path="/Employee" element={<Employee empData={getData} />} />

        <Route
          path="/EmployeeList"
          element={<EmployeeList data={employees} />}
        />

        
        <Route
          path="/Dashboard"
          element={<Dashboard data={employees} attendance={attendanceData} />}
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
