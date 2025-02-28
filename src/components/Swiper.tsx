import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

interface SwiperComponentProps<T> {
  data?: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  slidesPerView?: number;
  spaceBetween?: number;
  breakpoints?: Record<number, { slidesPerView: number }>;
  autoPlay?: boolean;
  loop?: boolean;
  pagination?: boolean;
  className?: string;
}

const Swipers = <T,>({
  className,
  autoPlay = false,
  data,
  renderItem,
  slidesPerView = 3,
  spaceBetween = 20,
  loop = true,
  pagination = true,
  breakpoints = {
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1280: { slidesPerView: 4 },
  },
}: SwiperComponentProps<T>) => (
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={spaceBetween}
    slidesPerView={slidesPerView}
    navigation={false}
    pagination={pagination}
    loop={loop}
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    }}
    speed={3000}
    breakpoints={breakpoints}
    className={`flex ${className}`}
  >
    {data?.map((item, index) => (
      <SwiperSlide key={index} className="flex justify-center items-center">
        {renderItem(item, index)}
      </SwiperSlide>
    ))}
  </Swiper>
);

export default Swipers;
