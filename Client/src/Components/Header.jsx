import profileLogo from "../assets/sidebar/profile.png";
import Admin from "../assets/sidebar/adminlogo.png";
import Search from "../assets/sidebar/search.png";

function Header() {
  return (
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
            <img
              src={Admin}
              alt="profile-logo"
              className="w-[30px] h-[30px] rounded-full"
            />
            <div className="flex flex-col items-start">
              <p className="text-sm font-medium text-black">Admin</p>
              <p className="text-sm text-gray-500">Asifkhan@domain.ae</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
