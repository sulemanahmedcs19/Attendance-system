import dashboard from '../assets/sidebar/Dashboard.png';
import Attendace from '../assets/sidebar/Attendance.png';
import Employe from '../assets/sidebar/Employe.png';
import Leaves from '../assets/sidebar/Leaves.png';
import Logout from '../assets/sidebar/Logout.png';
import Notification from '../assets/sidebar/Notification.png';
import Setting from '../assets/sidebar/Setting.png';
import profileLogo from '../assets/sidebar/profile.png';




function Sidebar() {
  return (
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
  );
};

export default Sidebar;
