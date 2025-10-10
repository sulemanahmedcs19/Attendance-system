import React from 'react';
import profileLogo from './profile.png'; // Renamed to avoid conflict
import dashboard from './assets/sidebar/Dashboard.png';
import Attendace from '../src/assets/sidebar/Attendance.png';
import Employe from '../src/assets/sidebar/Employe.png';
import Admin from '../src/assets/sidebar/adminlogo.png';
import Search from '../src/assets/sidebar/search.png';
import Leaves from '../src/assets/sidebar/Leaves.png';
import sun from '../src/assets/sidebar/sun.png';
import date from '../src/assets/card/date.png';
import emp from '../src/assets/card/employe.png';
import earlydeparture from '../src/assets/card/earlydeparture.png';
import weather from '../src/assets/card/weather.png';
import timeo from '../src/assets/card/time-out.png';
import Logout from '../src/assets/sidebar/Logout.png';
import Notification from '../src/assets/sidebar/Notification.png';
import Setting from '../src/assets/sidebar/Setting.png';
import Graph from './Graph';

earlydeparture
function App() {
  return (
    <>
      <div className="App flex bg-gray-100">

        {/* Sidebar */}
        <div className="sidebar fixed top-0 left-0 w-[15%] h-[100vh]">
          <div className="text-logo flex w-[50%] justify-center items-center mt-25 ml-20">
            <h1 className="text-black font-bold text-xl mb-1">ALPHA</h1>
            <img src={profileLogo} alt="logo" className="w-[40px] h-[40px] ml-1" />
          </div>

          <ul className="w-full flex flex-col items-start justify-center gap-10 p-15 text-lg font-semibold">
            <li className="hover:text-[#b52fc8] w-full h-[40px] flex items-center pl-4 cursor-pointer">
              <img src={dashboard} alt="Dashboard" className="w-5 h-5 mr-3" />
              Dashboard
            </li>
            <li className="hover:text-[#b52fc8] w-full h-[40px] flex items-center pl-4 cursor-pointer">
              <img src={Leaves} alt="Leaves" className="w-5 h-5 mr-3 hover:text-[#b52fc8]" />
              Leaves
            </li>
            <li className="hover:text-[#b52fc8] w-full h-[40px] flex items-center pl-4 cursor-pointer">
              <img src={Employe} alt="Employee" className="w-5 h-5 mr-3 hover:text-[#b52fc8]" />
              Employee
            </li>
            <li className="hover:text-[#b52fc8] w-full h-[40px] flex items-center pl-4 cursor-pointer">
              <img src={Attendace} alt="Attendance" className="w-5 h-5 mr-3 hover:text-[#b52fc8]" />
              Attendance
            </li>
            <li className="hover:text-[#b52fc8] w-full h-[40px] flex items-center pl-4 cursor-pointer">
              <img src={Notification} alt="Notifications" className="w-5 h-5 mr-3 hover:text-[#b52fc8]" />
              Notifications
            </li>
            <li className="hover:text-[#b52fc8] w-full h-[40px] flex items-center pl-4 cursor-pointer">
              <img src={Setting} alt="Settings" className="w-5 h-5 mr-3 hover:text-[#b52fc8]" />
              Settings
            </li>
            <li className="hover:text-[#b52fc8] w-full h-[40px] flex items-center pl-4 cursor-pointer">
              <img src={Logout} alt="Logout" className="w-5 h-5 mr-3 hover:text-[#b52fc8]" />
              Logout
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="ml-[20%] w-[80%] flex flex-col mt-[2%]">
          {/* Navbar */}
          <header className="w-320 h-[40px] flex items-center px-6 shadow ml-[2%]">
  <div className="flex items-center gap-4 w-full">
    <h1 className="text-black font-bold text-xl">ALPHA</h1>
    <img src={profileLogo} alt="logo" className="w-[30px] h-[30px]" />
    <div className="relative w-[40%] h-[35px] ml-20">
  <img
    src={Search} 
    alt="search-icon"
    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
  />
  <input
    type="text"
    placeholder="Quick Search..."
    className="w-full h-full pl-10 pr-3 rounded-md bg-gray-100 shadow-inner text-sm text-gray-500 focus:outline-none"
  />
</div>

    <div className="ml-auto flex flex-col items-end">
  <div className="flex items-center gap-2">
    <img src={Admin} alt="profile-logo" className="w-[30px] h-[30px] rounded-full" />
    <div className="flex flex-col items-start">
      <p className="text-sm font-medium text-black">Admin</p>
      <p className="text-sm text-gray-500">Asifkhan@domain.ae</p>
    </div>
  </div>
</div>

  </div>
</header>


          {/* Cards Section */}
          <div className="p-6 flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="bg-white shadow-md rounded-lg p-4 w-[34%] h-[400px] flex items-center justify-center text-lg font-bold">
  <div>
    
    <div className="flex items-center mb-2">
      <img
        src={sun} alt="sun-icon" className="w-9 h-9  mr-4"
      />
      <p className="text-2xl text-[#252C58]">8:02:09 PM</p>
    </div>

    
    <p className="text-lg ml-12 mb-4 text-[#252C58]">Realtime Insight</p>

    
    <p className="text-lg ml-12 text-[#252C58]">Today: 2nd August 2023</p>

    
    <button className="mt-25 p-2 bg-[#b52fc8] text-[#ffffff] rounded-md hover:bg-[#9e24a3]">
      Advanced Configuration
    </button>
  </div>
</div>





                <div className="grid grid-cols-3 gap-4 w-2/3">
                <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
  <div className="flex flex-col items-center">
    <div className="flex items-center gap-16">
      <p className="text-4xl font-bold mr-2">15</p>
      
      <img src={emp} className="w-5 h-5" />
    </div>
    
    <p className="text-lg text-[#252C58] mt-2 p-3">Total Employees</p>
    <p className="text-[#252C58]">+ 2 new employees added!</p>
  </div>
</div>



                 <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
  <div className="flex flex-col items-center">
    <div className="flex items-center">
      <p className="text-4xl font-bold ">08</p>
       <img src={date}  className="w-5 h-5 ml-20" />
    </div>
                    <p className="text-lg text-[#252C58] p-3" >On Time</p>
                    <p className="text-[#252C58]">-10% Less than yesterday</p>
                    </div>
                  </div>

                 <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
  <div className="flex flex-col items-center">
    <div className="flex items-center">
      <p className="text-4xl font-bold ">02</p>
       <img src={weather}  className="w-5 h-5 ml-20" />
    </div>
                    <p className="text-lg text-[#252C58] p-3" >Absent</p>
                    <p className="text-[#252C58]">+3% Increase than yesterday</p>
                    </div>
                  </div>  



                 <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
  <div className="flex flex-col items-center">
    <div className="flex items-center">
      <p className="text-4xl font-bold ">03</p>
       <img src={timeo}  className="w-5 h-5 ml-20" />
    </div>
                    <p className="text-lg text-[#252C58] p-3" >Late Arrival</p>
                    <p className="text-[#252C58] mt-2">+3% Increase than yesterday</p>
                    </div>
                  </div>
                 <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
  <div className="flex flex-col items-center">
    <div className="flex items-center">
      <p className="text-4xl font-bold ">01</p>
       <img src={earlydeparture}  className="w-5 h-5 ml-20" />
    </div>
                    <p className="text-lg text-[#252C58] p-3" >Early Departures</p>
                    <p className="text-[#252C58] mt-2">-10% Less than yesterday</p>
                    </div>
                  </div>
                   <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
  <div className="flex flex-col items-center">
    <div className="flex items-center">
      <p className="text-4xl font-bold ">42</p>
       <img src={date}  className="w-5 h-5 ml-20" />
    </div>
                    <p className="text-lg text-[#252C58] p-3" >Time-off</p>
                    <p className="text-[#252C58] mt-2">2% Increase than yesterday</p>
                    </div>
                  </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-white shadow-md rounded-lg p-4 w-[60%] h-[400px] flex items-center justify-center text-lg font-bold">
                
                  <Graph />
                
              </div>

              <div className="flex flex-col gap-4 w-[40%]">
                <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
                <div className="flex flex-col items-center">
                <p className="text-4xl font-bold">12</p>
                <p className="text-lg text-[#252C58]">Check-in</p>
                <p className="text-[#252C58] mt-2">+3% Increase than yesterday</p>
              </div>
              </div>

                <div className="bg-white shadow-md rounded-lg p-3 h-[190px] flex items-center justify-center font-semibold text-sm">
                <div className="flex flex-col items-center">
                  <p className="text-4xl font-bold">02</p>
                  <p className="text-lg text-[#252C58]">Check-out</p>
                  <p className="text-[#252C58] mt-2">2% Increase than yesterday</p>
                </div>
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
