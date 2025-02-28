import React from "react";
import Button from "../Button";

const Features: React.FC = () => {
  return (
    <section className="bg-white rounded-lg px-6 py-4 flex flex-col gap-2 ">
      <div className="h-[40px] w-[40px]">
        <img
          src="https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2024/12/Frame-2085664328-5.svg"
          alt=""
          className="object-cover h-full w-full"
        />
      </div>
      <h1 className="font-bold text-xl">Core HRMS</h1>
      <p className="line-clamp-2">
        Employee management, directory, workflows, self-service, document
        management
      </p>
      <Button labelName="Explore Me" className="px-0 text-blue-700" />
    </section>
  );
};

export default Features;
