import { Link } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";
import { useCities } from "../contexts/CitiesContext";

export const formatDate = (timestamp) => {
  const date = new Date(timestamp);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = new Intl.DateTimeFormat("en", options).format(date);
  return formattedDate;
};

const CityList = () => {
  const { cities, isLoading, currentCity, onDeleteCity } = useCities();

  // console.log(currentCity);
  // console.log(cities);
  if (isLoading)
    return (
      <div className="flex justify-center h-full items-center">
        <div>
          <ClimbingBoxLoader color="white" size={10} />
        </div>
      </div>
    );

  if (!cities.length) return <p>please add city by clicking on the map!</p>;

  return (
    <>
      <ul className="w-[90%] mx-auto space-y-2">
        {cities.map((city) => (
          <Link
            key={city.id}
            className="block"
            to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
          >
            <li
              className={`flex justify-between p-3 rounded-md outline  outline-1 border-l-4 border-yellow-300 hover:outline-blue-400 duration-300 ${
                currentCity.id === city.id
                  ? "outline-green-600"
                  : "outline-stone-500"
              }`}
            >
              <div className="space-x-2">
                <span>{city.emoji}</span>
                <span>{city.cityName}</span>
              </div>

              <div className="space-x-2 flex">
                <span>( {formatDate(city.date)} )</span>
                <button
                  className="w-[15px] h-[15px] rounded-full outline outline-1 outline-stone-400 flex items-center justify-center hover:bg-red-500 duration-300"
                  onClick={async (event) => {
                    event.preventDefault();
                    console.log(city.cityName);
                    console.log(city.id);
                    onDeleteCity(city.id);
                  }}
                >
                  <span className="leading-none">&times;</span>
                </button>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default CityList;
