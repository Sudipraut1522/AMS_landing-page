import React from "react";
import { CircleCheck } from "lucide-react";

const HRManagement: React.FC = () => {
  return (
    <section className="grid md:grid-cols-2 gap-8 px-[5%] py-10">
      <div>
        <div className="">
          <img
            src="https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2025/01/HM-3-1-2048x1497.webp"
            alt=""
            className=""
          />
        </div>
      </div>
      <div className=" flex flex-col justify-center text-gray-600 gap-6">
        <h1 className="lg:text-[36px] font-bold text-gray-800">
          HR MANAGEMENT SIMPLIFIED
        </h1>
        <p>
          pAdapt to new realities, work faster and smarter. Determine a defined
          future of work for your organization with a strong, flexible, global
          HR solution.
        </p>
        <ol>
          <li className="flex gap-2">
            <CircleCheck className="text-white fill-blue-800" />
            <span> Easy access to documents and information.</span>
          </li>
          <li className="flex gap-2">
            <CircleCheck className="text-white fill-blue-800" />
            <span> An employee database that scales.</span>
          </li>{" "}
          <li className="flex gap-2">
            <CircleCheck className="text-white fill-blue-800" />
            <span>Smart HR workflows.</span>
          </li>{" "}
          <li className="flex gap-2">
            <CircleCheck className="text-white fill-blue-800" />
            <span> EAutomation of HR processes.</span>
          </li>{" "}
        </ol>
      </div>
    </section>
  );
};

export default HRManagement;
