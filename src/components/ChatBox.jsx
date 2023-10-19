import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { FaPhoneVolume } from "react-icons/fa";

const ChatBox = () => {
  const [messageChat, setMessageChat] = useState(true);
  const [support, setSupport] = useState(false);

  const handleMessageChat = () => {
    setMessageChat(null);
    setSupport(!support);
  };
  const handleCloseSupport = () => {
    setSupport(!support);
  };

  return (
    <>
      {support ? (
        <div
          className={`
        } fixed right-[2%] bottom-[20%] cursor-pointer z-50`}
          onClick={handleCloseSupport}
        >
          <div className="bg-white p-5 rounded-full mb-3">
            <img src="./chat-box/zalo.svg" alt="" />
          </div>
          <div className="bg-white p-5 rounded-full mb-3">
            <img src="./chat-box/form-pen.svg" alt="" />
          </div>
          <div className="bg-white p-5 rounded-full mb-3">
            <FaPhoneVolume className=" text-4xl text-blue-600" />
          </div>
          <div className="bg-black p-5 rounded-full">
            <AiOutlineClose className=" text-4xl text-white" />
          </div>
        </div>
      ) : (
        <div className="fixed right-[2%] bottom-[20%]  cursor-pointer z-50">
          <img
            src="./chat-box/bee-support.svg"
            alt=""
            onClick={handleMessageChat}
          />
        </div>
      )}

      <div
        className={`${
          messageChat ? "block" : "hidden"
        } fixed right-[20%] md:right-[7%] bottom-[-13%] cursor-pointer z-50`}
      >
        <h1 className="relative bottom-64  bg-black text-white w-[200px] md:w-[300px] p-2 text-sm rounded-md border-triangle">
          Xin chào, Prep rất vui được hỗ trợ bạn.
          <br />
          Hãy chọn cách thức kết nối và gửi vấn đề
          <br />
          cụ thể mà bạn cần Prep hỗ trợ nhé!
        </h1>
      </div>
    </>
  );
};

export default ChatBox;
