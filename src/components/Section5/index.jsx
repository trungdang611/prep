import Slide from "../Slide";
import { dbSlides } from "../db";

const Section5 = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-20">
        <div className="text-center p-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            100% Giáo viên trên Prep đạt
          </h3>
          <h3 className="text-2xl md:text-3xl text-blue-600 font-bold mb-2">
            IELTS 8.0-8.5
          </h3>
          <span className="font-semibold text-gray-400">
            Cựu du học sinh hoặc tốt nghiệp từ ĐH danh tiếng
          </span>
        </div>
        <div>
          <Slide data={dbSlides} autoplay={true} />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-10">
          <div className="mb-5 md:mb-0">
            <h3 className="text-3xl font-bold my-2">Bảng vàng</h3>
            <span className=" text-3xl font-bold text-orange-400 my-2">
              thành tích học viên
            </span>
            <br />
            <span className="font-semibold my-2 text-gray-400 text-md">
              Chương trình học trên Prep đã giúp
            </span>
            <div className="grid grid-cols-2 gap-2 mt-10">
              <div>
                <h3 className="text-4xl font-bold text-green-400">620+</h3>
                <span className="font-semibold text-gray-400 text-md">
                  Học viên đạt <br />
                  IELTS 7.0 trở lên
                </span>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-orange-400">90+</h3>
                <span className="font-semibold text-gray-400 text-md">
                  Học viên đạt <br />
                  8.0 - 8.5
                </span>
              </div>
            </div>
          </div>
          <img src="./result/public.avif" alt="" className="w-[40%]" />
        </div>
      </div>
    </section>
  );
};

export default Section5;
