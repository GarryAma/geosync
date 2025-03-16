// import { useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import { useEffect, useState } from "react";
import { useGeolocation } from "../hooks/useGeolocation";
import { useEndPointUrl } from "../hooks/useEndPointUrl";
// import { useState } from "react";
// import "./mapStyle.css";

const Map = () => {
  const [mapPosition, setMapPosition] = useState([-33.8688, 151.2093]);
  const { cities } = useCities();

  //get current position
  const { position: currentPosition, getPosition } = useGeolocation();

  const { lat, lng } = useEndPointUrl();

  //useEffect synchronizes the changes of lat and lng
  useEffect(() => {
    // console.log("runs");
    if (lat && lng) {
      setMapPosition([lat, lng]);
    }
  }, [lat, lng]);

  useEffect(() => {
    if (currentPosition)
      setMapPosition([currentPosition.lat, currentPosition.lng]);
  }, [currentPosition]);

  // const handleClick = (val1, val2) => {
  //   setSearchParams({ lat: val1, lng: val2 });
  // };

  return (
    <div
      id="map"
      className="relative flex-1 text-white text-xs bg-yellow-500 w-full h-full"
      // onClick={() => navigate("form")}
    >
      <MapContainer
        center={mapPosition}
        // center={[lat, lng]}
        zoom={6}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => {
          return (
            <Marker
              key={city.id}
              position={[city.position.lat, city.position.lng]}
            >
              <Popup style={{ backgroundColor: "red" }}>
                <span>{city.emoji}</span>
                <span>{city.cityName}</span>
              </Popup>
            </Marker>
          );
        })}
        <ChangeMapController position={mapPosition} />
        <DetectClickOnTheMap />
      </MapContainer>
      {/* <h1>Map</h1>
        <h2>lat is {lat}</h2>
        <h2>lng is {lng}</h2>

        <button
          className="p-2 outline outline-1 bg-orange-400 outline-white m-2 text-black hover:outline-blue-300"
          onClick={(event) => {
            event.stopPropagation();
            handleClick(2, 3);
          }}
        >
          change lat and lng
        </button> */}

      {!currentPosition && (
        <button
          onClick={getPosition}
          className="absolute z-[999] p-2 bg-slate-800 top-[80%] right-1/2 transform translate-x-1/2 rounded-md hover:bg-green-700 duration-300"
        >
          Detect your position 📍
        </button>
      )}
    </div>
  );
};

//to move to the place that city is clicked
const ChangeMapController = ({ position }) => {
  const map = useMap();
  map.flyTo(position, 10, {
    duration: 2, // Durasi animasi dalam detik
    easeLinearity: 0.25, // Kehalusan animasi
  });
  return null;
};

//click on the map to give you the coordinate
const DetectClickOnTheMap = () => {
  const navigate = useNavigate();

  useMapEvents({
    click: (event) => {
      // console.log(event);
      navigate(`form?lat=${event.latlng.lat}&lng=${event.latlng.lng}`);
    },
  });
  return null;
};
export default Map;
