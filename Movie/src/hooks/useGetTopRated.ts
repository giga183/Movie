import { useQuery } from "@tanstack/react-query"
import getTopRated from "../services/toprated"

export const useGetTopRated = () => {
  const { data } = useQuery({
    queryKey: ["results"],
    queryFn: getTopRated,
  })
  return {
    topRatedData: data?.data?.results || [],
  }
}
