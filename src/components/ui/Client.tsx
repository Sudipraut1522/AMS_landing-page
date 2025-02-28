import React from "react";
import Swipers from "../Swiper";

const Client: React.FC = () => {
  const data = [
    "https://imgs.search.brave.com/Nq-DtQXb8x75WpkMj8jwrPriH1FqR_BGIIrzSpAoRzY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzMzMzQ4MDI3L3Iv/aWwvZjdjNGM2LzM4/NjI2NjY2MjEvaWxf/NjAweDYwMC4zODYy/NjY2NjIxXzR1cDYu/anBn",
    "https://imgs.search.brave.com/Nq-DtQXb8x75WpkMj8jwrPriH1FqR_BGIIrzSpAoRzY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzMzMzQ4MDI3L3Iv/aWwvZjdjNGM2LzM4/NjI2NjY2MjEvaWxf/NjAweDYwMC4zODYy/NjY2NjIxXzR1cDYu/anBn",
    "https://imgs.search.brave.com/Nq-DtQXb8x75WpkMj8jwrPriH1FqR_BGIIrzSpAoRzY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzMzMzQ4MDI3L3Iv/aWwvZjdjNGM2LzM4/NjI2NjY2MjEvaWxf/NjAweDYwMC4zODYy/NjY2NjIxXzR1cDYu/anBn",
    "https://imgs.search.brave.com/Nq-DtQXb8x75WpkMj8jwrPriH1FqR_BGIIrzSpAoRzY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzMzMzQ4MDI3L3Iv/aWwvZjdjNGM2LzM4/NjI2NjY2MjEvaWxf/NjAweDYwMC4zODYy/NjY2NjIxXzR1cDYu/anBn",
    "https://imgs.search.brave.com/Nq-DtQXb8x75WpkMj8jwrPriH1FqR_BGIIrzSpAoRzY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzMzMzQ4MDI3L3Iv/aWwvZjdjNGM2LzM4/NjI2NjY2MjEvaWxf/NjAweDYwMC4zODYy/NjY2NjIxXzR1cDYu/anBn",
    "https://imgs.search.brave.com/Nq-DtQXb8x75WpkMj8jwrPriH1FqR_BGIIrzSpAoRzY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzMzMzQ4MDI3L3Iv/aWwvZjdjNGM2LzM4/NjI2NjY2MjEvaWxf/NjAweDYwMC4zODYy/NjY2NjIxXzR1cDYu/anBn",
    "https://imgs.search.brave.com/Nq-DtQXb8x75WpkMj8jwrPriH1FqR_BGIIrzSpAoRzY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzMzMzQ4MDI3L3Iv/aWwvZjdjNGM2LzM4/NjI2NjY2MjEvaWxf/NjAweDYwMC4zODYy/NjY2NjIxXzR1cDYu/anBn",
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
          className="w-full h-[150px]"
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
