// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useEndPointUrl } from "../hooks/useEndPointUrl";
import axios from "axios";
import { ClimbingBoxLoader } from "react-spinners";
import { useCities } from "../contexts/CitiesContext";
axios;
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function convertToEmoji(countryCode) {
  if (!countryCode) return ""; // Jika tidak ada countryCode, return string kosong

  return countryCode
    .toUpperCase() // Pastikan kode negara dalam huruf besar
    .split("") // Pisahkan setiap karakter
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt())) // Konversi ke Unicode bendera
    .join(""); // Gabungkan kembali menjadi satu string
}

function Form() {
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [emoji, setEmoji] = useState("");

  const { isLoading: isLoadingWhenAdding, onAddCity } = useCities();
  // console.log(date);

  //getting the url that user click
  const { lat, lng } = useEndPointUrl();

  const navigate = useNavigate();

  //get city details after costom hook is called(useEndPointUrl)
  useEffect(() => {
    const fetchCity = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await axios.get(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
        );
        // console.log(response.data);
        if (!response.data.city)
          throw new Error("Please try another city...‼️");
        setCityName(response.data.city || response.data.locality || "");
        setCountry(response.data.countryName);
        setEmoji(convertToEmoji(response.data.countryCode));
        // console.log(response.data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCity();
  }, [lat, lng]);

  //can use async function as onAddCity is async function
  const handleSubmit = async (event) => {
    event.preventDefault();

    const newCityObject = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat, lng },
    };
    await onAddCity(newCityObject);
    navigate("/app/cities");
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-[100%]">
        <ClimbingBoxLoader color="white" size={10} />
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center items-center h-[100%]">
        <p>{isError}</p>
      </div>
    );

  return (
    <div className="w-[90%] p-4 mx-auto outline outline-1 outline-stone-500 rounded-md">
      <form
        onSubmit={handleSubmit}
        className={`${isLoadingWhenAdding ? "opacity-75" : ""}`}
      >
        <div>
          <label htmlFor="cityName">City name</label>
          <br />
          <div className="relative flex items-center">
            <span className="absolute left-2">{emoji}</span>
            <input
              id="cityName"
              className="pl-8 p-1 rounded-md w-full text-slate-500" // Beri padding kiri agar tidak bertabrakan
              onChange={(e) => setCityName(e.target.value)}
              value={cityName}
            />
          </div>
        </div>

        <div className="mt-5">
          <label htmlFor="date">When did you go to {cityName}?</label>
          <br />
          {/* <input
            id="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            className="p-1 rounded-md w-full text-slate-500"
          /> */}

          <DatePicker
            id="date"
            className="p-1 rounded-md w-full text-slate-500"
            wrapperClassName="w-full"
            popperClassName="!z-[9999]"
            onChange={(date) => setDate(date)}
            selected={date}
          />
        </div>

        <div className="mt-5">
          <label htmlFor="notes">Notes about your trip to {cityName}</label>
          <br />
          <textarea
            id="notes"
            onChange={(e) => setNotes(e.target.value)}
            value={notes}
            className="p-1 rounded-md w-full text-slate-500"
          />
        </div>

        <div className="flex justify-between mt-4">
          <Button type="primary">Add</Button>
          <Button
            type="secondary"
            onClick={(e) => {
              e.preventDefault();
              // navigate(-1);
              navigate("/app/cities");
            }}
          >
            &larr; Back
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
