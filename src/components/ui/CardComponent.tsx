import { CircleCheck } from "lucide-react";
import React from "react";

interface typeOfData {
  title: string;
  description: string;
  list: string[];
  image: string;
  className?: string;
  bgColor?: string;
}

export const hrData = {
  title: "HR HELP DESK",
  description:
    "Adapt to new realities, work faster and smarter. Determine a defined future of work for your organization with a strong, flexible, global HR solution.",
  list: [
    "Easy access to documents and information.",
    "An employee database that scales.",
    "Smart HR workflows.",
    "Automation of HR processes.",
  ],
  image:
    "https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2025/01/hr-helpdesk.svg",
};

const CardComponent: React.FC<typeOfData> = ({
  title,
  description,
  list,
  image,
  className,
  bgColor,
}) => {
  return (
    <section className={`py-6 px-[5%] w-full ${bgColor}  `}>
      <div className={` flex  justify-between md900:gap-20 ${className}`}>
        <div className="flex md900:w-[50%] flex-col py-20 text-gray-600 gap-6">
          <h1 className="lg:text-[36px] font-bold text-gray-800">{title}</h1>
          <p>{description}</p>
          <ol>
            {list.map((item, index) => (
              <li key={index} className="flex gap-2">
                <CircleCheck className="text-white fill-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
        <div className=" md900:w-[50%]  ">
          <img src={image} alt="HR Help Desk" className="   " />
        </div>
      </div>
    </section>
  );
};

export default CardComponent;
