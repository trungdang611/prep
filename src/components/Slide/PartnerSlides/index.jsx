// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PartnerSlides = ({ data, autoplay }) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={
          autoplay
            ? {
                delay: 2500,
                disableOnInteraction: false,
              }
            : false
        }
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="p-10 bg-white flex justify-center w-[500px] h-[150px]">
                <img src={data.img} alt="" className="w-[40%] rounded-xl" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default PartnerSlides;
