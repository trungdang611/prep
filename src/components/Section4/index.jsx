import { Link } from "react-router-dom";

import Button from "../Button";

const Section4 = () => {
  return (
    <section className="bg-gray-100 p-6 md:p-28">
      <div className="container px-5 md:px-16 md:mx-auto grid grid-rows-1 md:grid-cols-2 gap-10">
        <img src="./bg-section/public.avif" alt="" />
        <div className="my-auto">
          <h3 className="font-bold text-xl md:text-3xl text-center md:text-left">
            Bắt đầu
            <span className="text-blue-600"> tìm kiếm khoá học</span>
            <br /> dễ dàng
          </h3>
          <div className="hidden md:block mt-5">
            <span>
              Các khoá học của Prep được biên soạn và trình bày một cách khoa
              học nhất
            </span>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-5 p-10 md:p-0">
            <Link to="ielts">
              <Button className="rounded-3xl py-3 px-3 md:px-10 font-bold hover:scale-110 duration-300 ease-in-out">
                Khóa học IELTS
              </Button>
            </Link>
            <Link to="thptqg">
              <Button className="rounded-3xl py-3 px-3 md:px-10 font-bold hover:scale-110 duration-300 ease-in-out">
                Khóa học THPTQG
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
