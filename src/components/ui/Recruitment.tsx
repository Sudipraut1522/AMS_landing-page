import { CircleCheck } from "lucide-react";
import React from "react";

const Recruient: React.FC = () => {
  return (
    <section className="py-6 px-[5%] bg-gray-50">
      <div className=" grid md:grid-cols-2">
        <div className=" flex flex-col py-20 text-gray-600 gap-6">
          <h1 className="lg:text-[36px] font-bold text-gray-800">
            Recruitment Management
          </h1>
          <p>
            Accomplish the high-volume process of sourcing, tracking and
            recruiting the best talent that is aligned with your business – on a
            single, comprehensive, centralized platform.
          </p>
          <ol>
            <li className="flex gap-2">
              <CircleCheck className="text-white fill-blue-800" />
              <span> Efficient & Flexible Hiring</span>
            </li>
            <li className="flex gap-2">
              <CircleCheck className="text-white fill-blue-800" />
              <span>Digital Offer Process Management</span>
            </li>{" "}
            <li className="flex gap-2">
              <CircleCheck className="text-white fill-blue-800" />
              <span>Tracking & Analytics .</span>
            </li>{" "}
            <li className="flex gap-2">
              <CircleCheck className="text-white fill-blue-800" />
              <span>Letters & Mail Merge</span>
            </li>
          </ol>
        </div>
        <div>
          <div>
            <img
              src="https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2025/01/Recruitment-mgmt.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recruient;
