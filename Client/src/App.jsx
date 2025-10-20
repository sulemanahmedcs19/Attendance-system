import React from 'react';
import Dashboard from './Components/Dashboard';
import Employee from './Components/Employee';
import Attendance from './Components/Attendance';
import EmployeeList from './Components/EmployeeList';

import { BrowserRouter, Route ,Routes } from 'react-router-dom'; 

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Employee" element={<Employee />} />
          <Route path="/EmployeeList" element={<EmployeeList/>} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Attendance" element={<Attendance />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
