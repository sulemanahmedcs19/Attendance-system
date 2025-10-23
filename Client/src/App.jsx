import React from "react";
import Dashboard from "./Components/Dashboard";
import Employee from "./Components/Employee";
import Attendance from "./Components/Attendance";
import EmployeeList from "./Components/EmployeeList";
import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [employees, setEmployees] = useState([]);

  const getData = (data) => {
    setEmployees((prevEmployees) => [...prevEmployees, data]);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Employee" element={<Employee props={getData} />} />
          <Route
            path="/EmployeeList"
            element={<EmployeeList data={employees} />}
          />
          <Route path="/Dashboard" element={<Dashboard data={employees} />} />
          <Route path="/Attendance" element={<Attendance />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;