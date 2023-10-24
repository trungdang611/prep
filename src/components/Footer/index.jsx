import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <section className="bg-[#F9FAFB]">
      <div className="grid grid-cols-4 gap-5 container mx-auto py-10 border-b-[1px] border-gray-400">
        <div>
          <img src="./logo.svg" alt="" className="my-5" />
          <h1 className="font-bold text-lg">CÔNG TY CỔ PHẦN CÔNG NGHỆ PREP</h1>
          <h3 className=" text-gray-500 my-3 text-sm">
            <span className=" font-semibold text-black">
              Mã số doanh nghiệp:
            </span>{" "}
            0109817671
          </h3>
          <h3 className=" text-gray-500 mb-2 text-sm">
            <span className=" font-semibold text-black">Địa chỉ:</span> Số nhà
            20 Ngách 234/35 Đường Hoàng Quốc Việt, Phường Cổ Nhuế 1, Quận Bắc Từ
            Liêm, Thành phố Hà Nội, Việt Nam
          </h3>
          <h3 className=" text-gray-500 mb-2 text-sm">
            <span className=" font-semibold text-black">Trụ sở văn phòng:</span>{" "}
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
          <h1 className=" text-gray-500 mb-5">Chính sách bảo vệ thông tin</h1>
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
          <h1 className="font-bold my-3">TRUNG TÂM ĐÀO TẠO NGOẠI NGỮ PREP</h1>
          <h3 className="font-semibold text-black mb-2 ">
            Phòng luyện ảo - trải nghiệm thực tế - công nghệ hàng đầu.
          </h3>
          <h3 className=" text-gray-500 mb-3 text-sm">
            <span className="text-black">Hotline:</span> 0931 42 8899
          </h3>
          <h3 className=" text-gray-500 mb-3 text-sm">
            <span className="text-black">Địa chỉ:</span> Số nhà 20, ngách 234/35
            đường Hoàng Quốc Việt, phường Cổ Nhuế 1, quận Bắc Từ Liêm, TP Hà Nội
          </h3>
          <h3 className=" text-gray-500 mb-3 text-sm">
            Giấy chứng nhận hoạt động đào tạo, bồi dưỡng số 1309/QĐ-SGDĐT ngày
            31 tháng 07 năm 2023 do Sở Giáo dục và Đào tạo Hà Nội cấp
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
  );
};

export default Footer;
