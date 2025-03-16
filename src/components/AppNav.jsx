import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <div>
      <ul className="flex">
        <li className="outline outline-1 outline-stone-500 rounded-tl-lg rounded-bl-lg overflow-hidden">
          <NavLink
            to={"cities"}
            className={({ isActive }) =>
              isActive
                ? "bg-yellow-300 block py-1 px-5 text-slate-800"
                : "block py-1 px-5"
            }
          >
            cities
          </NavLink>
        </li>

        <li className="outline outline-1 outline-stone-500 overflow-hidden rounded-tr-lg rounded-br-lg">
          <NavLink
            to={"countries"}
            className={({ isActive }) =>
              isActive
                ? "bg-yellow-300 block py-1 px-5 text-slate-800"
                : "block py-1 px-5"
            }
          >
            countries
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AppNav;
