import { useQuery } from "@tanstack/react-query"
import getUpcomingRequest from "../services/upcoming"

export const useGetUpcoming = () => {
  const { data } = useQuery({
    queryKey: ["results"],
    queryFn: getUpcomingRequest,
  })

  return {
    upcomingData: data?.data?.results || [],
  }
}
