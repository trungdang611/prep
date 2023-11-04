import { useState } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { BiSolidHide, BiShow } from "react-icons/bi";

const PhoneNumberLogin = ({ onClick }) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-white md:p-20 md:mr-10 rounded-2xl h-[442px] w-[446px] m-0">
      <div className=" flex flex-col items-center text-xs">
        <div className="relative">
          <button
            onClick={onClick}
            className="absolute top-[-8px] left-[-54px] cursor-pointer p-3"
          >
            <IoIosArrowBack className="text-3xl" />
          </button>
          <h5 className="mx-1 text-2xl font-bold text-gray-600 text-center">
            Tiếp tục bằng Email
          </h5>
        </div>
        <div className="mt-5">
          <h5 className="text-center">
            Bạn hãy nhập Email đang liên kết với tài khoản Prep. Trường hợp
            Email của bạn chưa có! Hãy đăng kí
            <span className="font-semibold text-blue-500 underline cursor-pointer ml-1">
              tại đây
            </span>
          </h5>
        </div>
        <form action="login" method="POST">
          <div className="mb-2">
            <h3 className="font-bold text-gray-600 text-left mb-1">Email:</h3>
            <input
              type="email"
              className="p-2 w-[300px] rounded outline-none border border-gray-300"
              placeholder="Hãy nhập Email của bạn"
            />
          </div>
          <div>
            <h3 className="font-bold text-gray-600 text-left mb-1">
              Password:
            </h3>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className=" p-2 w-[300px] rounded outline-none border border-gray-300"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Hãy nhập mật khẩu của bạn"
              />
              {password && (
                <div
                  onClick={togglePasswordVisibility}
                  className="absolute top-1 right-1 cursor-pointer p-1"
                >
                  {showPassword ? (
                    <BiShow className="text-lg text-gray-600"></BiShow>
                  ) : (
                    <BiSolidHide className="text-lg text-gray-600" />
                  )}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="p-2 w-[300px] text-white bg-blue-600 font-bold rounded my-2 hover:bg-blue-500 cursor-pointer"
            >
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PhoneNumberLogin;
