import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import type { Video } from "@/types/Video";

const fetchTrailer = async (id: number): Promise<Video | undefined> => {
  const { data } = await api.get(`/movie/${id}/videos`, {
    params: { language: "pt-BR" },
  });
  return data.results.find((video: Video) => video.type === "Trailer");
};

export const useTrailer = (id: number) => {
  return useQuery<Video | undefined>({
    queryKey: ["trailer", id],
    queryFn: () => fetchTrailer(id),
    staleTime: 1000 * 60 * 60,
  });
};
