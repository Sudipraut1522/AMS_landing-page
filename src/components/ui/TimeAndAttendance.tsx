"use client";

import { CircleCheck } from "lucide-react";
import type React from "react";
import { motion } from "framer-motion";
import { useAnimations, useStaggeredList } from "../../hooks/useAnimations";

const TimeAndAttendance: React.FC = () => {
  const { ref: sectionRef, animate, initial, variants } = useAnimations();
  const { items: listItems, containerRef: listContainerRef } =
    useStaggeredList(4);

  return (
    <section className="py-6 px-[5%] bg-gray-50" ref={sectionRef}>
      <div className="grid md:grid-cols-2">
        <motion.div
          className="flex flex-col py-20 text-gray-600 gap-6"
          initial="hidden"
          animate="visible"
          variants={variants.containerVariants}
        >
          <motion.h1
            className="lg:text-[36px] font-bold text-gray-800"
            variants={variants.itemVariants}
          >
            TIME AND ATTENDANCE
          </motion.h1>
          <motion.p variants={variants.itemVariants}>
            Adapt to new realities, work faster and smarter. Determine a defined
            future of work for your organization with a strong, flexible, global
            HR solution.
          </motion.p>
          <motion.ol
            className="space-y-2"
            ref={listContainerRef}
            initial="hidden"
            animate="visible"
            variants={variants.containerVariants}
          >
            <motion.li className="flex gap-2" {...listItems[0]}>
              <CircleCheck className="text-white fill-blue-800" />
              <span> Easy access to documents and information.</span>
            </motion.li>
            <motion.li className="flex gap-2" {...listItems[1]}>
              <CircleCheck className="text-white fill-blue-800" />
              <span> An employee database that scales.</span>
            </motion.li>
            <motion.li className="flex gap-2" {...listItems[2]}>
              <CircleCheck className="text-white fill-blue-800" />
              <span>Smart HR workflows.</span>
            </motion.li>
            <motion.li className="flex gap-2" {...listItems[3]}>
              <CircleCheck className="text-white fill-blue-800" />
              <span>Automation of HR processes.</span>
            </motion.li>
          </motion.ol>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants.imageVariants}
        >
          <div>
            <img
              src="https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2025/01/Time-mgmt.svg"
              alt="Time management illustration"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TimeAndAttendance;
