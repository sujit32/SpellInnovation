import { IoHomeOutline } from "react-icons/io5";
import { RiPagesLine } from "react-icons/ri";
import { FaAppStoreIos } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";
import { TfiLayoutWidthDefault } from "react-icons/tfi";
import { FaCreativeCommonsNcEu } from "react-icons/fa";
import { GrAnalytics } from "react-icons/gr";
import { MdContentPasteSearch } from "react-icons/md";
import { Link } from "react-router";
import { useState } from "react";

const SideBar = ({ isCollapsed, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState();

  const menuItemsdata = [
    {
      name: "Dashboard",
      link: "/",
      icon: <IoHomeOutline size={32} />,
    },
    {
      name: "Pages",
      link: "/pages",
      icon: <RiPagesLine size={32} />,
    },
    {
      name: "Application",
      link: "/application",
      icon: <FaAppStoreIos size={32} />,
    },

    {
      name: "UI",
      link: "/ui",
      icon: <FaBuildingColumns size={32} />,
    },
    {
      name: "Menu",
      link: "/menu",
      icon: <MdOutlineMenuBook size={32} />,
    },

    {
      name: "Docs",
      link: "/docs",
      icon: <IoHomeOutline size={32} />,
    },
  ];

  const menuItems = [
    {
      name: "Default",
      icon: <TfiLayoutWidthDefault size={28} />,
    },
    {
      name: "Analytics",
      icon: <GrAnalytics size={28} />,
    },
    {
      name: "Ecommerce",
      icon: <FaCreativeCommonsNcEu size={28} />,
    },
    {
      name: "Content",
      icon: <MdContentPasteSearch size={28} />,
    },
  ];

  return (
    <div className="rounded-lg shadow-lg w-[400px] h-[800px] flex">
      <div className="flex flex-col w-[150px] hover:overflow-y-auto !mt-1 border-r border-gray-300">
        {menuItemsdata?.map((item, i) => (
          <Link
            to={item?.link || "/"}
            key={i}
            className="flex flex-col items-center border-b border-gray-300 hover:bg-gray-200"
            onClick={toggleSidebar}
          >
            <div className="flex flex-col items-center !mt-1">
              <div className="!p-2 text-gray-500">{item?.icon}</div>
              <p className="text-xs text-gray-500 !mt-1 !pb-2 !pr-2">
                {item?.name}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {isCollapsed && (
        <div className="flex flex-col hover:overflow-auto items-center w-full h-full rounded-lg shadow-lg">
          <div className="flex flex-col !mt-1 items-center border-gray-300">
            <div className="flex flex-col items-center !mt-4">
              <div className="!p-2 text-gray-500">
                {menuItems.map((item) => (
                  <li
                    key={item.name}
                    className={`flex items-center cursor-pointer !mb-6 !mr-16 ${
                      activeItem === item.name
                        ? "text-purple-600"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveItem(item.name)}
                  >
                    {/* {activeItem === item.name && (
                    <div className="w-1 h-1 bg-purple-600 rounded-full !mr-2"></div>
                  )} */}
                    <span
                      className={
                        activeItem === item.name
                          ? "text-purple-600"
                          : "text-gray-500"
                      }
                    >
                      {item.icon}
                    </span>
                    <span className="text-sm !ml-2">{item.name}</span>
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
