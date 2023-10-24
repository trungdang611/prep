import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatBox from "./components/ChatBox.jsx";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import Section10 from "./components/Section10";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <div className="w-full font-sans">
        <div className="w-full h-auto">
          <img
            src="/top-message/top-message-1.png"
            alt=""
            className="hidden md:block"
          />
          <img
            src="/top-message/top-message-1-m.png"
            alt=""
            className="md:hidden"
          />
        </div>
        <div>
          <Navbar />
        </div>
        <ChatBox />
        <div>
          <section className="bg-gray-100">
            <div
              className="
              container flex flex-col items-center pb-60 pt-24 justify-around z-0
              mx-auto md:flex-row md:pt-20
          
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
          <div className=" mt-0 md:mt-16"></div>
          <section className="overflow-visible -mt-40 z-10 md:px-0 px-5 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto text-center">
              <Link to="/ielts">
                <div className="relative bg-white rounded-lg p-10 border-2 top-0 hover:-top-5 duration-300 ease-in-out cursor-pointer">
                  <img
                    src="./about/school.svg"
                    alt=""
                    className="mt-[-80px] mx-auto"
                  />

                  <h3 className="font-bold text-2xl mt-5 mb-5">IELTS</h3>
                  <div className="text-gray-400 w-full">
                    Lộ trình học hiệu quả
                  </div>
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

                  <div className="text-gray-400 ">
                    Lộ trình luyện thi cấp tốc
                  </div>
                </div>
              </Link>
            </div>
          </section>
          <section>
            <div className="container mx-auto py-[100px]">
              <h3 className="font-bold text-2xl md:text-3xl text-center text-black">
                Những gì chỉ có tại
                <span className="text-blue-600"> Prep.vn</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 container mx-auto">
                <div className="rounded-3xl p-10  shadow-2xl">
                  <img src="./about/slide.svg" alt="" />
                  <h3 className="font-bold text-lg my-8">
                    Video bài giảng chất lượng cao
                  </h3>
                  <span className="font-semibold text-md text-gray-400">
                    Bởi đội ngũ giáo viên xuất sắc và tận tâm IELTS 8.0 -
                    8.5,cựu du học sinh, tốt nghiệp tại các trường Đại học danh
                    tiếng
                  </span>
                </div>
                <div className="rounded-3xl p-10 shadow-2xl">
                  <img src="./about/check_note.svg" alt="" />
                  <h3 className="font-bold text-lg my-8">
                    Đầy đủ bài mẫu, bài tập, mini test, progress test như thi
                    thật
                  </h3>
                  <span className="font-semibold text-md text-gray-400">
                    Bộ tài liệu đã giúp 600 học viên đã đạt IELTS 7.0-8.5 tính
                    tới tháng 5/2021
                  </span>
                </div>
                <div className="rounded-3xl p-10 shadow-2xl">
                  <img src="./about/copy.svg" alt="" />
                  <h3 className="font-bold text-lg my-8">
                    Bài Speaking-Writing được chấm chất lượng hơn cả offline
                  </h3>
                  <span className="font-semibold text-md text-gray-400">
                    Giáo viên chấm bài chính xác từng chữ với Writing, từng giây
                    với Speaking, kết hợp bài kiểm tra phát âm bằng AI
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-gray-100 p-6 md:p-28">
            <div className="container md:mx-auto grid grid-rows-1 md:grid-cols-2 gap-10">
              <img src="./bg-section/public.avif" alt="" />
              <div className="my-auto">
                <h3 className="font-bold text-xl md:text-3xl text-center md:text-left">
                  Bắt đầu
                  <span className="text-blue-600"> tìm kiếm khoá học</span>
                  <br /> dễ dàng
                </h3>
                <div className="hidden md:block mt-5">
                  <span>
                    Các khoá học của Prep được biên soạn và trình bày một cách
                    khoa học nhất
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
                      <h3 className="text-4xl font-bold text-green-400">
                        620+
                      </h3>
                      <span className="font-semibold text-gray-400 text-md">
                        Học viên đạt <br />
                        IELTS 7.0 trở lên
                      </span>
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold text-orange-400">
                        90+
                      </h3>
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
          <section className="bg-gray-100">
            <div className="container mx-auto py-32">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">
                  Học viên nói gì
                  <span className="text-gray-600"> về Prep.vn</span>
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-10 mt-20">
                <div className="w-300px bg-white rounded-xl p-5">
                  <div className="flex">
                    <div className="py-2 pr-2">
                      <img
                        src="./avatar/avatar-1.jpg"
                        alt=""
                        className="w-[50px] rounded-full mr-1"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-md">
                        Lê Nguyễn Quỳnh Nga (096****005) - Hà Nội
                      </h3>
                      <div className="flex items-center">
                        <div className="flex text-yellow-400 text-xl mr-3">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                        <span>4 giờ trước</span>
                      </div>
                    </div>
                  </div>
                  <p className="py-5 border-b-2 border-black">
                    Em rất thích việc linh động lịch học, nên học Prep em có thể
                    học mọi lúc mọi nơi. Prep lại có lộ trình chi tiết cho từng
                    khoá học nên em chỉ việc theo đó mà sắp xếp thời gian học
                    cho hợp lí (quá sung sướng). Tài liệu xịn xò khỏi chê và đặc
                    biệt là chấm chữa Writing và Speaking chi tiết quá luôn ạ.
                  </p>
                  <div className="flex items-center my-2">
                    <AiFillLike className="text-blue-600" />
                    <span>79</span>
                  </div>
                </div>
                <div className="w-300px bg-white rounded-xl p-5">
                  <div className="flex">
                    <div className="py-2 pr-2">
                      <img
                        src="./avatar/avatar-1.jpg"
                        alt=""
                        className="w-[50px] rounded-full mr-1"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-md">
                        Lê Nguyễn Quỳnh Nga (096****005) - Hà Nội
                      </h3>
                      <div className="flex items-center">
                        <div className="flex text-yellow-400 text-xl mr-3">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                        <span>4 giờ trước</span>
                      </div>
                    </div>
                  </div>
                  <p className="py-5 border-b-2 border-black">
                    Em rất thích việc linh động lịch học, nên học Prep em có thể
                    học mọi lúc mọi nơi. Prep lại có lộ trình chi tiết cho từng
                    khoá học nên em chỉ việc theo đó mà sắp xếp thời gian học
                    cho hợp lí (quá sung sướng). Tài liệu xịn xò khỏi chê và đặc
                    biệt là chấm chữa Writing và Speaking chi tiết quá luôn ạ.
                  </p>
                  <div className="flex items-center my-2">
                    <AiFillLike className="text-blue-600" />
                    <span>79</span>
                  </div>
                </div>
                <div className="w-300px bg-white rounded-xl p-5">
                  <div className="flex">
                    <div className="py-2 pr-2">
                      <img
                        src="./avatar/avatar-1.jpg"
                        alt=""
                        className="w-[50px] rounded-full mr-1"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-md">
                        Lê Nguyễn Quỳnh Nga (096****005) - Hà Nội
                      </h3>
                      <div className="flex items-center">
                        <div className="flex text-yellow-400 text-xl mr-3">
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                          <AiFillStar />
                        </div>
                        <span>4 giờ trước</span>
                      </div>
                    </div>
                  </div>
                  <p className="py-5 border-b-2 border-black">
                    Em rất thích việc linh động lịch học, nên học Prep em có thể
                    học mọi lúc mọi nơi. Prep lại có lộ trình chi tiết cho từng
                    khoá học nên em chỉ việc theo đó mà sắp xếp thời gian học
                    cho hợp lí (quá sung sướng). Tài liệu xịn xò khỏi chê và đặc
                    biệt là chấm chữa Writing và Speaking chi tiết quá luôn ạ.
                  </p>
                  <div className="flex items-center my-2">
                    <AiFillLike className="text-blue-600" />
                    <span>79</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-gray-100">
            <div className="container mx-auto pb-20">
              <h1 className=" font-bold text-3xl text-center mb-20">
                Báo Chí nói gì về{" "}
                <span className="text-blue-600"> Prep.vn</span>
              </h1>

              <Slide data={dbSlides2} />
            </div>
          </section>
          <section className="bg-gray-100">
            <div className="container mx-auto pb-20">
              <h1 className="text-3xl font-bold text-center mb-20">
                Chúng tôi tự hào là đối tác của
              </h1>
              <div className="grid grid-cols-3 gap-10">
                <div className="p-5 bg-white flex justify-center items-center rounded-lg">
                  <img
                    src="./partner/partner1.jpeg"
                    alt=""
                    className="w-[20%]"
                  />
                </div>
                <div className="p-5 bg-white flex justify-center items-center rounded-lg">
                  <img
                    src="./partner/partner2.png"
                    alt=""
                    className="w-[50%]"
                  />
                </div>
                <div className="p-5 bg-white flex justify-center items-center rounded-lg">
                  <img
                    src="./partner/partner3.png"
                    alt=""
                    className="w-[50%]"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="bg-white">
            <div className="container mx-auto py-20 px-10">
              <h1 className="text-center text-3xl font-bold pb-20">
                Bắt đầu <span className="text-blue-600">khoá học dễ dàng</span>{" "}
                với
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
                  <span className=" text-9xl font-bold text-gray-800/20 z-0">
                    1
                  </span>
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
                  <span className=" text-9xl font-bold text-gray-800/20 z-0">
                    2
                  </span>
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
                  <span className=" text-9xl font-bold text-gray-800/20 z-0">
                    3
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-gray-100">
            <div className="container mx-auto pt-10 pb-5 flex justify-center">
              <Button className="font-semibold">
                Chọn ngay mục tiêu của bạn
              </Button>
            </div>
          </section>
          <section className="bg-[#F9FAFB]">
            <div className="grid grid-cols-4 gap-5 container mx-auto py-10 border-b-[1px] border-gray-400">
              <div>
                <img src="./logo.svg" alt="" className="my-5" />
                <h1 className="font-bold text-lg">
                  CÔNG TY CỔ PHẦN CÔNG NGHỆ PREP
                </h1>
                <h3 className=" text-gray-500 my-3 text-sm">
                  <span className=" font-semibold text-black">
                    Mã số doanh nghiệp:
                  </span>{" "}
                  0109817671
                </h3>
                <h3 className=" text-gray-500 mb-2 text-sm">
                  <span className=" font-semibold text-black">Địa chỉ:</span> Số
                  nhà 20 Ngách 234/35 Đường Hoàng Quốc Việt, Phường Cổ Nhuế 1,
                  Quận Bắc Từ Liêm, Thành phố Hà Nội, Việt Nam
                </h3>
                <h3 className=" text-gray-500 mb-2 text-sm">
                  <span className=" font-semibold text-black">
                    Trụ sở văn phòng:
                  </span>{" "}
                  NO.21-C2 KĐT Nam Trung Yên, P.Trung Hòa, Q.Cầu Giấy, Tp.Hà Nội
                </h3>
              </div>
              <div>
                <h1 className="font-bold my-5">VỀ PREP</h1>
                <h1 className=" text-gray-500 mb-5">Giới thiệu</h1>
                <h1 className=" text-gray-500 mb-5">Tuyển dụng</h1>
                <h1 className="font-bold my-5">KẾT NỐI VỚI CHÚNG TÔI</h1>
                <div className="flex text-gray-500 text-2xl">
                  <BsFacebook className="mr-3" />
                  <MdEmail />
                </div>
              </div>
              <div>
                <h1 className="font-bold my-5">THÔNG TIN </h1>
                <h1 className=" text-gray-500 mb-5">Điều kiện giao dịch</h1>
                <h1 className=" text-gray-500 mb-5">Chính sách thanh toán</h1>
                <h1 className=" text-gray-500 mb-5">
                  Chính sách bảo vệ thông tin
                </h1>
                <div className=" text-gray-500 mb-5">Cam kết đầu ra</div>
              </div>
              <div>
                <h3 className="font-bold my-5">TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI</h3>
                <img src="./app-store-n.svg" alt="" className="mb-5" />
                <img src="./gg-play-n.svg" alt="" />
              </div>
            </div>

            <div className="container mx-auto grid grid-cols-2 mt-3">
              <div>
                <h1 className="font-bold my-3">
                  TRUNG TÂM ĐÀO TẠO NGOẠI NGỮ PREP
                </h1>
                <h3 className="font-semibold text-black mb-2 ">
                  Phòng luyện ảo - trải nghiệm thực tế - công nghệ hàng đầu.
                </h3>
                <h3 className=" text-gray-500 mb-3 text-sm">
                  <span className="text-black">Hotline:</span> 0931 42 8899
                </h3>
                <h3 className=" text-gray-500 mb-3 text-sm">
                  <span className="text-black">Địa chỉ:</span> Số nhà 20, ngách
                  234/35 đường Hoàng Quốc Việt, phường Cổ Nhuế 1, quận Bắc Từ
                  Liêm, TP Hà Nội
                </h3>
                <h3 className=" text-gray-500 mb-3 text-sm">
                  Giấy chứng nhận hoạt động đào tạo, bồi dưỡng số 1309/QĐ-SGDĐT
                  ngày 31 tháng 07 năm 2023 do Sở Giáo dục và Đào tạo Hà Nội cấp
                </h3>
              </div>
              <div>
                <h1 className="font-bold my-3">CHỨNG NHẬN BỞI</h1>
                <div className="flex">
                  <img src="./bct.png" alt="" className="w-[30%] mr-2" />
                  <img src="./sectigo.png" alt="" className="w-[60%] mr-2" />
                  <img
                    src="./_dmca_premi_badge_4.png"
                    alt=""
                    className="w-[100%] h-auto"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
