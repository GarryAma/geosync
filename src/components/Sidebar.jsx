import { Link, Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import world from "../assets/earth.png";

const Sidebar = () => {
  return (
    <div className="flex-1 text-white text-xs p-2 w-[95%] my-1 mx-auto flex flex-col items-center space-y-4">
      <Link to={"/"} className="space-x-2 flex items-center">
        <img
          src={world}
          alt=""
          className="sm:w-[45px] sm:h-[45px] w-[35px] h-[35px] inline animate-rotate-infinite"
        />
        <span className="sm:tracking-widest text-xs sm:text-lg md:text-xl sm:inline text-yellow-100">
          geosync
        </span>
      </Link>

      <AppNav />

      <div className="flex-grow w-full">
        <Outlet />
      </div>

      <footer className="hidden md:block p-4">
        <p>&copy; Copyright {new Date().getFullYear()} by Garry ⚡️</p>
      </footer>
    </div>
  );
};

export default Sidebar;
