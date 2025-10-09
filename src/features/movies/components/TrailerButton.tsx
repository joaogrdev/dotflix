import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Movie } from "@/types/Movie";
import { Play } from "lucide-react";
import { useState } from "react";
import TrailerPlayer from "./TrailerPlayer";

const PlayButton = ({
  movie,
  clicked, // novo prop vindo do MovieCard
}: {
  movie: Movie;
  clicked?: boolean;
}) => {
  const [isTrailerPlayerOpen, setIsTrailerPlayerOpen] = useState(false);

  return (
    <>
      <Button
        className={cn(
          "hidden group-hover:flex size-9 items-center justify-center absolute top-1 left-1 mobile:top-1/2 mobile:left-1/2 mobile:-translate-x-1/2 mobile:-translate-y-1/2 p-1 rounded-lg border border-lightest text-lightest bg-transparent transition-all duration-300 hover:bg-transparent hover:scale-110",
          clicked && "flex"
        )}
        onClick={() => setIsTrailerPlayerOpen(true)}
        title="Assistir trailer"
      >
        <Play />
      </Button>

      {isTrailerPlayerOpen && (
        <TrailerPlayer
          onClose={() => setIsTrailerPlayerOpen(false)}
          movie={movie}
        />
      )}
    </>
  );
};

export default PlayButton;
