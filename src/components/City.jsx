// import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import { ClimbingBoxLoader } from "react-spinners";
import { formatDate } from "./CityList";
import Button from "./Button";

const City = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { onSelectCity, currentCity, isLoading } = useCities();

  const { cityName, date, emoji, notes } = currentCity;

  useEffect(() => {
    onSelectCity(id);
  }, [id]);
  // const result = useSearchParams();
  // console.log(result)
  // const [queryParams] = result;
  // console.log(queryParams);

  //   const fetchingData = async() => {
  //     const response =  axios.get(``)
  //   }

  if (isLoading)
    return (
      <div className="flex justify-center h-full items-center">
        <div>
          <ClimbingBoxLoader color="white" size={10} />
        </div>
      </div>
    );

  return (
    <div className="w-[90%] mx-auto space-y-6 p-4 text-xs  outline outline-stone-500 outline-1 rounded-md">
      <div className="space-y-1">
        <p className="opacity-70">City name:</p>
        <p>{`${emoji} ${cityName}`}</p>
      </div>

      <div className="space-y-1">
        <p className="opacity-70">You visited {cityName} on:</p>
        <p>{date && formatDate(date)}</p>
      </div>

      <div className="space-y-1">
        <p className="opacity-70">Notes:</p>
        <p>{notes}</p>
      </div>

      <div className="space-y-1">
        <p className="opacity-70">LEARN MORE:</p>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
          className="hover:underline hover:text-orange-300 transition-all duration-400"
        >
          find out more about {cityName} 👉
        </a>
      </div>

      <div>
        <Button
          type="secondary"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          &larr; Back
        </Button>
      </div>
      {/* <p>{position?.lat ? "sudah tidak undefined" : "masih undefined"}</p> */}
      {/* <p>{position.lng}</p> */}
      {/* <h2>city lat: {queryParams.get("lat")}</h2>
      <h2>city lng: {queryParams.get("lng")}</h2> */}
    </div>
  );
};

export default City;
