const Section3 = () => {
  return (
    <section className=" px-5">
      <div className="container md:px-16 mx-auto py-[100px]">
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
              Bởi đội ngũ giáo viên xuất sắc và tận tâm IELTS 8.0 - 8.5,cựu du
              học sinh, tốt nghiệp tại các trường Đại học danh tiếng
            </span>
          </div>
          <div className="rounded-3xl p-10 shadow-2xl">
            <img src="./about/check_note.svg" alt="" />
            <h3 className="font-bold text-lg my-8">
              Đầy đủ bài mẫu, bài tập, mini test, progress test như thi thật
            </h3>
            <span className="font-semibold text-md text-gray-400">
              Bộ tài liệu đã giúp 600 học viên đã đạt IELTS 7.0-8.5 tính tới
              tháng 5/2021
            </span>
          </div>
          <div className="rounded-3xl p-10 shadow-2xl">
            <img src="./about/copy.svg" alt="" />
            <h3 className="font-bold text-lg my-8">
              Bài Speaking-Writing được chấm chất lượng hơn cả offline
            </h3>
            <span className="font-semibold text-md text-gray-400">
              Giáo viên chấm bài chính xác từng chữ với Writing, từng giây với
              Speaking, kết hợp bài kiểm tra phát âm bằng AI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
