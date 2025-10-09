import type { Movie } from "@/types/Movie";
import MovieCard from "./MovieCard";
import { useMovies } from "../hooks/useMovies";
import Loader from "@/components/Loader";
import { useSearchStore } from "@/features/search/store/useSearchStore";
import FeedbackMsg from "@/components/FeedbackMsg";
import { useState, useEffect, useRef } from "react";
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

  const [page, setPage] = useState(1);
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const loaderRef = useRef<HTMLDivElement>(null);

  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const {
    data: movies,
    isLoading,
    isError,
  } = useMovies(filterSelected.query, page, query);

  useEffect(() => {
    if (movies) {
      setAllMovies((prev) => (page === 1 ? movies : [...prev, ...movies]));
      setIsFirstLoad(false);
    }
  }, [movies, page]);

  useEffect(() => {
    setPage(1);
    setIsFirstLoad(true);
  }, [filterSelected, query]);

  const handleSelectFilter = (filter: Filter) => {
    setQuery("");
    setFilterSelected(filter);
  };

  useEffect(() => {
    if (!loaderRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (
          entries[0].isIntersecting &&
          !isLoading &&
          movies &&
          movies.length > 0
        ) {
          setPage((prev) => prev + 1);
        }
      },
      { rootMargin: "1000px" }
    );

    observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [loaderRef, isFirstLoad]);

  return (
    <div>
      {isError && <FeedbackMsg msg="Erro ao carregar filmes." type="error" />}
      <section className="w-full h-full px-5 mobile:px-10 tablet:px-20 laptop:px-30 desktop:px-40 pb-30">
        <MovieFilters
          handleSelectFilter={handleSelectFilter}
          filterSelected={filterSelected}
        />

        <div className="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-4 gap-5 tablet:gap-10">
          {allMovies.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <div ref={loaderRef}>
          {isLoading && <Loader className="py-5 w-full text-xl" />}
        </div>

        {!isLoading && !isFirstLoad && allMovies.length === 0 && (
          <FeedbackMsg
            msg="Nenhum filme encontrado."
            type="error"
            className="col-span-full py-3 w-full h-full text-xl"
          />
        )}
      </section>
    </div>
  );
};

export default MovieList;
