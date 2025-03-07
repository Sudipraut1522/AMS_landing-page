import React from "react";
import Hero from "../components/ui/Hero";
import PlatFormFeatures from "../components/ui/PlatFormFeatures";
import TimeAndAttendance from "../components/ui/TimeAndAttendance";
import Client from "../components/ui/Client";
import { hrData } from "../components/ui/CardComponent";
import WallOfLove from "../components/ui/WallOfLove";
import Swipers from "../components/Swiper";
import {
  hrManagementData,
  payRollManagement,
  performanceManagement,
  recruitmentManagement,
  WallOfLoveData,
} from "../data/data";

import Footer from "../components/ui/Footer";
import CardComponent from "../components/ui/CardComponent";

const testimonials = [
  {
    image: "https://via.placeholder.com/150",
    name: "John Doe",
    position: "CEO, TechCorp",
    description: "This platform has completely transformed our HR process!",
    rating: "https://via.placeholder.com/100x20?text=★★★★★",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Jane Smith",
    position: "HR Manager, InnovateX",
    description: "Seamless and efficient. I highly recommend it.",
    rating: "https://via.placeholder.com/100x20?text=★★★★☆",
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Alex Johnson",
    position: "COO, WebWorks",
    description: "The user interface is incredibly intuitive.",
    rating: "https://via.placeholder.com/100x20?text=★★★★★",
  },
];

const Home: React.FC = () => {
  return (
    <div className="mt-5">
      <div className=" ">
        <Hero />
        <PlatFormFeatures />
        <CardComponent
          className=" flex flex-col-reverse md900:flex-row-reverse "
          description={hrManagementData?.description}
          image={hrManagementData?.image}
          list={hrManagementData?.list}
          title={hrManagementData?.title}
        />
        <TimeAndAttendance />
        <CardComponent
          description={payRollManagement?.description}
          image={payRollManagement?.image}
          list={payRollManagement?.list}
          title={payRollManagement?.title}
          className={"flex flex-col md900:flex-row-reverse"}
        />

        <Client />

        <CardComponent
          description={hrData?.description}
          image={hrData?.image}
          list={hrData?.list}
          title={hrData?.title}
          className="flex flex-col-reverse md900:flex-row"
        />

        <section className="py-10 px-4">
          <div className="py-6">
            <h2 className="text-center text-3xl font-bold mb-6">
              Wall of Love
            </h2>
            <p className="text-gray-400 text-center">
              People love RapidHR ! Here is what some of our users have to say.
            </p>
          </div>
          <div className="p-3">
            <Swipers
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="h-80 w-full"
              autoPlay={false}
              data={WallOfLoveData}
              renderItem={(item, index) => <WallOfLove key={index} {...item} />}
            />
          </div>
        </section>
        <CardComponent
          bgColor=" bg-gray-50"
          description={performanceManagement?.description}
          image={performanceManagement?.image}
          list={performanceManagement?.list}
          title={performanceManagement?.title}
          className="flex flex-col md900:flex-row-reverse "
        />
        <CardComponent
          description={recruitmentManagement?.description}
          image={recruitmentManagement?.image}
          list={recruitmentManagement?.list}
          title={recruitmentManagement?.title}
          className="flex flex-col md900:flex-row "
        />
        <div className="pb-30 p-[5%]">
          <div className="bg-blue-100 flex-col md:flex-row gap-10  flex justify-between py-12 px-4 ">
            <div className="flex flex-col justify-center items-center">
              <h1 className="flex flex-col gap-4 text-[20px] md:text-3xl font-bold text-center">
                <span>ACCESS HR ANYWHERE WITH STATE OF</span>
                <span>THE ART RAPIDHR MOBILE APP</span>
              </h1>
              <div className="flex  gap-3 items-center">
                <img
                  src="https://imgs.search.brave.com/cUnuPuLCFJ-r55ysBf7QPNeDJk8TEOf-bOJB3aao3ug/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzNjL0Rvd25sb2Fk/X29uX3RoZV9BcHBf/U3RvcmVfQmFkZ2Uu/c3Zn"
                  alt="Download on the App Store"
                  className="w-30 h-8"
                />
                <img
                  src="https://imgs.search.brave.com/tRoH29rt20089_SUfudS42Q197Izbu3uo5fz1v1la6Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGF5/Lmdvb2dsZS5jb20v/aW50bC9lbl91cy9i/YWRnZXMvaW1hZ2Vz/L2dlbmVyaWMvZW5f/YmFkZ2Vfd2ViX2dl/bmVyaWMucG5n"
                  alt="Get it on Google Play"
                  className="w-auto h-12"
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://d27snf008ywx0f.cloudfront.net/wp-content/uploads/2025/01/Group-1410083209.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
