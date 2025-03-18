import { useGetUpcoming } from "../hooks/useGetUpcoming";
import Cards from "../components/Cards";

const Home = () => {
  const { upcomingData } = useGetUpcoming();

  return (
    <div className="mb-4">
      <h1 className="text-4xl text-emerald-950 mb-10 text-center mt-10">
        Upcoming Movies
      </h1>

      <ul className="grid grid-flow-row gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-auto-fit place-items-center">
        {upcomingData.map((category) => {
          return <Cards category={category} key={category.id} />;
        })}
      </ul>
    </div>
  );
};

export default Home;
