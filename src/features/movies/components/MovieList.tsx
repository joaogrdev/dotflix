import type { Movie } from "@/types/Movie";
import MovieCard from "./MovieCard";
import { useMovies } from "../hooks/useMovies";
import Loader from "@/components/Loader";
import { useSearchStore } from "@/features/search/store/useSearchStore";
import FeedbackMsg from "@/components/FeedbackMsg";
import { useState } from "react";
import MovieFilters from "./MovieFilters";

interface Filter {
  query: string;
  label: string;
}

const MovieList = () => {
  const { query, setQuery } = useSearchStore();
  const [filterSelected, setFilterSelected] = useState<Filter>({
    query: "popular",
    label: "Mais Populares",
  });

  const {
    data: movies,
    isLoading,
    isError,
    error,
  } = useMovies(filterSelected.query, 1, query);
  if (isError) console.log(error);

  const handleSelectFilter = (filter: Filter) => {
    setQuery("");
    setFilterSelected(filter);
  };

  return (
    <div>
      {isLoading && (
        <Loader className="col-span-full py-3 w-full h-full text-xl" />
      )}
      {isError ||
        (!isLoading && movies?.length === 0 && (
          <FeedbackMsg
            msg="Nenhum filme encontrado."
            type="error"
            className="col-span-full py-3 w-full h-full text-xl"
          />
        ))}
      {!isLoading && movies && movies?.length > 0 ? (
        <section className="w-full h-full px-5 tablet:px-10 laptop:px-40">
          <MovieFilters
            handleSelectFilter={handleSelectFilter}
            filterSelected={filterSelected}
          />

          <div className="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4 gap-5 tablet:gap-10">
            {movies.map((movie: Movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default MovieList;
