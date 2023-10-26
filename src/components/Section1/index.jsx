const Section1 = () => {
  return (
    <section className="bg-gray-100">
      <div
        className="
              container flex flex-col items-center pb-60 pt-24 justify-around z-0
              mx-auto md:flex-row md:pt-20 md:px-16
          
            "
      >
        <div
          className="
                flex flex-col items-center justify-around
                font-semibold text-3xl
                md:text-6xl 
              "
        >
          Nền Tảng
          <br />
          <span className="text-blue-600 p-1">Học & Luyện Thi</span>
          Thông Minh
        </div>
        <img
          src="./bg-section/bg-section-1.avif"
          className="w-[40%] md:w-[25%] my-8 md:my-0"
          alt=""
        />
        <span className="font-bold text-xl md:hidden">
          Chọn mục tiêu của bạn:
        </span>
      </div>
    </section>
  );
};

export default Section1;
