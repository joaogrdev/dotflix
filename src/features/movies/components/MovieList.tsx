import type { Movie } from "@/types/Movie";
import MovieCard from "./MovieCard";
import { useMovies } from "../hooks/useMovies";
import Loader from "@/components/Loader";

const MovieList = () => {
  const { data: movies, isLoading, isError, error } = useMovies();
  if (isError) console.log(error);

  return (
    <div className="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4 gap-5 tablet:gap-10 w-full h-full px-5 tablet:px-10 laptop:px-40">
      {isLoading && (
        <Loader className="col-span-full py-5 w-full h-full text-xl" />
      )}
      {isError && <p>Erro ao carregar filmes</p>}
      {!isLoading &&
        movies &&
        movies.map((movie: Movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
};

export default MovieList;
