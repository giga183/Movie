import { privateAxios } from "../config/axios"
import Category from "../types/categories"
import { api_key } from "./upcoming"

const getTopRated = async () => {
  return privateAxios.get<{ categories: Category[] }>(
    `/movie/top_rated?api_key=${api_key}`
  )
}

export default getTopRated
