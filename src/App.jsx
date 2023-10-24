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
          <ChatBox />
          <Section1 />
          <div className=" mt-0 md:mt-16"></div>
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <BackToTop />
          <Section6 />
          <Section7 />
          <Section8 />
          <Section9 />
          <Section10 />
          <Footer />
        </div>
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
