import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Search from '../assets/sidebar/search.png';

function Attendance() {
  return (
  <>
  <Sidebar />
  <div className="ml-80 mt-10 p-6 bg-white rounded-xl shadow-md w-[75%]">
    <Header />

    <form>
      
      <div className="flex items-center justify-between mb-6 mt-20 px-4 py-3 bg-white rounded-md shadow">
  
  <h1 className="text-lg font-semibold text-gray-800">Attendance Overview</h1>

 
  <div className="flex items-center gap-3">
    
    
    <div >
      <input type="text" placeholder="Quick Search..." className="pl-10 pr-3 py-2 rounded-md border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>

    <input type="date" className="border border-gray-300 rounded-md text-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
    />

    
    <button 
      type="button" 
      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
    >
      
        Advanced Filters
    
    </button>
  </div>
</div>



      
      <div className="bg-white">
        <table className="w-full  text-sm ">
          <thead>
            <tr className=" text-left text-xl">
              <th className="py-3 px-4">ID</th>
              <th className="py-3 px-4">Employee</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Department</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4">Check-in</th>
              <th className="py-3 px-4">Check-out</th>
              <th className="py-3 px-4">Work hours</th>
            </tr>
          </thead>

          <tbody className="bg-white text-xl">
            <tr className="">
              <td className="py-3 px-4 text-[#252C58] font-bold ">2341421</td>
              <td className="py-3 px-4 text-[#252C58] font-bold  ">DilShaad</td>
              <td className="py-3 px-4 text-[#252C58]">Development</td>
              <td className="py-3 px-4 text-[#252C58]">Production</td>
              <td className="py-3 px-4 text-[#252C58]">26 July 2025</td>
              <td className="py-3 px-4 text-[#B52FC8] ">Work from office</td>
              <td className="py-3 px-4 text-[#B52FC8] ">08:00</td>
              <td className="py-3 px-4 text-[#B52FC8] ">05:00</td>
              <td className="py-3 px-4 text-[#252C58] font-bold ">10h 2m</td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-[#252C58] font-bold" >3411421</td>
              <td className="py-3 px-4 text-[#252C58] font-bold">Ghazali</td>
              <td className="py-3 px-4 text-[#252C58]">Senior Executive</td>
              <td className="py-3 px-4 text-[#252C58]">Sales</td>
              <td className="py-3 px-4 text-[#252C58]"> 26 July 2025</td>
              <td className="py-3 px-4 text-[#AA0000]">Absent</td>
              <td className="py-3 px-4 text-[#AA0000]">00:00</td>
              <td className="py-3 px-4 text-[#AA0000]">00:00</td>
              <td className="py-3 px-4 text-[#AA0000]">0m</td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-[#252C58] font-bold" >2341121</td>
              <td className="py-3 px-4 text-[#252C58] font-bold">Hamza</td>
              <td className="py-3 px-4 text-[#252C58]">Senior Manager</td>
              <td className="py-3 px-4 text-[#252C58]">Design</td>
              <td className="py-3 px-4 text-[#252C58]">26 July 2025</td>
              <td className="py-3 px-4 text-[#D5B500]">Late arrival</td>
              <td className="py-3 px-4 text-[#D5B500]">10:30</td>
              <td className="py-3 px-4 text-[#B52FC8]">18:00</td>
              <td className="py-3 px-4 text-[#252C58]">8h 30m</td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-[#252C58] font-bold" >2341121</td>
              <td className="py-3 px-4 text-[#252C58] font-bold">Kinza</td>
              <td className="py-3 px-4 text-[#252C58]">Senior Manager</td>
              <td className="py-3 px-4 text-[#252C58]">Marketing</td>
              <td className="py-3 px-4 text-[#252C58]">26 July 2025</td>
              <td className="py-3 px-4 text-[#252C58]">Late arrival</td>
              <td className="py-3 px-4 text-[#252C58]">10:30</td>
              <td className="py-3 px-4 text-[#252C58]">18:00</td>
              <td className="py-3 px-4 text-[#252C58]">8h 30m</td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-[#252C58] font-bold" >2341121</td>
              <td className="py-3 px-4 text-[#252C58] font-bold">Shahzaib Umrani</td>
              <td className="py-3 px-4 text-[#252C58]">Senior Manager</td>
              <td className="py-3 px-4 text-[#252C58]">Design</td>
              <td className="py-3 px-4 text-[#252C58]">26 July 2025</td>
              <td className="py-3 px-4 text-[#B52FC8]">Late arrival</td>
              <td className="py-3 px-4 text-[#B52FC8]">10:30</td>
              <td className="py-3 px-4 text-[#B52FC8]">18:00</td>
              <td className="py-3 px-4 text-[#252C58]">8h 30m</td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-[#252C58] font-bold" >2341121</td>
              <td className="py-3 px-4 text-[#252C58] font-bold">Asim Khan</td>
              <td className="py-3 px-4 text-[#252C58]">Senior Manager</td>
              <td className="py-3 px-4 text-[#252C58]">Design</td>
              <td className="py-3 px-4 text-[#252C58]">26 July 2025</td>
              <td className="py-3 px-4 text-[#B52FC8]">Late arrival</td>
              <td className="py-3 px-4 text-[#B52FC8]">10:30</td>
              <td className="py-3 px-4 text-[#B52FC8]">18:00</td>
              <td className="py-3 px-4 text-[#252C58]">8h 30m</td>
            </tr>

             <tr className="hover:bg-gray-50">
              <td className="py-3 px-4 text-[#252C58] font-bold" >2341121</td>
              <td className="py-3 px-4 text-[#252C58] font-bold">Hamza</td>
              <td className="py-3 px-4 text-[#252C58]">Senior Manager</td>
              <td className="py-3 px-4 text-[#252C58]">Design</td>
              <td className="py-3 px-4 text-[#252C58]">26 July 2025</td>
              <td className="py-3 px-4 text-[#B52FC8]">Late arrival</td>
              <td className="py-3 px-4 text-[#B52FC8]">10:30</td>
              <td className="py-3 px-4 text-[#B52FC8]">18:00</td>
              <td className="py-3 px-4 text-[#252C58]">8h 30m</td>
            </tr>


            

            
          </tbody>
        </table>

        
      </div>
    </form>
  </div>
</>

  );
}

export default Attendance;