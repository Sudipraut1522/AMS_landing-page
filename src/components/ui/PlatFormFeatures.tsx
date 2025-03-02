import React from "react";
import Features, { Feature } from "./Features";

const PlatFormFeatures: React.FC = () => {
  return (
    <section className="flex flex-col gap-10 bg-gray-200 py-10 px-[5%]">
      <div className="flex justify-center ">
        <div className="flex flex-col gap-3 ">
          <h1 className="text-[36px] text-center font-bold">
            PLATFORM FEATURES
          </h1>
          <p>Everything you need to create a high-performance culture</p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md900:grid-cols-2 lg:grid-cols-4 gap-6">
        {Feature?.map((feature, index) => (
          <Features
            key={index}
            description={feature?.description}
            icon={feature?.icon}
            title={feature?.title}
          />
        ))}
      </div>
    </section>
  );
};

export default PlatFormFeatures;
