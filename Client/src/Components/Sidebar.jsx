import dashboard from "../assets/sidebar/Dashboard.png";
import Attendace from "../assets/sidebar/Attendance.png";
import Employe from "../assets/sidebar/Employe.png";
import Leaves from "../assets/sidebar/Leaves.png";
import Logout from "../assets/sidebar/Logout.png";
import Notification from "../assets/sidebar/Notification.png";
import Setting from "../assets/sidebar/Setting.png";
import profileLogo from "../assets/sidebar/profile.png";
import { Link } from "react-router-dom";

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
          <Link to="/Dashboard">Dashboard</Link>
        </li>
        <li className="hover:text-[#b52fc8] w-full h-[40px] flex items-center pl-4 cursor-pointer">
          <img
            src={Leaves}
            alt="Leaves"
            className="w-5 h-5 mr-3 hover:text-[#b52fc8]"
          />
          <button>Leaves</button>
        </li>
        <li className="hover:text-[#b52fc8] w-full h-[40px] flex items-center pl-4 cursor-pointer">
          <img
            src={Employe}
            alt="Employe"
            className="w-5 h-5 mr-3 hover:text-[#b52fc8]"
          />
          <Link to="/Employee">Employee</Link>
        </li>

        <li className="hover:text-[#b52fc8] w-full h-[40px] flex items-center pl-4 cursor-pointer">
          <img
            src={Employe}
            alt="Employe"
            className="w-5 h-5 mr-3 hover:text-[#b52fc8]"
          />
          <Link to="/EmployeeList">Employee List</Link>
        </li>

        <li className="hover:text-[#b52fc8] w-full h-[40px] flex items-center pl-4 cursor-pointer">
          <img
            src={Attendace}
            alt="Attendance"
            className="w-5 h-5 mr-3 hover:text-[#b52fc8]"
          />
          <Link to="/Attendance">Attendance</Link>
        </li>
        <li className="hover:text-[#b52fc8] w-full h-[40px] flex items-center pl-4 cursor-pointer">
          <img
            src={Notification}
            alt="Notifications"
            className="w-5 h-5 mr-3 hover:text-[#b52fc8]"
          />
          <button>Notifications</button>
        </li>
        <li className="hover:text-[#b52fc8] w-full h-[40px] flex items-center pl-4 cursor-pointer">
          <img
            src={Setting}
            alt="Settings"
            className="w-5 h-5 mr-3 hover:text-[#b52fc8]"
          />
          <button>Settings</button>
        </li>
        <li className="hover:text-[#b52fc8] w-full h-[40px] flex items-center pl-4 cursor-pointer">
          <img
            src={Logout}
            alt="Logout"
            className="w-5 h-5 mr-3 hover:text-[#b52fc8]"
          />
          <button>Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
