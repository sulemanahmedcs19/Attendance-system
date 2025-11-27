import dashboard from "../assets/sidebar/Dashboard.png";
import Attendace from "../assets/sidebar/Attendance.png";
import Employe from "../assets/sidebar/Employe.png";
import Leaves from "../assets/sidebar/Leaves.png";
import Logout from "../assets/sidebar/Logout.png";
import Notification from "../assets/sidebar/Notification.png";
import Setting from "../assets/sidebar/Setting.png";
import profileLogo from "../assets/sidebar/profile.png";

import { Link, useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate(); // <-- added for navigation

  const menu = [
    { name: "Dashboard", link: "/Dashboard", icon: dashboard, type: "link" },
    { name: "Leaves", icon: Leaves, type: "button" },
    { name: "Employee", link: "/Employee", icon: Employe, type: "link" },
    {
      name: "Employee List",
      link: "/EmployeeList",
      icon: Employe,
      type: "link",
    },
    { name: "Attendance", link: "/Attendance", icon: Attendace, type: "link" },
    { name: "Notifications", icon: Notification, type: "button" },
    { name: "Settings", icon: Setting, type: "button" },
    { name: "Logout", icon: Logout, type: "button" },
  ];

  const handleButtonClick = (item) => {
    if (item.name === "Logout") {
      // Optional: clear session / localStorage here
      // localStorage.removeItem("token");
      navigate("/"); // redirect to login page
    } else {
      alert(`${item.name} button clicked!`); // for demo
    }
  };

  return (
    <div className="fixed top-0 left-0 w-[260px] h-screen bg-white shadow-xl border-r border-gray-200 flex flex-col py-8">
      {/* LOGO AREA */}
      <div className="flex items-center justify-center mb-10">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-extrabold text-[#6a1b9a] tracking-widest">
            ALPHA
          </h1>
          <img
            src={profileLogo}
            alt="logo"
            className="w-10 h-10 rounded-full shadow-md"
          />
        </div>
      </div>

      {/* MENU ITEMS */}
      <ul className="flex flex-col gap-3 px-4">
        {menu.map((item, index) => {
          const isActive = location.pathname === item.link;

          return (
            <li key={index}>
              {item.type === "link" ? (
                <Link
                  to={item.link}
                  className={`
                    flex items-center gap-4 w-full px-4 py-3 rounded-lg cursor-pointer 
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-purple-100 text-purple-700 font-bold shadow-inner"
                        : "text-gray-700"
                    }
                    hover:bg-purple-50 hover:text-purple-700
                  `}
                >
                  <img src={item.icon} className="w-5 h-5 opacity-80" />
                  {item.name}
                </Link>
              ) : (
                <button
                  onClick={() => handleButtonClick(item)}
                  className="
                    flex items-center gap-4 w-full px-4 py-3 rounded-lg cursor-pointer 
                    text-gray-700 transition-all duration-300
                    hover:bg-purple-50 hover:text-purple-700
                  "
                >
                  <img src={item.icon} className="w-5 h-5 opacity-80" />
                  {item.name}
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
