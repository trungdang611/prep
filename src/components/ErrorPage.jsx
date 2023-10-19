import { Link } from "react-router-dom";
import Button from "./Button";

export default function ErrorPage() {
  return (
    <div id="error-page">
      <div className="flex justify-center items-center mx-auto my-16 flex-col">
        <div className="w-5/12">
          <img src="../error.png" alt="" />
        </div>
        <h1 className="text-gray-500 font-bold text-3xl my-2">Hix! Bạn ơi</h1>
        <p className="text-gray-500 font-bold text-2xl mb-4">
          Trang bạn tìm kiếm không tồn tại :(
        </p>
        <Link to={"/"}>
          <Button className={" px-24 py-3 font-bold"}>
            Quay lại trang chủ
          </Button>
        </Link>
      </div>
    </div>
  );
}
