import PageNav from "../components/PageNav";
import bg from "../assets/explore.jpg";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="bg-slate-950 m-1 h-[100vh]">
      <PageNav />
      <div className="max-w-4xl w-[95%] mt-14 mx-auto p-2 flex flex-col sm:flex-row-reverse sm:space-x-2 sm:space-x-reverse">
        <img
          src={bg}
          alt=""
          className="w-full sm:w-[400px] sm:h-auto rounded-lg"
        />
        <div className="text-white mt-6 sm:m-0">
          <h1 className="text-sm sm:text-xl">
            Affordable Plans to Explore the World with Geosync -
          </h1>
          <div className="space-y-4 mt-3">
            <p className="text-xs sm:text-sm">
              Discover flexible and budget-friendly pricing plans with Geosync.
              Whether you are an occasional traveler or a global explorer, our
              plans are designed to fit your needs. Start mapping your
              adventures, reliving memories, and sharing your journeys with
              ease.
            </p>
            <p className="text-xs sm:text-sm">
              Choose the perfect plan today and unlock a world of possibilities
              with Geosync!
            </p>
            <br />
            <Link
              to={"/"}
              className="inline-block text-xs hover:text-yellow-300 hover:border-blue-400 transition-all duration-300 border py-1 px-2 rounded-md"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
