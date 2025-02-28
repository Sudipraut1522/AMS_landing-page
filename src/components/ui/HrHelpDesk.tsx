import { CircleCheck } from "lucide-react";
import React from "react";

const HrHelpDesk: React.FC = () => {
  return (
    <section className="py-6 px-[5%] bg-gray-50">
      <div className=" grid md:grid-cols-2">
        <div className=" flex flex-col py-20 text-gray-600 gap-6">
          <h1 className="lg:text-[36px] font-bold text-gray-800">
            TIME AND ATTENDANCE
          </h1>
          <p>
            pAdapt to new realities, work faster and smarter. Determine a
            defined future of work for your organization with a strong,
            flexible, global HR solution.
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
        <div>
          <div>
            <img
              src="https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2025/01/hr-helpdesk.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HrHelpDesk;
