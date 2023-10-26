import { useState } from "react";

import Logo from "./Logo";
import Button from "../Button";
import NavLink from "./NavLink";

import { FiArrowRight } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className=" bg-white shadow-sm shadow-gray-300">
        <nav className="flex justify-between relative top-0 left-0 right-0 max-h-full flex-col md:min-h-[80px]  md:flex-row md:items-center md:container md:px-16 md:mx-auto">
          <div className="flex justify-between items-center min-h-[60px] px-4 border-b-[1px] border-gray-200 md:hidden">
            <div
              className="md:hidden cursor-pointer text-2xl"
              onClick={handleOpenMenu}
            >
              {!openMenu ? <HiMenu /> : <AiOutlineClose />}
            </div>
            <Link to="/">
              <Logo />
            </Link>
            <Link to="/login">
              <Button className={"md:hidden px-2"}>Bắt đầu</Button>
            </Link>
          </div>

          <div className="hidden md:block">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="hidden md:block flex-1">
            <ul className="flex justify-center items-center">
              <li className="nav-item flex justify-center items-center mx-4 font-bold text-lg cursor-pointer hover:text-blue-800 ">
                <Link to="/">Trang chủ</Link>
              </li>
              <NavLink
                className={
                  "nav-item flex  font-bold text-lg cursor-pointer hover:text-blue-800 md:mx-4"
                }
              />
            </ul>
          </div>

          {/* Mobile nav */}
          <ul className={` ${openMenu ? "block" : "hidden"} px-4 md:hidden `}>
            <li className="pt-2 pb-4 mt-2 font-bold text-lg border-b-[1px] hover:text-blue-800">
              <Link to="/">Trang chủ</Link>
            </li>
            <NavLink
              className={
                "flex py-4 font-bold text-lg border-b-[1px] hover:text-blue-800"
              }
            />

            <Link to="/login">
              <Button
                className={
                  "flex items-center justify-center text-md font-bold rounded-xl w-full my-4"
                }
              >
                Bắt đầu học
                <div className="mt-1 ml-2">
                  <FiArrowRight />
                </div>
              </Button>
            </Link>
          </ul>

          <div className="hidden md:block px-4">
            <Link to="/login">
              <Button
                className={
                  "flex items-center justify-center text-md font-bold rounded-xl my-4"
                }
              >
                Bắt đầu học
                <div className="mt-1 ml-2">
                  <FiArrowRight />
                </div>
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
