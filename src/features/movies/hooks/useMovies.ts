import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import type { Movie } from "@/types/Movie";

const fetchMovies = async ({
  type = "now_playing",
  page = 1,
}: {
  type?: string;
  page?: number;
}): Promise<Movie[]> => {
  const { data } = await api.get(`/movie/${type}`, {
    params: { language: "pt-BR", page },
  });
  return data.results;
};

export const useMovies = (type?: string, page?: number) => {
  return useQuery({
    queryKey: ["movies", type, page], // page entra na queryKey para atualizar corretamente
    queryFn: () => fetchMovies({ type, page }),
    // staleTime: 1000 * 60 * 2,
  });
};
