import { Link } from "react-router-dom"
import Category from "../types/categories"
import { MdOutlineStarBorder } from "react-icons/md"

type Props = {
  category: Category
}

const MoviesCard: React.FC<Props> = ({ category }) => {
  return (
    <div className='max-w-sm flex bg-white border border-gray-200 rounded-2xl shadow-sm dark:bg-gray-900 dark:border-gray-700'>
      <a href='#'>
        <img
          className='rounded-l-2xl w-45 h-full '
          src={`https://image.tmdb.org/t/p/original${category.poster_path}`}
          alt={category.name}
        />
      </a>
      <div className='p-5 h-60 w-70 flex flex-wrap justify-center'>
        <a href='#'>
          <h5 className='mb-2 text-2xl text-center line-clamp-3 font-bold tracking-tight text-gray-900 dark:text-white'>
            {category.original_title}
          </h5>
        </a>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-1'>
          {category.overview}
        </p>
        <div className='flex place-items-center gap-5 mt-auto'>
          <Link
            to={`${category.id}`}
            className='inline-flex items-center h-5 w-15 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            More
          </Link>
          <h1 className='text-amber-300 flex  m-auto pt-2.5'>
            {category.vote_average} <MdOutlineStarBorder className='w-5 h-5' />
          </h1>
        </div>
      </div>
    </div>
  )
}

export default MoviesCard
