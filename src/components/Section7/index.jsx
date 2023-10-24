import Slide from "../Slide";
import { dbSlides2 } from "../db";

const Section7 = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto pb-20">
        <h1 className=" font-bold text-3xl text-center mb-20">
          Báo Chí nói gì về <span className="text-blue-600"> Prep.vn</span>
        </h1>

        <Slide data={dbSlides2} />
      </div>
    </section>
  );
};

export default Section7;
