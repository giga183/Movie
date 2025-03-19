import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import getMovies from "../services/movies"

const Movies = () => {
  const params = useParams()

  const movieName = params.category

  useQuery({
    queryKey: ["results", movieName],
    queryFn: () => getMovies(movieName || ""),
  })

  return (
    <div>
      <h1>explore {movieName}</h1>
    </div>
  )
}

export default Movies
