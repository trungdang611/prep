const Section8 = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto pb-20">
        <h1 className="text-3xl font-bold text-center mb-20">
          Chúng tôi tự hào là đối tác của
        </h1>
        <div className="grid grid-cols-3 gap-10">
          <div className="p-5 bg-white flex justify-center items-center rounded-lg">
            <img src="./partner/partner1.jpeg" alt="" className="w-[20%]" />
          </div>
          <div className="p-5 bg-white flex justify-center items-center rounded-lg">
            <img src="./partner/partner2.png" alt="" className="w-[50%]" />
          </div>
          <div className="p-5 bg-white flex justify-center items-center rounded-lg">
            <img src="./partner/partner3.png" alt="" className="w-[50%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
