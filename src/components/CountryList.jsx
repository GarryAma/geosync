import { ClimbingBoxLoader } from "react-spinners";
import { useCities } from "../contexts/CitiesContext";

const CountryList = () => {
  const {cities, isLoading} = useCities()
  const result = cities.reduce((previous, current) => {
    // Check if the country already exists in the previous array
    if (!previous.some((eachCity) => eachCity.country === current.country)) {
      // If it doesn't exist, add the current country and emoji to the previous array
      return [...previous, { country: current.country, emoji: current.emoji }];
    }
    // If it exists, return the previous array as is
    return previous;
  }, []);

  if(isLoading) return <div className="flex justify-center h-full items-center">
  <div>
    <ClimbingBoxLoader color="white" size={10} />
  </div>
</div>

  // const result = _cities.reduce((previous, current) => {
  //   if (previous.map((eachObj) => eachObj.country).includes(current.country)) {
  //     return previous;
  //   } else {
  //     return [...previous, current];
  //   }
  // }, []);
  return (
    <div className="w-[90%] mx-auto flex flex-wrap justify-between">
      {result.map((eachObj) => {
        return (
          <div
            key={eachObj.emoji}
            className="p-4 outline outline-stone-500 outline-1 w-[45%] m-1 rounded-lg text-center border-l-4 border-yellow-300"
          >
            <span className="mr-1">{eachObj.emoji} </span>
            <span>{eachObj.country}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CountryList;
