import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import SubnavLink from "./SubnavLink";
import { db as data } from "../db";

const NavLink = ({ className }) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleClickItem = (itemId) => {
    console.log(itemId);
    if (activeItem === itemId) {
      setActiveItem(null);
    } else {
      setActiveItem(itemId);
    }
  };
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="relative group">
          {item.subTitles ? (
            <li
              className={`flex flex-col md:flex-row items-start md:items-center justify-center ${className}`}
            >
              <div
                className="flex justify-between w-full items-center"
                onClick={() => handleClickItem(item.id)}
              >
                <h1>{item.title}</h1>
                <AiFillCaretDown className="mt-[5px] ml-[2px] text-sm" />
              </div>
              <SubnavLink
                className={` ${
                  activeItem === item.id ? "block" : "hidden"
                } md:block md:subnav-link `}
                subTitles={item.subTitles}
                subLink={item.link}
              />
            </li>
          ) : (
            <li
              className={`flex flex-col md:flex-row items-start md:items-center justify-center ${className}`}
            >
              <Link to="/kiem-tra-dau-vao">
                <h1>{item.title}</h1>
              </Link>
            </li>
          )}
        </div>
      ))}
    </>
  );
};

export default NavLink;
