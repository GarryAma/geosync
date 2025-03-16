import PageNav from "../components/PageNav";
import bg from "../assets/adventure.webp";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    // <div
    //   className="m-1 h-[100vh] bg-cover bg-center flex flex-col"
    //   style={{
    //     backgroundImage: `linear-gradient(rgba(36, 42, 46, 0.8), rgba(36, 42, 46, 0.8)), url(${bg})`,
    //   }}
    // >
    <div className="bg-slate-950 m-1 h-[100vh]">
      <PageNav />
      <div className="max-w-4xl w-[95%] mt-14 mx-auto p-2 flex flex-col sm:flex-row sm:space-x-2">
        <img
          src={bg}
          alt=""
          className="w-full sm:w-[400px] sm:h-auto rounded-lg"
        />
        <div className="text-white mt-6 sm:m-0">
          <h1 className="text-sm sm:text-xl">About Geosync -</h1>
          <div className="space-y-4 mt-3">
            <p className="text-xs sm:text-sm">
              Geosync is your ultimate travel companion, mapping your adventures
              across the globe. It captures your journeys, tracing every city
              you visit while creating a stunning visual travel diary. Relive
              your favorite moments, explore new destinations, and share your
              incredible experiences with friends.
            </p>
            <p className="text-xs sm:text-sm">
              With Geosync, the world becomes your playground — one
              unforgettable memory at a time.
              <br />
            </p>
            <Link
              to={"/"}
              className="inline-block text-xs hover:text-yellow-300 hover:border-green-400 transition-all duration-300 border py-1 px-2 rounded-md"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
