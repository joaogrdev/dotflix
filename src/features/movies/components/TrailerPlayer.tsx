import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTrailer } from "../hooks/useTrailer";
import type { Movie } from "@/types/Movie";
import Loader from "@/components/Loader";

const TrailerPlayer = ({
  onClose,
  movie,
}: {
  onClose: () => void;
  movie: Movie;
}) => {
  const { data: trailer, isLoading, isError, error } = useTrailer(movie.id);
  if (isError) console.log(error);

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="w-1/2 min-w-[280px] bg-muted/75 backdrop-blur-lg rounded-lg overflow-hidden p-0">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="text-lg text-primary">
            🎞 {movie.title}
          </DialogTitle>
        </DialogHeader>
        <div className="relative aspect-video w-full">
          {isLoading && <Loader className="w-full h-full" />}
          {isError && <p>Erro ao carregar trailer</p>}
          {!isLoading && trailer && (
            <iframe
              loading="lazy"
              src={`https://www.youtube.com/embed/${trailer?.key}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="absolute inset-0 w-full h-full rounded-none"
              allowFullScreen
              title="Trailer"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TrailerPlayer;
