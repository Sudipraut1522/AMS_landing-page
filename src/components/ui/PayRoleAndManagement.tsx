import { CircleCheck } from "lucide-react";
import React from "react";

const PayRoleAndManagement: React.FC = () => {
  return (
    <section className="py-6 px-[5%] ">
      <div className=" grid md:grid-cols-2">
        <div>
          <div>
            <img
              src="https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2025/01/payroll-mgmt.webp"
              alt=""
            />
          </div>
        </div>
        <div className=" flex flex-col py-20 text-gray-600 gap-6">
          <h1 className="lg:text-[36px] font-bold text-gray-800">
            PAYROLL MANAGEMENT
          </h1>
          <p>
            Simplify the complex processes of the payroll with RapidHR, also a
            powerful, secure, accurate, automated and 100% compliant
            system!Rapid HR provides quicker processing, precise payouts, any
            business that wants to prevent potential financial and legal
            repercussions from non-compliance and guarantee that employees are
            paid accurately and on time with precise payroll administration.
          </p>
          <ol>
            <li className="flex gap-2">
              <CircleCheck className="text-white fill-blue-800" />
              <span>
                {" "}
                Quickly determine payroll calculations and deductions
              </span>
            </li>
            <li className="flex gap-2">
              <CircleCheck className="text-white fill-blue-800" />
              <span> Generate accurate Payslips</span>
            </li>{" "}
            <li className="flex gap-2">
              <CircleCheck className="text-white fill-blue-800" />
              <span>Using payroll management to plan future costs</span>
            </li>{" "}
            <li className="flex gap-2">
              <CircleCheck className="text-white fill-blue-800" />
              <span> Secure Data’s and Privacy</span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default PayRoleAndManagement;
