// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TeacherSlide = ({ data, autoplay }) => {
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
        centerSlides={true}
        grabCursor={true}
        pagination={false}
        navigation={false}
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
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center rounded-xl bg-white p-1 w-[350px] md:w-[380px] h-[220px] border md:ml-[25px]">
                <img
                  src={data.img}
                  alt=""
                  className="w-[100%] rounded-xl shadow-md"
                />
                <span className="font-semibold text-gray-400 text-center mt-3">
                  {data.title}
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TeacherSlide;
