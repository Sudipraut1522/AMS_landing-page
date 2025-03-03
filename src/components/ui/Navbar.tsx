import type React from "react";
import { useEffect, useState } from "react";
import { ChevronDown, AlignJustify } from "lucide-react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { menuItems } from "../../data/data";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [openSideNav, setOpenSideNav] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const handelSideNav = () => {
    setOpenSideNav((prev) => !prev);
  };

  console.log(location, "dashdfjads");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <div>
      <nav className="fixed top-0   w-full z-50  bg-white border-b border-gray-200 shadow-md">
        <div className="flex py-6 md900:py-0 w-full items-center justify-between px-6 md:px-2 xl:px-6 ">
          <div className="flex items-center gap-2 xl:gap-6 flex-shrink-0">
            <Link to="/">
              <h1 className="font-bold drop-shadow-lg text-2xl  xl:text-3xl whitespace-nowrap">
                AMS
              </h1>
            </Link>

            <ul className="hidden md900:flex  gap-2 xl:gap-4 items-center text-gray-700">
              {menuItems.map((item, index) => (
                <li key={index} className=" group relative  ">
                  <div
                    className={`flex group-hover:text-blue-500 group-hover:cursor-pointer   items-center gap-1 cursor-pointer whitespace-nowrap text-xs sm:text-sm xl:text-base py-8 hover:text-bl ${
                      item.submenu ? "text-black" : "text-blue-500"
                    }`}
                  >
                    <span className="">{item.label}</span>
                    {item.submenu && (
                      <span>
                        <ChevronDown size={15} />
                      </span>
                    )}
                  </div>

                  <div className="absolute   duration-500 z-50 left-0 top-full w-max opacity-0 group-hover:opacity-100  h-[0px] overflow-hidden group-hover:h-fit mt-10 group-hover:mt-0 ">
                    <div
                      className={`bg-white shadow-lg border border-gray-200 rounded-md relative ${
                        item.label === "HR Management" ||
                        item.label === "Recruitment & Onboarding"
                          ? " "
                          : ""
                      }  `}
                    >
                      <ul
                        className={` p-5 py-10 ${
                          item.label === "HR Management" ||
                          item.label === "Recruitment & Onboarding"
                            ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6"
                            : " flex gap-4 flex-col"
                        }`}
                      >
                        {item?.submenu?.map((subItem, subIndex) => {
                          return (
                            <li
                              key={subIndex}
                              className="px-4 py-3 border-l-6 border-white shadow-gray-200 rounded-md text-sm hover:drop-shadow-xl hover:rounded-xl  hover:border-l-blue-400   overflow-hidden duration-200 hover:scale-105 "
                            >
                              <div className="flex items-center gap-4 hover:drop-shadow-lg">
                                {subItem.icon}

                                <div className="flex flex-col gap-2">
                                  <p className="font-semibold">
                                    {subItem.label}
                                  </p>
                                  <p className="text-[12px] hidden lg:block w-[250px]">
                                    {subItem?.description}
                                  </p>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md900:flex gap-2 flex-shrink-0">
            <NavLink to="/login" className="flex items-center cursor-pointer">
              <button className="text-xs sm:text-sm xl:text-base text-gray-700 hover:text-gray-900">
                Login
              </button>
            </NavLink>
            <NavLink to={"/register"}>
              <button className="bg-green-500 text-white rounded cursor-pointer px-1 xl:px-5 py-1 sm:py-2 text-xs sm:text-sm lg:text-base hover:bg-green-600 transition-all">
                Start Free Trial
              </button>
            </NavLink>
            <NavLink to="/bookademo">
              <button className="bg-blue-500 text-white rounded cursor-pointer px-1 xl:px-5 py-1 sm:py-2 text-xs sm:text-sm lg:text-base hover:bg-blue-600 transition-all">
                Book A Demo
              </button>
            </NavLink>
          </div>

          <button
            onClick={handelSideNav}
            aria-label="Open Mobile Menu"
            className="md900:hidden flex flex-shrink-0 relative"
          >
            <AlignJustify size={30} />
          </button>

          {openSideNav && (
            <div className="md900:hidden absolute top-14 left-0 w-full bg-white h-screen overflow-auto shadow-lg z-50">
              <ul className="w-full px-4 text-gray-700">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="relative border-b border-gray-100 last:border-b-0"
                  >
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex justify-between w-full py-3 text-left"
                    >
                      {item.label}
                      {item.submenu && (
                        <ChevronDown
                          size={15}
                          className={`transition-transform ${
                            openDropdownIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>
                    {openDropdownIndex === index && item.submenu && (
                      <ul className="bg-gray-50 rounded-md my-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <div className="flex gap-4 p-2">
                            {subItem.icon}

                            <li
                              key={subIndex}
                              className="py-3 px-4 text-sm hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                            >
                              {subItem.label}
                            </li>
                          </div>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2 p-4 border-t border-gray-200">
                <NavLink to="/login" className="w-full">
                  <button className="w-full py-2 text-center border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                    Login
                  </button>
                </NavLink>
                <NavLink to="/register" className="w-full">
                  <button className="w-full py-2 text-center bg-green-500 text-white rounded hover:bg-green-600 transition-all">
                    Start Free Trial
                  </button>
                </NavLink>
                <NavLink to="/bookademo" className="w-full">
                  <button className="w-full py-2 text-center bg-blue-500 text-white rounded hover:bg-blue-600 transition-all">
                    Book a Demo
                  </button>
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </nav>
      <div className="pt-[60px] lg:pt-[80px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
