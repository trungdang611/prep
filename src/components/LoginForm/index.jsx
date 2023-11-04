import { useState } from "react";

import Button from "../Button";
import Logo from "../Navbar/Logo";
import { Link } from "react-router-dom";
import PhoneNumberLogin from "./PhoneNumberLogin";

const LoginForm = () => {
  const [phoneNumberLogin, setPhoneNumberLogin] = useState(false);

  const handlePhoneNumberLogin = () => {
    setPhoneNumberLogin(!phoneNumberLogin);
  };

  return (
    <div className="flex items-start md:items-center justify-center w-full h-screen bg-white">
      <div className=" flex items-center justify-center h-auto md:bg-blue-100 pt-10 md:py-5 md:mx-10 rounded-3xl">
        <div className="hidden md:block p-10">
          <div>
            <img src="./decor.png" alt="" className="w-[50%]" />
          </div>
          <h2 className="text-4xl font-bold text-blue-500 my-3">
            Miễn Phí Kiểm Tra Trình Độ
          </h2>
          <h5 className="text-xl font-semibold text-gray-600">
            Kiểm tra trình độ hoàn toàn miễn phí.
            <br />
            Chỉ cần 1 tài khoản duy nhất, bạn có thể thực hiện các bài
            <br />
            Kiểm Tra Đầu Vào để xác định trình độ nhanh chóng.
          </h5>
        </div>
        {phoneNumberLogin ? (
          <PhoneNumberLogin onClick={handlePhoneNumberLogin} />
        ) : (
          <div className="flex flex-col justify-center items-center bg-white md:p-10 md:mr-10 rounded-2xl  h-[442px] w-[446px]">
            <div className="mb-10 md:mb-5">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <h3 className="text-center font-bold text-xl mb-10 md:mb-5">
              Tham gia ngay cùng Nền tảng học và Luyện thi thông minh
            </h3>
            <Button
              onClick={handlePhoneNumberLogin}
              className=" w-[350px] h-[50px] font-semibold m-2 rounded-xl"
            >
              Đăng nhập với Email
            </Button>
            <Button className=" w-[350px] h-[50px] font-semibold m-2 rounded-xl bg-white border border-blue-500">
              <h5 className="text-blue-500">Tiếp tục với username</h5>
            </Button>

            <div className="text-xs mx-5 mt-10 text-center">
              <h5 className="mx-1">
                Bằng cách tiếp tục đăng ký, chúng tôi xác nhận bạn đã đọc và
                đồng ý
              </h5>
              <h5>
                với{" "}
                <span className="text-black font-semibold">
                  Điều kiện & Điều khoản
                </span>{" "}
                cùng
                <span className="text-black font-semibold">
                  {" "}
                  Chính sách bảo mật
                </span>{" "}
                tại Prep.vn
              </h5>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
