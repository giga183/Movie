import TopRatedCard from "../components/TopRatedCard"
import { useGetTopRated } from "../hooks/useGetTopRated"

const TopRatedMovies = () => {
  const { topRatedData } = useGetTopRated()

  return (
    <div className='mb-4'>
      <h1 className='text-4xl text-emerald-950 mb-10 text-center mt-10'>
        Top Rated Movies
      </h1>

      <ul className='grid grid-flow-row gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-auto-fit place-items-center'>
        {topRatedData.map((category) => {
          return <TopRatedCard category={category} key={category.id} />
        })}
      </ul>
    </div>
  )
}

export default TopRatedMovies
