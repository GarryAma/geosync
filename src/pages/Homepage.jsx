import PageNav from "../components/PageNav";
import bg from "../assets/bg.jpg";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div
      className="m-1 h-[100vh] bg-cover bg-center flex flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(36, 42, 46, 0.6), rgba(36, 42, 46, 0.6)), url(${bg})`,
      }}
    >
      <PageNav />
      <div className="text-white h-full w-[95%] m-auto">
        <div className="h-full flex flex-col justify-center items-center">
          <h1 className="p-4 text-xl sm:text-4xl text-center">
            You embark on global adventures.
            <br />
            Geosync maps out your travel experiences.
          </h1>
          <h2 className="text-xs sm:text-lg text-center p-4 text-slate-300">
            A global map that traces your path to every city imaginable. Cherish
            your amazing memories, and share your travels with friends as you
            journey across the planet.
          </h2>

          <Link
            to={"/login"}
            className="inline-block m-4 text-xs outline outline-1 outline-white hover:outline-yellow-300 rounded-md py-1 px-2 transition-all duration-300"
          >
            Lets track now 📍
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

// className="text-xl md:text-lg w-[90%] m-auto bg-red-500 text-center"
