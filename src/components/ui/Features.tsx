import React from "react";
import Button from "../Button";
import { MoveRight } from "lucide-react";

interface FeatureProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  color?: string;
}

const Features: React.FC<FeatureProps> = ({
  title,
  icon,
  description,
  color,
}) => {
  return (
    <section className="bg-white rounded-lg px-6 py-4 flex flex-col gap-2 ">
      <div>
        <div
          style={{ background: color }}
          className={`flex items-center justify-center rounded-md h-[50px] w-[50px]`}
        >
          <p>{icon}</p>
        </div>
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="line-clamp-2">{description}</p>
      </div>
      <Button
        className="text-blue-600"
        labelName="Learn More"
        labelClassName="text-blue-600"
        icone={<MoveRight />}
      />
    </section>
  );
};

export default Features;
