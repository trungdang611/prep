import PartnerSlides from "../Slide/PartnerSlides";
import { dbPartnerSlide } from "../db";

const Section8 = () => {
  return (
    <section className="bg-gray-100">
      <div className="container px-5 md:px-16 mx-auto pb-20">
        <h1 className="text-3xl font-bold text-center mb-20">
          Chúng tôi tự hào là đối tác của
        </h1>
        <PartnerSlides data={dbPartnerSlide} />
      </div>
    </section>
  );
};

export default Section8;
