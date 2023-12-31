// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slide = ({ data, autoplay }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={
          autoplay
            ? {
                delay: 2500,
                disableOnInteraction: false,
              }
            : false
        }
        grabCursor={true}
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {data.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center rounded-xl bg-white p-1 w-[70%] h-auto ml-[55px]">
                <img
                  src={data.img}
                  alt=""
                  className="w-[100%] rounded-xl border"
                />
                <h3 className="font-semibold text-xl text-center mt-2">
                  {data.name}
                </h3>
                <span className="font-semibold text-gray-400">
                  {data.point}
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slide;
