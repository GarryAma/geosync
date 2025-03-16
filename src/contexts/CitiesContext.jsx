import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
const URL = `https://location-api-1bpd.onrender.com`;

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "LOADING":
      return { ...state, isLoading: true };

    case "REJECTED":
      return { ...state, isLoading: false, error: payload };

    case "CITIES_LOADED":
      return { ...state, isLoading: false, cities: payload };

    case "CITY_SELECT":
      return {
        ...state,
        isLoading: false,
        currentCity: payload,
        // currentCity: { ...state.currentCity, payload },
      };

    default:
      return new Error("It isnt one of the case!!");
  }
};

export const CitiesProvider = ({ children }) => {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const fetchCities = async () => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(`${URL}/cities`);
      // console.log(response);
      dispatch({ type: "CITIES_LOADED", payload: response.data });
    } catch {
      dispatch({
        type: "ERROR",
        payload: "There is a problem when loading the cities",
      });
    }
  };
  useEffect(() => {
    fetchCities();
  }, []);

  const handleSelectCity = async (id) => {
    dispatch({ type: "LOADING" });

    try {
      const response = await axios.get(`${URL}/cities/${id}`);
      console.log(response.data);
      dispatch({ type: "CITY_SELECT", payload: response.data });
    } catch {
      dispatch({
        type: "ERROR",
        payload: "There is a problem when loading the single city",
      });
    }
  };

  const handleAddCity = async (dataObject) => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.post(`${URL}/cities`, dataObject);
      console.log(response);
      await fetchCities();
      // setCities((cities) => [...cities, response.data]);
    } catch {
      dispatch({
        type: "ERROR",
        payload: "There is a problem when adding a city🚫",
      });
    }
  };

  const handleDeleteCity = async (id) => {
    dispatch({ type: "LOADING" });

    try {
      const response = await axios.delete(`${URL}/cities/${id}`);
      console.log(response);
      await fetchCities();
      // setCities((prevCities) => prevCities.filter((city) => city.id !== id));
    } catch {
      dispatch({
        type: "ERROR",
        payload: "There is a problem when adding a city🚫",
      });
    }
  };

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        onSelectCity: handleSelectCity,
        onAddCity: handleAddCity,
        onDeleteCity: handleDeleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
};

export const useCities = () => {
  const context = useContext(CitiesContext);
  // console.log(context);
  return context;
};

// import axios from "axios";
// import { createContext, useContext, useEffect, useState } from "react";
// const URL = `https://location-api-1bpd.onrender.com`;

// const CitiesContext = createContext();

// export const CitiesProvider = ({ children }) => {
//   const [cities, setCities] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   //currentCity in the context(global) to implement
//   const [currentCity, setCurrentCity] = useState({});

//   const fetchCities = async () => {
//     try {
//       // setIsLoading(true);
//       const response = await axios.get(`${URL}/cities`);
//       setCities(response.data);
//       // dispatch({ type: "CITIES_LOADED", payload: response.data });
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchCities();
//   }, []);

//   const handleSelectCity = async (id) => {
//     try {
//       setIsLoading(true);
//       const response = await axios.get(`${URL}/cities/${id}`);
//       setCurrentCity(response.data);
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleAddCity = async (dataObject) => {
//     try {
//       setIsLoading(true);
//       const response = await axios.post(`${URL}/cities`, dataObject);
//       await fetchCities();
//       // setCities((cities) => [...cities, response.data]);
//       console.log(response);
//     } catch (error) {
//       console.log(error.message);
//       alert("There is a problem adding a city🚫");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDeleteCity = async (id) => {
//     try {
//       setIsLoading(true);
//       const response = await axios.delete(`${URL}/cities/${id}`);
//       console.log(response);
//       await fetchCities();
//       // setCities((prevCities) => prevCities.filter((city) => city.id !== id));
//     } catch (error) {
//       console.log(error.message);
//       alert("There is problem deleting city🚫");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <CitiesContext.Provider
//       value={{
//         cities,
//         isLoading,
//         currentCity,
//         onSelectCity: handleSelectCity,
//         onAddCity: handleAddCity,
//         onDeleteCity: handleDeleteCity,
//       }}
//     >
//       {children}
//     </CitiesContext.Provider>
//   );
// };

// export const useCities = () => {
//   const context = useContext(CitiesContext);
//   return context;
// };
