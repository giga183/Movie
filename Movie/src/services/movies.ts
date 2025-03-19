import { privateAxios } from "../config/axios"
import Category from "../types/categories"
import { api_key } from "./upcoming"

const getMovies = async () => {
  return privateAxios.get<{ categories: Category[] }>(
    `/discover/movie?api_key=${api_key}`
  )
}

export default getMovies
