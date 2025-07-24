import axios from "axios";
import type { Photo } from "../types/photo";

const myAPI_KEY = import.meta.env.VITE_API_KEY;
axios.defaults.baseURL = "https://api.pexels.com/v1/";
axios.defaults.headers.common["Authorization"] = myAPI_KEY;
axios.defaults.params = {
  orientation: "landscape",
};

interface PhotoHttpResponse {
  photos: Photo[];
  // total_results: number;
  // next_page: string;
}

interface FetchPhotoParams {
  query: string;
  page?: number;
  per_page?: number;
  // orientation?: "landscape" | "portrait" | "square";
  // size?: "large" | "medium" | "small" | "tiny";
}

export const getPhotos = async (params: FetchPhotoParams): Promise<Photo[]> => {
  const response = await axios.get<PhotoHttpResponse>(`search`, { params });

  return response.data.photos;
};

//searh for photos
// curl -H "Authorization: YOUR_API_KEY" \
//   "https://api.pexels.com/v1/search?query=nature&per_page=1"

// Pagination Request Parameters
// GET https://api.pexels.com/v1/curated?page=2&per_page=40

// Pagination Response Attributes
// {
//   "page": 2,
//   "per_page": 40,
//   "total_results": 8000,
//   "next_page": "https://api.pexels.com/v1/curated?page=3&per_page=40",
//   "prev_page": "https://api.pexels.com/v1/curated?page=1&per_page=40"
// }

// Get a Photo
// GET https://api.pexels.com/v1/photos/:id
