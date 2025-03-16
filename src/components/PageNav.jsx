import { Link, NavLink } from "react-router-dom";
import world from "../assets/earth.png";

const PageNav = () => {
  const ActiveNavLink = ({ isActive }) => {
    return isActive
      ? "bg-yellow-200 py-1.5 px-2.5 rounded-md text-slate-900"
      : "py-2 px-3";
  };
  return (
    <nav className="text-white bg-transparent p-5 flex justify-evenly sm:justify-between">
      <Link to={"/"} className="space-x-2 flex items-center">
        <img
          src={world}
          alt=""
          className="sm:w-[45px] sm:h-[45px] w-[35px] h-[35px] inline animate-rotate-infinite"
        />
        <span className="sm:tracking-widest text-xs sm:text-lg md:text-xl sm:inline hidden text-yellow-100">
          geosync
        </span>
      </Link>

      <ul className="flex space-x-3 sm:space-x-6 text-xs items-center">
        <li>
          <NavLink to={"/pricing"} className={ActiveNavLink}>
            PRICING
          </NavLink>
        </li>
        {/* <li>
          <NavLink to={"/"} className={(test) => console.log(test.isActive)}>
            Test
          </NavLink>
        </li> */}
        <li>
          <NavLink to={"/about"} className={ActiveNavLink}>
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink to={"/login"} className={ActiveNavLink}>
            LOGIN
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
