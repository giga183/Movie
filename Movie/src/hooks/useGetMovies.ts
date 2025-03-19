import { useQuery } from "@tanstack/react-query"
import getMovies from "../services/movies"

export const useGetMovies = () => {
  const { data } = useQuery({
    queryKey: ["results"],
    queryFn: getMovies,
  })
  return {
    moviesData: data?.data?.results || [],
  }
}
