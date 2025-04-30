import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { IoAirplaneOutline } from "react-icons/io5";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";

const NavBar = ({ toggleSidebar, isCollapsed }) => {
  return (
    <div className="bg-slate-100 h-[100px] justify-center items-center !p-4 flex shadow-lg gap-4">
      <div className="!p-4 items-center cursor-pointer" onClick={toggleSidebar}>
        {isCollapsed ? (
          <RiMenuUnfoldLine size={26} className="text-purple-600" />
        ) : (
          <RiMenuFoldLine size={26} className="text-purple-600" />
        )}
      </div>

      <div className="border focus:none border-cyan-100 bg-slate-300 rounded-full items-center flex">
        <input type="text" className="h-10 !p-2" placeholder="Search" />
        <div className="!p-2">
          <CiSearch size={24} />
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <button className="border rounded-full cursor-pointer border-blue-200 !p-2 w-20 items-center hover:bg-slate-600 hover:text-white h-full duration-75 transition">
          EN
        </button>
        <button className="border rounded-full cursor-pointer border-blue-200 !p-2 w-20 items-center hover:bg-blue-500 hover:text-white h-full duration-75 transition">
          BUY
        </button>
      </div>

      <div className="flex justify-center items-center w-full ">
        <img src="/src/assets/logo.png" alt="Profile" className="h-12 w-44" />
      </div>

      <div className="flex justify-end w-full items-center gap-4">
        {/* <div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" value="" />
            <div className="group peer bg-gray-300 rounded-full duration-300 w-16 h-8 ring-2 ring-gray-100 after:duration-300 after:bg-red-500 peer-checked:after:bg-green-500 peer-checked:ring-green-500 after:rounded-full after:absolute after:h-6 after:w-6 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-hover:after:scale-95"></div>
          </label>
        </div> */}

        <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
          <TfiLayoutGrid2 size={16} />
        </button>

        <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
          <IoMdNotificationsOutline size={20} />
        </button>

        <button className="text-gray-500 hover:text-gray-700 cursor-pointer">
          <IoAirplaneOutline size={20} />
        </button>

        <div className="flex items-center gap-2 space-x-3">
          <span className="text-gray-600 text-sm">Sujit Shrestha</span>
          <img
            src="/src/assets/logo.png"
            alt="Profile"
            className="h-8 w-8 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
