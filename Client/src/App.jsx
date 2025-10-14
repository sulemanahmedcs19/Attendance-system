import React from 'react';
import Dashboard from './Components/Dashboard';
import Employe from './Components/Employe';
import { BrowserRouter, Route ,Routes } from 'react-router-dom'; 

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Employe" element={<Employe />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
