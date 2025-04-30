import SideBar from "../../pages/admin/SideBar";
import NavBar from "../../pages/admin/NavBar";
import { Outlet } from "react-router";
import { useState } from "react";

const AppLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [isFlow, setIsFlow] = useState(true);

  const toggleSidebar = () => {
    if (isFlow && isOpen && isCollapsed) {
      setIsFlow(false);
      setIsOpen(true);
      setIsCollapsed(false);
    } else if (!isFlow && isOpen && !isCollapsed) {
      setIsFlow(false);
      setIsOpen(false);
      setIsCollapsed(false);
    } else if (!isFlow && !isOpen && !isCollapsed) {
      setIsFlow(true);
      setIsOpen(true);
      setIsCollapsed(false);
    } else if (isFlow && isOpen && !isCollapsed) {
      setIsFlow(true);
      setIsOpen(true);
      setIsCollapsed(true);
    }
  };

  const handleSideBar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <div className="overflow-hidden h-screen">
        <NavBar toggleSidebar={toggleSidebar} isCollapsed={isOpen} />
        <div className="flex gap-4 h-full shadow-lg">
          {isOpen && (
            <div
              className={`transition-all duration-300 ease-in-out rounded-lg ${
                !isCollapsed ? "w-[150px] overflow-hidden" : "w-[500px]"
              } h-full`}
            >
              <SideBar
                isCollapsed={isCollapsed}
                toggleSidebar={handleSideBar}
              />
            </div>
          )}

          <div
            className={`${
              !isCollapsed ? "w-[calc(100%-150px)]" : "w-[calc(100%-500px)]"
            } h-full overflow-auto !pt-3`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
