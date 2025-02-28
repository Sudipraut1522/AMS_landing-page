import React from "react";

export type wallOfLoveProps = {
  image: string;
  name: string;
  description: string;
  rating: string;
  position: string;
};

const WallOfLove: React.FC<wallOfLoveProps> = ({
  image,
  name,
  description,
  rating,
  position,
}) => {
  return (
    <section className="bg-gray-300 rounded-3xl p-6 flex flex-col justify-between h-[200px] gap-2">
      <div className="flex items-center gap-4">
        <img src={image} alt="img" />
        <div>
          <p>{name}</p>
          <p className="text-xs text-gray-600">{position}</p>
        </div>
      </div>
      <div>
        <p>{description}</p>
      </div>
      <img src={rating} alt="" />
    </section>
  );
};

export default WallOfLove;
