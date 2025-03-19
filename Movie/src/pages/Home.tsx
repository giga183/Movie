import MoviesCard from "../components/MoviesCard"
import { useGetMovies } from "../hooks/useGetMovies"

const Home = () => {
  const { moviesData } = useGetMovies()

  return (
    <div className='mb-4'>
      <h1 className='text-4xl text-green-900 mb-10 text-center mt-10'>
        Movies
      </h1>

      <ul className='grid grid-flow-row gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-auto-fit place-items-center'>
        {moviesData.map((category) => {
          return <MoviesCard category={category} key={category.id} />
        })}
      </ul>
    </div>
  )
}

export default Home
