import React from 'react';
import Employee from './Components/Employe';
import Attendace from './Components/Attendance';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';



function App() {
  return (
    <BrowserRouter>
      
    

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Employee" element={<Employee />} />
            <Route path="/Attendance" element={<Attendace />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        
    </BrowserRouter>
  );
}

export default App;
