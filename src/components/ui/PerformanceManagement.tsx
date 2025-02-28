import { CircleCheck } from "lucide-react";
import React from "react";

const PerformanceManagement: React.FC = () => {
  return (
    <section className="py-6 px-[5%] ">
      <div className=" grid md:grid-cols-2">
        <div>
          <div>
            <img
              src="https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2025/01/Performance-mgmt.webp"
              alt=""
            />
          </div>
        </div>
        <div className=" flex flex-col py-20 text-gray-600 gap-6">
          <h1 className="lg:text-[36px] font-bold text-gray-800">
            PERFORMANCE MANAGEMENT
          </h1>
          <p>
            Regular performance management with RapidHR encourages your
            employees to aim for excellence. Then, your organization is set up
            for success and growth while.
          </p>
          <ol>
            <li className="flex gap-2">
              <CircleCheck className="text-white fill-blue-800" />
              <span> 360 Performance reviews and templates .</span>
            </li>
            <li className="flex gap-2">
              <CircleCheck className="text-white fill-blue-800" />
              <span>Management By Objectives</span>
            </li>{" "}
            <li className="flex gap-2">
              <CircleCheck className="text-white fill-blue-800" />
              <span>Self-Evaluation Tools</span>
            </li>{" "}
            <li className="flex gap-2">
              <CircleCheck className="text-white fill-blue-800" />
              <span> Performance reports</span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default PerformanceManagement;
