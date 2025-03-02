import React from "react";

export const Feature = [
  {
    title: "Core HRMS",
    icon: "https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2024/12/Frame-2085664328-5.svg",
    description:
      "Employee management, directory, workflows, self-service, document management",
  },
  {
    title: "Payroll Management",
    icon: "https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2024/12/payroll-icon.svg",
    description:
      "Automate payroll processing, tax calculations, and compliance reporting",
  },
  {
    title: "Recruitment & Onboarding",
    icon: "https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2024/12/recruitment-icon.svg",
    description:
      "Streamline hiring process, track applicants, and manage onboarding",
  },
  {
    title: "Performance Management",
    icon: "https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2024/12/performance-icon.svg",
    description: "Monitor employee performance, feedback, and goal tracking",
  },
  {
    title: "Attendance & Leave",
    icon: "https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2024/12/attendance-icon.svg",
    description:
      "Manage leave policies, track attendance, and automate approvals",
  },
  {
    title: "Employee Engagement",
    icon: "https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2024/12/engagement-icon.svg",
    description: "Boost morale with surveys, rewards, and recognition programs",
  },
  {
    title: "Training & Development",
    icon: "https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2024/12/training-icon.svg",
    description:
      "Upskill employees with training modules and progress tracking",
  },
  {
    title: "Compliance & Security",
    icon: "https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2024/12/compliance-icon.svg",
    description: "Ensure legal compliance and secure employee data management",
  },
  {
    title: "Analytics & Reports",
    icon: "https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2024/12/analytics-icon.svg",
    description: "Gain insights with HR analytics and custom reports",
  },
];

interface FeatureProps {
  title: string;
  icon: string;
  description: string;
}

const Features: React.FC<FeatureProps> = ({ title, icon, description }) => {
  return (
    <section className="bg-white rounded-lg px-6 py-4 flex flex-col gap-2 ">
      <div className="h-[40px] w-[40px]">
        <img src={icon} alt={title} className="object-cover h-full w-full" />
      </div>
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="line-clamp-2">{description}</p>
    </section>
  );
};

export default Features;
