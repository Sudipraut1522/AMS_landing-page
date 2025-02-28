import React from "react";
import Button from "../Button";
import { CircleCheck } from "lucide-react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.8 },
  },
};

const Hero: React.FC = () => {
  return (
    <motion.section
      className="px-4 pt-6 bg-blue-100 md:bg-white"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <motion.div
          className="flex flex-col gap-6 md:items-center justify-start md:justify-center"
          variants={variants}
        >
          <motion.h1
            className="text-[27px] lg:text-[55px] md:max-w-[650px] md:mx-auto font-bold md:text-center"
            variants={variants}
          >
            <span className="text-primary"> All-in-One HR,</span> Payroll &
            Recruitment Platform
          </motion.h1>
          <motion.p
            className="text-gray-500 md:text-center text-[15px]"
            variants={variants}
          >
            Core HR management, performance management, workflows, attendance
            management, payroll, leave management, task management, onboarding
            and recruitment made simple.
          </motion.p>
          <motion.div
            className="flex md:flex-row flex-col justify-center gap-6"
            variants={variants}
          >
            <div className="flex flex-col gap-4">
              <Button
                labelClassName="font-semibold text-center"
                labelName="Start 14 days before trial"
                className="bg-secondary text-center flex justify-center text-white py-3"
              />
              <p className="text-[14px] flex gap-2 items-center text-center">
                <CircleCheck className="text-secondary" />
                <span>No Credit Card Required</span>
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Button
                labelClassName="font-semibold"
                labelName="Schedule a demo"
                className="bg-blue-600 flex justify-center text-white py-3"
              />
              <p className="text-[14px] items-center flex gap-2 text-center">
                <CircleCheck className="text-green-500" />
                <span>No Commitment</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="grid place-content-center" variants={variants}>
          <img
            src="https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2025/01/Group-1410083215-3.webp"
            alt="image"
            className="w-full"
          />
        </motion.div>
      </div>
      <motion.div className="py-10 px-3 md:px-20" variants={variants}>
        <h1>Trusted by</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 pt-10 md:gap-10">
          {[
            "10k+ Companies",
            "1.5M Employees",
            "150+ Features",
            "100+ Cities",
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex gap-3 justify-center lg:border-r border-dashed"
              variants={variants}
            >
              <img
                src="https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2025/01/sec-house.svg"
                alt=""
                className="hidden md:flex"
              />
              <div className="flex flex-col">
                <h1 className="text-[56px] font-bold">{item.split(" ")[0]}</h1>
                <p className="text-lg">{item.split(" ")[1]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
