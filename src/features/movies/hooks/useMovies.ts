import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import type { Movie } from "@/types/Movie";

const fetchMovies = async ({
  type,
  page,
  query = "",
}: {
  type: string;
  page: number;
  query?: string;
}): Promise<Movie[]> => {
  if (query) {
    const { data } = await api.get("/search/movie", {
      params: { language: "pt-BR", query, page },
    });
    return data.results;
  }

  const { data } = await api.get(`/movie/${type}`, {
    params: { language: "pt-BR", page },
  });
  return data.results;
};

export const useMovies = (type: string, page: number, query?: string) => {
  return useQuery({
    queryKey: ["movies", type, page, query],
    queryFn: () => fetchMovies({ type, page, query }),
  });
};
