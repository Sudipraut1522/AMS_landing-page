import React from "react";
import Button from "../Button";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <section className=" relative">
      <div className=" px-3 md:px-[40px] bg-[#070f20] text-white pt-26 md:pt-20 ">
        <div className="flex flex-col gap-6 md:flex-row md:gap-12 pt-10">
          <div className="flex flex-col gap-10 md:w-[500px] mt-2">
            <div className="flex flex-col gap-6 ">
              <h1 className="text-4xl font-black py-3">AMS</h1>
              <p>
                Ayata seeks to empower people with innovative digital
                technology. Our mission is to deliver best services to our
                clients, become one of the top service providers in the market
                and build multiple initiatives to solve real problems with
                technology of the future.
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-red-600 py-6">Home</h1>
            <ul>
              <li className="flex items-center gap-2">
                <ChevronRight size={20} />
                <span>Overview</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={20} />
                <span>Careers</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={20} />
                <span>About Us</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={20} />
                <span>Contact Us</span>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={20} />
                <span>Terms & Conditions</span>
              </li>
            </ul>
          </div>

          <div>
            <div>
              <h1 className="text-red-600 py-6">HR Features</h1>
              <ul>
                <li className="flex items-center gap-2">
                  <ChevronRight size={20} />
                  <span>Core HR</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={20} />
                  <span>Careers</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={20} />
                  <span>Payroll Software</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={20} />
                  <span>Attendance Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={20} />
                  <span>Recruitment</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={20} />
                  <span>Travel Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={20} />
                  <span>Task Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight size={20} />
                  <span>Help & Support</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-1 w-full">
            <div className="flex flex-col gap-4 w-full">
              <h1 className="text-red-600 py-6">Subscribe to Newsletter</h1>
              <form className="flex flex-col  gap-6">
                <input
                  type="email"
                  className="bg-white py-2  w-full text-sm px-2 text-gray-400 rounded-md"
                  placeholder="Enter your organization email address"
                />
                <Button
                  labelClassName="text-center"
                  labelName="Subscribe"
                  className="bg-blue-600 text-white text-center  px-10 w-[200px] font-black flex justify-center text-lg rounded-md"
                />
              </form>
              <div className="flex flex-col gap-2">
                <h1 className="py-2 text-[#F3DD79]">Sales</h1>
                <ul className="flex flex-col gap-1">
                  <li className="flex items-center gap-2">
                    <Mail size={20} />
                    <span>hi@ayata.com.np</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone size={20} />
                    <span>+ (+977) 9851171649</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin size={20} />
                    <span>Anamnagar - 10, Kathmandu, Nepal 44600</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row  md:gap-10 flex-col pt-6 ">
          <div className="flex flex-col ">
            <div className="mb-2">
              <h1>Connect with Us :</h1>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                  alt="Facebook"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://t4.ftcdn.net/jpg/03/37/00/77/240_F_337007700_pxx7o6uwvWoANcoLwkZoADiHTeSQGUev.jpg"
                  alt="YouTube"
                  className="w-10 h-10"
                />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://imgs.search.brave.com/MspQtFIstYWh9I8XCeYe5l4nU74LF8jy4FSQ1wvWJAU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS81/MTIvMTc0LzE3NDg1/Ny5wbmc"
                  alt="LinkedIn"
                  className="w-10 h-10"
                />
              </a>
            </div>
          </div>
          <div>
            <p>Download App</p>
            <div className="flex gap-3 items-center">
              <img
                src="https://imgs.search.brave.com/cUnuPuLCFJ-r55ysBf7QPNeDJk8TEOf-bOJB3aao3ug/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzNjL0Rvd25sb2Fk/X29uX3RoZV9BcHBf/U3RvcmVfQmFkZ2Uu/c3Zn"
                alt="Download on the App Store"
                className="w-30 h-8"
              />
              <img
                src="https://imgs.search.brave.com/tRoH29rt20089_SUfudS42Q197Izbu3uo5fz1v1la6Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGF5/Lmdvb2dsZS5jb20v/aW50bC9lbl91cy9i/YWRnZXMvaW1hZ2Vz/L2dlbmVyaWMvZW5f/YmFkZ2Vfd2ViX2dl/bmVyaWMucG5n"
                alt="Get it on Google Play"
                className="w-auto h-12"
              />
            </div>
          </div>
        </div>
        <div className="py-6">
          <hr />
        </div>
        <div className="flex justify-center items-center md:gap-10">
          <div className="">
            <img
              src="https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2023/10/iso-20000.png"
              alt="ISO 20000 certification"
              className="object-contain h-full w-full"
            />
          </div>
          <div className="">
            <img
              src="https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2023/10/iso-20000.png"
              alt="ISO 20000 certification"
              className="object-contain h-full w-full"
            />
          </div>
          <div className="">
            <img
              src="https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2023/10/iso-20000.png"
              alt="ISO 20000 certification"
              className="object-contain h-full w-full"
            />
          </div>
        </div>

        <div className="absolute -top-20 w-[60%] rounded-bl-xl rounded-br-xl h-auto py-6 md:py-10  bg-white inset-shadow-sm    left-1/2 transform -translate-x-1/2">
          <div className=" flex justify-center h-full ">
            <div className="w-full gap-4 flex-col md:flex-row flex text-black justify-between items-center px-6 md:px-10 ">
              <div className="flex flex-col gap-2">
                <h1 className=" text-[22px] md:text-3xl font-bold text-[#070f20]">
                  Get Ready To Dive In!
                </h1>
                <p className="">Get Early Access to RapidHR Software</p>
              </div>
              <Button
                labelName="Reguest Demo"
                className="bg-[#070f20] p-4 md:px-12 text-white"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" text-white py-6 flex justify-center items-center  bg-black">
        <p className="text-center">
          © Copyright 2022 Ayata Incorporation. All rights reserved. Ayata
          Incorporation is a registered 501(c)(3) for-profit organization |
          Terms of Use | Privacy Policy | Anamnagar - 10, Kathmandu, Nepal 44600
          | (+977) 9860463736 | (+977) 9851171649
        </p>
      </div>
    </section>
  );
};

export default Footer;
