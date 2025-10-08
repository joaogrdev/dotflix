import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Movie } from "@/types/Movie";
import { Heart } from "lucide-react";

const FavoriteButton = ({ movie }: { movie: Movie }) => {
  const isFavorite = movie.id % 2 === 1;

  return (
    <Button
      className={cn(
        "absolute top-0 right-0 p-2 rounded-none rounded-bl-lg bg-muted hover:bg-initial hover:scale-120 transition-all duration-300"
      )}
      title="Favoritar"
      onClick={() => alert("Favoritar")}
    >
      <Heart
        className={cn("size-5", {
          "fill-contrast text-contrast": isFavorite,
          "text-primary": !isFavorite,
        })}
      />
    </Button>
  );
};

export default FavoriteButton;
