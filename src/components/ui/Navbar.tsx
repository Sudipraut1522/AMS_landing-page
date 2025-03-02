"use client";
import {
  Briefcase,
  Users,
  CalendarCheck,
  CreditCard,
  MessageSquare,
  ListChecks,
  BarChart3,
  HelpCircle,
  Code,
  FileText,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
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
        {
          icon: <Users className="text-green-600 hover:text-blue-500" />,
          label: "Core HR",
          description:
            "Empowering organizations with seamless management of their human capital.",
        },
        {
          icon: <Briefcase className="text-yellow-600 hover:text-blue-500" />,
          label: "On Boarding",
          description: "Streamline job posting and approval workflows",
        },
        {
          icon: (
            <CalendarCheck className="text-indigo-600 hover:text-blue-500" />
          ),
          label: "Attendance Management",
          description: "Monitor and track employee attendance effectively.",
        },
        {
          icon: <CreditCard className="text-gray-600 hover:text-blue-500" />,
          label: "Payroll Management",
          description: "Automate salary calculations and payments.",
        },
        {
          icon: (
            <CalendarCheck className="text-indigo-600 hover:text-blue-500" />
          ),
          label: "Leave Management",
          description: "Manage employee leave requests efficiently.",
        },
        {
          icon: <Code className="text-purple-600 hover:text-blue-500" />,
          label: "Discord Bot",
          description: "Integrate automation for HR-related tasks via Discord.",
        },
        {
          icon: <MessageSquare className="text-blue-600 hover:text-blue-500" />,
          label: "Communication Module",
          description: "Enhance internal communication and collaboration.",
        },
        {
          icon: <ListChecks className="text-teal-600 hover:text-blue-500" />,
          label: "Task Management",
          description: "Track and manage employee tasks and projects.",
        },
        {
          icon: <BarChart3 className="text-orange-600 hover:text-blue-500" />,
          label: "Performance",
          description: "Analyze and improve employee performance.",
        },
        {
          icon: <HelpCircle className="text-red-600 hover:text-blue-500" />,
          label: "Help and Support",
          description: "Access support and HR-related assistance.",
        },
      ],
    },
    {
      label: "Recruitment & Onboarding",
      submenu: [
        {
          icon: <Briefcase className="text-yellow-600 hover:text-blue-500" />,
          label: "Job Posting",
          description: "Manage and post job listings with ease.",
        },
        {
          icon: <Users className="text-green-600 hover:text-blue-500" />,
          label: "Candidate Screening",
          description: "Filter and assess candidates efficiently.",
        },
        {
          icon: (
            <CalendarCheck className="text-indigo-600 hover:text-blue-500" />
          ),
          label: "Interview Scheduling",
          description: "Automate interview scheduling and notifications.",
        },
        {
          icon: <FileText className="text-gray-600 hover:text-blue-500" />,
          label: "Offer Letters",
          description: "Generate and manage job offer documents.",
        },
      ],
    },
    {
      label: "Resources",
      submenu: [
        {
          icon: <FileText className="text-gray-600 hover:text-blue-500" />,
          label: "HR Documents",
          description: "Access important HR documentation.",
        },
        {
          icon: <MessageSquare className="text-blue-600 hover:text-blue-500" />,
          label: "Employee Policies",
          description: "Review company policies and guidelines.",
        },
        {
          icon: <HelpCircle className="text-red-600 hover:text-blue-500" />,
          label: "FAQs",
          description: "Find answers to common HR questions.",
        },
      ],
    },
    {
      label: "Pricing",
      submenu: [
        {
          icon: <CreditCard className="text-gray-600 hover:text-blue-500" />,
          label: "Subscription Plans",
          description: "Choose a plan that fits your needs.",
        },
        {
          icon: <CreditCard className="text-gray-600 hover:text-blue-500" />,
          label: "Enterprise Solutions",
          description: "Custom pricing for large-scale businesses.",
        },
      ],
    },
    {
      label: "About",
      submenu: [
        {
          icon: <Users className="text-green-600 hover:text-blue-500" />,
          label: "Our Team",
          description: "Meet the people behind our success.",
        },
        {
          icon: <MessageSquare className="text-blue-600 hover:text-blue-500" />,
          label: "Our Mission",
          description: "Learn about our goals and vision.",
        },
      ],
    },
    {
      label: "Services",
      submenu: [
        {
          icon: <Code className="text-purple-600 hover:text-blue-500" />,
          label: "Custom Software",
          description: "Get tailored software solutions.",
        },
        {
          icon: <ListChecks className="text-teal-600 hover:text-blue-500" />,
          label: "Project Management",
          description: "Optimize project execution with our services.",
        },
      ],
    },
  ];

  const handelSideNav = () => {
    setOpenSideNav((prev) => !prev);
  };

  return (
    <div>
      <nav className="fixed top-0  w-full z-50 h-[60px] lg:h-[90px] bg-white border-b border-gray-200 shadow-md">
        <div className="flex w-full items-center justify-between px-6 md:px-2 xl:px-6 pt-4">
          <div className="flex items-center gap-2 xl:gap-6 flex-shrink-0">
            <Link to="/">
              <h1 className="font-bold drop-shadow-lg text-2xl  xl:text-2xl whitespace-nowrap">
                AMS
              </h1>
            </Link>

            <ul className="hidden md900:flex gap-1 xl:gap-4 items-center text-gray-700">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group ">
                  <div
                    className={`flex items-center gap-1 cursor-pointer whitespace-nowrap text-xs sm:text-sm xl:text-base ${
                      item.submenu ? "text-black" : "text-blue-500"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.submenu && (
                      <span>
                        <ChevronDown size={15} />
                      </span>
                    )}
                  </div>

                  <div className="absolute left-0 top-full pt-2 w-max">
                    <div
                      className={`bg-white shadow-lg border border-gray-200 rounded-md ${
                        item.label === "HR Management" ||
                        item.label === "Recruitment & Onboarding"
                          ? " max-w-[70vw]"
                          : "w-[250px]"
                      } opacity-0 group-hover:opacity-100  h-0 overflow-hidden group-hover:h-full mt-10 group-hover:mt-5 transition-all duration-500 ease-in-out`}
                    >
                      <ul
                        className={`p-4 ${
                          item.label === "HR Management" ||
                          item.label === "Recruitment & Onboarding"
                            ? "grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-8"
                            : "flex flex-col gap-2"
                        }`}
                      >
                        {item.submenu.map((subItem, subIndex) => {
                          return (
                            <li
                              key={subIndex}
                              className="px-4 py-3 border border-gray-100 rounded-md text-sm hover:border-l-6 hover:rounded-lg  hover:border-l-blue-400 transition-all duration-200 hover:scale-105 "
                            >
                              <div className="flex items-center gap-2">
                                {subItem.icon}

                                <div className="flex flex-col gap-2">
                                  <p className="font-semibold">
                                    {subItem.label}
                                  </p>
                                  <p className="text-[10px]">
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
                  {/* )} */}
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
            <div className="md900:hidden absolute top-14 left-0 w-full bg-white shadow-lg z-50">
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
                          <li
                            key={subIndex}
                            className="py-3 px-4 text-sm hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                          >
                            {subItem.label}
                          </li>
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
