import { Link } from "react-router-dom";

const SubnavLink = ({ className, subTitles, subLink }) => {
  return (
    <>
      <ul className={`w-screen md:w-full ${className}`}>
        {subTitles.map((title, index) => (
          <Link key={index} to={subLink[index]}>
            <li className="text-black m-2 p-2 hover:bg-blue-300/20 rounded-md ">
              {title}
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default SubnavLink;
