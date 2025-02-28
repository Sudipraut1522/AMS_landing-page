import React, { useState } from "react";
import { ChevronDown, AlignJustify } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Navbar: React.FC = () => {
  const [openSideNav, setOpenSideNav] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };
  const menuItems = [
    {
      label: "HR Management",
      submenu: [
        { label: "Web Development" },
        { label: "App Development" },
        { label: "SEO Optimization" },
      ],
    },
    {
      label: "Recruitment & Onboarding",
      submenu: [
        { label: "Web Development" },
        { label: "App Development" },
        { label: "SEO Optimization" },
      ],
    },
    {
      label: "Resources",
      submenu: [
        { label: "Web Development" },
        { label: "App Development" },
        { label: "SEO Optimization" },
      ],
    },
    {
      label: "Pricing",
      submenu: [
        { label: "Web Development" },
        { label: "App Development" },
        { label: "SEO Optimization" },
      ],
    },
    {
      label: "About",
      submenu: [
        { label: "Web Development" },
        { label: "App Development" },
        { label: "SEO Optimization" },
      ],
    },
    {
      label: "Services",
      submenu: [
        { label: "Web Development" },
        { label: "App Development" },
        { label: "SEO Optimization" },
      ],
    },
  ];

  const handelSideNav = () => {
    setOpenSideNav((prev) => !prev);
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-50 h-[60px] lg:h-[80px] bg-white border-b border-gray-200 shadow-md">
        <div className="flex w-full items-center justify-between px-2 lg:px-6 pt-4">
          <div className="flex items-center gap-2 lg:gap-6 flex-shrink-0">
            <Link to="/">
              <h1 className="font-bold drop-shadow-lg text-2xl sm:text-xl lg:text-2xl whitespace-nowrap">
                AMS
              </h1>
            </Link>

            <ul className="hidden md900:flex gap-1 xl:gap-4 items-center text-gray-700">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`relative flex items-center text-xs sm:text-sm lg:text-base gap-1 cursor-pointer whitespace-nowrap transition-all ${
                    item.submenu ? "group" : ""
                  }`}
                >
                  <div
                    className={`flex items-center ${
                      item.submenu ? "text-blue-500" : "text-black"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.submenu && (
                      <span>
                        <ChevronDown size={15} />
                      </span>
                    )}
                  </div>
                  {item.submenu && (
                    <div className="absolute z-10 top-14 left-0 hidden w-48 bg-white shadow-lg group-hover:block">
                      <ul>
                        {item.submenu.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {subItem.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md900:flex gap-2 flex-shrink-0">
            <NavLink to="/login" className="flex items-center cursor-pointer">
              <button className="text-xs sm:text-sm lg:text-base text-gray-700 hover:text-gray-900">
                Login
              </button>
            </NavLink>
            <NavLink to={"/register"}>
              <button className="bg-green-500 text-white rounded cursor-pointer  px-1 xl:px-5 py-1 sm:py-2 text-xs sm:text-sm lg:text-base hover:bg-green-600 transition-all">
                Start Free Trial
              </button>
            </NavLink>
            <button className="bg-blue-500 text-white cursor-pointer rounded  px-1 xl:px-5 py-1 sm:py-2 text-xs sm:text-sm lg:text-base hover:bg-blue-600 transition-all">
              Book a Demo
            </button>
          </div>

          <button
            onClick={handelSideNav}
            aria-label="Open Mobile Menu"
            className="md900:hidden flex flex-shrink-0 relative"
          >
            <AlignJustify size={20} />
          </button>
          {openSideNav && (
            <div className="md900:hidden absolute top-14 left-0 w-full bg-gray-200 shadow-lg">
              <ul className="w-full px-4 text-gray-700">
                {menuItems.map((item, index) => (
                  <li key={index} className="relative">
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex justify-between w-full py-2 text-left"
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
                      <ul className=" bg-white shadow-md">
                        {item.submenu.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className="py-2 px-4 text-sm hover:bg-gray-100"
                          >
                            {subItem?.label}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { ChevronDown, AlignJustify } from "lucide-react";
// import { Link, Outlet } from "react-router-dom";

// const Navbar: React.FC = () => {
//   const [openSideNav, setOpenSideNav] = useState(false);
//   const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
//     null
//   );

//   const menuItems = [
//     {
//       label: "HR Management",
//       submenu: ["Web Development", "App Development", "SEO Optimization"],
//     },
//     {
//       label: "Recruitment & Onboarding",
//       submenu: ["Web Development", "App Development", "SEO Optimization"],
//     },
//     {
//       label: "Resources",
//       submenu: ["Web Development", "App Development", "SEO Optimization"],
//     },
//     {
//       label: "Pricing",
//       submenu: ["Web Development", "App Development", "SEO Optimization"],
//     },
//     {
//       label: "About",
//       submenu: ["Web Development", "App Development", "SEO Optimization"],
//     },
//     {
//       label: "Services",
//       submenu: ["Web Development", "App Development", "SEO Optimization"],
//     },
//   ];

//   const handleSideNav = () => {
//     setOpenSideNav((prev) => !prev);
//   };

//   const toggleDropdown = (index: number) => {
//     setOpenDropdownIndex(openDropdownIndex === index ? null : index);
//   };

//   return (
//     <div>
//       <nav className="fixed top-0 left-0 w-full z-50 h-[60px] lg:h-[80px] bg-white border-b border-gray-200 shadow-md">
//         <div className="flex w-full items-center justify-between px-2 lg:px-6 pt-4">
//           <Link to="/" className="font-bold text-2xl sm:text-xl lg:text-2xl">
//             AMS
//           </Link>
//           <button onClick={handleSideNav} className="md:hidden flex">
//             <AlignJustify size={20} />
//           </button>
//         </div>

//         {openSideNav && (
//           <div className="md:hidden absolute top-14 left-0 w-full bg-gray-200 shadow-lg">
//             <ul className="w-full px-4 text-gray-700">
//               {menuItems.map((item, index) => (
//                 <li key={index} className="relative">
//                   <button
//                     onClick={() => toggleDropdown(index)}
//                     className="flex justify-between w-full py-2 text-left"
//                   >
//                     {item.label}
//                     {item.submenu && (
//                       <ChevronDown
//                         size={15}
//                         className={`transition-transform ${
//                           openDropdownIndex === index ? "rotate-180" : ""
//                         }`}
//                       />
//                     )}
//                   </button>
//                   {openDropdownIndex === index && item.submenu && (
//                     <ul className="pl-4 bg-white shadow-md">
//                       {item.submenu.map((subItem, subIndex) => (
//                         <li
//                           key={subIndex}
//                           className="py-2 px-4 text-sm hover:bg-gray-100"
//                         >
//                           {subItem}
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </nav>
//       <Outlet />
//     </div>
//   );
// };

// export default Navbar;
