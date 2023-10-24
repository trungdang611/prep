const Section9 = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-20 px-10">
        <h1 className="text-center text-3xl font-bold pb-20">
          Bắt đầu <span className="text-blue-600">khoá học dễ dàng</span> với
          <br />3 bước
        </h1>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="flex flex-col items-center p-5">
            <div className="p-2 bg-blue-800 rounded-lg">
              <img src="./slide-3/public.png" alt="" />
            </div>
            <h1 className="absolute mt-20 font-semibold text-md text-center z-10">
              Chọn chương trình <br /> học bạn mong muốn
            </h1>
            <span className=" text-9xl font-bold text-gray-800/20 z-0">1</span>
          </div>
          <div className="hidden md:block pt-14">
            <img src="./slide-3/public (1).avif" alt="" />
          </div>
          <div className="flex flex-col items-center p-5 md:pt-24">
            <div className="p-2 bg-blue-800 rounded-lg">
              <img src="./slide-3/public.avif" alt="" />
            </div>
            <h1 className="absolute mt-20 font-semibold text-md text-center z-10">
              Tiến hành thanh toán <br /> học phí
            </h1>
            <span className=" text-9xl font-bold text-gray-800/20 z-0">2</span>
          </div>
          <div className=" hidden md:block pt-20">
            <img src="./slide-3/public (2).avif" alt="" />
          </div>
          <div className="flex flex-col items-center p-5 md:pt-44">
            <div className="p-2 bg-blue-800 rounded-lg">
              <img src="./slide-3/public (1).png" alt="" />
            </div>
            <h1 className="absolute mt-20 font-semibold text-md text-center z-10">
              Vào màn "Khoá học của tôi" <br /> để bắt đầu học ngay
            </h1>
            <span className=" text-9xl font-bold text-gray-800/20 z-0">3</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section9;
