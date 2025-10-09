import {
  Dialog,
  DialogContent
} from "@/components/ui/dialog";
import { useTrailer } from "../hooks/useTrailer";
import type { Movie } from "@/types/Movie";
import Loader from "@/components/Loader";
import FeedbackMsg from "@/components/FeedbackMsg";

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
      <DialogContent className="aspect-[16/9] min-w-[320px] bg-muted/75 backdrop-blur-lg rounded-lg overflow-hidden p-0">
        <div className="relative aspect-video w-full">
          {isLoading && <Loader className="w-full h-full" />}
          {isError && (
            <FeedbackMsg
              msg="Trailer não encontrado."
              type="error"
              className="h-full"
            />
          )}
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
