import React from "react";
import Swipers from "../Swiper";

const Client: React.FC = () => {
  const data = [
    "https://ayata.com.np/images/companies/10.png ",
    "https://ayata.com.np/images/companies/9.png  ",
    "https://ayata.com.np/images/companies/7.png",
    "https://ayata.com.np/images/companies/8.png",
    "https://ayata.com.np/images/companies/5.png",
  ];

  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-center text-3xl font-bold">
        Discover why global clients trust RapidHR software. Join us today!
      </h1>
      <div className="flex w-full justify-center items-center">
        <Swipers
          pagination={false}
          autoPlay={true}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full "
          data={data}
          renderItem={(item, index) => (
            <div className="flex justify-center items-center z-10" key={index}>
              <img
                src={item}
                alt={`Slide ${index}`}
                className="h-40 w-40 object-cover"
              />
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default Client;
