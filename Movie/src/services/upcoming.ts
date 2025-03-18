import { privateAxios } from "../config/axios";
import Category from "../types/categories";

export const api_key = import.meta.env.VITE_TMDB_API_KEY;

const getUpcomingRequest = async () => {
  return privateAxios.get<{ categories: Category[] }>(
    `/movie/upcoming?api_key=${api_key}`
  );
};

export default getUpcomingRequest;
