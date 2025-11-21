import axios from "axios";
import type { Photo } from "../types/photo";

const MY_KEY = import.meta.env.VITE_API_KEY;
axios.defaults.baseURL = "https://api.pexels.com/v1/";
axios.defaults.headers.common["Authorization"] = MY_KEY;
axios.defaults.params = {
  orientation: "landscape",
};

interface ResponseAPI {
  photos: Photo[];
}

export const getPhotos = async (query: string) => {
  const response = await axios.get<ResponseAPI>(`search?query=${query}`);

  return response.data.photos;
};
