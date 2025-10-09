import React from 'react';
import logo from './profile.png';

function App() {
  return (
    <>
      <div className="App flex bg-gray-100">

        {/* Sidebar */}
        <div className="sidebar fixed top-0 left-0 w-[20%] h-[100vh] bg-white">
          <div className="text-logo flex w-10% ml-10px items-center mt-6  ">
            <h1 className="text-black font-bold text-xl mb-1">ALPHA</h1>
            <img src={logo} alt="logo" className="w-[40px] h-[40px]" />
          </div>

          <ul className="w-full flex flex-col items-start justify-start gap-15   p-4 text-lg font-semibold">
            <li className="hover:text-[#b52fc8] w-full h-[40px] flex items-center pl-4 cursor-pointer">Dashboard</li>
            <li className="hover:text-[#b52fc8] w-full h-[40px] flex items-center pl-4 cursor-pointer">Profile</li>
            <li className="hover:text-[#b52fc8] w-full h-[40px] flex items-center pl-4 cursor-pointer">Settings</li>
            <li className="hover:text-[#b52fc8] w-full h-[40px] flex items-center pl-4 cursor-pointer">Messages</li>
            <li className="hover:text-[#b52fc8] w-full h-[40px] flex items-center pl-4 cursor-pointer">Notifications</li>
            <li className="hover:text-[#b52fc8] w-full h-[40px] flex items-center pl-4 cursor-pointer">Help</li>
            <li className="hover:text-[#b52fc8] w-full h-[40px] flex items-center pl-4 cursor-pointer">Logout</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="ml-[20%] w-[80%] min-h-screen bg-gray-100 flex flex-col">
          {/* Navbar */}
          <header className="w-full h-[60px] bg-white flex items-center px-6 shadow">
            <div className="flex items-center gap-4 w-full">
              <h1 className="text-black font-bold text-xl">ALPHA</h1>
              <img src={logo} alt="logo" className="w-[30px] h-[30px]" />
              <input
                type="text"
                placeholder="Search..."
                className="w-[60%] h-[35px] rounded-[5px] px-3 border border-gray-300"
              />
              <h1 className="text-black ml-auto">ASIF KHAN</h1>
            </div>
          </header>

          {/* Cards Section */}
  <div className="p-6 flex flex-col gap-6">

  
  <div className="flex gap-4">
    
   
    <div className="bg-white shadow-md rounded-lg p-4 w-[34%] h-[400px] flex items-center justify-center text-lg font-bold">
      For Date and Time
    </div>

    
    <div className="grid grid-cols-3 gap-4 w-2/3">
      <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
        Total Employee
      </div>
      <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
        On Time
      </div>
      <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
        Late
      </div>
      <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
        Absent
      </div>
      <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
        Leave
      </div>
      <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
        Work From Home
      </div>
    </div>
  </div>

  
  <div className="flex gap-4">
   
    <div className="bg-white shadow-md rounded-lg p-4 w-[60%] h-[400px] flex items-center justify-center text-lg font-bold">
      Graph
    </div>

    
    <div className="flex flex-col gap-4 w-[40%]">
      <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
        Check In
      </div>
      <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
        Check Out
      </div>
    </div>
  </div>
</div>



 </div>
      </div>
    </>
  );
}

export default App;
