import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <section className="overflow-visible -mt-40 z-10 md:px-0 px-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto text-center md:px-16">
        <Link to="/ielts">
          <div className="relative bg-white rounded-lg p-10 border-2 top-0 hover:-top-5 duration-300 ease-in-out cursor-pointer">
            <img
              src="./about/school.svg"
              alt=""
              className="mt-[-80px] mx-auto"
            />

            <h3 className="font-bold text-2xl mt-5 mb-5">IELTS</h3>
            <div className="text-gray-400 w-full">Lộ trình học hiệu quả</div>
          </div>
        </Link>
        <Link to="/thptqg">
          <div className=" relative bg-white rounded-lg p-10  border-2 top-0 hover:-top-5 duration-300 ease-in-out cursor-pointer">
            <img
              src="./about/lecture.svg"
              alt=""
              className="mt-[-80px] mx-auto"
            />
            <h1 className="font-bold text-2xl mt-5 mb-5">THPTQG</h1>

            <div className="text-gray-400">Lộ trình ôn thi tối ưu</div>
          </div>
        </Link>
        <Link to="/toeic">
          <div className="relative bg-white rounded-lg  p-10 border-2 top-0 hover:-top-5 duration-300 ease-in-out cursor-pointer">
            <img
              src="./about/graduation.svg"
              alt=""
              className="mt-[-80px] mx-auto"
            />
            <h1 className="font-bold text-2xl mt-5 mb-5">TOEIC</h1>

            <div className="text-gray-400 ">Lộ trình luyện thi cấp tốc</div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Section2;
