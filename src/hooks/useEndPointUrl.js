import { useSearchParams } from "react-router-dom";

export const useEndPointUrl = () => {
  const [url] = useSearchParams();
  // console.log(url);
  const lat = Number(url.get("lat"));
  const lng = Number(url.get("lng"));

  return { lat, lng };
};
